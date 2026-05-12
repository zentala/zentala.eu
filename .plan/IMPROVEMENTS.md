# Global Improvements — cross-cutting open TODOs

### [x] Fix Sharp image optimization at build time
- **Problem:** `npm run build` failed at post-content stage. `astro:assets` calls `loadSharp` which could not find Sharp at runtime in `dist/chunks/`. Pre-existing, NOT caused by E002.
- **Fixed in:** E002 Wave 4 (2026-05-12). Root cause: `package.json` pinned `sharp ^0.32.6` but `astro@4.11.0` nested `sharp@0.33.4`. The top-level 0.32 was being resolved by `loadSharp()` and lacks the `@img/sharp-win32-x64` runtime layout used by 0.33. Bumped top-level pin to `sharp ^0.33.4` → dedupes with astro's nested dep; build now ships all 337 pages with image optimization passing.
- **Fixed in:** JOURNAL.md session 2026-05-12 Wave 4 + commit `<see Wave 4 commit>`.

### [ ] Resolve public-vs-private content boundary for homepage copy
- **Problem:** Wave 3 sections import from `src/pages/resources/preview/_homepage-content.ts` — `/resources/` is the private section (noindex, never linked publicly). Public homepage components depending on private content is a layering smell. T04 (Pillars) inlined copy instead; T05/T06/T07-a/T07-b/T09/T10 import. Inconsistent.
- **Proposed fix:** options — (a) promote homepage copy to `src/content/data/homepage.ts` (or a content collection) and have all home sections import from there; (b) inline copy in every component and delete `_homepage-content.ts` once stable; (c) keep current state with a comment explaining the temporary coupling.
- **Triggered by:** E002 Wave 3 (2026-05-12, commits `279468e`, `ba203dc`, `bd54c91`, `feb70ab`, `1e9781d`, `02d86b3`).

### [ ] Missing `adoptionWaves` export in `_homepage-content.ts`
- **Problem:** T07-b had no canonical copy source — fell back to the task-brief framing inside `AdoptionWaves.astro`. Copy now lives in two places (preview file lacks waves; component holds them). Drift risk.
- **Proposed fix:** add `adoptionWaves` export with the same shape as `ceeFocus.bullets` (Fala 1/2/3 → regions + rationale), then refactor `AdoptionWaves.astro` to consume it.
- **Triggered by:** E002 Wave 3 T07-b (2026-05-12, commit `954206d`).

### [ ] `<FAQ>` component lacks per-item visual emphasis prop
- **Problem:** T10 was asked to give Q1 subtle weight (larger padding or accent border) but `src/components/FAQ.astro` applies the same `questionColorClass` to every `<details>`. T10 shipped without Q1 emphasis to avoid editing FAQ.astro outside its worktree scope.
- **Proposed fix:** add an optional `emphasis?: boolean` field to the items prop in `FAQ.astro`. Toggle a heavier left border or larger summary padding when set. Use it on `faqNew[0]`.
- **Triggered by:** E002 Wave 3 T10 (2026-05-12, commit `02d86b3`).
