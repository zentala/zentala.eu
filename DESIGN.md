---
version: "alpha"
name: "zentala.eu"
description: "EU Reform Vision — political essays for the European engineer. Editorial site: one reading measure, a small layout grammar, components that make an argument's shape visible."
colors:
  # Light theme (:root in src/styles/_tokens.scss)
  bg-primary: "#fafafa"
  bg-secondary: "#f0f1f4"
  bg-gradient-from: "#e6eaf5"
  bg-gradient-to: "#f0f1f4"
  text-primary: "#23262b"
  text-secondary: "#565c66"
  accent-primary: "#3b5c91"
  accent-secondary: "#4d72ad"
  border: "#e2e4e8"
  scrollbar-track: "#eceef1"
  scrollbar-thumb: "#c7cbd2"
  scrollbar-thumb-hover: "#a3a9b3"
  card-gray-bg: "#eef0f2"
  card-gray-border: "#d7dbe0"
  card-gray-text: "#2c3038"
  card-blue-bg: "#e6edf9"
  card-blue-border: "#c3d4ee"
  card-blue-text: "#24406e"
  card-green-bg: "#e5f3ec"
  card-green-border: "#bfe1cf"
  card-green-text: "#235b3f"
  card-red-bg: "#f8e9e9"
  card-red-border: "#eac6c6"
  card-red-text: "#7a2d2d"
  card-yellow-bg: "#f8f0dd"
  card-yellow-border: "#eaddb0"
  card-yellow-text: "#6b551b"
  card-indigo-bg: "#e7e9f7"
  card-indigo-border: "#c8cdec"
  card-indigo-text: "#35398a"
  card-purple-bg: "#f0e7f7"
  card-purple-border: "#ddc8ec"
  card-purple-text: "#5a318a"
  card-teal-bg: "#e2f2f1"
  card-teal-border: "#b9e0dd"
  card-teal-text: "#1d5b56"
  # Dark theme (.dark in src/styles/_tokens.scss)
  bg-primary-dark: "#14181f"
  bg-secondary-dark: "#1c212b"
  bg-gradient-from-dark: "#1b2740"
  bg-gradient-to-dark: "#14181f"
  text-primary-dark: "#e7e9ec"
  text-secondary-dark: "#b6bcc6"
  accent-primary-dark: "#6f9bd8"
  accent-secondary-dark: "#8bb0e0"
  border-dark: "#2b313c"
  scrollbar-track-dark: "#1a1f28"
  scrollbar-thumb-dark: "#2d3441"
  scrollbar-thumb-hover-dark: "#414b5b"
  card-gray-bg-dark: "#262b34"
  card-gray-border-dark: "#383f4a"
  card-gray-text-dark: "#e2e5e9"
  card-blue-bg-dark: "#1c2c47"
  card-blue-border-dark: "#2c4269"
  card-blue-text-dark: "#cfe0f7"
  card-green-bg-dark: "#1a3226"
  card-green-border-dark: "#2a4b39"
  card-green-text-dark: "#c8ecd8"
  card-red-bg-dark: "#3a2223"
  card-red-border-dark: "#573030"
  card-red-text-dark: "#f2cfcf"
  card-yellow-bg-dark: "#3a3320"
  card-yellow-border-dark: "#574d2c"
  card-yellow-text-dark: "#f3e5bb"
  card-indigo-bg-dark: "#23264a"
  card-indigo-border-dark: "#363b6e"
  card-indigo-text-dark: "#d3d6f5"
  card-purple-bg-dark: "#2d2340"
  card-purple-border-dark: "#44335f"
  card-purple-text-dark: "#e5d2f5"
  card-teal-bg-dark: "#17322f"
  card-teal-border-dark: "#244c47"
  card-teal-text-dark: "#c3ece7"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  h1:
    fontFamily: "Playfair Display, serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Playfair Display, serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
  h3:
    fontFamily: "Playfair Display, serif"
    fontSize: "1.625rem"
    fontWeight: 400
    lineHeight: 1.3
  h4:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-ui:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.5
  lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  eyebrow:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.1em"
  figure:
    fontFamily: "Inter, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontFeature: "tnum"
  mono:
    fontFamily: "Menlo, Monaco, Consolas, Liberation Mono, monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "0.375rem"
  md: "0.75rem"
  lg: "1rem"
  full: "9999px"
spacing:
  # The rhythm components already use; to be added to _tokens.scss as --space-* (see "Proposed additions").
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  3xl: "4.5rem"
  section: "6rem"
components:
  evidence-box:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  callout:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.lead}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  objection:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "{spacing.lg}"
  means-for-you:
    backgroundColor: "{colors.card-blue-bg}"
    textColor: "{colors.card-blue-text}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  chapter-footer:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.small}"
    padding: "{spacing.xl}"
  comparison-table:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-ui}"
    padding: "{spacing.sm}"
  timeline:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  playbook:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body-ui}"
    padding: "{spacing.md}"
  key-figure:
    backgroundColor: "{colors.bg-secondary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.figure}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  term-card:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.small}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    width: "22rem"
  side-note:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.small}"
    padding: "{spacing.md}"
  provenance-note:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.small}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
  pull-quote:
    backgroundColor: "{colors.bg-primary}"
    textColor: "{colors.text-primary}"
    typography: "{typography.h3}"
    padding: "{spacing.lg}"
  card:
    backgroundColor: "{colors.card-gray-bg}"
    textColor: "{colors.card-gray-text}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  button-primary:
    backgroundColor: "{colors.accent-primary}"
    textColor: "{colors.bg-primary}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm}"
    height: "2.75rem"
---

# zentala.eu design

This file is the visual contract for the site. An agent building or restyling a page reads
it and makes no taste calls of its own. Where this file and a component disagree, the
component is wrong. Where this file is silent, the answer is the plainer option.

Tokens live in `src/styles/_tokens.scss`. The front matter above copies them; it adds no
colour. Anything this file wants and the token file lacks is listed under
"Proposed additions", never smuggled into a component.

## Overview

The site is a set of long political arguments written by an engineer for engineers. It
looks like a well-set book with the apparatus of a technical report: one narrow reading
column, serif headings over a sans body, tables and timelines where the argument has a
shape, quiet boxes where the author marks what he knows and what he is guessing. Nothing
on the page exists to decorate; every non-prose element makes the argument's structure
visible so a reader can scan it, dispute it and find the sentence he disagrees with.

The reader distrusts decoration. He reads long arguments, checks numbers, and leaves when
a page looks like a product landing. So the site is calm, dense with information, light on
chrome, and honest about sources.

What this site is not:

- Not a dashboard. No chrome, no tiles, no metric cards without a source.
- Not a SaaS landing. No purple or blue-to-purple gradients, no icon-in-a-circle feature
  grids, no centred-everything, no "Welcome to", no cookie-cutter section rhythm.
- Not an app. No component exists for its own sake; if a block does not carry an argument
  or wayfinding, it is removed.
- Not a wall of prose. Four paragraphs in a row without a structural element is the limit
  (see Do's and Don'ts).

The blacklist above is the AI-slop list from `~/.claude/skills/design-review/SKILL.md`
(section 9); it applies here in full, including "no emoji as design elements" and "no
uniform bubbly radius on every element".

## Colors

The palette is the one in `src/styles/_tokens.scss`, both themes. Components consume it
through `var(--color-*)` and `var(--card-<hue>-*)`; no component contains a hex value.
The only exception is chart series colour inside `EUStatisticsChart`, and even that must
come from the card-hue text tokens (see Migration).

### Roles

| Role | Light | Dark | Used for |
|---|---|---|---|
| Page background | `--color-bg-primary` | same token | body, article column |
| Raised surface | `--color-bg-secondary` | same token | boxes, header, table heads, code |
| Body text | `--color-text-primary` | same token | prose, headings, table cells |
| Secondary text | `--color-text-secondary` | same token | asides, captions, footers, meta |
| Accent | `--color-accent-primary` | same token | links, eyebrows, focus ring, primary button |
| Accent, hover only | `--color-accent-secondary` | same token | link hover, arrow hover |
| Rule | `--color-border` | same token | 1px borders, table rows, hr |
| Hue triplets | `--card-<hue>-{bg,border,text}` | same tokens | Card, Timeline accent, MeansForYou, chart series |

### Contrast, computed from the token values (WCAG 2 formula)

