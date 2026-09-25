# E006 — prezentacja dla Pawła: design, standard redakcyjny, architektura informacji

Data: 2026-09-25 · Plan: [`PLAN.md`](PLAN.md) · Raporty fali 1: [`R1`](../../reports/2026-09-25-e006/R1-design-sources.md) ·
[`R2`](../../reports/2026-09-25-e006/R2-components-and-patterns.md) · [`R3`](../../reports/2026-09-25-e006/R3-duplication-concepts-graph.md) ·
[`R4`](../../reports/2026-09-25-e006/R4-editorial-audit.md) · Dokument IA: [`.plan/INFORMATION-ARCHITECTURE.md`](../../INFORMATION-ARCHITECTURE.md)

## TLDR

Treść już jest (20 rozdziałów, manifest, strona zarzutów), ale szkielet wokół niej jest
poszarpany: te same argumenty pisane w całości w 4–5 miejscach, nazewnictwo, które robi
z „Book: Choosing People" książkę o wybieraniu ludzi, brak słownika pojęć, dwa adresy na
każdy rozdział. Fala 2 dostarcza **trzy standardy-bramki**: `DESIGN.md` (jak strona ma
wyglądać), `src/content/AGENTS.md` (jak dyktowanie staje się tekstem) i dokument
architektury informacji (jak strona jest poukładana). **Decyzja potrzebna od Ciebie:**
zatwierdzić albo poprawić decyzje D1–D14 z dokumentu IA i odpowiedzieć na dziesięć pytań
autorskich z R4 — dopiero potem fala 3 dotyka stron. Fala 3 to 53 punkty w 14 zadaniach.

## Blok 0 — trzy dokumenty fali 2 jako bramki

| | Kontekst | Problem | Rozwiązanie | Po zmianie |
|---|---|---|---|---|
| `DESIGN.md` (D1, pisany równolegle) | strona ma tokeny (`_tokens.scss`), ale żadnej gramatyki układu; 4 warianty karty, 3 timeline'y, miara 114–130 znaków w linii (E004) | agent buduje stronę „na oko" i za każdym razem inaczej | kontrakt wizualny wg spec Google `design.md`: tokeny + 5 wzorców układu + kontrakt każdego komponentu (kiedy użyć / kiedy NIE) | każda strona da się zbudować bez decyzji smakowych; nowy komponent nie może ominąć kontraktu |
| `src/content/AGENTS.md` (D2, pisany równolegle) | rozdziały pisane z dyktowania bez standardu: 12 z 20 dobrych, reszta z formułką, badania agenta w Twojej pierwszej osobie (`safeguards.md`, `steering.md`) | czytelnik nie odróżni Twojej tezy od propozycji agenta — to największe ryzyko wiarygodności na stronie (R4) | standard redakcyjny: głos, co redaktor zostawia/tnie/pyta, reguła proweniencji („zaproponowane" ≠ „ja proponuję") | żaden rozdział nie powstaje ani nie jest przepisywany bez tego standardu (decyzja z `decisions.jsonl`) |
| `INFORMATION-ARCHITECTURE.md` (D3, ten dokument) | 73 węzły, 229 krawędzi, 7 duplikatów, 10 argumentów pisanych w całości po kilka razy, generator cieni-tras | „architektura informacji jest niespójna, poszarpana" | 14 ponumerowanych decyzji: kształt strony, nazewnictwo, ontologia, jeden argument = jeden dom, tooltipy, mapa strony, sprzątanie tras | każdy temat ma jedno miejsce, każdy rozdział widać z `/` w dwa kliknięcia dwiema drogami |

**Punkty:** 13 (fala 2) · **Importance: High** · **Decyzja:** czy te trzy dokumenty są bramką,
której fala 3 nie omija — tak/nie.

## Blok 1 — nazewnictwo: co to jest „Book" (D3, D4, D5)

