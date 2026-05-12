# E002: Homepage Redesign — research-backed manifest front page

**Created:** 2026-04-27
**Owner:** Paweł Żentała
**Status:** All reviews done (copy + design + eng). Ready for Wave 2 dispatch.

---

## What & Why

Homepage today is a mix of strong elements (hero with retirement argument, AI Review blurb) and generic/abstract elements (12 marketing-copy benefit cards, defensive FAQ, pillars without data, dubbed "Equitable Principles" section). Meanwhile 28 research files sit unused in `src/content/docs/research/` — the empirical backbone of the manifesto is not visible on the front page.

The goal of this epic: make the homepage do what the manifesto promises — speak as a Polish engineer with concrete numbers, not as a brochure. Every change is research-backed, every removal is justified by duplication or emptiness. Hero + AI Review + Author + Newsletter stay untouched (they already work).

The core insight from research review: there is enough material in `t1-1`, `t1-2`, `t1-3`, `t2-1`, `t2-4a`, `t2-4b` alone to ground every section of the homepage in data. The redesign is *additive* (adding diagnosis numbers, pillar addenda, CEE focus, "what I am not proposing") and *subtractive* (removing the duplicated principles section, replacing the marketing-copy benefits cards with one of three variants), not a rewrite.

## Scope

### Final section order (after E002)

1. Hero (KEEP)
2. AI Review blurb (KEEP)
3. Diagnosis in 4 numbers (NEW)
4. Quick links bar (MOVED below Numbers)
5. Why Digital Reform (KEEP)
6. Pillars (3) + addenda + SourceRefs + Roman-numeral backdrop (MODIFIED)
7. Bridge sentence Pillars→CEE (NEW)
8. CEE focus (NEW)
9. Benefits — perspectives (citizens / builders / nation-states) (MODIFIED)
10. Adoption waves — 3 stacked rows (NEW)
11. What I am not proposing — extended + disarming icons (NEW)
12. FAQ — offensive rewrite (REWRITTEN)
13. Author (KEEP)
14. Newsletter (KEEP)

### Sections changed
- **Pillars (3)**: keep copy, add research-backed addendum, add `<SourceRef />`, layout = 3-col with oversized Roman numeral as backdrop
- **Benefits**: NOT a single variant — replace 12 generic cards with **mix B + adoption-waves timeline**:
  - Perspectives (3 cards): for citizens, for builders & businesses, for nation-states
  - Adoption waves (3 stacked rows): Fala 1 (CEE+Scandinavia, now), Fala 2 (DE/FR/Benelux, 5–10y), Fala 3 (South, 10–15y)
- **FAQ**: full rewrite from defensive to offensive. Q2 (English threat) reframed offense-first using Estonia precedent. Q7 (economic euthanasia) extended with Japan/Korea elderly suicide data — evidence-anchored, no click-bait.
- **Equitable Principles**: remove (duplicates `/principles`)
- **Quick links bar**: moved below Numbers (argument before navigation)

### Sections added
- **Diagnosis in 4 numbers**: 1.46 fertility / 4.1M care workers / €800B Draghi gap / €1,500 Estonia savings. Each number's `compare` field (benchmark) is the visual sub-headline — large font, directly under number. Sources via `<SourceRef />`.
- **Bridge line** between Pillars and CEE: one sentence linking universal pillars to "where we start".
- **CEE focus**: Poland / Baltics+Ukraine / Trójmorze 2.0 — frame as opportunity for region, welcoming framing for others.
- **"What I am not proposing"**: 4–5 explicit non-claims (national languages, federal super-state, common pension, cultural unification → reframed as "synthesis, not unification"). Each gets disarming icon.

### Sections kept (no changes)
- Hero (retirement argument)
- AI Review blurb
- Why Digital Reform
- Author + Newsletter

### New cross-cutting deliverables (used beyond homepage)

- **`DESIGN.md`** at repo root — strict-scope audit (max ~200 lines). Lists current CSS tokens from `src/styles/` + `Layout.astro`, existing component vocabulary, plus spec for two new primitives: `<SourceRef />` and Roman-numeral backdrop pattern. Adds `--color-text-muted` token if missing. NO aspirational design system content. Done as task T00 before any other implementation.

