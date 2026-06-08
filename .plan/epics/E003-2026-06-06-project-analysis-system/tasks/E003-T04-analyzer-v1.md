---
id: E003-T04
title: Implement analyzer v1
status: completed
priority: high
effort: large
type: feature
dependencies: [E003-T03]
tags: [tooling, analyzers, scoring]
epic: E003
branch: feat/E003-T04-analyzer-v1
group: E003-2026-06-06-project-analysis-system
created: 2026-06-06
completed_at: 2026-06-07T16:39:00Z
---
# E003-T04: Implement analyzer v1

## Objective
Produce the first actionable findings for maintainers.

## Acceptance criteria
- [x] hotspot analyzer works
- [x] orphan-files analyzer works
- [x] route-graph analyzer works
- [x] test-gaps analyzer works
- [x] findings include recommendation and evidence

## Steps
1. Implement shared scoring helpers
2. Build hotspot analyzer
3. Build orphan-files analyzer
4. Build route-graph analyzer
5. Build test-gaps analyzer

## Tests
- Unit tests per analyzer
- Fixture-based integration tests for findings output

## Notes
- Findings should match the shapes documented in `SAMPLE-OUTPUTS.md`
