2026-04-26

# Handoff: Agent 1 — XML Visualization & Interactive Research Map

**For:** Agent/Session assigned to build `/research/map` visualization page

---

## Context: What This Agent is Doing

You are building an **interactive web page** that visualizes the zentala.eu research structure. The goal is to make 20+ research topics discoverable, understandable, and trackable in a visual explorer.

This is a **separate session/agent** from the research itself. Your job is **interface + data visualization**, not research execution.

---

## Input Documents (Already Prepared)

Three files exist in `.plan/`:

1. **`CONTENT_STRUCTURE.xml`** — Audit of all content in zentala.eu
   - What is the project about
   - Content architecture (core pages, book, ideas, archive)
   - Argument hierarchy
   - Current status, outstanding work

2. **`RESEARCH_TOPICS.xml`** — 20 research topics in 4 tiers
   - T1: Foundational (5 topics, CRITICAL)
   - T2: Pillar Support (6 topics, HIGH)
   - T3: Supporting Narratives (5 topics, MEDIUM)
   - T4: Enrichment (5 topics, MEDIUM-LOW)
   - Each topic has: title, description, depth, effort, strategic value, research approach, related concepts

3. **`RESEARCH_DATA_POINTS_CHECKLIST.md`** — For each topic: 5–15 specific questions researcher must answer
   - This is the quality gate: "Was every question answered?"
   - Also includes data sources and deliverable format per topic

---

## Task: Build `/research/map` Page

### Requirements

**A. Visualization: Research Topics Explorer**

1. **Tier-based navigation**
   - Sidebar or tab navigation: Tier 1, Tier 2, Tier 3, Tier 4
   - Click on tier → expand to show topics in that tier
   - Visual: color-coded by tier (e.g., red=T1/critical, orange=T2/high, etc.)

2. **Per-topic card**
   - Title + one-line description
   - Effort badge: Low / Medium / High (with visual indicator)
   - Strategic value score: 1–5 stars or percentage
   - Status indicator:
     - ⚪ Not Started (default)
     - 🔵 In Progress (once research begins)
     - ✅ Complete (when research is published)
   - Click to expand → full description, research approach, related concepts
   - Link to published research (when available)

3. **Filtering &amp; Search**
   - Filter by effort (Low / Medium / High)
   - Filter by strategic value (1–5 stars)
   - Filter by concept (Demographics, Language, Robotics, etc.)
   - Search bar: search by topic title or keywords
   - Applied filters shown as chips with × to remove

4. **Concept Map (Optional, Phase 2)**
   - Sidebar showing concept clusters (Demographic, Language, eGov, Robotics, etc.)
   - Click on concept → highlights all topics tagged with that concept
   - Shows interconnectedness

5. **Progress Tracker**
   - Summary: "3/20 research topics complete" with progress bar
   - Per-tier progress: "Tier 1: 1/5 complete"
   - This updates as research is added

### B. Data Integration

The page needs to **load data from XML/JSON files**. Recommend:

**Option 1: Convert XML to JSON at build time**
- Build script reads `RESEARCH_TOPICS.xml`
- Converts to `research-topics.json` in `src/data/`
- Astro component imports JSON and renders

**Option 2: Embed JSON directly in Astro**
- Create `src/data/research-topics.ts` with typed data structure
- Astro component imports and renders

**Choose Option 2** (simpler, typesafe, no external deps).

### C. Visual Design

- Consistent with zentala.eu design (TailwindCSS + DaisyUI)
- Card-based layout (max 2–3 columns on desktop, 1 on mobile)
- Dark mode support (already built into site)
- Animations: smooth expand/collapse, filter transitions
- Mobile: collapsible tiers, vertical scroll, touch-friendly

### D. Research Content Integration

Once research is done:
- Each topic card shows status: ✅ Complete
- "View research" link → points to `/research/<topic-id>/` page
- Those pages contain the actual research summaries (written by Agent 2)
- `/research/map` is the hub; individual pages are the details

---

## Data Structure You'll Work With

```typescript
interface ResearchTopic {
  id: string;           // T1.1, T2.3, etc.
  title: string;
  description: string;
  tier: 1 | 2 | 3 | 4;
  depth: "Low" | "Medium" | "Medium-Deep" | "Deep";
  effort: "Low" | "Medium" | "High";
  strategicValue: 1–5;  // 1=low, 5=critical
  researchApproach: string;
  relatedConcepts: string[];
  existingContent: string;  // Links to pages this relates to
  status: "not-started" | "in-progress" | "complete";
  researchPath?: string;   // Link to published research (when complete)
}

interface ConceptGroup {
  name: string;
  description: string;
  topics: string[];  // Topic IDs in this concept
}
```

