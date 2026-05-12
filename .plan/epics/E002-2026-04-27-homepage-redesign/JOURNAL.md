# E002 — Journal

## Session 2026-04-27 12:00 — Preview shipped

- **Goal**: build comparison preview so author can pick changes before touching `src/pages/index.astro`
- **Done**:
  - design doc `2026-04-27-12-00-homepage-redesign.md`
  - preview page `/resources/preview/homepage` with OLD/NEW toggles per changed section + A/B/C variant selector for Benefits
  - content data file `_homepage-content.ts` (single source of truth for all proposed copy)
  - helpers `_SectionWrapper.astro`, `_ToggleSwitch.astro`
  - link from `/resources/` index
- **Decisions**:
  - Hero, AI Review, Quick Links, Why Digital Reform, Author, Newsletter — KEPT untouched
  - Equitable Principles — REMOVED (duplicates `/principles`, hero already has CTA)
  - Pillar copy — KEPT, only adding SVG icons + research-backed addendum (no rewrite, no shaming)
  - Benefits — three variants offered (A: 4 CEE cards, B: 3 persona cards, C: 12 with numbers); author picks
- **Findings**:
  - Existing SVG icons (`language.svg`, `digital.svg`, `robot.svg`) cover all three pillars — no new asset work
  - `Layout.astro` already supports `noindex` prop — preview is properly private
  - Research files have enough hard data for every section without inventing numbers
- **Blocker**: Wave 2 implementation waits for author's variant selection (Benefits A/B/C) and review of all proposed copy
- **Next**: author reviews preview → notes decision here → Wave 2 starts

## Session 2026-05-12 — Copy + design decisions locked

- **Goal**: review preview, lock copy decisions, run `/plan-design-review` before Wave 2

### Copy decisions (preview walk-through)

