---
updated: 2026-09-25T15:30:22
planning_epic: E005
planning_epic_path: .plan/epics/E005-2026-09-25-cloudflare-engagement-platform
---

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
