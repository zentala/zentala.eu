/**
 * Data for /site-map (DESIGN.md → Components → SiteMap page pattern;
 * .plan/INFORMATION-ARCHITECTURE.md §8.1). Builds the seven-column
 * wayfinding list from the content collections at build time — no
 * hand-typed slug list.
 *
 * `layer`/`kind` frontmatter (E006-T05, still pending at the time this
 * page was written) does not exist on any chapter yet. Every chapter
 * therefore falls into the "Unsorted" column until T05 lands — this is
 * the degradation IA §8.1 names explicitly ("'Unsorted' appears here too
 * if non-empty, so a misfiled chapter is visible in two places"), not a
 * bug in this helper.
 */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';
import { IS_PREVIEW } from './preview';
import { COMMENTARY_PUBLIC, getCommentary } from './commentary';

export interface SiteMapEntry {
  title: string;
  href: string;
  kind: string;
}

export interface SiteMapColumn {
  key: string;
  /** Exact label text from IA §8.1's column table. */
  label: string;
  entries: SiteMapEntry[];
}

/** Layer order per DESIGN.md/IA §8.2: "layers in frame order". */
const LAYER_ORDER = ['frame', 'language', 'digital', 'robotics', 'path'] as const;
type Layer = (typeof LAYER_ORDER)[number];

const LAYER_LABELS: Record<Layer, string> = {
  frame: 'The frame',
  language: 'Floor — one working language',
  digital: 'Middle — the digital state',
  robotics: 'Ceiling — robotics',
  path: 'How we get there',
};

// `process.cwd()`, not `import.meta.url` — Astro/Vite bundles this module
// into a chunk during `astro build`, so an `import.meta.url`-relative path
// (correct in dev) resolves to the wrong directory in the production build
// (see ~/.claude/rules/typescript.md candidate: Vite build-time module
// relocation breaks import.meta.url-relative fs paths, silently, no
// typecheck/dev-server symptom — same class of bug as the E006 backlog
// entry about PUBLISHED_PREFIXES module-scope constants).
const PAGES_DIR = join(process.cwd(), 'src/pages');

function pageExists(...candidates: string[]): boolean {
  return candidates.some((c) => existsSync(join(PAGES_DIR, c)));
}

type DocEntry = CollectionEntry<'docs'>;

function sortEntries(list: DocEntry[]): DocEntry[] {
  return [...list].sort((a, b) => {
    const orderA = (a.data as Record<string, unknown>).order;
    const orderB = (b.data as Record<string, unknown>).order;
    if (typeof orderA === 'number' && typeof orderB === 'number' && orderA !== orderB) {
      return orderA - orderB;
    }
    return a.data.title.localeCompare(b.data.title);
  });
}

function toEntry(doc: DocEntry): SiteMapEntry {
  const data = doc.data as Record<string, unknown>;
  const kind = typeof data.kind === 'string' ? data.kind : 'unclassified';
  return { title: doc.data.title, href: `/${doc.slug}`, kind };
}