- **Numbers**: keep all 4 (1.46, 4.1M, €800B/yr, €1,500). Constraint: every number MUST have a benchmark/reference (`compare` field) — raw numbers without reference are noise. `compare` is promoted to sub-headline (large font, directly under number), narrative moves to tertiary position.
- **Pillar addenda**: all three accepted as written (€507B language upside, Estonia precedent, MASAI radiology).
- **CEE Focus section**: accept as designed.
- **Benefits**: NOT a single variant — mix B (perspectives: citizens / builders / nation-states) + a NEW timeline-of-adoption-waves section (derived from A's CEE-focus framing). Framing: opportunity for all Europeans, not punishment for laggards; CEE moves first due to demographic + security pressure; others welcome when ready.
- **"What I am not proposing"**: accept 4 items + extend with "Cultural synthesis, not unification within the system" (sharper than current "Cultural unification" item). Each item gets disarming icon (e.g. `x-circle` outline).
- **FAQ Q2 (English threat)**: rewrite — reframe from defense to offense. The threat is NOT English; the threat is the absence of a shared working language given EU intra-migration. Use Estonia as proof (Estonian is MORE alive 30 years after adopting English for business).
- **FAQ Q7 (economic euthanasia)**: extend with a single sentence on documented elderly suicide rates in under-invested care systems (Japan, Korea) — subtle, evidence-anchored, not click-bait. Do NOT use "physical euthanasia" phrasing.

### Source citation policy

Every number on the homepage gets a `<SourceRef />` component (new). The site treats sources as first-class content — a citation is never an opacity-50 footnote.

### Design review (`/plan-design-review`) — 10 decisions

Initial overall design completeness: 5/10. After fixes below: targeting 8/10.

| # | Decision | Choice |
|---|---|---|
| 1A | Quick links bar position | **B** — moves below Numbers section (argument before navigation) |
| 1B | "Not proposing" order vs FAQ | **A** — Not proposing BEFORE FAQ |
| 2A | `<SourceRef />` click behavior | **A** — click = popover with title + summary + "Read source" link |
| 2B | FAQ default state | **A** — all questions collapsed |
| 3A | Bridge sentence between Pillars and CEE Focus | **A** — add one-line bridge |
| 4A | Pillars layout | **A** — 3-col with oversized Roman numeral as backdrop (low-risk, max typographic gain) |
| 4B | Adoption-waves visual form | **C** — 3 stacked full-width rows (works on mobile, low AI-slop risk) |
| 5A | DESIGN.md creation | **A** — new task E002-T00 BEFORE T04 (~30 min audit + write) |
| 5B | `<SourceRef />` scope | **A** — global `src/components/SourceRef.astro` |
| 6A | `<SourceRef />` mobile interaction | **A** — bottom sheet with focus trap |

### Final section order (homepage after E002)

1. Hero (KEEP)
2. AI Review blurb (KEEP)
3. Diagnosis in 4 numbers (NEW — argument first)
4. Quick links bar (MOVED — now below Numbers, not above)
5. Why Digital Reform (KEEP)
6. Pillars (3) + addenda + SourceRefs + Roman-numeral backdrop (MODIFIED)
7. Bridge line (NEW — one sentence)
8. CEE focus (NEW)
9. Benefits — perspectives B (3 cards) (MODIFIED)
10. Adoption waves — 3 stacked rows (NEW)
11. What I am not proposing — extended + icons (NEW)
12. FAQ — offensive rewrite, Q2/Q7 sharpened (REWRITTEN)
13. Author (KEEP)
14. Newsletter (KEEP)

### Reviews status

- `/plan-eng-review`: NOT YET RUN — required next (architecture for `<SourceRef />`, sources content type)
- `/plan-ceo-review`: skipped (copy strategy is author-driven)
- `/plan-design-review`: DONE this session — see decisions above

### Next

1. Update PLAN.md scope + acceptance criteria
2. Update ORCHESTRATOR.md: add T00 (DESIGN.md), T11 (SourceRef), expand T04–T10 specs
3. Run `/plan-eng-review` before dispatching Wave 2
4. Then Wave 2 worktree dispatch

## Session 2026-05-12 (later) — Eng review locked

`/plan-eng-review` done. Initial scope reduced (Wave 3 parallelism problem → T08-split refactor inserted as Wave 2.5).

### 8 engineering decisions (all accepted)

| # | Decision | Choice |
|---|---|---|
| 1 | Wave 3 parallelism | **B** — refactor first: split `index.astro` into per-section components in `src/components/home/` (new task T08-split). Then T04–T10 parallel without conflicts. |
| 2 | Sources content type | **A** — reuse existing `docs` collection via `getEntry()`. No new collection. |
| 3 | Popover/sheet primitive | **A** — native HTML Popover API (desktop) + `<dialog>` element (mobile). Zero bundle, a11y built-in. |
| 4 | Astro interactivity pattern | **A** — inline `<script>` for media-query mode switch. No client island, no framework dep. |
| 5 | DESIGN.md scope | **A** — strict audit only, max ~200 lines. NOT a full design system. |
| 6 | Source citation color | **A** — `--color-text-muted` token (audited/added in T00). NO opacity hack. |
| 7 | Test coverage for SourceRef | **A** — full Playwright E2E: desktop popover + mobile sheet + keyboard. |
| 8 | Invalid slug behavior | **A** — throw at build time. Loud, early failure. |

### Critical architecture change

T08-split (Wave 2.5) is the most important new task. Splits `src/pages/index.astro` into per-section Astro components in `src/components/home/`. Behavior-preserving refactor. Without this, Wave 3 parallel worktrees would all conflict on the same file. With this, each Wave 3 task edits its own component file = true parallelism.

### Final waves

- **Wave 2 (sequential):** T00 (DESIGN.md) → T11 (SourceRef + tests)
- **Wave 2.5:** T08-split (refactor enabling parallelism)
- **Wave 3 (parallel worktrees, 7 tasks):** T04, T05, T06, T07-a, T07-b, T09, T10
- **Wave 4:** T12 verification, T13 preview cleanup

### Reviews status

- `/plan-design-review`: DONE — 5/10 → 8/10
- `/plan-eng-review`: DONE — scope reduced, 8 decisions, 3 critical gaps addressed
- `/plan-ceo-review`: skipped intentionally

### Next

Ready for Wave 2 worktree dispatch.

## Session 2026-05-12 (continued) — Wave 2 + Wave 2.5 shipped

- **Wave 2 done**:
  - T00 (`a757d3b`): `DESIGN.md` at repo root (current-state token audit + spec for `<SourceRef />` and Roman-numeral backdrop) + `--color-text-muted` token added to `global.scss` (WCAG AA verified: 4.83:1 light / 4.61:1 dark).
  - T11 (`0ac346e`): `<SourceRef />` component with native Popover API (desktop) + CSS-driven bottom sheet (mobile). `src/pages/research/[...slug].astro` route added for source deep-links. Playwright suite (`tests/source-ref.spec.ts`, 11 tests) covers desktop click/Esc/light-dismiss/keyboard + mobile tap/sheet/backdrop + 44×44 touch target + link nav.
- **Wave 2.5 done** (`742863a`):
  - T08-split refactor: `src/pages/index.astro` split into 9 per-section components in `src/components/home/`. Five extracted as-is (AIReviewBlurb, QuickLinks, Pillars, Benefits, FAQSection), four are TODO-tagged placeholders for Wave 3 (Numbers→T05, CEEFocus→T06, AdoptionWaves→T07-b, NotProposing→T09). Equitable Principles section removed (duplicates `/principles`). `astro check`: 0 errors, 0 warnings.
- **Findings**:
  - **Sharp build failure (pre-existing, blocks T12)**: `npm run build` fails at post-content image optimization (`loadSharp` cannot find Sharp in `dist/chunks/`). Reproduces on clean `dev` branch — not caused by E002. Must be resolved before T12 verification can claim "build passes". Added as global improvement (see `.plan/IMPROVEMENTS.md`).
  - **Missing research route**: SourceRef links target `/research/<slug>` but `src/pages/research/` only had `map.astro`. T11 added `[...slug].astro` with `getStaticPaths()` to render the `docs` collection — a gap the eng review missed.
- **Next**: Wave 3 parallel dispatch (7 worktrees: T04, T05, T06, T07-a, T07-b, T09, T10). Each touches its own component file in `src/components/home/` — zero merge conflicts expected.

## Session 2026-05-12 (Wave 3) — 7 parallel subagents shipped

- **Goal**: implement all 7 Wave 3 section components in parallel worktrees
- **Method**: 7 subagents dispatched in a single message, each given its own worktree, its own file to edit, content source pointer, and a strict no-cross-file boundary. T08-split's refactor made this safe — no two agents touched the same file.
- **Done** (merge SHA / file):
  - T04 `279468e` → `Pillars.astro` — 3-col plain-div layout, Roman numerals (Playfair, `clamp(8rem,18vw,16rem)`, opacity 0.06, `aria-hidden`, `pointer-events:none`), addendum + `<SourceRef />` per pillar. Subagent inlined copy directly rather than importing from `_homepage-content.ts` (private `/resources/preview/` file feeding public homepage felt wrong).
  - T05 `ba203dc` → `Numbers.astro` — 1/2x2/4-col responsive grid, value (clamp 3.5–5.5rem Playfair) → `compare` (clamp 1.25–1.75rem) → label (uppercase Inter) → narrative + inline `<SourceRef>`. Subagent wrote a small parser to split `NumberStat.source` ("publication — research/slug") into `cite` + `slug` props.
  - T06 `bd54c91` → `CEEFocus.astro` — bridge sentence above (italic, centered, muted), then 3-card grid (Poland / Baltics+Ukraine / Trójmorze 2.0).
  - T07-a `feb70ab` → `Benefits.astro` — 3 perspectives (For citizens / For builders & businesses / For nation-states), typography-driven, numbered eyebrows, no `<Card>` chrome.
  - T07-b `954206d` → `AdoptionWaves.astro` — 3 stacked rows in 12-col grid (3/4/5: marker + regions + rationale). Copy was a fallback (no `adoptionWaves` export in content file) — opportunity framing, no shaming. `_homepage-content.ts` should be extended with this export in a follow-up.
  - T09 `1e9781d` → `NotProposing.astro` — 4-item 2-col grid with inline x-circle SVGs, "Cultural unification" sharpened in-place to "Cultural synthesis, not unification within the system" via `.map()` override (kept source data untouched).
  - T10 `02d86b3` → `FAQSection.astro` — uses `faqNew` from content file but patches Q2 and Q7 inline: Q2 reframed offense-first using Estonia precedent, Q7 appended Japan/Korea elderly suicide rates. Removed hardcoded purple-gradient blur (DESIGN.md forbids hex/opacity hacks). Q1 visual emphasis flagged for follow-up — `FAQ.astro` component lacks per-item styling props (added to global IMPROVEMENTS.md).
- **Findings**:
  - **Public-vs-private content boundary**: T04 noted that importing from `/resources/preview/_homepage-content.ts` (private, noindex) into a public home section is a smell. T04 inlined; other agents kept imports. Consistency follow-up: either promote the export to a public content path (e.g. `src/content/data/homepage.ts`) or have all sections inline. Logged to global IMPROVEMENTS.
  - **Missing `adoptionWaves` export**: T07-b fell back to task brief copy. Add an `adoptionWaves` export in `_homepage-content.ts` (or its successor) so the copy lives outside the component.
  - **Source field format**: `NumberStat.source` is `"<publication> — research/<slug>"`. Worked but brittle. Cleaner option: split into `sourceSlug` + `sourceCite` fields.
- **Final**: `astro check` 0 errors, 0 warnings, 0 hints over 108 files. All 7 worktrees cleaned up; branches deleted.
- **Next**: Wave 4. T12 blocked on Sharp build issue (pre-existing, logged). T13 cosmetic.
