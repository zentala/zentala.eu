---
id: E001-T08
epic: E001
status: not-started
branch: feat/E001-T08-manifest-healthcare-ai
output: src/content/docs/book/predictive-healthcare-system.mdx
---

# E001-T08: Manifest Page — Predictive Healthcare System

## Mandatory setup
1. Read `WRITING.md` — voice, tone, argument hierarchy
2. Read `.arch/VISION.md` — central metaphor: Europe as legacy OS

## Research to read
- `src/content/docs/research/t2-4b-healthcare-ai.md`

## Task

Rewrite stub page (currently ~43 words, draft=true) at:
`src/content/docs/book/predictive-healthcare-system.mdx`

Remove `draft: true` from frontmatter when done.

## Argument to make

AI diagnostics trained on EU-wide health data will catch diseases earlier and cheaper than any current system. The bottleneck is not the technology — AI already matches or beats radiologists in certain tasks. The bottleneck is data fragmentation: Estonia has 1.4M patients, EU has 450M. A pan-European health data pool is the upgrade from local SQLite to a distributed database. Use accuracy data and cost-per-diagnosis numbers from the research.

End with: what does early cancer detection via EU-scale AI mean for a 45-year-old in Wrocław?

## Format rules
- 800–1500 words
- First person
- Remove `draft: true`

## Commit
```
feat(manifest): expand predictive-healthcare-system page
```
