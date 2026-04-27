2026-04-27

# Handoff: Research Batch 6 — Digitalization Failures, Geopolitical Competitors, Migration

**For:** Next agent continuing research execution on zentala.eu
**Branch:** `dev`
**Working dir:** `C:\code\zentala.eu`

---

## Status: What's Done

Research files **merged to `dev`** in `src/content/docs/research/`:
- `t1-1-demographic-crisis.md` ✅ (Batch 1)
- `t1-3-estonia-egovernment.md` ✅ (Batch 1)
- `t1-4-english-language-adoption.md` ✅ (Batch 1)
- `t2-23-web3-digital-finance.md` ✅ (Batch 2)
- `t3-5-eu-digital-initiatives.md` ✅ (Batch 2)
- `t2-4a-care-robotics.md` ✅ (Batch 3)
- `t2-5-autonomous-vehicles.md` ✅ (Batch 3)
- `t3-1-digital-integration-case-studies.md` ✅ (Batch 3)
- `t1-2-draghi-report.md` ✅ (Batch 4)
- `t1-5a-poland-tech-emigration.md` ✅ (Batch 4)
- `t1-5b-baltics-ukraine.md` ✅ (Batch 4)
- `t2-1-language-gdp.md` ✅ (Batch 5)
- `t2-4b-healthcare-ai.md` ✅ (Batch 5)
- `t2-6-manufacturing-robotics.md` ✅ (Batch 5)

---

## Your Job: Execute Batch 6

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch6 dev
git worktree add .claude/worktrees/research-batch6 feat/research-batch6
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 6):

**T3.2: Where Digitalization Fails — Cautionary Tales**
- File: `t3-2-digitalization-failures.md`
- Must answer ALL questions in section T3.2 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: Healthcare.gov failure ($840M cost), UK "digital by default" stumbles, EU national e-government failures, blockchain hype cycles, statistical failure rate of large-scale gov IT projects, root causes and prevention strategies

**T3.3: Geopolitical Competitors — US Tech Dominance, China's Digital State**
- File: `t3-3-geopolitical-competitors.md`
- Must answer ALL questions in section T3.3 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: US fragmented vs EU approach (why no unified gov digital stack), China digital state (social credit, facial recognition, surveillance scale), Russia sovereign internet (Runet, how it works), India Aadhaar as middle path, EU regulatory third way (AI Act, DMA, DSA)

**T3.4: Migration as Economic Opportunity**
- File: `t3-4-migration-economic-opportunity.md`
- Must answer ALL questions in section T3.4 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: fiscal impact of immigration by skill level, do skilled immigrants contribute net-positive, innovation contribution (% startups/patents), integration success models (Canada, Germany, Switzerland), ROI of integration investment, managed vs unrestricted migration comparison, public perception by country

---

## Critical Files to Read First

1. `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md` — **Your checklist. Answer every question.**
2. `WRITING.md` — Voice/tone (data-driven, no institutional jargon, Polish engineer voice)
3. `.arch/VISION.md` — What zentala.eu is about (brief, worth 5 min)

---

## File Format Template

```markdown
---
title: "..."
description: "..."
tags: ["...", "research"]
author: zentala
---

# [Title]

## Summary
[1 paragraph: what this research found and why it matters for zentala.eu]

## Key Findings
[5-8 bullet points with actual numbers]

## [Section 1]
...

## Implications for EU Reform Argument
[How does this support or challenge the manifest?]

## Sources
[Bibliography with links]
```

---

## Quality Gate (Non-Negotiable)

Before saving any file:
- [ ] ALL checklist questions answered (none skipped)
- [ ] If data unavailable: write "Unknown. No public data available as of 2026."
- [ ] Every claim has a source with a link
- [ ] 2000–3500 words per file
- [ ] Frontmatter complete (title, description, tags, author)
- [ ] Files in ENGLISH

---

## Dispatch Strategy

All three topics are independent — dispatch them **in parallel** (three separate Agent tool calls in one message). Each agent writes one file. After all three complete, commit and merge.

---

## Commit & Merge

After all three files are done:
```bash
cd /c/code/zentala.eu/.claude/worktrees/research-batch6
git add src/content/docs/research/
git commit -m "research: add Batch 6 summaries (T3.2, T3.3, T3.4)"

# From project root:
git -C /c/code/zentala.eu merge feat/research-batch6 --no-ff -m "research: merge Batch 6 (digitalization failures, geopolitical competitors, migration)"

# Cleanup (worktree first, then branch):
git -C /c/code/zentala.eu worktree remove .claude/worktrees/research-batch6
git -C /c/code/zentala.eu branch -d feat/research-batch6
```

Note: if `worktree remove` fails with "Permission denied" (Windows), use PowerShell:
```powershell
Remove-Item -Recurse -Force "C:\code\zentala.eu\.claude\worktrees\research-batch6"
git -C "C:\code\zentala.eu" worktree prune
git -C "C:\code\zentala.eu" branch -d feat/research-batch6
```

---

## Batch 7 (For Agent After You)

After Batch 6 is merged, the next agent should do Batch 7 — Tier 4 enrichment topics:
- T4.1: Environmental Sustainability & Digital Infrastructure (`t4-1-green-digitalization.md`)
- T4.2: Cultural Resistance to Digital Government (`t4-2-digital-trust.md`)
- T4.3: Digital Divide and Rural Access (`t4-3-digital-divide.md`)

And Batch 8 (final):
- T4.4a: Job Displacement by Sector (`t4-4a-job-displacement.md`)
- T4.4b: Retraining Infrastructure & Success Stories (`t4-4b-retraining.md`)
- T4.5: Timeline Realism — When Do These Changes Actually Happen (`t4-5-timeline-realism.md`)

Same process: worktree → research (parallel agents) → write → commit → merge.
