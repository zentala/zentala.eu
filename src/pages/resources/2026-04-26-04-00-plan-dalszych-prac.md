---
layout: ../../layouts/ResourcesLayout.astro
title: "Plan dalszych prac — backlog uporządkowany"
description: "Pełny przegląd: co zrobione, co z dokumentu redaktora zostało, co nowe się pojawiło w rozmowie. Cztery warianty kolejności + 5 pytań do decyzji autora."
datetime: "2026-04-26T04:00"
---

**2026-04-26 04:00** | Pełny przegląd: co jest zrobione, co zostało, co warto dodać. Do twojej decyzji co i w jakiej kolejności.

---

## Część I — Status obecny

### Już zrobione (przeczytaj REVIEW.md jeśli jeszcze nie potwierdzone)

| Element | Status | Plik |
|---|---|---|
| `WRITING.md` + `.arch/VISION.md` + `CLAUDE.md` linkowanie | ✅ wdrożone | korzeń projektu |
| `/resources/` — prywatna sekcja edytorska | ✅ działa | `src/pages/resources/` |
| `research/` folder na materiały źródłowe | ✅ stworzony | `research/` |
| `/principles` — 6 zasad, kultura przeformułowana, #6 build-vs-administer | ✅ wdrożone, **w REVIEW** | `src/pages/principles.astro` |
| `/vision/digital-integration` — health AI jako case study zasady #2 | ✅ wdrożone | `src/pages/vision/digital-integration.astro` |
| `/about` — sen o statku kosmicznym + cała narracja osobista | ✅ wdrożone, **w REVIEW** | `src/pages/about.astro` |
| `/` strona główna — nowy hero + AI Review | ✅ wdrożone, **w REVIEW** | `src/pages/index.astro` |
| `/why` — 3 chirurgiczne edycje (plunder/respect/euthanasia) | ✅ wdrożone, **w REVIEW** | `src/content/docs/why.mdx` |
| `/support` — przepisane "Time Is Running Out" | ✅ wdrożone, **w REVIEW** | `src/content/docs/support/time-is-running-out.mdx` |
| `/benefits` — sekcja CEE+Skandynawia nad selektorem | ✅ wdrożone, **w REVIEW** | `src/pages/benefits.astro` |

7 pozycji w `REVIEW.md` czeka na twoje przeczytanie i potwierdzenie.

---

## Część II — Pozostałe pozycje z edytorskiego dokumentu (`/resources/2026-04-25-23-30-pytania-redaktora`)

### A7 — FAQ przepisany z defensywnego na asertywny

**Status:** niewdrożony.
**Plik:** `src/components/FAQ.astro` (lub miejsce w którym FAQ jest renderowany)

**Co teraz:** FAQ na stronie głównej zaczyna się od pytania sceptyka ("Why do we need yet another EU integration project?"), odpowiedzi brzmią obronnie.

**Co proponuję:** przepisanie 5 pytań na takie, które autor sam stawia. Przykłady (z poprzedniej sesji):
- "Why is this not 'just another' EU integration project?"
- "Isn't it too late for Europe to catch up to America and China?"
- "What if Germany or France don't agree?"
- "Aren't you naïve to propose English as a second official language?"
- (jeszcze 1-2 do dopracowania)

Każde pytanie stawia autora w pozycji ofensywnej, nie obronnej. Treść pytań i odpowiedzi mam już naszkicowaną w dokumencie redaktora pkt A7.

**Rozmiar:** ~1 godzina pracy. Jeden plik. Niski risk.

---

### A9 — Stałe linkowanie do YouTube

**Status:** niewdrożony, **bo nie ma jeszcze kanału YouTube.**

**Co proponuję:**
- Dopóki kanału nie ma — nic nie linkujemy publicznie
- Gdy kanał powstanie — dodać ikonę YouTube w `Header.astro` lub `Footer.astro` + wzmianka na `/about`

**Decyzja autora:** odłożyć do momentu, w którym kanał YouTube faktycznie istnieje i ma chociaż 2-3 filmy.

---

### A10 — PDF download w navbarze

**Status:** niewdrożony, większy projekt techniczny.

**Co trzeba zrobić:**
1. Wybrać generator PDF: opcje to `astro-pdf-generator`, `puppeteer` skrypt budujący PDF z subset stron, lub statyczny PDF generowany ręcznie
2. Zdecydować zakres: cały serwis czy tylko: Hero + Principles + About + key Why points?
3. Zaprojektować layout do druku (typografia, marginesy, paginacja)
4. Dodać ikonę PDF + przycisk pobierania w `Header.astro`

