// Content audit: checks the production build (dist/) against the content sources.
// Reports links to draft or missing pages, dead external links, orphan pages and drafts.
// Usage: astro build && node scripts/content-audit.mjs [--no-external] [--out <file.md>]
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';

const ROOT = process.cwd();
const DIST = join(ROOT, 'dist');
const CONTENT = join(ROOT, 'src/content');
const SOURCE_DIRS = ['src/content', 'src/pages', 'src/components', 'src/layouts'].map((d) => join(ROOT, d));
const args = process.argv.slice(2);
const CHECK_EXTERNAL = !args.includes('--no-external');
const OUT = args.includes('--out') ? args[args.indexOf('--out') + 1] : null;
const EXTERNAL_CONCURRENCY = 8;
const EXTERNAL_TIMEOUT_MS = 10000;

function walk(dir, exts) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return walk(p, exts);
    return exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}

const rel = (p) => relative(ROOT, p).split(sep).join('/');
const normalize = (href) => {
  const path = href.split(/[?#]/)[0].replace(/\/index\.html$/, '').replace(/\/$/, '');
  return path === '' ? '/' : path.toLowerCase();
};

/** Every route the production build actually serves. */
function builtRoutes() {
  if (!existsSync(DIST)) throw new Error('dist/ missing — run the build first');
  const routes = new Set();
  for (const f of walk(DIST, ['.html', '.xml', '.pdf', '.png', '.jpg', '.svg', '.webp', '.ico', '.txt'])) {
    const r = '/' + relative(DIST, f).split(sep).join('/');
    routes.add(normalize(r.endsWith('.html') ? r.replace(/(\/index)?\.html$/, '') : r));
  }
  return routes;
}

function frontmatter(text) {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  const fm = m ? m[1] : '';
  const get = (k) => (fm.match(new RegExp(`^${k}:\\s*["']?(.*?)["']?\\s*$`, 'm')) || [])[1];
  return { title: get('title'), draft: get('draft') === 'true' };
}

/** Content entries with the routes they would get when published. */
function contentEntries() {
  return walk(CONTENT, ['.md', '.mdx']).map((file) => {
    const id = relative(CONTENT, file).split(sep).join('/').replace(/\.mdx?$/, '');
    const [collection, ...rest] = id.split('/');
    const slug = rest.join('/').toLowerCase().replace(/\/index$/, '');
    const routes = [];
    if (collection === 'docs') {
      routes.push(normalize(`/docs/${slug}`));
      if (slug.startsWith('book/')) routes.push(normalize(`/${slug}`));
    } else routes.push(normalize(`/${collection}/${slug}`));
    return { file: rel(file), ...frontmatter(readFileSync(file, 'utf8')), routes };
  });
}

const LINK_RES = [/\]\(([^)\s]+)\)/g, /href\s*=\s*["']([^"'{}]+)["']/g, /href:\s*["']([^"']+)["']/g];

function linksIn(file) {
  const lines = readFileSync(file, 'utf8').split('\n');
  const out = [];
  lines.forEach((line, i) => {
    for (const re of LINK_RES) for (const m of line.matchAll(re)) out.push({ href: m[1], at: `${rel(file)}:${i + 1}` });
  });
  return out;
}

async function checkExternal(url) {
  const attempt = async (method) => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), EXTERNAL_TIMEOUT_MS);
    try {
      const res = await fetch(url, { method, redirect: 'follow', signal: ctrl.signal, headers: { 'user-agent': 'Mozilla/5.0 content-audit' } });
      return res.status;
    } finally {
      clearTimeout(t);
    }
  };
  try {
    const s = await attempt('HEAD');
    return s < 400 ? s : await attempt('GET');
  } catch (e) {
    try { return await attempt('GET'); } catch (e2) { return `error: ${e2.cause?.code || e2.name}`; }
  }
}

async function mapLimit(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    while (next < items.length) { const i = next++; results[i] = await fn(items[i]); }
  }));
  return results;
}

