# DONE — zentala.eu

Index of completed tasks.

---

## 2026-04-27 (session 2)

- **E001-setup** — Epic E001 created: 15 tasks across 2 waves (5 new research topics + 10 manifest pages). PLAN.md, ORCHESTRATOR.md, 9 task files. Commit: `240317c`.
- **Research Batch 8** — 3 research files merged to dev: t4-4a-job-displacement (3640w), t4-4b-retraining (3655w), t4-5-timeline-realism (3960w). All 23/23 Tier 1–4 topics complete. Commits: `29f9dbc` `863b7b1`.
- **Research map update** — T4.4 split into T4.4a/T4.4b in tier-4.ts, map description updated to dynamic `{totalTopics}`. Commit: `ed55167`.

## 2026-04-27

- **E000-T01** — Fix /resources/research/map: 5 improvements. Stale closure bug in chip remove handler (findIndex at click time), removed dual-maintenance `topics[]` from concept-groups.ts (derived via `getTopicsForConcept()`), show all 14 concept filter buttons (was sliced to 8), added 2 concept filter tests, split 563-line map.astro into 3 files under 250 lines. Commits: `6f3aafc`. Tests: 36/36.
- **[E000-T02](epics/E000-maintenance/tasks/E000-T02-lint-cleanup.md)** — Lint cleanup pass. Astro check 33 hints → 2 (only `support.astro` inline-script artifact remains, requires onclick refactor — out of scope). 18 files modified across pages and components, comment-with-TODO pattern (no deletions) preserves intent for future agents. BACKLOG "Technical Debt" rewritten — stale items dropped (frameborder, EUStatisticsChart etc. were already clean), extras found by astro check folded in. Commits: `6aad746` `0514bdc` (merge).
- **[E000-T03](epics/E000-maintenance/tasks/E000-T03-hide-mock-search.md)** — Hide mock Algolia search from navbar + A3 refactor. `<AlgoliaSearch>` commented out in Header.astro (desktop + mobile) with reactivation TODO markers; `algoliaClient.ts` gets prominent header doc explaining mock-only state and 5 reactivation steps; `support.astro` Copy button refactored from inline `onclick` to `addEventListener` (closes last 2 ts(6133) hints). Caught hidden bug: existing `<script>` selector targeted the now-removed `onclick` attribute — fixed in same commit. BACKLOG: new "Mock features hidden from UI" section + Eurostat note (blocked on `<InteractiveSection>` decision). Result: **astro check 0/0/0**. Commits: `5e300a2` `081e98f` (merge).