/** Builds all seven required columns, plus "Unsorted" when it is non-empty. */
export async function buildSiteMapColumns(): Promise<SiteMapColumn[]> {
  const chapters = await getCollection('docs', (entry: DocEntry) => {
    const isBook = entry.id.startsWith('book/') && !entry.id.includes('.sidecar');
    return isBook && (IS_PREVIEW || !entry.data.draft);
  });

  const byLayer = new Map<Layer, DocEntry[]>();
  const unsorted: DocEntry[] = [];
  for (const chapter of chapters) {
    const layer = (chapter.data as Record<string, unknown>).layer;
    if (typeof layer === 'string' && (LAYER_ORDER as readonly string[]).includes(layer)) {
      const key = layer as Layer;
      if (!byLayer.has(key)) byLayer.set(key, []);
      byLayer.get(key)!.push(chapter);
    } else {
      unsorted.push(chapter);
    }
  }

  const startHere: SiteMapColumn = {
    key: 'start-here',
    label: 'Start here',
    entries: [
      { title: 'Overview', href: '/', kind: 'page' },
      { title: 'The three layers', href: '/vision', kind: 'page' },
      { title: 'The objections, answered', href: '/why', kind: 'page' },
      { title: 'Manifesto', href: '/manifesto', kind: 'page' },
      { title: 'Principles', href: '/principles', kind: 'page' },
      { title: 'Benefits', href: '/benefits', kind: 'page' },
      { title: 'Support', href: '/support', kind: 'page' },
    ],
  };

  const layerColumns: SiteMapColumn[] = LAYER_ORDER.map((key) => ({
    key,
    label: LAYER_LABELS[key],
    entries: sortEntries(byLayer.get(key) ?? []).map(toEntry),
  }));

  const referenceEntries: SiteMapEntry[] = [];

  const hasGlossaryPage = pageExists('glossary/index.astro', 'glossary.astro');
  if (hasGlossaryPage) {
    let termCount: number | null = null;
    try {
      // A computed specifier (not a string literal) so `astro check` does not
      // try to statically resolve a module that may not exist yet (E006-T12
      // owns src/data/glossary.ts) — the try/catch handles it at runtime.
      const glossaryModule = '../data/glossary';
      const glossary = (await import(/* @vite-ignore */ glossaryModule)) as { terms?: unknown[]; default?: unknown[] };
      const terms = glossary.terms ?? glossary.default;
      if (Array.isArray(terms)) termCount = terms.length;
    } catch {
      // src/data/glossary.ts does not exist yet (E006-T12) — show the link with no count.
    }
    referenceEntries.push({
      title: termCount !== null ? `Glossary (${termCount} terms)` : 'Glossary',
      href: '/glossary',
      kind: 'glossary',
    });
  }

  if (COMMENTARY_PUBLIC) {
    const latest = (await getCommentary()).slice(0, 3);
    referenceEntries.push({ title: 'Commentary', href: '/commentary', kind: 'index' });
    for (const entry of latest) {
      referenceEntries.push({ title: entry.data.title, href: `/commentary/${entry.slug}`, kind: 'commentary' });
    }
  }

  referenceEntries.push(
    { title: 'Ideas', href: '/docs/ideas', kind: 'archive' },
    { title: 'Articles', href: '/docs/articles', kind: 'archive' },
    { title: 'Reference', href: '/docs/reference', kind: 'archive' },
    { title: 'Privacy', href: '/privacy', kind: 'legal' },
    { title: 'Terms', href: '/terms', kind: 'legal' },
  );

  const columns = [
    startHere,
    ...layerColumns,
    { key: 'reference', label: 'Reference', entries: referenceEntries },
  ];

  if (unsorted.length > 0) {
    columns.push({ key: 'unsorted', label: 'Unsorted', entries: sortEntries(unsorted).map(toEntry) });
  }

  return columns;
}

// --- The link-graph SVG (IA §8.2) ---------------------------------------

export interface SiteGraphNode {
  id: string;
  title: string;
  href: string;
  kind: string;
  hue: string;
  size: 'sm' | 'md' | 'lg';
  x: number;
  y: number;
  orphan: boolean;
}

export interface SiteGraphEdge {
  id: string;
  from: string;
  to: string;
  path: string;
  orphanEdge: boolean;
}

export interface SiteGraphColumnHeader {
  key: string;
  label: string;
  x: number;
}

export interface SiteGraphConnections {
  href: string;
  title: string;
  links: string[];
}

export interface SiteGraph {
  width: number;
  height: number;
  columns: SiteGraphColumnHeader[];
  nodes: SiteGraphNode[];
  edges: SiteGraphEdge[];
  /** Per-node `:has()` rules that highlight a node's own edges on hover/focus. */
  hoverCss: string;
  connections: SiteGraphConnections[];
  /** Whether the preview-only orphan legend applies (IS_PREVIEW). */
  showOrphanLegend: boolean;
}