| | |
|---|---|
| **Kontekst** | Rozdziały żyją pod `/book/<slug>`, w JSON-LD jako `Book`/`Chapter`; nagłówek indeksu „Vision Book", okruszki „Home › Book › Choosing People". Grupowanie na `/book` siedzi w ręcznej tablicy `GROUPS` w `book/index.astro:17-51` — nowy rozdział jest niewidoczny, dopóki ktoś go tam nie dopisze. |
| **Problem** | Twoje słowa: „Book: Choosing People wygląda jak książka o Choosing People; może to powinny być tagi albo topic". Dwa rozdziały (`eGov-vison`, `eGov-challenges`) już zniknęły z indeksu przez różnicę wielkości liter między tablicą a slugiem Astro. |
| **Rozwiązanie** | Adresy i JSON-LD **zostają** (zero przepinania 150 linków). Zmienia się tylko etykieta dla czytelnika: **„Chapters"** w nawigacji, okruszkach, stopce. Klasyfikacja idzie do frontmattera jako dwie osie: `layer` (frame · language · digital · robotics · path — gdzie rozdział siedzi) i `kind` (argument · proposal · playbook · objections · manifesto — co dostaniesz po kliknięciu) plus `order`. `/book` grupuje z `layer`; rozdział bez `layer` ląduje w widocznym „Unsorted". |
| **Po zmianie** | Nad tytułem rozdziału: „How we get there · Proposal". Tytuł karty: „Choosing People — EU Reform Vision", bez prefiksu. Indeks, `/vision`, mapa strony i `llms.txt` czytają to samo pole. |
| **Alternatywy** | „Essays" — kłóci się z 13 rozdziałami, które same o sobie mówią „this chapter"; „Arguments" — nie pasuje do playbooka i mapy safeguardów; rename trasy na `/arguments` (R3 opcja 2) — L nakładu, 301 przez już istniejące 301, utrata SEO `Book`/`Chapter`. |
| **Zyski / Wady / Ryzyka** | + najtańsza poprawka trafiająca w realną skargę; + osie widoczne dla każdej strony; − dwa nowe pola w 33 plikach (jednorazowy przebieg); ryzyko: „Chapters" nie testowane na czytelniku. |
| **Punkty + Importance** | T01 3 + T02 3 + T03 3 = **9 · High** |
| **Decyzja** | Etykieta „Chapters" — tak / wolisz inne słowo? Pięć wartości `kind` (bez `glossary` — słownik jest kolekcją, nie rodzajem rozdziału) — tak/nie. |

## Blok 2 — ontologia: słownik pojęć zamiast tagów (D6, D7)

| | |
|---|---|
| **Kontekst** | `tags` to wolny tekst: `direct democracy` i `direct-democracy` są dwoma tagami na `/tags` — stronie, do której nic nie linkuje. „Digital state" na `/vision` i „total state" w manifeście to ten sam system i żadna strona tego nie mówi. |
| **Problem** | Chcesz „mapę pojęć — klikasz w pojęcie i jest popup jak na Wikipedii"; bez jednego źródła definicji popup będzie kłamał albo dryfował od rozdziału. |
| **Rozwiązanie** | Nowa kolekcja `src/content/glossary/` — jeden plik na pojęcie: nazwa, aliasy, definicja ≤ 2 zdania **wyjęta ze strony** (`file:line` w IA §3), kanoniczna kotwica, status. Rozdział deklaruje `concepts: [...]` walidowane przy buildzie (`reference('glossary')`) — literówka = błąd builda. `tags` znika, `/tags` → `/glossary`. |
| **Po zmianie** | 19 haseł; 15 zdefiniowanych Twoimi zdaniami, **4 bez definicji** (predistribution, social market economy, Union of Nations, coalition of the willing/sortition) — te oznaczone `needs-definition`, popup pokazuje tylko link. Nic nie zmyślamy. |
| **Zyski / Wady / Ryzyka** | + jedno źródło dla tooltipów, stopek, mapy, `/glossary`; + wariancja nazw rozwiązana aliasami; − trzeba przejść 33 pliki; ryzyko: pokusa dopisania definicji „za Ciebie" — zakazana regułą standardu redakcyjnego. |
| **Punkty + Importance** | T05 3 + T08 2 = **5 · High** |
| **Decyzja** | Czy przyjmujesz słownik jako **jedyne** źródło definicji? Cztery hasła bez definicji — podyktujesz zdanie czy zostają puste? |

## Blok 3 — jeden argument, jeden dom + linkowanie z danych (D8, D9)

