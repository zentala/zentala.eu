# E003 — Orchestrator

**Status:** Implemented. CLI, schema, analyzers, compare, API, and UI are in place.

---

## Wave 1 — Foundation

- [x] **E003-T01** — Engine scaffold + local repo config contract
- [x] **E003-T02** — Snapshot schema, storage, and writer
- [x] **E003-T03** — Baseline collectors: filesystem, git, tests, dependency graph

## Wave 2 — Analysis

- [x] **E003-T04** — Analyzer v1: hotspots, orphan files, route graph, test gaps
- [x] **E003-T05** — Snapshot compare and trend summary
- [x] **E003-T06** — Sample outputs verification with fixture snapshots

## Wave 3 — Product surface

- [x] **E003-T07** — Internal API for latest/history/compare/file
- [x] **E003-T08** — Internal UI under `/resources/project-analysis`

## Dispatch order

1. Sequential: T01 -> T02 -> T03
2. Sequential: T04 -> T05
3. Parallel after compare stabilizes: T06 + T07
4. Final: T08

## Notes

- No UI work before snapshot shape is stable
- Prefer external tools for facts; do not rebuild LSP or graph logic
- Keep engine code modular and small-file compliant

## Verification

- `npm run analysis -- snapshot` passes and writes `.analysis/latest.json`
- `npm run typecheck` passes
- `npx playwright test tests/project-analysis.spec.ts tests/project-analysis-ui.spec.ts` passes, 5/5
- `npm run build` passes, 338 pages built