| Pair | Light | Dark | Verdict |
|---|---|---|---|
| text-primary on bg-primary | 15.7:1 | 15.5:1 | body text, pass |
| text-secondary on bg-primary | 6.4:1 | 9.5:1 | body text, pass |
| text-secondary on bg-secondary | 5.9:1 | 8.4:1 | body text, pass |
| accent-primary on bg-primary | 6.4:1 | 6.3:1 | link text, pass |
| accent-primary on bg-secondary | 5.9:1 | 5.6:1 | link text on boxes, pass |
| accent-secondary on bg-primary | 4.7:1 | 8.1:1 | pass, barely in light |
| accent-secondary on bg-secondary | 4.3:1 | 7.2:1 | **fails AA in light** |

Rules that follow:

- Body text and links: 4.5:1 minimum. Large text (≥ 24px, or ≥ 19px bold) and UI
  borders: 3:1 minimum.
- `--color-accent-secondary` is a hover colour. It never sets resting text.
  `LayerCard.astro:57` already learned this; the rule is now global.
- No text at reduced opacity. `opacity: 0.85` on `--color-text-primary` is an unmeasured
  colour; `FAQ.astro:72` and `Card.astro:102` are migrated to `--color-text-secondary`
  or to the hue's text token.
- Eyebrows use `--color-accent-primary` or `--color-text-secondary` at full opacity.
  The home page's `.step-index` failed axe for this reason (245 contrast nodes,
  `.plan/reports/2026-09-25-ui-seo-review/03-rendered-audit.md:11`).
- Hue triplets are used as a set (`bg` + `border` + `text` from the same hue). Mixing
  hues inside one element is not allowed; the triplets were matched for AA as sets.
- Hues carry no meaning. `blue` is the default accent hue for argument components,
  `green` for "what is a fact", `red` is reserved for "what this says against me" (the
  EvidenceBox `against` variant). `yellow`, `purple`, `teal`, `indigo` exist for Card
  grids on index pages and nowhere else.
- Links inside prose are underlined on hover and coloured at rest with accent-primary.
  In dark theme a link in a text block needs the underline at rest too (axe
  `link-in-text-block`, 24 nodes, dark): underline links inside `.prose` in both themes.
- No colour-only meaning. A status, a hue or a highlight always comes with a word.

### Proposed additions to `_tokens.scss` (colour)

None. The palette is complete for the components below.

## Typography

Two families, already loaded: Playfair Display (400, 700, 400 italic) and Inter
(300–700). No third family. Monospace is the system stack from `Layout.astro:151`.

Playfair Display is not loaded at weight 300, so `font-light` on headings
(`global.scss:94`) renders a synthesised weight. Headings use 700 or 400 only.

### Scale

Sizes are the `--text-*` tokens. Line-heights and letter-spacing below are the rule; they
are not yet tokens (see Proposed additions).

| Style | Family | Size | Weight | Line-height | Tracking | Where |
|---|---|---|---|---|---|---|
| Display | serif | `--text-5xl` 48px | 700 | 1.1 | -0.01em | article h1 ≥ 768px, home hero |
| H1 | serif | `--text-4xl` 40px | 700 | 1.15 | -0.01em | article h1 < 768px, index h1 |
| H2 | serif | `--text-3xl` 32px | 700 | 1.2 | 0 | section headings in prose and on pages |
| H3 | serif | `--text-2xl` 26px | 400 | 1.3 | 0 | sub-sections, PullQuote, Card title |
| H4 | sans | `--text-lg` 19px | 600 | 1.4 | 0 | box titles, table captions, Timeline item title |
| Lead | sans | `--text-xl` 22px | 400 | 1.55 | 0 | standfirst under a title, Callout body |
| Body (article) | sans | `--article-body-size` 18px | 400 | `--article-lead` 1.6 | 0 | every paragraph and list inside `.prose` |
| Body (UI) | sans | `--text-base` 17px | 400 | 1.5 | 0 | index pages, cards, boxes, tables |
| Small | sans | 15px | 400 | 1.5 | 0 | captions, footers, meta, SideNote, ProvenanceNote |
| Eyebrow | sans | 13px | 600 | 1.2 | 0.1em, uppercase | labels above headings and box titles |
| Figure | sans | `--text-4xl` 40px | 600 | 1.1 | -0.02em, `tnum` | KeyFigure number |
| Mono | mono | 15px | 400 | 1.5 | 0 | code, identifiers, thresholds in tables when they are code |

Text in both themes uses the same weights. Weight 300 is not used for anything under 24px
in either theme.

### Measure

- `--article-measure: 66ch` is the reading column. Every long-form route consumes it
  through `ArticleLayout.astro` or the same three tokens. Long-form means: any route whose
  body is a content-collection entry or prose longer than one screen.
- Today the token reaches `/book/*`, `/docs/*`, `/commentary/*` and `/transcripts/*`
  (title column) through `ArticleLayout`. It does not reach `/why` (`src/pages/why.astro:49`,
  68rem frame; `WhyAnswer` caps only its own prose at 70ch), `/manifesto`
  (`src/pages/manifesto.astro:48`, 52rem), `/principles` (`src/pages/principles.astro:125`),
  or the legacy `/vision/*` layer pages (`max-w-4xl`). Those routes migrate to the grid in
  Layout below.
- Baymard's finding is the reason the number is fixed and not a range: copy wider than
  80ch was skipped 41% more often than copy at 60–70ch. The rendered audit measured
  114–130ch on chapters before `ArticleLayout` existed.
- Six `max-w-*` values currently stand in for "the article column" across routes
  (`01-inventory.md:5`). After migration there are three widths on the site, all named
  grid tracks: `content` (66ch), `wide` (90ch), `full` (container, 80rem). No page sets
  its own `max-w-*` for prose.

### Breaking the measure

A block may leave the `content` track only when its content does not fit 66ch and would
lose meaning if wrapped:

| Block | Track | Condition |
|---|---|---|
| ComparisonTable | `wide` | 4 or more columns; 3 or fewer stay in `content` |
| Timeline | `wide` on ≥ 1024px | more than 4 items, or items with a body paragraph |
| Columns ratio 1-1 | `wide` | always |
| Figure (chart, image) | `wide`, or `full` once per page | the chart has ≥ 6 categories, or the image is the page's one hero visual |
| SiteMap list | `full` | always |
| Everything else | `content` | — |

A `full` block appears at most once per page. A `wide` block never contains running prose;
prose inside a wide table cell is a sign the table should be prose.

### Details

