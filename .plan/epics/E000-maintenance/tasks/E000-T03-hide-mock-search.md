---
id: E000-T03
epic: E000
status: completed
created: 2026-04-27
completed: 2026-04-27
branch: feat/E000-T03-hide-mock-search
commits:
  - 5e300a2
  - 081e98f (merge)
title: Hide mock search from navbar + A3 refactor + backlog cleanup
---

## Result
- `astro check`: 2 hints → 0 hints (clean baseline)
- 3 files modified, +42/-16 LOC
- Search bar hidden from navbar (desktop + mobile), `/search` page + sitemap preserved
- `algoliaClient.ts` documents mock-only state and reactivation steps
- `support.astro` Copy button refactored to `addEventListener` (no inline JS)


# E000-T03: Hide mock search from navbar + A3 refactor + backlog cleanup

## Why
Algolia integration is mocked (`algoliaClient.ts` always returns mock client, no real
Algolia init). The search bar in `Header.astro` (desktop + mobile) renders functional UI
that returns empty results — confusing for users. Hide until real Algolia is wired up.

Also fix `support.astro` inline `onclick` (A3) — last 2 hints in `astro check`.

## Scope
1. **Hide `<AlgoliaSearch>` in `Header.astro`** — comment out both desktop (line 31) and
   mobile (line 62) renders. Comment the import too. TODO note linking back to
   `algoliaClient.ts` mock state.
2. **Document mock state in `algoliaClient.ts`** — top-of-file comment explaining current
   mock-only state and what needs to change to enable real Algolia.
3. **Refactor `support.astro` Copy button** — extract inline `onclick` to
   `<script>` block with `addEventListener`. Identical behavior, no inline-script,
   resolves 2 TS hints.
4. **BACKLOG update** — add "Mock features hidden from UI" section documenting Algolia
   navbar hide (with reactivation steps). Note Eurostat / InteractiveSection currently
   unused (commented out on home page, only used in dev-only `/ui` library page).

## NOT in scope
- `/search` page itself stays — only navbar entry hidden. Sitemap entry stays.
- Real Algolia wiring (separate decision, requires fixing 3 oversized transcripts first)
- Actually removing InteractiveSection / EuropeMap / EUStatisticsChart components

## Verification
- `npx astro check` → 0 hints (or only pre-existing unrelated)
- `npx astro build` → success
- `Header.astro` renders no search input (visual check)
- `support.astro` Copy button still copies + shows "Copied!" for 2s

## After
- Update BACKLOG, JOURNAL, DONE with commit SHAs
