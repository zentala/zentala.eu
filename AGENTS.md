# AGENTS.md

## Content architecture

- The public homepage is the root of the information architecture.
- Every public content item should be reachable from the homepage in no more than two clicks:
  homepage → pillar or collection → document.
- Use canonical public book URLs under `/book/...`. Treat `/docs/...` links as legacy compatibility paths.
- New content belongs in `src/content/docs/`; do not place new work in `content-old/`.
- Keep public pages concise. Put research notes, hypotheses, raw tables, unresolved questions and future material in a sidecar next to the public document.

## Sidecar pattern

- A sidecar uses the public document's basename plus `.sidecar` before the extension, for example:
  `european-english.mdx` → `european-english.sidecar.mdx`.
- Sidecars are content, not reports. They belong beside the document they support.
- Sidecars must use `draft: true` until their material is deliberately promoted into the public document.
- Do not link sidecars from production navigation.

## Content workflow

1. Keep a readable public proposal with a clear TL;DR and next decision.
2. Preserve deeper context in the matching sidecar.
3. Promote only validated, stable material from the sidecar into the public page.
4. Verify the two-click path and canonical URLs whenever a document is added.
