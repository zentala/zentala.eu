# R3 — Duplication, concept graph, link graph, nomenclature

Date: 2026-09-25. Read-only analysis. Companion data file: [`link-graph.json`](link-graph.json).
Builds on, does not redo: [`2026-09-25-site-structure.md`](../2026-09-25-site-structure.md) and
[`2026-09-25-salvaged-from-homepage.md`](../2026-09-25-salvaged-from-homepage.md).

## TLDR

Several of the two earlier reports' findings are **already fixed** — `/` and `/vision` now
share one module (`src/lib/vision-content.ts`), `/why` was rewritten as an objections page with
proper pointers instead of retelling the frame, `/principles` was trimmed, and the eleven
`/docs/book/*` wrapper pages are now redirects. What is still live: (1) a **closing "carry the
idea" paragraph** repeated near-verbatim on `/`, `/vision`, `/why` and `/manifesto`; (2) the
**ownership question** ("who captures the gains", four principles: cheap/available/open-standard/
hard-to-monopolise) told in full on three pages, none of which link to the two chapters that
actually argue it (`/book/who-it-earns-for`, `/book/cheap-is-wealth`); (3) `/book/principles` —
a still-published chapter — is **word-for-word the pre-frame prose** that was deliberately cut
from `/principles` months ago, including the exact sentence "Today's 30-somethings represent
the last demographic surplus generation" and "four retirees rely on one working individual";
(4) a structural mechanism nobody named yet: `src/pages/docs/[...slug].astro` generates a
`/docs/<slug>` route for **every** non-draft `docs` entry, so every chapter, `/why` and
`/manifesto` has a second, unlinked URL, on top of the shadow routes `/docs/book/*` already
found. The link graph (73 nodes, 229 edges, script-built from grep, not hand-typed) finds 5
dead links and one likely route bug: the legacy redirect for the `principles` chapter sends
readers to `/principles` (the page) instead of `/book/principles` (the chapter) — which is
either a bug or an admission that the chapter should not exist. Part D recommends keeping the
`/book` URLs and schema.org `Book`/`Chapter` markup untouched (zero link-graph churn) but
changing the **reader-facing label** from "book" to something that reads as a folder of essays,
and splitting the ungoverned `tags` field into two frontmatter fields with different jobs:
`layer` (which floor — already exists as a hardcoded array, not frontmatter) and `kind`
(argument/proposal/playbook), freeing `tags` to become the source for the tooltip glossary
Paweł wants.

---

## PART A — Duplication: the same claim in two or more places

Method: fingerprint phrases grepped across `src/lib/vision-content.ts`, `src/pages/index.astro`,
`src/pages/vision/index.astro`, `src/pages/principles.astro`, `src/pages/benefits.astro`,
`src/content/docs/why.mdx`, `src/content/docs/manifesto.mdx`, and every non-sidecar
`src/content/docs/book/*.md|mdx`. Status column reflects the **current** state of the repo,
not the two earlier reports (several of their findings are already fixed — noted where so).

