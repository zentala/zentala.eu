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