| | |
|---|---|
| **Kontekst** | R4: akcelerator-i-hamulec zdefiniowany w całości 4×, „tanie bije posiadane" 5×, odpowiedź na migrację 2× dosłownie; 13 rozdziałów kończy ręcznie pisany kursywą akapit „Part of the EU Reform Vision…" z linkami do rodzeństwa. |
| **Problem** | Czytelnik idący po kolei spotyka ten sam akapit przepisany — to, a nie zdania, czyta się jako nieprofesjonalne. Ręczne stopki się rozjeżdżają (2 rozdziały ich nie mają, przez przypadek). |
| **Rozwiązanie** | Tabela 17 wierszy (IA §5): dla każdego argumentu **jeden** dom (`file#anchor`), każde inne wystąpienie → ≤ 3 zdania + link, albo nic. Stopka rozdziału generowana: poprzedni/następny w warstwie, „w górę" do `/vision#<layer>`, do 3 powiązanych po wspólnych pojęciach, jedna linia „carry this" → `/manifesto` + `/support`. Zakaz linków do `/docs/` i do wycofanych rozdziałów, sprawdzany audytem. |
| **Po zmianie** | 13 kursywnych stopek skasowanych w jednym commicie; reguła „własność widoczna na każdej propozycji" staje się sprawdzalna (każdy `proposal` deklaruje `who-captures-the-gains`). |
| **Zyski / Wady / Ryzyka** | + koniec dryfu; + audyt pilnuje na przyszłość; − największe zadanie redakcyjne fali (8 pkt); ryzyko: 4 wiersze czekają na Twoje odpowiedzi (Q1 komunizm, Q3 progi). |
| **Punkty + Importance** | T06 3 + T13 8 + T11 3 = **14 · High** |
| **Decyzja** | Zatwierdzasz tabelę §5 jako wiążącą? Odpowiedzi na Q1 i Q3 (blok 7) odblokowują 4 wiersze. |

## Blok 4 — tooltipy pojęć (D10)

