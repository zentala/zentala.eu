# R1 — Design sources for DESIGN.md (E006)

## TLDR

zentala.eu reads as prose because nothing on the site enforces layout grammar,
infographic components, or a reading measure — E004's rendered audit already
proved the measure problem (114–130ch) and the token/component sprawl (4 card
variants, 3 timelines, 3 icon systems). This report gives the designer agent
five source clusters to build `DESIGN.md` from: (a) Google's `DESIGN.md`
format spec — use it verbatim as the file's skeleton; (b) editorial-design
conventions from GOV.UK, Smashing Magazine's named-grid technique and the FT/
Pudding scrollytelling playbooks — for sidebars, pull quotes, definition
boxes and pinned-visual sections; (c) measure/leading/pairing research
confirming the site's existing `--article-measure: 66ch` token is already
correct — the token exists but is not applied everywhere; (d) a five-pattern
layout grammar (full-bleed, 2/3–1/3, 1/2–1/2, 3-col, aside) grounded in named
CSS Grid areas; (e) Wikipedia hover-card mechanics for term tooltips, plus a
documented NN/g warning against interactive site maps — build a static,
multi-column one instead. `~/.claude/skills/progressive-disclosure` and
`design-review` are directly reusable; `ui-internal` is not applicable (this
is a public editorial site, not the internal ecosystem).

## (a) Writing DESIGN.md for AI agents