| # | Claim | Told on (file:line) | Status | Proposed single home | What the others become |
|---|---|---|---|---|---|
| 1 | The four-step demographic frame ("Europe is aging… roughly thirty years… two sources of labour, people or machines") | `src/lib/vision-content.ts:26-43` (rendered on `/` and `/vision`); `src/content/docs/why.mdx:27-37` (compressed to one paragraph, then links out); `src/pages/principles.astro:138-145` (two-sentence pointer); `src/content/docs/book/designing-our-retirement.md` (full chapter); **`src/content/docs/book/principles.md:19-27`** (full pre-frame retelling, contradicts the frame — treats migration neutrally instead of arguing against it) | **PARTIALLY RESOLVED.** `/why` and `/principles` already use the pointer pattern correctly. `book/principles.md` does not. | `/book/designing-our-retirement` (already the de facto canonical; every other page links to it) | `/why`, `/principles`: unchanged (already correct). `book/principles.md`: rewrite to match the frame or retire — see row 4 |
| 2 | "Who captures the gains" — ownership question + four principles (cheap to buy and run / available to every municipality / open standards / hard to monopolise) | `src/lib/vision-content.ts:152-166` (`/`, `/vision`); `src/pages/principles.astro:147-171` (same four bullets, full retelling); `src/content/docs/why.mdx:119-155` ("Who ends up owning the robots?", same argument in prose, same four adjectives) | **STILL DUPLICATED**, 3 places, and **none of the three link to the chapters that argue it**: `src/content/docs/book/who-it-earns-for.md` and `src/content/docs/book/cheap-is-wealth.md` | `crossCuttingNote` in `vision-content.ts` stays as the terse shared version (it already is one source for `/` + `/vision`) | `/principles` and `/why`: compress to 1-2 sentences + link to `/book/who-it-earns-for` and `/book/cheap-is-wealth`, the way `/principles` already does for row 1 |
| 3 | Closing "carry the idea" / critical-mass motif ("you are not the audience… you are the condition of it" / "the probability of it happening goes up… the only way such things have ever happened") | `src/lib/vision-content.ts:169-175` (`/`, `/vision`); `src/content/docs/why.mdx:283-287` (Objection 05 closing); `src/content/docs/manifesto.mdx:249-257` (closing) | **STILL DUPLICATED**, near-verbatim in `vision-content.ts` and `why.mdx` ("condition of it", "probability of it happening… only way… have ever happened") | `/manifesto` — this is literally the page whose job is to make this demand | `callToAction` in `vision-content.ts`: keep (shared component, fine as is). `why.mdx` Objection 05: cut the restatement, close with a one-line link to `/manifesto` instead |
| 4 | The old "principles" prose block: "Today's 30-somethings represent the last demographic surplus generation", "four retirees rely on one working individual", "Nothing unites people more than common business", headings "Shared Aspirations for a Secure Future" / "Beyond National Limitations" | `src/content/docs/book/principles.md:9-70` (**full text, still published, `draft: false`**) — this is verbatim the block `principles.astro` used to carry before it was trimmed (compare against the quotes in `.plan/reports/2026-09-25-site-structure.md:117,251`) | **LIVE DUPLICATE the earlier trim missed.** The prose was cut from the *page*; nobody cut it from the *chapter with the same name* | `src/pages/principles.astro` (already the trimmed, frame-aligned version) | `book/principles.md`: rewrite for the frame, or retire the chapter and repoint `src/pages/docs/book/principles.astro`'s redirect (see Part C bug below) at `/principles` deliberately, with a note, instead of by accident |
| 5 | Three layers / pillars (language → digital state → robotics, stacked) | `src/lib/vision-content.ts:72-150` (`/`, `/vision`, full); `src/content/docs/book/index.astro:102` ("About This Book", one paragraph); `src/content/docs/why.mdx` — **no longer present** (the old "Three Pillars of European Integration Reform" section was already deleted; `why.mdx:42` now says "Neither is re-argued here") | **RESOLVED** on `/why` (good pointer pattern: state once, link to `/vision`, disclaim re-arguing) | `/vision` (full form) / `/` (short form), already shared | `/book`'s one paragraph is fine as an index blurb, no action |
| 6 | Swiss direct-democracy mechanics: semi-direct democracy, citizens' initiative, optional referendum, double majority, signature thresholds (100,000/18 months, 50,000/100 days) | `src/content/docs/manifesto.mdx:215-224` (1 paragraph, links out — fine); `src/content/docs/book/the-total-state.md:100-110` (1 paragraph, links out — fine); `src/content/docs/book/direct-democracy.md:74-170,320-346` (full definitions + thresholds); `src/content/docs/book/safeguards.md:27-40,62-77,234-239` (full re-derivation of the **same** thresholds and double-majority mechanics) | **PARTIALLY DUPLICATED** between two deep chapters, not an accidental retelling — `safeguards.md`'s whole job is "the safeguards, one by one", so some restatement is its purpose. But the exact numbers are repeated | `/book/direct-democracy` (concept-level: accelerator/brake framing, the numbers) | `/book/safeguards`: keep the mechanics unique to safeguards (the double-majority *vote-count worked example*, the validity checks) but cite `/book/direct-democracy`'s numbers once instead of restating "100,000 signatures… 18 months" a second time |
| 7 | "What this site is about", one-liner, told with the **old**, pre-demographic framing | `src/components/Footer.astro:71-73` ("technological innovation, language unity, and administrative reform" — rendered on **every page**); `src/content/docs/index.mdx:16` (Hero description, "abundance, progress… fostering smart collaboration"); `src/pages/docs/all.astro:9,13` (hardcoded, "comprehensive framework… technology, language, and infrastructure", ignores the frame and the content collection both) | **STILL DUPLICATED**, and the most-seen instance (`Footer.astro`) contradicts the homepage it sits under, on every single page | `homeFrameIntro` / `visionFrameIntro` in `vision-content.ts` (already the frame-era one-liners) | `Footer.astro:72`: one-string edit to match the frame. `docs/index.mdx` and `docs/all.astro`: out of this report's file scope (not in the Part A list) but flagged here because `Footer.astro` links to neither, so they are truly orphaned pre-frame copies — see Part C |

