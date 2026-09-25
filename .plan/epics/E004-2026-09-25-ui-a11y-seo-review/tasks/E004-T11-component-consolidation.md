---
formatVersion: 1
type: improvement
id: E004-T11
title: Consolidate components into a small, documented set
epic: E004
status: proposed
priority: medium
importance: Medium
effort: medium
points: 5
dependencies: []
tags: [components, refactor]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T11: Consolidate components into a small, documented set

**Importance:** Medium · **Points:** 5

## Objective

Unused components (ContentBox, Logo, ReasonBlock, SearchBar), three timeline implementations, several card-like components on the same --card-<hue> tokens, fragile DisplayTitle (set:html opening tag).

## Where

- `src/components/*`
- `src/components/vision/*, src/components/why/*`
- `src/pages/ui/index.astro`

## Acceptance criteria

- [ ] Unused components deleted (verify with grep over src/)
- [ ] One `Timeline` (variants: numbered/compact) replaces Timeline, TimelineBlock+TimelineContainer and the WhyDigitalReform inline one
- [ ] A base `Surface`/`Card` with `hue` + `variant` props used by Card, LayerCard, FAQ item
- [ ] DisplayTitle rewritten as a dynamic tag (`const Tag = `h${level}``) without set:html
- [ ] /ui becomes the living style guide: every component, variant and state (hover/focus/disabled) in both themes

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
