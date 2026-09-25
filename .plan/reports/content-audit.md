# Content audit — 2026-09-25

## TLDR
Scanned 260 built routes, 69 content files, 440 links (79 unique external).
Found 20 links to draft pages, 8 links to missing pages, 13 dead external links, 17 orphan pages, 16 drafts, 46 pages missing a meta description, 1 duplicate descriptions.
IA shape checks: ran — 15 pages over two clicks from /, 20 entries missing layer/kind, 0/0 broken glossary hrefs, 0 /docs/ links in chapters, 118 built links to a retired redirect path, 0/0 concepts missing their canonical link.

## Links to draft pages (20) — 404 in production
| Link | Where | Draft file |
|---|---|---|
| /book/language-integration-administrative-implementation | src/content/docs/book/european-english.mdx:214 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration | src/content/docs/book/european-english.mdx:215 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity | src/content/docs/book/european-english.mdx:216 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language | src/content/docs/book/european-english.mdx:217 | src/content/docs/book/language.md |
| /book/language-integration-administrative-implementation | src/content/docs/ideas/culture/language-integration.mdx:166 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration | src/content/docs/ideas/culture/language-integration.mdx:167 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity | src/content/docs/ideas/culture/language-integration.mdx:168 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language | src/content/docs/ideas/culture/language-integration.mdx:169 | src/content/docs/book/language.md |
| /book/language-integration-administrative-implementation/ | src/content/docs/index.mdx:30 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration/ | src/content/docs/index.mdx:31 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity/ | src/content/docs/index.mdx:32 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language/ | src/content/docs/index.mdx:33 | src/content/docs/book/language.md |
| /book/eGov-challenges | src/content/docs/index.mdx:42 | src/content/docs/book/eGov-challenges.mdx |
| /book/predictive-healthcare-system/ | src/content/docs/index.mdx:49 | src/content/docs/book/predictive-healthcare-system.mdx |
| /book/european-elearning-system/ | src/content/docs/index.mdx:50 | src/content/docs/book/european-elearning-system.mdx |
| /book/european-blockchain-archives/ | src/content/docs/index.mdx:51 | src/content/docs/book/european-blockchain-archives.mdx |
| /book/unified-payment-zone/ | src/content/docs/index.mdx:70 | src/content/docs/book/unified-payment-zone.mdx |
| /book/near-zero-transaction-costs/ | src/content/docs/index.mdx:71 | src/content/docs/book/near-zero-transaction-costs.md |
| /book/digital-receipts/ | src/content/docs/index.mdx:72 | src/content/docs/book/digital-receipts.mdx |
| /book/predictive-healthcare-system | src/components/Footer.astro:43 | src/content/docs/book/predictive-healthcare-system.mdx |

## Links to missing pages (8)
| Link | Where |
|---|---|
| /docs/ideas/technology/autonomous-robotics-system | src/content/docs/ideas/index.mdx:87 |
| /docs/ideas/governance/customized-local-law | src/content/docs/ideas/index.mdx:108 |
| /docs/ideas/agriculture/autonomous-farming | src/content/docs/ideas/index.mdx:122 |
| /docs/ideas/all | src/content/docs/ideas/index.mdx:157 |
| /docs/ideas/all | src/content/docs/ideas/index.mdx:325 |
| /book/language-integration-european-politics/ | src/content/docs/index.mdx:34 |
| /book/language-integration-national-states/ | src/content/docs/index.mdx:35 |
| /sitemap.xml | src/components/Footer.astro:31 |

