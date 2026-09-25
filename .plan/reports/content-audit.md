# Content audit — 2026-09-25

## TLDR
Scanned 135 built routes, 88 content files, 448 links (75 unique external).
Found 17 links to draft pages, 9 links to missing pages, 13 dead external links, 17 orphan pages, 16 drafts, 48 pages missing a meta description, 1 duplicate descriptions.
IA shape checks: ran — 16 pages over two clicks from /, 0 entries missing layer/kind, 0/0 broken glossary hrefs, 0 /docs/ links in chapters, 112 built links to a retired redirect path, 19/12 concepts missing their canonical link.

## Links to draft pages (17) — 404 in production
| Link | Where | Draft file |
|---|---|---|
| /book/language-integration-administrative-implementation | src/content/docs/book/european-english.mdx:216 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration | src/content/docs/book/european-english.mdx:217 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity | src/content/docs/book/european-english.mdx:218 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language-integration-administrative-implementation | src/content/docs/ideas/culture/language-integration.mdx:166 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration | src/content/docs/ideas/culture/language-integration.mdx:167 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity | src/content/docs/ideas/culture/language-integration.mdx:168 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language-integration-administrative-implementation/ | src/content/docs/index.mdx:30 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration/ | src/content/docs/index.mdx:31 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity/ | src/content/docs/index.mdx:32 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/eGov-challenges | src/content/docs/index.mdx:42 | src/content/docs/book/eGov-challenges.mdx |
| /book/predictive-healthcare-system/ | src/content/docs/index.mdx:49 | src/content/docs/book/predictive-healthcare-system.mdx |
| /book/european-elearning-system/ | src/content/docs/index.mdx:50 | src/content/docs/book/european-elearning-system.mdx |
| /book/european-blockchain-archives/ | src/content/docs/index.mdx:51 | src/content/docs/book/european-blockchain-archives.mdx |
| /book/unified-payment-zone/ | src/content/docs/index.mdx:70 | src/content/docs/book/unified-payment-zone.mdx |
| /book/near-zero-transaction-costs/ | src/content/docs/index.mdx:71 | src/content/docs/book/near-zero-transaction-costs.md |
| /book/digital-receipts/ | src/content/docs/index.mdx:72 | src/content/docs/book/digital-receipts.mdx |
| /book/predictive-healthcare-system | src/components/Footer.astro:43 | src/content/docs/book/predictive-healthcare-system.mdx |

## Links to missing pages (9)
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
| /fonts/inter-latin-standard-normal.woff2 | src/layouts/Layout.astro:64 |

