// Content audit: checks the production build (dist/) against the content sources.
// Reports links to draft or missing pages, dead external links, orphan pages and drafts,
// plus the E006-T14 "shape" checks from .plan/INFORMATION-ARCHITECTURE.md §9's closing
// paragraph and §10's last row: two-click depth, layer/kind coverage, glossary hrefs,
// no /docs/ links in chapters, no built link to a retired redirect-table path, and
// concept -> canonical-href coverage.
// Usage: astro build && node scripts/content-audit.mjs [--no-external] [--out <file.md>]
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import matter from 'gray-matter';

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

/** Meta description per built HTML page, for duplicate/missing detection (E004-T04). */
function metaDescriptions() {
  const byRoute = new Map();
  for (const f of walk(DIST, ['.html'])) {
    const route = normalize('/' + relative(DIST, f).split(sep).join('/'));
    const html = readFileSync(f, 'utf8');
    const m = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
    byRoute.set(route, m ? m[1].trim() : '');
  }
  return byRoute;
}

// --- IA-shape checks (E006-T14) -----------------------------------------

const BOOK_DIR = join(CONTENT, 'docs/book');
/** Published (non-draft) chapter files — .sidecar.* excluded, matches link-graph.mjs. */
function publishedChapterFiles() {
  return walk(BOOK_DIR, ['.md', '.mdx'])
    .filter((f) => !f.includes('.sidecar.'))
    .filter((f) => !matter(readFileSync(f, 'utf8')).data.draft);
}
function topLevelDocFile(slug) {
  return ['.md', '.mdx'].map((ext) => join(CONTENT, 'docs', `${slug}${ext}`)).find(existsSync) ?? null;
}

/** (a) Two-click depth from `/`, via src/data/link-graph.json's own edges.
 * A missing/invalid/empty graph is reported as a structural FAIL, not a
 * silent zero — the depth check has nothing to compute without it. */
function twoClickDepthCheck() {
  const graphFile = join(ROOT, 'src/data/link-graph.json');
  if (!existsSync(graphFile)) {
    return { ok: false, scanned: 0, violations: [], reason: 'src/data/link-graph.json missing — run `node scripts/link-graph.mjs`' };
  }
  let graph;
  try {
    graph = JSON.parse(readFileSync(graphFile, 'utf8'));
  } catch (e) {
    return { ok: false, scanned: 0, violations: [], reason: `src/data/link-graph.json invalid JSON: ${e.message}` };
  }
  const nodes = Array.isArray(graph.nodes) ? graph.nodes : [];
  const edges = Array.isArray(graph.edges) ? graph.edges : [];
  if (nodes.length === 0 || !nodes.some((n) => n.route === '/')) {
    return { ok: false, scanned: nodes.length, violations: [], reason: 'src/data/link-graph.json has no nodes, or no "/" node' };
  }
  const adjacency = new Map(nodes.map((n) => [n.route, []]));
  for (const e of edges) if (adjacency.has(e.from)) adjacency.get(e.from).push(e.to);
  const depth = new Map([['/', 0]]);
  const queue = ['/'];
  while (queue.length) {
    const cur = queue.shift();
    for (const next of adjacency.get(cur) ?? []) {
      if (!depth.has(next)) { depth.set(next, depth.get(cur) + 1); queue.push(next); }
    }
  }
  const violations = nodes
    .filter((n) => n.route !== '/')
    .map((n) => ({ route: n.route, depth: depth.has(n.route) ? depth.get(n.route) : null }))
    .filter((n) => n.depth === null || n.depth > 2);
  return { ok: true, scanned: nodes.length, violations };
}

/** (b) `layer`+`kind` on every published book/* entry; `kind` on why/manifesto. */
function layerKindCheck() {
  const files = [...publishedChapterFiles(), topLevelDocFile('why'), topLevelDocFile('manifesto')].filter(Boolean);
  const violations = [];
  for (const file of files) {
    const { data } = matter(readFileSync(file, 'utf8'));
    const isBook = rel(file).includes('/book/');
    const missing = [];
    if (isBook && !data.layer) missing.push('layer');
    if (!data.kind) missing.push('kind');
    if (missing.length) violations.push({ at: `${rel(file)}:1`, missing: missing.join(', ') });
  }
  return { scanned: files.length, violations };
}

