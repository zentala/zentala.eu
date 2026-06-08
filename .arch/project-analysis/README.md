# Project Analysis Overview

This document tree defines a project analysis system for `zentala.eu`.

## Goal

Turn the repository into a self-analyzing product surface that can answer:

- what to work on next
- what should be refactored
- what is weakly tested
- what is unused
- whether architecture is improving or degrading over time

## Document Map

- [Global Engine Spec](./GLOBAL-ENGINE.md)
- [Repository Config Spec](./REPO-CONFIG.md)
- [System Blueprint](./BLUEPRINT.md)
- [Snapshot Schema](./SNAPSHOT-SCHEMA.md)
- [Collectors, Analyzers, and Scoring](./ANALYZERS.md)
- [API, UI, and Rollout](./PRODUCT-SURFACES.md)
- [Sample Outputs](./SAMPLE-OUTPUTS.md)
- [Sample Outputs Infographic](./sample-outputs.html)

## Local Usage

Generate the latest snapshot:

```bash
npm run analysis -- snapshot
```

Compare the two newest snapshots:

```bash
npm run analysis -- compare
```

Inspect one file from the latest snapshot:

```bash
npm run analysis -- file src/pages/index.astro
```

The runner writes:

- `.analysis/latest.json`
- `.analysis/snapshots/<timestamp>.json`

Internal app surfaces:

- `/resources/project-analysis`
- `/api/project-analysis/latest.json`
- `/api/project-analysis/history.json`
- `/api/project-analysis/compare.json`
- `/api/project-analysis/file.json?path=src/pages/index.astro`

## Scope

Version 1 focuses on:

1. Semantic code facts from LSP
2. Dependency graphs from static analysis
3. Snapshot storage and comparison
4. Actionable findings for maintainers
5. Internal UI for review and prioritization