**Rozmiar:** to duży projekt — 4-8 godzin pracy. Sugestia: traktować jako osobny epic, nie wsuwać między rewrite'y. Dodać do backlogu, zająć się gdy serwis tekstowo jest skończony.

---

## Część III — Tematy odkryte w rozmowie, jeszcze nie zaimplementowane

### 1. Aurora — wspólny koszyk walut zamiast Euro

**Skąd:** twoja odpowiedź na pytanie B3.

**Co warte zrobienia:**
- Sekcja na `/vision/digital-integration` lub `/vision/financial-reforms` (jeśli istnieje) o Aurorze jako alternatywie dla Euro
- Pozycjonowanie: nie wymiana Euro, ale warstwa nad walutami narodowymi — koszyk dla rozliczeń międzynarodowych
- Przykład w principles #5 (Additive Reform) już o tym wspomina; warto rozwinąć w osobnym miejscu

**Rozmiar:** 1-2 godziny. Jedna sekcja na istniejącej stronie + krótka notatka w blockchain archives.

---

### 2. Cyfrowa demokracja, blockchain voting, sąsiedzkie potwierdzanie

**Skąd:** twoja odpowiedź B3 — bardzo bogaty wątek.

**Co warte zrobienia:**
- **Czy w ogóle wpisywać do manifestu?** Powiedziałeś że to może być osobny temat
- Jeśli tak — osobna sekcja na `/vision` lub nowa strona `/vision/civic-blockchain` lub `/vision/digital-democracy`
- Pomysł: blockchain dla dokumentów państwowych (Kraków = spalone archiwum), cyfrowe głosowania, sąsiedzkie potwierdzanie tożsamości jako alternatywa dla urzędnika
- Sformułowanie: "marsz przez instytucje obywatelskie" — można obywatelsko, bo system cyfrowy z natury jest opresyjny

**Rozmiar:** 2-3 godziny — to nowy duży temat. Czy chcesz to teraz, czy zostawić dla YouTube?

**Pytanie do ciebie:** włączamy do manifestu czy zostawiamy jako osobny temat / film YouTube?

---

### 3. Trójmorze 2.0 jako osobna sekcja

**Skąd:** sekcja w FAQ o "Intermarium 2.0" + twoja rozmowa o CEE.

**Co warte zrobienia:**
- Idea Trójmorza zasługuje na własną stronę, nie na ukrycie w FAQ
- Można dodać `/vision/trimarium` lub osobną sekcję w `/benefits` "Where the manifesto lands first"
- Bazuje na materiale z `/resources/2026-04-25-22-27-cee-sojusznicy`

**Rozmiar:** 1-2 godziny. Albo nowa strona, albo wzbogacenie istniejącej sekcji CEE w `/benefits`.

---

### 4. Konkretne przykłady: sąd (mama), ARTC Singapur

**Skąd:** twoja odpowiedź B2.

**Co warte zrobienia:**
- Przykład sądu (mama, sekretarz/protokolant, AI transcription, blockchain dokumentów) — żywy przykład biurokracji do reformy
- ARTC Singapur jako wzór europejskich showroomów robotyki dla edukacji, biznesu, urzędników
- Te dwa przykłady mogą trafić na różne strony:
  - Sąd → `/vision/digital-integration` jako case study
  - ARTC → `/vision/robotic-reindustrialization` jako konkret implementacji

**Rozmiar:** 1 godzina łącznie. Dwa krótkie inserty w istniejące strony.

---

### 5. Eksport cyfrowego państwa — Afryka, Gruzja, Białoruś

**Skąd:** twoja odpowiedź B2 — pomysł że nasze rozwiązania możemy eksportować jako "miękki wpływ".

**Co warte zrobienia:**
- Sekcja na `/vision` lub `/principles` jako rozszerzenie zasady #2 (Shared Interest)
- Pozycjonowanie: "europejska cyfrowa infrastruktura jako miękka siła"
- Konkrety: Afryka jako odbiorca, Szwajcaria jako host serwerów (góry), Białoruś po upadku reżimu jako pierwszy klient po-postsowiecki

**Rozmiar:** 1 godzina. Jedna sekcja, lub akapit w istniejących treściach.

---

### 6. FAQ — przepisanie defensywne → asertywne (A7 z dokumentu redaktora)

