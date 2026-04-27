# DONE — zentala.eu

Index of completed tasks.

---

## 2026-04-27

- **E000-T01** — Fix /resources/research/map: 5 improvements. Stale closure bug in chip remove handler (findIndex at click time), removed dual-maintenance `topics[]` from concept-groups.ts (derived via `getTopicsForConcept()`), show all 14 concept filter buttons (was sliced to 8), added 2 concept filter tests, split 563-line map.astro into 3 files under 250 lines. Commits: `6f3aafc`. Tests: 36/36.
- **[E000-T02](epics/E000-maintenance/tasks/E000-T02-lint-cleanup.md)** — Lint cleanup pass. Astro check 33 hints → 2 (only `support.astro` inline-script artifact remains, requires onclick refactor — out of scope). 18 files modified across pages and components, comment-with-TODO pattern (no deletions) preserves intent for future agents. BACKLOG "Technical Debt" rewritten — stale items dropped (frameborder, EUStatisticsChart etc. were already clean), extras found by astro check folded in. Commits: `6aad746` `0514bdc` (merge).
