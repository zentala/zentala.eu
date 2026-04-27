2026-04-27

# Handoff: Research Batch 5 — Language GDP, Healthcare AI, Manufacturing Robotics

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

---

## Your Job: Execute Batch 5

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch5 dev
git worktree add .claude/worktrees/research-batch5 feat/research-batch5
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 5):

**T2.1: Language as Economic Infrastructure**
- File: `t2-1-language-gdp.md`
- Must answer ALL questions in section T2.1 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: trade elasticity w.r.t. language, GDP effect of common language, transaction costs of fragmentation, labor mobility, English-speaking startup performance, network effects, US internal market precedent, cost-benefit of EU English bilingualism

**T2.4b: Healthcare AI & Diagnostics**
- File: `t2-4b-healthcare-ai.md`
- Must answer ALL questions in section T2.4b of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: top 5 AI diagnostic tools (accuracy vs. human), EU regulatory status, cost per patient, adoption barriers, rural deployment, timeline to widespread EU adoption, bias issues, ROI

**T2.6: Manufacturing Robotics and EU Reindustrialization**
- File: `t2-6-manufacturing-robotics.md`
- Must answer ALL questions in section T2.6 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: robot density by country/sector, cost vs. Asian labor, reshoring wage parity point, which sectors could reshore, skill requirements, Germany Industry 4.0 case study, timeline, policy enablers, environmental benefit

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
cd /c/code/zentala.eu/.claude/worktrees/research-batch5
git add src/content/docs/research/
git commit -m "research: add Batch 5 summaries (T2.1, T2.4b, T2.6)"

# From project root:
git -C /c/code/zentala.eu merge feat/research-batch5 --no-ff -m "research: merge Batch 5 (language GDP, healthcare AI, manufacturing robotics)"

# Cleanup (worktree first, then branch):
git -C /c/code/zentala.eu worktree remove .claude/worktrees/research-batch5
git -C /c/code/zentala.eu branch -d feat/research-batch5
```

Note: if `worktree remove` fails with "Permission denied" (Windows), use PowerShell:
```powershell
Remove-Item -Recurse -Force "C:\code\zentala.eu\.claude\worktrees\research-batch5"
git -C "C:\code\zentala.eu" worktree prune
git -C "C:\code\zentala.eu" branch -d feat/research-batch5
```

---

## Batch 6 (For Agent After You)

After Batch 5 is merged, the next agent should do Batch 6 — Tier 3 supporting narratives:
- T3.2: Where Digitalization Fails — Cautionary Tales (`t3-2-digitalization-failures.md`)
- T3.3: Geopolitical Competitors — US Tech Dominance, China's Digital State (`t3-3-geopolitical-competitors.md`)
- T3.4: Migration as Economic Opportunity (`t3-4-migration-economic-opportunity.md`)

Same process: worktree → research (parallel agents) → write → commit → merge.