**Sources:**
1. [google-labs-code/design.md](https://github.com/google-labs-code/design.md) — the canonical spec, published by Google Labs 2026-04-10, >11k stars. Use this as the format, not an invention.
2. [Better Stack: DESIGN.md for AI coding agents](https://betterstack.com/community/guides/ai/design-md-ai/) — a worked minimal example and philosophy-section guidance.
3. [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) — 59+ real DESIGN.md files extracted from live sites (Stripe, Figma, Airbnb…); useful as *style* reference, not structure reference (all app/SaaS, not editorial).
4. [dev.to: AGENTS.md, SKILL.md, DESIGN.md — how AI instructions split into three layers](https://dev.to/aws-builders/agentsmd-skillmd-designmd-how-ai-instructions-split-into-three-layers-d0g) — explains the division of concerns: `AGENTS.md` = how to work in the repo, `SKILL.md` = a reusable procedure, `DESIGN.md` = the visual contract. Confirms `DESIGN.md` should stay narrowly visual, not duplicate `CLAUDE.md`.

**Concrete rules extracted:**
- File has exactly two layers: a YAML front-matter block (fenced by `---`) of **machine-readable tokens**, then a Markdown body of **human-readable rationale**. Agents read the YAML for exact values and the prose for *why* and *when*.
- Required top-level YAML keys: `version`, `name`, `description` (optional), `omitted`, `colors`, `typography`, `rounded`, `spacing`, `components`.
- `typography` tokens are objects: `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`, `fontFeature`, `fontVariation` — not flat strings.
- Token references use `{path.to.token}` (e.g. `{colors.primary}`) so a component's `backgroundColor` points back at a color token instead of repeating a hex value — this is the same discipline E004-T12 ("token hygiene") is already asking for in `src/styles/_tokens.scss`.
- **Markdown body has a fixed section order** when a section is present: Overview (alias "Brand & Style") → Colors → Typography → Layout (alias "Layout & Spacing") → Elevation & Depth → Shapes → Components → Do's and Don'ts. This is exactly the outline to reuse for zentala.eu's `DESIGN.md` — see "Recommended structure" below.
- Better Stack's guide adds, specifically for content sites: prioritize **readability tokens** (line-height, measure/column width) and **article-layout hierarchy rules** over component minutiae; include a short "overall vibe" sentence in plain language (their example: "airy and uncluttered") because that phrase is what steers an agent's judgment calls between two technically-valid options.
- `awesome-design-md` examples are all product/SaaS — do not copy their token *shape* (they are built around buttons/cards/forms). zentala.eu's DESIGN.md should be closer to Better Stack's "content site" variant: measure, heading scale, pull-quote/definition-box/timeline component contracts, not a button system.

## (b) Longform editorial design conventions

**Sources:**
1. [GOV.UK Design System — Patterns](https://design-system.service.gov.uk/patterns/) and its [content-pattern documentation convention](https://github.com/alphagov/govuk-design-system-backlog/blob/main/docs/DESIGN_SYSTEM_CONTENT_PATTERN.md) — every pattern is documented as: what it is → when to use it → when NOT to use it → how it works → research behind it. This five-question template is worth lifting directly into `DESIGN.md`'s per-component entries (a "when NOT to use" line is exactly what E004 found missing — four card variants exist because nobody wrote down when each applies).
2. [Smashing Magazine: Editorial Design Patterns With CSS Grid and Named Columns](https://www.smashingmagazine.com/2019/10/editorial-design-patterns-css-grid-subgrid-naming/) — the concrete mechanism for (d) below: named grid-column lines (`content-start`/`content-end`, `full-start`/`full-end`) so every article template composes from the same five slots (`full` image, `content` body, `start-half`/`end-half` split) instead of ad-hoc `max-w-*` classes — which is precisely the bug E004-T02 found (six different `max-w-*` measures across routes).
3. [Financial Times Visual Vocabulary (chart-doctor)](https://github.com/Financial-Times/chart-doctor/blob/main/visual-vocabulary/README.md) — a decision tree for **which chart/table type to use for which argument shape** (comparison, change over time, ranking, part-to-whole, distribution). This directly answers Paweł's "infographic presentation" ask: it is a checklist an agent can apply per-essay to decide table vs. timeline vs. comparison-bar instead of always reaching for prose.
4. [The Pudding: process notes on scrollytelling](https://pudding.cool/process/how-to-make-dope-shit-part-3/) + [Scrollytelling Design Patterns reference](https://scrollytelling.ai/scrollytelling-design-patterns/) — the "pinned visual, stepped text" pattern (visual fixed right/center, narrative scrolls left in discrete steps) is the right model for `/vision` and long comparative essays, but it is expensive to build — flag it as a stretch pattern, not a baseline requirement.

**Concrete rules extracted:**
- **Definition/concept box**: a bordered aside, first-use-only, answering "what is X" in ≤2 sentences before the essay uses the term unexplained. Directly serves E004's GEO rule ("definition/answer block in the first ~60 words") and Rule 3 of `authorship` ("assume competence" — but a first-time technical term for a general political-essay reader still needs one line, once).
- **Pull quote**: a short verbatim excerpt, pulled out of body flow, set larger/serif, used to break up a long argumentative section and give scanners an entry point — not decoration, one per ~800–1200 words of prose maximum, or it stops working as a landmark.
- **"What would settle this" / evidence box** (Paweł's own phrase in the brief): model it as a GOV.UK-style pattern — bordered callout, fixed heading, states the falsifiable claim and what evidence would confirm/deny it. This is a genuinely useful device for a political-essay site and has no existing analog in `01-inventory.md`'s component list; it should be a **new** component in DESIGN.md, not a repaint of `ReasonBlock`/`ContentBox`.
- **Comparison table** over prose whenever the essay is comparing ≥3 named things on ≥2 dimensions (FT vocabulary rule) — this is the single highest-leverage fix for "walls of prose," because political-path/policy-comparison essays are exactly this shape.
- **Named-grid article template**: `full` (image/chart, edge-to-edge within the article column), `content` (body prose, 66ch), `start-half`/`end-half` (side-by-side comparison or before/after). One template, four slots — reuse across every essay instead of the current per-route bespoke `max-w-*`.
- Scrollytelling (pinned visual + stepped text) is powerful for one or two flagship essays (`/vision`, `political-path`) but should NOT become the default article shape — GOV.UK and FT both keep the *default* reading path low-JS; the stepped/pinned pattern is opt-in per piece, not a layout rule.

## (c) Typography for long reading on screen

**Sources:**
1. [UXPin: Optimal Line Length for Readability (2026)](https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/) — 50–75ch range, 66ch cited sweet spot (Bringhurst + eye-tracking studies).
2. [Baymard: Readability — the optimal line length](https://baymard.com/blog/line-length-readability) — measured behavioral cost: copy wider than 80ch per line was **skipped 41% more often** than copy in the 60–70ch range. This is a directly citable number for why E004-T02's 114–130ch finding is not cosmetic.
3. Font-pairing sources ([Webflow](https://webflow.com/blog/font-pairing), [FontAlternatives](https://fontalternatives.com/blog/font-pairings-editorial-magazine-design/), [Jukebox Print](https://www.jukeboxprint.com/fonts/font-pairing/sans-serif-and-serif)) — Playfair Display (the site's existing display serif) paired with a neutral sans body is explicitly named as a working editorial pairing ("high-contrast didone headline over a neutral, legible sans reads as elegant and editorial").

**Concrete rules extracted:**
- **Body measure: 60–75ch, 66ch as default** — matches the site's own `--article-measure: 66ch` token in `src/styles/_tokens.scss:40` almost exactly. The problem E004 found is not a missing token, it is that `book/[...slug].astro` and `docs/[...slug].astro` don't use it (`01-inventory.md` line 5: `max-w-6xl` ≈ 1100px ≈ >100ch). **DESIGN.md's job here is enforcement language, not a new number**: state that every long-form route MUST consume `--article-measure`, and name the specific files that currently don't.
- **Body size/leading**: 16–20px body with line-height ≈1.5–1.65 (E004's own skills-shortlist synthesis, confirmed by the research above). Current tokens (`--article-body-size: 1.125rem` = 18px, `--article-lead: 1.6`) already sit inside this range — DESIGN.md should lock these as the canonical article values and say explicitly that `global.scss`'s prose override to `text-xl` (20–22px, flagged in `01-inventory.md:4`) is the bug, not the token.
- **Novice vs. expert reader width**: UXPin/Baymard both note narrower measures (45–60ch) suit less practiced readers, wider (up to 80ch) suit experts skimming. zentala.eu's audience (the brief: "the European engineer") skews expert — 66–70ch is defensible as the fixed default rather than needing a responsive range.
- **Font pairing**: keep Playfair Display (headings/display) + a neutral sans (Inter, already loaded) for body — this is a validated pairing, not a risk. Do not introduce a third family; E004's skills-shortlist already flags >2 typeface families and the site currently loads exactly two.
- **Dark mode typography**: reduce body font-weight slightly (400 not 500) and widen letter-spacing marginally (+0.01em) in dark mode to compensate for lower effective contrast at small sizes — the site's `_tokens.scss` already differentiates dark-mode color tokens but carries no dark-mode-specific type-weight or letter-spacing overrides; worth a DESIGN.md note even though E004 did not flag it directly.
- **Numeric tables/stats**: `font-variant-numeric: tabular-nums` — already in E004's skills-shortlist (`00-skills-shortlist.md` line 27), repeated here because it directly supports the "infographic/table" goal — misaligned digit columns in a comparison table look broken even when the layout is right.

## (d) Layout grammar — a small vocabulary

**Sources:** Smashing Magazine's named-grid technique (above), plus general grid-vocabulary consensus from [Educative's CSS Design Patterns course](https://www.educative.io/courses/css-design-patterns/asymmetrical-magazine-style-grid) and [GOV.UK's own layout guidance](https://design-system.service.gov.uk/styles/layout) (its "two-thirds one-third" recommendation for body pages, cited to prevent lines getting too long on desktop — i.e. the same *measure* problem as (c), solved structurally instead of by CSS alone).

**Concrete rules extracted (5-pattern vocabulary, each with a "when"):**
- **Full-bleed** — edge-to-edge image/chart/timeline, breaks the content column deliberately. Use for: one hero visual per essay, never more than once per ~1000 words (matches the pull-quote density rule above — both are "break the column" devices and compete for the same scarce attention).
- **2/3–1/3** — GOV.UK's default body-page split: primary content (66ch measure) + a narrow aside (definition boxes, "what would settle this" callouts, related-links). This is the workhorse layout for every essay page; the aside column is where infographic components (mini comparison, key stat, timeline snippet) live without breaking the reading column's measure.
- **1/2–1/2 (split)** — before/after, two-position comparison, or a chart next to its own explanation. Named-grid slots `start-half`/`end-half` per Smashing Magazine.
- **3-column** — index/landing pages only (e.g. `/book` index, `/vision`) where items are peers, not a reading sequence. E004's skills-shortlist already flags the AI-slop 3-column icon-grid pattern as a red flag when used for marketing feature lists — the distinction DESIGN.md must draw is: 3-column is fine for a genuine peer-index (list of essays, list of timeline entries), never for decorative feature cards.
- **Aside (persistent side rail)** — used sparingly, for site-wide wayfinding (e.g. a mini table of contents on long essays), not per-section.
- Twelve-column grid as the underlying implementation grid (divides cleanly into halves/thirds/quarters/sixths) — this is the mechanism that makes the five named patterns above composable without inventing bespoke breakpoints per page, which is the exact problem `01-inventory.md` line 5 documents (six different `max-w-*` values currently in use for what should be the same "article body" concept).

## (e) Term tooltips and interactive site map

**Sources:**
1. [Wikimedia Tech Blog: Web performance case study — Wikipedia page previews](https://techblog.wikimedia.org/2020/11/23/web-performance-case-study-wikipedia-page-previews/) and [How we designed page previews for Wikipedia](https://diff.wikimedia.org/2018/04/18/how-we-designed-page-previews-for-wikipedia/) — the canonical hover-card spec.
2. [NN/g: Site Map Usability](https://www.nngroup.com/articles/site-map-usability/) — directly contradicts the "interactive site map" part of the brief and should be surfaced to Paweł as a genuine decision point, not silently overridden.

**Concrete rules extracted:**
- **Hover-card mechanics**: ~650ms hover delay before the card appears (Wikipedia's own tuned value, chosen specifically to suppress accidental triggers on fast mouse movement across a text-dense page — directly relevant here since essays are dense with linkable terms). Card must not clip text, must render above nav/other overlays, and should horizontally align near the cursor's hover position, not the link's fixed position.
- Native-first implementation: prefer `<details>`/CSS `:hover`/the Popover API over a JS tooltip library — consistent with `progressive-disclosure`'s own stated preference ("Preferuj natywny HTML … nad JS+ARIA — mniej kodu, przeglądarka robi robotę").
- Use for: first-use of a political/technical term per essay, definitions already scoped in E004-T08's llms.txt/definition-block work — the hover-card and the definition-box (see (b)) should share ONE glossary data source so the two don't drift.
- **Site map caution (real finding, not a nice-to-have)**: NN/g's repeated testing (their word: "Dynamic or interactive site maps caused horrible failures 7 years ago, and they still caused trouble in Study 2") found interactive/dynamic site maps underperform a plain static one. Their recommendation: static, **multi-column** layout (61% vs 47% task success for multi- vs single-column), labeled exactly "Site Map", no forced interaction to see the structure. **Recommendation for DESIGN.md**: build the site map as a link-graph *visualization* for delight/exploration (Paweł's ask, and it doubles as a diagram of the essay corpus), but ship it ALONGSIDE a conventional static multi-column list, not as a replacement for one — the graph is decoration/exploration, the static list is the actual wayfinding tool.

## What E004 already established

Do not re-measure these — cite and build on them:

- **Light-theme contrast is broken on essay routes**: h1 contrast 1.0 (white-on-`#fafafa`) on `/book/<slug>` and `/commentary/<slug>`; `/book` index body 2.4:1 — `.plan/reports/2026-09-25-ui-seo-review/03-rendered-audit.md:21-24`. `E004-T01` (High, 3pts) owns the fix; already committed light/dark token values exist in `src/styles/_tokens.scss:9-123` that DESIGN.md should treat as the canonical palette (do not invent new colors).
- **Measure**: articles render 114–130 characters/line at 22px against a 60–75ch/18–19px target (`03-rendered-audit.md:17-32`). The fix token (`--article-measure: 66ch`, `--article-body-size: 1.125rem`, `--article-lead: 1.6`) already exists in `_tokens.scss:35-41` — comment there states it was added for `ArticleLayout.astro` per `E004-T02`. **The gap DESIGN.md must close is enforcement across ALL long-form routes** (`docs/[...slug].astro`, `transcripts`), not invention of new values.
- **Component sprawl**: 3 timeline implementations, 4+ card variants sharing `--card-<hue>` tokens, 3 icon systems plus dead Starlight icon-name text — `.plan/reports/2026-09-25-ui-seo-review/01-inventory.md:7,9`. `E004-T10` (icon system) is already merged per recent commits (`c1f7e75`, `34a58c6`); `E004-T11` (component consolidation, 5pts) and `E004-T12` (token hygiene, 5pts) are still open and are exactly where DESIGN.md's "Components" and "Do's and Don'ts" sections should target.
- **A11y baseline missing**: no skip link, no designed focus ring except on `ThemeToggle`/primary button, `<main>` missing on six routes, mobile menu button has no accessible name (`03-rendered-audit.md:34-40`, `01-inventory.md:13`). DESIGN.md's interaction-states section should encode focus-ring and touch-target rules as non-negotiable tokens, not prose, so a rebuilt component can't regress this a second time.
- **Skills already selected as review checklists** (`.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`): Anthropic `frontend-design`, Vercel `web-design-guidelines`, rampstackco `accessibility-audit` + `claude-wcag-accessibility-skill`, `geo-optimizer-skill` + `claude-seo`, edenspiekermann `audit-design-system` + `claude-design-auditor-skill`. `E004-T16` (vendor these into the repo) is still open — if it lands, DESIGN.md should link to the vendored copies rather than duplicate their rules.

## Skills on this machine and how to use them

| Skill | Applicable? | How to use it here |
|---|---|---|
| `~/.claude/skills/progressive-disclosure/SKILL.md` | **Yes, directly.** | Its three-layer method (primary/secondary/advanced) is the mechanism for turning a wall of prose into scannable content: TLDR + verdict = primary, definition boxes/pull quotes = secondary, full tables/timelines = advanced. Its native-HTML preference (`details`/`summary`, Popover API) applies directly to the term-tooltip work in (e). Pattern catalog (`ref/patterns-text.md`, `ref/patterns-visual.md`) should be scanned for a matching pattern before DESIGN.md invents a new one. |
| `~/.claude/skills/design-review/SKILL.md` (gstack) | **Partially — read for the checklist, don't run the workflow.** | Its Phase 3 "Design Audit Checklist" (Typography 15 items, Color & Contrast 10, Spacing & Layout 12, AI Slop 10 anti-patterns) is a ready-made QA checklist to run against zentala.eu once DESIGN.md exists. The AI-slop blacklist (purple gradients, 3-column icon-in-circle grids, centered-everything, uniform bubbly radius) is directly quotable in DESIGN.md's "Don'ts" section. The full workflow (needs `gstack browse` binary, writes to `~/.gstack/projects/`) is NOT installed/verified on this machine — do not assume it runs; treat this as a reference document, not an executable tool, unless a later session confirms the `browse` binary exists. |
| `~/.claude/skills/design-html/SKILL.md` (gstack) | **Not applicable as a workflow.** | It's a from-mockup HTML *generator* (Pretext engine) for building a new page from an approved PNG/CEO-plan — zentala.eu already has a live Astro codebase with real routes and content; this is not a greenfield build. Its `DESIGN.md`-reading behavior (Step 0: reads repo-root `DESIGN.md` and treats its tokens as override-priority) is useful to know: **once DESIGN.md exists, keep it at repo root** (`C:/Users/zentala/code/zentala.eu/DESIGN.md`), because that's the path multiple gstack skills probe by convention. |
| `~/.claude/skills/authorship/SKILL.md` | **Yes, but for content, not layout.** | Governs how the *text itself* should read (Rule 1: state the problem as fact, not a question; Rule 4: give the architecture, not narration). Relevant because "walls of prose" is partly a writing problem, not only a layout problem — DESIGN.md should note that a "definition box" or "what would settle this" box only works if the surrounding prose follows Rule 4 (mechanism, not narrative). This governs `E004-T14` (answer-first editorial pass), which sits next to but is distinct from E006's layout work. |
| `~/.claude/skills/ui-internal/SKILL.md` | **Not applicable.** | `@internal/ui` is the design system for the *internal* ecosystem (`.internal` domains, homelab tooling). zentala.eu is a public site with its own already-declared stack (Astro + TailwindCSS + DaisyUI + SCSS tokens, per `CLAUDE.md`'s "Tech Stack" section) — per `ui-internal`'s own stated exception ("unless the project already has an explicitly chosen, project-specific design stack"), this skill does not apply here. Do not import `@internal/ui`. |
| `artifact-design` skill | **Does not exist as a standalone skill on this machine.** | `ls ~/.claude/skills/artifact-design` returns "No such file or directory" — it is a tool-integrated skill (loaded automatically by the `Artifact` tool per the system prompt), not a file to read directly. Not relevant to a static-site `DESIGN.md` anyway; it governs claude.ai Artifact pages, and `CLAUDE.md`'s "No claude.ai Artifacts" rule already forbids publishing there. |

## Recommended structure of DESIGN.md

Follow the Google spec's fixed section order (a), adapted for an editorial/content site per Better Stack's guidance and E004's findings:

```
---
version: "alpha"
name: "zentala.eu"
description: "EU Reform Vision — editorial/essay site, the European engineer as reader"
colors: { ... }        # from src/styles/_tokens.scss, both :root and .dark blocks
typography: { ... }     # font-sans, font-serif, --article-* tokens as the canonical values
rounded: { ... }
spacing: { ... }
components:
  definition-box: { ... }
  pull-quote: { ... }
  evidence-box: { ... }   # "what would settle this"
  comparison-table: { ... }
  timeline: { ... }        # ONE, replacing the three in 01-inventory.md
  card: { ... }            # ONE, replacing the four variants
---

## Overview
One-sentence "vibe" (per Better Stack's guidance) + the audience line ("the European engineer") + the two hard constraints from E004 (contrast, measure).

## Colors
Light/dark palette from _tokens.scss, cited not reinvented; WCAG AA contrast rule stated as a hard number (4.5:1 body, 3:1 large/UI).

## Typography
Measure (66ch), body size/leading (18px/1.6), heading scale, Playfair Display + Inter pairing rationale, dark-mode weight/letter-spacing adjustment, tabular-nums for stat tables.

## Layout
The five-pattern grammar from (d): full-bleed, 2/3–1/3, 1/2–1/2, 3-col (index only), aside. Named-grid slot names from Smashing Magazine's technique so every article composes from the same primitives.

## Elevation & Depth
Existing --shadow-sm/md/lg tokens; when each applies (cards vs. modals vs. nothing on flat editorial surfaces).

## Shapes
Existing --radius-* scale; explicit "no uniform bubbly radius on every element" rule per design-review's AI-slop checklist.

## Components
Per-component contract in GOV.UK's five-question form (what it is / when to use / when NOT to / how it works / source). Cover: definition-box, pull-quote, evidence-box, comparison-table (FT visual-vocabulary decision tree), timeline (one), card (one), term-tooltip (Wikipedia hover-card spec), site-map (static multi-column list; graph visualization as a decorative companion, not a replacement).

## Do's and Don'ts
Pull directly from design-review's AI Slop blacklist + E004's own findings (no hex outside tokens, no `max-w-*` per-route reinvention of measure, always `<main>`, always a visible focus ring).
```

## GAPS

- **No measurement of whether the `gstack browse` binary is present or working on this machine** — `design-review`'s and `design-consultation`'s workflows depend on it; this report only read their SKILL.md text, it did not attempt to run them. A later session should check `.claude/skills/browse/dist/browse` before assuming those workflows are usable end-to-end.
- **DESIGN.md spec is "alpha" and dated 2026-04** — it may have changed since; the designer agent should re-fetch `github.com/google-labs-code/design.md` rather than trust this report's snapshot if more than a few weeks have passed.
- **No direct access to Our World in Data's own internal style guide** — WebSearch did not surface an OWID-specific design document; the sidebar/definition-box/pull-quote rules in (b) come from general publishing-design sources and GOV.UK/Smashing/FT/Pudding instead. If Paweł specifically wants OWID's exact visual language reproduced, that needs a live look at ourworldindata.org pages, not this report.
- **content-seo-geo.md and the `shots/` screenshots from E004 were not re-read** — this report treats E004's headline findings (PLAN.md, 03-rendered-audit.md, 01-inventory.md) as sufficient; if the designer needs page-by-page visual evidence, the screenshots already exist at `.plan/reports/2026-09-25-ui-seo-review/shots/` and should be looked at directly rather than re-captured.
- **This report did not verify that `--article-measure`/`--article-body-size` tokens are actually consumed anywhere yet** (only that they exist in `_tokens.scss` with a comment claiming `ArticleLayout.astro` uses them) — a grep of `ArticleLayout.astro` and the non-conforming routes (`docs/[...slug].astro`, `transcripts`) is needed before DESIGN.md can claim "already fixed for X, still broken for Y" with certainty.
