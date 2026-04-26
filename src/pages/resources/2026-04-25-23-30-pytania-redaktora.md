---
layout: ../../layouts/ResourcesLayout.astro
title: "Pytania redaktora — co zmienić, co uzupełnić, co poprawić"
datetime: "2026-04-25T23:30"
---

**2026-04-25 23:30** | Dokument roboczy w roli redaktora merytorycznego (developmental editor / ghostwriter). Cel: przekształcić obecną stronę w gotowy do publikacji manifest.

---

## Stan zastany — co jest na stronie dziś

**Strony publiczne:**

| Sekcja | URL | Stan | Notatki |
|--------|-----|------|---------|
| Strona główna | `/` | Hero w trzeciej osobie ("Technocratic vision for..."), 3 filary, FAQ, About | Hero do całkowitej przebudowy |
| Why Reforms | `/why` | 9 punktów, mocne argumenty (emerytura, Draghi) | Dobra baza, ale punkt 6 i 8 mają fragmenty kontrowersyjne |
| Vision | `/vision` | 3 filary + dodatkowe obszary | Brakuje pierwszoosobowego głosu |
| Vision: Language | `/vision/language-integration` | Timeline, korzyści | Solidne |
| Vision: Digital | `/vision/digital-integration` | Filary cyfrowe | OK |
| Vision: Robotic | `/vision/robotic-reindustrialization` | Logistyka, manufacturing | OK |
| Benefits | `/benefits` | DE, FR, PL + reszta krajów | **Asymetria — brak Bałtyków, Ukrainy, Skandynawii** |
| Support | `/support` | Patreon, share, "Time Is Running Out" | **Sekcja "Time Is Running Out" do usunięcia lub przepisania** |

**Sekcje prywatne** (`/resources/`):
- Wizja (`.arch/VISION.md`)
- Strategia manifestu
- Trzy podejścia (manifest/platforma/policy)
- Feedback edytorski
- CEE jako sojusznicy

**Pliki konfiguracyjne:**
- `WRITING.md` (korzeń, linkowany z CLAUDE.md)
- `.arch/VISION.md` (autorytarywne)
- `research/` (folder na materiały źródłowe — pusty)

---

## A. Co zmienić — konkretne akcje na stronie

Lista do egzekucji. Każdy punkt to mała sesja pracy.

### A1. Hero strony głównej — kompletna przebudowa
**Plik:** `src/components/Hero.astro` (lub `src/pages/index.astro`)

**Z:**
> "Technocratic vision for the next step of European Integration"
> "From Challenges to Opportunities: Uniting Europe to Redefine Our Future..."

**Na (wersja robocza):**
> "Jesteśmy ostatnim pokoleniem wyżu demograficznego.
> Zrobotyzowany system usług publicznych i opieki, który zbudujemy dziś — to nasz system emerytalny jutro.
> Nie ma innego."
>
> *Paweł Żentała, architekt oprogramowania, aktywista innowacji.*

Pierwsze zdanie w pierwszej osobie ("ja" lub "my"). Bez emoji. Bez korporacyjnego języka.

### A2. Sekcja About — wyjść z cienia
**Plik:** prawdopodobnie `src/components/Author.astro`

Obecnie: na dole strony, ledwo widoczna, pisana w trzeciej osobie ("It was created by...").

Zmiana: **przesunąć wyżej** lub stworzyć dedykowaną stronę `/about` z osobistą historią. Pisać "ja". Wspomnieć kanał YouTube, kontekst aktywizmu innowacji.

### A3. /support — usunąć "Time Is Running Out"
**Plik:** `src/pages/support.astro`

Konkretnie: zdania o "retirement homes invaded" i "economic euthanasia". Pilność można budować inaczej — danymi i osobistą stawką, nie strachem.

Co zostaje: Patreon, share, newsletter. Co znika: cała sekcja katastrofy.

### A4. /benefits — dodać sekcje CEE
**Plik:** `src/pages/benefits.astro`

Obecnie: DE, FR, PL + 4 generyczne grupy.