## Dead external links (13)
| URL | Status | Where |
|---|---|---|
| https://www.sciencedirect.com/science/article/pii/S0261379421000500 | 403 (bot block? check by hand) | src/content/docs/book/choosing-people.md:162 |
| https://academic.oup.com/book/32249/chapter/268436667 | 403 (bot block? check by hand) | src/content/docs/book/choosing-people.md:168 |
| https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_en.pdf | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:39 |
| https://onlinelibrary.wiley.com/doi/full/10.1111/weng.12646 | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:41 |
| https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_en.pdf | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:225 |
| https://onlinelibrary.wiley.com/doi/full/10.1111/weng.12646 | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:229 |
| https://journals.sagepub.com/doi/full/10.1177/1023263X18824772 | 403 (bot block? check by hand) | src/content/docs/book/first-move.md:126 |
| https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD(2022 | 404 | src/content/docs/book/safeguards.md:169 |
| https://www.venice.coe.int/webforms/documents/default.aspx?pdffile=CDL-AD(2022 | 404 | src/content/docs/book/safeguards.md:394 |
| https://www.lovguiden.dk/en/det-offentlige/den-europaeiske-revisionsret/2026-03-24-eus-raadgivende-organer-leverer-udtalelser-for-sent-og-maaler-ikke-effekt | 429 | src/content/docs/book/steering.md:210 |
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

## Pages missing a meta description (48)
- /book/language
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
- /tags
- /ui
- /ui/content
- /vision/add/robotic
- /vision/digital-integration
- /vision/language-integration
- /vision/robotic-reindustrialization

## Duplicate meta descriptions (1)
- "A comprehensive vision for European integration through technology, language, and infrastructure." — /benefits/baltic-states, /benefits/businesses, /benefits/central-europe, /benefits/citizens, /benefits/ecommerce, /benefits/european-integration, /benefits/european-security, /benefits/france, /benefits/germany, /benefits/information-economy, /benefits/it-startups, /benefits/italy, /benefits/netherlands, /benefits/northern-europe, /benefits/poland, /benefits/regional-development, /benefits/south-eastern-europe, /benefits/southern-europe, /benefits/spain, /benefits/sweden, /benefits/ukraine, /confirm, /docs/articles/blockchain-state, /docs/articles, /docs/articles/learning-from-china, /docs/ideas/finance/european-cryptocurrency, /docs/ideas/governance/blockchain-state, /docs/ideas, /docs/reference

## IA shape checks (E006-T14)

### Two-click depth from / (16 of 28 pages)
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
| /glossary | unreachable |
| /site-map | unreachable |

### `layer`/`kind` frontmatter (0 of 20 entries missing one)
_none_

### Glossary hrefs resolve (0 of 0 broken)
_none_

### No `/docs/` links in chapters, /why or /manifesto (0 found, 20 files scanned)
_none_

### No built link to a retired redirect-table path (112 found)
| Link | From page | Where |
|---|---|---|
| /tags | /benefits/baltic-states | dist/benefits/baltic-states/index.html |
| /tags | /benefits/businesses | dist/benefits/businesses/index.html |
| /tags | /benefits/central-europe | dist/benefits/central-europe/index.html |
| /tags | /benefits/citizens | dist/benefits/citizens/index.html |
| /tags | /benefits/ecommerce | dist/benefits/ecommerce/index.html |
| /tags | /benefits/european-integration | dist/benefits/european-integration/index.html |
| /tags | /benefits/european-security | dist/benefits/european-security/index.html |
| /tags | /benefits/france | dist/benefits/france/index.html |
| /tags | /benefits/germany | dist/benefits/germany/index.html |
| /tags | /benefits | dist/benefits/index.html |
| /tags | /benefits/information-economy | dist/benefits/information-economy/index.html |
| /tags | /benefits/it-startups | dist/benefits/it-startups/index.html |
| /tags | /benefits/italy | dist/benefits/italy/index.html |
| /tags | /benefits/netherlands | dist/benefits/netherlands/index.html |
| /tags | /benefits/northern-europe | dist/benefits/northern-europe/index.html |
| /tags | /benefits/poland | dist/benefits/poland/index.html |
| /tags | /benefits/regional-development | dist/benefits/regional-development/index.html |
| /tags | /benefits/south-eastern-europe | dist/benefits/south-eastern-europe/index.html |
| /tags | /benefits/southern-europe | dist/benefits/southern-europe/index.html |
| /tags | /benefits/spain | dist/benefits/spain/index.html |
| /tags | /benefits/sweden | dist/benefits/sweden/index.html |
| /tags | /benefits/ukraine | dist/benefits/ukraine/index.html |
| /tags | /book/cheap-is-wealth | dist/book/cheap-is-wealth/index.html |
| /tags | /book/choosing-people | dist/book/choosing-people/index.html |
| /tags | /book/designing-our-retirement | dist/book/designing-our-retirement/index.html |
| /tags | /book/direct-democracy | dist/book/direct-democracy/index.html |
| /tags | /book/education-and-migration | dist/book/education-and-migration/index.html |
| /tags | /book/european-egovernment | dist/book/european-egovernment/index.html |
| /vision/language-integration | /book/european-english | dist/book/european-english/index.html |
| /book/language | /book/european-english | dist/book/european-english/index.html |
| /tags | /book/european-english | dist/book/european-english/index.html |
| /tags | /book/european-science | dist/book/european-science/index.html |
| /tags | /book/first-move | dist/book/first-move/index.html |
| /tags | /book | dist/book/index.html |
| /tags | /book/new-cities | dist/book/new-cities/index.html |
| /tags | /book/political-path | dist/book/political-path/index.html |
| /tags | /book/redesigning-the-state | dist/book/redesigning-the-state/index.html |
| /tags | /book/robotic-reindustrialisation | dist/book/robotic-reindustrialisation/index.html |
| /tags | /book/safeguards | dist/book/safeguards/index.html |
| /tags | /book/steering | dist/book/steering/index.html |
| /tags | /book/the-shorter-week | dist/book/the-shorter-week/index.html |
| /tags | /book/the-total-state | dist/book/the-total-state/index.html |
| /tags | /book/who-it-earns-for | dist/book/who-it-earns-for/index.html |
| /tags | /confirm | dist/confirm/index.html |
| /tags | /docs/all | dist/docs/all/index.html |
| /tags | /docs/articles/blockchain-state | dist/docs/articles/blockchain-state/index.html |
| /tags | /docs/articles | dist/docs/articles/index.html |
| /tags | /docs/articles/learning-from-china | dist/docs/articles/learning-from-china/index.html |
| /book/language | /docs/ideas/culture/language-integration | dist/docs/ideas/culture/language-integration/index.html |
| /tags | /docs/ideas/culture/language-integration | dist/docs/ideas/culture/language-integration/index.html |
| /tags | /docs/ideas/education/european-elearning-system | dist/docs/ideas/education/european-elearning-system/index.html |
| /tags | /docs/ideas/education/european-proof-of-skill | dist/docs/ideas/education/european-proof-of-skill/index.html |
| /tags | /docs/ideas/environment/environment | dist/docs/ideas/environment/environment/index.html |
| /tags | /docs/ideas/finance/european-cryptocurrency | dist/docs/ideas/finance/european-cryptocurrency/index.html |
| /tags | /docs/ideas/finance/unified-payment-zone | dist/docs/ideas/finance/unified-payment-zone/index.html |
| /tags | /docs/ideas/governance/blockchain-state | dist/docs/ideas/governance/blockchain-state/index.html |
| /tags | /docs/ideas/governance/digital-democracy | dist/docs/ideas/governance/digital-democracy/index.html |
| /tags | /docs/ideas/governance/european-egovernment | dist/docs/ideas/governance/european-egovernment/index.html |
| /tags | /docs/ideas | dist/docs/ideas/index.html |
| /tags | /docs/ideas/infrastructure/european-street-naming | dist/docs/ideas/infrastructure/european-street-naming/index.html |
| /tags | /docs/ideas/innovation/supporting-mid-sized-companies | dist/docs/ideas/innovation/supporting-mid-sized-companies/index.html |
| /tags | /docs/ideas/transportation/autonomous-multimodal | dist/docs/ideas/transportation/autonomous-multimodal/index.html |
| /tags | /docs/ideas/transportation/autonomous-transportation | dist/docs/ideas/transportation/autonomous-transportation/index.html |
| /tags | /docs/ideas-catalog | dist/docs/ideas-catalog/index.html |
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
| /tags | /docs | dist/docs/index.html |
| /tags | /docs/reference | dist/docs/reference/index.html |
| /tags | /glossary | dist/glossary/index.html |
| /tags | / | dist/index.html |
| /tags | /manifesto | dist/manifesto/index.html |
| /tags | /principles | dist/principles/index.html |
| /tags | /privacy | dist/privacy/index.html |
| /tags | /search | dist/search/index.html |
| /tags | /site-map | dist/site-map/index.html |
| /tags | /support | dist/support/index.html |
| /tags | /terms | dist/terms/index.html |
| /tags | /transcripts/europe-make-or-break | dist/transcripts/europe-make-or-break/index.html |
| /tags | /transcripts | dist/transcripts/index.html |
| /tags | /transcripts/it-is-time-for-intermarium-20-against-russia | dist/transcripts/it-is-time-for-intermarium-20-against-russia/index.html |
| /tags | /transcripts/the-eu-could-die | dist/transcripts/the-eu-could-die/index.html |
| /tags | /vision | dist/vision/index.html |
| /tags | /why | dist/why/index.html |

### Concepts link their canonical href (19 of 12 concept declarations missing one)
| File | Concept | Expected canonical href |
|---|---|---|
| src/content/docs/book/cheap-is-wealth.md:1 | who-captures-the-gains | /book/cheap-is-wealth |
| src/content/docs/book/choosing-people.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/choosing-people.md:1 | sortition | /glossary#sortition |
| src/content/docs/book/direct-democracy.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/direct-democracy.md:1 | union-of-nations | /glossary#union-of-nations |
| src/content/docs/book/european-egovernment.mdx:1 | the-digital-state | /glossary#the-digital-state |
| src/content/docs/book/first-move.md:1 | european-citizens-initiative | /glossary#european-citizens-initiative |
| src/content/docs/book/first-move.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/political-path.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/redesigning-the-state.md:1 | the-digital-state | /glossary#the-digital-state |
| src/content/docs/book/safeguards.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/safeguards.md:1 | european-citizens-initiative | /glossary#european-citizens-initiative |
| src/content/docs/book/steering.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/steering.md:1 | requisite-variety | /glossary#requisite-variety |
| src/content/docs/book/the-shorter-week.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/the-total-state.md:1 | the-digital-state | /glossary#the-digital-state |
| src/content/docs/book/the-total-state.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
| src/content/docs/book/who-it-earns-for.md:1 | who-captures-the-gains | /book/cheap-is-wealth |
| src/content/docs/book/who-it-earns-for.md:1 | semi-direct-democracy | /glossary#semi-direct-democracy |
