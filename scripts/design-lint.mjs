// Design-lint: counts violations of the testable DESIGN.md "Do's and Don'ts"
// rules (1, 2, 6, 7, 8, 13, 14, 15, 16, 19, 20, 22) over src/ and, for rule 7
// which needs rendered markup, the built dist/.
//
// Non-zero rule counts do NOT fail the run — the codebase is mid-migration
// (DESIGN.md "Proposed additions", "Checks"). `--strict` makes them fail.
// Zero files processed is always a failure: an empty scan must not look clean.
//
// Usage: node scripts/design-lint.mjs [--strict] [--max-hits N]
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import matter from 'gray-matter';

const ROOT = process.cwd();
const args = process.argv.slice(2);
const STRICT = args.includes('--strict');
const flagValue = (name) => (args.includes(name) ? args[args.indexOf(name) + 1] : null);
const MAX_HITS_SHOWN = Number(flagValue('--max-hits') ?? 8);

const rel = (p) => relative(ROOT, p).split(sep).join('/');

function walk(dir, exts) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) return walk(p, exts);
    return exts.some((e) => p.endsWith(e)) ? [p] : [];
  });
}

let filesProcessed = 0;
const results = []; // { number, description, count, hits: [{path, line}] }

// --- Grep-style rules: one regex, one set of directories, line-level hits ---
function grepRule({ number, description, dirs, exts, pattern }) {
  const hits = [];
  const files = dirs.flatMap((d) => walk(join(ROOT, d), exts));
  for (const file of files) {
    filesProcessed += 1;
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, i) => {
      pattern.lastIndex = 0;
      if (pattern.test(line)) hits.push({ path: rel(file), line: i + 1 });
    });
  }
  results.push({ number, description, count: hits.length, hits });
}

grepRule({
  number: 1,
  description: 'No hex, rgb or Tailwind palette class in a component',
  dirs: ['src/components'],
  exts: ['.astro', '.ts', '.tsx'],
  pattern: /#[0-9a-f]{3,8}\b|rgba?\(|text-(gray|blue|white)(?:-\d+)?\b/i,
});

grepRule({
  number: 2,
  description: "No max-w-* on a prose container outside the grid",
  dirs: ['src/pages', 'src/layouts'],
  exts: ['.astro'],
  pattern: /max-w-/,
});

grepRule({
  number: 6,
  description: 'No text at reduced opacity',
  dirs: ['src/components'],
  exts: ['.astro', '.scss', '.css'],
  pattern: /opacity:\s*0\.[0-9]/,
});

grepRule({
  number: 13,
  description: 'No radius above --radius-md except on images',
  dirs: ['src'],
  exts: ['.astro', '.ts', '.tsx'],
  pattern: /rounded-(xl|2xl|3xl)\b/,
});

grepRule({
  number: 14,
  description: 'No icon without a word, no icon in a circle, no emoji as a design element',
  dirs: ['src/components'],
  exts: ['.astro'],
  pattern: /rounded-full/,
});

