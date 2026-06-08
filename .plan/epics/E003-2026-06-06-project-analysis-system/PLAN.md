# E003: Project Analysis System — repo health, planning, and compare engine

**Created:** 2026-06-06
**Owner:** Paweł Żentała
**Status:** Implemented

---

## What & Why

`zentala.eu` has enough structure and content that maintenance decisions are starting
to rely too much on memory and manual repo scanning. We already have good source
signals — TypeScript/Astro semantics, Playwright tests, git history, and filesystem
shape — but they are fragmented across tools.

The goal of this epic is to build a small internal analysis system that converts
those fragmented facts into one normalized snapshot and a ranked set of findings:
what is risky, what is stale, what is weakly tested, and what should be worked on next.

This is not a custom language server or graph engine. We reuse external tooling for
facts and build only the thin orchestration and analyzer layer that is specific to our
repo and workflows.

## Scope

### In scope
- Global analysis engine concept with local repo config
- Snapshot generation to `.analysis/`
- Analyzer v1 set:
  - hotspots
  - orphan files
  - route graph
  - test gaps
- Snapshot compare report
- Internal API and lightweight UI after CLI is stable

### Out of scope
- Full autonomous remediation
- Custom LSP implementation
- Public-facing productization
- CI automation before local developer workflow is stable

## Architecture direction

### Global vs local split
- **Global engine** lives outside the repo and owns runner, collectors, schema,
  reusable analyzers, compare logic, and agent-facing interfaces.
- **Local repo config** lives in `zentala.eu` and defines public surfaces, ignored
  zones, scoring weights, and repo-specific heuristics.

### Tooling direction
- Semantic facts: LSP bridge + TypeScript/Astro language servers
- Dependency graph: `dependency-cruiser`
- Local facts: git, tests, filesystem inventory
- Outputs: JSON, Markdown, Mermaid, HTML

## Deliverables

1. Repo-scoped epic/task plan for implementation
2. V0 snapshot CLI flow
3. V1 analyzers and compare flow
4. Local config contract for `zentala.eu`
5. Internal dashboard under `/resources/project-analysis`

## Acceptance criteria

1. [x] A local command can generate `.analysis/latest.json`
2. [x] Snapshot includes normalized summary, files, routes, dependencies, diagnostics, findings
3. [x] Analyzer v1 emits at least four categories of findings
4. [x] Two snapshots can be compared with a human-readable report
5. [x] Local config can change prioritization without changing raw facts
6. [x] Internal UI can display latest summary, hotspots, orphan files, and compare output

## Waves

### Wave 1 — Foundation
- Task 01: engine scaffold + repo config contract
- Task 02: snapshot schema + storage
- Task 03: collectors baseline

### Wave 2 — Analysis
- Task 04: analyzer v1
- Task 05: compare flow
- Task 06: sample outputs + fixture verification

### Wave 3 — Product surface
- Task 07: API
- Task 08: internal UI

## Test strategy

- Unit tests for normalization, scoring, and compare logic
- Integration tests for collector orchestration with fixture snapshots
- UI verification only after API and snapshot output stabilize

## Implementation Summary

Implemented on 2026-06-07:

- `npm run analysis -- snapshot|compare|file <path>` CLI
- `.repo-analysis.json` local repository config
- `src/lib/project-analysis/` engine modules
- `.analysis/latest.json` and timestamped snapshot storage
- analyzer v1 findings for hotspots, orphan candidates, route graph, and test gaps
- `/api/project-analysis/*` internal endpoints
- `/resources/project-analysis` internal dashboard
- fixture and smoke tests for engine, API, and UI

Verification:

- `npm run analysis -- snapshot`
- `npm run typecheck`
- `npx playwright test tests/project-analysis.spec.ts tests/project-analysis-ui.spec.ts`
- `npm run build`

## Dependencies / prior art

- `.arch/project-analysis/README.md`
- `.arch/project-analysis/GLOBAL-ENGINE.md`
- `.arch/project-analysis/REPO-CONFIG.md`
- `.arch/project-analysis/SNAPSHOT-SCHEMA.md`
- `.arch/project-analysis/ANALYZERS.md`
- `.arch/project-analysis/SAMPLE-OUTPUTS.md`
- `.arch/project-analysis/vision.html`
- `.arch/project-analysis/sample-outputs.html`