/** (c) Every `/glossary#id` href resolves to a real id in the built glossary page. */
function glossaryHrefCheck(links) {
  const glossaryLinks = links.filter((l) => /^\/glossary#./.test(l.href));
  const glossaryHtmlPath = join(DIST, 'glossary', 'index.html');
  const glossaryHtml = existsSync(glossaryHtmlPath) ? readFileSync(glossaryHtmlPath, 'utf8') : null;
  const violations = glossaryLinks
    .filter((l) => {
      const id = l.href.split('#')[1];
      if (!glossaryHtml) return true; // a glossary href with no glossary page is broken by definition
      return !new RegExp(`id=["']${id}["']`).test(glossaryHtml);
    })
    .map((l) => ({ at: l.at, href: l.href }));
  return { scanned: glossaryLinks.length, violations };
}

/** (d) No `/docs/` link in a chapter, /why or /manifesto (IA §6 rule 3). */
function noDocsLinkCheck() {
  const files = [...publishedChapterFiles(), topLevelDocFile('why'), topLevelDocFile('manifesto')].filter(Boolean);
  const violations = files.flatMap(linksIn).filter((l) => l.href.startsWith('/docs/'));
  return { scanned: files.length, violations };
}

/** (e) No built HTML links a path that astro.config.mjs's `redirects` table retires
 * (IA §9's closing paragraph). Reads the config module directly so this check stays
 * true to the real table instead of a second hand-kept copy of it. */
async function redirectTableLinkCheck() {
  let redirects;
  try {
    const mod = await import(pathToFileURL(join(ROOT, 'astro.config.mjs')).href);
    redirects = mod.default?.redirects;
  } catch (e) {
    return { scanned: 0, violations: [], reason: `could not read astro.config.mjs redirects: ${e.message}` };
  }
  if (!redirects || Object.keys(redirects).length === 0) {
    return { scanned: 0, violations: [], reason: 'astro.config.mjs has no (or an empty) redirects table' };
  }
  const redirectPaths = new Set(Object.keys(redirects).map(normalize));
  const violations = [];
  for (const f of walk(DIST, ['.html'])) {
    const html = readFileSync(f, 'utf8');
    const self = normalize('/' + relative(DIST, f).split(sep).join('/'));
    for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
      const target = normalize(m[1]);
      if (redirectPaths.has(target)) violations.push({ at: rel(f), href: m[1], from: self });
    }
  }
  return { scanned: redirectPaths.size, violations };
}

/** (f) A chapter that declares a concept links its canonical href somewhere in its
 * body (IA §6 rule 5's "who-captures-the-gains" case, generalised). `concepts`
 * frontmatter does not exist yet (E006-T05 pending) — 0 chapters declare any
 * concept today, so this is a legitimate 0/0, not a failure. */
