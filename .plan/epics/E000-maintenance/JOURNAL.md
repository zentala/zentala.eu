# E000-maintenance — Journal

## Session 2026-04-26

### Project audit & .plan bootstrap

Przejrzałem starą strukturę tasków (TODO.md, TODO_CLEANUP.md, IDEAS.md, EU_WEBSITE_IMPROVEMENTS.md) i przeprowadziłem audyt co zostało zrobione.

**Ustalenia:**

**Algolia (punkt #6 w EU_WEBSITE_IMPROVEMENTS.md):**
- Status oznaczony jako ✅ "Zaimplementowane (podstawa)"
- Faktyczny stan: `algoliaClient.ts` zawsze używa `mockSearchClient` — prawdziwy klient Algolii NIE jest inicjalizowany mimo obecności env varów
- Pakiety zainstalowane: `@algolia/client-search`, `algoliasearch`
- Skrypt indeksujący istnieje: `npm run index-algolia`
- Blokada: 3 transkrypty przekraczają limit 10KB (lista w `todo_algolia.md`)
- Wniosek: integracja jest połowiczna — UI wyszukiwarki istnieje, ale backend zwraca zawsze puste wyniki

**Cytaty ekspertów / Testimonials (punkt #7):**
- Status oznaczony jako ✅ "Zaimplementowane (makieta)"
- Faktyczny stan: komponent `Testimonials.astro` istnieje i jest importowany w `index.astro`, ale NIE jest renderowany na stronie głównej (import bez użycia)
- Używany tylko w `/ui` jako demo komponentu
- Nie ma żadnych prawdziwych cytatów ekspertów

**Dane statystyczne Eurostatu (punkt z kolejnych kroków):**
- Faktyczny stan: `InteractiveSection.astro` ma hardcoded dane z komentarzem "normally these would come from an API" (linia 26) i notatką na dole "Data is for illustrative purposes"
- `InteractiveSection` jest importowany w `index.astro` ale też NIE jest renderowany na stronie (tylko import)

Wszystkie otwarte zadania przeniesione do `.plan/BACKLOG.md`.
Archiwum starych plików TODO pozostaje w root repo.

## Session 2026-04-27 (batch7)

### Research Batch 7: T4.1, T4.2, T4.3 — completed and merged

3 Tier 4 research files dispatched as parallel agents, written, committed, merged to dev:
- `t4-1-green-digitalization.md` — 3497 words, 8/8 questions answered
- `t4-2-digital-trust.md` — 3842 words, 9/9 questions answered
- `t4-3-digital-divide.md` — 4620 words, 8/8 questions answered

Commit: research: merge Batch 7 (green digitalization, digital trust, digital divide)

Progress: 20 of 23 research files done. Remaining: Batch 8 (T4.4a, T4.4b, T4.5).

---

## Session 2026-04-27

### E000-T01: research-map 5 fixes — weryfikacja i zamknięcie

Wszystkie 5 fixów z `TASK-research-map-fixes.md` wdrożone w poprzedniej sesji (commit `6f3aafc`):
- Fix 1: stale closure w chip remove handler
- Fix 2: usunięcie `topics[]` z concept-groups.ts, dodanie `getTopicsForConcept()`
- Fix 3: pokazywanie wszystkich 14 konceptów (usunięto `slice(0,8)`)
- Fix 4: 2 nowe testy dla concept filtra
- Fix 5: podział 563-liniowego map.astro na 3 pliki

Testy: 36/36 passing. Task file usunięty, wpis w DONE.md.
