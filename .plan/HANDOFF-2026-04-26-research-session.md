2026-04-26

# Handoff: zentala.eu Content Audit & Research Roadmap

## Co zrobiliśmy

Przeczytaliśmy całą dokumentację projektu. Utworzyliśmy dwa raporty XML:

### 1. `CONTENT_STRUCTURE.xml`
**Mapa zawartości projektu.** Co jest w repozytorium, jakie są główne idee, struktura argumentów.

Zawiera:
- Koncepcję projektu (manifest architekta systemów o reformie UE)
- Hierarchię argumentów (emerytura → metafora OS → Draghi → 3 filary → CEE allies)
- Mapę stron (core vision, benefits, book, ideas, articles)
- Techstack i konwencje pisania
- Status i outstanding work

### 2. `RESEARCH_TOPICS.xml`
**Propozycja 20+ research topics w 4 tierach.** Z każdym topiciem: opis, effort, strategic value, research approach.

Struktura: 4 tier'y priorytetowe:
- **TIER 1: Foundational** (5 topics) — esencjalne dla core argumentu
- **TIER 2: Pillar Support** (6 topics) — pogłębienie każdego z 3 filarów
- **TIER 3: Supporting Narratives** (5 topics) — humanizacja i credibility checks
- **TIER 4: Enrichment** (5 topics) — context i głębia (w trakcie)

---

## Stan projektu: krótko

**Projekt:** Osobisty manifest Pawła Żentały (centr.eu), polski inżynier + YouTube. 
Argument: **Europa to przestarzały OS, trzeba refaktoryzować od zera.**

**Format:** Strona internetowa (Astro + TailwindCSS), 40 MDX/MD plików, podzielona na:
- Strony wizji (homepage, /why-reforms, /benefits, /support)
- Systematyczne idee (book/ — 19 stron)
- Kategoryzowane pomysły (ideas/ — 10 kategorii)
- Artykuły z transkryptów (5 stron)

**Głos:** Pierwsza osoba, architekta systemów, bez bełkotu instytucjonalnego. 
"Zamiast 'synergies', mówisz 'to będzie twój system emerytalny'."

**Status:** Niedawno (2026-04-25):
- Przepisana hero strona (argument emerytalny)
- Dodane Central/Eastern Europe do benefits
- Rewrite trzech paragrafów w /why (fokus na personal stakes)

**Outstanding:** 62 broken links, hardcoded demo data, archive content (Polish pieces, stare iteracje).

---

## Co mnie uderzyło w projekcie

1. **Argument jest silny, ale danych brakuje.** 
   - Mówisz "demografia kryzys" ale bez Eurostat numbers. 
   - Mówisz "Draghi to mówi" ale bez głębokie analizy raportu.
   - Mówisz "Estonia zrobiła" ale bez case study.

2. **Trzy filary (Język → Cyfryzacja → Robotyzacja) to elegancko.**
   - Ale każdy pillar potrzebuje konkretów: jaki czas, jaki koszt, jaka precedent?

3. **Tone jest prawie doskonały** — jak polski inżynier mówiący wprost.
   - Ryzyko: brzmieć zbyt specjalistycznie dla szerszej publiki.

4. **Central/Eastern Europe to super idea** do rozwinięcia.
   - Mówisz: "CEE są naturalni sojusznicy."
   - Ale dlaczego? Bez danych, brzmi jak asercja.

5. **Archive jest gigantyczna** — sporo Polish content, starsze iteracje.
   - Wiele idei istnieje w /content-old/ ale nie w aktywnej navigacji.
   - Okazja do integracji.

---

## Research Topics: Propozycja 20

Stworzyliśmy **20 research topics** podzielone na 4 tier'y. Każdy z:
- Tytułem i opisem
- Effort estimate (Low/Medium/High)
- Strategic value (Why matters)
- Research approach (Gdzie szukać danych)

### TIER 1: Foundational (MUST HAVE)
Bez tego manifestu brakuje danych. 5 topics:

