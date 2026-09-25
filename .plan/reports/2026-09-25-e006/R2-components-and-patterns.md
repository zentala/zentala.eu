# R2 — Components and content-pattern inventory

## TLDR

Read-only inventory, no code changed. **Part A**: 43 `.astro` files + 7 `.ts` data/type
modules under `src/components/**`. **9 are dead code** (zero imports anywhere:
`ContentBox`, `Logo`, `ReasonBlock`, `SearchBar`, `StakeholderBenefits`, `WhyCardGrid`
— plus `Timeline`, `InteractiveSection`'s two chart deps and `Testimonials`/
`WhyDigitalReform` are showcase-or-preview-only, never reached from a page a real
visitor lands on). The E004 finding holds: **three timeline shapes**
(`Timeline`, `TimelineBlock`+`TimelineContainer`, and `WhyDigitalReform` as a
hardcoded content preset around the second) and **four card shapes** (`Card`,
`ContentBox`, `ReasonBlock`, `LayerCard`) that all read the same
`--card-<hue>-{bg,border,text}` tokens and could collapse to one parametrised
card + one parametrised timeline. Every component reads theme tokens; only
data-viz components (`EUStatisticsChart`, `EuropeMap`) and the unused `Logo`
hardcode raw colour values (chart series colours, which is legitimate).

**Part B**: read all 30 book chapters (8 are `draft: true` stubs, 9–11 lines,
no analyzable structure) plus `manifesto.mdx` and `why.mdx`. Found and counted
6 repeating patterns with real hit counts (evidence asides, "what this means
for you" closers, objections-with-answers, a cross-link footer paragraph,
comparison/decision tables, opinion-flag sentences). Two patterns named in the
task brief **do not exist** in this corpus and are reported as zero, not
guessed at: glossary/term-list sections, and year-range timelines in prose
(those only live in the Astro `Timeline` component, never in book text).
`why.mdx` already has 4 of the needed components (`WhySection`, `WhyLead`,
`WhyAnswer`, `WhyEvidenceNote`) built for exactly this job — the book chapters
don't use any of them, they're all plain Markdown.

---

## PART A — components

### A1. Dead code (zero references in `src/pages` or `src/content`)

| Component | Renders | Verdict |
|---|---|---|
| `src/components/ContentBox.astro` | Coloured slot box, 6 hues, no icon/link | retire (superseded by `Card`) |
| `src/components/Logo.astro` | Inline SVG sprite (`logo-full`/`logo-sygnet`) with `color`/`width`/`height` props | retire — Header/Footer use `<Image>` + separate PNG/SVG assets instead |
| `src/components/ReasonBlock.astro` | Numbered icon block, near-identical to `TimelineBlock` (emoji icon instead of `Icon`, no container) | retire — merge into `TimelineBlock` |
| `src/components/SearchBar.astro` | Static search input + "coming soon" placeholder | retire — superseded by `AlgoliaSearch.astro` |
| `src/components/StakeholderBenefits.astro` | Hardcoded 4-stakeholder-group grid, English prose baked in, all inline `style=` (no `data-color` pattern) | retire — content duplicated and superseded by `src/components/benefits/*` |
| `src/components/why/WhyCardGrid.astro` | Top-aligned card grid variant "for /why" (own doc comment says so) | retire, or wire up — `why.mdx` imports `WhySection`/`WhyLead`/`WhyAnswer`/`WhyEvidenceNote` only, never this |

### A2. Used only by the showcase (`src/pages/ui/index.astro`) and/or the
preview backup (`src/pages/home-classic.astro`) — never reached from a page a
real visitor can land on today (`src/pages/index.astro`, `/why`, `/vision`,
`/benefits`, `/manifesto`, `/book/*`)

