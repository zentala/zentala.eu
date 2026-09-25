// Link graph of the core surface, per .plan/INFORMATION-ARCHITECTURE.md §8.2.
// Runs before `astro build`, writes src/data/link-graph.json (gitignored — generated).
// Nodes: top-level pages + chapters + commentary entries (when public).
// Edges: internal links found in content-collection entry bodies, src/pages/*.astro
// (top level only) and src/lib/vision-content.ts — header/footer/generated-footer
// links are excluded by construction (neither source is scanned).
//
// Fails loudly: fewer nodes than published chapters, zero edges, or a content dir
// with no chapters at all (see --content-dir / LINK_GRAPH_CONTENT_DIR) all exit 1.
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const flagValue = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);

const IS_PREVIEW = process.env.SITE_PREVIEW === 'true';
const COMMENTARY_PUBLIC = process.env.COMMENTARY_PUBLIC === 'true' || IS_PREVIEW;

// `resolve` (not `join`) so an absolute override path is used as-is instead of
// being nested under ROOT; a relative override still resolves against cwd.
const contentDirOverride = flagValue('--content-dir') || process.env.LINK_GRAPH_CONTENT_DIR;
const DOCS_DIR = contentDirOverride ? resolve(contentDirOverride) : join(ROOT, 'src/content/docs');
const BOOK_DIR = join(DOCS_DIR, 'book');
const COMMENTARY_DIR = join(ROOT, 'src/content/commentary');
const PAGES_DIR = join(ROOT, 'src/pages');
const VISION_CONTENT_FILE = join(ROOT, 'src/lib/vision-content.ts');
const OUT_FILE = join(ROOT, 'src/data/link-graph.json');

const rel = (p) => relative(ROOT, p).split(sep).join('/');
const fail = (msg) => {
  console.error(`LINK_GRAPH_FAILED: ${msg}`);
  process.exit(1);
};

function listFiles(dir, exts) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .map((name) => join(dir, name))
    .filter((p) => statSync(p).isFile() && exts.some((e) => p.endsWith(e)));
}

// --- Load chapters (book/*.md, *.mdx; excludes .sidecar files and drafts unless preview) ---
if (!existsSync(BOOK_DIR)) {
  fail(`no chapters directory at ${rel(BOOK_DIR)} — pointed at an empty or wrong content dir?`);
}
const chapterFiles = listFiles(BOOK_DIR, ['.md', '.mdx']).filter((p) => !p.includes('.sidecar.'));
if (chapterFiles.length === 0) {
  fail(`no chapter files found under ${rel(BOOK_DIR)} — pointed at an empty content dir?`);
}

const nodes = new Map(); // id -> { id, title, layer, kind, route, inbound, outbound, _source }

function addNode({ id, title, layer = null, kind = null, order = null, route, source }) {
  nodes.set(route, { id, title, layer, kind, order, route, inbound: 0, outbound: 0, _source: source });
}

let publishedChapterCount = 0;
const chapterSources = []; // { route, file, raw body for edge scanning }

for (const file of chapterFiles) {
  const raw = readFileSync(file, 'utf8');
  const { data, content } = matter(raw);
  const draft = Boolean(data.draft);
  if (draft && !IS_PREVIEW) continue;
  const slug = file
    .slice(BOOK_DIR.length + 1)
    .replace(/\.mdx?$/, '');
  const route = `/book/${slug}`;
  publishedChapterCount += 1;
  addNode({
    id: `book/${slug}`,
    title: data.title ?? slug,
    layer: data.layer ?? null,
    kind: data.kind ?? null,
    order: typeof data.order === 'number' ? data.order : null,
    route,
    source: file,
  });
  chapterSources.push({ route, content });
}

// --- Top-level pages (IA §1.1). Title/route hardcoded; body scanned from the docs
// collection entry when one exists (why, manifesto), otherwise from src/pages/*.astro. ---
const topLevelEntries = [
  { id: 'home', title: 'Home', route: '/', docEntry: null },
  { id: 'vision', title: 'Vision', route: '/vision', docEntry: null },
  { id: 'why', title: 'The Objections, Answered', route: '/why', docEntry: 'why' },
  { id: 'manifesto', title: 'Manifesto', route: '/manifesto', docEntry: 'manifesto' },
  { id: 'principles', title: 'Principles', route: '/principles', docEntry: null },
  { id: 'benefits', title: 'Benefits', route: '/benefits', docEntry: null },
  { id: 'support', title: 'Support', route: '/support', docEntry: null },
  { id: 'book', title: 'Chapters', route: '/book', docEntry: null },
];

const topLevelSources = []; // { route, content } for docs-collection-backed top pages

for (const page of topLevelEntries) {
  let title = page.title;
  if (page.docEntry) {
    const docFile = ['.md', '.mdx']
      .map((ext) => join(DOCS_DIR, `${page.docEntry}${ext}`))
      .find((p) => existsSync(p));
    if (docFile) {
      const raw = readFileSync(docFile, 'utf8');
      const { data, content } = matter(raw);
      title = data.title ?? title;
      topLevelSources.push({ route: page.route, content });
    }
  }
  addNode({ id: page.id, title, layer: null, kind: null, route: page.route, source: page.id });
}

