---
updated: 2026-09-25T17:15:00
branch: main
planning_epic: E005
planning_epic_path: .plan/epics/E005-2026-09-25-cloudflare-engagement-platform
---

## Epic history

- 2026-09-25 (later): **E004 full-epic close pass run.** All 16 tasks now
  accounted for: T01–T11, T13, T15, T16 `completed`; T12/T14 `superseded`
  into E006 (superseding the earlier "T13/T15 still proposed" line below,
  which predates T13/T15 landing). Verification is **PARTIAL**: `just
  typecheck`/`build`/`audit`/`a11y` all pass, but the full `yarn test`
  regression suite did not complete in the session and `review-log status`
  is `NOT CLEARED`. Not written to a `HISTORY.md` (this repo has none —
  `.plan/DONE.md` is the closed-epic ledger here). See
  `.plan/epics/E004-2026-09-25-ui-a11y-seo-review/JOURNAL.md` and the new
  `.plan/BACKLOG.md` entry "E004 not fully verified at close".
- 2026-09-25: **E004 (UI/A11y/SEO review) closed.** T01–T11 and T16 done;
  T12/T14 superseded into E006; T13/T15 remain `proposed`, unstarted, carried
  as backlog. See `.plan/epics/E004-2026-09-25-ui-a11y-seo-review/JOURNAL.md`
  and `.plan/DONE.md`. Review readiness for this repo is `NOT CLEARED`
  (`review-log status` → never run) — recommend `/review` before treating
  E004's shipped code as reviewed.
- 2026-09-25: **E006 waves 3–4 interrupted, epic NOT closed.** T06/T07/T08/T09/
  T10/T12/T13/T14 done and merged to `main`; T05 (content schema, glossary,
  frontmatter sweep) only partially landed and is `in-progress`; T11 stays
  `blocked` on T05; wave 5 (T15–T19) never dispatched. Not written to
  `.plan/HISTORY.md` (that file is for finished epics only). See
  `.plan/epics/E006-2026-09-25-design-editorial-ia/JOURNAL.md` and the new
  `.plan/BACKLOG.md` entry "E006 not closed after waves 3–4". Review readiness
  for this repo is still `NOT CLEARED` (`review-log status` → every review kind
  `NEVER RUN` against `HEAD e4ad71b4`).

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
