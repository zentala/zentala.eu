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
