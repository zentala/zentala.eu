2026-04-27

# Handoff: Research Batch 8 — Job Displacement, Retraining, Timeline Realism

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

**Tier 4 (Enrichment) — 3 of 6 done:**
- `t4-1-green-digitalization.md` ✅ (Batch 7)
- `t4-2-digital-trust.md` ✅ (Batch 7)
- `t4-3-digital-divide.md` ✅ (Batch 7)

**Remaining: Tier 4 — 3 files in Batch 8 (FINAL BATCH)**

---

## Your Job: Execute Batch 8 — THE FINAL BATCH

**Create a new worktree, do the research, write the files, merge when done.**

### Worktree setup:
```bash
git branch feat/research-batch8 dev
git worktree add .claude/worktrees/research-batch8 feat/research-batch8
```

### Output directory: `src/content/docs/research/`

### Topics to research (Batch 8):

**T4.4a: Job Displacement by Sector — Which Jobs Disappear, When**
- File: `t4-4a-job-displacement.md`
- Must answer ALL questions in section T4.4a of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: WEF Future of Jobs top automatable roles, automation risk by sector (transport, manufacturing, retail, admin, finance), timeline by sector (2030/2040/2050), geographic impact by EU region/country, income level of at-risk jobs, net job displacement (lost minus created), historical precedent from past automation waves

**T4.4b: Retraining Infrastructure & Success Stories**
- File: `t4-4b-retraining.md`
- Must answer ALL questions in section T4.4b of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: existing EU retraining programs (scope, success rate, cost per person), what makes retraining work (duration, skill match, employer engagement, income support), lessons from coal workers and past automation waves, cost per person, scalability to millions of workers, realistic retraining timeline

**T4.5: Timeline Realism — When Do These Changes Actually Happen?**
- File: `t4-5-timeline-realism.md`
- Must answer ALL questions in section T4.5 of `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md`
- Key questions: technology roadmaps (autonomous vehicles, robotics, 5G/6G, quantum), EU policy implementation delays (eIDAS, GDPR → real adoption timelines), large infrastructure build times (Trans-European Networks precedent), quick wins 2026–2030 vs. medium-term 2030–2040 vs. long-term 2040–2050, FP9/Recovery Fund investment cycles, critical path dependencies, delay risks (geopolitics, recession, tech)

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

Note: T4.5 (Timeline Realism) is the synthesis topic — it draws on all other research. The agent writing it should ideally reference conclusions from other research files already in `src/content/docs/research/`. They are all available in the worktree (it branches from `dev` which has all 20 prior files).

---

## Commit & Merge

After all three files are done:
```bash
cd /c/code/zentala.eu/.claude/worktrees/research-batch8
git add src/content/docs/research/
git commit -m "research: add Batch 8 summaries (T4.4a, T4.4b, T4.5)"

# From project root:
git -C /c/code/zentala.eu merge feat/research-batch8 --no-ff -m "research: merge Batch 8 (job displacement, retraining, timeline realism)"

# Cleanup:
git -C /c/code/zentala.eu worktree remove .claude/worktrees/research-batch8
git -C /c/code/zentala.eu branch -d feat/research-batch8
```

Note: if `worktree remove` fails with "Permission denied" (Windows), use PowerShell:
```powershell
Remove-Item -Recurse -Force "C:\code\zentala.eu\.claude\worktrees\research-batch8"
git -C "C:\code\zentala.eu" worktree prune
git -C "C:\code\zentala.eu" branch -d feat/research-batch8
```

---

## After Batch 8 — Research Phase COMPLETE

When these 3 files merge, all 23 research files will be done. Tier 4 closes. The research phase ends.

Next steps after research is complete (ask the user):
1. Update the research map (`/resources/research/map.astro`) to reflect all 23 completed files
2. Begin writing the actual manifest pages using the research as source material
3. Or: review/polish existing pages using the completed research foundation
