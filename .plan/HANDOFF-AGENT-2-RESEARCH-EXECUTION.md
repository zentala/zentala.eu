2026-04-26

# Handoff: Agent 2 — Research Execution & Content Writing

**For:** Agent/Session assigned to execute research and write summaries

---

## Context: What You're Doing

You are **researching and writing** content for zentala.eu. Your job is **finding data, synthesizing information, and writing 2–5 page research summaries** for assigned research topics.

Agent 1 is building the visualization; you are building the substance.

---

## Your Research Topics (Assigned Batch)

You will receive **1–5 topics per session**. Each topic comes with:

1. **Topic description** (from `RESEARCH_TOPICS.xml`)
2. **Data Points Checklist** (from `RESEARCH_DATA_POINTS_CHECKLIST.md`)
   - Specific questions you MUST answer
   - Suggested data sources
   - Expected deliverable format

---

## Quality Gate: The Checklist

**You must answer EVERY question on the checklist.** This is non-negotiable.

Example (T1.1 — Europe's Demographic Crisis):
- [ ] What is Europe's current old-age dependency ratio (2024), by major country?
- [ ] What are fertility rates by country?
- [ ] How much has emigration depleted Poland, Romania, Bulgaria?
- ... (8 more questions)

**No questions skipped. No "data not available" excuses.** If data doesn't exist, you say "Unknown, not available from public sources" — explicitly.

---

## Research Execution Process

### Step 1: Understand the Topic
Read the topic description + checklist. Clarify what you're answering before you start.

### Step 2: Find Data Sources
Use the suggested data sources in the checklist:
- Eurostat (official EU stats)
- OECD databases
- Academic papers (Google Scholar, ResearchGate)
- Government reports
- Industry databases

**Search strategy:** Google exact phrases, use Boolean operators, check academic databases.

### Step 3: Gather Data
- Collect numbers, percentages, timelines, case studies
- Screenshot/bookmark sources (you'll cite them)
- Note down: what's recent (2024) vs. old (2015+), what's authoritative

### Step 4: Synthesize Into Narrative
Don't just list data. **Write a story.**
- Why does this data matter?
- What are the trends?
- What are the counterarguments?
- What are the implications for zentala.eu manifest?

### Step 5: Write Summary (2–5 pages equivalent)
**Format:**
```
# <Topic Title>

## Summary (1 paragraph)
What this research says, why it matters for zentala.eu.

## Key Findings (bullet list or short paragraphs)
The 5–8 most important data points.

## Deep Dive (2–3 sections)
More detailed analysis, regional breakdowns, case studies.

## Implications (1 section)
How does this support or challenge the manifest's arguments?

## Sources (bibliography)
List all sources with links (or citation format).
```

### Step 6: Quality Review
Before submitting:
- [ ] Did I answer ALL checklist questions?
- [ ] Are sources cited and recent?
- [ ] Is the narrative clear and engaging?
- [ ] Did I avoid jargon without explanation?
- [ ] Does this support the manifest's argument (or provide honest counterargument)?

---

## Writing Style & Voice

**Tone:** Same as zentala.eu manifest
- First person possible: "I found that..." if you're summarizing your research
- But usually: impersonal + data-driven "The research shows..."
- No marketing speak: "This reveals an opportunity for..." not "This creates a paradigm shift..."
- Polish engineer: direct, clear, no fluff

**Structure:** Readers should be able to:
1. Skim headers and understand the story in 3 min
2. Read full text and understand all implications in 10 min
3. Find specific data points by searching

**Citations:** Every claim needs a source
- Link to Eurostat tables
- Link to academic papers
- Quote official reports
- Cite interviews/case studies

---

## Where to Publish (After Writing)

Agent 1 is building `/research/map`. Once your research is ready:

1. Save as `.md` file in `/src/content/docs/research/`
   - Path: `/src/content/docs/research/<topic-id>-<slug>.md`
   - Example: `/src/content/docs/research/t1-1-demographic-crisis.md`

2. Add frontmatter (title, description, tags)

3. Link from the interactive map
   - Agent 1 will update the data to show ✅ Complete + link to your page

---

## Topic Batches & Sequencing

**Suggested order:**

**Batch 1 (Foundation, Session 1):**
- T1.1: Europe's Demographic Crisis
- T1.3: Estonia's e-Government (case study)
- T1.4: English Language Adoption

**Batch 2 (Pillar 2 Deep-Dive, Session 2):**
- T2.2+T2.3: Web3 & Digital Finance
- T3.5: EU's Existing Digital Initiatives

**Batch 3 (Pillar 3 & Support, Session 3):**
- T2.4a: Care Robotics
- T2.5: Autonomous Vehicles
- T3.1: Case Studies Beyond Estonia

**Batch 4 (Supporting & Enrichment, Session 4):**
- T3.2: Where Digitalization Fails
- T4.4a: Job Displacement
- T4.5: Timeline Realism

---

## Research Tools & Databases You'll Use

### Public Databases
- **Eurostat** (https://ec.europa.eu/eurostat) — Official EU statistics
- **OECD iLibrary** (https://www.oecd-ilibrary.org/) — OECD research and data
- **Google Scholar** (https://scholar.google.com/) — Academic papers
- **GitHub** (for open datasets, European data projects)

### Government & Policy
- **European Commission** (digital strategy, policy documents)
- **National statistical offices** (each country's equivalent of Eurostat)
- **Industry reports** (WEF Future of Jobs, IFR robotics, etc.)

### Search Strategy
- Combine: "Europe" + "keyword" + "2024" or "2025"
- Use: "filetype:pdf" to find reports
- Check: most recent publication date (avoid stale data)
- Cross-check: if one source says X, verify with another

---

## Handling Uncertainty & Missing Data

**When you can't find data:**
1. Don't make it up
2. Don't skip the question
3. Say explicitly: "Unknown. No public data available as of 2026."
4. Then: either find a proxy measure, or move on to next question

**Example (T1.1 — if you can't find exact 2024 data):**
"Latest Eurostat projection (2023): old-age dependency ratio reaches 2 workers per pensioner by 2050. (Note: 2024 update not yet published; this uses 2023 baseline.)"

---

## QA Checklist for Your Work

Before submitting research:

- [ ] Topic ID and title correct
- [ ] ALL checklist questions answered (none skipped)
- [ ] Data is recent (2023–2025 preferred, 2020+ acceptable)
- [ ] Sources cited with links
- [ ] 2–5 pages length (equivalent)
- [ ] Narrative is clear: "Why should manifest reader care?"
- [ ] No jargon without explanation
- [ ] Spelling/grammar checked
- [ ] Frontmatter ready (title, description, tags)

---

## Success Criteria

✅ Agent 2 is done with a topic when:
1. All checklist questions answered
2. Research summary written (2–5 pages)
3. Sources cited and verified
4. File saved to `/src/content/docs/research/`
5. Frontmatter + metadata correct
6. Link ready for Agent 1 to integrate into `/research/map`

---

## Your First Topic Checklist (Example: T1.1)

If you're starting with T1.1 (Europe's Demographic Crisis), here's what you'll answer:

**Must Answer:**
- [ ] Europe's current old-age dependency ratio (2024), by major country
- [ ] Projected ratios for 2030, 2040, 2050 (Germany, Poland, Italy, Spain, France)
- [ ] Fertility rates by country (which are below 2.1?)
- [ ] Emigration numbers from Poland, Romania, Bulgaria (absolute + % of working-age)
- [ ] Current pension contribution rates + projected deficits by 2050
- [ ] What Japan/South Korea aging studies predict
- [ ] Cost of inaction (economic models)
- [ ] ROI of reforming now vs. waiting 10 years

**Data Sources:**
- Eurostat population projections
- OECD aging reports
- EIOPA pension sustainability
- UN population division

**Deliverable:** 3–4 page research summary with 6–8 charts/tables

---

## Next Steps (For You)

1. Read the assigned topics from your session prompt
2. For each topic, read the full checklist from `RESEARCH_DATA_POINTS_CHECKLIST.md`
3. Clarify any questions (ask in your session)
4. Start research
5. Write summary
6. Submit for QA

---

## Questions to Ask Yourself

**Before you start a topic:**
- Do I understand what this research is supposed to answer?
- Can I find enough public data to answer all checklist questions?
- Do I have access to the required databases?

**While researching:**
- Is this data recent and authoritative?
- Am I answering the specific questions, not just "related" ones?
- Can I cite this source?

**Before submitting:**
- Would a 2026 reader understand why this matters?
- Does this strengthen or challenge the manifest's argument?
- Did I answer every single question?

---

## Files to Read (For Context)

- `.arch/VISION.md` — What zentala.eu is about, voice/tone
- `WRITING.md` — Writing guidelines (same as above)
- `.plan/RESEARCH_TOPICS.xml` — Full topic descriptions
- `.plan/RESEARCH_DATA_POINTS_CHECKLIST.md` — Your checklist (CRITICAL!)
- `CLAUDE.md` — Project conventions

---

## Timeline Estimate Per Topic

- **Batch of 3 topics:** 6–8 hours total
  - 1.5–2 hours per topic: research + data gathering
  - 1 hour per topic: writing + synthesis
  - 0.5 hours per topic: review + citations

---

## Final Note

You're not just writing research—you're **strengthening the manifest**. Every data point you find either validates or challenges zentala.eu's argument. Be honest about what the data says.

Good luck! 🚀