## Dead external links (13)
| URL | Status | Where |
|---|---|---|
| https://www.sciencedirect.com/science/article/pii/S0261379421000500 | 403 (bot block? check by hand) | src/content/docs/book/choosing-people.md:159 |
| https://academic.oup.com/book/32249/chapter/268436667 | 403 (bot block? check by hand) | src/content/docs/book/choosing-people.md:165 |
| https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_en.pdf | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:37 |
| https://onlinelibrary.wiley.com/doi/full/10.1111/weng.12646 | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:39 |
| https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_en.pdf | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:223 |
| https://onlinelibrary.wiley.com/doi/full/10.1111/weng.12646 | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:227 |
| https://journals.sagepub.com/doi/full/10.1177/1023263X18824772 | 403 (bot block? check by hand) | src/content/docs/book/first-move.md:123 |
| https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD(2022 | 404 | src/content/docs/book/safeguards.md:166 |
| https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD(2022 | 404 | src/content/docs/book/safeguards.md:391 |
| https://www.lovguiden.dk/en/det-offentlige/den-europaeiske-revisionsret/2026-03-24-eus-raadgivende-organer-leverer-udtalelser-for-sent-og-maaler-ikke-effekt | 429 | src/content/docs/book/steering.md:207 |
| https://www.patreon.com/c/zentala | 404 | src/pages/support.astro:31 |
| https://www.patreon.com/c/zentala | 404 | src/pages/support.astro:91 |
| https://www.linkedin.com/in/zentala/ | 999 | src/components/Author.astro:56 |

## Orphan pages (17) — built, but no page links to them
- /book/principles
- /commentary
- /confirm
- /docs/book
- /docs/book/principles
- /docs/european-english
- /docs/for-you
- /docs/language-official-proposal
- /docs/why-reforms
- /home-classic
- /search
- /site-map
- /ui
- /ui/content
- /vision/add/robotic
- /vision/digital-integration
- /vision/robotic-reindustrialization

## Drafts (16) — not published
| File | Title |
|---|---|
| src/content/docs/articles/learning-from-china.mdx | Learning from China - A Vision for EU Integration and Economic Reform |
| src/content/docs/book/digital-receipts.mdx | Digital Receipts |
| src/content/docs/book/economic-growth-language-unity.mdx | Economic Growth Through Language Unity |
| src/content/docs/book/eGov-challenges.mdx | eGovernment Challenges |
| src/content/docs/book/eGov-vison.mdx | eGovernment Vision |
| src/content/docs/book/european-blockchain-archives.mdx | European Blockchain Archives |
| src/content/docs/book/european-elearning-system.mdx | European eLearning System |
| src/content/docs/book/european-english.sidecar.mdx | European English — research sidecar |
| src/content/docs/book/language-integration-administrative-implementation.mdx | Language Integration: English as the Lingua Franca of Europe |
| src/content/docs/book/language.md | EU Language Integration |
| src/content/docs/book/media-cultural-integration.mdx | Need for European Media and Cultural Integration |
| src/content/docs/book/near-zero-transaction-costs.md | Near-Zero Transaction Costs |
| src/content/docs/book/predictive-healthcare-system.mdx | Predictive Healthcare System |
| src/content/docs/book/unified-payment-zone.mdx | Unified Payment Zone |
| src/content/docs/ideas/finance/european-cryptocurrency.mdx | European Cryptocurrency Strategy |
| src/content/docs/ideas/governance/digital-democracy.sidecar.mdx | European Digital Democracy — movement and delivery strategy |

## Pages missing a meta description (46)
- /book/principles
- /commentary
- /docs/book
- /docs/book/cheap-is-wealth
- /docs/book/choosing-people
- /docs/book/designing-our-retirement
- /docs/book/digital-receipts
- /docs/book/direct-democracy
- /docs/book/economic-growth-language-unity
- /docs/book/education-and-migration
- /docs/book/egov-challenges
- /docs/book/egov-vison
- /docs/book/european-blockchain-archives
- /docs/book/european-egovernment
- /docs/book/european-elearning-system
- /docs/book/european-english
- /docs/book/european-science
- /docs/book/first-move
- /docs/book/language
- /docs/book/language-integration-administrative-implementation
- /docs/book/media-cultural-integration
- /docs/book/near-zero-transaction-costs
- /docs/book/new-cities
- /docs/book/political-path
- /docs/book/predictive-healthcare-system
- /docs/book/principles
- /docs/book/redesigning-the-state
- /docs/book/robotic-reindustrialisation
- /docs/book/safeguards
- /docs/book/steering
- /docs/book/the-shorter-week
- /docs/book/the-total-state
- /docs/book/unified-payment-zone
- /docs/book/who-it-earns-for
- /docs/european-english
- /docs/for-you
- /docs/language-official-proposal
- /docs/why
- /docs/why-reforms
- /home-classic
- /ui
- /ui/content
- /vision/add/robotic
- /vision/digital-integration
- /vision/language-integration
- /vision/robotic-reindustrialization

## Duplicate meta descriptions (1)
- "A comprehensive vision for European integration through technology, language, and infrastructure." — /benefits/baltic-states, /benefits/businesses, /benefits/central-europe, /benefits/citizens, /benefits/ecommerce, /benefits/european-integration, /benefits/european-security, /benefits/france, /benefits/germany, /benefits/information-economy, /benefits/it-startups, /benefits/italy, /benefits/netherlands, /benefits/northern-europe, /benefits/poland, /benefits/regional-development, /benefits/south-eastern-europe, /benefits/southern-europe, /benefits/spain, /benefits/sweden, /benefits/ukraine, /confirm, /docs/articles/blockchain-state, /docs/articles, /docs/articles/learning-from-china, /docs/ideas/finance/european-cryptocurrency, /docs/ideas/governance/blockchain-state, /docs/ideas, /docs/reference, /tags/action, /tags/addressing, /tags/administration, /tags/articles, /tags/artificial-intelligence, /tags/automation, /tags/autonomous, /tags/autonomous-vehicles, /tags/blockchain, /tags/central-europe, /tags/certification, /tags/challenges, /tags/china, /tags/cities, /tags/citizen-participation, /tags/citizen-power, /tags/civic-technology, /tags/clean-energy, /tags/competence, /tags/constitutional-design, /tags/cooperatives, /tags/cryptocurrency, /tags/culture, /tags/cybernetics, /tags/decentralization, /tags/decision-speed, /tags/defence, /tags/democracy, /tags/demographics, /tags/digital, /tags/digital-currency, /tags/digital-government, /tags/digital-identity, /tags/digital-payments, /tags/digital-state, /tags/digital-transformation, /tags/digital-voting, /tags/direct-democracy, /tags/documentation, /tags/eci, /tags/economic-growth, /tags/economic-reform, /tags/economics, /tags/economy, /tags/education, /tags/egovernment, /tags/elections, /tags/english, /tags/environment, /tags/eu, /tags/eu-reform, /tags/euro, /tags/europe, /tags/european-citizens'-initiative, /tags/european-integration, /tags/feedback, /tags/finance, /tags/financial-integration, /tags/future, /tags/germany, /tags/global-south, /tags/government, /tags/health, /tags/housing, /tags/incentives, /tags/index, /tags/industrial-policy, /tags/industry, /tags/infrastructure, /tags/innovation, /tags/institutional-design, /tags/integration, /tags/labour, /tags/land-restoration, /tags/language, /tags/learning, /tags/lifelong-learning, /tags/logistics, /tags/manifesto, /tags/mental-health, /tags/migration, /tags/ministers, /tags/mobility, /tags/navigation, /tags/objections, /tags/open-lists, /tags/open-source, /tags/organising, /tags/ownership, /tags/payments, /tags/pensions, /tags/planning, /tags/poland, /tags/politics, /tags/public-private-partnership, /tags/public-services, /tags/reference, /tags/referendums, /tags/reform, /tags/research, /tags/robotics, /tags/safeguards, /tags/scale-up, /tags/science, /tags/selection, /tags/sidecar, /tags/skills, /tags/smart-contracts, /tags/smes, /tags/social-dialogue, /tags/sortition, /tags/sovereignty, /tags/specs, /tags/standardization, /tags/strategy, /tags/subsidiarity, /tags/surplus, /tags/sustainability, /tags/switzerland, /tags/technology, /tags/transportation, /tags/treaties, /tags/union-of-nations, /tags/urban-planning, /tags/vision, /tags/work, /tags/workforce-mobility

## IA shape checks (E006-T14)

### Two-click depth from / (15 of 27 pages)
| Route | Clicks from / |
|---|---|
| /book/cheap-is-wealth | unreachable |
| /book/choosing-people | unreachable |
| /book/direct-democracy | unreachable |
| /book/education-and-migration | unreachable |
| /book/european-science | unreachable |
| /book/first-move | unreachable |
| /book/new-cities | unreachable |
| /book/redesigning-the-state | unreachable |
| /book/safeguards | unreachable |
| /book/steering | unreachable |
| /book/the-shorter-week | unreachable |
| /book/who-it-earns-for | unreachable |
| /manifesto | unreachable |
| /book | unreachable |
| /site-map | unreachable |

### `layer`/`kind` frontmatter (20 of 20 entries missing one)
| File | Missing |
|---|---|
| src/content/docs/book/cheap-is-wealth.md:1 | layer, kind |
| src/content/docs/book/choosing-people.md:1 | layer, kind |
| src/content/docs/book/designing-our-retirement.md:1 | layer, kind |
| src/content/docs/book/direct-democracy.md:1 | layer, kind |
| src/content/docs/book/education-and-migration.md:1 | layer, kind |
| src/content/docs/book/european-egovernment.mdx:1 | layer, kind |
| src/content/docs/book/european-english.mdx:1 | layer, kind |
| src/content/docs/book/european-science.md:1 | layer, kind |
| src/content/docs/book/first-move.md:1 | layer, kind |
| src/content/docs/book/new-cities.md:1 | layer, kind |
| src/content/docs/book/political-path.md:1 | layer, kind |
| src/content/docs/book/redesigning-the-state.md:1 | layer, kind |
| src/content/docs/book/robotic-reindustrialisation.md:1 | layer, kind |
| src/content/docs/book/safeguards.md:1 | layer, kind |
| src/content/docs/book/steering.md:1 | layer, kind |
| src/content/docs/book/the-shorter-week.md:1 | layer, kind |
| src/content/docs/book/the-total-state.md:1 | layer, kind |
| src/content/docs/book/who-it-earns-for.md:1 | layer, kind |
| src/content/docs/why.mdx:1 | kind |
| src/content/docs/manifesto.mdx:1 | kind |

### Glossary hrefs resolve (0 of 0 broken)
_none_

### No `/docs/` links in chapters, /why or /manifesto (0 found, 20 files scanned)
_none_

### No built link to a retired redirect-table path (118 found)
| Link | From page | Where |
|---|---|---|
| /vision/language-integration | /book/european-english | dist/book/european-english/index.html |
| /docs/why | /docs | dist/docs/index.html |
| /docs/book/cheap-is-wealth | /docs | dist/docs/index.html |
| /docs/book/choosing-people | /docs | dist/docs/index.html |
| /docs/book/designing-our-retirement | /docs | dist/docs/index.html |
| /docs/book/digital-receipts | /docs | dist/docs/index.html |
| /docs/book/direct-democracy | /docs | dist/docs/index.html |
| /docs/book/egov-challenges | /docs | dist/docs/index.html |
| /docs/book/egov-vison | /docs | dist/docs/index.html |
| /docs/book/economic-growth-language-unity | /docs | dist/docs/index.html |
| /docs/book/education-and-migration | /docs | dist/docs/index.html |
| /docs/book/european-blockchain-archives | /docs | dist/docs/index.html |
| /docs/book/european-egovernment | /docs | dist/docs/index.html |
| /docs/book/european-elearning-system | /docs | dist/docs/index.html |
| /docs/book/european-english | /docs | dist/docs/index.html |
| /docs/book/european-science | /docs | dist/docs/index.html |
| /docs/book/first-move | /docs | dist/docs/index.html |
| /docs/book/language-integration-administrative-implementation | /docs | dist/docs/index.html |
| /docs/book/language | /docs | dist/docs/index.html |
| /docs/book/media-cultural-integration | /docs | dist/docs/index.html |
| /docs/book/near-zero-transaction-costs | /docs | dist/docs/index.html |
| /docs/book/new-cities | /docs | dist/docs/index.html |
| /docs/book/political-path | /docs | dist/docs/index.html |
| /docs/book/predictive-healthcare-system | /docs | dist/docs/index.html |
| /docs/book/redesigning-the-state | /docs | dist/docs/index.html |
| /docs/book/robotic-reindustrialisation | /docs | dist/docs/index.html |
| /docs/book/safeguards | /docs | dist/docs/index.html |
| /docs/book/steering | /docs | dist/docs/index.html |
| /docs/book/the-shorter-week | /docs | dist/docs/index.html |
| /docs/book/the-total-state | /docs | dist/docs/index.html |
| /docs/book/unified-payment-zone | /docs | dist/docs/index.html |
| /docs/book/who-it-earns-for | /docs | dist/docs/index.html |
| /docs/book/european-egovernment | /tags/administration | dist/tags/administration/index.html |
| /docs/book/the-total-state | /tags/administration | dist/tags/administration/index.html |
| /docs/book/european-science | /tags/artificial-intelligence | dist/tags/artificial-intelligence/index.html |
| /docs/book/cheap-is-wealth | /tags/automation | dist/tags/automation/index.html |
| /docs/book/robotic-reindustrialisation | /tags/automation | dist/tags/automation/index.html |
| /docs/book/the-shorter-week | /tags/automation | dist/tags/automation/index.html |
| /docs/book/the-total-state | /tags/central-europe | dist/tags/central-europe/index.html |
| /docs/book/egov-challenges | /tags/challenges | dist/tags/challenges/index.html |
| /docs/book/new-cities | /tags/cities | dist/tags/cities/index.html |
| /docs/book/choosing-people | /tags/competence | dist/tags/competence/index.html |
| /docs/book/safeguards | /tags/constitutional-design | dist/tags/constitutional-design/index.html |
| /docs/book/cheap-is-wealth | /tags/cooperatives | dist/tags/cooperatives/index.html |
| /docs/book/european-english | /tags/culture | dist/tags/culture/index.html |
| /docs/book/steering | /tags/cybernetics | dist/tags/cybernetics/index.html |
| /docs/book/steering | /tags/decision-speed | dist/tags/decision-speed/index.html |
| /docs/book/robotic-reindustrialisation | /tags/defence | dist/tags/defence/index.html |
| /docs/book/designing-our-retirement | /tags/demographics | dist/tags/demographics/index.html |
| /docs/book/european-egovernment | /tags/digital | dist/tags/digital/index.html |
| /docs/book/the-total-state | /tags/digital-identity | dist/tags/digital-identity/index.html |
| /docs/book/egov-challenges | /tags/digital-transformation | dist/tags/digital-transformation/index.html |
| /docs/book/egov-vison | /tags/digital-transformation | dist/tags/digital-transformation/index.html |
| /docs/book/first-move | /tags/eci | dist/tags/eci/index.html |
| /docs/book/economic-growth-language-unity | /tags/economic-growth | dist/tags/economic-growth/index.html |
| /docs/book/cheap-is-wealth | /tags/economics | dist/tags/economics/index.html |
| /docs/book/who-it-earns-for | /tags/economics | dist/tags/economics/index.html |
| /docs/book/choosing-people | /tags/elections | dist/tags/elections/index.html |
| /docs/book/european-english | /tags/english | dist/tags/english/index.html |
| /docs/book/economic-growth-language-unity | /tags/eu | dist/tags/eu/index.html |
| /docs/book/language | /tags/eu | dist/tags/eu/index.html |
| /docs/why | /tags/eu | dist/tags/eu/index.html |
| /docs/book/european-english | /tags/eu-reform | dist/tags/eu-reform/index.html |
| /docs/book/first-move | /tags/european-citizens'-initiative | dist/tags/european-citizens'-initiative/index.html |
| /docs/book/safeguards | /tags/european-citizens'-initiative | dist/tags/european-citizens'-initiative/index.html |
| /docs/book/redesigning-the-state | /tags/european-integration | dist/tags/european-integration/index.html |
| /docs/book/steering | /tags/feedback | dist/tags/feedback/index.html |
| /docs/book/redesigning-the-state | /tags/germany | dist/tags/germany/index.html |
| /docs/book/education-and-migration | /tags/global-south | dist/tags/global-south/index.html |
| /docs/book/european-science | /tags/health | dist/tags/health/index.html |
| /docs/book/new-cities | /tags/health | dist/tags/health/index.html |
| /docs/book/new-cities | /tags/housing | dist/tags/housing/index.html |
| /docs/book/redesigning-the-state | /tags/incentives | dist/tags/incentives/index.html |
| /docs/book/steering | /tags/industrial-policy | dist/tags/industrial-policy/index.html |
| /docs/book/robotic-reindustrialisation | /tags/industry | dist/tags/industry/index.html |
| /docs/book/redesigning-the-state | /tags/institutional-design | dist/tags/institutional-design/index.html |
| /docs/book/european-english | /tags/integration | dist/tags/integration/index.html |
| /docs/book/the-shorter-week | /tags/labour | dist/tags/labour/index.html |
| /docs/book/european-english | /tags/language | dist/tags/language/index.html |
| /docs/book/european-science | /tags/mental-health | dist/tags/mental-health/index.html |
| /docs/book/education-and-migration | /tags/migration | dist/tags/migration/index.html |
| /docs/book/choosing-people | /tags/ministers | dist/tags/ministers/index.html |
| /docs/why | /tags/objections | dist/tags/objections/index.html |
| /docs/book/choosing-people | /tags/open-lists | dist/tags/open-lists/index.html |
| /docs/book/first-move | /tags/organising | dist/tags/organising/index.html |
| /docs/book/cheap-is-wealth | /tags/ownership | dist/tags/ownership/index.html |
| /docs/book/who-it-earns-for | /tags/ownership | dist/tags/ownership/index.html |
| /docs/book/designing-our-retirement | /tags/pensions | dist/tags/pensions/index.html |
| /docs/book/new-cities | /tags/planning | dist/tags/planning/index.html |
| /docs/book/political-path | /tags/politics | dist/tags/politics/index.html |
| /docs/book/who-it-earns-for | /tags/public-services | dist/tags/public-services/index.html |
| /docs/book/direct-democracy | /tags/referendums | dist/tags/referendums/index.html |
| /docs/book/safeguards | /tags/referendums | dist/tags/referendums/index.html |
| /docs/book/language | /tags/reform | dist/tags/reform/index.html |
| /docs/why | /tags/reform | dist/tags/reform/index.html |
| /docs/book/european-science | /tags/research | dist/tags/research/index.html |
| /docs/book/designing-our-retirement | /tags/robotics | dist/tags/robotics/index.html |
| /docs/book/robotic-reindustrialisation | /tags/robotics | dist/tags/robotics/index.html |
| /docs/book/safeguards | /tags/safeguards | dist/tags/safeguards/index.html |
| /docs/book/european-science | /tags/science | dist/tags/science/index.html |
| /docs/book/choosing-people | /tags/selection | dist/tags/selection/index.html |
| /docs/book/steering | /tags/social-dialogue | dist/tags/social-dialogue/index.html |
| /docs/book/choosing-people | /tags/sortition | dist/tags/sortition/index.html |
| /docs/book/direct-democracy | /tags/sovereignty | dist/tags/sovereignty/index.html |
| /docs/book/designing-our-retirement | /tags/strategy | dist/tags/strategy/index.html |
| /docs/book/direct-democracy | /tags/strategy | dist/tags/strategy/index.html |
| /docs/book/education-and-migration | /tags/strategy | dist/tags/strategy/index.html |
| /docs/book/first-move | /tags/strategy | dist/tags/strategy/index.html |
| /docs/book/political-path | /tags/strategy | dist/tags/strategy/index.html |
| /docs/book/robotic-reindustrialisation | /tags/strategy | dist/tags/strategy/index.html |
| /docs/book/redesigning-the-state | /tags/subsidiarity | dist/tags/subsidiarity/index.html |
| /docs/book/who-it-earns-for | /tags/surplus | dist/tags/surplus/index.html |
| /docs/book/safeguards | /tags/switzerland | dist/tags/switzerland/index.html |
| /docs/book/political-path | /tags/treaties | dist/tags/treaties/index.html |
| /docs/book/direct-democracy | /tags/union-of-nations | dist/tags/union-of-nations/index.html |
| /docs/book/egov-vison | /tags/vision | dist/tags/vision/index.html |
| /docs/book/cheap-is-wealth | /tags/work | dist/tags/work/index.html |
| /docs/book/the-shorter-week | /tags/work | dist/tags/work/index.html |

### Concepts link their canonical href (0 of 0 concept declarations missing one)
_none_