Dodać sekcje per kraj:
- **Estonia** (lider e-gov, naturalny partner)
- **Litwa, Łotwa** (Bałtyki, bezpieczeństwo)
- **Ukraina** (laboratorium cyfrowe, Diia)
- **Rumunia** (skala, demografia, dostawca talentu)
- **Skandynawia** (kapitał + R&D, talent z CEE, wspólne zagrożenie)

Każda sekcja powinna mówić "co konkretnie ten kraj zyskuje" w pierwszej osobie autora ("Z mojej perspektywy ten kraj jest..."), nie generycznie.

### A5. /why punkt 8 — oczyścić sekcję migracyjną
**Plik:** `src/pages/why.astro` lub odpowiedni komponent

Konkretnie: zdanie o "Central Europe... if someone doesn't respect our procedures at entry, they won't respect our principles later either" — przepisać lub usunąć.

Argument o robotyzacji granic może zostać. Generalizujące sądy o grupach ludzi — wyciąć.

### A6. /why punkt 6 — fragment o "plundering weak retirees"
Kontrowersyjny zwrot do przepisania na merytoryczny argument o demografii i bezpieczeństwie bez metafor.

### A7. FAQ — przeformułować defensywnie → asertywnie
**Plik:** prawdopodobnie `src/components/FAQ.astro`

Obecnie: pytania sceptyka, odpowiedzi obronne.

Zmiana: "Pytania, które powinieneś zadać politykom" — pytania, które autor sam stawia, z odpowiedziami, które autor sam daje. Zmienia ton z "tłumaczę się" na "stawiam tezę".

### A8. Dodać sekcję "Recenzja AI"
Pomysł z poprzedniej sesji: blurb na stronie — "Reviewed by Claude Sonnet 4.6 (Anthropic), April 2026" + krótki cytat. Unikalna forma społecznego dowodu, pasująca do ducha projektu.

### A9. Stała linkowana stopka YouTube
Każda strona powinna linkować do kanału YouTube autora. Spójność między formatami pisemnymi i wideo.

### A10. Hero CTA — coś poważniejszego niż newsletter
Nawet bez gotowej platformy ruchowej: "Pobierz manifest jako PDF" albo "Obejrzyj na YouTube" zamiast newslettera. Newsletter może zostać niżej.

---

## B. Co uzupełnić — pytania do autora

Te pytania zadaję jako redaktor merytoryczny. Twoje odpowiedzi pozwolą uzupełnić manifest do publikowalnej formy.

### B1. Osobista narracja (najpilniejsze)

Manifest musi mieć autora. Czytelnik musi wiedzieć skąd to się wzięło.

1. **Kiedy po raz pierwszy zacząłeś myśleć o reformie UE jako temacie?** Jakie zdarzenie? Jaki tekst? Jaka rozmowa?
2. **Co konkretnie z twojej pracy inżynierskiej naprowadziło cię na metaforę OS?** Jakiś projekt, gdzie widziałeś legacy system, który "działa, ale nikt go nie rozumie"?
3. **Jak nazywa się twój kanał YouTube?** Linkuj go wszędzie.
4. **Jakie inne tematy poruszasz na YouTube** w ramach "aktywizmu innowacji"? (żeby spozycjonować EU reform jako jeden z większego portfolio)
5. **Jakie wydarzenie polityczne lub osobiste sprawiło, że poczułeś że TERAZ to musi być powiedziane?** (Ukraina? Trump? Jakiś konkretny rok?)

### B2. Konkretne przykłady (manifest potrzebuje "mięsa")

Argumenty stają się prawdziwe, gdy są zilustrowane konkretami. Generaliki giną — przykłady zostają w głowie.