- `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs (already in
  `global.scss:96,116`).
- `font-variant-numeric: tabular-nums` on every table, KeyFigure and Timeline date
  label. Already set for `.prose table` (`global.scss:181`); components set it themselves.
- Paragraph spacing is one line (`margin-bottom: 1.5rem` at 18px), no first-line indent.
- Headings: H2 has 3rem above and 1rem below in articles; H3 2rem above, 0.75rem below.
  `DisplayTitle.astro`'s `mt-20`/`mt-16` defaults are replaced by these values.
- Italic is Playfair 400 italic in headings and quotes, Inter italic in body. Italic is
  for titles of works and for the ChapterFooter, not for emphasis; emphasis is bold.
- Bold lead-ins ("**Who defines competent?**") are the old form of Objection and Callout.
  They are migrated to components; new content does not use a bold lead-in for structure.

### Proposed additions to `_tokens.scss` (type)

```scss
--text-xs: 0.8125rem;   /* eyebrow; today hardcoded in 4 components */
--text-sm: 0.9375rem;   /* small, mono; today hardcoded in why.astro:63 and others */
--leading-tight: 1.15;  /* display, h1 */
--leading-snug: 1.3;    /* h2, h3, figure */
--leading-body: 1.6;    /* alias of --article-lead */
--tracking-eyebrow: 0.1em;
--font-mono: Menlo, Monaco, Consolas, "Liberation Mono", monospace;
```

## Layout

One grid, five named layouts. Every page composes from these; no page invents a width,
a column split or a breakpoint.

### The grid

`Layout.astro` keeps `.container` at `max-w-7xl` (80rem). Inside it, article and index
pages use one named-line grid, implemented by a new `ArticleGrid.astro` wrapper that
`ArticleLayout.astro` adopts:

```css
.article-grid {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1rem, 1fr)
    [wide-start] minmax(0, 12ch)
    [content-start] minmax(0, var(--article-measure)) [content-end]
    minmax(0, 12ch) [wide-end]
    minmax(1rem, 1fr) [full-end];
  column-gap: 0;
}
.article-grid > * { grid-column: content; }
.article-grid > .span-wide { grid-column: wide; }
.article-grid > .span-full { grid-column: full; }
```

`content` = 66ch, `wide` = 90ch, `full` = the container. Below 768px `wide` collapses to
`content` (the side tracks become `0`); `full` keeps its 1rem gutters. Components that may
leave the column set `span-wide` or `span-full` on their root; MDX authors never write
those classes by hand.

Vertical rhythm is the spacing scale in the front matter: `md` (1rem) between paragraphs
inside a box, `lg`/`xl` around blocks in prose, `2xl` (3rem) above an H2, `section` (6rem)
between top-level sections on index pages. `why.astro`'s `--why-space-*` variables are
replaced by these.

### The five layouts

| Layout | Tracks | Use when | Never when | Implemented by |
|---|---|---|---|---|
| **Full-bleed** | `full` | The page has one visual that is the argument: a site map, a hero figure, a chart with many categories. Once per page. | To make a section "feel bigger". For text. More than once. | `.span-full` on Figure, SiteMap, Hero |
| **2/3–1/3** | `content` + aside in the right margin (`content-end` to `full-end`, min 18rem) on ≥ 1024px; stacked below 1024px | A chapter paragraph has a companion: a definition, a key figure, a source, a "what would settle it". The aside comments on the paragraph beside it. | The aside is longer than the paragraph it sits by. On index pages. On phones (it stacks). | `SideNote`, `KeyFigure` with `aside` prop, `EvidenceBox` with `aside` prop |
| **1/2–1/2** | `wide`, `1fr 1fr`, gap `xl` | Two things are compared as equals: before/after, Switzerland/EU, cheap/expensive, claim/objection. Both halves have the same shape. | The halves differ in length by more than a third. Three things (use a table). Text longer than ~120 words per half. | `Columns ratio="1-1"` |
| **3-column** | `full`, `repeat(3, 1fr)` on ≥ 1024px, 2 on ≥ 768px, 1 below | Index pages only: peers in a list (chapters in a layer, benefit entries, site map groups). Every item is a link to a page. | On a chapter, `/why` or `/manifesto`. For "features" or "pillars" that are not links. With icons in circles. | `CardGrid columns={3}` |
| **Aside rail** | `wide-end` to `full-end`, sticky, on ≥ 1280px only | Wayfinding on a chapter longer than 1,500 words: a table of contents with the current section marked. One per page. | Anything that is not navigation. Below 1280px it becomes a `<details>` above the body. | `TableOfContents` (new, one instance in `ArticleLayout`) |

The 2/3–1/3 layout is the workhorse: it is how an argument gets its apparatus (figures,
definitions, evidence) without breaking the reading column. When the aside would be
longer than its paragraph, the material is a section, not an aside.

### Page frame

- Header: sticky, `--color-bg-secondary`, `--shadow-md`, height 4.5rem, contents in
  `.container`. Navigation is text links, body-ui size, accent underline on the current
  page. The mobile menu button has a visible label ("Menu") and `aria-expanded`.
- Body: `<main id="main">` on every route (it is missing on six today,
  `01-inventory.md:13`). Skip link first in `<body>`.
- Footer: three text columns of links on ≥ 768px, one below; small style; `--color-border`
  rule above. The footer's one-line description of the site matches `homeFrameIntro` in
  `src/lib/vision-content.ts` (today it carries the pre-frame sentence,
  `Footer.astro:71-73`).
- Back link above an article title: small style, accent-primary, arrow from `Icon`.
- The fixed gradient overlay behind the page (`Layout.astro:105-107`) stays at 50% opacity
  and is the only gradient on the site. `GradientSection` and the `gradient` Card variant
  are retired (Migration).

### Breakpoints

Three, from Tailwind's defaults already in use: 768px (`md`), 1024px (`lg`), 1280px
(`xl`). Phones get one column and 1rem gutters; nothing scrolls horizontally
(`/book/european-english` overflows at 375px today, `03-rendered-audit.md:22` — tables
get `overflow-x: auto` on their own wrapper, never on the page). Touch targets are 44px
minimum.

## Elevation & Depth

Three shadow tokens, four uses. Editorial surfaces are flat.

| Token | Where | Nowhere else |
|---|---|---|
| `--shadow-sm` | Card at rest | boxes, callouts, tables, timelines |
| `--shadow-md` | Card on hover, sticky header | — |
| `--shadow-lg` | Term card (popover), mobile menu sheet | images, FAQ, index page banners |

Depth on the page comes from surface (`--color-bg-secondary` on `--color-bg-primary`) and
from a 1px `--color-border`, not from shadow. `ManifestoDemand.astro:25` and
`FAQ.astro:16` lose their shadows; `book/index.astro:99` loses its blurred gradient glow.
No `backdrop-blur` except on the header.

## Shapes

| Token | Applies to |
|---|---|
| `--radius-sm` (6px) | inline code, buttons, badges, EvidenceBox, Objection, ProvenanceNote, table wrapper |
| `--radius-md` (12px) | Card, Callout, MeansForYou, KeyFigure, Term card, Timeline item body |
| `--radius-lg` (16px) | figure images and charts only |
| `--radius-full` | number badges (Timeline, Playbook), avatar |

No `rounded-xl` / `rounded-2xl` (LayerCard, FAQ container, book index banner use them
today). Borders are 1px, `--color-border`, or the hue's `border` token; the only 2px
border is the focus ring. No coloured left border on boxes (`ManifestoLead`'s accent bar,
`TimelineBlock`'s `border-l-4` highlight box). The blockquote's 4px left rule in
`global.scss:155` stays: it is the one editorial convention for quoted text and it is
not a box.

Icons: Lucide through `Icon.astro`, sizes 16/20/24 only in text and UI, 32 only in a
Card title. Icons sit next to a word, never alone as decoration, never in a coloured
circle, never as a bullet. Emoji is not an icon.

Motion: `transition` 150–300ms on `color`, `background-color`, `border-color`,
`opacity`, `transform` only. The one transform is the 4px arrow nudge on link hover.
No hover scale on cards (`Card.astro:36` is removed), no entrance animations, no
scroll-triggered reveals. `prefers-reduced-motion: reduce` turns every transition to
0ms; `scroll-behavior: smooth` stays gated as it is in `Layout.astro:120`.

Focus: `:focus-visible` ring, 2px `--color-accent-primary`, offset 2px, on every
interactive element (already global in `Layout.astro:146`; no component sets
`outline: none`, which `Newsletter.astro:18` does today).

## Components

Each entry follows one form: what it is, use when, never when, props, an MDX example, and
what it replaces. Every component reads tokens only, sets its own grid track class, and
renders semantic HTML. A component named here and not yet in `src/components/` is built
in wave 3; the name is fixed now so that content can be migrated in parallel.

Components live flat in `src/components/` unless they belong to one page family
(`vision/`, `benefits/`). The `why/` and `manifesto/` folders are dissolved; their
components are generalised below.

### Structure: Section, Lead

**Section** — a titled block on a page: eyebrow, H2, optional lead, body. It exists so
every page shares one vertical rhythm.
Use when: any H2-level division on `/why`, `/manifesto`, index pages, and inside MDX
chapters where a section carries an eyebrow ("Objection 03").
Never when: a plain `## Heading` in a chapter does the job; a Section without an eyebrow
or lead is a heading.
Props: `eyebrow?: string`, `title: string`, `lead?: string`, `id?: string`.
Replaces: `why/WhySection.astro` (rename, keep code).

```mdx
<Section eyebrow="Objection 02" title="Who ends up owning the robots?" lead="If the machines belong to three companies, the shortage is solved and the country is not.">
  ...
</Section>
```

**Lead** — the standfirst under a page title: one to three paragraphs at lead size, plus
an optional one-sentence claim set in bold.
Use when: a page has a title and the reader needs the frame before the first H2.
Never when: the first paragraph of a chapter already does this (chapters have no Lead;
their first paragraph is the lead by convention).
Props: `paragraphs: string[]`, `claim?: string`.
Replaces: `why/WhyLead.astro` and `manifesto/ManifestoLead.astro` (merge; the left
accent bar is dropped).

**Columns** — the 1/2–1/2 and 2/3–1/3 layouts as a component, on the `wide` track.
Use when: the decision aid says "Columns": two equal things side by side (`ratio="1-1"`),
or a block with its own aside where the aside is not a SideNote (`ratio="2-1"`).
Never when: either half is running prose longer than ~120 words; more than two halves
(CardGrid or a table); on a phone it stacks, so the halves must read in order.
Props: `ratio: '1-1' | '2-1'`, two named slots `start` and `end`.
Style: `display: grid`, `1fr 1fr` or `2fr 1fr`, gap `xl`, stacked below 768px. No box,
no border; the halves carry their own components.
Replaces: nothing (new). `why/WhyCardGrid.astro`'s one job (two top-aligned columns)
is covered.