Patrz wyżej (Część II A7).

---

### 7. Sekcja "Granice mojej propozycji" — czego NIE proponuję

**Skąd:** wcześniejsza dyskusja, gdzie powiedziałeś że nie proponujesz wspólnego systemu emerytalnego itp.

**Status:** częściowo wpisane do `/principles` zasady #2 i #3. Ale można rozważyć osobną sekcję na stronie głównej lub `/about`: "What I am not proposing" — krótka lista 3-4 rzeczy. To rozbraja typowe zarzuty z góry.

**Rozmiar:** 30 minut. Jedna sekcja, krótka.

---

## Część IV — Tematy strategiczne / długoterminowe

### Backlog visionary (nie do tego sprintu)

- Blog publiczny / dział "Notes" — twoja odpowiedź B5 mówi że chcesz, ale niepewnie czy nie zastąpi tego X (Twitter)
- Konfiguracja Newslettera / mailing list management
- Tłumaczenia kluczowych stron na języki bałtyckie / rumuński / ukraiński (twój pomysł z poprzednich sesji)
- Konfiguracja Patreon benefitów (przepisanie ze startupowego stylu na manifest)
- Kanał YouTube — założenie, pierwsze 3 filmy oparte o `/about`, `/principles`, `/why`
- Strona `/research` z materiałami źródłowymi (publicznie dostępne, jeśli chcesz)

Te rzeczy wykraczają poza pisanie tekstu — wymagają decyzji organizacyjnych. Sugestia: zostawiamy je do osobnej sesji "operations".

---

## Część V — Sugerowana kolejność (do twojej decyzji)

### Wariant A — domknięcie tekstowe manifestu (rekomenduję)
Skupiamy się na uzupełnieniu pisemnej części serwisu, żeby był spójny i kompletny. Następne sesje:

1. **Sesja 3:** A7 (FAQ rewrite) + sekcja "Co NIE proponuję" — średnie, dwie rzeczy razem (~1.5h)
2. **Sesja 4:** Konkretny przykład sądu w `/vision/digital-integration` + ARTC w `/vision/robotic-reindustrialization` — żywe konkrety (~1h)
3. **Sesja 5:** Aurora — sekcja w `/vision/financial-reforms` lub `/vision/digital-integration` (~1.5h)
4. **Sesja 6:** Trójmorze 2.0 — nowa strona lub rozszerzenie CEE w `/benefits` (~1.5h)
5. **Sesja 7:** Eksport cyfrowego państwa — krótka sekcja (~1h)
6. **Sesja 8 — przegląd końcowy:** Czytamy całość serwisu, robimy ostatnie szlify, zamykamy `REVIEW.md`

Razem ~7-8 godzin pracy rozłożonej na 6 sesji.

### Wariant B — duże tematy najpierw
1. Cyfrowa demokracja jako duży nowy temat (decyzja: w manifeście czy nie)
2. Aurora jako duży nowy temat
3. Eksport cyfrowego państwa
4. Reszta drobiazgów na końcu

### Wariant C — operacyjny
Stop pisania tekstu, zacząć kanał YouTube. Pierwsze filmy oparte o już istniejące strony. Wracamy do tekstu po nagraniu pierwszych 3 odcinków.

### Wariant D — własny porządek
Powiedz co chcesz robić w jakiej kolejności. Plik wyżej daje ci wszystkie elementy do wyboru.

---

## Pytania do twojej decyzji

1. **Cyfrowa demokracja / blockchain civic** — wpisujemy do manifestu jako sekcja, czy odkładamy na YouTube?
2. **Trójmorze 2.0** — osobna strona, czy rozszerzenie sekcji CEE w `/benefits`?
3. **Sekcja "Co NIE proponuję"** — chcesz to wyraźnie wyłożyć, czy zostawiamy rozproszone w `/principles`?
4. **Wariant kolejności:** A, B, C czy D?
5. **PDF download i kanał YouTube** — backlog czy bliższa kolejność?

Po twoich odpowiedziach: aktualizuję ten plan, dopiero wtedy wdrażamy.

---

*Powiązane dokumenty: [/resources/2026-04-25-23-30-pytania-redaktora](/resources/2026-04-25-23-30-pytania-redaktora) · [/resources/2026-04-26-00-30-odpowiedzi-b1-b3](/resources/2026-04-26-00-30-odpowiedzi-b1-b3)*
