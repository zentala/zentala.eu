# Information architecture — zentala.eu

Date: 2026-09-25 · Epic: [E006](epics/E006-2026-09-25-design-editorial-ia/PLAN.md) wave 2, D3 ·
Status: **proposed, awaiting Paweł's approval** (decisions numbered D1–D14 so each can be
approved or overruled on its own).

Sources this document stands on and does not repeat:
[R3 duplication, concepts, link graph](reports/2026-09-25-e006/R3-duplication-concepts-graph.md)
(+ [`link-graph.json`](reports/2026-09-25-e006/link-graph.json), 73 nodes, 229 edges) ·
[R4 editorial audit](reports/2026-09-25-e006/R4-editorial-audit.md) ·
[R2 components and patterns](reports/2026-09-25-e006/R2-components-and-patterns.md) ·
[R1 design sources](reports/2026-09-25-e006/R1-design-sources.md) ·
[site structure after the frame rewrite](reports/2026-09-25-site-structure.md) ·
[E001 IA plan](epics/E001-2026-08-28-information-architecture/PLAN.md) (absorbed here) ·
[ADR 001 canonical `/book` route](ADR/001-canonical-book-route.md) · root `AGENTS.md` (two-click
rule, sidecars) · `src/content/config.ts` · `src/pages/book/index.astro`.

## TLDR

The site has one argument and tells it well in most chapters; what is broken is the
skeleton around the chapters. Three things: **nomenclature** ("Book: Choosing People" reads as
a book about choosing people; grouping lives in a hand-kept array nobody else can read),
**ontology** (no governed vocabulary — `direct democracy` and `direct-democracy` are two tags,
"digital state" and "total state" are one thing with two names and no page says so), and
**routes** (a catch-all generator gives every chapter a second URL, a retired page still lives
as a chapter, one chapter is spelled two ways). This document decides: keep every `/book/<slug>`
URL and the schema.org markup (zero link churn); call the collection **Chapters** on the page,
never "Book"; classify every entry by two frontmatter axes, **`layer`** (where it sits in the
frame) and **`kind`** (what the reader gets on click), plus a **`concepts`** list validated
against a new **glossary collection** that feeds term tooltips, chapter footers, the site map
and a `/glossary` page; give each of the ten duplicated arguments **one home** and turn every
other telling into a pointer; derive `/book`'s groups and every chapter footer **from data**;
close the shadow-route generator and retire `principles.md`; add the missing **floor chapter**
(why English). The migration is 14 tasks, 53 points, in dependency order, ready to become wave 3.

## Decisions at a glance

| # | Decision | Overrules / confirms |
|---|---|---|
| D1 | Eight top-level pages, each with one job nobody else does (table in §1); `/docs` is an archive, `/book` is the depth | confirms site-structure report |
| D2 | Three reader journeys are the test of the shape; every chapter is ≤ 2 clicks from `/` by two different paths | confirms `AGENTS.md` two-click rule |
| D3 | URLs stay `/book/<slug>`; JSON-LD stays `Book`/`Chapter`; the **reader-facing label becomes "Chapters"** everywhere "Book"/"Vision Book" appears | R3 Option 3; ADR 001 stays valid |
| D4 | Two classification axes as frontmatter: `layer` (frame · language · digital · robotics · path) and `kind` (argument · proposal · playbook · objections · manifesto); plus `order` within a layer | replaces the `GROUPS` array |
| D5 | `/book` groups are derived from `layer`; a chapter with no `layer` lands in a visible **"Unsorted"** group instead of vanishing | fixes the "invisible unless hand-added" bug |
| D6 | A **`glossary` content collection** is the single source for definitions; chapters carry `concepts: reference('glossary')[]`, validated at build | R3 Part B becomes data |
| D7 | `tags` is deprecated: each tag becomes a concept or is dropped; `/tags` and `/tags/[tag]` are deleted; `/tags` redirects to `/glossary` | R3's "repurpose tags" — done by replacement, not by overloading |
| D8 | One argument, one home — the 17 rows in §5 are binding; every other occurrence becomes a pointer of ≤ 3 sentences + link, or nothing | consistent with R4 |
| D9 | Chapter footers are generated: previous/next within the layer, up to three related-by-concept, the layer's anchor on `/vision`; the 13 hand-written italic footers are deleted | R2 pattern B4 |
| D10 | Term tooltips: glossary-driven, first occurrence per page, hover 650 ms / tap / focus, native Popover API, always a real link underneath; auto-linking only for aliases marked safe | R1(e), Wikipedia spec |
| D11 | Site map at `/site-map`, labelled "Site Map": a static multi-column list is the wayfinding tool; the link-graph SVG sits below it as a companion, generated at build | NN/g finding, R1(e) |
| D12 | Route cleanup in the order of §9: catch-all restricted to `ideas/ articles/ reference/`; all legacy redirects in one `astro.config.mjs` table; wrappers deleted; `principles.md` retired; eGov files merged, both spellings redirected | closes R3 Part C findings 1–3 |
| D13 | New floor chapter "One Working Language" (`book/one-working-language.md`, layer language, kind argument, order 1) written from `aging-society-frame.md:44-70`; the EES spec stays as the layer's proposal | R4 Q6 |
| D14 | Wave 3 is 53 points; by the 13-point rule it goes through AO unless Paweł repeats the "swarm, I orchestrate" instruction recorded in `epics/INDEX.md` | — |

---

## 1. The site's shape

### 1.1 Top-level pages — one job each (D1)

| Route | Job nobody else does | Must contain | Must NOT contain |
|---|---|---|---|
| `/` | State the frame and hand the reader a next step; measured in departures | four-step frame · three layers short form · ownership note · who this is for · CTA to `/why`, `/vision`, `/manifesto`, `/support` | any argument told in full |
| `/vision` | The three layers at full length, one screen; **the layer anchors** `#language` `#digital` `#robotics` are the targets chapters link up to | layers long form · ownership question at length · per-layer list of chapters (derived from `layer`) | the four-step frame retold (two-line recap + link) |
| `/why` | Answer the reader who accepts the frame and doubts the plan | five objections, each 3–5 sentences + the link to the chapter that argues it; `WhyEvidenceNote` as centre of gravity | the chapters' arguments rewritten (R4: ~900 of 2,335 words today) |
| `/manifesto` | Make the demand and say why; the only page that owns the closing "you are the condition of it" | the four `ManifestoDemand` callouts, visible together | the accelerator/brake definition (link to the glossary/chapter) |
| `/principles` | How we decide — the four principles and the four ownership rules as first-class items | principles + ownership rules with links to `/book/who-it-earns-for` and `/book/cheap-is-wealth` | the demographic story (already trimmed; keep it so) |
| `/benefits` | Translate the frame into self-interest by country and role | what it has, re-anchored on the frame | an "About this project" block |
| `/support` | Turn intent into reach or money | share first, Patreon second, what funding buys in frame-era terms | — |
| `/book` (label **Chapters**) | The depth: every chapter, grouped by layer, ordered by `order`, with `kind` visible | groups from data, Unsorted fallback, "start here" pointer to the frame chapter | a hand-kept slug list |
| `/glossary` (new) | Every governed concept with its definition and canonical home | generated from the glossary collection | prose essays |
| `/site-map` (new) | Wayfinding: the whole site on one page, plus the link graph | static multi-column list · graph companion | anything interactive that the list does not also say |
| `/commentary` | The dated voice; the only reason to return | what it has · a header entry the day it goes public | — |
| `/docs`, `/docs/all`, `/docs/ideas/*`, `/docs/articles/*`, `/docs/reference/*` | Archive of record for material with no curated home | auto-grouped listing | chapters, `/why`, `/manifesto` (they get no `/docs/` URL — §9) |