grepRule({
  number: 15,
  description: 'No hover scale, no entrance animation, no unconditional smooth scroll',
  dirs: ['src/components'],
  exts: ['.astro', '.scss', '.css'],
  pattern: /scale-\[|@keyframes/,
});

grepRule({
  number: 16,
  description: 'No coloured left border on a box',
  dirs: ['src/components'],
  exts: ['.astro', '.scss', '.css'],
  pattern: /border-l-4|border-left:\s*[3-9]px/,
});

grepRule({
  number: 20,
  description: 'Headings are Playfair 700 or 400, never 300; body is Inter 400',
  dirs: ['src'],
  exts: ['.astro', '.scss', '.css', '.ts', '.tsx'],
  pattern: /font-light/,
});

grepRule({
  number: 22,
  description: 'Nothing is centred except the Hero title and KeyFigure values in a row',
  dirs: ['src/components', 'src/pages'],
  exts: ['.astro'],
  pattern: /text-center/,
});

// --- Rule 7: no more than 4 consecutive <p> without a structural element, in
// the built chapter markup (dist/book/<slug>/index.html — needs rendered HTML,
// component wrappers count as structural, bare <p> runs do not). ---
const VOID_TAGS = new Set(['br', 'hr', 'img', 'input', 'meta', 'link']);

/** Direct children of the first top-level element, as { name, index } in document order. */
function directChildren(html) {
  const tagRe = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(\/?)>/g;
  let depth = 0;
  const children = [];
  let match;
  while ((match = tagRe.exec(html)) !== null) {
    const [, closing, name, selfClose] = match;
    const lower = name.toLowerCase();
    if (closing) {
      depth -= 1;
      continue;
    }
    if (depth === 0) children.push({ name: lower, index: match.index });
    if (!selfClose && !VOID_TAGS.has(lower)) depth += 1;
  }
  return children;
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

const distBookDir = join(ROOT, 'dist/book');
const paragraphRunHits = [];
let chaptersScannedInDist = 0;
if (existsSync(distBookDir)) {
  const chapterHtmlFiles = readdirSync(distBookDir)
    .map((name) => join(distBookDir, name, 'index.html'))
    .filter((p) => existsSync(p));
  for (const file of chapterHtmlFiles) {
    chaptersScannedInDist += 1;
    filesProcessed += 1;
    const html = readFileSync(file, 'utf8');
    const startMatch = html.match(/<article class="prose[^"]*"[^>]*>/);
    if (!startMatch) continue;
    const inner = html.slice(startMatch.index + startMatch[0].length);
    const children = directChildren(inner);
    let run = [];
    const flushRun = () => {
      if (run.length > 4) {
        paragraphRunHits.push({ path: rel(file), line: lineOf(inner, run[4].index) });
      }
      run = [];
    };
    for (const child of children) {
      if (child.name === 'p') run.push(child);
      else flushRun();
    }
    flushRun();
  }
}
results.push({
  number: 7,
  description: 'No more than 4 consecutive paragraphs without a structural element (built chapters)',
  count: paragraphRunHits.length,
  hits: paragraphRunHits,
  note: existsSync(distBookDir) ? `${chaptersScannedInDist} chapters scanned in dist/book` : 'dist/book missing — run `astro build` first',
});

// --- Rules 8 and 19 run over chapter source (src/content/docs/book/*.md{,x}) —
// they read frontmatter/props that are easiest to see before MDX compiles them.
const bookDir = join(ROOT, 'src/content/docs/book');
const chapterSourceFiles = existsSync(bookDir)
  ? walk(bookDir, ['.md', '.mdx']).filter((p) => !p.includes('.sidecar.'))
  : [];

// Rule 8: every number has a source — a `\d+(\.\d+)?%` figure needs a markdown
// link, a KeyFigure, or a SourceList entry in the same paragraph.
const numberSourceHits = [];
for (const file of chapterSourceFiles) {
  filesProcessed += 1;
  const { content } = matter(readFileSync(file, 'utf8'));
  const paragraphs = content.split(/\n\s*\n/);
  let offset = 0;
  for (const paragraph of paragraphs) {
    const pctMatch = paragraph.match(/\d+(\.\d+)?%/);
    const hasSource = /\[[^\]]*\]\([^)]+\)|<KeyFigure|<SourceList|<ComparisonTable|<Figure/.test(paragraph);
    if (pctMatch && !hasSource) {
      numberSourceHits.push({ path: rel(file), line: lineOf(content, offset + pctMatch.index) });
    }
    offset += paragraph.length + 2; // +2 for the blank-line separator consumed by the split
  }
}
results.push({
  number: 8,
  description: 'Every number has a source (%, KeyFigure, ComparisonTable, Figure)',
  count: numberSourceHits.length,
  hits: numberSourceHits,
});

// Rule 19: EvidenceBox <= 2, PullQuote <= 1/1000 words, MeansForYou <= 1 (<=120
// words), Callout `demand` <= 1/800 words, per chapter.
const densityHits = [];
for (const file of chapterSourceFiles) {
  const { content } = matter(readFileSync(file, 'utf8'));
  const words = (content.match(/\S+/g) || []).length;
  const per = (per1000) => Math.max(1, Math.ceil((words / 1000) * per1000));
  const countTag = (tag) => (content.match(new RegExp(`<${tag}\\b`, 'g')) || []).length;
  const evidenceBox = countTag('EvidenceBox');
  const pullQuote = countTag('PullQuote');
  const meansForYou = countTag('MeansForYou');
  const demandCallouts = (content.match(/<Callout\b[^>]*\btype=["']demand["']/g) || []).length;

  const checks = [
    [evidenceBox > 2, `EvidenceBox ${evidenceBox} > 2`],
    [pullQuote > per(1), `PullQuote ${pullQuote} > 1/1000 words`],
    [meansForYou > 1, `MeansForYou ${meansForYou} > 1`],
    [demandCallouts > per(1.25), `Callout demand ${demandCallouts} > 1/800 words`],
  ];
  for (const [violated, why] of checks) {
    if (violated) densityHits.push({ path: rel(file), line: 1, why });
  }
}
results.push({
  number: 19,
  description: 'EvidenceBox <= 2, PullQuote/MeansForYou/Callout(demand) density caps per chapter',
  count: densityHits.length,
  hits: densityHits.map((h) => ({ path: h.path, line: h.line })),
});

// Preserve declared rule order for the printed report (1, 2, 6, 7, 8, 13, 14, 15, 16, 19, 20, 22).
const order = [1, 2, 6, 7, 8, 13, 14, 15, 16, 19, 20, 22];
results.sort((a, b) => order.indexOf(a.number) - order.indexOf(b.number));

console.log(`design-lint: ${results.length} rules checked, ${filesProcessed} files processed`);
for (const r of results) {
  console.log(`rule ${r.number}: ${r.count} — ${r.description}`);
  const shown = r.hits.slice(0, MAX_HITS_SHOWN);
  for (const hit of shown) {
    console.log(`  ${hit.path}:${hit.line}`);
  }
  if (r.hits.length > shown.length) {
    console.log(`  … +${r.hits.length - shown.length} more`);
  }
  if (r.note) console.log(`  (${r.note})`);
}

if (filesProcessed === 0) {
  console.error('DESIGN_LINT_FAILED: zero files processed');
  process.exit(1);
}

const totalViolations = results.reduce((sum, r) => sum + r.count, 0);
if (STRICT && totalViolations > 0) {
  console.error(`DESIGN_LINT_FAILED: --strict and ${totalViolations} total violations`);
  process.exit(1);
}

console.log(`design-lint: ${totalViolations} total violations (non-strict: not a failure)`);