| Component | Used in | Verdict |
|---|---|---|
| `src/components/Timeline.astro` | `ui/index.astro` only | merge-with-TimelineBlock — pick one timeline shape, retire the loser |
| `src/components/InteractiveSection.astro` | `home-classic.astro`, `ui/index.astro` | keep as a unit if EU stats charts return to production; currently showcase-only |
| `src/components/EUStatisticsChart.astro` | only via `InteractiveSection` | same — orphaned together |
| `src/components/EuropeMap.astro` | only via `InteractiveSection` | same — orphaned together |
| `src/components/Testimonials.astro` | `home-classic.astro`, `ui/index.astro` | not in `index.astro` — decide: bring back or retire |
| `src/components/WhyDigitalReform.astro` | `home-classic.astro`, `ui/index.astro` | this is the "third timeline" — retire once `Timeline`/`TimelineBlock` are merged |

### A3. Timeline family (E004 finding, verified)

Three shapes, all reading the same `--card-<hue>-*` tokens from
`src/styles/_tokens.scss`, none hardcoding colour:

1. `src/components/Timeline.astro` (86 lines) — horizontal 3-up strip, single
   `color` prop, self-contained styling. Used only in `ui/index.astro`.
2. `src/components/TimelineBlock.astro` (94 lines) + `TimelineContainer.astro`
   (61 lines) — vertical numbered list with a connector rail drawn per-block;
   `TimelineBlock` takes `number/icon/title/paragraphs/highlight/accentColor`.
   Reachable only through `WhyDigitalReform.astro`.
3. `src/components/WhyDigitalReform.astro` (61 lines) — not a rendering
   component at all, just four hardcoded `<TimelineBlock>` calls with English
   prose baked in ("Adapting to a New Economic Era" etc.), wrapped in one
   `<TimelineContainer>`. Used in `home-classic.astro` + `ui/index.astro`.

**Proposed merge**: keep `TimelineBlock` + `TimelineContainer` (vertical, the
richer shape — icon, highlight box, connector rail); fold `Timeline.astro`'s
horizontal-strip use case into it as a `layout="horizontal" | "vertical"` prop,
or retire `Timeline.astro` outright since its only caller is the showcase.
Delete `WhyDigitalReform.astro`'s hardcoded content once/if that copy is
needed elsewhere — right now it duplicates prose that exists nowhere else, so
retiring it loses real content, not just markup.

### A4. Card family (E004 finding, verified — four shapes)

All four read `--card-<hue>-{bg,border,text}`; none hardcodes a colour.

| Component | Shape | Props | Verdict |
|---|---|---|---|
| `src/components/Card.astro` (141 lines) | Icon + title + slot body + optional link, 8 hues, 3 variants (`default/gradient/bordered`), 2 alignments | `icon?, title, color?, href?, linkText?, variant?, align?` | **keep — canonical**, used in 10 files incl. `content/docs/index.mdx`, `all.mdx`, book ch., `/support`, `/vision/*` |
| `src/components/ContentBox.astro` (67 lines) | Slot box, optional title, 6 hues, no icon/link/variant | `title?, color?` | merge-into-Card (Card with `icon` omitted and `variant="default"` already covers this) |
| `src/components/ReasonBlock.astro` (78 lines) | Numbered block, emoji icon, highlight box, 3 hues | `number, icon, title, paragraphs, highlight?, color?` | merge-into-TimelineBlock (near-duplicate, see A3) |
| `src/components/vision/LayerCard.astro` (74 lines) | Numbered layer badge, position label, bullet list, "read more" link, 3 tones | `Layer` type: `level, position, title, summary, points, href, linkText, tone` | keep — distinct enough (badge+bullets+link shape) to stay separate, used via `LayerStack` on `/` and `/vision` |

`CardGrid.astro` (51 lines, `stagger?/columns?/gap?`, 9 usages) and
`why/WhyCardGrid.astro` (55 lines, `columns?`, 0 usages, dead — see A1) are the
two grid wrappers; `WhyCardGrid`'s only difference from `CardGrid` is
`align-items: start` instead of stretch-to-tallest — a single `align?: 'stretch'
| 'start'` prop on `CardGrid` would absorb it and let A1 delete the file
outright instead of leaving it to "wire up".