async function main() {
  const routes = builtRoutes();
  const entries = contentEntries();
  const draftByRoute = new Map(entries.filter((e) => e.draft).flatMap((e) => e.routes.map((r) => [r, e])));
  const links = SOURCE_DIRS.flatMap((d) => walk(d, ['.md', '.mdx', '.astro', '.ts'])).flatMap(linksIn);

  const internal = links.filter((l) => l.href.startsWith('/') && !l.href.startsWith('//'));
  // Bare origins are preconnect/dns-prefetch hints (fonts.googleapis.com), not links to a page.
  const external = links.filter(
    (l) => /^https?:\/\//.test(l.href) && !/localhost|127\.0\.0\.1/.test(l.href) && new URL(l.href).pathname !== '/'
  );
  const toDraft = [], missing = [];
  for (const l of internal) {
    const r = normalize(l.href);
    if (routes.has(r)) continue;
    (draftByRoute.has(r) ? toDraft : missing).push({ ...l, draft: draftByRoute.get(r)?.file });
  }

  // Orphans: built pages that no rendered page links to.
  const incoming = new Set();
  for (const f of walk(DIST, ['.html'])) {
    for (const m of readFileSync(f, 'utf8').matchAll(/href="(\/[^"]*)"/g)) {
      const self = normalize('/' + relative(DIST, f).split(sep).join('/'));
      if (normalize(m[1]) !== self) incoming.add(normalize(m[1]));
    }
  }
  const pages = [...routes].filter((r) => !/\.\w+$/.test(r) && r !== '/' && r !== '/404');
  const orphans = pages.filter((r) => !incoming.has(r)).sort();

  let deadExternal = [];
  const uniqueExternal = [...new Set(external.map((l) => l.href))];
  if (CHECK_EXTERNAL) {
    const statuses = await mapLimit(uniqueExternal, EXTERNAL_CONCURRENCY, checkExternal);
    const bad = new Map(uniqueExternal.map((u, i) => [u, statuses[i]]).filter(([, s]) => typeof s !== 'number' || s >= 400));
    deadExternal = external
      .filter((l) => bad.has(l.href))
      .map((l) => ({ ...l, status: bad.get(l.href) === 403 ? '403 (bot block? check by hand)' : bad.get(l.href) }));
  }
  const drafts = entries.filter((e) => e.draft);

  if (routes.size === 0 || entries.length === 0 || links.length === 0) {
    console.error(`CHECK_FAILED: nothing scanned (routes=${routes.size}, entries=${entries.length}, links=${links.length})`);
    process.exit(1);
  }

  const table = (rows, head, fmt) => rows.length ? [`| ${head.join(' | ')} |`, `|${head.map(() => '---').join('|')}|`, ...rows.map((r) => `| ${fmt(r).join(' | ')} |`)].join('\n') : '_none_';
  const report = [
    `# Content audit — ${new Date().toISOString().slice(0, 10)}`,
    '',
    '## TLDR',
    `Scanned ${routes.size} built routes, ${entries.length} content files, ${links.length} links (${uniqueExternal.length} unique external${CHECK_EXTERNAL ? '' : ', NOT checked'}).`,
    `Found ${toDraft.length} links to draft pages, ${missing.length} links to missing pages, ${CHECK_EXTERNAL ? deadExternal.length : 'unknown'} dead external links, ${orphans.length} orphan pages, ${drafts.length} drafts.`,
    '',
    `## Links to draft pages (${toDraft.length}) — 404 in production`,
    table(toDraft, ['Link', 'Where', 'Draft file'], (l) => [l.href, l.at, l.draft]),
    '',
    `## Links to missing pages (${missing.length})`,
    table(missing, ['Link', 'Where'], (l) => [l.href, l.at]),
    '',
    `## Dead external links (${CHECK_EXTERNAL ? deadExternal.length : 'unknown — skipped'})`,
    table(deadExternal, ['URL', 'Status', 'Where'], (l) => [l.href, l.status, l.at]),
    '',
    `## Orphan pages (${orphans.length}) — built, but no page links to them`,
    orphans.length ? orphans.map((r) => `- ${r}`).join('\n') : '_none_',
    '',
    `## Drafts (${drafts.length}) — not published`,
    table(drafts, ['File', 'Title'], (e) => [e.file, e.title || '?']),
    '',
  ].join('\n');

  if (OUT) { mkdirSync(dirname(OUT), { recursive: true }); writeFileSync(OUT, report); console.log(`report: ${OUT}`); }
  else console.log(report);
  console.log(report.split('\n').slice(3, 5).join('\n'));
}

main().catch((e) => { console.error(`CHECK_FAILED: ${e.message}`); process.exit(1); });
