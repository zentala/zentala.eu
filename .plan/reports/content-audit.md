# Content audit — 2026-09-25

## TLDR
Scanned 258 built routes, 69 content files, 440 links (78 unique external).
Found 20 links to draft pages, 8 links to missing pages, 13 dead external links, 15 orphan pages, 16 drafts, 44 pages missing a meta description, 1 duplicate descriptions.

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

## Orphan pages (15) — built, but no page links to them
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
- /ui
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

## Pages missing a meta description (44)
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
- /vision/add/robotic
- /vision/digital-integration
- /vision/language-integration
- /vision/robotic-reindustrialization

## Duplicate meta descriptions (1)
- "A comprehensive vision for European integration through technology, language, and infrastructure." — /benefits/baltic-states, /benefits/businesses, /benefits/central-europe, /benefits/citizens, /benefits/ecommerce, /benefits/european-integration, /benefits/european-security, /benefits/france, /benefits/germany, /benefits/information-economy, /benefits/it-startups, /benefits/italy, /benefits/netherlands, /benefits/northern-europe, /benefits/poland, /benefits/regional-development, /benefits/south-eastern-europe, /benefits/southern-europe, /benefits/spain, /benefits/sweden, /benefits/ukraine, /confirm, /docs/articles/blockchain-state, /docs/articles, /docs/articles/learning-from-china, /docs/ideas/finance/european-cryptocurrency, /docs/ideas/governance/blockchain-state, /docs/ideas, /docs/reference, /tags/action, /tags/addressing, /tags/administration, /tags/articles, /tags/artificial-intelligence, /tags/automation, /tags/autonomous, /tags/autonomous-vehicles, /tags/blockchain, /tags/central-europe, /tags/certification, /tags/challenges, /tags/china, /tags/cities, /tags/citizen-participation, /tags/citizen-power, /tags/civic-technology, /tags/clean-energy, /tags/competence, /tags/constitutional-design, /tags/cooperatives, /tags/cryptocurrency, /tags/culture, /tags/cybernetics, /tags/decentralization, /tags/decision-speed, /tags/defence, /tags/democracy, /tags/demographics, /tags/digital, /tags/digital-currency, /tags/digital-government, /tags/digital-identity, /tags/digital-payments, /tags/digital-state, /tags/digital-transformation, /tags/digital-voting, /tags/direct-democracy, /tags/documentation, /tags/eci, /tags/economic-growth, /tags/economic-reform, /tags/economics, /tags/economy, /tags/education, /tags/egovernment, /tags/elections, /tags/english, /tags/environment, /tags/eu, /tags/eu-reform, /tags/euro, /tags/europe, /tags/european-citizens'-initiative, /tags/european-integration, /tags/feedback, /tags/finance, /tags/financial-integration, /tags/future, /tags/germany, /tags/global-south, /tags/government, /tags/health, /tags/housing, /tags/incentives, /tags/index, /tags/industrial-policy, /tags/industry, /tags/infrastructure, /tags/innovation, /tags/institutional-design, /tags/integration, /tags/labour, /tags/land-restoration, /tags/language, /tags/learning, /tags/lifelong-learning, /tags/logistics, /tags/manifesto, /tags/mental-health, /tags/migration, /tags/ministers, /tags/mobility, /tags/navigation, /tags/objections, /tags/open-lists, /tags/open-source, /tags/organising, /tags/ownership, /tags/payments, /tags/pensions, /tags/planning, /tags/poland, /tags/politics, /tags/public-private-partnership, /tags/public-services, /tags/reference, /tags/referendums, /tags/reform, /tags/research, /tags/robotics, /tags/safeguards, /tags/scale-up, /tags/science, /tags/selection, /tags/sidecar, /tags/skills, /tags/smart-contracts, /tags/smes, /tags/social-dialogue, /tags/sortition, /tags/sovereignty, /tags/specs, /tags/standardization, /tags/strategy, /tags/subsidiarity, /tags/surplus, /tags/sustainability, /tags/switzerland, /tags/technology, /tags/transportation, /tags/treaties, /tags/union-of-nations, /tags/urban-planning, /tags/vision, /tags/work, /tags/workforce-mobility, /ui