type RawGraphNode = {
  id: string;
  title: string;
  layer: string | null;
  kind: string | null;
  order?: number | null;
  route: string;
  inbound: number;
  outbound: number;
};
type RawGraphEdge = { from: string; to: string };
type RawGraph = { nodes: RawGraphNode[]; edges: RawGraphEdge[] };

/** Layer columns in frame order, plus the two IA §8.2 groups and one
 * "Unsorted" column for chapters with no `layer` yet (E006-T05 pending) —
 * the graph's equivalent of the list's "Unsorted" column, so a migration
 * gap loses no nodes instead of silently shrinking the graph. */
const GRAPH_COLUMN_ORDER = [...LAYER_ORDER, 'unsorted', 'pages', 'reference'] as const;
type GraphColumnKey = (typeof GRAPH_COLUMN_ORDER)[number];

const GRAPH_COLUMN_LABEL: Record<GraphColumnKey, string> = {
  frame: 'Frame',
  language: 'Language',
  digital: 'Digital',
  robotics: 'Robotics',
  path: 'Path',
  unsorted: 'Unsorted',
  pages: 'Pages',
  reference: 'Reference',
};

/** Fill hue per column — DESIGN.md `--card-<hue>-*` tokens (Colors → Roles).
 * `red` is deliberately excluded: it is reserved for the preview-only
 * orphan warning below, so it never doubles as a layer colour. */
const GRAPH_COLUMN_HUE: Record<GraphColumnKey, string> = {
  frame: 'blue',
  language: 'green',
  digital: 'teal',
  robotics: 'purple',
  path: 'indigo',
  unsorted: 'gray',
  pages: 'gray',
  reference: 'yellow',
};

const TOP_LEVEL_IDS = new Set(['home', 'vision', 'why', 'manifesto', 'principles', 'benefits', 'support', 'book']);

function classifyGraphColumn(node: RawGraphNode): GraphColumnKey {
  if (node.layer && (LAYER_ORDER as readonly string[]).includes(node.layer)) {
    return node.layer as GraphColumnKey;
  }
  if (node.id.startsWith('book/')) return 'unsorted';
  if (TOP_LEVEL_IDS.has(node.id)) return 'pages';
  return 'reference'; // glossary, site-map, commentary, commentary/*
}

/** Node size in three discrete steps, per IA §8.2 ("three steps, not continuous"). */
function sizeStep(inbound: number): 'sm' | 'md' | 'lg' {
  if (inbound >= 6) return 'lg';
  if (inbound >= 2) return 'md';
  return 'sm';
}

const COLUMN_WIDTH = 148;
const ROW_HEIGHT = 40;
const HEADER_HEIGHT = 32;
const TOP_PAD = 14;

/** Reads `src/data/link-graph.json` and lays out a deterministic SVG graph.
 * Returns `null` when the file is missing or empty so the page can render a
 * fallback instead of crashing the build. */
