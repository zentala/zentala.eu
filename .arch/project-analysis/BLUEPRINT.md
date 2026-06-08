# System Blueprint

## Objective

Build an internal analysis system that converts repository facts into prioritized engineering recommendations.

## Architecture

The system has four layers:

1. `collectors`
   - gather raw facts from the repo and tools
2. `normalizers`
   - convert tool-specific output into a shared model
3. `analyzers`
   - produce findings, scores, and work recommendations
4. `presentation`
   - expose API endpoints, dashboards, and comparison views

## Proposed Repository Structure

```text
.analysis/
  snapshots/
  baselines/
  reports/
  latest.json

src/lib/project-analysis/
  types.ts
  config.ts
  scoring.ts
  snapshot/
    collect.ts
    normalize.ts
  collectors/
    lsp.ts
    dependency-graph.ts
    filesystem.ts
    tests.ts
    git.ts
  analyzers/
    hotspots.ts
    orphan-files.ts
    route-graph.ts
    test-gaps.ts
    duplication.ts
    trends.ts
  compare/
    compare-snapshots.ts
  formatters/
    to-markdown.ts
    to-mermaid.ts
    to-summary.ts

src/pages/api/analysis/
  latest.ts
  history.ts
  compare.ts
  run.ts
  file.ts

src/pages/resources/project-analysis/
  index.astro
  compare.astro
  file.astro
```

## External Tooling

Preferred stack:

- `lsp-mcp` as the semantic bridge for the agent
- `typescript-language-server` for TypeScript and JavaScript
- `@astrojs/language-server` for Astro files
- `dependency-cruiser` for dependency graphs and cycle detection

## Processing Flow

```text
repo
-> collectors
-> normalized snapshot
-> analyzers
-> findings and scores
-> API/UI/report
```

## V1 Priorities

1. Generate a reliable snapshot JSON
2. Identify hotspots and orphan files
3. Map route to layout to component to data dependencies
4. Compare snapshots over time
5. Surface a ranked work queue
