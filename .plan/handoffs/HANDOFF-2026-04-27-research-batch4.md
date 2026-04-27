2026-04-27

# Handoff: Research Batch 4 — Draghi Report, Poland Tech, Baltics/Ukraine

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

---

## Your Job: Execute Batch 4

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch4 dev
git worktree add .claude/worktrees/research-batch4 feat/research-batch4
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 4):

**T1.2: Draghi Report Deep Dive**
- File: `t1-2-draghi-report.md`
- Must answer ALL questions in section T1.2 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: Draghi's main thesis (1 sentence), why EU GDP shrinks by 2050, top 5 policy recommendations, alignment/divergence with zentala.eu 3 pillars, EU policy response since publication

**T1.5a: Poland's Tech Sector & Emigration**
- File: `t1-5a-poland-tech-emigration.md`
- Must answer ALL questions in section T1.5a of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: Poland's DESI score (trend 2020–2025), emigration scale 2004–2024, tech sector size (startups, employment, VC), major Polish tech companies, push factors for emigration, ROI of retention

**T1.5b: Baltics & Ukraine as Security Allies**
- File: `t1-5b-baltics-ukraine.md`
- Must answer ALL questions in section T1.5b of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: security threat perception (survey data), DESI scores, tech sector size per country, eIDAS/digital gov maturity, interest in EU integration (security + economic), strategic value of digital/linguistic EU integration

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
cd /c/code/zentala.eu/.claude/worktrees/research-batch4
git add src/content/docs/research/
git commit -m "research: add Batch 4 summaries (T1.2, T1.5a, T1.5b)"

# From project root:
git -C /c/code/zentala.eu merge feat/research-batch4 --no-ff -m "research: merge Batch 4 (Draghi report, Poland tech, Baltics/Ukraine)"
git -C /c/code/zentala.eu branch -d feat/research-batch4
```

Note: run `git worktree remove` from project root, not from inside the worktree.

---

## Batch 5 (For Agent After You)

After Batch 4 is merged, the next agent should do Batch 5 — remaining Tier 2 topics:
- T2.1: Language as Economic Infrastructure (`t2-1-language-gdp.md`)
- T2.4b: Healthcare AI & Diagnostics (`t2-4b-healthcare-ai.md`)
- T2.6: Manufacturing Robotics (`t2-6-manufacturing-robotics.md`)

Same process: worktree → research (parallel agents) → write → commit → merge.