// New pages not yet built in earlier waves (T09 glossary component, T14 site-map) —
// include only once they exist, so the graph never claims a route that 404s.
const glossaryPage = join(PAGES_DIR, 'glossary/index.astro');
if (existsSync(glossaryPage) || existsSync(join(PAGES_DIR, 'glossary.astro'))) {
  addNode({ id: 'glossary', title: 'Glossary', route: '/glossary', source: 'glossary' });
}
const siteMapPage = join(PAGES_DIR, 'site-map.astro');
if (existsSync(siteMapPage)) {
  addNode({ id: 'site-map', title: 'Site Map', route: '/site-map', source: 'site-map' });
}

// --- Commentary entries, when public ---
const commentarySources = [];
if (existsSync(COMMENTARY_DIR)) {
  const commentaryFiles = listFiles(COMMENTARY_DIR, ['.md', '.mdx']);
  const published = commentaryFiles.filter((file) => {
    const { data } = matter(readFileSync(file, 'utf8'));
    return !data.draft;
  });
  if (COMMENTARY_PUBLIC && published.length > 0) {
    addNode({ id: 'commentary', title: 'Commentary', route: '/commentary', source: 'commentary' });
    for (const file of published) {
      const { data, content } = matter(readFileSync(file, 'utf8'));
      const slug = file.slice(COMMENTARY_DIR.length + 1).replace(/\.mdx?$/, '');
      const route = `/commentary/${slug}`;
      addNode({
        id: `commentary/${slug}`,
        title: data.title ?? slug,
        layer: null,
        kind: null,
        route,
        source: file,
      });
      commentarySources.push({ route, content });
    }
  }
}

if (nodes.size < publishedChapterCount) {
  fail(`${nodes.size} nodes is fewer than ${publishedChapterCount} published chapters`);
}

// --- Edge extraction ---
// Markdown links `[text](/path)` and HTML/JSX `href="/path"` / `href: '/path'`.
const LINK_PATTERNS = [
  /\[[^\]]*\]\((\/[^)\s#?]*(?:[#?][^)\s]*)?)\)/g,
  /href\s*[:=]\s*["'`](\/[^"'`\s]*)["'`]/g,
];

function extractLinks(text) {
  const found = [];
  for (const pattern of LINK_PATTERNS) {
    let match;
    pattern.lastIndex = 0;
    while ((match = pattern.exec(text)) !== null) {
      found.push(match[1]);
    }
  }
  return found;
}

function normalizeRoute(href) {
  const withoutHashQuery = href.split(/[#?]/)[0];
  if (withoutHashQuery === '') return '/'; // a bare `#anchor` link — resolved via the hash below
  const trimmed = withoutHashQuery.length > 1 ? withoutHashQuery.replace(/\/$/, '') : withoutHashQuery;
  return trimmed;
}

// Top-level page files whose prose is hardcoded in the .astro file itself (not a
// content-collection entry) — mapped to the route they render, so their `href`s
// are attributed to the right node. Files not in this map (confirm, home-classic,
// search, tags — not part of the core surface) are scanned but produce no edges.
const PAGE_FILE_ROUTES = {
  'index.astro': '/',
  'why.astro': '/why',
  'manifesto.astro': '/manifesto',
  'principles.astro': '/principles',
  'benefits.astro': '/benefits',
  'support.astro': '/support',
};

const edgeSources = [
  ...chapterSources,
  ...topLevelSources,
  ...commentarySources,
  ...listFiles(PAGES_DIR, ['.astro']).map((file) => ({
    route: PAGE_FILE_ROUTES[file.slice(PAGES_DIR.length + 1)] ?? null,
    content: readFileSync(file, 'utf8'),
  })),
];
// vision-content.ts is imported by both `/` and `/vision` (see its header comment);
// its chapter-linking data renders on both, so both pages get credit for the edge.
if (existsSync(VISION_CONTENT_FILE)) {
  const content = readFileSync(VISION_CONTENT_FILE, 'utf8');
  edgeSources.push({ route: '/', content }, { route: '/vision', content });
}

// Map every node's route to itself, so an edge target resolves to a node object.
const routeToNode = new Map();
for (const node of nodes.values()) {
  routeToNode.set(node.route, node);
}

const edges = []; // { from, to }
for (const source of edgeSources) {
  if (!source.route) continue; // not a core-surface page — its links are not graph edges
  const links = extractLinks(source.content);
  for (const href of links) {
    const target = normalizeRoute(href);
    const targetNode = routeToNode.get(target);
    if (!targetNode) continue;
    if (source.route === target) continue; // no self-loops
    edges.push({ from: source.route, to: target });
    targetNode.inbound += 1;
    const fromNode = routeToNode.get(source.route);
    if (fromNode) fromNode.outbound += 1;
  }
}

if (edges.length === 0) {
  fail('zero edges found — an empty graph must not render as a clean one');
}

mkdirSync(join(ROOT, 'src/data'), { recursive: true });
const graph = {
  generatedAt: new Date().toISOString(),
  nodes: Array.from(nodes.values()).map(({ _source, ...n }) => n),
  edges,
};
writeFileSync(OUT_FILE, JSON.stringify(graph, null, 2));
console.log(
  `link-graph.json written: ${graph.nodes.length} nodes, ${graph.edges.length} edges (${publishedChapterCount} published chapters)`,
);