- **`<SourceRef />`** global component (`src/components/SourceRef.astro`).
  - **Data source:** reuse existing `docs` content collection. Props: `slug: string` (e.g. `"research/t1-1-demographic-crisis"`), optional `cite?: string` override. Resolves via Astro `getEntry('docs', slug)` at build time.
  - **Invalid slug:** `throw new Error(...)` at build time. Loud, early failure. Typos in `_homepage-content.ts` caught by `npm run build`.
  - **Desktop interaction:** native HTML Popover API (`<button popovertarget>` + `<div popover>`). Click toggles popover with title + 2-line description + "Read source ↗" link to `/research/<slug>`.
  - **Mobile interaction (<640px):** native `<dialog>` element positioned as bottom sheet via CSS. Focus management, Esc handling, light-dismiss provided by browser.
  - **Astro pattern:** inline `<script>` for the media-query switch between popover/dialog modes. NO client island, NO framework dependency.
  - **Tokens:** badge color = `--color-text-muted` (T00 ensures token exists).
  - **A11y:** native APIs handle `aria-expanded`, focus return, Esc — no custom JS for these.
  - **Tests:** Playwright E2E covering desktop click/popover/Esc/click-outside, mobile tap/sheet/backdrop/Esc, and keyboard nav (Tab + Space/Enter).

## Out of scope
- New SVG icons (existing `language.svg`, `digital.svg`, `robot.svg` are sufficient)
- PDF download in navbar (separate epic, see 2026-04-26 plan)
- YouTube channel integration (waiting for channel to exist)
- Trójmorze 2.0 dedicated page (later)

## Acceptance criteria

1. Preview page `/resources/preview/homepage` reflects final picked variant (mix B + adoption waves); served as historical reference, not deleted
2. `src/pages/index.astro` rewritten to match section order above
3. `DESIGN.md` exists at repo root with current-state token/component audit + `<SourceRef />` spec
4. `<SourceRef />` component shipped, used by every number on homepage; sources resolvable to research files
5. Desktop: clicking `<SourceRef />` opens popover with title/summary/"Read source" link
6. Mobile: tapping `<SourceRef />` opens bottom sheet with focus trap, dismissable via backdrop tap or Esc
7. Pillars rendered as 3-col with oversized Roman numeral backdrop (large, low-opacity, decorative anchor — NOT in the AI-slop 3-col-with-circle-icon pattern)
8. Adoption waves rendered as 3 stacked full-width rows (identical layout desktop + mobile)
9. FAQ accordions: keyboard accessible (Space/Enter toggle), `aria-expanded` set, visible focus ring
10. Tone test passes: every new copy block "sounds like a Polish engineer speaking directly"
11. No country shamed — every comparison framed as opportunity
12. Source citations use a `--color-text-muted` token, NOT `opacity: 0.5` (WCAG contrast preserved)
13. All touch targets ≥ 44×44px on mobile
14. `npm run build` passes; manual smoke test in dev server across 375px / 768px / 1280px viewports

## Dependencies / prior art
- WRITING.md — voice rules, central metaphor, target audience
- `.arch/VISION.md` — full vision
- `RESEARCH_INDEX.md` — 28 research files index
- `/resources/2026-04-25-22-13-strategia-manifestu` — strategy decision
- `/resources/2026-04-26-04-00-plan-dalszych-prac` — open backlog (this epic addresses items A7, "what I am not proposing", and Benefits redesign)
- `/resources/2026-04-27-12-00-homepage-redesign` — design doc with all proposed copy

## Architecture decisions (locked by `/plan-eng-review` 2026-05-12)

1. **Wave 3 = parallel after refactor.** Original plan had 7 tasks editing `src/pages/index.astro` in parallel worktrees = guaranteed merge conflicts. New task **T08.5** splits homepage into per-section Astro components in `src/components/home/` BEFORE Wave 3 dispatch. Then T04–T10 each edit a different file. Beck principle: make the change easy, then make the easy change.
2. **Sources content type:** reuse existing `docs` collection via `getEntry()`. No new collection, no source frontmatter changes. 28 research files already carry title/description.
3. **Popover/sheet:** native browser APIs (`<button popovertarget>` + `<dialog>`). Zero bundle, a11y free. Browser support 96%+ on 2026.
4. **Interactivity:** Astro inline `<script>`, no client island.
5. **DESIGN.md scope:** strict audit only, max ~200 lines. NOT a full design system.
6. **Source citation color:** `--color-text-muted` token (audited/added in T00).
7. **Test coverage:** Playwright E2E for SourceRef on desktop + mobile + keyboard. Build verification via T12.
8. **Invalid slug behavior:** throw at build time.

## Risks
- Variant decision blocks main implementation. **RESOLVED 2026-05-12.**
- Adding research citations may visually clutter. Mitigation: `--color-text-muted` token, small badge, popover on demand.
- Removing duplicated principles section may feel sudden. Mitigation: hero "Read the principles" CTA is the entry point; verify smoke test in T12.
- **NEW:** Native Popover API gracefully degrades on older browsers — popover button still focusable, link still reachable via "Read source ↗" anchor. Acceptable for 96%+ coverage.
- **NEW:** Parallel Wave 3 conflicts mitigated via T08.5 refactor — see Architecture decisions #1.
