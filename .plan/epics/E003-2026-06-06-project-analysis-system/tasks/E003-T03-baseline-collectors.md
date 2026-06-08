---
id: E003-T03
title: Implement baseline collectors
status: completed
priority: high
effort: large
type: feature
dependencies: [E003-T02]
tags: [tooling, collectors, analysis]
epic: E003
branch: feat/E003-T03-baseline-collectors
group: E003-2026-06-06-project-analysis-system
created: 2026-06-06
completed_at: 2026-06-07T16:39:00Z
---
# E003-T03: Implement baseline collectors

## Objective
Collect the first stable fact set for the repo without UI concerns.

## Acceptance criteria
- [x] filesystem collector returns repo inventory and file metrics
- [x] git collector returns branch, commit, and basic churn signals
- [x] tests collector returns current test inventory/signals
- [x] dependency graph collector returns normalized dependency edges

## Steps
1. Implement filesystem collector
2. Implement git collector
3. Implement tests collector
4. Integrate dependency graph collection

## Tests
- Unit tests for normalization
- Integration tests using fixture collector outputs

## Notes
- LSP integration may be a follow-up if bridge selection is still open