### A5. Everything else

| Component | Renders | Props | Used in (files) | Tokens/hardcoded | Verdict |
|---|---|---|---|---|---|
| `Header.astro` | Sticky site nav, search, theme toggle, mobile menu | none (reads `IS_PREVIEW`) | `layouts/Layout.astro` (1, sitewide) | tokens only | keep — core |
| `Footer.astro` | Site footer, link columns from hardcoded `footerSections` | none | `layouts/Layout.astro` (1, sitewide) | tokens only | keep — core |
| `seo/JsonLd.astro` | Serializes JSON-LD `<script>` blocks | `graphs: Record<string,unknown>[]` | `layouts/Layout.astro` (1, sitewide) | n/a | keep — core |
| `ThemeToggle.astro` | Light/dark toggle button, `.dark` class + cookie/localStorage | none | `Header.astro` (1, sitewide via Header) | tokens only | keep — core |
| `Icon.astro` | Wraps `astro-icon` (Lucide), fixed 16/20/24/32 scale | `name, size?, label?, class?` | 8 files (mostly other components: `Card`, `Hero`, `IconLink`, `ThemeToggle`, `TimelineBlock`) | n/a (uses `currentColor`) | keep — core, single icon system per its own header comment |
| `IconLink.astro` | `<a>` + `Icon`, left/right position | `href, icon, iconPosition?, class?, ariaLabel?, target?` | 2 (`home-classic`, `index`) | n/a | keep |
| `AlgoliaSearch.astro` | Search input + results dropdown shell, no live Algolia wiring yet (client script only shows/hides) | `placeholder?, buttonText?` | 2 (`Header.astro`, `pages/search.astro`) | tokens only | keep — production, but note: not actually calling Algolia yet (dead-end fetch stub) |
| `DisplayTitle.astro` | `h1`–`h6` wrapper with level-based Tailwind classes, built via `Fragment set:html` string concat | `level?, class?, title?, marginTop?` | **17 files** — pages across `/benefits`, `/docs/*`, `/manifesto`, `/principles`, `/why`, etc. | 1 hardcoded (`var(--color-text-primary)` string-interpolated, not a real hardcode) | keep — most-used component in the repo; `set:html` string-building is worth a follow-up (XSS-shaped pattern even though inputs are static) |
| `GradientSection.astro` | Gradient background wrapper section | `variant?, opacity?, rounded?, padding?, class?, id?` | 2 (`home-classic`, `index`) | 1 hardcoded (`rgba(255,255,255,0.1)` border colour) | keep |
| `Hero.astro` | Big title + description + action buttons + circular image | `title, description, image, actions` | 4 (`content/docs/index.mdx`, `home-classic`, `index`, `ui/index`) | 1 hardcoded (`0 4px 6px -1px rgba(0,0,0,0.1)...` shadow) | keep |
| `Button.astro` | `<a>`/`<button>`, 5 variants × 5 sizes, tokens via `.button-*` classes | `variant?, size?, href?, type?, fullWidth?, disabled?, id?, class?, ariaLabel?` | 3 (`vision/CallToAction`, `home-classic`, `index`) | none | keep — core |
| `FAQ.astro` | `<details>` accordion list, 4 hues | `items, title?, color?` | 3 (`home-classic`, `index`, `ui/index`) | none | keep — reaches production via `index.astro` |
| `Testimonials.astro` | Quote card grid with avatar/fallback | `items, color?` | 2 (`home-classic`, `ui/index`) | none | see A2 — not in production `index.astro` |
| `Newsletter.astro` | Email signup form, posts to a hardcoded Appwrite function URL | none | 2 (`home-classic`, `index`) | none (colours) | keep, but flag: `PUBLIC_APPWRITE_NEWSLETTER_FUNCTION_ID` is interpolated literally into the URL string (`.../{import.meta.env...}/...`) instead of using the env var — looks like a broken template, worth a bug entry |
| `Author.astro` | Bio card with photo + social links | `color?` | 3 (`home-classic`, `index`, `ui/index`) | none | keep — reaches production |
| `EUStatisticsChart.astro` | Chart.js canvas (bar/line/pie/radar) | `title, description?, chartType?, data, yAxisLabel?, xAxisLabel?, height?` | 2, both via `InteractiveSection` | 17 hardcoded `rgba(...)` — chart series palette, legitimate for data viz | see A2 |
| `EuropeMap.astro` | Country benefit list/map | `countries?, defaultColor?, highlightColor?, title?` | 2, both via `InteractiveSection` | 5 hardcoded `rgba(...)`/hex in default per-country data | see A2 |
| `InteractiveSection.astro` | Wraps 3× `EUStatisticsChart` + 1× `EuropeMap` with hardcoded EU stats | `color?` | 2 (`home-classic`, `ui/index`) | 19 hardcoded (chart series colours passed as literal data) | see A2 |
| `benefits/BenefitPicker.astro` | Searchable nav list of all benefit entries, swap-in-place on `/benefits` | `activeSlug?, swapInPlace?` | 2 (`benefits.astro`, `benefits/[slug].astro`) | tokens only | keep — core |
| `benefits/BenefitSection.astro` | One entry's full content block (tiles, links, permalink) | `entry, hidden?, headingLevel?, permalink?` | 2 (`benefits.astro`, `benefits/[slug].astro`) | tokens only | keep — core |
| `benefits/{types,entries,countries,regions,stakeholders}.ts` | Data + types: 8 countries + 5 regions + 8 stakeholders = 21 `BenefitEntry` records | n/a | consumed by `BenefitPicker`/`BenefitSection` | n/a | keep — well-factored single source of truth, doc comment explains the frame it follows |
| `manifesto/ManifestoLead.astro` | Opening standfirst, left-border accent | `paragraphs: string[]` | 1 (`pages/manifesto.astro`) | tokens only | keep |
| `manifesto/ManifestoDemand.astro` | Callout aside for the manifesto's core sentence | `label?` | 1 file (`content/docs/manifesto.mdx`), used repeatedly inside it | tokens only | keep — this is the "callout demand" pattern named in the brief, already componentized |
| `vision/FrameIntro.astro` | Numbered argument-chain + conclusion | `eyebrow, title, steps: FrameStep[], conclusion, as?` | 3 (`home-classic`, `index`, `vision/index`) | tokens only | keep |
| `vision/LayerStack.astro` | Renders `Layer[]` via `LayerCard` + connector rail between levels | `layers: Layer[], connectorLabel?` | 2 (`index`, `vision/index`) | tokens only | keep |
| `vision/CrossCuttingNote.astro` | Sticky aside, principle list | `eyebrow, title, paragraphs, principles` | 2 (`index`, `vision/index`) | tokens only | keep |
| `vision/CallToAction.astro` | Closing section: title + paragraphs + `Button[]` | `title, paragraphs, actions: Action[]` | 2 (`index`, `vision/index`) | tokens only | keep |
| `vision/types.ts` | Shared types: `Layer, FrameStep, Action, LayerTone, FrameForm, LayerPoint, LayerContent` | n/a | consumed by the 4 vision components above | n/a | keep |
| `why/WhySection.astro` | Section wrapper: eyebrow + h2 + optional lead + slot body | `eyebrow?, title, lead?, id?` | 1 (`content/docs/why.mdx`), used repeatedly | tokens only | keep |
| `why/WhyLead.astro` | Opening lead paragraphs + optional claim | `paragraphs: string[], claim?` | 1 (`why.mdx`) | tokens only | keep |
| `why/WhyAnswer.astro` | Prose body held to 70ch measure | none (slot only) | 1 (`why.mdx`), repeatedly | tokens only | keep |
| `why/WhyEvidenceNote.astro` | "What would settle this" aside — **already builds the Part-B evidence pattern** | `title?` | 1 (`why.mdx`) | tokens only | keep — see Part B, pattern 1 |
| `why/WhyCardGrid.astro` | see A1 | `columns?` | 0 | none | retire/wire-up |
| `__tests__/test-utils.ts` | Test helper (not a page component) | n/a | test files only | n/a | keep, out of scope for merge/retire verdicts |

