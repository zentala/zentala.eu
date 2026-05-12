# E002 — Orchestrator

**Status:** All three reviews complete (copy, design, eng). Plan locked 2026-05-12. Ready for Wave 2 dispatch.

---

## Wave 1 — Preview & decision (DONE 2026-04-27)

- [x] **E002-T01** — Design doc with all proposed copy → `src/pages/resources/2026-04-27-12-00-homepage-redesign.md`
- [x] **E002-T02** — Comparison preview page with toggles → `src/pages/resources/preview/homepage.astro` + helpers
- [x] **E002-T03** — Link preview from `/resources/` index

## Decision gate — RESOLVED 2026-05-12

6 copy decisions + 10 design decisions + 8 eng decisions locked. See `JOURNAL.md`.

---

## Wave 2 — Foundation (sequential, BEFORE parallel implementation)

Sequential: T00 specs `<SourceRef />`, T11 implements it. Both must merge to dev before Wave 3.

### E002-T00 — Create `DESIGN.md` at repo root

**Scope: STRICT, max ~200 lines.**
- Audit existing CSS tokens: grep `--color-` / `--space-` / `--font-` in `src/styles/` + `src/layouts/Layout.astro`. List names + current values.
- Audit existing components in `src/components/`: list name + 1-line purpose. Identify which are reused vs single-use.
- Add `--color-text-muted` token if missing (used by `<SourceRef />` badges and source citations).
- Spec for `<SourceRef />` (props, states, viewport behavior, a11y, tokens used) — see PLAN.md cross-cutting deliverables.
- Spec for Roman-numeral backdrop pattern (size, opacity, font-family, z-index, accessibility = `aria-hidden`).
- NO aspirational design system content. NO new component proposals beyond the two above.

**Effort:** CC ~30–45 min. No worktree needed (docs-only commit on `dev` or a quick branch).

### E002-T11 — `<SourceRef />` component + tests

- New file: `src/components/SourceRef.astro`
- Implementation per locked architecture:
  - Props: `slug: string`, `cite?: string`
  - Build-time: `await getEntry('docs', slug)`. Throw if missing.
  - Desktop: native HTML Popover API
  - Mobile: native `<dialog>` as bottom sheet via CSS media query
  - Inline `<script>` switches mode based on `matchMedia('(min-width: 640px)')`
  - Tokens: badge uses `--color-text-muted` (added in T00)
- New file: `tests/source-ref.spec.ts` (Playwright)
  - Desktop viewport: click → popover visible; click again → closed; Esc → closed; click outside → closed; focus returns to badge
  - Mobile viewport (375px): tap → sheet visible; backdrop tap → closed; Esc → closed; focus trapped within sheet
  - Keyboard: Tab to badge → visible focus ring; Space/Enter → opens
- Worktree: `feat/E002-T11-sourceref`

---

## Wave 2.5 — Section split refactor (DONE 2026-05-12, merge `742863a`)

### [x] E002-T08-split — Split homepage into per-section Astro components

**Purpose:** Make Wave 3 actually parallel by giving each task its own file to edit. Without this, all Wave 3 tasks edit `src/pages/index.astro` → guaranteed merge conflicts.

- Create `src/components/home/` directory
- Extract each existing section of `src/pages/index.astro` into its own component file (no copy/logic changes — pure refactor):
  - `src/components/home/AIReviewBlurb.astro`
  - `src/components/home/QuickLinks.astro` (the existing IconLink row)
  - `src/components/home/Pillars.astro` (currently empty / commented, will be re-populated by T04)
  - `src/components/home/CEEFocus.astro` (new, placeholder)
  - `src/components/home/Benefits.astro` (currently uses Card/CardGrid)
  - `src/components/home/AdoptionWaves.astro` (new, placeholder)
  - `src/components/home/NotProposing.astro` (new, placeholder)
  - `src/components/home/Numbers.astro` (new, placeholder)
  - `src/components/home/FAQSection.astro` (wraps existing `<FAQ>` with homepage-specific items prop)
- Rewrite `src/pages/index.astro` to import these and render in final section order:
  ```astro
  <Hero ... />
  <AIReviewBlurb />
  <Numbers />
  <QuickLinks />
  <WhyDigitalReform />
  <Pillars />
  <CEEFocus />
  <Benefits />
  <AdoptionWaves />
  <NotProposing />
  <FAQSection />
  <Author />
  <Newsletter />
  ```
- Remove the now-duplicated Equitable Principles section
- This task = no behavioral change yet. Build still passes. New section placeholders render empty divs with a comment "TODO E002-T0X" so Wave 3 dispatch is unambiguous.
- Worktree: `feat/E002-T08-split`

**Effort:** CC ~30–45 min. Must merge before Wave 3 dispatch.

---

## Wave 3 — Section implementations (DONE 2026-05-12, 7 parallel worktrees merged conflict-free)

Each task edits its own component file from T08-split. No `src/pages/index.astro` edits. Real parallelism, zero conflicts.

Merge SHAs: T04 `279468e` · T05 `ba203dc` · T06 `bd54c91` · T07-a `feb70ab` · T07-b `954206d` · T09 `1e9781d` · T10 `02d86b3`. `astro check` 0/0/0 after all merges.

