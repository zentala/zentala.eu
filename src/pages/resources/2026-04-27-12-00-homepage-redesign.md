---
layout: ../../layouts/ResourcesLayout.astro
title: "Homepage redesign — propozycje + preview porównawczy"
description: "Liczby pod hero, filary z konkretami, FAQ ofensywny, sekcja 'czego nie proponuję', trzy warianty Benefits. Wszystko podgląd w /resources/preview/homepage."
datetime: "2026-04-27T12:00"
---

**2026-04-27 12:00** | Po sesji 2026-04-26 plan dalszych prac wymienił 7 otwartych pozycji. Ten dokument zbiera propozycje konkretnej zawartości na stronę główną w oparciu o 28 plików researchu. Live preview ze switchami: [`/resources/preview/homepage`](/resources/preview/homepage).

---

## Co się dzieje na stronie głównej

Status sekcji wg projektu:

| # | Sekcja | Status | Akcja |
|---|---|---|---|
| 1 | Hero (argument emerytalny) | KEPT | nie ruszamy |
| 2 | **Diagnoza w 4 liczbach** | NEW | pod hero, dane z researchu |
| 3 | AI Review blurb | KEPT | nie ruszamy |
| 4 | Quick links bar | KEPT | nie ruszamy |
| 5 | Core Pillars (3 filary) | CHANGED | dopisanie + SVG icons (treść główna bez zmian) |
| 6 | Why Digital Reform | KEPT | nie ruszamy |
| 7 | **CEE focus** | NEW | krótka sekcja, adresuje grupę docelową |
| 8 | Benefits cards | CHANGED | trzy warianty A/B/C do wyboru |
| 9 | Equitable Principles | REMOVED | dubluje `/principles`, usuwamy |
| 10 | **What I am not proposing** | NEW | 4 odrzucenia, rozbraja zarzuty przed FAQ |
| 11 | FAQ | CHANGED | przepisany z defensywnego na ofensywny (A7) |
| 12 | Author + Newsletter | KEPT | nie ruszamy |

---

## Sekcja 2 — Diagnoza w 4 liczbach (NEW, pod hero)

Kolejność jest świadoma: problem demograficzny → konsekwencja (deficyt opieki) → diagnoza (luka inwestycyjna) → dowód że metoda działa (Estonia). Każda liczba ma plik źródłowy w `src/content/docs/research/`.

| Liczba | Etykieta | Co mówi | Źródło |
|---|---|---|---|
| **1.46** | EU fertility rate | Próg zastępowalności = 2.1. Nie produkujemy wystarczająco Europejczyków, żeby utrzymać system. | t1-1 |
| **4.1M** | missing care workers by 2030 | Pokolenie, które będzie potrzebowało opieki, nie będzie miało komu jej zapewnić — chyba że zautomatyzujemy teraz. | t2-4a |
| **€800B/yr** | EU investment gap vs US | Draghi: tyle Europie brakuje rocznie, żeby tylko nie zostać w tyle. | t1-2 |
| **€2B/yr** | Estonia digital savings | Kraj 1.3M ludzi tyle oszczędza dzięki cyfryzacji. Skalowanie metody na 27 krajów = oczywista szansa. | t1-3 |

**Ton:** ostatnia liczba (Estonia) jest pozytywna i zamyka diagnozę szansą, nie problemem. To rama: "robi się to, da się to robić, my możemy też".

---

## Sekcja 5 — Core Pillars (CHANGED)

**Co zostaje bez zmian:** trzy karty (Language / Digital / Robotic), kolejność, kolory, główny opis, link do `/vision/...`.

**Co dodajemy:**
1. **SVG line icons** zamiast emoji 🗣️💻🤖 — pliki już są w `src/assets/icons/` (language, digital, robot).
2. **Sub-line z konkretem** pod głównym opisem — jedno zdanie z liczbą lub mocnym faktem z researchu, w ramie "the opportunity":

| Filar | Dopisek (the opportunity) | Źródło |
|---|---|---|
| Language Integration | €507B/year is the upside of one shared working language across the single market — that is the prize, not a punishment for anyone. | t2-1 |
| Digital Integration | Estonia proves it works: 99% of services online, €2B/year saved. The opportunity is to apply that method across 27 countries — including Poland, where digital court reform alone would unblock years of backlog. | t1-3 |
| Robotic Reindustrialization | The MASAI study shows AI radiology detects 28% more cancers than human-only screening. Robotization is not "replacing humans" — it is the only way to keep services running when half the workforce retires. | t2-4b |

**Ton:** unikamy "X jest do tyłu" — zawsze "X to nasza wspólna szansa". Polska wymieniona jako przykład gdzie cyfryzacja sądownictwa rozblokuje rzeczywiste backlogi (nie jako "Polska musi nadgonić Estonię").

---

## Sekcja 7 — CEE focus (NEW)

