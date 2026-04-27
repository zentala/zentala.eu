2026-04-27

# Handoff: Research Batch 3 — Continue Agent 2 Research

**For:** Next agent continuing research execution on zentala.eu
**Branch:** `dev`
**Working dir:** `C:\code\zentala.eu`

---

## Status: What's Done

Research files **merged to `dev`** in `src/content/docs/research/`:
- `t1-1-demographic-crisis.md` ✅ (Batch 1, ~4100 words)
- `t1-3-estonia-egovernment.md` ✅ (Batch 1, ~4600 words)
- `t1-4-english-language-adoption.md` ✅ (Batch 1, ~4000 words)
- `t2-23-web3-digital-finance.md` ✅ (Batch 2, ~3700 words)
- `t3-5-eu-digital-initiatives.md` ✅ (Batch 2, ~3900 words)

---

## Your Job: Execute Batch 3

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch3 dev
git worktree add .claude/worktrees/research-batch3 feat/research-batch3
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 3):

**T2.4a: Elderly Care Robotics**
- File: `t2-4a-care-robotics.md`
- Must answer ALL questions in section T2.4a of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: which robots exist today (TRL level, cost), acceptance rates among elderly, Japan precedent, ROI vs. human caregivers, regulatory barriers in EU, timeline to cost-effective deployment

**T2.5: Autonomous Vehicles for Logistics**
- File: `t2-5-autonomous-vehicles.md`
- Must answer ALL questions in section T2.5 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: SAE levels by vehicle class, which companies are closest to L4/L5, how many driving jobs in EU, job displacement timeline, cost of transition, deployment case studies (Phoenix, Singapore)

**T3.1: Successful Large-Scale Digital Integration — Case Studies Beyond Estonia**
- File: `t3-1-digital-integration-case-studies.md`
- Must answer ALL questions in section T3.1 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: SEPA (timeline, cost, challenges), NHS digitalization (what worked, what failed), Singapore digital gov (architecture, privacy tradeoffs), India Aadhaar (technical, adoption, legal), lessons for EU

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

---

## Dispatch Strategy

All three topics are independent — dispatch them **in parallel** (three separate Agent tool calls in one message). Each agent writes one file. After all three complete, commit and merge.

---

## Commit & Merge

After all three files are done:
```bash
cd .claude/worktrees/research-batch3
git add src/content/docs/research/
git commit -m "research: add Batch 3 summaries (T2.4a, T2.5, T3.1)"

# Back in project root:
cd C:\code\zentala.eu
git merge feat/research-batch3 --no-ff -m "research: merge Batch 3 (care robotics, autonomous vehicles, digital case studies)"
git worktree remove .claude/worktrees/research-batch3
git branch -d feat/research-batch3
```

---

## Batch 4 (For Agent After You)

After Batch 3 is merged, the next agent should do Batch 4:
- T1.2: Draghi Report Deep Dive (`t1-2-draghi-report.md`)
- T1.5a: Poland's Tech Sector & Emigration (`t1-5a-poland-tech-emigration.md`)
- T1.5b: Baltics & Ukraine as Security Allies (`t1-5b-baltics-ukraine.md`)

Same process: worktree → research (parallel agents) → write → commit → merge.