- [x] **E002-T04** — Pillars: 3-col + Roman-numeral backdrop + addenda + `<SourceRef />`
  → File: `src/components/home/Pillars.astro`
  → Content from `_homepage-content.ts:pillarsNew`
  → SourceRefs: `slug="research/t2-1-language-gdp"`, `"research/t1-3-estonia-egovernment"`, `"research/t2-4b-healthcare-ai"`
  → Worktree: `feat/E002-T04-pillars`

- [x] **E002-T05** — Numbers section: 4 huge numbers with prominent `compare` benchmark
  → File: `src/components/home/Numbers.astro`
  → Content from `_homepage-content.ts:numbers`
  → Layout: 4-col desktop / 2x2 tablet / 1-col mobile
  → Visual hierarchy: number (huge) → compare/benchmark (large) → narrative (small) → `<SourceRef />`
  → Worktree: `feat/E002-T05-numbers`

- [x] **E002-T06** — CEE Focus + bridge line
  → File: `src/components/home/CEEFocus.astro`
  → Bridge sentence above CEE: *"These three pillars are the system. The next question is where we start building it."*
  → Content from `_homepage-content.ts:ceeFocus`
  → Worktree: `feat/E002-T06-cee`

- [x] **E002-T07-a** — Benefits perspectives (3 cards)
  → File: `src/components/home/Benefits.astro`
  → Content from `_homepage-content.ts:benefitsVariantB` (citizens / builders / nation-states)
  → Worktree: `feat/E002-T07a-benefits-perspectives`

- [x] **E002-T07-b** — Adoption Waves (3 stacked rows) — NEW component
  → File: `src/components/home/AdoptionWaves.astro`
  → 3 rows: Fala 1 (PL/Baltics/Ukraine/Czechia/Scandinavia, now/5y) — Fala 2 (DE/FR/Benelux, 5–10y) — Fala 3 (South, 10–15y)
  → Each row: time-marker bar + region list + one-sentence rationale
  → Identical layout desktop + mobile (stacked rows are mobile-friendly by design)
  → Framing: opportunity for all, CEE pressure-driven first-movers
  → Worktree: `feat/E002-T07b-waves`

- [x] **E002-T09** — "What I am not proposing" + disarming icons + extended item
  → File: `src/components/home/NotProposing.astro`
  → Content from `_homepage-content.ts:notProposing`, replace "Cultural unification" → "Cultural synthesis, not unification within the system"
  → Each item: `x-circle` outline icon (or similar) + headline + detail
  → Layout: 2-col desktop / 1-col mobile
  → Worktree: `feat/E002-T09-not-proposing`

- [x] **E002-T10** — FAQ rewrite (offensive) with sharpened Q2 + Q7
  → File: `src/components/home/FAQSection.astro` (wraps `src/components/FAQ.astro` `<details>` pattern)
  → 7 questions from `_homepage-content.ts:faqNew` with rewrites:
    - **Q2 (English threat):** rewrite per JOURNAL 2026-05-12 — offense-first, Estonia precedent, threat = absence not presence
    - **Q7 (economic euthanasia):** append one sentence on documented elderly suicide rates in under-invested care systems (Japan, Korea). Evidence-anchored. No "physical euthanasia" phrasing.
  → All collapsed by default (`<details>` natural state)
  → First question gets subtle visual weight (slightly larger padding or accent border)
  → Worktree: `feat/E002-T10-faq`

---

## Wave 4 — Verification

- [ ] **E002-T12** — Build clean + smoke test
  → `npm run build` passes (typecheck + build)
  → `npx playwright test tests/source-ref.spec.ts` passes
  → Manual smoke test in `npm run dev` at viewports: 375px, 768px, 1280px
  → Verify final section order matches PLAN
  → Verify all SourceRef desktop popover + mobile sheet interactions
  → Verify FAQ keyboard nav

- [ ] **E002-T13** — Preview directory disposition
  → Keep `src/pages/resources/preview/homepage*` as historical reference
  → Update preview header to note "Final shipped state — see `/`"

---

## Dispatch order

1. **Wave 2 (sequential):** T00 → T11. Two commits to dev (or one branch with both, merged together).
2. **Wave 2.5:** T08-split on its own worktree, merged after T11.
3. **Wave 3 (parallel):** dispatch T04, T05, T06, T07-a, T07-b, T09, T10 simultaneously, each on its own worktree. Each consumes `<SourceRef />` from `src/components/SourceRef.astro` + uses tokens from `DESIGN.md`.
4. **Wave 4:** T12 verification, then T13 preview cleanup.
5. Close epic.

---

## Reviews status

- `/plan-design-review`: DONE 2026-05-12 — 5/10 → 8/10, 10 decisions resolved
- `/plan-eng-review`: DONE 2026-05-12 — scope reduced (T08.5 refactor), 8 decisions resolved, 3 critical gaps addressed
- `/plan-ceo-review`: skipped (copy/strategy author-driven)

## Notes

- Preview page stays private (noindex via Layout, linked from `/resources/` only)
- All proposed copy stays in `_homepage-content.ts` for traceability, but Wave 3 may inline final copy where it makes sense (per eng review)
- T08-split is intentionally behavior-preserving — no UI changes, only file structure. Easier code review, smaller blast radius.
