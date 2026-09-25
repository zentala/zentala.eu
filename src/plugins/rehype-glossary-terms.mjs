// rehype-glossary-terms — auto-marks the first occurrence per page of a
// governed glossary term (IA §7, D10). Data source: the glossary content
// collection, read straight off disk (gray-matter) so this runs inside
// Astro's markdown/MDX rehype pipeline without depending on `astro:content`
// being ready at that stage.
//
// Output matches TermRef.astro exactly: an `<a class="term" href data-term
// aria-describedby>` plus a sibling `<div class="term-card" popover="manual">`
// card, built from the same `cardContent()` decision function TermRef.astro
// imports. The runtime behaviour (hover delay, keyboard, touch, Esc,
// viewport flip) is one script, `TERM_TOOLTIP_SCRIPT`, injected once per
// page the first time this plugin marks a term — pages that only use the
// manual `<T>` component get the same script from TermRef.astro itself; the
// guard in the script makes double-inclusion harmless.
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import matter from 'gray-matter';

const GLOSSARY_DIR = fileURLToPath(new URL('../content/glossary/', import.meta.url));
const DOCS_DIR = fileURLToPath(new URL('../content/docs/', import.meta.url));

const SKIP_TAGS = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'code', 'pre', 'blockquote']);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Strips the #anchor from an href, for matching a glossary entry's home page. */
function hrefPath(href) {
  return href.split('#')[0];
}

/** Loads every glossary entry once per build; cached at module scope. */
let cachedEntries = null;
export function loadGlossaryEntries() {
  if (cachedEntries) return cachedEntries;
  cachedEntries = readdirSync(GLOSSARY_DIR)
    .filter((name) => name.endsWith('.md'))
    .map((name) => {
      const slug = name.replace(/\.md$/, '');
      const { data, content } = matter(readFileSync(path.join(GLOSSARY_DIR, name), 'utf8'));
      return { slug, body: content.trim(), ...data };
    });
  return cachedEntries;
}

/**
 * Pure decision function for what a Term card shows, shared by TermRef.astro
 * (Astro JSX) and this plugin (hast nodes) so the two never drift (IA §7).
 */
export function cardContent(entry) {
  if (entry.status === 'needs-definition') {
    return { body: 'Not defined yet — the chapter is the definition.', source: null };
  }
  if (entry.status === 'external') {
    return {
      body: entry.definition ?? null,
      source: entry.source ? `Defined outside this site — ${entry.source}` : 'Defined outside this site',
    };
  }
  return { body: entry.definition ?? '', source: null };
}

/** Maps a content-collection file path to its public route, mirroring the
 * site's [...slug].astro routing (book/<slug> under /book, why/manifesto at
 * their own top-level routes). */
function pageSlugFromFile(filePath) {
  const rel = path.relative(DOCS_DIR, filePath).replace(/\\/g, '/');
  const noExt = rel.replace(/\.mdx?$/, '');
  if (noExt.startsWith('book/')) return `/book/${noExt.slice('book/'.length)}`;
  if (noExt === 'why') return '/why';
  if (noExt === 'manifesto') return '/manifesto';
  return `/${noExt}`;
}

function buildCard(entry, cardId) {
  const { body, source } = cardContent(entry);
  const children = [{ type: 'element', tagName: 'h4', properties: { className: ['term-card__term'] }, children: [{ type: 'text', value: entry.term }] }];
  if (body) {
    children.push({ type: 'element', tagName: 'p', properties: { className: ['term-card__body'] }, children: [{ type: 'text', value: body }] });
  }
  if (source) {
    children.push({ type: 'element', tagName: 'p', properties: { className: ['term-card__source'] }, children: [{ type: 'text', value: source }] });
  }
  children.push({
    type: 'element',
    tagName: 'p',
    properties: { className: ['term-card__links'] },
    children: [
      { type: 'element', tagName: 'a', properties: { className: ['term-card__read'], href: entry.href }, children: [{ type: 'text', value: 'Read where it is argued →' }] },
      { type: 'text', value: ' ' },
      { type: 'element', tagName: 'a', properties: { className: ['term-card__all'], href: '/glossary' }, children: [{ type: 'text', value: 'All terms' }] },
    ],
  });
  return {
    type: 'element',
    tagName: 'div',
    properties: { className: ['term-card'], id: cardId, popover: 'manual', role: 'status' },
    children,
  };
}

function scriptNode() {
  return { type: 'element', tagName: 'script', properties: {}, children: [{ type: 'text', value: TERM_TOOLTIP_SCRIPT }] };
}

