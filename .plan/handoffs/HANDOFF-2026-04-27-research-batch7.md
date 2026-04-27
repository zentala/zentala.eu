2026-04-27

# Handoff: Research Batch 7 — Green Digitalization, Digital Trust, Digital Divide

**For:** Next agent continuing research execution on zentala.eu
**Branch:** `dev`
**Working dir:** `C:\code\zentala.eu`

---

## Status: What's Done

Research files **merged to `dev`** in `src/content/docs/research/`:

**Tier 1 (Foundational) — ALL DONE:**
- `t1-1-demographic-crisis.md` ✅ (Batch 1)
- `t1-2-draghi-report.md` ✅ (Batch 4)
- `t1-3-estonia-egovernment.md` ✅ (Batch 1)
- `t1-4-english-language-adoption.md` ✅ (Batch 1)
- `t1-5a-poland-tech-emigration.md` ✅ (Batch 4)
- `t1-5b-baltics-ukraine.md` ✅ (Batch 4)

**Tier 2 (Pillar Support) — ALL DONE:**
- `t2-1-language-gdp.md` ✅ (Batch 5)
- `t2-23-web3-digital-finance.md` ✅ (Batch 2)
- `t2-4a-care-robotics.md` ✅ (Batch 3)
- `t2-4b-healthcare-ai.md` ✅ (Batch 5)
- `t2-5-autonomous-vehicles.md` ✅ (Batch 3)
- `t2-6-manufacturing-robotics.md` ✅ (Batch 5)

**Tier 3 (Supporting Narratives) — ALL DONE:**
- `t3-1-digital-integration-case-studies.md` ✅ (Batch 3)
- `t3-2-digitalization-failures.md` ✅ (Batch 6)
- `t3-3-geopolitical-competitors.md` ✅ (Batch 6)
- `t3-4-migration-economic-opportunity.md` ✅ (Batch 6)
- `t3-5-eu-digital-initiatives.md` ✅ (Batch 2)

**Remaining: Tier 4 (Enrichment) — 6 files across Batch 7 + Batch 8**

---

## Your Job: Execute Batch 7

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch7 dev
git worktree add .claude/worktrees/research-batch7 feat/research-batch7
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 7):

**T4.1: Environmental Sustainability & Digital Infrastructure**
- File: `t4-1-green-digitalization.md`
- Must answer ALL questions in section T4.1 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: energy footprint of data centers (kWh per GB), % renewable power, chip manufacturing carbon footprint, e-waste statistics, efficiency trends, policy levers, blockchain energy cost, net emissions assessment (digital gov saves more than it costs?)

**T4.2: Cultural Resistance to Digital Government**
- File: `t4-2-digital-trust.md`
- Must answer ALL questions in section T4.2 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: European trust in digital government by country (survey data), privacy concerns and surveillance fears, trust vs. digital maturity correlation, what builds trust, GDPR role, consent models at scale, adoption curve timeline, elderly/low-literacy support, demographic groups that may never trust digital government

**T4.3: Digital Divide and Rural Access**
- File: `t4-3-digital-divide.md`
- Must answer ALL questions in section T4.3 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: broadband coverage in EU rural areas (% with ≥30 Mbps by country), investment gap to close the divide, device access gaps by age/income/region, accessibility standards (WCAG compliance), cost of hybrid service delivery, inclusive service design models, who is most at risk, timeline to universal access

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
cd /c/code/zentala.eu/.claude/worktrees/research-batch7
git add src/content/docs/research/
git commit -m "research: add Batch 7 summaries (T4.1, T4.2, T4.3)"

# From project root:
git -C /c/code/zentala.eu merge feat/research-batch7 --no-ff -m "research: merge Batch 7 (green digitalization, digital trust, digital divide)"

# Cleanup:
git -C /c/code/zentala.eu worktree remove .claude/worktrees/research-batch7
git -C /c/code/zentala.eu branch -d feat/research-batch7
```

Note: if `worktree remove` fails with "Permission denied" (Windows), use PowerShell:
```powershell
Remove-Item -Recurse -Force "C:\code\zentala.eu\.claude\worktrees\research-batch7"
git -C "C:\code\zentala.eu" worktree prune
git -C "C:\code\zentala.eu" branch -d feat/research-batch7
```

---

## Batch 8 (For Agent After You)

After Batch 7 is merged, the next agent should do Batch 8 — the final Tier 4 topics:
- T4.4a: Job Displacement by Sector (`t4-4a-job-displacement.md`)
- T4.4b: Retraining Infrastructure & Success Stories (`t4-4b-retraining.md`)
- T4.5: Timeline Realism — When Do These Changes Actually Happen (`t4-5-timeline-realism.md`)

Same process: worktree → research (parallel agents) → write → commit → merge.

After Batch 8 merges, all 23 research files will be complete and Tier 4 closes the research phase.
