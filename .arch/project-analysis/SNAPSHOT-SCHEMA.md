# Snapshot Schema

## Purpose

Every analysis run must produce one normalized snapshot. All dashboards, reports, and comparisons depend on this file.

## Root Shape

```json
{
  "schemaVersion": 1,
  "createdAt": "2026-06-06T13:45:00Z",
  "project": {},
  "summary": {},
  "files": [],
  "routes": [],
  "symbols": [],
  "dependencies": [],
  "diagnostics": [],
  "tests": [],
  "metrics": {},
  "findings": [],
  "scores": {}
}
```

## Required Top-Level Fields

### `project`

```json
{
  "name": "zentala.eu",
  "root": "C:\\code\\zentala.eu",
  "branch": "main",
  "commit": "abc123"
}
```

### `summary`

```json
{
  "fileCount": 312,
  "sourceFileCount": 128,
  "routeCount": 34,
  "componentCount": 29,
  "contentDocCount": 57,
  "diagnosticCount": 4,
  "testCount": 4
}
```

## File Record

```json
{
  "path": "src/pages/index.astro",
  "kind": "route",
  "size": { "lines": 103, "bytes": 4210 },
  "imports": ["../layouts/Layout.astro", "../components/Hero.astro"],
  "importedBy": [],
  "tags": ["public", "homepage"],
  "metrics": {
    "fanIn": 0,
    "fanOut": 12,
    "symbolCount": 14
  }
}
```

## Route Record

```json
{
  "path": "src/pages/index.astro",
  "url": "/",
  "layout": "src/layouts/Layout.astro",
  "components": ["src/components/Hero.astro", "src/components/home/Numbers.astro"],
  "dataSources": ["src/data/homepage.ts"],
  "contentSources": []
}
```

## Finding Record

```json
{
  "id": "hotspot-homepage-fanout",
  "kind": "refactor",
  "severity": "medium",
  "title": "Homepage has high dependency fan-out",
  "paths": ["src/pages/index.astro"],
  "evidence": { "fanOut": 12, "userSurface": "high" },
  "recommendation": "Stabilize section contracts and reduce orchestration complexity."
}
```

## Standard Metrics

Each file should support these normalized metrics when available:

- `fanIn`
- `fanOut`
- `lineCount`
- `importCount`
- `importedByCount`
- `diagnosticCount`
- `testCoverageHint`
- `gitChurn`
- `routeSurface`
- `contentReach`
- `orphanScore`
- `centralityScore`
- `riskScore`

## Storage

Snapshots should be written to:

- `.analysis/snapshots/<timestamp>.json`
- `.analysis/latest.json`