export default function rehypeGlossaryTerms() {
  return (tree, file) => {
    const frontmatter = file.data?.astro?.frontmatter ?? {};
    if (frontmatter.kind === 'manifesto') return;

    const filePath = file.path ?? file.history?.[0];
    const pageSlug = filePath ? pageSlugFromFile(filePath) : null;

    const entries = loadGlossaryEntries().filter((e) => e.autolink);
    const used = new Set();
    const candidates = entries
      .filter((e) => hrefPath(e.href) !== pageSlug)
      .flatMap((e) => [e.term, ...(e.aliases ?? [])].map((pattern) => ({ entry: e, pattern })))
      .sort((a, b) => b.pattern.length - a.pattern.length);

    let markedAny = false;

    function processText(value) {
      if (!value.trim()) return [{ type: 'text', value }];
      const active = candidates.filter((c) => !used.has(c.entry.slug));
      let best = null;
      for (const c of active) {
        const re = new RegExp(`\\b${escapeRegExp(c.pattern)}\\b`, 'i');
        const m = re.exec(value);
        if (m && (!best || m.index < best.index)) best = { index: m.index, length: m[0].length, ...c };
      }
      if (!best) return [{ type: 'text', value }];

      used.add(best.entry.slug);
      markedAny = true;
      const cardId = `term-card-${best.entry.slug}`;
      const before = value.slice(0, best.index);
      const after = value.slice(best.index + best.length);
      const link = {
        type: 'element',
        tagName: 'a',
        properties: { className: ['term'], href: best.entry.href, 'data-term': best.entry.slug, 'aria-describedby': cardId },
        children: [{ type: 'text', value: value.slice(best.index, best.index + best.length) }],
      };
      const card = buildCard(best.entry, cardId);

      const out = [];
      if (before) out.push({ type: 'text', value: before });
      out.push(link, card);
      if (after) out.push(...processText(after));
      return out;
    }

    function walk(node) {
      if (!node.children) return;
      const next = [];
      for (const child of node.children) {
        if (child.type === 'element' && SKIP_TAGS.has(child.tagName)) {
          next.push(child);
          continue;
        }
        if (child.type === 'text') {
          next.push(...processText(child.value));
          continue;
        }
        walk(child);
        next.push(child);
      }
      node.children = next;
    }

    walk(tree);
    if (markedAny) tree.children.push(scriptNode());
  };
}

// ~40 lines of behaviour (IA §7): 650ms hover delay, 300ms leave grace,
// keyboard focus/Esc, touch first-tap-opens/second-tap-follows, viewport
// flip, reduced motion = no fade (handled in global.scss, not here), no-JS
// = plain link (this script is entirely progressive enhancement). Exported
// so TermRef.astro can inject the identical script for pages that only use
// manual `<T>` markup.
export const TERM_TOOLTIP_SCRIPT = `(() => {
  if (window.__termTooltipInit) return;
  window.__termTooltipInit = true;
  const HOVER_DELAY = 650;
  const LEAVE_GRACE = 300;
  let openCard = null, showTimer = null, hideTimer = null, lastTap = null;

  function cardFor(link) {
    const id = link.getAttribute('aria-describedby');
    return id ? document.getElementById(id) : null;
  }
  function position(link, card) {
    const rect = link.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    let top = rect.bottom + 8;
    let left = rect.left;
    if (left + cardRect.width > window.innerWidth - 8) left = Math.max(8, window.innerWidth - cardRect.width - 8);
    if (top + cardRect.height > window.innerHeight - 8) top = rect.top - cardRect.height - 8;
    card.style.position = 'fixed';
    card.style.top = Math.max(8, top) + 'px';
    card.style.left = Math.max(8, left) + 'px';
  }
  function open(link) {
    const card = cardFor(link);
    if (!card) return;
    if (openCard && openCard !== card) close(openCard);
    clearTimeout(hideTimer);
    card.showPopover?.();
    position(link, card);
    openCard = card;
  }
  function close(card) {
    if (!card) return;
    card.hidePopover?.();
    if (openCard === card) openCard = null;
  }
  function scheduleOpen(link) { clearTimeout(showTimer); showTimer = setTimeout(() => open(link), HOVER_DELAY); }
  function scheduleClose(card) { clearTimeout(hideTimer); hideTimer = setTimeout(() => close(card), LEAVE_GRACE); }

  document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('a.term');
    if (link) { clearTimeout(hideTimer); scheduleOpen(link); return; }
    if (e.target.closest('.term-card')) clearTimeout(hideTimer);
  });
  document.addEventListener('mouseout', (e) => {
    const link = e.target.closest('a.term');
    if (link) { clearTimeout(showTimer); const c = cardFor(link); if (c) scheduleClose(c); }
    const card = e.target.closest('.term-card');
    if (card) scheduleClose(card);
  });
  document.addEventListener('focusin', (e) => { const link = e.target.closest('a.term'); if (link) scheduleOpen(link); });
  document.addEventListener('focusout', (e) => { const link = e.target.closest('a.term'); if (link) { const c = cardFor(link); if (c) scheduleClose(c); } });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && openCard) close(openCard); });
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a.term');
    if (!link || !('ontouchstart' in window)) return;
    const card = cardFor(link);
    if (!card) return;
    if (!card.matches(':popover-open')) { e.preventDefault(); open(link); lastTap = link; return; }
    if (lastTap !== link) { e.preventDefault(); open(link); lastTap = link; }
  });
  document.addEventListener('pointerdown', (e) => {
    if (!openCard) return;
    if (e.target.closest('.term-card') || e.target.closest('a.term')) return;
    close(openCard);
  });
})();`;
