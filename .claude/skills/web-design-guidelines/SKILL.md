---
name: web-design-guidelines
description: UI-polish and a11y-basics checklist condensed from Vercel's web-design-guidelines (web-interface-guidelines) skill. Use before any UI change in this repo.
---

# web-design-guidelines (vendored checklist)

**Source:** https://github.com/vercel-labs/agent-skills/blob/main/skills/web-design-guidelines/SKILL.md
**Licence:** not verified in this vendoring pass — check the upstream repository's LICENSE file before redistributing this text outside zentala.eu. This file is a condensed checklist, not a verbatim copy.
**Vendored:** 2026-09-25, as part of E004-T16 (see `.plan/reports/2026-09-25-ui-seo-review/00-skills-shortlist.md`).

## Checklist

- Keep to one clear visual hierarchy per screen; avoid competing focal points.
- Respect the design token system already in this repo (`src/styles/_tokens.scss`,
  `tailwind.config.js`) — no hard-coded colour or font size in a component.
- Interactive elements need a visible hover, active, focus and disabled state, and
  those states must be consistent across every instance of the same component.
- Hit targets at least 24×24px, ideally 44×44px for primary actions.
- Reflow correctly at 320px width and at 400% browser zoom.
- Loading and empty states are designed, not left blank or as a raw spinner.
- Forms: label every field, identify errors inline (not colour-only), and never
  block paste into inputs.
- Keep animations short, purposeful and interruptible; never block input while animating.

Apply this checklist before landing any Astro component or layout change.