function conceptCanonicalCheck() {
  // The one canonical mapping IA §6 rule 5 names explicitly, kept here until
  // E006-T05/T12 land a real concept -> href table (src/AGENTS.md §7).
  const CANONICAL_HREF = { 'who-captures-the-gains': '/book/cheap-is-wealth' };
  const files = publishedChapterFiles();
  let scanned = 0;
  const violations = [];
  for (const file of files) {
    const { data, content } = matter(readFileSync(file, 'utf8'));
    const concepts = Array.isArray(data.concepts) ? data.concepts : [];
    if (concepts.length === 0) continue;
    scanned += 1;
    for (const concept of concepts) {
      const canonical = CANONICAL_HREF[concept] ?? `/glossary#${concept}`;
      if (!content.includes(canonical)) violations.push({ at: `${rel(file)}:1`, concept, canonical });
    }
  }
  return { scanned, violations };
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

  const descByRoute = metaDescriptions();
  const missingDescriptions = [...descByRoute].filter(([, d]) => !d).map(([route]) => route).sort();
  const byDescription = new Map();
  for (const [route, d] of descByRoute) {
    if (!d) continue;
    if (!byDescription.has(d)) byDescription.set(d, []);
    byDescription.get(d).push(route);
  }
  const duplicateDescriptions = [...byDescription.entries()].filter(([, rs]) => rs.length > 1);

  // --- IA-shape checks (E006-T14) ---
  const depthCheck = twoClickDepthCheck();
  const layerKind = layerKindCheck();
  const glossaryHrefs = glossaryHrefCheck(links);
  const docsLinks = noDocsLinkCheck();
  const redirectLinks = await redirectTableLinkCheck();
  const conceptLinks = conceptCanonicalCheck();

  // A structural failure means a check had nothing to verify against (a
  // required input file was missing/invalid/empty) — different from a
  // check that ran cleanly and found 0 violations. "Zero processed files
  // = failure" (E006-T14 step 4).
  const structuralFailures = [
    !depthCheck.ok && `two-click depth: ${depthCheck.reason}`,
    layerKind.scanned === 0 && 'layer/kind: 0 published book/why/manifesto files scanned',
    docsLinks.scanned === 0 && 'no-/docs/-links: 0 published book/why/manifesto files scanned',
    redirectLinks.scanned === 0 && `redirect-table links: ${redirectLinks.reason ?? '0 redirect entries scanned'}`,
  ].filter(Boolean);

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
    `Found ${toDraft.length} links to draft pages, ${missing.length} links to missing pages, ${CHECK_EXTERNAL ? deadExternal.length : 'unknown'} dead external links, ${orphans.length} orphan pages, ${drafts.length} drafts, ${missingDescriptions.length} pages missing a meta description, ${duplicateDescriptions.length} duplicate descriptions.`,
    `IA shape checks: ${structuralFailures.length ? `**${structuralFailures.length} FAILED** (${structuralFailures.join('; ')})` : 'ran'} — ${depthCheck.violations.length} pages over two clicks from /, ${layerKind.violations.length} entries missing layer/kind, ${glossaryHrefs.violations.length}/${glossaryHrefs.scanned} broken glossary hrefs, ${docsLinks.violations.length} /docs/ links in chapters, ${redirectLinks.violations.length} built links to a retired redirect path, ${conceptLinks.violations.length}/${conceptLinks.scanned} concepts missing their canonical link.`,
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
    `## Pages missing a meta description (${missingDescriptions.length})`,
    missingDescriptions.length ? missingDescriptions.map((r) => `- ${r}`).join('\n') : '_none_',
    '',
    `## Duplicate meta descriptions (${duplicateDescriptions.length})`,
    duplicateDescriptions.length
      ? duplicateDescriptions.map(([d, rs]) => `- "${d}" — ${rs.join(', ')}`).join('\n')
      : '_none_',
    '',
    '## IA shape checks (E006-T14)',
    '',
    `### Two-click depth from / (${depthCheck.ok ? `${depthCheck.violations.length} of ${depthCheck.scanned} pages` : 'FAILED'})`,
    depthCheck.ok
      ? table(depthCheck.violations, ['Route', 'Clicks from /'], (v) => [v.route, v.depth ?? 'unreachable'])
      : `**FAIL** — ${depthCheck.reason}`,
    '',
    `### \`layer\`/\`kind\` frontmatter (${layerKind.violations.length} of ${layerKind.scanned} entries missing one)`,
    table(layerKind.violations, ['File', 'Missing'], (v) => [v.at, v.missing]),
    '',
    `### Glossary hrefs resolve (${glossaryHrefs.violations.length} of ${glossaryHrefs.scanned} broken)`,
    table(glossaryHrefs.violations, ['Href', 'Where'], (v) => [v.href, v.at]),
    '',
    `### No \`/docs/\` links in chapters, /why or /manifesto (${docsLinks.violations.length} found, ${docsLinks.scanned} files scanned)`,
    table(docsLinks.violations, ['Link', 'Where'], (v) => [v.href, v.at]),
    '',
    `### No built link to a retired redirect-table path (${redirectLinks.violations.length} found${redirectLinks.reason ? ` — ${redirectLinks.reason}` : ''})`,
    table(redirectLinks.violations, ['Link', 'From page', 'Where'], (v) => [v.href, v.from, v.at]),
    '',
    `### Concepts link their canonical href (${conceptLinks.violations.length} of ${conceptLinks.scanned} concept declarations missing one)`,
    table(conceptLinks.violations, ['File', 'Concept', 'Expected canonical href'], (v) => [v.at, v.concept, v.canonical]),
    '',
  ].join('\n');

  if (OUT) { mkdirSync(dirname(OUT), { recursive: true }); writeFileSync(OUT, report); console.log(`report: ${OUT}`); }
  else console.log(report);
  console.log(report.split('\n').slice(3, 5).join('\n'));

  if (structuralFailures.length) {
    console.error(`CHECK_FAILED: IA shape checks could not run — ${structuralFailures.join('; ')}`);
    process.exit(1);
  }
}

main().catch((e) => { console.error(`CHECK_FAILED: ${e.message}`); process.exit(1); });