---

## PART B — recurring content patterns in the book chapters

Scope actually read: 22 substantive chapters (`.md`/`.mdx`, excludes 8
`draft: true` stubs of 9–11 lines each — `digital-receipts`,
`european-blockchain-archives`, `european-elearning-system`,
`media-cultural-integration`, `near-zero-transaction-costs`,
`predictive-healthcare-system`, `unified-payment-zone`,
`economic-growth-language-unity`), plus `manifesto.mdx` and `why.mdx`.

### B1. "What would settle it" — evidence asides

**6 chapters**, inconsistent presentation (already exists as a component,
`why/WhyEvidenceNote.astro`, but only used on `/why` — never in the book):

- `src/content/docs/book/cheap-is-wealth.md:132` — inline sentence, no heading
- `src/content/docs/book/direct-democracy.md:285` — `## What I cannot settle, and what would settle it`
- `src/content/docs/book/new-cities.md:182` — `**What would settle it.**` bold lead-in
- `src/content/docs/book/the-shorter-week.md:155` — `**What would settle it.**` bold lead-in
- `src/content/docs/book/the-total-state.md:164` — inline sentence
- `src/content/docs/book/who-it-earns-for.md:223` — `## What would settle it` heading

**Proposed**: reuse `WhyEvidenceNote` (title, slot body) in the book chapters
instead of three different ad-hoc formats — it already exists.