Navigation (`Header.astro:11-17`) shows `Overview · Why · Vision · Chapters · Benefits · Support`
(+ `Commentary` when public). "Chapters" replaces the missing `/book` entry — today `/book` has
**no inbound link from global navigation in production** (R3 Part C, finding 2). Footer keeps
its three columns; "Vision Book" loses `devOnly`, "Sitemap → `/sitemap.xml`" becomes
"Site Map → `/site-map`" (an XML file is not a page for humans).

### 1.2 The three reader journeys (D2)

Each journey is a test: if a step needs a URL typed by hand, the shape is wrong.

| Journey | Step 1 | Step 2 | Step 3 | Step 4 | Where it ends |
|---|---|---|---|---|---|
| **The sceptic** ("Europe is ageing, so what — immigrate") | `/` frame | `/why` — the objection they came with | the chapter that argues it (`/book/designing-our-retirement`, `/book/education-and-migration`, `/book/who-it-earns-for`, `/book/political-path`) | `/manifesto` | `/support` share, or leaves with one chapter read |
| **The engineer who wants to build** | `/` layer card | `/vision#<layer>` | the layer's `proposal` chapter (`/book/european-english`, `/book/european-egovernment`, `/book/robotic-reindustrialisation`) | `/book/cheap-is-wealth#a-worked-example-i-am-building-myself` — the one place Paweł is a builder | the chapter's "what this means for you" + `/support` |
| **The person who wants to help** | `/` or a shared `/manifesto` | `/book/first-move` (the only `playbook`) | `/book/direct-democracy` and `/book/safeguards` for the case they will be asked to defend | `/support` | Patreon / share / the ECI committee list |

Consequence for interlinking: `/why` must link every objection to a chapter; every `proposal`
chapter must link to `/book/cheap-is-wealth` (ownership is "visible on every proposal",
`aging-society-frame.md:264-265`); `/manifesto` must link to `/book/first-move`. All three are
checked by the content audit (§10, T11).

### 1.3 The two-click rule, applied

`AGENTS.md`: homepage → pillar or collection → document. Two paths now satisfy it for every
chapter, so a broken one does not orphan anything:

- `/` → **Chapters** (header) → chapter (`/book` lists every non-draft entry, Unsorted included);
- `/` → layer card → `/vision#<layer>` → chapter (the per-layer list is derived from `layer`).

The audit computes BFS depth from `/` over body + navigation links and fails on any published
page deeper than 2. Today the rule is asserted in `AGENTS.md` and checked by nobody.

---

## 2. Nomenclature (D3)

### 2.1 What the collection is called

Paweł's complaint is about the **label**, not the URL: "Book: Choosing People" reads as a book
whose subject is choosing people. R3 evaluated three options; the choice here is Option 3
with one concrete word.

| Candidate label | Nav / breadcrumb | Why not / why yes |
|---|---|---|
| Book / Vision Book (today) | Home › Book › Choosing People | the prefix is the bug; "Vision Book" also promises a linear read the index does not deliver |
| Essays | Home › Essays › Choosing People | contradicts the text: 13 chapters say "this chapter" of themselves (`first-move.md:10` "This chapter is an instruction"); would force a copy sweep inside chapters |
| Arguments / The Case | Home › Arguments › First Move | mislabels the playbook (`first-move`), the reference mapping (`safeguards`) and the objections page; `kind` already carries "argument" and would collide |
| **Chapters** | **Home › Chapters › Choosing People** | true to the text and to the JSON-LD (`Book`/`Chapter`), plural so it does not read as a title, and "Chapters" without "Book" says "parts of one thing" without promising an order |

**Decision.** Reader-facing label is **Chapters**. Strings to change (all copy, no routes):
`book/index.astro:78,84,94` (`breadcrumb name 'Book'`, `title="Vision Book"`, `<h1>Vision Book`),
`book/[...slug].astro:35,41` (breadcrumb `'Book'`, `backLabel="Back to the Vision Book"`),
`Footer.astro:26` ("Vision Book" + `devOnly`), `jsonld.ts:108` (`'EU Reform Vision — the Book'`
may stay: it names the schema.org `Book` node, which is machine-facing), `llms.txt.ts` "## The
book" → "## Chapters". A one-line comment goes into `book/index.astro` saying the folder name
`book` is a URL, not a label, so a future agent does not reintroduce it.

Chapter pages stop carrying any collection word in the `<title>`: `Choosing People — EU Reform
Vision`. Above the h1 an **eyebrow** shows the two axes: `How we get there · Proposal`. That is
the line that answers "what is this and where does it sit" — the question the old prefix was
failing to answer.

### 2.2 The vocabulary

Three words, used the same way in frontmatter, on the page, in the audit and in this document:

| Word | Meaning | Values | Reader label |
|---|---|---|---|
| **layer** | where the chapter sits in the frame (structural) | `frame` · `language` · `digital` · `robotics` · `path` | "The frame" · "Floor — one working language" · "Middle — the digital state" · "Ceiling — robotics" · "How we get there" |
| **kind** | what the reader gets on click (rhetorical) | `argument` · `proposal` · `playbook` · `objections` · `manifesto` | "Argument" · "Proposal" · "Playbook" · "Objections" · "Manifesto" |
| **concept** | a governed term with one definition and one home | slugs of the glossary collection | the term itself, with a tooltip |

Notes on the enum choices, so they are not re-litigated:

- `layer` values are **semantic** (`language`), reader labels are **positional** ("Floor").
  Positions are copy and can change; slugs in 31 files should not.
- `frame` is a layer for grouping purposes although it is below the floor: the frame chapters
  are what the floor stands on, and the `/book` index must show them first.
- `kind` has five values, not six: **glossary is not a kind of chapter**, it is a collection
  (§4). A reserved-but-unused enum value is exactly the speculative surface `code-style.md`
  forbids.
- "Cross-cutting concept" (the ownership question, cheap-as-design-goal) is not a layer and not
  a kind: it becomes a **concept** with a canonical home in the `path` layer, referenced from
  every proposal chapter's `concepts`. That is what makes it visible everywhere without being
  retold everywhere.
