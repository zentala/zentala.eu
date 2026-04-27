---
id: E001-T06
epic: E001
status: not-started
branch: feat/E001-T06-manifest-robotization
output: src/content/docs/book/robotization.mdx
---

# E001-T06: Manifest Page — Robotization

## Mandatory setup
1. Read `WRITING.md` — voice, tone, argument hierarchy
2. Read `.arch/VISION.md` — central metaphor: Europe as legacy OS

## Research to read
- `src/content/docs/research/t2-5-autonomous-vehicles.md`
- `src/content/docs/research/t2-6-manufacturing-robotics.md`
- `src/content/docs/research/t2-4a-care-robotics.md`
- `src/content/docs/research/t4-4a-job-displacement.md`

## Task

Create new manifest page: `src/content/docs/book/robotization.mdx`

## Argument to make

Robotization is not job-killing — it's the only way Europe survives its demographic crisis. Three use cases:
1. Replace the workers we'll lose to aging (4.1M healthcare worker deficit by 2030)
2. Reindustrialize Europe at wage parity with Asia (robots close the labor cost gap)
3. Care for the elderly without needing 10M caregivers we don't have

Use actual numbers from the research files. End with: what does this mean for an ordinary Polish 40-year-old thinking about their retirement?

## Frontmatter
```yaml
title: "Robotization: Europe's Demographic Answer"
description: "Why robotizing Europe is not a threat to jobs but the only realistic path through the demographic crisis."
tags: ["robotization", "automation", "demographics", "europe"]
author: zentala
```

## Format rules
- 800–1500 words
- First person: "I believe", "I propose", "I see"
- Engineer metaphors: "legacy system", "refactoring", "technical debt"
- Numbers over adjectives

## Commit
```
feat(manifest): add robotization manifest page
```