| | |
|---|---|
| **Kontekst** | Nie ma dziś ani jednej sekcji słownikowej w rozdziałach (R2 B8: zero). Jest za to spec Wikipedii (R1e): karta po ~650 ms, nie przycina tekstu, nad nawigacją. |
| **Problem** | Termin polityczny („optional referendum") spotkany po raz pierwszy w środku eseju wymaga jednego zdania — raz, nie na każdej stronie od nowa. |
| **Rozwiązanie** | Pierwsze wystąpienie na stronie: automatycznie dla aliasów wielowyrazowych oznaczonych `autolink: true` (13 haseł), ręcznie `<T slug>` dla słów zwykłych („cheap", „frame") — te nigdy automatycznie. Karta: termin, definicja, „Read where it is argued →", „All terms". Hover 650 ms, tap na dotyku, fokus z klawiatury, `Esc`; natywny Popover API, ~40 linii JS, zero bibliotek; bez JS zostaje zwykły link. Manifest wyłączony (rejestr osobisty). |
| **Po zmianie** | Rozdziały polityczne (`path`) dostają tooltipy jako pierwsze — kryterium akceptacji epiku. |
| **Zyski / Wady / Ryzyka** | + działa bez JS; + jedno źródło; − nowy plugin rehype; ryzyko: auto-oznaczanie słów zwykłych zrobiłoby pole kropkowanych podkreśleń — dlatego lista `autolink` jest zamknięta. |
| **Punkty + Importance** | T07 **5 · Medium** |
| **Decyzja** | Auto-oznaczanie pierwszego wystąpienia — tak, czy tylko ręczne `<T>`? |

## Blok 5 — mapa strony (D11) — z zastrzeżeniem NN/g

| | |
|---|---|
| **Kontekst** | Prosiłeś o „stronę site map, infograficzną, gdzie widzę wszystkie połączenia". NN/g (R1e) w powtarzanych testach: **interaktywne mapy strony przegrywają** ze statyczną listą wielokolumnową (61 % vs 47 % skuteczności zadań); etykieta ma brzmieć dokładnie „Site Map". Stopka linkuje dziś „Sitemap" → `/sitemap.xml`, czyli plik XML dla ludzi. |
| **Problem** | Sama infografika byłaby ładna i nieużyteczna do znajdowania stron. |
| **Rozwiązanie** | `/site-map`: **najpierw** statyczna lista w kolumnach (Start here · The frame · Floor · Middle · Ceiling · How we get there · Reference), **pod nią** graf linków jako towarzysz: SVG budowany przy buildzie z `scripts/link-graph.mjs` (kolumny = warstwy, węzeł = strona z kolorem warstwy i obrysem rodzaju, rozmiar = liczba linków przychodzących, krawędź = link w treści; nawigacja i stopki wykluczone). Podświetlenie krawędzi tylko CSS; klik = przejście. Fallback: `<details>` „Connections as text". Build pada, gdy graf ma mniej węzłów niż rozdziałów. |
| **Po zmianie** | Masz obie rzeczy: narzędzie i obraz korpusu; obraz jest deterministyczny (ten sam na każdym buildzie, da się porównać zrzutami). |
| **Zyski / Wady / Ryzyka** | + zgodne z badaniami i z Twoją prośbą naraz; − 8 pkt na coś, co nie jest treścią; ryzyko: force-directed wyglądałby efektowniej — świadomie odrzucony (niedeterministyczny, JS). |
| **Punkty + Importance** | T09 3 + T10 5 = **8 · Medium** |
| **Decyzja** | Lista + graf-towarzysz (rekomendacja) czy sam graf wbrew NN/g? |

## Blok 6 — sprzątanie tras (D12)

| Problem (źródło) | Akcja | Pkt |
|---|---|---:|
| `docs/[...slug].astro` generuje `/docs/<slug>` dla **każdego** wpisu — każdy rozdział, `/why`, `/manifesto` mają drugi adres; 3 wpisy z `customSlug` trzeci (R3 C.1) | filtr do `ideas/ articles/ reference/`; `customSlug` usunięty, jego 3 adresy do tabeli przekierowań | — |
| 13 plików-wrapperów z dwoma mechanizmami przekierowań; `docs/book/principles.astro` ma `prerender=false` bez adaptera | jedna tabela `redirects` w `astro.config.mjs`; wrappery skasowane | — |
| `book/principles.md` — stara proza sprzed ramy, nadal publikowana, ze zmyśloną proporcją „czterech emerytów na pracującego" (R3 A.4, R4) | plik skasowany, `/book/principles` → `/principles` świadomie | — |
| `eGov-vison` / `eGov-challenges`: duże litery w nazwach, małe w linkach `docs/all.astro:151-152`; indeks ich nie pokazuje, archiwum linkuje 404 | scalić w `european-egovernment` (po Q9; do tego czasu `draft`), przekierować **obie pisownie** | — |
| `/tags`, `/tags/[tag]` — sieroty | skasować, `/tags` → `/glossary` | — |
| `/vision/<layer>` przekierowuje na górę `/vision`, gubiąc intencję | kotwice `#language #digital #robotics`, przekierowania na nie | 2 |
| **Razem** | T04 5 + T14 2 | **7 · High** |

**Decyzja:** wykonać w tej kolejności (zależności w IA §9) — tak/nie. Skasowanie `principles.md`
jest nieodwracalne dla adresu, nie dla treści (git).

## Blok 7 — dziesięć pytań autorskich z R4 (bez nich fala 3 redakcyjna stoi)

| # | Pytanie | Gdzie | Co blokuje |
|---|---|---|---|
| 1 | Komunizm — jeden werdykt: `cheap-is-wealth.md:140` „w istocie komunistyczne" vs `who-it-earns-for.md:170` „nie komunizm" | oba rozdziały | §5 wiersz 2 |
| 2 | `safeguards.md` jest w Twojej pierwszej osobie, a powiedziałeś „nie znam, możesz mi zaproponować" — adoptujesz czy przegłosowić jako badania? | `safeguards.md` całość | T13, standard D2 |
| 3 | Próg: 2 %/1 % zaokrąglone czy szwajcarski udział skalowany (1,78 %/0,89 %)? | `direct-democracy:156`, `safeguards:238`, `first-move:182` | §5 wiersz 14, hasło ECI |
| 4 | Argument militarny za angielskim (`political-path.md:110-118`) — Twój? Nie ma go w żadnym dyktowaniu | `political-path.md` | T13 |
| 5 | Jak dosadnie wolno pisać: „wipe anybody's backside" (`why.mdx:66`) vs złagodzone `designing-our-retirement.md:68`; „zajebiści ludzie" → „creative and hard-working" | 3 rozdziały | standard D2 |
| 6 | **Nie ma rozdziału „dlaczego angielski" Twoim głosem** — pisać? (rekomendacja IA D13: tak, `one-working-language.md`, warstwa floor, po przeczytaniu sidecara) | nowy plik | T12, 5 pkt |
| 7 | Publikujesz własny akapit o izolacji emocjonalnej? (wycięty z `european-science.md`) | `european-science.md:98-106` | T13 |
| 8 | `redesigning-the-state.md:180-182` — „może nie ma problemu siły roboczej" — zostaje? Rozpuszcza przesłankę strony | `redesigning-the-state.md` | T13 |
| 9 | `principles.md` i trzy pliki eGov (zero pierwszej osoby, „65–75 % oszczędności" zmyślone) — kasować czy przepisać jako jeden? | 4 pliki | T04 wiersz 4 |
| 10 | `choosing-people` i `direct-democracy` — jeden program? Jeden zmienia wybór ministrów, drugi mówi „wybory się nie zmieniają" | oba | T13 |

Plus 4 hasła słownika bez definicji (blok 2). Odpowiedzi możesz podyktować jednym ciągiem —
zapiszemy je jako `decisions.jsonl` + dump w `.plan/vision/`.

## Blok 8 — fala 3: plan, punkty, tryb wykonania (D14)

| Grupa | Zadania | Pkt | Agent |
|---|---|---:|---|
| Schemat i klasyfikacja | T01 schema · T05 słownik · T02 frontmatter | 9 | ts-dev, fable |
| Nawigacja i trasy | T03 „Chapters" + indeks z `layer` · T04 sprzątanie tras · T14 kotwice `/vision` | 10 | ts-dev |
| Linkowanie i pojęcia | T06 stopki z danych · T07 tooltipy · T08 `/glossary` | 10 | ts-dev |
| Mapa i audyt | T09 graf linków · T10 `/site-map` · T11 audyt kształtu (dwa kliknięcia, kotwice, domy kanoniczne) | 11 | ts-dev |
| Redakcja | T12 rozdział floor · T13 jeden argument = jeden dom | 13 | fable (po Twoich odpowiedziach) |
| **Razem** | 14 zadań | **53** | |

Kolejność: T01 → T05 → T02 → {T03, T04, T14} → {T06, T07, T08, T09} → {T10, T11} → T12, T13.
Reskin do `DESIGN.md` i scalanie komponentów (R2) to osobne zadania fali 3, nieliczone tu.

**Tryb:** 53 > 13 pkt ⇒ wg reguły orkiestrator AO. `epics/INDEX.md` zapisuje Twoje
„użyj swarm agentów, sam bądź orkiestratorem" — obejmowało falę 1–2. **Decyzja:** fala 3 przez
AO czy znów bezpośrednio subagentami?

## Lista decyzji do zatwierdzenia — jednym słowem każda

| # | Decyzja | Rekomendacja |
|---|---|---|
| 0 | Trzy dokumenty fali 2 są bramką fali 3 | tak |
| D3 | Etykieta „Chapters", adresy bez zmian | tak |
| D4/D5 | `layer` + `kind` + `order` we frontmatterze; `/book` z danych, „Unsorted" | tak |
| D6/D7 | Słownik jako kolekcja i jedyne źródło; `tags` znika | tak |
| D8/D9 | Tabela „jeden dom" wiążąca; stopki generowane | tak |
| D10 | Tooltipy: auto dla aliasów bezpiecznych, ręcznie dla reszty | tak |
| D11 | Mapa: lista + graf-towarzysz (NN/g) | tak |
| D12 | Sprzątanie tras w kolejności §9, `principles.md` skasowany | tak |
| D13 | Nowy rozdział floor „One Working Language" | tak, po sidecarze i Q6 |
| D14 | Fala 3 przez AO | Twoje słowo |
| Q1–Q10 + 4 hasła | odpowiedzi autorskie | podyktuj |

## GAPS

Nic nie budowano ani nie renderowano (wnioski o casingu eGov i o fragmentach w `redirects`
Astro — do potwierdzenia jednym buildem). Sidecar `european-english.sidecar.mdx` nieczytany —
może zawierać argument z Q6. `ideas/`, `articles/`, `reference/`, `why/scale`, `support/*`
niesklasyfikowane. Etykieta „Chapters" nietestowana na czytelniku. `DESIGN.md` i standard
redakcyjny powstają równolegle — ich treści ta prezentacja nie zna, opisuje tylko rolę.