### B2. "What this means for you" — closing section

**7 chapters**, all consistently `## What this means for you` as an `<h2>`:
`designing-our-retirement.md:166`, `education-and-migration.md:245`,
`political-path.md:177`, `redesigning-the-state.md:193`,
`robotic-reindustrialisation.md:141`, `the-total-state.md:194`,
`who-it-earns-for.md:245`. Today it's a plain `##` heading + prose, no visual
distinction from any other section. **Proposed component**: `ChapterTakeaway`
(or reuse `WhySection` with a fixed `eyebrow="What this means for you"`) —
slot body, maybe a subtle accent border so it reads as "the payoff" rather
than just another heading.

### B3. Objections-with-answers

**4 headings across 3 chapters** (not 1:1 — `the-total-state.md` has two):
`choosing-people.md:192` (`## The objections, which I am not going to settle
for you`), `new-cities.md:138` (`## The objections, which are good ones`),
`the-total-state.md:54` (`## The objection I have to make against myself`) and
`the-total-state.md:99` (`## The counterweight`). Structure today: one `<h2>`,
then N paragraphs each opening with a **bold objection statement** followed by
prose answer (`choosing-people.md:196` `**This is technocracy wearing a
rosette.**`, `:212` `**Who defines competent?**`, `:225` `**It could create a
closed profession of governing.**` — 5 objections in that one chapter alone).
**Proposed component**: `Objection` — `claim` prop rendered bold/highlighted,
slot for the answer prose — repeated inside an `ObjectionList` wrapper.

### B4. Footer cross-link paragraph ("Part of the EU Reform Vision…")

