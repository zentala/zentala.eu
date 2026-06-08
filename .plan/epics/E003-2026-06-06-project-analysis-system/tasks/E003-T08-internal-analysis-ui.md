---
id: E003-T08
title: Add internal analysis UI
status: completed
priority: medium
effort: large
type: feature
dependencies: [E003-T07, E003-T06]
tags: [ui, tooling, analysis]
epic: E003
branch: feat/E003-T08-analysis-ui
group: E003-2026-06-06-project-analysis-system
created: 2026-06-06
completed_at: 2026-06-07T16:39:00Z
---
# E003-T08: Add internal analysis UI

## Objective
Create a lightweight internal dashboard for latest findings and comparisons.

## Acceptance criteria
- [x] overview view exists
- [x] hotspots and orphan files are visible
- [x] compare view exists
- [x] route graph or equivalent structural view is visible

## Steps
1. Add internal route under `/resources/project-analysis`
2. Build overview and compare views
3. Render finding cards and structural summaries

## Tests
- Smoke test for route rendering
- Focused UI verification for major states