---

## Output Deliverable

A fully functional Astro page at `/research/map` with:

1. ✅ Tier-based navigation + expand/collapse
2. ✅ Topic cards with all fields (title, description, effort, value, status)
3. ✅ Filtering by effort, strategic value, concept
4. ✅ Search functionality
5. ✅ Progress tracker (X/20 complete)
6. ✅ Mobile responsive
7. ✅ Links to individual research pages (when they exist)
8. ✅ Dark mode compatible
9. ✅ Fast load time (static data, no API calls)

**Nice-to-haves (Phase 2):**
- Concept map visualization (D3.js or similar)
- Interactive dependency graph (which topics depend on which)
- Export as PDF (research roadmap)

---

## Technical Guidance

**Tech Stack:**
- Astro (you're already on it)
- TypeScript + React (for interactive components)
- TailwindCSS + DaisyUI (existing styling)
- No external JS libs unless needed

**File Structure:**
```
src/
  data/
    research-topics.ts       ← Research data (typed)
    concept-groups.ts        ← Concept clusters
  components/
    ResearchTopicCard.astro  ← Topic card component
    ResearchMap.astro        ← Main explorer layout
    ResearchFilter.astro     ← Filter controls
  pages/
    research/
      map.astro              ← Main page
      [topic].astro          ← Individual research detail page (for later)
```

**Astro Props Pattern:**
```astro
---
import ResearchTopicCard from '@/components/ResearchTopicCard.astro';
import { researchTopics } from '@/data/research-topics';

const filteredTopics = researchTopics; // Start with all
---

<div>
  {filteredTopics.map(topic => <ResearchTopicCard topic={topic} />)}
</div>
```

---

## QA Checklist (Before Marking Done)

- [ ] All 20 topics display correctly
- [ ] Filtering works (effort, strategic value, concept)
- [ ] Search works (matches title and keywords)
- [ ] Tier expansion/collapse works
- [ ] Progress bar calculates correctly (0/20 initially)
- [ ] Status indicators update when data changes (e.g., when Agent 2 marks research complete)
- [ ] Mobile responsive (test on phone/tablet)
- [ ] Dark mode works
- [ ] Performance: page loads in <2s (no lag on filtering/search)
- [ ] Links to research pages don't error (OK to 404 while Agent 2 is working)
- [ ] TypeScript strict mode: no `any` types, all props typed

---

## Questions for You (Agent 1)

Before starting, clarify:

1. **Scope creep:** Should I also build the individual research detail pages (`/research/<topic-id>/`), or just the map?
   - **Answer:** Just the map. Agent 2 will populate content later.

2. **Real-time progress:** Should status update in real-time as Agent 2 adds research?
   - **Answer:** No. Agent 2 will update data files; you rebuild Astro. Manual update is fine.

3. **Export/Print:** Should users be able to download/print the map?
   - **Answer:** Nice-to-have, not required. Don't block on this.

4. **Accessibility:** WCAG compliance level?
   - **Answer:** AA (standard web accessibility, no special requirements)

---

## Timeline Estimate

- Phase 1 (Core): 4–6 hours
  - Data structure + TypeScript types
  - Card component
  - Filtering + search
  - Tier navigation
  - Progress tracking

- Phase 2 (Polish): 2–4 hours
  - Mobile responsive fixes
  - Dark mode testing
  - Performance optimization
  - Animation polish

- Total: ~8 hours

---

## Success Criteria

✅ Agent 1 is done when:
1. `/research/map` page is live
2. All 20 topics are visible and filterable
3. Page is responsive, performant, accessible
4. Data structure is clean and typed (ready for Agent 2)
5. User can navigate, filter, and understand research roadmap at a glance

---

## Next Step After Completion

Once you're done:
1. Create `/research/` directory if it doesn't exist
2. Prepare for Agent 2 to start building individual research detail pages
3. Agent 2 will write research summaries and link them from the map

---

## Files to Read (For Context)

- `.arch/VISION.md` — What is zentala.eu's big picture
- `.plan/RESEARCH_TOPICS.xml` — Full research topic list
- `WRITING.md` — Voice/tone (applies to any UI copy you write)
- `CLAUDE.md` — Project conventions (TypeScript, TailwindCSS patterns)
