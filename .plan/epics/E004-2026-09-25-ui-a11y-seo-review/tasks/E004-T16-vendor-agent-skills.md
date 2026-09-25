---
formatVersion: 1
type: improvement
id: E004-T16
title: Vendor the chosen agent skills into the repo
epic: E004
status: proposed
priority: low
importance: Low
effort: small
points: 1
dependencies: []
tags: [agents, tooling]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T16: Vendor the chosen agent skills into the repo

**Importance:** Low · **Points:** 1

## Objective

Make future agents in this repo apply the same rules without searching again.

## Where

- `.claude/skills/ (or AGENTS.md references)`
- `.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`

## Acceptance criteria

- [ ] frontend-design and web-design-guidelines (plus one a11y skill) available to agents in this repo, with source URL and licence noted
- [ ] CLAUDE.md links the shortlist as the review checklist for UI changes

## Decision for Paweł

Vendor copies into the repo vs. install globally in ~/.claude/skills.

## Decision taken (2026-09-25)

Vendor the skills into this repo under `.claude/skills/` with source URL and licence — adopted as the recommended default.

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