**13 of 22 chapters**, always the last block, always italic, always opens
`*Part of the [EU Reform Vision](/vision). ...*` and links 2–4 sibling
chapters plus usually `/manifesto` or `/why`: `cheap-is-wealth.md`,
`choosing-people.md`, `direct-democracy.md`, `education-and-migration.md`,
`european-science.md`, `first-move.md`, `political-path.md`,
`redesigning-the-state.md`, `robotic-reindustrialisation.md`, `safeguards.md`,
`steering.md`, `the-total-state.md`, `who-it-earns-for.md`. Two more
(`designing-our-retirement.md`, `principles.md`) close with a similar italic
cross-reference paragraph but don't use the literal lead-in phrase. Two
chapters (`new-cities.md`, `the-shorter-week.md`) skip it entirely and close
with first-person direct address instead. **Proposed component**:
`ChapterFooter` — `parts: {label, href}[]` — turns 13+ hand-written prose
paragraphs (easy to typo a path in) into one data-driven list, and makes the
2 skippers a visible, deliberate exception instead of an accident.

### B5. Comparison / decision tables

Only **2 chapters have an actual Markdown table** (not just Swiss/EU/Poland
mentions in prose, which appear in 6 files: `direct-democracy.md`,
`first-move.md`, `safeguards.md`, `steering.md`, `the-total-state.md`,
`manifesto.mdx`):

- `src/content/docs/book/safeguards.md:251-258` — the literal Swiss/EU/Poland
  comparison the brief expected: `| | Switzerland (fact) | EU (proposed) |
  Poland (proposed) |`, 5 data rows (electorate, initiative/referendum
  thresholds, collection periods, chamber majority).
- `src/content/docs/book/european-english.mdx:45-54` — a different shape,
  `| Decision | Proposal | Why |`, 8 rows — a **playbook-as-table**, not a
  country comparison.