6. **Konkretna polska biurokracja, którą widziałeś z bliska i którą cyfryzacja by rozwiązała?** (np. ePUAP, e-deklaracje, ZUS — co konkretnie cię frustruje, co działa?)
7. **Konkretny przykład legacy systemu z twojej pracy programistycznej**, który pokazuje "dlaczego refaktoryzacja od zera jest czasem jedyną drogą"?
8. **Kogo znasz osobiście, kto wyemigrował z Polski i czego tam doświadczył?** (anonimowo, ale konkretnie — to są twoje historie)
9. **Czy byłeś kiedykolwiek w Estonii, na Ukrainie, w Skandynawii?** Jakie obserwacje stamtąd wzmacniają tezy?

### B3. Pozycja na sporne tematy (manifest musi mieć stanowisko)

Manifest, który próbuje się wszystkim podobać, nie jest manifestem.

10. **Jak dokładnie chcesz powiedzieć o migracji?** Obecny tekst na /why pkt 8 ma fragment, który może odpychać. Co dokładnie chcesz tam powiedzieć — i jak to oddzielić od tego, co byłoby kontrproduktywne?
11. **Twoja pozycja: pogłębić integrację UE czy rozszerzać?** (powiedziałeś "wewnętrzna przed zewnętrzną" — to mocna teza, warto ją wyłożyć)
12. **Ukraina w UE — kiedy, czy w ogóle, na jakich warunkach?** Czy wystarczy "cyfrowa Ukraina z nami", czy chcesz członkostwa?
13. **Co sądzisz o euro?** Czy reforma wymaga wspólnej waluty? Polska wciąż jest poza strefą.
14. **Demokracja cyfrowa, blockchain voting** — wspomniałeś. Czy chcesz to umieścić w manifeście, czy zostawić jako osobny temat na YouTube?
15. **Wojsko europejskie — tak/nie?** To pochodna integracji obronnej, którą proponujesz.

### B4. Strategia (po co to wszystko)

16. **Kogo chcesz przekonać NAJPIERW?** (młodych Polaków? europosłów? widzów YouTube? programistów?)
17. **Co ma być miarą sukcesu tego serwisu w 12 miesiącach?** (trafienie do konkretnych mediów? liczba subskrybentów na YouTube? cytowanie przez polityków?)
18. **Czy jesteś gotowy być publicznie cytowany?** Z imienia i nazwiska, w mediach? Z poglądami, które tu wykładasz?
19. **Czy masz znajomych ekspertów** (ekonomistów, prawników, byłych urzędników UE), którzy zechcieliby udzielić "endorsement"? Krótki cytat poparcia byłby ogromną wartością.
20. **Czy chcesz, żeby ten serwis prowadził do czegoś — kursu, książki, konsultacji, kandydowania?** Czy ma być celem samym w sobie?

### B5. Zakres innowacji (kontekst)

21. **Czy serwis ma być czysto o reformie UE, czy ma też pokazywać twoją szerszą działalność?** (np. zakładka "Inne moje innowacje" linkująca do YouTube)
22. **Czy chcesz mieć blog/notatki publiczne** (poza prywatną sekcją), gdzie publikujesz krótkie myśli, reagujesz na wydarzenia?

---

## C. Co poprawić — refinement już zaproponowanego

Rzeczy, które już są w jakiejś formie, ale wymagają dopracowania.

### C1. Argument emerytalny — masz wiele wersji, wybierz jedną
W /why, na stronie głównej, w mojej propozycji hero — argument emerytalny pojawia się w różnych formach. Stwórz **jedną kanoniczną wersję** (3–5 zdań) i używaj jej konsekwentnie. Możliwa baza:

> "Jesteśmy ostatnim pokoleniem wyżu demograficznego. Mamy 20 lat, żeby zbudować państwo, które utrzyma nas na emeryturze — bo młodych będzie za mało. Roboty, cyfrowa administracja i autonomiczne usługi to nie luksus, to **infrastruktura naszej starości**."

### C2. Metafora OS — używaj jej konsekwentnie
Obecnie w "/why pkt 1" pisze: "treating them as a software project built from scratch with efficiency and modernity in mind." To jest dobrze, ale zagubione w środku punktu. **Wynieś metaforę na pierwszy plan strony.** Niech będzie centralna, nie ozdobna.