- `topic` (Paweł's word) = `concepts`. A chapter is *about* several concepts (many-to-many);
  one primary topic per chapter would be a fourth field with no consumer. Commentary keeps its
  own `topic` string; it is a different collection.

### 2.3 Frontmatter — exact schema change (D4, D6, D7)

`src/content/config.ts`, additions to `docsSchema` (every field optional so nothing breaks the
day the schema lands; the audit, not the schema, reports which book entries lack them):

```ts
import { defineCollection, reference, z } from 'astro:content';

export const LAYERS = ['frame', 'language', 'digital', 'robotics', 'path'] as const;
export const KINDS = ['argument', 'proposal', 'playbook', 'objections', 'manifesto'] as const;

const docsSchema = baseSchema.extend({
  description: z.string().min(70).max(160),
  date: z.coerce.date(),
  updated: z.coerce.date().optional(),
  author: z.string().default('Paweł Żentała'),
  /** Where the entry sits in the frame; required for book/* by the content audit. */
  layer: z.enum(LAYERS).optional(),
  /** What the reader gets on click; required for book/*, why and manifesto by the audit. */
  kind: z.enum(KINDS).optional(),
  /** Reading order inside a layer (1 = first). Ties break alphabetically by title. */
  order: z.number().int().positive().optional(),
  /** Governed terms this entry argues or uses; each must exist in src/content/glossary/. */
  concepts: z.array(reference('glossary')).default([]),
  // tags: kept during migration, removed in T02 (D7)
});

// Glossary: one file per concept, body = the long definition, frontmatter = the card.
const glossarySchema = z.object({
  term: z.string(),                      // canonical display name
  aliases: z.array(z.string()).default([]),
  definition: z.string().min(40).max(280), // the tooltip text: one or two sentences
  href: z.string().startsWith('/'),      // canonical home, may carry #anchor
  related: z.array(reference('glossary')).default([]),
  status: z.enum(['defined', 'needs-definition', 'external']).default('defined'),
  autolink: z.boolean().default(false),  // may the first occurrence be auto-marked? (§7)
  source: z.string().optional(),         // external authority when status = external
});

export const collections = {
  commentary: defineCollection({ schema: commentarySchema }),
  docs: defineCollection({ schema: docsSchema }),
  glossary: defineCollection({ type: 'content', schema: glossarySchema }),
  ideas: defineCollection({ schema: baseSchema }),
  transcripts: defineCollection({ schema: transcriptSchema }),
};
```

`reference('glossary')` makes a misspelled concept a **build error**, which is the property
the free-text `tags` field never had. `layer`/`kind` on a non-book entry are ignored by `/book`
and used by the site map.

### 2.4 `/book` index derived from `layer` (D5)

`src/pages/book/index.astro` loses `GROUPS` (`:17-51`) and becomes:

```ts
const LAYER_LABELS: Record<Layer, string> = {
  frame: 'The frame',
  language: 'Floor — one working language',
  digital: 'Middle — the digital state',
  robotics: 'Ceiling — robotics',
  path: 'How we get there',
};
const byLayer = new Map<Layer | 'unsorted', BookDoc[]>();
for (const entry of chapters) {
  const key = entry.data.layer ?? 'unsorted';
  byLayer.set(key, [...(byLayer.get(key) ?? []), toBookDoc(entry)]);
}
const groups = [...LAYERS, 'unsorted' as const]
  .map((key) => ({ key, title: key === 'unsorted' ? 'Unsorted' : LAYER_LABELS[key], docs: sortByOrder(byLayer.get(key) ?? []) }))
  .filter((g) => g.docs.length > 0);
```

Three properties, each fixing a real bug: a new chapter is **visible by default** (in Unsorted
until classified); the match is exact-field, so the `eGov-vison` casing mismatch
(`GROUPS:36-37` vs Astro's lowercased `entry.slug`) cannot recur; and `/vision`, the site map
and `llms.txt` read the same field, so they can never disagree with `/book` about where a
chapter lives. `sortByOrder` sorts by `order`, then title. Each card shows the `kind` as a
small label ("Playbook") — that is the second half of the nomenclature fix: the reader learns
on the index what a click delivers.

### 2.5 Classification of every entry

| Entry (`src/content/docs/…`) | layer | kind | order | Status after wave 3 |
|---|---|---|---|---|
| `book/designing-our-retirement.md` | frame | argument | 1 | publish |
| `book/redesigning-the-state.md` | frame | argument | 2 | publish |
| `book/education-and-migration.md` | frame | proposal | 3 | publish |
| `book/principles.md` | — | — | — | **retire** (§9) |
| **`book/one-working-language.md`** (new, D13) | language | argument | 1 | write (T12) |
| `book/european-english.mdx` | language | proposal | 2 | publish (split: argument out, spec + appendix stay) |
| `book/economic-growth-language-unity.mdx` | language | argument | 3 | draft stub, held |
| `book/media-cultural-integration.mdx` | language | proposal | 4 | draft stub, held |
| `book/language.md` | — | — | — | merge into the new floor chapter, then delete |
| `book/language-integration-administrative-implementation.mdx` | — | — | — | merge or delete (R4: invented timeline) |
| `book/the-total-state.md` | digital | argument | 1 | publish |
| `book/european-egovernment.mdx` | digital | proposal | 2 | rewrite as one (absorbs eGov-vison, eGov-challenges) — pending Q9 |
| `book/eGov-vison.mdx`, `book/eGov-challenges.mdx` | — | — | — | **merge and delete**; both spellings redirected (§9) |
| `book/unified-payment-zone.mdx` | digital | proposal | 3 | draft stub, held |
| `book/near-zero-transaction-costs.md` | digital | proposal | 4 | draft stub, held |
| `book/digital-receipts.mdx` | digital | proposal | 5 | draft stub, held |
| `book/european-blockchain-archives.mdx` | digital | proposal | 6 | draft stub, held |
| `book/european-elearning-system.mdx` | digital | proposal | 7 | draft stub, held |
| `book/robotic-reindustrialisation.md` | robotics | argument | 1 | publish |
| `book/european-science.md` | robotics | argument | 2 | publish |
| `book/the-shorter-week.md` | robotics | proposal | 3 | publish |
| `book/new-cities.md` | robotics | proposal | 4 | publish |
| `book/predictive-healthcare-system.mdx` | robotics | proposal | 5 | draft stub, held (largely covered by european-science) |
| `book/who-it-earns-for.md` | path | argument | 1 | publish |
| `book/cheap-is-wealth.md` | path | argument | 2 | publish |
| `book/direct-democracy.md` | path | argument | 3 | publish (glossary section moves out, §4) |
| `book/safeguards.md` | path | proposal | 4 | publish after re-voicing (Q2) |
| `book/steering.md` | path | argument | 5 | publish |
| `book/choosing-people.md` | path | proposal | 6 | publish |
| `book/political-path.md` | path | argument | 7 | publish |
| `book/first-move.md` | path | playbook | 8 | publish |
| `why.mdx` | — | objections | — | publish (structural edit, R4) |
| `manifesto.mdx` | — | manifesto | — | publish |
| `index.mdx`, `all.mdx`, `support/*`, `why/*`, `ideas/*`, `articles/*`, `reference/*` | — | — | — | archive; no layer/kind; not in the graph's core |

Order inside `path` keeps the site-structure logic: the surplus question first (why the
machines must earn for society), then the instrument (direct democracy), its safety, its
speed, its people, its politics, and last the instruction.

---

## 3. Ontology — the governed glossary (D6)

One file per concept in `src/content/glossary/<slug>.md`. The frontmatter is the tooltip; the
body (optional) is the long form the `/glossary` page shows. **Nothing below is invented**:
every definition is quoted or tightly paraphrased from the `file:line` R3 found; where the site
has none, the row says so and the entry ships with `status: needs-definition`, which the
tooltip renders as "no definition yet — read the chapter" rather than as text.

| slug | term | aliases to normalise | definition on site (source) | href (canonical home) | status |
|---|---|---|---|---|---|
| `semi-direct-democracy` | Semi-direct democracy | semi-direct, Swiss model | parliament and government carry on; citizens hold two instruments to propose and to strike down (`direct-democracy.md:74-76`, `safeguards.md:27`) | `/book/direct-democracy#the-words-in-one-place` | defined |
| `citizens-initiative` | Citizens' initiative | initiative, popular initiative, the accelerator | lets citizens propose a change and force a vote on it — the accelerator (`direct-democracy.md:77-78`; thresholds `:320-322`) | `/book/direct-democracy#the-words-in-one-place` | defined |
| `optional-referendum` | Optional referendum | referendum, the brake | lets citizens strike down a law parliament has passed — the brake (`direct-democracy.md:78-79`; thresholds `:324-326`) | `/book/direct-democracy#the-words-in-one-place` | defined |
| `double-majority` | Double majority | majority of people and of cantons/states | a change passes only with a majority of voters and a majority of cantons (`direct-democracy.md:166-168`; worked mechanics `safeguards.md:62-70`) | `/book/safeguards#the-safeguards-one-by-one` | defined |
| `unity-of-subject` | Unity of subject | single-subject rule | an initiative may not bundle unrelated matters (`direct-democracy.md:169-170`) | `/book/direct-democracy#the-words-in-one-place` | defined |
| `european-citizens-initiative` | European Citizens' Initiative | ECI | one million signatures from seven member states within twelve months puts a demand on the Commission's desk; it binds nobody (`direct-democracy.md:343-346`, `first-move.md:16`) | `/book/first-move#how-it-actually-works` | defined |
| `the-digital-state` | The digital state | digital state, total state, the total state | a state that touches everything, sees everything and can act everywhere at once — total in reach; named positively on `/vision` (layer 2) and as a warning in the manifesto: **the same system** (`the-total-state.md:77-80`) | `/book/the-total-state#why-a-digital-state-is-a-total-state` | defined |
| `who-captures-the-gains` | Who captures the gains | the ownership question, who owns the robots | the question every proposal must answer: cheap to buy and run, available to every municipality, open standards, hard to monopolise (`vision-content.ts:153-159`) | `/vision#who-captures-the-gains` (anchor to add, T14) | defined |
| `cheap-is-wealth` | Cheap as the goal | cheapness, cheap beats owned | wealth is when things are cheap, not when they are expensive; making things cheap is the goal, not a side effect (`cheap-is-wealth.md:9-13`) | `/book/cheap-is-wealth` | defined |
| `predistribution` | Predistribution | — | **NONE** on site in the author's words; named at `cheap-is-wealth.md:153`, external links only at `who-it-earns-for.md:184-186` | `/book/who-it-earns-for#words-that-fit-better` | needs-definition (Paweł, R4 Q "adopt the vocabulary?") |
| `citizens-wealth-fund` | Citizens' wealth fund | sovereign wealth fund, Norway model | defined by example only — Norway's Government Pension Fund Global (`who-it-earns-for.md:191-192`) | `/book/who-it-earns-for#words-that-fit-better` | defined (by example; one abstract sentence still wanted) |
| `social-market-economy` | Social market economy | — | **NONE** — named and sourced to Article 3 TEU (`cheap-is-wealth.md:153-154`), no plain-English sentence anywhere | `/book/cheap-is-wealth` | needs-definition |
| `requisite-variety` | Requisite variety | Ashby's law | a controller must have at least as much variety in its responses as the system it steers throws at it (`steering.md:94-96`) — **attribution to Paweł's voice is R4's open question**, the definition itself is Ashby's | `/book/steering#a-controller-must-correct-at-least-as-fast-as-the-thing-it-steers` | defined |
| `european-health-data-space` | European Health Data Space | EHDS | **NONE** — named once in passing (`european-science.md:71`) | `/book/european-science` | external (EU Regulation 2025/327; tooltip says "EU regulation, not defined on this site") |
| `the-frame` | The frame | the four steps, aging-society frame | not three parallel pillars; each level is what makes the next one possible (`vision-content.ts:64`); the four-step demographic argument (`vision-content.ts:26-43`) | `/vision` | defined |
| `the-three-layers` | The three layers | floor / middle / ceiling, the stack | one working language, a digital state, robotics on top of both — stacked so the fewer working-age people left are not crushed (`book/index.astro:102`, `llms.txt.ts`) | `/vision#layers-title` | defined |
| `union-of-nations` | Union of Nations | — | heading exists at `direct-democracy.md:261`; tag on the same chapter; **wording not verified in this pass** | `/book/direct-democracy#the-union-of-nations` | needs-definition (lift from the section or leave undefined) |
| `coalition-of-the-willing` | Coalition of the willing | willing member states first | used in `political-path.md` description; the old `/` FAQ told it as "voluntary model" (site-structure report) — **no one-sentence definition verified** | `/book/political-path` | needs-definition |
| `sortition` | Sortition | selection by lot | tag on `choosing-people.md`, prior-art section `:117-190`; **definition not verified** | `/book/choosing-people` | needs-definition |

Rules of the glossary, so it stays governed:

1. **One referent, one entry.** Naming variance is solved by `aliases`, never by a second
   entry — the digital/total state row is the model.
2. **`href` points at an anchor that exists.** Anchors are Astro's default heading ids
   (`## The words, in one place` → `#the-words-in-one-place`); the audit checks every `href`
   against the built HTML and fails on a missing id.
3. **A definition is one or two plain sentences in Paweł's register**, lifted from the site.
   An entry that needs a sentence he has not written ships as `needs-definition`; the tooltip
   then shows only the link. No agent writes a definition into a `needs-definition` entry
   without a dictation behind it — same rule as chapters (editorial standard, D2 of E006).
4. **The glossary is the only source.** `direct-democracy.md:310-346` ("The words, in one
   place") and `safeguards.md:27-50` keep their prose as the canonical *homes*, but the
   tooltip text lives in the collection, so the two cannot drift a third time.
5. **Tags → concepts mapping** (the one-time normalisation, T02): `direct democracy` and
   `direct-democracy` → `semi-direct-democracy`; `European Citizens' Initiative` and `ECI` →
   `european-citizens-initiative`; `ownership`, `surplus` → `who-captures-the-gains`;
   `digital state`, `egovernment`, `digital identity` → `the-digital-state`; `cybernetics`,
   `feedback` → `requisite-variety`; `Union of Nations` → `union-of-nations`; `sortition` →
   `sortition`. Everything else (`strategy`, `work`, `EU`, `Reform`, `Integration`, `health`,
   `Germany`…) is a keyword, not a concept, and is **dropped** — it had no consumer except
   the orphaned `/tags` page.

---

## 4. Where the glossary text comes from, and where it goes

| Today | After |
|---|---|
| `direct-democracy.md:72-82` — 200-word definition parked mid-section (R4) | stays as prose in the chapter (it is the canonical home) — but shortened to the sentences that the glossary quotes, with the mechanics in `:310-346` |
| `direct-democracy.md:310-346` "The words, in one place" | remains the home for four entries (`href` above); the numbers are stated **here only** |
| `safeguards.md:27-50` glossary block | keep the validity checks and the double-majority worked example (unique); replace the re-derived thresholds with one link to `/book/direct-democracy#the-words-in-one-place` (R3 row 6) |
| `manifesto.mdx:214-220`, `the-total-state.md:101-113`, `political-path.md:66-73` — full definitions of the two instruments | one sentence + `<T>` tooltip each (R4 duplication row 1) |
| no `/glossary` page | `/glossary`: every entry, grouped by the layer of its `href`, with `status` visible; linked from the footer and from every tooltip card's "all terms" |

---

## 5. One argument, one home (D8)

The ten full-restatement rows from R4 plus the seven from R3 Part A, merged where they name the
same passage. **Canonical** = the only place the argument is written out. Every other cell
becomes a *pointer*: ≤ 3 sentences that state the conclusion and link to the canonical
anchor — or nothing, where the passage exists only to restate.

| # | Argument | Canonical home | Other occurrences → become |
|---|---|---|---|
| 1 | Semi-direct democracy = initiative + optional referendum, accelerator and brake | `/book/direct-democracy#the-words-in-one-place` (concept-level) | `manifesto.mdx:214-220` → one sentence + tooltip · `the-total-state.md:101-113` → pointer · `political-path.md:66-73` → pointer · `safeguards.md:27-50` → keep validity checks only, cite numbers by link (R3 row 6) |
| 2 | Ownership second, cheapness first ("cheap beats owned") | `/book/cheap-is-wealth` (the principle) and `/book/who-it-earns-for#it-has-to-earn-for-society-not-only-for-capital` (who it earns for) | `designing-our-retirement.md:146-154` → 2 sentences + link · `robotic-reindustrialisation.md:103-120` → 2 sentences + link · `who-it-earns-for.md:111-124` → cut (chapter says it will not relitigate; do that) · `why.mdx:120-131` → objection answer of 3–5 sentences + link · `principles.astro:147-171` → the four rules as a list + links to both chapters (R3 row 2) |
| 3 | Where machines go first; "cared for by a machine and being alone are not the same thing" | `/book/robotic-reindustrialisation` (`:81-101`) | `designing-our-retirement.md:93-109` → the "targets in order" table stays (it is the frame's list), the care sentence and the argument go |
| 4 | Three-part immigration answer | `/book/education-and-migration` | `designing-our-retirement.md:64-78` → 3 sentences + link · `why.mdx:59-76` → objection answer + link |
| 5 | "We already pay / we already saved" (who pays) | `/book/designing-our-retirement#` (`:114-135`) | `why.mdx:215-237` → objection answer + link |
| 6 | "I am a programmer, so I see a nail everywhere" | `/book/designing-our-retirement` (`:80-81`) | `why.mdx:94-95` → delete (a joke told twice is a tic) |
| 7 | "You are not the audience, you are the condition of it" / critical-mass close | `/manifesto` (`:249-257`) | `why.mdx:283-287` → one-line link to `/manifesto` · `designing-our-retirement.md:168-169` → keep one clause, link · `vision-content.ts:169-175` `callToAction` → keep (shared component on `/` and `/vision`, R3 row 3) but reword so it is not the manifesto's sentence |
| 8 | Discontent without an offer turns into nationalism | `/book/direct-democracy#it-is-also-the-democratic-answer-to-the-anger` (`:96-105`) | `political-path.md:56-64` → 2 sentences + link |
| 9 | "I have not worked for seven months" | `/book/the-shorter-week` (`:87-94`, where it carries an argument) | `manifesto.mdx:93-94` → keep the personal sentence only if it does work there; otherwise link |
| 10 | Why there is no European AI | `/book/european-science` (`:10-33`) | `manifesto.mdx:138-152` → 2 sentences + link |
| 11 | The four-step demographic frame | `/` in full (`vision-content.ts:26-43`, shared with `/vision`); chapter at length `/book/designing-our-retirement` | `/why:27-37`, `/principles:138-145` already pointers — unchanged · `principles.md` → retired |
| 12 | The three layers | `/vision` long form, `/` short form (one source) | `book/index.astro:102` blurb → keep one paragraph, link |
| 13 | What this site is about (one-liner) | `homeFrameIntro` / `visionFrameIntro` in `vision-content.ts` | `Footer.astro:71-73` → one-string edit to the frame-era line · `docs/index.mdx:16`, `docs/all.astro:9,13` → same string or delete (archive pages) |
| 14 | Swiss thresholds (100,000 / 18 months; 50,000 / 100 days) and the scaled EU/Poland numbers | `/book/direct-democracy#the-words-in-one-place` for the Swiss facts; **one** scaled number pending Q3 | `safeguards.md:228-297` → the arithmetic stays (it is unique) but starts from the linked facts · `first-move.md:182-184` → cite the decided number |
| 15 | Five legal open questions | `/book/political-path` (`:145-157`) as one table | `why.mdx:189-202` → link to the table |
| 16 | Old pre-frame "principles" prose | nowhere | `principles.md:9-70` → retired with the file |
| 17 | The chapter closers "what this means for you" saying "carry the argument, build a piece" (6 of 9) | `/manifesto` (carry) and `/support` (act) | each closer keeps only what is specific to its chapter; the generic two sentences become the generated footer's "carry this" line (§6) |

Rows 2, 5, 9 and 14 wait on Paweł's answers (R4 Q1, Q3); the rest can be executed by an
editor against this table. The audit (T11) enforces the rule mechanically for the future
by flagging any chapter that links to a non-canonical home for a concept it declares.

---

## 6. Interlinking rules (D9)

1. **Every chapter footer is generated**, never written. `ChapterFooter.astro` (R2 B4 with a
   different source) renders, from data:
   - *In this layer:* previous / next by `order` inside the same `layer` (none across layers —
     the frame's last chapter does not "continue" into the floor; the layer anchor does that);
   - *Up:* the layer's label linking to `/vision#<layer>`;
   - *Related:* up to three chapters sharing the most `concepts`, excluding prev/next, ties by
     `order`; zero shared concepts → no related section (an empty section is not rendered);
   - *Carry this:* one fixed line linking `/manifesto` and `/support` — the home of the generic
     closer (§5 row 17).
   The 13 italic "*Part of the EU Reform Vision…*" paragraphs (R2 B4, `cheap-is-wealth.md:181`
   … `who-it-earns-for.md:260`) are deleted in the same commit; the two chapters that skipped
   the paragraph (`new-cities`, `the-shorter-week`) stop being an accident.
2. **Inline links go to canonical homes only** (§5 table, glossary `href`). A chapter that
   wants to mention the accelerator links the glossary anchor, not a sibling's retelling.
3. **No `/docs/` link anywhere in a chapter, `/why` or `/manifesto`.** Today: zero (verified by
   grep); the audit keeps it zero. `/docs/*` is an archive surface and, after §9, no chapter
   has a `/docs/` URL at all.
4. **No link to a retired or merged entry**: `/book/principles`, `/book/eGov-*`,
   `/book/egov-*`, `/book/language`. Today `docs/index.mdx:18` links `/book/principles/` and
   `docs/all.astro:151-152` links the lowercase eGov slugs; both are fixed in T04.
5. **Every `proposal` chapter declares `who-captures-the-gains` in `concepts`** and therefore
   links `/book/cheap-is-wealth` from its body or footer — the frame's "visible on every
   proposal" rule made checkable.
6. **Layer pages link down, chapters link up.** `/vision#<layer>` lists its chapters from
   `layer` + `order`; a chapter links only its own layer anchor. Sideways links are the
   footer's job.
7. **Tag normalisation** is the one-time mapping in §3 rule 5; after T02 no `tags` field
   remains in `docsSchema`, so the question cannot come back.

---

## 7. Term tooltips — specification (D10)

**Data source.** The glossary collection, nothing else. The card is built at build time from
`term`, `definition`, `href`, `status`; no fetch, no client-side lookup.

**Trigger.**

| Mechanism | When | How |
|---|---|---|
| Explicit `<T slug="citizens-initiative">the initiative</T>` in MDX | any `.mdx` entry; whenever the author wants a specific phrase marked | renders `<a class="term" href="{href}" data-term="{slug}">` + the card |
| Auto-marking by a rehype plugin (`rehype-glossary-terms`) | `.md` and `.mdx` alike; **first occurrence per page** of a `term` or `alias` of an entry with `autolink: true`; skips headings, code, links, blockquotes and `kind: manifesto` entries | same output as `<T>`; a page can opt out with `tooltips: false` only if that field is added later — not now |
| Never | inside `/glossary` itself, inside another tooltip card, on `/`'s hero | — |

`autolink: true` is set only for multi-word, unambiguous aliases: *citizens' initiative*,
*optional referendum*, *semi-direct democracy*, *double majority*, *unity of subject*,
*European Citizens' Initiative* / *ECI*, *total state*, *requisite variety*, *predistribution*,
*citizens' wealth fund*, *social market economy*, *European Health Data Space* / *EHDS*. It is
**false** for `cheap-is-wealth`, `the-frame`, `the-three-layers`, `who-captures-the-gains`:
"cheap", "frame" and "layers" are ordinary words and would mark sentences that are not about
the concept. Those four are marked only by hand with `<T>` — or not at all.

**The card.** `term` as a heading (not a link — the link is the underlying anchor), the
`definition` (≤ 280 characters by schema), one link "Read where it is argued →" to `href`, and
one small link "All terms" to `/glossary`. For `status: needs-definition`: no definition text,
the sentence "Not defined yet — the chapter is the definition." and the link. For `external`:
the definition plus "Defined outside this site" and the `source`. No images, no kind badge, no
related terms — the card is a preview, not a page (Wikipedia's rule).

**Behaviour** (numbers are Wikipedia's tuned values, R1(e)):

| Input | Behaviour |
|---|---|
| Mouse hover | show after **650 ms** of rest over the term; hide 300 ms after the pointer leaves both term and card (so the card is reachable) |
| Keyboard focus (Tab) | show after the same delay; `Esc` hides; the underlying anchor still activates on Enter |
| Touch | first tap opens the card (the term is a link, so this needs `preventDefault` only when the card is closed); second tap on the term follows the link; tap outside closes |
| Position | anchored to the term, flipped to stay in the viewport, never clipped by the header (it renders in the top layer via `popover`) |
| Reduced motion | no fade |
| No JS / old browser | the term is a plain link to `href`; nothing is lost |

**Implementation.** Native first: `popover="manual"` on the card and the Popover API
(`showPopover`/`hidePopover`) with a ~40-line script; CSS anchor positioning where supported,
a fixed-position fallback otherwise. No tooltip library, no ARIA role invention beyond
`aria-describedby` from the term to the card. Styling comes from `DESIGN.md`'s
`term-tooltip` component contract, not from this document.

**What NOT to do.**

- Do not mark every occurrence — one per page, or the page turns into a dotted-underline field.
- Do not put a definition on the card that is not in the glossary file.
- Do not open on hover without a delay, or on scroll-past on touch.
- Do not make the card the only way to reach the definition (the anchor link is always there).
- Do not tooltip a term inside its own canonical section (a term defined in the paragraph
  above its own definition is noise; the plugin skips the page whose slug equals the entry's
  `href` path).
- Do not use `title=` attributes as the fallback; they are unreachable on touch and unreadable
  by screen readers in most combinations.

---

## 8. Site map page — specification (D11)

Route `/site-map`, page title and h1 **"Site Map"** (NN/g: the label users look for; the
`/sitemap.xml` link in the footer is replaced by this page). Two parts, in this order.

### 8.1 The wayfinding tool: a static multi-column list

Built from the collections at build time; no interaction is needed to see all of it.

| Column | Contents (each line: title, then a small `kind` label) |
|---|---|
| Start here | `/` Overview · `/vision` The three layers · `/why` The objections, answered · `/manifesto` · `/principles` · `/benefits` · `/support` |
| The frame | frame chapters by `order` |
| Floor — one working language | language chapters by `order` |
| Middle — the digital state | digital chapters by `order` |
| Ceiling — robotics | robotics chapters by `order` |
| How we get there | path chapters by `order` |
| Reference | `/glossary` (with the count of terms) · `/commentary` (when public, with the three latest) · `/docs` archive (ideas, articles, reference as three lines) · Privacy · Terms |

Drafts never appear in production (same filter as `/book`). "Unsorted" appears here too if
non-empty, so a misfiled chapter is visible in two places. Columns collapse to one at phone
width; NN/g's 61 % vs 47 % task success is for desktop and the multi-column layout is kept
there.

### 8.2 The companion: the link graph

**Data.** `scripts/link-graph.mjs` runs **before** `astro build` (the `build` npm script
becomes `node scripts/link-graph.mjs && astro check … && astro build && …`) and writes
`src/data/link-graph.json` (gitignored — generated). Nodes: every published page in the core
surface (the R3 scope: top-level pages, chapters, `/why`, `/manifesto`, `/glossary`,
commentary when public) with `id`, `title`, `layer`, `kind`, `inbound`, `outbound`. Edges:
every internal link found in the entry's Markdown/MDX body and in the top-level pages' source
(`src/pages/*.astro`, `src/lib/vision-content.ts`), **excluding** header/footer/generated
footer links (they would connect everything to everything). The script **fails the build**
when it finds fewer nodes than published chapters or zero edges — an empty graph must not
render as a clean one.

**Rendering.** A static inline SVG produced at build by the page (no client library):

- columns = layers in frame order (`frame` … `path`) plus "Pages" (top-level) and
  "Reference"; nodes ordered inside a column by `order`;
- node = a rounded label with the title; fill by layer colour (from `DESIGN.md` tokens);
  border style by `kind` (solid argument, dashed proposal, double playbook); size by inbound
  count (three steps, not continuous);
- edge = a thin curved path from source to target with a small arrowhead; a page's edges
  highlight on `:hover` and `:focus-within` through CSS only (`.node:hover ~ .edges [data-from=…]`
  via `:has()`), which is the entire interactivity;
- click on a node = navigate (each node is an `<a>`).

In preview builds only (`IS_PREVIEW`), dead links and orphans are drawn in the warning colour
with a legend line — the production graph shows the healthy site.

**Accessibility fallback.** The SVG sits in a `<figure>` with `aria-hidden="true"` and a
`<figcaption>`; the accessible version is the list above it plus a `<details>` block
"Connections as text" that lists, per chapter, "links to: …" from the same JSON. Screen-reader
and keyboard users lose nothing the graph says.

**What the graph is not.** Not the navigation, not a replacement for the list, not
force-directed (a deterministic layout renders the same on every build and can be diffed in
screenshots). NN/g's finding stands: the picture is for exploration and for showing the
corpus's shape; the list is for finding a page.

---

## 9. Route cleanup — in order (D12)

| # | Problem (source) | Action | Depends on |
|---|---|---|---|
| 1 | `src/pages/docs/[...slug].astro:10-12` filters on `draft` only, so every chapter, `/why`, `/manifesto`, `index`, `all`, `support/*`, `why/*` gets a `/docs/<slug>` twin, and `customSlug` entries a third URL (R3 Part C.1) | filter `entry.id` to `ideas/`, `articles/`, `reference/` **only**; drop the `customSlug` branch; delete the `console.log` scaffolding; remove `customSlug` from `baseSchema` once step 2 carries its three redirects | — |
| 2 | Legacy redirects are 13 wrapper files with two mechanisms (`Astro.redirect` in 12; a `prerender = false` meta-refresh in `docs/book/principles.astro`, which has no adapter to run under) | one `redirects` table in `astro.config.mjs`: `/docs/book` → `/book`; `/docs/book/<11 slugs>` → `/book/<slug>` (except principles, below); `/docs/why` → `/why`; `/docs/why-reforms` → `/why`; `/docs/for-you` → `/benefits`; `/docs/european-english` and `/docs/language-official-proposal` → `/book/european-english`; `/tags` → `/glossary`; delete the 13 files | 1 |
| 3 | `book/principles.md` is the retired pre-frame prose, still published, dead-end, linked from `docs/index.mdx:18` (R3 A.4, C.3; R4) | delete the file; add `/book/principles` → `/principles` to the table (making the accidental redirect a deliberate one); fix `docs/index.mdx:18` to `/principles` | 2 |
| 4 | `eGov-vison.mdx` / `eGov-challenges.mdx`: filenames capitalised, `GROUPS` capitalised, `docs/all.astro:151-152` lowercase; Astro's `entry.slug` lowercases, `[...slug].astro` builds the route from `entry.id` (case kept), so today the index never lists them and the archive links 404 (R3 GAPS; casing question resolved by reading the two files' slug sources) | merge both into `european-egovernment.mdx` (R4, pending Q9; until then set `eGov-challenges` `draft: true` — it contradicts `the-total-state.md:72-75`); delete both files; add redirects for **both spellings** of both slugs → `/book/european-egovernment`; fix `docs/all.astro:151-152` | 2 |
| 5 | `GROUPS` array (`book/index.astro:17-51`) | replaced by §2.4 | schema (T01) |
| 6 | `/tags`, `/tags/[tag]`: orphaned, two spellings of one tag, dark-only styling | delete both pages; redirect in step 2 | glossary (T05, T08) |
| 7 | `/vision/<layer>` preview pages `301` to `/vision` top, losing intent (site-structure item 7) | redirect to `/vision#<layer>` anchors — **verify** Astro's static `redirects` carry a fragment (GAPS); if not, keep three tiny wrappers with `Astro.redirect('/vision#language', 301)` | T14 anchors |
| 8 | `docs/all.astro` hardcodes a pre-frame description (`:9,13`) and chapter lists | derive from the collection or reduce to the archive listing; the line-edit in step 4 is the minimum | — |
| 9 | Footer `Sitemap → /sitemap.xml`, `Vision Book` devOnly, tagline `:71-73` pre-frame | `/site-map`, `Chapters` visible, frame-era tagline (one string) | T10 |

After step 2 the audit's dead-link and orphan checks run against the new table, and
`content-audit.mjs` gains a check that no built HTML links a path in the redirect table
(a link that needs a redirect is a link to fix).

---

## 10. Missing pieces (D13)

| Missing | Why the shape needs it | Action |
|---|---|---|
| **The floor chapter: why English** — the language layer is the declared floor and has only a standards spec (`european-english.mdx`); the argument (English is the bottleneck of Europe's information economy; no European political consciousness without a shared language; a shared interest keeps us from turning on each other) exists only in `aging-society-frame.md:44-70` (R4 Q6) | the sceptic's journey has no chapter to land on for the first layer; `/vision#language` would link a spec | `book/one-working-language.md`, layer language, kind argument, order 1; sources: the frame document, `language.md:16,22` (his voice), `european-english.sidecar.mdx` (2,707 words — **read first**, it may hold the argument); written under the editorial standard (D2), after Paweł's go |
| `/vision` layer anchors (`#language`, `#digital`, `#robotics`) and `#who-captures-the-gains` | every chapter's "Up" link and the glossary `href` for the ownership question | add ids to the sections in `vision/index.astro` (only `layers-title` exists today) |
| `/glossary` page | the site-visible face of the ontology; where "All terms" on a card lands | T08 |
| `/site-map` page | §8 | T10 |
| A header entry and a `/` teaser for `/commentary` | the only returning-visitor surface has zero inbound links (R3 Part C) | on the day `COMMENTARY_PUBLIC` flips; not a wave-3 task |
| A reading-order manifest | R4 GAPS: no manifest existed; judgements about "arriving at" a chapter were guesses | `order` inside `layer` is the manifest; `llms.txt` should list chapters in that order, not alphabetically |
| An audit that checks the shape, not only links | two-click rule, layer/kind on book entries, glossary hrefs, canonical-home links, no `/docs/` links, redirect-table links — none is checked today | T11 |

---

## 11. Migration plan — wave 3 tasks in dependency order (D14)

| ID | Task | Files | Points | Agent | Depends on |
|---|---|---|---:|---|---|
| T01 | Schema: `layer`, `kind`, `order`, `concepts`; `glossary` collection; export `LAYERS`/`KINDS` | `src/content/config.ts` | 3 | ts-dev | — |
| T02 | Frontmatter sweep: classify all 31 entries + `why`/`manifesto` per §2.5; map tags → concepts per §3.5; remove `tags` from `docsSchema` | `src/content/docs/**` | 3 | ts-dev | T01, T05 |
| T03 | `/book` index from `layer` with Unsorted fallback and `kind` labels; label "Chapters" everywhere (§2.1 string list); chapter eyebrow | `book/index.astro`, `book/[...slug].astro`, `Footer.astro`, `Header.astro`, `llms.txt.ts` | 3 | ts-dev | T01 |
| T04 | Route cleanup §9 steps 1–4, 6, 8: catch-all filter, redirect table, delete 13 wrappers, retire `principles.md`, eGov merge-or-hide + redirects, `docs/all.astro` + `docs/index.mdx` links | `docs/[...slug].astro`, `astro.config.mjs`, `docs/book/*`, `docs/why.astro`, `docs/for-you.astro`, `docs/all.astro`, `docs/index.mdx` | 5 | ts-dev | — |
| T05 | Glossary content: the 19 entries of §3 with `status` set honestly; four `needs-definition` rows go to Paweł as questions | `src/content/glossary/*.md` | 3 | fable | T01 |
| T06 | `ChapterFooter.astro` from data (§6.1); delete the 13 italic footers | `src/components/`, `book/[...slug].astro`, 13 chapters | 3 | ts-dev | T02 |
| T07 | Term tooltips: `<T>` component, `rehype-glossary-terms` plugin, popover card (§7) | `src/components/`, `src/plugins/`, `astro.config.mjs` | 5 | ts-dev | T05 |
| T08 | `/glossary` page | `src/pages/glossary.astro` | 2 | ts-dev | T05 |
| T09 | `scripts/link-graph.mjs` + build wiring + non-empty assertion (§8.2) | `scripts/`, `package.json`, `.gitignore` | 3 | ts-dev | T02 |
| T10 | `/site-map`: static list + SVG companion + text fallback (§8) | `src/pages/site-map.astro` | 5 | ts-dev | T09 |
| T11 | Content audit extensions: two-click depth, layer/kind on book entries, glossary `href` ids, canonical-home links, `/docs/` links in chapters, links into the redirect table | `scripts/content-audit.mjs` | 3 | ts-dev | T04 |
| T12 | Floor chapter `one-working-language.md` (§10) — after reading the sidecar and Paweł's Q6 | `src/content/docs/book/` | 5 | fable | T02, Paweł |
| T13 | One-argument-one-home sweep: apply §5 rows 1–17 (rows 2, 5, 9, 14 after Q1/Q3) | 11 chapters, `why.mdx`, `manifesto.mdx`, `principles.astro`, `Footer.astro` | 8 | fable | T06, Paweł |
| T14 | `/vision` anchors (`#language` `#digital` `#robotics` `#who-captures-the-gains`) and the `/vision/<layer>` redirect targets (§9.7) | `vision/index.astro`, 3 wrappers or config | 2 | ts-dev | — |

**Total 53 points.** Order of execution: T01 → T05 → T02 → {T03, T04, T14} → {T06, T09, T07,
T08} → {T10, T11} → T12, T13. The editorial tasks (T05 questions, T12, T13) need Paweł's
answers to R4's Q1, Q3, Q6, Q9 and the glossary's four `needs-definition` rows; everything
else can run the day the standards are approved. Reskin and component extraction (E006 wave 3
items from `DESIGN.md` and R2) are separate tasks and are not counted here.

By the 13-point rule this wave goes through AO; `epics/INDEX.md` records Paweł's 2026-09-25
instruction to run E006 as direct subagents with the main session orchestrating — that
instruction covers wave 1 and 2; wave 3 needs it repeated or goes to AO.

---

## GAPS — what this document could not verify

- **Nothing was built or rendered.** Every route claim is from source. The eGov casing
  conclusion (index never lists the two chapters; archive links 404) follows from Astro's
  `slug` lowercasing and `[...slug].astro` using `entry.id`; one `npm run build` and two
  `curl`s settle it. The action (merge + redirect both spellings) is correct either way.
- **Whether Astro's static `redirects` config preserves a `#fragment` in the destination** is
  unverified; §9.7 carries the fallback.
- **`european-english.sidecar.mdx` (2,707 words) was not read** — it may already contain the
  floor argument (R4 GAPS says the same). T12 starts by reading it.
- **`why/scale.mdx`, `support/time-is-running-out.mdx`, `ideas/*`, `articles/*`, `reference/*`
  were not read or classified.** They are treated as archive; one of them may deserve a
  `layer`. The catch-all filter in §9.1 keeps `support/` and `why/` unpublished under `/docs/`
  — if either is meant to be a page, it needs its own route.
- **Glossary definitions marked `needs-definition` are Paweł's to write**; `union-of-nations`,
  `coalition-of-the-willing` and `sortition` may already have a usable sentence in their
  chapters — I did not read those sections in this pass and did not invent one.
- **The label "Chapters" was not tested on a reader.** It is the least-wrong of four; if Paweł
  prefers "Essays", the only extra cost is the in-chapter "this chapter" phrases (13 files).
- **The link-graph script does not exist yet**; R3's graph was an ad-hoc grep. The counts here
  (73 / 229) are R3's and will change once the generated footers and glossary links exist —
  which is why the generated graph excludes them.
- **The editorial standard (`src/content/AGENTS.md`) and `DESIGN.md` are being written in
  parallel.** Where this document names a component contract (`term-tooltip`, `ChapterFooter`,
  site-map SVG colours) the visual contract is theirs; where it names a voice rule (no
  definition without a dictation) the rule is the editorial standard's and is only cited here.