Krótka sekcja po `Why Digital Reform`. Adresuje grupę docelową bezpośrednio (z `WRITING.md`: Polska, kraje bałtyckie, Ukraina, Rumunia).

**Intro:** "I am writing as a Polish engineer, but the manifesto is written for everyone who will retire in the next 30 years. The reason CEE matters first is straightforward: the demographic curve is steeper here, the security threat is at the border, and the digital base — Estonia, Polish tech, Czech industry — is already strong enough to lead."

**Trzy bullety** (kraj/region + jedno zdanie):
- **Polska** — emigracja 2M+, cyfryzacja sądów i reindustrializacja jako różnica między funkcjonalnym a wydrążonym państwem 2050
- **Bałtyckie + Ukraina** — €700 dron neutralizujący €5M czołg = nowa ekonomia obrony, EU autonomy zaczyna się tu
- **Trójmorze 2.0** — korytarz Bałtyk-Adriatyk jako koalicja chętnych, gdy Berlin/Paryż się ociągają

CTA → `/benefits`.

---

## Sekcja 8 — Benefits, trzy warianty do wyboru

**Variant A — CEE focus (4 karty)**
Tylko docelowa publiczność z `WRITING.md`: Polska · Bałtyckie+Ukraina · Trójmorze 2.0 · Skandynawia. Każda karta z konkretem. Najmocniejszy fokus, najprostszy układ.

**Variant B — per persona (3 karty)**
- For citizens — emerytura która działa w 2050, AI healthcare, brak kolejek
- For builders & businesses — €507B/yr unlocked, jeden rynek, one regulatory surface
- For nation-states — suwerenność na mocniejszym fundamencie, wspólna infrastruktura defensywna

Najbardziej narracyjny wariant. Mówi do trzech różnych typów czytelników wprost.

**Variant C — 12 kart z liczbami**
Obecne 12 kart, ale każda dostaje jedną liczbę z researchu. Mniej generyczne, więcej konkretu, ten sam zakres co dziś.

**Rekomendacja:** A lub B. C jest najmniej radykalna ale zachowuje bezwład starej wersji.

---

## Sekcja 10 — What I am not proposing (NEW)

Cztery odrzucenia z planu A7 + kontekstu sesji:

1. **Not: Replacing national languages.** Polski/francuski/niemiecki zostają oficjalne. Angielski jako drugi layer, jak w Estonii.
2. **Not: A federal European super-state.** UE zostaje unią państw narodowych. Dzielimy *layer pod państwem* — infrastrukturę, standardy, robotykę.
3. **Not: A common pension system.** Każdy kraj zachowuje swój system. Budujemy *infrastrukturę* która sprawia, że jakikolwiek system emerytalny jest realny przy 2 pracujących na 1 emeryta.
4. **Not: Cultural unification.** Kultury Europy to atut, nie problem. Manifest zakłada że narody zostają odrębne i dumne.

Sekcja idzie **przed FAQ** — rozbraja zarzuty zanim padną w pytaniach.

---

## Sekcja 11 — FAQ ofensywny (A7)

**Zasada:** każde pytanie przeformułowane z defensywnego na ofensywne — autor sam stawia pytania, atakuje, nie tłumaczy się.

| OLD (defensywne) | NEW (ofensywne) |
|---|---|
| Why do we need yet another European integration project? | Why is this different from previous EU integration plans? |
| Isn't English as a second language unfair? | Isn't a second official language a threat to national languages? |
| How will these changes benefit ordinary citizens? | What does this mean for me when I retire in 25 years? |
| What if Germany or other powerful countries don't agree? | What if Berlin and Paris drag their feet? |
| How would this be funded? | Where does the money come from? |
| How long would implementation take? | Don't we have 20 years to figure this out? |
| What are the main challenges? | What is the biggest risk if we do not act? |

Pełne treści odpowiedzi w `/resources/preview/homepage` (toggle FAQ → NEW). Każda odpowiedź:
- Pierwsza zdanie = teza (nie usprawiedliwienie)
- Drugie zdanie = mechanizm (jak to działa)
- Trzecie zdanie = konkret z researchu lub dowód

---

## Co dalej

1. **Przejdź na live preview:** [`/resources/preview/homepage`](/resources/preview/homepage)
2. Klikaj OLD/NEW per sekcja, wybierz wariant Benefits A/B/C
3. Po decyzji — wdrożenie w `src/pages/index.astro` jako epic E002

**Plan epica:** `.plan/epics/E002-2026-04-27-homepage-redesign/`

---

*Powiązane: [/resources/2026-04-26-04-00-plan-dalszych-prac](/resources/2026-04-26-04-00-plan-dalszych-prac) · [/resources/2026-04-25-22-13-strategia-manifestu](/resources/2026-04-25-22-13-strategia-manifestu) · [WRITING.md](/) · [RESEARCH_INDEX.md](/)*