export async function buildSiteGraph(): Promise<SiteGraph | null> {
  const graphFile = join(process.cwd(), 'src/data/link-graph.json');
  if (!existsSync(graphFile)) return null;

  let graph: RawGraph;
  try {
    graph = JSON.parse(readFileSync(graphFile, 'utf8'));
  } catch {
    return null;
  }
  if (!Array.isArray(graph.nodes) || graph.nodes.length === 0) return null;

  const byColumn = new Map<GraphColumnKey, RawGraphNode[]>();
  for (const key of GRAPH_COLUMN_ORDER) byColumn.set(key, []);
  for (const node of graph.nodes) {
    byColumn.get(classifyGraphColumn(node))!.push(node);
  }
  for (const key of GRAPH_COLUMN_ORDER) {
    byColumn.set(
      key,
      [...byColumn.get(key)!].sort((a, b) => {
        if (typeof a.order === 'number' && typeof b.order === 'number' && a.order !== b.order) {
          return a.order - b.order;
        }
        return a.title.localeCompare(b.title);
      }),
    );
  }

  const presentColumns = GRAPH_COLUMN_ORDER.filter((key) => byColumn.get(key)!.length > 0);
  const maxRows = presentColumns.reduce((max, key) => Math.max(max, byColumn.get(key)!.length), 1);

  const columns: SiteGraphColumnHeader[] = presentColumns.map((key, i) => ({
    key,
    label: GRAPH_COLUMN_LABEL[key],
    x: i * COLUMN_WIDTH + COLUMN_WIDTH / 2,
  }));

  const positions = new Map<string, { x: number; y: number }>();
  const nodes: SiteGraphNode[] = [];
  presentColumns.forEach((key, colIndex) => {
    byColumn.get(key)!.forEach((n, rowIndex) => {
      const x = colIndex * COLUMN_WIDTH + COLUMN_WIDTH / 2;
      const y = HEADER_HEIGHT + TOP_PAD + rowIndex * ROW_HEIGHT + ROW_HEIGHT / 2;
      positions.set(n.route, { x, y });
      nodes.push({
        id: n.id,
        title: n.title,
        href: n.route,
        kind: n.kind ?? 'unclassified',
        hue: GRAPH_COLUMN_HUE[key],
        size: sizeStep(n.inbound ?? 0),
        x,
        y,
        // Only marked in preview builds (IA §8.2: "the production graph
        // shows the healthy site") — the DOM never carries the warning
        // state in a production build, so there is no CSS-only way for it
        // to leak through.
        orphan: IS_PREVIEW && n.route !== '/' && (n.inbound ?? 0) === 0,
      });
    });
  });

  const titleByRoute = new Map(nodes.map((n) => [n.href, n.title]));
  const seenEdges = new Set<string>();
  const outByRoute = new Map<string, string[]>();
  const edges: SiteGraphEdge[] = [];
  for (const e of graph.edges) {
    if (e.from === e.to) continue;
    const a = positions.get(e.from);
    const b = positions.get(e.to);
    if (!a || !b) continue; // target not a node this build classified (should not happen)
    const key = `${e.from}=>${e.to}`;
    if (seenEdges.has(key)) continue;
    seenEdges.add(key);
    const midX = (a.x + b.x) / 2;
    edges.push({
      id: `edge-${edges.length}`,
      from: e.from,
      to: e.to,
      path: `M ${a.x} ${a.y} C ${midX} ${a.y}, ${midX} ${b.y}, ${b.x} ${b.y}`,
      orphanEdge: false,
    });
    if (!outByRoute.has(e.from)) outByRoute.set(e.from, []);
    outByRoute.get(e.from)!.push(titleByRoute.get(e.to) ?? e.to);
  }

  const hoverCss = nodes
    .map(
      (n) => `.site-graph:has(a.site-graph-node[data-id="${n.href}"]:is(:hover,:focus)) .site-graph-edge[data-from="${n.href}"],
.site-graph:has(a.site-graph-node[data-id="${n.href}"]:is(:hover,:focus)) .site-graph-edge[data-to="${n.href}"] { stroke: var(--color-accent-primary); stroke-opacity: 1; stroke-width: 2.5px; }`,
    )
    .join('\n');

  const connections: SiteGraphConnections[] = nodes
    .filter((n) => (outByRoute.get(n.href) ?? []).length > 0)
    .map((n) => ({ href: n.href, title: n.title, links: outByRoute.get(n.href)! }));

  return {
    width: presentColumns.length * COLUMN_WIDTH,
    height: HEADER_HEIGHT + TOP_PAD * 2 + maxRows * ROW_HEIGHT,
    columns,
    nodes,
    edges,
    hoverCss,
    connections,
    showOrphanLegend: nodes.some((n) => n.orphan),
  };
}