1. **T1.1: Europe's Demographic Crisis** — Eurostat data, projections to 2050, policy impact
   - *This is the opening argument. Without solid numbers, it sounds speculative.*

2. **T1.2: Draghi Report Deep Dive** — What does it actually say? Why shrinks GDP?
   - *This is legitimacy. Using Draghi = credible to policymakers.*

3. **T1.3: Estonia's e-Government** — 20-year case study, architecture, outcomes
   - *Proof that Pillar 2 is feasible. Also role model for Central/Eastern Europe.*

4. **T1.4: English Language Adoption** — Proficiency levels, barriers, education policy
   - *Pillar 1 depends on this. "English is easy" ≠ "Everyone can do it."*

5. **T1.5: Central/Eastern Europe Tech Readiness** — DESI, tech sectors, emigration, security, demographics
   - *Why are they natural allies? Data on what drives them.*

### TIER 2: Pillar Support (HIGH IMPACT)
Deep-dive każdy pillar. 6 topics:

- T2.1: Language as Economic Infrastructure (GDP growth, trade facilitation)
- T2.2: Blockchain in Government (use cases, challenges, precedents)
- T2.3: Payment Systems (CBDC vs. instant payments vs. stablecoins)
- T2.4: Care Robots (current maturity, timeline, cost, elderly acceptance)
- T2.5: Autonomous Vehicles for Logistics (timeline, ROI, labor displacement)
- T2.6: Manufacturing Robotics (reshoring potential, cost vs. Asia, policy enablers)

### TIER 3: Supporting Narratives (CREDIBILITY)
Humanizacja i counterargument prep. 5 topics:

- T3.1: Successful Digital Integration Case Studies (SEPA, NHS, UK Open University)
- T3.2: Where Digitalization Fails (Healthcare.gov, lessons)
- T3.3: Geopolitical Competitors (US fragmentation, China surveillance, EU position)
- T3.4: Migration as Economic Opportunity (fiscal impact, integration success factors)
- T3.5: EU's Existing Digital Initiatives (eIDAS, GDPR, DSA alignment)

### TIER 4: Enrichment (ONGOING)
Context, equity, realism. 5 topics:

- T4.1: Environmental & Digital (greening digitalization)
- T4.2: Cultural Resistance to Digital Government (privacy concerns, trust building)
- T4.3: Digital Divide and Rural Access (equity, inclusion)
- T4.4: Skills & Workforce Retraining (jobs displacement and reskilling)
- T4.5: Timeline Realism (when do these actually happen? 2030 vs 2050)

---

## Jak to wykorzystać

**Sequence:**
1. **Przeczytaj** CONTENT_STRUCTURE.xml i RESEARCH_TOPICS.xml
2. **Zdecyduj** które topics są priority (suggestion: Tier 1 + quick wins z Tier 2/3)
3. **Oceń** research topics — czy to są pytania, na które chcesz odpowiedzi?
4. **W następnej sesji** zrobisz search list (ja wezmę topics i wygeneruję konkretne Google searches / academic papers / sources)
5. **Ty ocenisz** czy sources są trafne
6. **Ja napiszę** research summaries (2-3 pages każdy)
7. **Integrujesz** do contentu na stronie

---

## Propozycja: Następna sesja

W następnej sesji mogę:
1. **Wygenerować search list** — konkretne Google queries, academic databases, sources dla każdego topica
   - Link do Eurostat datasets
   - Link do papers na arxiv/scholar.google
   - Link do govt reports (Draghi, Estonian govt docs itp)

2. **Lub** — jeśli wolisz — mogę od razu zaciągnąć data dla konkretnych topics (T1.1, T1.3, T1.4) i stworzyć research summaries

Co wolisz?

---

## Files created this session

- `CONTENT_STRUCTURE.xml` — Full content audit + conceptual map
- `RESEARCH_TOPICS.xml` — 20 research topics w 4 tierach + execution strategy
- `.plan/HANDOFF-2026-04-26-research-session.md` — Ten plik
