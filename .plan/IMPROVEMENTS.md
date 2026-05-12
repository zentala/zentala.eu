# Global Improvements — cross-cutting open TODOs

### [x] Fix Sharp image optimization at build time
- **Problem:** `npm run build` failed at post-content stage. `astro:assets` calls `loadSharp` which could not find Sharp at runtime in `dist/chunks/`. Pre-existing, NOT caused by E002.
- **Fixed in:** E002 Wave 4 (2026-05-12). Root cause: `package.json` pinned `sharp ^0.32.6` but `astro@4.11.0` nested `sharp@0.33.4`. The top-level 0.32 was being resolved by `loadSharp()` and lacks the `@img/sharp-win32-x64` runtime layout used by 0.33. Bumped top-level pin to `sharp ^0.33.4` → dedupes with astro's nested dep; build now ships all 337 pages with image optimization passing.
- **Fixed in:** JOURNAL.md session 2026-05-12 Wave 4 + commit `<see Wave 4 commit>`.

### [x] Resolve public-vs-private content boundary for homepage copy
- **Problem:** Wave 3 sections imported from `src/pages/resources/preview/_homepage-content.ts`. `/resources/` is the private section (noindex, never publicly linked); public homepage components depending on private content was a layering smell.
- **Fixed:** moved to `src/data/homepage.ts` (public module, outside Astro content collections). All home/ components and the preview page repath their imports. Preview page kept as historical reference but now reads from the same canonical source.
- **Fixed in:** E002 epic-close session 2026-05-12.

### [x] Missing `adoptionWaves` export
- **Problem:** T07-b had no canonical copy source — fallback inside `AdoptionWaves.astro`. Drift risk.
- **Fixed:** added `AdoptionWave` interface + `adoptionWaves` export in `src/data/homepage.ts`; `AdoptionWaves.astro` consumes it (waves array removed from component).
- **Fixed in:** E002 epic-close session 2026-05-12.

### [x] `<FAQ>` component lacks per-item visual emphasis prop
- **Problem:** T10 wanted Q1 subtle weight but `FAQ.astro` applied identical styling to every item.
- **Fixed:** added optional `emphasis?: boolean` to FAQItem; renders heavier left border + larger padding/text. `faqNew[0]` marked emphasis: true.
- **Fixed in:** E002 epic-close session 2026-05-12.