```mdx
<Columns ratio="1-1">
  <Fragment slot="start"><Callout kind="claim" label="Under a five-day week">...</Callout></Fragment>
  <Fragment slot="end"><Callout kind="claim" label="Under a four-day week">...</Callout></Fragment>
</Columns>
```

**TableOfContents** — the aside rail: the chapter's H2s as links, current section marked.
Use when: `ArticleLayout` renders it for any chapter with five or more H2s; one instance,
never placed by an author.
Never when: on index pages, `/why`, `/manifesto`; below 1280px it is a `<details>`
("Contents") above the body, closed by default.
Props: `headings: {id: string, text: string}[]` (from `entry.render()`'s headings).
Style: small style, text-secondary, accent-primary for the current item (set by an
`IntersectionObserver`; without JavaScript every item is a plain link), sticky at
`top: 6rem`, no box.
Replaces: nothing (new).

### EvidenceBox — "what would settle this"

What: a bordered aside that names the falsifiable claim and the evidence that would
confirm or deny it. The site's signature device.
Use when: the author says what he cannot settle and what would; once per chapter section
at most; six chapters already carry it in three ad-hoc forms
(`R2-components-and-patterns.md` B1).
Never when: the claim is already sourced (then it is a SourceList entry); as a hedge on
every paragraph (R4 counts the formula in eight chapters — a fourth EvidenceBox on one
page reads as a tic; two per chapter is the limit); to hold an opinion (that is
ProvenanceNote).
Props: `title?: string` (default "What would settle this"), `variant?: 'open' | 'against'`
(`against` = the strongest fact against the author, red hue border, used for passages like
`safeguards.md:320-334`), `aside?: boolean` (renders in the 2/3–1/3 margin next to the
preceding paragraph on ≥ 1024px).
Style: dashed 1px `--color-border`, `--color-bg-secondary`, `--radius-sm`, eyebrow
title in accent-primary, body-ui size in text-secondary. Dashed border is unique to this
component: dashed means "open".
Replaces: `why/WhyEvidenceNote.astro` (rename, add `variant` and `aside`).

```mdx
<EvidenceBox>
  A comparison of unit costs between cooperative and investor-owned robot fleets in
  the same sector, over one fleet lifetime. Nobody has published one.
</EvidenceBox>

<EvidenceBox variant="against" title="The case against me">
  Swiss women got the federal vote in 1971 because male voters withheld it in 1959.
  That is a majority using the direct instruments against a minority, in the system
  I propose to copy.
</EvidenceBox>
```

### MeansForYou — chapter closing

What: the chapter's payoff, visually distinct from every other H2: a blue-hue box with
the fixed eyebrow "What this means for you", two to four short paragraphs or a list of
at most three actions.
Use when: a chapter ends by telling the reader what to do; seven chapters do
(`R2` B2).
Never when: the section would restate the chapter (R4: in six of nine chapters it says
the same two things — carry the argument, build a piece). If the two actions are the
generic ones, the chapter uses `ChapterFooter` alone and no MeansForYou. Maximum one per
chapter, maximum 120 words.
Props: `title?: string` (default "What this means for you"), `actions?: string[]`.
Style: `--card-blue-*` triplet, `--radius-md`, padding `xl`, sits in `content`.
Replaces: the plain `## What this means for you` heading (new component).

```mdx
<MeansForYou actions={["Ask your council what a four-day contract would cost them; the number is smaller than they think.", "If you write scheduling software, the shift pattern in this chapter is a feature request."]}>
  You are not waiting for permission, and there is nobody to ask.
</MeansForYou>
```

### Objection and ObjectionList

What: one objection stated as a claim, followed by the answer; a list of them under one
heading. The claim is set in H4 sans, the answer in body. An optional `verdict` line
closes each ("Reduced, not eliminated.").
Use when: the author sets out the arguments against himself
(`choosing-people.md:192-234`, five in a row; `new-cities.md:138`;
`the-total-state.md:54,99`) and on `/why`, whose five sections are objections.
Never when: there is one objection (then it is a paragraph with the claim in bold); when
the "answer" is longer than 200 words (then the objection is a section with an H3).
Props (`Objection`): `claim: string`, `verdict?: string`, `id?: string`.
Props (`ObjectionList`): `title?: string`, `intro?: string`.
Style: each Objection is a `content`-track block with a 1px top rule, claim in H4,
answer in body, verdict in small italic text-secondary. No box, no hue.
Replaces: bold-lead-in paragraphs (new component).

```mdx
<ObjectionList title="The objections, which I am not going to settle for you">
  <Objection claim="This is technocracy wearing a rosette." verdict="Half an answer, and I know it.">
    Democracy's point is that people choose their direction, including badly...
  </Objection>
  <Objection claim="Who defines competent?" verdict="A reduction of the risk, not its elimination.">
    Whoever holds that pen holds the real power...
  </Objection>
</ObjectionList>
```

### ChapterFooter

What: the data-driven cross-link block that closes a chapter: "Part of the EU Reform
Vision", then the sibling chapters as a list with one-line descriptions pulled from their
frontmatter, then `/manifesto` and `/why`.
Use when: every published chapter, without exception; thirteen chapters hand-write it
today (`R2` B4) and two skip it by accident.
Never when: a chapter deliberately closes on direct address — then `variant="quiet"`
renders the links without the lead sentence, but the links still render.
Props: `siblings: string[]` (chapter slugs; titles and descriptions come from the
collection), `variant?: 'default' | 'quiet'`.
Style: small style, `--color-border` rule above, links in accent-primary, description in
text-secondary. Italic is not used; the old italic paragraph was a workaround.
Replaces: the italic closing paragraph (new component; `[...slug].astro` renders it from
frontmatter `related:` so MDX needs nothing).

```mdx
<ChapterFooter siblings={["the-total-state", "direct-democracy", "first-move"]} />
```

### ComparisonTable

What: a table whose columns are the things compared and whose first column is the
dimension, with column semantics marked: which columns are fact, which are proposal.
Use when: three or more things are compared on two or more dimensions
(`safeguards.md:251-258` is the model: Switzerland fact / EU proposed / Poland proposed);
when R4 says "wants a table" — `direct-democracy.md` playbook, `first-move.md:59-73`
per-country thresholds, `choosing-people.md:117-190` prior art, `who-it-earns-for.md:177-216`
method/instrument/legal ground, `education-and-migration.md:171-189`.
Never when: two things on one dimension (a sentence); when cells need more than two lines
of prose; when the table would have more than seven columns (split it).
Props: `caption: string`, `columns: {label: string, kind?: 'fact' | 'proposed' | 'unknown'}[]`,
`rows: {dimension: string, cells: (string | number)[]}[]`, `source?: string`,
`numeric?: boolean` (tabular figures, right-aligned).
Style: `--color-bg-secondary` header row, 1px `--color-border` between rows, no vertical
rules, no zebra. `fact` columns get a green-hue text header, `proposed` a blue-hue one,
and the kind is printed under the label as an eyebrow — colour never carries the meaning
alone. Wide track when 4+ columns. Caption above in H4, source below in small.
Replaces: raw Markdown pipe tables in chapters; the `.prose table` styles remain for the
two-column case (`european-english.mdx:45-54`, a decision log, stays Markdown).

```mdx
<ComparisonTable
  caption="Signature thresholds, scaled"
  columns={[
    { label: "Switzerland", kind: "fact" },
    { label: "EU", kind: "proposed" },
    { label: "Poland", kind: "proposed" },
  ]}
  rows={[
    { dimension: "Electorate", cells: ["5,611,289", "≈ 359,000,000", "29,023,338"] },
    { dimension: "Citizens' initiative", cells: ["100,000 (1.78%)", "≈ 7,180,000 (2%)", "≈ 580,000 (2%)"] },
    { dimension: "Optional referendum", cells: ["50,000 (0.89%)", "≈ 3,590,000 (1%)", "≈ 290,000 (1%)"] },
  ]}
  numeric
  source="Swiss Federal Chancellery register; 2024 European Parliament election turnout figures"
/>
```

### Timeline

What: a vertical sequence with a rail: each item has a `when` label (a date, a year, a
phase name), a title, an optional body and an optional highlight line. This is the one
timeline that survives.
Use when: the argument is a sequence in time — `steering.md:44-60` (car regulation dates),
`robotic-reindustrialisation.md:69-79`, the site's own thirty-year window, a history like
the 1875 Public Health Act parallel in `new-cities.md`.
Never when: the items are steps someone should take (Playbook); when the items have no
`when` (that is a list); for invented future milestones — every `when` on a Timeline is a
date that happened or a window the author argues for in the text, with the argument
linked.
Props: `items: {when: string, title: string, body?: string, highlight?: string, accent?: 'blue' | 'indigo' | 'teal'}[]`,
`caption?: string`.
Style: rail in `--color-border`, number-free dot per item in the accent hue's text token,
`when` in eyebrow style with tabular figures, title in H4, body in body-ui. Items with a
body move the block to the `wide` track on ≥ 1024px. The connector maths stays in the
container as in `TimelineContainer.astro` today.
Replaces: `TimelineContainer.astro` + `TimelineBlock.astro` (merge into one data-driven
component; the numbered badge and icon go — a timeline's items are dated, not numbered).
Retires: `Timeline.astro` (horizontal strip, showcase-only), `WhyDigitalReform.astro`
(hardcoded content — the prose is moved into the chapter it belongs to before deletion),
`ReasonBlock.astro`.

```mdx
<Timeline caption="How long the car took to become safe" items={[
  { when: "1959", title: "The three-point belt", body: "Volvo gives the patent away." },
  { when: "1968", title: "First federal belt mandate", body: "Nine years from invention to law, in the fastest case." },
  { when: "1998", title: "Airbags mandatory in the US", highlight: "Thirty years for a part that costs less than a tyre." },
]} />
```

### Playbook

What: numbered steps with one line of rationale each, rendered as rows: number badge,
action in H4, "why" in body-ui, optional owner. It is the "numbered table" R4 asks for.
Use when: the chapter is an instruction — `first-move.md` ("This chapter is an
instruction"), the playbook in `direct-democracy.md:107-209` (eight prose sections of
unequal weight), the four fixes in `steering.md:231-241`, the design brief in
`redesigning-the-state.md:110-119`.
Never when: the steps are not ordered (a list); when a step's rationale needs more than
two sentences (that step is a section, and the Playbook links to it with `href`).
Props: `steps: {action: string, why: string, owner?: string, href?: string}[]`,
`title?: string`.
Style: `--radius-full` number badge in accent-primary on bg-primary text, 1px
`--color-border` between rows, no box around the whole. Stays in `content`.
Replaces: nothing (new). It is deliberately not a rail: a rail says "time passes", rows
say "do these".

```mdx
<Playbook title="What you can do this week" steps={[
  { action: "Find six other people who accept the frame.", why: "A committee of seven is the ECI minimum; below it nothing can be filed." },
  { action: "Register the initiative in the weakest legal form available.", why: "It binds nobody, so it cannot be blocked; if it fails, that is the argument." , href: "/book/first-move#why-the-weakest-instrument" },
]} />
```

### Callout

What: one sentence or short passage set apart from the prose in a box: the thing the
section is built around. Three kinds.
Use when: `kind="demand"` — the manifesto's four demands and any chapter's one ask;
`kind="definition"` — the load-bearing term of a chapter, defined once in two sentences
before the chapter uses it (the accelerator-and-brake definition, written out four times
today, becomes one Callout in `direct-democracy.md` and a TermRef everywhere else);
`kind="claim"` — the sentence the reader is arguing with ("What is being claimed, in one
paragraph" on `/why`; the three properties of the total state, `the-total-state.md:59-64`).
Never when: the passage is longer than 80 words; more than one `demand` per 800 words;
to decorate a paragraph the author likes (that is a PullQuote, and it has its own limit).
Props: `kind: 'demand' | 'definition' | 'claim'`, `label?: string` (eyebrow; defaults
"The demand" / "Definition" / "The claim"), `term?: string` (definition only; registers
the box as the glossary anchor for that term), `id?: string`.
Style: `--color-bg-secondary`, 1px `--color-border`, `--radius-md`, padding `xl`, eyebrow
label, body in lead size at weight 500 (`demand`) or body size (`definition`, `claim`).
No shadow. `definition` gets `id` = the term's slug so TermRef can link to it.
Replaces: `manifesto/ManifestoDemand.astro` (generalise), `ContentBox.astro` (retire).

```mdx
<Callout kind="definition" term="semi-direct democracy">
  Parliament and government carry on. Citizens gain two instruments: the initiative,
  which forces a vote on a change they propose — the accelerator — and the optional
  referendum, which strikes down a law parliament has passed — the brake.
</Callout>

<Callout kind="demand" label="The first demand">
  Know what you want. Not what is wrong — what you want instead.
</Callout>
```

### TermRef and Term card

What: `TermRef` marks the first use of a glossary term in a page; on hover or focus it
opens a Term card with the one-sentence definition, the canonical link and any alias.
Every term comes from one glossary source, `src/data/glossary.ts`, which also feeds
Callout `definition` boxes and the site map, so the three never drift.
Use when: a page uses a term the glossary defines and has not defined in its own text:
semi-direct democracy, citizens' initiative, optional referendum, double majority, ECI,
the total state, predistribution, citizens' wealth fund, requisite variety
(`R3-duplication-concepts-graph.md` Part B lists them with anchors). First use per page
only; later uses are plain text.
Never when: the term is defined in this page (link the Callout instead — a Term card on a
page that defines the term is noise); on the term's own canonical page; on phones as the
only route to the definition (the card must be reachable by tap and the link inside it
must work without hover).
Props (`TermRef`): `term: string` (glossary key), children = the visible text.
Glossary entry shape: `{ key, label, definition (≤ 30 words), href (canonical anchor), aliases?: string[], seeAlso?: string[] }`.
The "digital state" / "total state" pair is one entry with an alias, per R3.
Mechanics: the trigger is a link (`<a href={entry.href}>`) with a dotted underline in
accent-primary — a link first, a tooltip second. The card is a `popover` element opened
after a 650ms hover delay (Wikipedia's tuned value) or immediately on focus/tap,
positioned near the cursor, above every overlay, never clipped, closed on Escape or
pointer-out. Card: `--color-bg-primary`, 1px `--color-border`, `--radius-md`,
`--shadow-lg`, 22rem wide, small style, term as H4, definition, "Read: <page title>"
link. No JavaScript library; the Popover API with a `<details>` fallback for browsers
without it.
Replaces: nothing (new). Absorbs the two prose glossaries (`direct-democracy.md:317-346`,
`safeguards.md:27-50`) into the data file.

```mdx
A <TermRef term="optional-referendum">referendum that can strike a law down</TermRef>
is the brake; the initiative is the accelerator.
```

### KeyFigure

What: one number with its unit, a one-line label and its source. The site's rule is that
every number has a source; this component makes the rule visible.
Use when: a single magnitude carries a paragraph — 359 million voters, thirty years,
1.78%, 41%. In the 2/3–1/3 margin next to the paragraph that uses it, or in a row of two
or three inside `content`.
Never when: the number is invented or unsourced (then it is not published — R4 found
"65-75% savings" in `european-egovernment.mdx:91-95` and an invented dependency ratio in
`principles.md:70`); more than three in a row (that is a table); as a decorative "stat
tile" on the home page.
Props: `value: string`, `label: string`, `source: string`, `href?: string`,
`aside?: boolean`, `qualifier?: string` ("≈", "at least").
Style: figure style (40px, 600, `tnum`) in text-primary, label in body-ui, source in
small text-secondary with the link. `--color-bg-secondary`, `--radius-md`, padding `lg`.
Replaces: nothing (new).

```mdx
<KeyFigure value="41%" label="more often skipped: copy set wider than 80 characters per line" source="Baymard Institute, line-length readability study" href="https://baymard.com/blog/line-length-readability" aside />
```

### SideNote

What: a short aside in the right margin (2/3–1/3 layout): a source, a translation, a
caveat, a pointer to the chapter that argues the point in full.
Use when: the note comments on one paragraph and is under 60 words. This is the device
that replaces full restatement: "argued in full in [Cheap Is Wealth](/book/cheap-is-wealth)"
beside a two-sentence summary, instead of the fourth copy of the argument (R4 lists 20+
restatements).
Never when: the note is longer than the paragraph; on phones it stacks below the
paragraph, so it must still read in sequence; for opinions (ProvenanceNote).
Props: `label?: string` (eyebrow, e.g. "Source", "Argued in full"), children.
Style: small style, text-secondary, 1px `--color-border` on the left edge, no background,
no radius. Below 1024px it renders as an indented paragraph in the flow.
Replaces: nothing (new); `vision/CrossCuttingNote.astro` stays as the home/vision-specific
sticky variant.

```mdx
<SideNote label="Argued in full">
  Why cheapness, not ownership, is the target: [Cheap Is Wealth](/book/cheap-is-wealth).
</SideNote>
```

### ProvenanceNote

What: a small labelled line that says where a passage came from: dictated by the author,
researched by an agent and adopted by the author, proposed by an agent and not yet
adopted, or the author's opinion rather than a finding. Required by the editorial standard
in `src/content/AGENTS.md`.
Use when: a passage's provenance differs from the chapter's default (chapters are the
author's voice by default). R4 found agent research in the author's first person in
`safeguards.md`, `steering.md:92-108`, `who-it-earns-for.md:173-221`,
`choosing-people.md:117-190`; those passages carry `kind="researched"` or `kind="proposed"`
until the author adopts them. The four opinion flags in `R2` B6 become `kind="opinion"`.
Never when: the whole chapter has one provenance (that is frontmatter, `provenance:`);
as a disclaimer on every paragraph.
Props: `kind: 'dictated' | 'researched' | 'proposed' | 'opinion'`, `by?: string`,
`date?: string`, children (optional one-line note).
Style: small style, text-secondary, eyebrow label in front ("Researched, adopted" /
"Proposed, not yet adopted" / "Opinion, not a finding"), a 1px `--color-border` box with
`--radius-sm`, padding `sm`. It looks like a stamp, not a warning: no red, no icon.
Replaces: the four ad-hoc sentences in `R2` B6 (new component).

```mdx
<ProvenanceNote kind="proposed" by="agent, 2026-09-20">
  The Swiss-to-EU mappings below were proposed at the author's request and have not been adopted.
</ProvenanceNote>
```

### PullQuote

What: one sentence from the chapter, set in H3 serif, pulled into the margin or the
column as a landmark for a scanning reader.
Use when: a section runs past ~800 words of prose with no other structural element; the
sentence is verbatim from the chapter; R4's "His." lists are the candidates.
Never when: more than one per 1,000 words; to introduce a sentence not in the text; on
`/why` or `/manifesto`, whose Callouts already do this job.
Props: `aside?: boolean`, children.
Style: H3 serif, 400, text-primary, 2rem above and below, thin `--color-border` rules
above and below, no quotation marks, no left bar.
Replaces: nothing (new).

### SourceList

What: a `## Sources` block: title, link, one-line note per source.
Use when: a chapter cites more than five sources (`safeguards.md:386`,
`european-english.mdx:219`). Chapters with fewer keep inline links.
Props: `items: {title: string, url: string, note?: string}[]`.
Style: small style, ordered list, `--color-border` rule above.

### Figure

What: a chart or image with a caption and a source, in `wide` or `full`.
Use when: the decision aid below says "chart"; the data is in the repo as a typed array
with a source; the chart has a title that states the finding, not the axes.
Never when: fewer than three data points (KeyFigure); no source; a pie with more than
three slices; any 3D, gradient fill or animation.
Props: `caption: string`, `source: string`, `track?: 'wide' | 'full'`, children (an
`EUStatisticsChart` or an `<img>` with width/height set, `loading="lazy"`).
Style: `--radius-lg` on the image, caption H4 above, source small below. Chart series
colours are the card-hue `text` tokens in this order: blue, teal, indigo, green, yellow,
purple, red, gray — the same in both themes through the tokens.
Replaces: `InteractiveSection.astro` (retire; its three charts become Figures on the pages
whose argument they support, or nothing), `EuropeMap.astro` (retire unless a chapter
needs a map; none does today).

### Card and CardGrid

What: the one card. Title (H3 serif), body, optional link, optional icon at 32px beside
the title, one hue triplet.
Use when: index pages — a chapter in a layer, a benefit entry, an audience ("Who this is
for") — where every card links somewhere.
Never when: on a chapter, `/why` or `/manifesto`; as a "feature"; centred with an icon
above the title (the `align="center"` prop is removed); with `variant="gradient"`
(removed).
Props: `title: string`, `href?: string`, `linkText?: string`, `icon?: string`,
`color?: hue`, `variant?: 'default' | 'bordered'`.
CardGrid props: `columns: 2 | 3`, `align?: 'stretch' | 'start'`; the `stagger` prop is
removed (a decorative offset).
Style: hue triplet, 1px border, `--radius-md`, `--shadow-sm`, padding `xl`; hover
`--shadow-md` and border in the hue's text token; no scale.
Replaces: `ContentBox.astro` (retire), `why/WhyCardGrid.astro` (retire — its one
difference becomes `align="start"`), `StakeholderBenefits.astro` (retire).
`vision/LayerCard.astro` stays as the numbered-layer variant used by `LayerStack`, with
its radius changed to `--radius-md` and border to 1px.

### FAQ (accordion)

What: `<details>`-based question list; the site's only accordion.
Use when: genuinely optional material — a FAQ on the home page, an appendix table in a
chapter (`european-english.mdx`'s 60-item vocabulary), a sidecar's raw data.
Never when: to hide part of the argument; for the objections (they are the argument, they
stay open); more than one on a page.
Props: `items: {question: string, answer: string}[]`, `title?: string`.
Style: no container box, no hue, no shadow (`FAQ.astro:16` loses all three); each item a
`<details>` with a 1px rule, question in H4, chevron from `Icon` rotating 180°, answer in
body-ui. Open state animates 200ms opacity only.

### SiteMap page pattern

What: `/sitemap` — a static, multi-column list of every public page, grouped, labelled
"Site map", plus a link graph below it as a companion.
Why this shape: NN/g's site-map studies found interactive maps fail and multi-column
static lists beat single-column ones (61% vs 47% task success). The brief asked for an
infographic map; the graph delivers that as exploration, the list does the wayfinding.
Structure, in order:

1. H1 "Site map", Lead (one sentence: what the site contains and where to start).
2. `full` track, 3-column list on ≥ 1024px: one column per layer group from chapter
   frontmatter `layer` (frame, language, digital, robotics, path) plus one group for pages
   (`/`, `/vision`, `/why`, `/manifesto`, `/benefits`, `/support`). Each entry: title as a
   link, description in small text-secondary, `kind` badge (argument / proposal /
   playbook / glossary) in eyebrow style. Built from the content collection at build
   time; a hand-typed list is not allowed.
3. Figure, `full` track: the link graph rendered as static SVG at build time from
   `link-graph.json` (nodes = pages, edges = in-page links, node size = inbound links,
   grouped by layer, no forced simulation at runtime). Hover shows the title; click
   navigates. It needs no interaction to be read; the list above is the wayfinding tool.
4. SourceList-style block "Glossary": every glossary term with its definition and
   canonical link, from `src/data/glossary.ts`.

Never: a graph without the list; a map that needs a click to reveal structure; a list
that includes drafts, sidecars or `/docs/*` legacy routes.

### Kept as they are

`Header`, `Footer`, `ThemeToggle`, `Icon`, `IconLink`, `Button`, `Author`, `Newsletter`,
`AlgoliaSearch`, `seo/JsonLd`, `benefits/*`, `vision/FrameIntro`, `vision/LayerStack`,
`vision/CrossCuttingNote`, `vision/CallToAction`, `Hero` (with its hardcoded shadow
replaced by `--shadow-md` and the circular image kept). `DisplayTitle` is kept but its
`set:html` heading construction is replaced by a static tag map, and its margins by the
values in Typography.

## Choosing a presentation

The argument's shape decides the component. This is the FT Visual Vocabulary idea
applied to prose with components: name the shape, then take the row.

| Argument shape | Signal in the text | Presentation | Not this |
|---|---|---|---|
| Comparison, ≥ 3 things × ≥ 2 dimensions | "Switzerland does X, the EU does Y, Poland does Z" | ComparisonTable, `fact`/`proposed` columns | three paragraphs |
| Comparison, 2 things, same shape | before/after, cheap/expensive, us/them | Columns 1-1 with a Callout or list in each half | a two-column table (too thin) |
| Comparison, 2 things, 1 dimension | "A costs twice B" | one sentence with a KeyFigure | any component |
| Sequence in time | dates, "then", "within N years" | Timeline | Playbook, bullet list |
| Sequence of actions | "first", "what you can do", "the steps" | Playbook | Timeline, prose sections |
| Magnitude, one number | "359 million", "thirty years" | KeyFigure in the margin, with source | a bold number in the sentence |
| Magnitude, several numbers | rates across countries, years | Figure (bar chart), or ComparisonTable with `numeric` | pie, prose list of numbers |
| Part of whole | "a third of", shares | ComparisonTable with a % column; stacked bar if ≥ 4 parts | pie with > 3 slices |
| Cause → effect chain | "because… so… therefore" | `FrameIntro` (numbered argument chain) on index pages; Playbook-shaped list without numbers in chapters | four paragraphs each starting "So" |
| Position vs objection | "the objection is", bold lead-ins | ObjectionList | H3 per objection, FAQ |
| Claim needing evidence | "I cannot settle", "what would settle it" | EvidenceBox | a hedge in every paragraph |
| Fact against the author | "the strongest case against me" | EvidenceBox `against` | burying it two-thirds down |
| Definition, load-bearing | the chapter's one new term | Callout `definition` + glossary entry | restating it in four chapters |
| Definition, in passing | a term from another chapter | TermRef | a footnote |
| The ask | "know what you want", the demand | Callout `demand` | a bold paragraph |
| Provenance differs from default | "this is my opinion", agent research | ProvenanceNote | silence, or a disclaimer sentence |
| Cross-reference | "argued in full in" | SideNote or ChapterFooter | restating the argument |
| Peers, all links | chapters in a layer, audiences | CardGrid on an index page | cards inside a chapter |
| Optional appendix | vocabulary table, raw data | FAQ / `<details>` | a 60-row table in the flow |

Two shapes deliberately have no component: distribution and correlation. The corpus has
no such data; if it arrives, it is a Figure with a source, and this table gains a row.

## Page templates

Each template is the ordered list of layouts and components. A page built from a
template has no other blocks.

### Home (`/`)

1. Header.
2. Hero: display title, Lead, one primary Button ("Start with the frame") and one text
   link. `content` track. No image carousel; the EU image at ≤ 12rem.
3. `FrameIntro`: the four-step argument chain (from `vision-content.ts`), `content`.
4. Section "Three layers, in build order": `LayerStack` in `wide`, `CrossCuttingNote` as
   its aside (2/3–1/3 on ≥ 1024px).
5. Section "Who this is for": three `Card`s in `CardGrid columns={3}`, every card a link
   to a benefits entry or chapter. This is the one 3-column grid on a non-index page and it
   is allowed because each card is a link to a page for that audience; if a card stops
   linking, the section becomes a list.
6. Section "Common questions": `FAQ`, at most six items.
7. `CallToAction` (title, two paragraphs, two Buttons), `content`.
8. Author, Newsletter as a 1/2–1/2 `Columns` in `wide`.
9. Footer.

Removed from today's home: `GradientSection`, the `IconLink` row, `DisplayTitle`'s centred
headings.

### Index page (`/book`, `/benefits`, `/sitemap`)

1. Header, back link.
2. H1, Lead (one paragraph, 66ch).
3. One Callout `claim` with the reading order ("Start with the frame") and a primary
   Button — replaces the banner with the blurred glow.
4. One Section per group (layer), each a `CardGrid columns={3}` of `Card`s: title,
   description from frontmatter, "Read" link with arrow. Groups come from frontmatter
   `layer`, not a hardcoded slug array.
5. Footer navigation row: back / forward links in small style.

The reader-facing label follows the IA document (R3 Option 3: URLs stay `/book`, the
visible name changes). The template does not depend on the label.

### Chapter (`/book/<slug>`)

1. `ArticleLayout` (grid, back link, H1 display, meta line in small: date, reading time,
   `kind` badge).
2. First paragraph is the lead by convention (no Lead component); a `ProvenanceNote` if
   the chapter's default provenance is not "dictated".
3. Body in `content`: H2 sections. Within the body, per the decision aid: at least one
   non-prose component where R2/R4 found a pattern, and never more than four consecutive
   paragraphs without one of: H2/H3, list, ComparisonTable, Timeline, Playbook,
   Callout, EvidenceBox, KeyFigure, SideNote, PullQuote, Figure.
4. Apparatus in the margin (2/3–1/3): SideNote, KeyFigure `aside`, EvidenceBox `aside`.
5. `TableOfContents` rail on ≥ 1280px when the chapter has ≥ 5 H2s.
6. `ObjectionList` where the chapter answers objections.
7. `EvidenceBox` (one or two).
8. `MeansForYou` if the chapter has specific actions; otherwise nothing.
9. `SourceList` if > 5 sources.
10. `ChapterFooter` (always).

### Objections page (`/why`)

1. Header, back link to `/vision`.
2. H1 "The objections, answered", Lead with `claim`.
3. Callout `claim`: what is being claimed, in one paragraph, with links to the frame
   chapter and `/vision`. No re-argument.
4. One `Section` per objection (eyebrow "Objection 0N"), each containing: the answer as
   three to five paragraphs in `content` (R4: the current 900 words of restatement go),
   a `SideNote` "Argued in full" to the chapter, an `EvidenceBox` where the answer is
   unevidenced. The EvidenceBoxes are the page's centre of gravity; every section that
   has one shows it in the margin on wide screens.
5. Closing: one line and a link to `/manifesto` (not the "carry the idea" paragraph,
   which lives on `/manifesto`).

Width: the page adopts the article grid; `why.astro`'s 68rem frame and `WhyAnswer`'s
70ch cap go. `WhyAnswer` is retired (the grid does its job).

### Manifesto (`/manifesto`)

1. Header. Eyebrow "A manifesto", H1 display, Lead (two paragraphs).
2. Body in `content`, H2 sections as today.
3. The four `Callout kind="demand"` boxes stay where they are in the text, and the page
   opens with a `Playbook`-style list of the four demands, each linking to its Callout —
   R4: "a reader should be able to see all four together".
4. `ProvenanceNote` where the register breaks (the semi-direct democracy precision at
   `manifesto.mdx:214-220` becomes a TermRef and a link instead).
5. Closing Callout `demand` ("So — how would you want to live?"), then two Buttons (read
   the vision, see the principles).

Width: the article grid; `manifesto.astro`'s 52rem goes.

### Site map (`/sitemap`)

As in the SiteMap component pattern: H1, Lead, 3-column list in `full`, link-graph
Figure in `full`, Glossary list. Linked from the Footer on every page and from the
Header's mobile menu.

### Commentary entry (`/commentary/<slug>`)

`ArticleLayout`; meta line with source outlet and date; the source paragraph as a
Callout `claim` labelled "What the source reports"; "My comment" as the body; no
ChapterFooter, a small "More commentary" link instead.

## Do's and Don'ts

Each rule is a test an agent or a script can run.

1. **No hex, rgb or Tailwind palette class in a component.** `grep -E '#[0-9a-f]{3,8}|rgba?\(|text-(gray|blue|white)' src/components` returns only `_tokens.scss`-derived chart palettes in `Figure`. Today: 19 hits in `InteractiveSection`, 17 in `EUStatisticsChart`, 5 in `AlgoliaSearch`, 5 in `EuropeMap`, 2 in `Hero`.
2. **No `max-w-*` on a prose container outside the grid.** `grep -rn 'max-w-' src/pages src/layouts` returns only `Layout.astro`'s container and form fields.
3. **Every long-form route consumes `--article-measure`.** `/why`, `/manifesto`, `/principles`, `/vision/*` included. Rendered chars-per-line on every chapter at 1280px: 60–72.
4. **Every page has exactly one `<h1>`, a `<main id="main">`, a skip link, and a named mobile menu button.** axe `button-name`: 0 nodes (26 today).
5. **No text below 4.5:1 in either theme.** axe `color-contrast`: 0 serious nodes (245 today). The table in Colors is the check; new pairs are computed before use.
6. **No text at reduced opacity.** `grep -rn 'opacity: 0\.[0-9]' src/components` finds no rule applied to text.
7. **No more than four consecutive paragraphs without a structural element** in any published chapter. A script over `src/content/docs/book/*.md{,x}` counts runs of `<p>`-equivalent blocks; max run = 4.
8. **Every number has a source.** Every `KeyFigure` has `source`; every `ComparisonTable` and `Figure` has `source`; a regex for `\d+(\.\d+)?%` in a chapter finds a link, a KeyFigure or a SourceList entry within the same section.
9. **Every chapter ends with `ChapterFooter`** and has at least one non-prose component. Build-time check in `[...slug].astro`: missing `related:` frontmatter fails the build.
10. **One `full` block per page, at most.** Count of `.span-full` per rendered page ≤ 1.
11. **No 3-column grid outside index pages and the home "Who this is for" section.** `CardGrid columns={3}` appears only in `src/pages/**/index.astro`, `benefits.astro`, `sitemap.astro`, `index.astro`.
12. **No shadow on editorial surfaces.** `--shadow-*` appears only in `Card`, `Header`, the Term card and the mobile menu.
13. **No radius above `--radius-md` except on images.** `grep -rn 'rounded-\(xl\|2xl\|3xl\)' src` returns nothing.
14. **No icon without a word, no icon in a circle, no emoji as a design element.** `grep -rn 'rounded-full' src/components` matches only number badges and the avatar; no `Card` has `icon` without `title`.
15. **No hover scale, no entrance animation, no unconditional smooth scroll.** `grep -rn 'scale-\[\|@keyframes' src/components` returns only FAQ's 200ms opacity fade.
16. **No coloured left border on a box.** `grep -rn 'border-l-4\|border-left: [3-9]px' src/components` matches only the blockquote rule in `global.scss`.
17. **One glossary source.** `src/data/glossary.ts` is the only file that defines a term; `TermRef`, Callout `definition` and the site map import it. A term string that is not a glossary key fails the build.
18. **First use only.** A page contains at most one `TermRef` per term.
19. **EvidenceBox ≤ 2, PullQuote ≤ 1 per 1,000 words, MeansForYou ≤ 1 and ≤ 120 words, Callout `demand` ≤ 1 per 800 words** per page. Counted by the same script as rule 7.
20. **Headings are Playfair 700 or 400, never 300; body is Inter 400.** `grep -rn 'font-light' src` returns nothing.
21. **Tables never scroll the page.** Every `<table>` has a wrapper with `overflow-x: auto`; no horizontal overflow at 375px on any route.
22. **Nothing is centred except the Hero title and KeyFigure values in a row.** `grep -rn 'text-center' src/components src/pages` matches only those.
23. **Dark and light are the same layout.** A page hardcoded to one theme (`/vision/digital-integration` today, `03-rendered-audit.md:25`) is a bug.
24. **No content in a component.** A component with English prose baked in (`WhyDigitalReform`, `StakeholderBenefits`, `InteractiveSection` data) is retired or its content moved to the collection.

Don'ts stated once, from the design-review blacklist and this site's history: purple or
blue-to-purple gradients; icon-in-circle feature grids; centred everything; uniform large
radius; decorative blobs, waves and dividers; emoji as design; coloured left borders on
cards; "Welcome to" copy; hero → 3 features → testimonials → CTA rhythm; `system-ui` as
the display font; `localhost` links; "coming soon" placeholders (`SearchBar.astro`).

## Migration

In dependency order. Each step is one task; the first four unblock everything after them.

| # | Step | Files | Replaces / retires |
|---|---|---|---|
| 1 | Add the proposed tokens (`--text-xs`, `--text-sm`, `--leading-*`, `--tracking-eyebrow`, `--font-mono`, `--space-*`) | `src/styles/_tokens.scss` | hardcoded `0.8125rem`, `0.9375rem`, `1.7`, `0.1em` in 6 components |
| 2 | `ArticleGrid` with named tracks; `ArticleLayout` adopts it; `.prose` heading weights to 700/400, H2 to `--text-3xl`; `h4`–`h6` to Inter 600 (`Layout.astro:126` sets serif on all six levels today); underline prose links | `src/components/ArticleGrid.astro`, `src/layouts/ArticleLayout.astro`, `src/layouts/Layout.astro`, `src/styles/global.scss` | six `max-w-*` prose widths, `font-light` |
| 3 | Move `/why`, `/manifesto`, `/principles` onto `ArticleLayout`; delete `/vision/*` legacy layer pages or redirect | `src/pages/why.astro`, `manifesto.astro`, `principles.astro`, `vision/*.astro` | `WhyAnswer`, the 68rem/52rem frames |
| 4 | Rename and generalise: `WhySection` → `Section`, `WhyLead` + `ManifestoLead` → `Lead`, `WhyEvidenceNote` → `EvidenceBox`, `ManifestoDemand` → `Callout` | `src/components/{Section,Lead,EvidenceBox,Callout}.astro` | the `why/` and `manifesto/` folders |
| 5 | Retire dead code: `ContentBox`, `Logo`, `ReasonBlock`, `SearchBar`, `StakeholderBenefits`, `WhyCardGrid`, `Timeline` (horizontal), `GradientSection` | delete | — |
| 6 | Merge `TimelineContainer` + `TimelineBlock` → `Timeline` (data-driven); move `WhyDigitalReform`'s prose into the chapter it belongs to, then delete it | `src/components/Timeline.astro` | three timelines → one |
| 7 | `Card`: remove `align`, `gradient`, hover scale; `CardGrid`: remove `stagger`, add `align`; `FAQ`: strip container box, shadow, hue; `LayerCard`: radius and border | `Card.astro`, `CardGrid.astro`, `FAQ.astro`, `vision/LayerCard.astro` | four card shapes → one plus `LayerCard` |
| 8 | New: `Objection`, `ObjectionList`, `MeansForYou`, `ChapterFooter` (+ `related:` frontmatter), `ComparisonTable`, `Playbook`, `KeyFigure`, `SideNote`, `ProvenanceNote`, `PullQuote`, `SourceList`, `Figure` | `src/components/*.astro`, `src/content/config.ts` | bold lead-ins, italic footers, raw tables |
| 9 | Glossary: `src/data/glossary.ts` from R3 Part B; `TermRef` + Term card; Callout `definition` registers anchors | `src/data/glossary.ts`, `src/components/TermRef.astro` | the two prose glossaries |
| 10 | `Figure` adopts `EUStatisticsChart` with token series colours; retire `InteractiveSection`, `EuropeMap`, `Testimonials` (not on the production home) | `EUStatisticsChart.astro` | 36 hardcoded colours |
| 11 | Frontmatter `layer` and `kind` on every chapter; `/book` index groups by `layer`; `/sitemap` page from the collection + `link-graph.json` build step | `src/content/config.ts`, `src/pages/book/index.astro`, `src/pages/sitemap.astro`, `scripts/` | the hardcoded `GROUPS` array |
| 12 | Chapter migration, worst wall-of-prose first (R2 B9): `choosing-people`, `the-total-state`, `new-cities`, `cheap-is-wealth`, `the-shorter-week`, then the rest | `src/content/docs/book/*` | — |
| 13 | `DisplayTitle`: static tag map, margins from Typography; `Hero`: token shadow; `Newsletter`: remove `outline-none`; Footer description from `vision-content.ts` | those files | — |

Steps 1–4 are 5 points together; 5–7 are 3; 8 is 8; 9 is 5; 10–11 are 5; 12 is 13 and
is editorial work paced by `src/content/AGENTS.md`; 13 is 2.

## Proposed additions

Everything this document wants and the repo lacks, in one place, so nothing is invented
inside a component:

- Tokens: the seven type tokens listed under Typography; `--space-xs … --space-section`
  matching the spacing scale in the front matter.
- Frontmatter (`src/content/config.ts`, docs schema): `layer`, `kind`, `related: string[]`,
  `provenance?: 'dictated' | 'researched' | 'proposed'`.
- Data: `src/data/glossary.ts`; a build step that writes `link-graph.json` from the
  collection (R3 built one by hand from grep; the script replaces it).
- Components: fourteen new files, listed in Migration step 8, 9 and 2.
- Checks: one script, `scripts/design-lint.mjs`, that runs rules 1, 2, 6, 7, 8, 13, 14,
  15, 16, 19, 20 and 22 over `src/` and the built `dist/`, and prints a count per rule.
  Zero processed files is a failure, not a pass.

## Verification of this document

- Front matter parses as YAML; every `{...}` reference resolves to a key in the front
  matter.
- Every component named in Page templates has an entry in Components.
- Every `--token` named in the body exists in `src/styles/_tokens.scss`, or is listed
  under Proposed additions.
- Section order follows the design.md specification (`github.com/google-labs-code/design.md`,
  `docs/spec.md`): Overview, Colors, Typography, Layout, Elevation & Depth, Shapes,
  Components, Do's and Don'ts; the extra sections are preserved by the spec's rule for
  unknown headings.
