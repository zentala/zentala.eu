# Review Needed

Tracker spraw, które zostały zmienione lub dodane w trakcie pracy z agentem AI, ale autor nie przeczytał ich jeszcze dokładnie. Po przeglądnięciu zaznacz `[x]`.

Format: jedna linia per item. Krótki opis + link/ścieżka. Po review — zaznacz checkbox albo usuń pozycję.

---

## 2026-04-26

### Sesja 1 (wieczór)

- [ ] **`/principles` zasada #6 — Positivism as Method** — pełny rewrite: tytuł zmieniony na "Build, Don't Administer", historyczna kotwica polskiego pozytywizmu (1863, praca organiczna, 1918), reframing pkt 1 na "build don't administer" w kontekście AI, reframing pkt 2 na "create not maintain". Bazuje na researchu w `/private/2026-04-26-02-30-research-pozytywizm`. → `src/pages/principles.astro`
- [ ] **`/about` — cała nowa strona** — osobista narracja: zdjęcie + bio, sen o statku kosmicznym jako otwierająca metafora, geneza projektu (5 lat temu, paczki do Portugalii, e-learning w pandemii), dlaczego teraz (Ukraina, granica białoruska, rodzice w Radzyniu Podlaskim), kim jestem, czym jest ten serwis, gdzie mnie znaleźć. → `src/pages/about.astro`

### Sesja 2 — strukturalna rewizja głównych stron

- [ ] **Strona główna `/` — nowy hero + AI Review** — hero przepisany w pierwszej osobie z argumentem emerytalnym jako otwarciem ("We are the last generation of the European demographic peak..."). Dodane CTA: "Read the principles" + "About the author". Pod hero dodany blurb "Reviewed by AI" z cytatem Claude'a (A8). → `src/pages/index.astro`
- [ ] **`/support` — usunięta retoryka katastrofy** — sekcja "Time Is Running Out" przepisana od zera. Usunięte: "economic euthanasia", "retirement homes invaded", "watching civilization collapse". Nowa wersja: pilność oparta na danych (Eurostat dependency ratio, Draghi Report, spadek poparcia obecnego modelu integracji), urgent ale spokojna, kończy się "The reason to act now is not catastrophe. It is that the systems we want to build take ten to twenty years to build, and we have already used some of that time." → `src/content/docs/support/time-is-running-out.mdx`
- [ ] **`/why` — oczyszczenie kontrowersyjnych passusów** — trzy chirurgiczne edycje:
    - pkt 4 (demografia): usunięte "I would also plunder a weak, rich nation of retirees" → zastąpione: "aging, wealthy societies without the technological capacity to defend themselves become a target"
    - pkt 6 (drenaż): usunięte "if someone doesn't respect our procedures at entry, they won't respect our principles later either" → zastąpione: argument o weryfikowalnej tożsamości jako fundamencie sprawiedliwego systemu (chroni też migrantów)
    - pkt 7 (robotyzacja): usunięte "force older people into economic euthanasia" → zastąpione: argument matematyczny o niesprawnej proporcji składek/świadczeń, robotyzacja jako jedyna czwarta opcja
    → `src/content/docs/why.mdx`
- [ ] **`/benefits` — sekcje CEE+Skandynawia** — nad istniejącym selektorem krajów dodana wyróżniona sekcja "Where the manifesto lands first" z 6 kartami: Estonia, Litwa+Łotwa, Ukraina, Rumunia, Skandynawia, Polska. Każda karta w schemacie: **Brings / Gains / Common interest**. Pisana w pierwszej osobie autora ("I write this from Poland..."). Reszta strony (selektor krajów) zachowana bez zmian. → `src/pages/benefits.astro`
- [ ] **A8 — AI Review jako blurb pod hero** — krótki cytat z opinią Claude'a na temat manifestu, podpisany "Claude Sonnet 4.6 (Anthropic), April 2026". Implementowane razem z A1 na stronie głównej. → `src/pages/index.astro`

---

## Jak używać tego pliku

Każda sesja agenta dodaje tu pozycje, które:
- Zostały napisane na podstawie research/inferencji agenta
- Zawierają twierdzenia, których autor jeszcze nie zweryfikował
- Mogą wymagać korekty stylistycznej lub merytorycznej

Po przeglądnięciu — zaznacz `[x]` lub usuń pozycję. Plik powinien być pustawy w idealnym świecie.
