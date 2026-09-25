---
updated: 2026-09-25T16:05:00
planning_epic: E005
planning_epic_path: .plan/epics/E005-2026-09-25-cloudflare-engagement-platform
---

## Epic history

- 2026-09-25: **E004 (UI/A11y/SEO review) closed.** T01–T11 and T16 done;
  T12/T14 superseded into E006; T13/T15 remain `proposed`, unstarted, carried
  as backlog. See `.plan/epics/E004-2026-09-25-ui-a11y-seo-review/JOURNAL.md`
  and `.plan/DONE.md`. Review readiness for this repo is `NOT CLEARED`
  (`review-log status` → never run) — recommend `/review` before treating
  E004's shipped code as reviewed.

## Status

E005 was revised to a Hub-first integration. `zentala.eu` remains a lightweight
static site; Cloudflare Hub owns email, newsletter, consent, privacy, PII, and
chat/RAG capabilities.

## Active Tasks

No E005 implementation tasks are ready. The site integration depends on review
of Hub E008 and a re-estimate of the reduced, site-only scope.

## Next Steps

1. Review Hub E008 and resolve its service credential and privacy-policy decisions.
2. Re-estimate E005 as a thin integration using Hub embeds and ingestion APIs.
3. Verify the existing Hub newsletter flow with `zentala.eu` before replacing the local form.
