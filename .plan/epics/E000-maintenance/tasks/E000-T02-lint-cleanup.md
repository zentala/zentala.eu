---
id: E000-T02
epic: E000
status: completed
created: 2026-04-27
completed: 2026-04-27
branch: feat/E000-T02-lint-cleanup
commits:
  - 6aad746
  - 0514bdc (merge)
title: Lint cleanup — astro check 33 hints → 0
---

## Result
- `astro check`: 33 hints → 2 hints (only support.astro inline-script artifact remains)
- 18 files modified, +74/-88 LOC (mostly comment overhead vs deleted dead code)
- Branch merged to dev with --no-ff, worktree cleaned up
- BACKLOG "Technical Debt" section rewritten — stale items dropped


# E000-T02: Lint cleanup — astro check 33 hints → 0

## Why
`npx astro check` reports 33 hints (mostly TS6133/6192/6196 — unused imports/vars/types).
BACKLOG "Technical Debt" section is partially stale, partially incomplete. Establish clean
baseline before tackling Algolia/Eurostat features.

## Decision: comment, not delete
User wants unused-but-intentional code (e.g. `<InteractiveSection>` import on home) commented
out rather than deleted, so future agents see "this was here, may return". Leave a TODO marker
referencing this task.

## Scope
1. `src/pages/index.astro` — comment out 5 unused imports: Testimonials, InteractiveSection,
   RobotIcon, DigitalIcon, LanguageIcon
2. `src/pages/ui/index.astro` — comment out unused `isProduction` (line 836) and type `CardColor` (line 18)
3. `src/pages/vision/digital-integration.astro` — comment out unused `Card`, `CardGrid`
4. `src/pages/vision/index.astro` — comment out unused `CardGrid`
5. `src/pages/vision/robotic-reindustrialization.astro` — comment out unused `Card`, `CardGrid`
6. `src/pages/search.astro` — comment out unused `searchClient, searchIndex` imports (frontmatter + `<script>`),
   prefix unused mock fn args with `_`
7. `src/pages/transcripts/[...slug].astro` — comment out unused `getEntry`
8. `src/pages/docs/book/principles.astro` — add `is:inline` directive
9. `src/components/AlgoliaSearch.astro` — check if it ties into search.astro, may need same treatment
10. Check `src/content/docs/all.mdx` for CardGrid usage (BACKLOG note)

## NOT in scope
- Algolia integration logic (deferred — separate decision)
- Eurostat live data (deferred — separate decision)
- `src/pages/support.astro` `textContent` warnings (inline-script artifact, separate decision)

## Verification
- `npx astro check` reports 0 hints (or only the support.astro inline-script artifact remains, documented)
- `npx astro build` succeeds
- No source behavior changes (comments only; commented code = removed at runtime)

## After
- Update `.plan/BACKLOG.md`: strike completed items, drop stale ones (frameborder, isDevelopment,
  EUStatisticsChart, etc.), keep Algolia + Eurostat moved to dedicated planning items
- Add JOURNAL entry with commit SHA