### C3. Trzy filary — uzupełnić o "dlaczego razem"
Filary są opisane indywidualnie. Brakuje sekcji "dlaczego te trzy razem, w tej kolejności". Logika: język umożliwia komunikację → komunikacja umożliwia wspólny system cyfrowy → wspólny system cyfrowy umożliwia skalowalną robotyzację. Wyjaśnić to wprost.

### C4. Raport Draghiego — zacytować dosłownie
Obecnie: "Draghi Report (September 2024) diagnosed Europe's critical weakness". Zamień na konkretny cytat z raportu (jeden, dwa zdania). Cytaty są dowodem. Generaliki nie są.

### C5. Timeline języka — uściślić lub wyciszyć
W /vision/language-integration jest timeline 16 lat. To brzmi wiarygodnie, ale może też być punkt ataku ("16 lat to za długo"). Albo dopracuj uzasadnienie etapów, albo zastąp ogólną tezą "to będzie pokoleniowy proces, ale każdy etap przynosi korzyści".

### C6. Trójmorze — dorób publiczną sekcję
Obecnie w FAQ pojawia się "Intermarium 2.0" jako odpowiedź na pytanie "What if Germany doesn't agree". Ta idea zasługuje na własną sekcję — nie pochowaną w FAQ. Notatki w `/resources/cee-sojusznicy` to baza.

### C7. Sekcja "moja perspektywa inżyniera"
Brakuje wprost wyłożonego frame'u: "patrzę na to jako architekt systemów, dlatego widzę X, czego nie widzą politycy". Zrób z tego osobną sekcję, krótką, na stronie głównej lub /about.

### C8. CTA support — przepisać benefity Patreona
Obecnie: "Access to private Discord", "Early access to research". Te benefity brzmią startupowo. Zmień na coś, co pasuje do manifestu: "Bezpośrednia rozmowa o wizji ze mną raz w miesiącu", "Wgląd w robocze szkice następnych odcinków YouTube", "Wpływ na to, co badam dalej".

### C9. Stopka — uporządkować linki
Obecna stopka ma dziwny porządek (Vision pojawia się dwa razy). Posprzątać.

### C10. SEO i meta — title/description per strona
Każda strona powinna mieć jasny title i description, optymalizowany pod swój temat. Obecnie sporo stron dziedziczy generyczne "EU Reform Vision".

---

## D. Sugerowana kolejność prac

Jeśli chcesz to zrealizować w kolejnych sesjach:

1. **Sesja 1** (osobiste, najważniejsze): odpowiedzi na pytania B1 (osobista narracja). Bez tego nic nie ma sensu — manifest musi mieć autora.
2. **Sesja 2:** A1 (hero) + A2 (about). Te dwa zmieniają pierwsze wrażenie.
3. **Sesja 3:** A3 + A5 + A6 (usunąć kontrowersyjne sekcje). Higiena polityczna.
4. **Sesja 4:** A4 (benefity CEE — wszystkie kraje). Duża, ale potrzebna.
5. **Sesja 5:** A7 (FAQ) + C2 (metafora OS jako centralna).
6. **Sesja 6 i dalej:** uzupełnienia z B i refinementy z C według priorytetu.

---

## Notatki redaktora

**Co działa:** masz unikalną perspektywę (inżynier piszący o państwie), masz najsilniejszy argument (emerytura+demografia), masz osobiste doświadczenie (Polska + perspektywa CEE), masz format (YouTube + serwis).

**Co jest największym ryzykiem:** pisanie wstydliwie. Manifest, który się tłumaczy, nie istnieje. Każde "this vision proposes" osłabia siłę. Każde "we" zamiast "ja" niszczy autorytet.

**Następny krok:** odpowiedz na pytania z bloku B1 (5 pytań). To są fundamenty. Reszta zbuduje się stąd.

---

*[/resources/2026-04-25-22-27-cee-sojusznicy](/resources/2026-04-25-22-27-cee-sojusznicy) · [/resources/2026-04-25-22-13-strategia-manifestu](/resources/2026-04-25-22-13-strategia-manifestu)*
