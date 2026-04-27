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

---

## Session 2026-04-27 (E000-T02)

### Lint cleanup — astro check 33 hints → 2

User wybrał plan B (czystka bez Algolia/Eurostat decyzji). Worktree
`feat/E000-T02-lint-cleanup`, 18 plików zmienionych, atomic commit `6aad746`,
merge `0514bdc`.

**Co zostało zrobione:**
- 5 unused imports w `index.astro` (Testimonials, InteractiveSection, RobotIcon,
  DigitalIcon, LanguageIcon)
- 4 unused SVG icons w `index.astro` (ArrowRightIcon, GlobeIcon, QuestionIcon, BookIcon)
- `CardColor` type + `isProduction` w `ui/index.astro`
- `Card`/`CardGrid` w 3 vision pages
- `searchClient`/`searchIndex` w `search.astro` (frontmatter + `<script>`),
  prefix `_` na unused mock fn args
- `getEntry` w `transcripts/[...slug].astro`
- Dodana dyrektywa `is:inline` w `docs/book/principles.astro`
- `Card`/`CardGrid` w `content/docs/all.mdx`
- Komponenty: AlgoliaSearch.astro `buttonText`, Card.astro `lightModeColors`+`lightColors`,
  EuropeMap.astro `defaultCountries` (block-comment), FAQ.astro `index`→`_index`,
  GradientSection.astro `rounded`+`roundedClass`, Header.astro `EuLogo`,
  TimelineContainer.astro `children` destructure

**Decyzje podczas pracy:**
- Komentowanie zamiast usuwania (wybór usera) — pattern `TODO(E000-T02): unused — re-enable when ...`
- `support.astro` `textContent` w inline `onclick` — poza scope (wymaga refactora na
  `addEventListener`, osobna decyzja)
- BACKLOG "Technical Debt" przepisany — stare pozycje (frameborder, EUStatisticsChart,
  isDevelopment, WhyDigitalReform vars) były **już clean** — astro check ich nie flaguje;
  były to false-positives z TODO_CLEANUP.md sprzed czasu

**Findings:**
- BACKLOG mocno nieaktualny — astro check znalazł rzeczy których BACKLOG nie wymieniał
  (4 ikony w index.astro, 7 unused vars w komponentach, TimelineContainer slot pattern)
- Worktree build wyrzuca warning "Could not find Sharp" — to artefakt środowiska worktree
  (sharp w głównym `node_modules`, nie w worktree's). Build exit 0, pages OK.

**Następne kroki (z planu A — odłożone):**
- Dyskusja Algolia: zostawiamy mock czy podłączamy? Zależnie od decyzji odkomentować
  search.astro stubs.
- Dyskusja Eurostat: live data czy zostawiamy hardcoded sample? `InteractiveSection` na
  home jest zakomentowany — najpierw decyzja czy ten komponent w ogóle wraca.

---

## Session 2026-04-27 (E000-T03)

### Hide mock search from navbar + A3 refactor + backlog cleanup

User decyzja po E000-T02: skoro Algolia jest mock (zwraca puste wyniki), search nie powinien
być w navbarze — straszy użytkowników. Plus A3 (`support.astro` inline `onclick`)
refactor, bo to ostatnie 2 hinty w `astro check`.

**Worktree** `feat/E000-T03-hide-mock-search`, atomic commit `5e300a2`, merge `081e98f`.

**Co zostało zrobione:**
- `Header.astro`: import `AlgoliaSearch` + 2 użycia (desktop nav + mobile menu) zakomentowane
  z TODO markerami pokazującymi jak przywrócić
- `src/lib/algoliaClient.ts`: prominent header comment dokumentujący mock-only state
  i 5-krokową procedurę włączenia prawdziwego Algolia
- `support.astro`: button id="copy-url-btn", inline `onclick` usunięty, istniejący
  `<script>` na dole pliku zaktualizowany — celował w stary selektor `button[onclick^=...]`
  który po refactorze już nie istniał (chytry bug — gdyby skipnąć update, button
  przestałby działać po refactorze!)
- BACKLOG: nowa sekcja "Mock features hidden from UI" z pozycją Algolia. Sekcja
  "Data & Integrations" przepisana — dodane info że Eurostat (`InteractiveSection`)
  jest *currently NOT used in production*, decyzja czy ten komponent w ogóle wraca
  jest blokerem dla Eurostat. Sekcja "Technical Debt" zamknięta — 0/0/0 baseline.

**Decyzje:**
- `/search` page i sitemap entry zostają (user explicit)
- Komentowanie zamiast usuwania (kontynuacja patternu z E000-T02)
- A3 refactor preferowany nad zostawieniem inline-onclick — zysk: clean baseline +
  CSP-friendly + identyczne UX

**Findings:**
- W `support.astro` na dole był już `<script>` z `addEventListener` celujący w stary
  selektor — czyli button miał DUBLOWANY handler (inline `onclick` + `<script>`).
  Po usunięciu inline, script przestałby działać bo selektor `button[onclick^=...]`
  nic by nie znalazł. Złapane w trakcie refactora i naprawione.
- Po E000-T02+T03: **0 errors / 0 warnings / 0 hints** w `astro check` (91 plików).

**Następne (z planu A — wciąż otwarte):**
- Algolia: do dyskusji czy w ogóle przywracamy. Jeśli tak — fix oversized transcripts +
  real client init. Jeśli nie — usunąć całą infrastrukturę.
- Eurostat: blokowane decyzją czy `<InteractiveSection>` wraca na home.