**Not duplicated, for contrast.** The generation-ship dream ("we were the fourth generation
aboard… glue and tape were all they had") is unique to `redesigning-the-state.md:12-24` — no
other chapter retells it. Ashby's law of requisite variety is unique to `steering.md:94-96`.
Both are examples of the site doing this correctly: one vivid argument, one home, everything
else links to it.

---

## PART B — Concept inventory (for tooltips)

Columns: term, one-sentence definition already on the site (or **NONE**), chapters that use it,
proposed canonical anchor. "Naming variance" flags where the same referent gets different
names in different places — the case a tooltip has to resolve, not just define.

| Term | Definition on site (file:line) | Used in | Canonical anchor |
|---|---|---|---|
| Semi-direct democracy | `book/direct-democracy.md:74-76` "parliament and government carry on… learning by name"; `book/safeguards.md:27` | manifesto, the-total-state, direct-democracy, safeguards | `/book/direct-democracy#semi-direct-democracy` |
| Citizens' initiative | `book/direct-democracy.md:77-78` "lets citizens propose a change and force a vote on it — the accelerator"; threshold `:320-322` | manifesto, the-total-state, direct-democracy, safeguards, first-move, political-path | `/book/direct-democracy` |
| Optional referendum | `book/direct-democracy.md:78-79` "strike down a law parliament has passed — the brake"; threshold `:324-326` | manifesto, the-total-state, direct-democracy, safeguards | `/book/direct-democracy` |
| Double majority | `book/direct-democracy.md:166-168` (short); `book/safeguards.md:62-70` (full worked mechanics, 23 cantonal votes, threshold 12) | direct-democracy, safeguards | `/book/safeguards` (deepest treatment) |
| Unity of subject | `book/direct-democracy.md:169-170` "an initiative may not bundle unrelated matters" | direct-democracy (defined); safeguards (used, only in a source-list, relies on direct-democracy's definition — correct, not a duplicate) | `/book/direct-democracy` |
| European Citizens' Initiative (ECI) | `book/direct-democracy.md:343-346` "1 million signatures… 7 member states… 12 months… no binding force"; `book/first-move.md:16` | direct-democracy, safeguards, first-move, political-path | `/book/first-move` (the "how to actually use it" chapter) |
| The total state | `book/the-total-state.md:77-80` "total in reach: a state that touches everything, sees everything, and can act everywhere at once" | manifesto, the-total-state, european-egovernment, political-path, safeguards, steering, direct-democracy | `/book/the-total-state` |
| **Naming variance:** "the digital state" (`/vision` layer 2, positive framing) and "a total state" (`manifesto`, `/book/the-total-state`, warning framing) name the **same system** from two angles. A tooltip on either term must link both, or a reader meets "digital state" on `/vision` and "total state" on `/manifesto` and never learns they are the same referent. | — | — | needs a shared glossary entry, not two separate ones |
| Who captures the gains / ownership question | `src/lib/vision-content.ts:153-159` | `/`, `/vision`, `/principles`, `/why` (as prose, same argument, different phrase) | `/vision#who-captures-the-gains` |
| Cheap (as design goal) | `book/cheap-is-wealth.md:9-13` "Wealth is when things are cheap, not when they are expensive… making things cheap is the goal, not a side effect" | cheap-is-wealth, who-it-earns-for, principles.astro, why.mdx, vision-content.ts | `/book/cheap-is-wealth` |
| Predistribution | **NONE** — named but not defined in the author's own words; `cheap-is-wealth.md:153` names it beside "citizens' wealth fund"; `who-it-earns-for.md:184-186` links to external explainers only | cheap-is-wealth, who-it-earns-for | `/book/who-it-earns-for` (needs a one-sentence definition added) |
| Citizens' wealth fund | `book/who-it-earns-for.md:191-192`, defined by example (Norway's Government Pension Fund Global) rather than by abstract sentence | cheap-is-wealth (name-drop), who-it-earns-for (full) | `/book/who-it-earns-for` |
| Social market economy | Named + sourced only: `cheap-is-wealth.md:153-154` "already written into Article 3 of the Treaty on European Union" | cheap-is-wealth | **NONE** — no plain-English definition anywhere on the site |
| Requisite variety (Ashby's law) | `book/steering.md:94-96` "a controller must have at least as much variety in its responses as the system it is trying to control throws at it" | steering only — single home, no duplication | `/book/steering` |
| European Health Data Space | **NONE** — named once in passing: `european-science.md:71` "We already wrote the rules for this. The European Health Data Space —" | european-science | needs either a first-party definition or an explicit external-source tooltip (EU regulation), since the site never explains it |
| The frame / three layers | No glossary sentence; defined operationally by `layersSection.lead` (`vision-content.ts:64`) "Not three parallel pillars. Each level is what makes the next one possible" | site-wide | `/vision` |

---

## PART C — Link graph

Full data: [`link-graph.json`](link-graph.json) — 73 nodes, 229 edges, machine-built (a small
Node script fed the grep results in this session; not hand-typed, so the counts are exact for
the files it covers). **Scope**: the core argument surface — home, why, vision + its three
legacy layer pages, benefits, principles, support, manifesto, book index + all 31 book entries
(20 published + 11 draft), the entire `/docs` archive family, both commentary entries, and the
seven utility leaves (`/tags /search /privacy /terms /confirm /ui /transcripts`). The `ideas`
(10 entries), `articles` (2) and `reference` (1) sub-collections under `/docs` are represented
as **3 aggregate nodes**, not expanded per-entry — consistent with both earlier reports' scoping
("utility, out of scope here" / "not read") and with Part A's file list, which does not include
them. Header and Footer navigation are modeled as two synthetic nodes (they render on every
page; expanding them per-page would 4x the edge count for no analytical gain).

### Counts

- **Nodes: 73** — 1 home, 31 chapter (20 published, 11 draft), 2 commentary, 1 manifesto, 38 page.
- **Edges: 229**.
- **Dead links (edge target does not exist as a node): 5** —
  `/benefits/european-integration` and `/benefits/germany` (both from `home-classic.astro:200,209`,
  a preview-only page, already noted in the salvage report as fixed on `/`);
  `/docs/ideas/culture/language-integration` (`docs/all.astro:141` — this route is real but out
  of this graph's expanded scope, so it shows as dangling here rather than confirmed broken —
  see GAPS); **`/book/egov-vison` and `/book/egov-challenges`** (`docs/all.astro:151-152`,
  lowercase, while the chapter files are `eGov-vison.mdx` / `eGov-challenges.mdx` and
  `book/index.astro:36-37`'s `GROUPS` spells them with capital G/V — a real casing mismatch
  between two independent hardcoded lists, see below).
- **Orphans (no inbound edge from anything in scope), 22** — mostly the intended kind: 10 of the
  11 `/docs/book/*` redirect wrappers plus `/docs/why`, `/docs/for-you`, `/docs/book` (redirect
  targets are reached by old bookmarks/search results, not by in-page links — correct by
  design). The rest are real findings: `/commentary`, `/docs/ideas`, `/docs/articles`,
  `/docs/reference`, `/ui`, `/search`, `/confirm` have **zero inbound links from the pages a
  production visitor can reach** — Header links only `/, /why, /vision, /benefits, /support`;
  Footer's "Resources" and "Topics" sections that would reach them are `devOnly: true`
  (`src/components/Footer.astro:27-46`) and never render in production. `/book/eGov-vison` is
  correctly orphaned (draft).
- **Dead-ends (no outbound edge), 22** — the 11 draft-chapter stubs (9-11 lines each, genuinely
  no links yet — expected), the 2 commentary entries (only external `sourceUrl` links, by
  design), 6 utility pages, `/book/new-cities` and **`/book/principles`** (the duplicate chapter
  from Part A row 4 — it has no forward links either, consistent with being an untouched
  leftover rather than a maintained chapter) and `/book/eGov-challenges` (published, but no
  internal links out — worth a look, not urgent).

### Structural findings the counts surface

1. **The `/docs/[...slug].astro` catch-all shadow-routes every published `docs` entry.**
   `src/pages/docs/[...slug].astro:7-52`'s `getStaticPaths` filters only on `!doc.data.draft` —
   no folder check — so it generates `/docs/<entry.slug>` for every chapter, for `/why`, for
   `/manifesto`, for `index`, `all`, `reference/index`, `support/time-is-running-out`,
   `why/scale`, and every `ideas`/`articles` entry. Three entries carry a `customSlug`
   (`european-english.mdx:6`, `language.md:7`, `why.mdx:6`) and so get a **third** alternate
   path (e.g. `/docs/why-reforms`). This is the same mechanism that produced the already-fixed
   `/docs/book/*` wrappers, except it was never closed off at the source — the wrappers were
   patched individually, the generator that would keep re-creating the problem for every future
   chapter was not. Whether the static `/docs/book/<slug>.astro` redirect wins the route
   collision against this dynamic catch-all, or Astro errors, is unverified — see GAPS.
2. **Header and Footer disagree about what the primary navigation is.** Header
   (`src/components/Header.astro:11-17`): `/, /why, /vision, /benefits, /support`, plus
   `/commentary` hidden behind `devOnly`. Footer (`src/components/Footer.astro:12-47`) has three
   sections — "Vision" (adds `/manifesto`, `/principles`), "Resources" (`/book`, `/commentary`,
   `/transcripts`, `/support`, `/ui` — three of five `devOnly`), "Topics" (**all seven entries
   `devOnly`**, including the three already-redirecting `/vision/<layer>` preview pages). Net
   production result: the footer that ships shows `Overview, Manifesto, Why, Vision, Benefits,
   Principles, Transcripts, Support, Tags, Privacy, Terms` — **no link to `/book` anywhere in
   global navigation**, confirmed by the orphan list having no `Header`/`Footer` inbound edge to
   `/book` (it's reachable only from in-page CTAs: `/`, `/vision`, `/why`, chapter cross-links).
3. **`/book/principles`'s legacy redirect points at the wrong target.**
   `src/pages/docs/book/principles.astro:4` sets `destination = '/principles'` — the *page*,
   not `/book/principles` (the *chapter*), which every one of the other ten
   `docs/book/*.astro` wrappers does correctly (`return Astro.redirect('/book/<slug>', 301)`).
   Combined with Part A row 4 (the chapter is a stale duplicate of the page), this reads less
   like a typo and more like someone already decided the chapter should not exist — but never
   removed it, so it is still live, still linked from `/book`'s own chapter grid, and still says
   something the rest of the site now contradicts.

---

## PART D — Nomenclature: three options

The concrete evidence for "unsettled": the `tags` frontmatter field is free text with **no
controlled vocabulary** — one chapter uses `direct-democracy` (hyphenated) while eleven others
use `direct democracy` (space), and `/tags` (`src/pages/tags.astro:9-13`) treats them as two
different tags. Separately, chapter-to-layer grouping lives **only** as a hardcoded slug array
in `book/index.astro:17-51` (`GROUPS`) — not in frontmatter at all, so it is invisible to any
other page, to `/tags`, and to the link-graph script until read by hand. No `kind` field
(argument/proposal/playbook/glossary) exists anywhere.

### Option 1 — Formalize `layer`, keep everything else as is

Add `layer: 'frame' | 'language' | 'digital' | 'robotics' | 'path'` to `docsSchema` in
`src/content/config.ts`, move `GROUPS`' five arrays into each chapter's frontmatter, and make
`book/index.astro` group by that field instead of a hardcoded slug list.

- **Effort**: S. **Routes**: none change. **Config**: one new optional field.
- **Pros**: fixes the eGov-vison/eGov-challenges casing fragility as a side effect (frontmatter
  match is exact-field, not exact-string-in-an-array); the grouping becomes visible to any page
  that reads the collection, not just `book/index.astro`.
- **Cons**: does not touch the complaint Paweł actually raised — `/book` still reads as one
  authored book, and "Book: Choosing People" still sounds like a book about choosing people,
  because nothing about the URL, the heading, or the breadcrumb changes.

### Option 2 — Rename `/book` to `/arguments` (or `/essays`), classify by `kind`

Add `kind: 'argument' | 'proposal' | 'playbook' | 'glossary'`, rename the route family, update
`book/index.astro` → `arguments/index.astro`, and update the ~150 internal `/book/*` edges this
report's link graph found (every chapter cross-link, every `/`, `/vision`, `/why`, `/manifesto`
reference), plus the `bookSeriesSchema`/`articleSchema` JSON-LD in `src/lib/jsonld.ts`, which is
literally typed around schema.org `Book`/`Chapter`.

- **Effort**: L. **Routes**: every `/book/<slug>` moves (with 301s). **Config**: one new field,
  plus a rename of the folder `src/content/docs/book/` if consistency matters.
- **Pros**: directly answers "reads as one book" — a folder of essays read in any order doesn't
  pretend to be a linear book; `kind` is more informative per-chapter than `layer` alone (e.g.
  `safeguards.md` and `first-move.md` are both `path`-layer but very different kinds — one is
  constitutional-design argument, the other an organizing playbook).
- **Cons**: the most expensive option by far, on a site whose stated problem is already too much
  churn between duplicate URL families; loses the `Book`/`Chapter` schema.org markup's SEO value
  unless `jsonld.ts` is reworked in the same pass; 301-chains through the still-live
  `/docs/book/*` redirects would need re-pointing too.

### Option 3 — Keep the URLs, change only the reader-facing label; split `layer` and `kind`; repurpose `tags` as the glossary source

Leave every `/book/<slug>` route and the schema.org `Book`/`Chapter` JSON-LD untouched (zero
link-graph churn — the 150 internal cross-links from Part C stay valid). Change only the visible
copy: `book/index.astro`'s `<h1>Vision Book</h1>` and "About This Book" become something that
reads as a collection, not a book (e.g. "The Case for Europe" / "The Arguments"), and the same
string changes in `Header`/`Footer` labels and breadcrumbs (`src/lib/jsonld.ts`'s
`breadcrumbSchema` name field, cosmetic only). Add **both** `layer` (structural — which floor,
from Option 1) and `kind` (rhetorical — what to expect on click, from Option 2) as separate
frontmatter fields. Demote `tags` to its actual job: raw material for the Part B tooltip
glossary, normalizing the `direct-democracy`/`direct democracy` split and any others `/tags`
would otherwise surface as duplicates.

- **Effort**: M (mostly copy edits + two frontmatter fields + a one-time tag-normalization pass
  across 20 chapters, ~2 points). **Routes**: unchanged. **Config**: two new optional fields on
  `docsSchema`. **`tags.astro`**: needs the same `normalizeTags` casing fix regardless of which
  option is chosen.
- **Pros**: fixes the actual complaint at the lowest cost, because "sounds like one book" is a
  *label* problem, not a *URL* problem; separates two classification axes that Option 1 and
  Option 2 each conflate into one; gives the long-idle `tags` field a real destination (tooltip
  glossary) instead of the half-built `/tags` page nobody currently links to (see Part C orphan
  list — `/tags` itself has zero production inbound links either, ironically).
- **Cons**: two new frontmatter fields is more schema surface than Option 1 alone; the site still
  has a page called `/book` in its file tree even after the label changes, which a future agent
  could misread as still meaning "one book" — worth a one-line comment in `book/index.astro`
  saying so, the way `vision-content.ts`'s own header comment already explains its shared-source
  rationale.

**Recommendation: Option 3.** It is the only one of the three that is proportionate to what was
actually asked — a labeling and classification problem, not a routing problem — and it is the
only one that does not touch the 150-edge `/book/*` link graph this report just spent its budget
establishing is otherwise healthy (chapters cross-link each other correctly, in both directions,
consistently).

---

## GAPS — what this report could not verify

- **Nothing was built or rendered.** Source-only reading, same discipline as the two prior
  reports. Whether the `docs/[...slug].astro` catch-all actually collides with the static
  `/docs/book/<slug>.astro` redirects at build time (Part C, finding 1) — and which one Astro
  keeps — is unverified; `npm run build` would settle it in one pass.
- **The eGov-vison / eGov-challenges casing question is stated, not resolved.** Whether Astro's
  default collection `slug` lowercases the `eGov` segment (in which case `book/index.astro`'s
  `GROUPS:36-37` mixed-case spelling silently fails to match and those two chapters vanish from
  `/book`) or preserves it (in which case `docs/all.astro:151-152`'s lowercase links 404) was not
  checked against a build. One of the two is wrong; which one needs `npm run build` plus a
  `curl` of both URLs.
- **`ideas`, `articles`, `reference` (14 entries under `/docs`) were not expanded into the link
  graph**, matching the scope both earlier reports used. Their per-entry hrefs (dynamic
  `href={\`/docs/${doc.slug}\`}\`) were not extracted, so `/docs/ideas/culture/language-integration`
  (flagged as a dangling edge target from `docs/all.astro:141`) is very likely a real, working
  route rather than a dead link — it only reads as dangling here because it sits outside this
  graph's expanded node set.
- **`content-audit.mjs` was not run**, per the repo's own `CLAUDE.md` (`npm run audit`) — it
  would mechanically confirm or extend every dead-link finding in Part C instead of relying on
  grep and manual route-resolution reasoning.
- **`/support`'s content, `/docs`'s auto-grouped archive body, and every chapter's full prose
  beyond the fingerprint/link greps were not read end to end.** A duplication that does not
  share a distinctive phrase with anything in the fingerprint list in this report's brief would
  not have been found by this method.
- **Commentary is currently hidden** (`COMMENTARY_PUBLIC` gate) — its two entries and the whole
  `/commentary` family were graphed as if visible, which is the state the report treats as
  "public route" per the task brief, but is not what a visitor sees today.
