2026-04-27

# Handoff: Research Batch 2 — Continue Agent 2 Research

**For:** Next agent continuing research execution on zentala.eu
**Branch:** `dev`
**Working dir:** `C:\code\zentala.eu`

---

## Status: What's Done

Batch 1 research files are **merged to `dev`** in `src/content/docs/research/`:
- `t1-1-demographic-crisis.md` ✅ (~4100 words)
- `t1-3-estonia-egovernment.md` ✅ (~4600 words)
- `t1-4-english-language-adoption.md` ✅ (~4000 words)

---

## Your Job: Execute Batch 2

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch2 dev
git worktree add .claude/worktrees/research-batch2 feat/research-batch2
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 2):

**T2.2+T2.3 (MERGED): Web3 & Digital Finance**
- File: `t2-23-web3-digital-finance.md`
- Must answer ALL questions in sections T2.2+T2.3 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: blockchain use cases in government (what works vs. hype), GDPR immutability conflict, EU digital euro timeline, CBDC vs instant payments cost comparison, China digital yuan lessons

**T3.5: EU's Existing Digital Initiatives**
- File: `t3-5-eu-digital-initiatives.md`
- Must answer ALL questions in section T3.5 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: eIDAS 2024 adoption status, GDPR as feature vs barrier, Digital Decade 2030 targets progress, gaps between existing EU policy and manifest vision

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

## Commit & Merge

After both files are done:
```bash
cd .claude/worktrees/research-batch2
git add src/content/docs/research/
git commit -m "research: add Batch 2 summaries (T2.2+T2.3, T3.5)"

# Back in project root:
cd C:\code\zentala.eu
git merge feat/research-batch2 --no-ff -m "research: merge Batch 2 (Web3/Finance + EU digital policy)"
git worktree remove .claude/worktrees/research-batch2
```

---

## Batch 3 (For Agent After You)

After Batch 2 is merged, the next agent should do Batch 3:
- T2.4a: Care Robotics (`t2-4a-care-robotics.md`)
- T2.5: Autonomous Vehicles (`t2-5-autonomous-vehicles.md`)
- T3.1: Case Studies Beyond Estonia (`t3-1-digital-integration-case-studies.md`)

Same process: worktree → research → write → commit → merge.