Both are plain Markdown pipe tables today, unstyled by any component — no
`--card-*` tokens, whatever the MDX renderer's default table CSS is. **Two
different proposed components**: `ComparisonTable` (fixed "before/reference
vs proposed" column semantics for safeguards-style tables) and reuse of the
existing table style for `european-english.mdx`'s decision log, or leave it
plain since it's a one-off.

### B6. Opinion/speculation flags

**4 instances, 4 different chapters, 4 different wordings** — not a
componentizable pattern, an authorial habit: `education-and-migration.md:159`
("what follows is my opinion and not a finding"),
`redesigning-the-state.md:177` ("I flag it as **speculation**"),
`steering.md:188` ("This is speculation on my part"),
`the-total-state.md:169` ("Swiss experience can answer better than my
speculation"). **Proposed**: a small inline `<Aside kind="opinion">` or just a
consistent bold lead-in phrase (style guide entry, not a component) — 4
occurrences doesn't justify a new Astro component.

### B7. Source citations

Only **2 chapters have a dedicated `## Sources` block**:
`safeguards.md:386` (9 linked citations, each `- [Title](url) — annotation`)
and `european-english.mdx:219` (6 linked citations, same shape, no
annotations). Everywhere else, sources are cited as inline links in prose
(`cheap-is-wealth.md` 3 links, `choosing-people.md` 9, `first-move.md` 16,
`new-cities.md` 10, `steering.md` 6, `who-it-earns-for.md` 8 — none of these
have a dedicated block). **Proposed component**: `SourceList` — array of
`{title, url, note?}` — for chapters that want a dedicated block; too thin a
pattern (2 hits) to force onto chapters that currently cite inline.

### B8. Patterns named in the brief that were checked and NOT found

- **Numbered playbooks/steps**: 5 files have `^[0-9]+\. ` lists
  (`eGov-challenges.mdx`, `eGov-vison.mdx`, `european-egovernment.mdx`,
  `european-english.mdx`, `first-move.md`) — but these are all MDX pages that
  already use `<Card>`/`<CardGrid>` heavily (see the low prose ratio for these
  4 in B9), not plain-Markdown book chapters. No new component needed; the
  numbered lists are inside already-componentized pages.
- **Glossary-style term lists**: no `## Glossary`/`## Terms`/`## Definitions`
  heading anywhere in the 22 chapters. The closest thing is the bold-lead-in
  paragraph style also used for objections (B3) — not a distinct pattern.
- **Timelines and phase dates** (e.g. `2025-2030`): **zero** matches for any
  `20XX-20XX` year range in any book chapter or `why.mdx`/`manifesto.mdx`.
  This pattern exists only inside the Astro `Timeline.astro` component's
  default props (Part A) — it never appears in prose content. Report this as
  a real zero, not a gap: it was grepped, not assumed.
- **Before/after or cheap/expensive contrasts**: one loose hit
  (`who-it-earns-for.md:118`, "cheap, open, hard to monopolise"), not a
  repeating structural pattern — authorial phrasing, not a block shape.
- **Worked examples in first person / named case studies**: checked for
  `Imagine/Consider/Take the case of/Suppose` openers and for narrative
  markers like "In 1971,", "Estonia", "Taiwan" as scene-setters — found only
  one aside (`direct-democracy.md:249`, "Consider what happened in Britain.")
  and the Swiss precedent used as supporting argument in 3–4 chapters (not a
  first-person "let me walk you through an example" set piece anywhere). Not
  a componentizable pattern in this corpus.

### B9. Wall-of-prose score (plain paragraphs ÷ structured elements — headings,
list items, table rows, MDX component tags — per real chapter; higher =
more undifferentiated prose)

Computed by script (`grep -cE` for structured-line patterns, `awk` for
blank-line-delimited paragraph blocks), not eyeballed. MDX chapters that
already lean on `<Card>`/`<CardGrid>` (`eGov-*`, `european-egovernment.mdx`,
`european-english.mdx`) score near-zero because every component tag counts as
a structured line — they are not "wall of prose" even though the ratio
formula alone can't distinguish that, so they're excluded from the worst-5
below by inspection, not by the number.

**Five worst (plain `.md` chapters, no components used at all):**

| Chapter | Paragraphs | Structured lines | Ratio |
|---|---|---|---|
| `book/choosing-people.md` | 48 | 9 | 5.33 |
| `book/the-total-state.md` | 37 | 7 | 5.29 |
| `book/new-cities.md` | 28 | 6 | 4.67 |
| `book/cheap-is-wealth.md` | 29 | 7 | 4.14 |
| `book/the-shorter-week.md` | 36 | 9 | 4.00 |

Runners-up: `steering.md` 3.92, `designing-our-retirement.md` 3.64,
`political-path.md` 3.33, `redesigning-the-state.md` 3.15,
`european-science.md` 2.90. For reference, `why.mdx` scores 5.43 and
`manifesto.mdx` 3.07 despite already being componentized — high ratio there
reflects genuinely long prose paragraphs *inside* `WhyAnswer`/`ManifestoLead`
slots, not a missing component, so they're not "worst" in the actionable
sense.

---

## GAPS

- Component usage counts come from grepping import statements
  (`import X from` / `import { X }`) plus JSX-tag inference for MDX; a
  component referenced only via a dynamic string or an `Astro.glob()` pattern
  would not show up. None observed, but not exhaustively ruled out for every
  file.
- "Hardcoded colour" counts are `grep -cE '#[0-9a-fA-F]{3,6}|rgba?\('` per
  file — this also counts colours embedded in inline `data:` values or SVG
  `fill=` attributes (e.g. `Logo.astro`'s default `#000`), not just CSS. Good
  enough to flag which files to look at, not a byte-exact audit.
- Part B's structured/paragraph ratio is a heuristic (line-pattern based), not
  an AST-aware prose analyzer — MDX component tags spanning multiple lines,
  or a `<Card>` opened on one line with props on following lines, are counted
  once at the opening line, which is why the componentized MDX pages score
  artificially low rather than reflecting true content density.
- Did not check `src/content/docs/book/*.sidecar.mdx` files (task scope
  explicitly excluded them) — one exists
  (`european-english.sidecar.mdx`, 357 lines) and was not read.
- Did not verify component rendering in a browser — this is a static
  read/grep inventory only, per the read-only scope of this task.
