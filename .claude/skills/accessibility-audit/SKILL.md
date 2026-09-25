---
name: accessibility-audit
description: WCAG (POUR) baseline checklist condensed from rampstackco's accessibility-audit skill and mrKanoh's WCAG 2.2 skill. Use before any UI change in this repo.
---

# accessibility-audit (vendored checklist)

**Sources:**
- https://github.com/rampstackco/claude-skills/blob/main/skills/accessibility-audit/SKILL.md
- https://github.com/mrKanoh/claude-wcag-accessibility-skill/blob/main/SKILL.md

**Licence:** not verified in this vendoring pass — check each upstream repository's LICENSE file before redistributing this text outside zentala.eu. This file is a condensed checklist, not a verbatim copy of either source.
**Vendored:** 2026-09-25, as part of E004-T16 (see `.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`).

## Checklist (WCAG 2.2, POUR)

- Contrast ≥4.5:1 for text, ≥3:1 for large text and UI components, in both light
  and dark themes.
- Fully keyboard operable: no keyboard traps, logical focus order, visible focus
  indicator (never `outline: none` without a replacement).
- Skip link present, descriptive `<title>` per page, logical heading hierarchy,
  `<html lang>` set correctly.
- Consistent navigation across pages; status messages are announced (WCAG 4.1.3);
  form errors are identified in text, not colour alone (WCAG 3.3.x).
- WCAG 2.2 additions: targets ≥24×24px (aim for 44×44px), focus not obscured by a
  sticky header, accessible authentication (no cognitive-function-only tests).
- Reflows correctly at 320px width / 400% zoom; line-height ≥1.5.

Apply this checklist before landing any Astro component or layout change.
