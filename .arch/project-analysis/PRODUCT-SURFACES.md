# API, UI, and Rollout

## API Surface

### `GET /api/analysis/latest`

Return the latest snapshot with summary data.

### `GET /api/analysis/history`

Return available snapshots and timestamps.

### `GET /api/analysis/compare?base=...&head=...`

Return a structured comparison between two snapshots.

### `GET /api/analysis/file?path=...`

Return file-level details:

- dependencies
- references
- diagnostics
- findings

### `POST /api/analysis/run`

Run a fresh analysis and persist a new snapshot.

## UI Views

### Overview

Show:

- total files
- routes
- diagnostics
- hotspot count
- orphan candidates
- top recommendations

### Project Map

Show:

- folder tree
- route graph
- import graph
- filters by page, component, data, and content

### Hotspots

Show:

- ranked files
- score breakdown
- recommendation type

### Work Queue

Show:

- fixes
- refactors
- tests
- delete candidates
- investigations

### Compare

Show:

- snapshot-to-snapshot deltas
- new risks
- resolved issues
- architecture trend lines

## Output Formats

Support:

- JSON for internal logic
- Markdown for reports
- Mermaid for lightweight graphs

## Rollout Plan

### Phase 1

- implement snapshot generation
- store snapshots in `.analysis/`

### Phase 2

- add `hotspots`, `orphan-files`, `route-graph`, `test-gaps`

### Phase 3

- add snapshot compare and trend analysis

### Phase 4

- ship internal UI under `/resources/project-analysis`

### Phase 5

- optionally automate runs in CI or release workflows

## Definition of Done for V1

The first version is complete when:

1. a command or endpoint can generate a snapshot
2. the snapshot is stored and queryable
3. at least four analyzers produce findings
4. the UI shows hotspots, orphan files, route map, and work queue
5. two snapshots can be compared
