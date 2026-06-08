---
id: E003-T07
title: Add internal analysis API
status: completed
priority: medium
effort: medium
type: feature
dependencies: [E003-T05]
tags: [api, tooling, analysis]
epic: E003
branch: feat/E003-T07-analysis-api
group: E003-2026-06-06-project-analysis-system
created: 2026-06-06
completed_at: 2026-06-07T16:39:00Z
---
# E003-T07: Add internal analysis API

## Objective
Expose snapshot and compare results through app-local endpoints.

## Acceptance criteria
- [x] latest endpoint exists
- [x] history endpoint exists
- [x] compare endpoint exists
- [x] file analysis endpoint exists

## Steps
1. Add `latest`, `history`, `compare`, and `file` handlers
2. Connect handlers to snapshot storage and compare logic
3. Document local usage

## Tests
- Endpoint-level integration tests where practical
