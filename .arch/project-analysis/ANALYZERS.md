# Collectors, Analyzers, and Scoring

## Collectors

### `lsp.ts`

Collect:

- document symbols
- workspace symbols
- definitions
- references
- diagnostics

Primary value: semantic understanding beyond raw file reads.

### `dependency-graph.ts`

Collect:

- import graph
- dependency cycles
- fan-in and fan-out
- central modules

Primary source: `dependency-cruiser`.

### `filesystem.ts`

Collect:

- file inventory
- file types
- line counts
- asset references
- orphan candidates

### `tests.ts`

Collect:

- test files
- route or component coverage hints
- latest test results if available

### `git.ts`

Collect:

- active branch
- commit SHA
- per-file churn
- recently touched files

## Analyzers V1

### `hotspots.ts`

Flag high-risk files by combining:

- public surface area
- fan-out
- diagnostics
- churn
- lack of tests

### `orphan-files.ts`

Find:

- unused components
- unused assets
- unlinked content
- dead preview pages

### `route-graph.ts`

Build:

- route -> layout -> component -> data -> content map

This is a priority analyzer for `zentala.eu`.

### `test-gaps.ts`

Flag:

- public pages with no tests
- central components with no test coverage signal
- high-risk files without verification

### `duplication.ts`

Start simple:

- similar dependency shapes
- repeated section patterns
- repeated content structures

### `trends.ts`

Compare snapshots for:

- diagnostics count
- orphan count
- hotspot score shifts
- new cycles
- homepage fan-out changes

## Scoring

### File Risk Score

```text
riskScore =
  diagnosticsWeight +
  fanOutWeight +
  centralityWeight +
  churnWeight +
  publicSurfaceWeight -
  testConfidenceWeight
```

### Work Priority Score

```text
priorityScore =
  impact * 0.35 +
  risk * 0.25 +
  userSurface * 0.15 +
  maintainabilityGain * 0.15 +
  easeOfExecution * 0.10
```

## Output Categories

Each finding should map to one of:

- `fix`
- `refactor`
- `test`
- `delete`
- `investigate`
