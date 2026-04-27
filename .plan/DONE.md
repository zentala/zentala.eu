# DONE — zentala.eu

Index of completed tasks.

---

## 2026-04-27 (session 3 — E001 execution)

- **[E001-T01](epics/E001-2026-04-27-content-expansion/tasks/T01-direct-democracy-research.md)** — Research: Swiss Direct Democracy & EU Referendum Models. 4212 words, all questions answered. Key finding: 0 binding ECI outcomes in 13 years. Commit: `5a6d8db`.
- **[E001-T02](epics/E001-2026-04-27-content-expansion/tasks/T02-liquid-democracy-research.md)** — Research: Liquid Democracy & Participatory Systems. 2606 words. Key finding: vTaiwan 100% policy adoption, LiquidFeedback top-10 delegates held 40-70% votes. Commit: `b211120`.
- **[E001-T03](epics/E001-2026-04-27-content-expansion/tasks/T03-robotic-agriculture-research.md)** — Research: Robotic Agriculture & Food Sovereignty. 2355 words. Key finding: Ecorobotix 87% herbicide reduction, intercropping LER 1.22. Commit: `abbb4d7`.
- **[E001-T04](epics/E001-2026-04-27-content-expansion/tasks/T04-defense-robotics-research.md)** — Research: Defense Robotics & EU Strategic Autonomy. 3949 words. Key finding: FPV drone vs tank 6000:1 cost ratio, EU R&D 7 cents per US dollar. Commit: `e049ecd`.
- **[E001-T05](epics/E001-2026-04-27-content-expansion/tasks/T05-smart-homes-elderly-research.md)** — Research: Smart Homes & Elderly Care Logistics. 2652 words. Key finding: aging-in-place 6x cheaper than nursing home. Commit: `2bd10c3`.
- **[E001-T06](epics/E001-2026-04-27-content-expansion/tasks/T06-manifest-robotization.md)** — Manifest: Robotization (new page). 1491 words. Commit: `0861707`.
- **[E001-T07](epics/E001-2026-04-27-content-expansion/tasks/T07-manifest-language-gdp.md)** — Manifest: Economic Growth Through Language Unity (stub → full). 1580 words. Commit: `5e6858c`.
- **[E001-T08](epics/E001-2026-04-27-content-expansion/tasks/T08-manifest-healthcare-ai.md)** — Manifest: Predictive Healthcare System (stub → full). ~1900 words. Commit: `c9d1bbb`.
- **[E001-T09](epics/E001-2026-04-27-content-expansion/tasks/T09-manifest-blockchain-archives.md)** — Manifest: European Blockchain Archives (stub → full). ~1380 words. Commit: `c1ca9ca`.
- **[E001-T10](epics/E001-2026-04-27-content-expansion/tasks/T10-manifest-payment-zone.md)** — Manifest: Unified Payment Zone + Near-Zero Transaction Costs (2 stubs → full). ~2870 words total. Commit: `054e50a`.
- **[E001-T11](epics/E001-2026-04-27-content-expansion/tasks/T11-manifest-digital-receipts.md)** — Manifest: Digital Receipts (stub → full). ~1260 words. Commit: `03e55f3`.
- **[E001-T12](epics/E001-2026-04-27-content-expansion/tasks/T12-manifest-media-culture.md)** — Manifest: Media & Cultural Integration (stub → full). ~1400 words. Commit: `83029c7`.
- **[E001-T13](epics/E001-2026-04-27-content-expansion/tasks/T13-T15-manifest-pages-wave2b.md)** — Manifest: Digital Democracy (new page). 1495 words. Commit: `057733e`.
- **[E001-T14](epics/E001-2026-04-27-content-expansion/tasks/T13-T15-manifest-pages-wave2b.md)** — Manifest: Robotic Agriculture (new page). ~1627 words. Commit: `a4142b5` → fix `13b39bf`.
- **[E001-T15](epics/E001-2026-04-27-content-expansion/tasks/T13-T15-manifest-pages-wave2b.md)** — Manifest: EU Defense Robotics (new page). 1381 words. Commit: `bbd496f` → fix `13b39bf`.
- **E001-T16** — Research-map: added tier-5.ts (T5.1-T5.5), wired into index.ts. Commit: `6019ece`.
- **E001-T17** — Build check: `npm run build` passes. Only pre-existing sharp/SVG warning, unrelated to E001 changes.

## 2026-04-27 (session 2)

- **E001-setup** — Epic E001 created: 15 tasks across 2 waves (5 new research topics + 10 manifest pages). PLAN.md, ORCHESTRATOR.md, 9 task files. Commit: `240317c`.
- **Research Batch 8** — 3 research files merged to dev: t4-4a-job-displacement (3640w), t4-4b-retraining (3655w), t4-5-timeline-realism (3960w). All 23/23 Tier 1–4 topics complete. Commits: `29f9dbc` `863b7b1`.
- **Research map update** — T4.4 split into T4.4a/T4.4b in tier-4.ts, map description updated to dynamic `{totalTopics}`. Commit: `ed55167`.

## 2026-04-27

- **E000-T01** — Fix /resources/research/map: 5 improvements. Stale closure bug in chip remove handler (findIndex at click time), removed dual-maintenance `topics[]` from concept-groups.ts (derived via `getTopicsForConcept()`), show all 14 concept filter buttons (was sliced to 8), added 2 concept filter tests, split 563-line map.astro into 3 files under 250 lines. Commits: `6f3aafc`. Tests: 36/36.
- **[E000-T02](epics/E000-maintenance/tasks/E000-T02-lint-cleanup.md)** — Lint cleanup pass. Astro check 33 hints → 2 (only `support.astro` inline-script artifact remains, requires onclick refactor — out of scope). 18 files modified across pages and components, comment-with-TODO pattern (no deletions) preserves intent for future agents. BACKLOG "Technical Debt" rewritten — stale items dropped (frameborder, EUStatisticsChart etc. were already clean), extras found by astro check folded in. Commits: `6aad746` `0514bdc` (merge).
- **[E000-T03](epics/E000-maintenance/tasks/E000-T03-hide-mock-search.md)** — Hide mock Algolia search from navbar + A3 refactor. `<AlgoliaSearch>` commented out in Header.astro (desktop + mobile) with reactivation TODO markers; `algoliaClient.ts` gets prominent header doc explaining mock-only state and 5 reactivation steps; `support.astro` Copy button refactored from inline `onclick` to `addEventListener` (closes last 2 ts(6133) hints). Caught hidden bug: existing `<script>` selector targeted the now-removed `onclick` attribute — fixed in same commit. BACKLOG: new "Mock features hidden from UI" section + Eurostat note (blocked on `<InteractiveSection>` decision). Result: **astro check 0/0/0**. Commits: `5e300a2` `081e98f` (merge).
