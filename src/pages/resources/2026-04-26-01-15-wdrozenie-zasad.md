---
layout: ../../layouts/ResourcesLayout.astro
title: "Wdrożenie: nowe /principles + sekcja health AI jako case study"
datetime: "2026-04-26T01:15"
---

**2026-04-26 01:15** | Notatka implementacyjna z wdrożenia punktów 2 i 3 z poprzedniej sesji.

---

## Co zostało zrobione

### 1. `/principles` — kompletnie przepisana

**Plik:** `src/pages/principles.astro`

Stara wersja: 4 ogólnikowe zasady (Mutual Benefit, Economies of Scale, Common Culture, Quality of Life) + długi rozjeżdżający się tekst o "Win-Win Cooperation Model".

Nowa wersja: 5 ostrych zasad, każda z osobną sekcją deep-dive:

1. **National Sovereignty Is the Foundation, Not the Obstacle** — propozycja narzędzi, nie rządu
2. **Shared Interest, Not Shared Burden** — robimy razem to, co każdy zyskuje (zdrowie AI), nie to co dla jednych jest kosztem (wspólny system emerytalny)
3. **A Direction, Not a Specification** — manifest, nie policy paper z paragrafami
4. **Integration Is Not Unification** — synteza nie narzucenie, różnorodność to zaleta
5. **Positivism as Method** — nie narzekamy, identyfikujemy low-hanging fruit, budujemy

Każda zasada ma:
- Krótki opis na karcie (jedna linijka)
- Osobną sekcję poniżej z rozwinięciem na 2-4 akapity
- W zasadzie #2 — bezpośredni link do `/vision/digital-integration` jako konkretny przykład
- W zasadzie #5 — konkretne przykłady (paczka z Chin szybsza niż list do Portugalii, polski inżynier walczący z niemiecką biurokracją, 27 systemów e-learningu w pandemii)

### 2. `/vision/digital-integration` — health AI jako sztandarowy case study

**Plik:** `src/pages/vision/digital-integration.astro`

Dodany blok wyróżniony (border-left teal) na początku sekcji "European Digital Health Care":

> *"Predictive healthcare is the clearest illustration of what kind of cooperation I propose. Every aging European society needs better early diagnosis. An AI model trained on anonymised data from 450 million Europeans is dramatically better than one trained on 5, 10 or 30 million. The model is shared. Each national health system uses it locally. **No country pays for another's care** — every country saves money and saves lives."*

Z linkiem zwrotnym do `/principles`.

To zamyka pętlę: zasada → przykład → zasada. Czytelnik trafiający z `/principles` widzi konkret. Czytelnik trafiający z `/vision/digital-integration` widzi zasadę, która to napędza.

---

## Co zostało celowo pominięte

- **Marka i tytuł serwisu** (punkt 1 z poprzedniej sesji) — autor zdecydował: zostawiamy bez zmian
- **"Żentalizm"** — nie wpisujemy nigdzie, nawet jako żart
- **Wspomnienia o snie o statku kosmicznym** — będą w przyszłej iteracji w sekcji `/about` (potwierdzone: punkt A z poprzedniej sesji)

---

## Co warto sprawdzić

1. Otwórz `/principles` — czy 5 zasad brzmi jak twoje? Czy gdzieś chcesz inny ton lub inne sformułowanie?
2. Otwórz `/vision/digital-integration` — czy wyróżniony blok health AI dobrze osadza zasadę? Czy chcesz zmienić formułę?
3. Czy zasada #5 (positivism) jest dla ciebie OK? Wymieniłem polski pozytywizm jako filozoficzne źródło — to mocne pozycjonowanie historyczne, ale konkretne

---

## Co dalej (rekomendowana kolejność)

Z dotychczasowych dokumentów `/resources/` mam materiał na następujące sesje wdrożeniowe:

1. **Strona `/about` — z otwarciem snem o statku kosmicznym** (punkt A z prośby autora). Najnaturalniejsze następne wdrożenie — dużo bogatego materiału z B1.
2. **Hero strony głównej** — argument emerytalny, pierwsza osoba, krótki bio autora. Konkretna propozycja tekstu w `/resources/2026-04-25-23-30-pytania-redaktora` punkt A1.
3. **Sekcja "Time Is Running Out" na `/support`** — usunięcie, propozycja zastąpienia w `/resources/2026-04-25-23-30-pytania-redaktora` punkt A3.
4. **Sekcje CEE w `/benefits`** — szablon w `/resources/2026-04-25-23-30-pytania-redaktora` punkt A4.
5. **Oczyszczenie kontrowersyjnych zdań w `/why` (pkt 6 i 8)** — gotowe propozycje w punkach A5 i A6.
6. **AI Review jako blurb pod hero** — konkretna propozycja w punkcie A8.
7. **PDF download w navbar** — dodać do backloga jako visual plan.

Każde wdrożenie = osobna sesja (max 1-2 strony naraz, żeby utrzymać jakość).

---

*Powiązane: [/resources/2026-04-25-23-30-pytania-redaktora](/resources/2026-04-25-23-30-pytania-redaktora) · [/resources/2026-04-26-00-30-odpowiedzi-b1-b3](/resources/2026-04-26-00-30-odpowiedzi-b1-b3)*
