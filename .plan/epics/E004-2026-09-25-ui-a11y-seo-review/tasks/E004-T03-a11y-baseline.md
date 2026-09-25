---
formatVersion: 1
type: improvement
id: E004-T03
title: Accessibility baseline in Layout and Header
epic: E004
status: proposed
priority: high
importance: High
effort: small
points: 3
dependencies: []
tags: [a11y]
created: 2026-09-25
completed_at: null
commits: []
verification_evidence: []
---
# E004-T03: Accessibility baseline in Layout and Header

**Importance:** High · **Points:** 3

## Objective

Close the WCAG 2.2 AA gaps found on every page by axe and keyboard walk.

## Where

- `src/layouts/Layout.astro (no <main>, scroll-behavior:67)`
- `src/components/Header.astro:26,49,84-89`
- `src/components/ThemeToggle.astro:7`
- `src/components/Newsletter.astro:18`
- `src/pages/support.astro (unlabelled input)`
- `src/components/Footer.astro (colour-only links)`

## Acceptance criteria

- [x] Skip link to `#main`; Layout renders a single `<main id="main">` (pages stop adding their own)
- [x] Mobile menu button: aria-label, aria-expanded kept in sync, aria-controls
- [x] ThemeToggle: aria-pressed or state in label; decorative SVGs aria-hidden
- [x] Global `:focus-visible` ring from a token (no bare outline-none)
- [x] Logo alt="" when text sits next to it
- [x] `scroll-behavior: smooth` only under `prefers-reduced-motion: no-preference`
- [x] Inline links in text underlined (link-in-text-block); /support input has a label
- [ ] axe: button-name, label, link-in-text-block = 0 across the 12 audited pages

## Evidence

Review report: `.plan/reports/2026-09-25-ui-seo-review/` (skills shortlist, static inventory, rendered axe audit, content/SEO/GEO review).
