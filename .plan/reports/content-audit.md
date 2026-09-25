# Content audit — 2026-09-25

## TLDR
Scanned 201 built routes, 59 content files, 306 links (17 unique external).
Found 27 links to draft pages, 8 links to missing pages, 7 dead external links, 13 orphan pages, 15 drafts, 19 pages missing a meta description, 11 duplicate descriptions.

## Links to draft pages (27) — 404 in production
| Link | Where | Draft file |
|---|---|---|
| /docs/book/language | src/content/docs/book/european-english.mdx:218 | src/content/docs/book/language.md |
| /docs/book/language | src/content/docs/ideas/culture/language-integration.mdx:168 | src/content/docs/book/language.md |
| /book/language-integration-administrative-implementation/ | src/content/docs/index.mdx:29 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration/ | src/content/docs/index.mdx:30 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity/ | src/content/docs/index.mdx:31 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language/ | src/content/docs/index.mdx:32 | src/content/docs/book/language.md |
| /book/predictive-healthcare-system/ | src/content/docs/index.mdx:48 | src/content/docs/book/predictive-healthcare-system.mdx |
| /book/european-elearning-system/ | src/content/docs/index.mdx:49 | src/content/docs/book/european-elearning-system.mdx |
| /book/european-blockchain-archives/ | src/content/docs/index.mdx:50 | src/content/docs/book/european-blockchain-archives.mdx |
| /book/unified-payment-zone/ | src/content/docs/index.mdx:69 | src/content/docs/book/unified-payment-zone.mdx |
| /book/near-zero-transaction-costs/ | src/content/docs/index.mdx:70 | src/content/docs/book/near-zero-transaction-costs.md |
| /book/digital-receipts/ | src/content/docs/index.mdx:71 | src/content/docs/book/digital-receipts.mdx |
| /book/language-integration-administrative-implementation | src/pages/docs/all.astro:142 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration | src/pages/docs/all.astro:143 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity | src/pages/docs/all.astro:144 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/egov-vison | src/pages/docs/all.astro:151 | src/content/docs/book/eGov-vison.mdx |
| /book/predictive-healthcare-system | src/pages/docs/all.astro:159 | src/content/docs/book/predictive-healthcare-system.mdx |
| /book/european-elearning-system | src/pages/docs/all.astro:160 | src/content/docs/book/european-elearning-system.mdx |
| /book/european-blockchain-archives | src/pages/docs/all.astro:161 | src/content/docs/book/european-blockchain-archives.mdx |
| /book/unified-payment-zone | src/pages/docs/all.astro:177 | src/content/docs/book/unified-payment-zone.mdx |
| /book/near-zero-transaction-costs | src/pages/docs/all.astro:178 | src/content/docs/book/near-zero-transaction-costs.md |
| /book/digital-receipts | src/pages/docs/all.astro:179 | src/content/docs/book/digital-receipts.mdx |
| /book/language-integration-administrative-implementation | src/pages/vision/language-integration.astro:207 | src/content/docs/book/language-integration-administrative-implementation.mdx |
| /book/media-cultural-integration | src/pages/vision/language-integration.astro:208 | src/content/docs/book/media-cultural-integration.mdx |
| /book/economic-growth-language-unity | src/pages/vision/language-integration.astro:209 | src/content/docs/book/economic-growth-language-unity.mdx |
| /book/language | src/pages/vision/language-integration.astro:210 | src/content/docs/book/language.md |
| /book/predictive-healthcare-system | src/components/Footer.astro:43 | src/content/docs/book/predictive-healthcare-system.mdx |

## Links to missing pages (8)
| Link | Where |
|---|---|
| /docs/ideas/technology/autonomous-robotics-system | src/content/docs/ideas/index.mdx:86 |
| /docs/ideas/governance/customized-local-law | src/content/docs/ideas/index.mdx:107 |
| /docs/ideas/agriculture/autonomous-farming | src/content/docs/ideas/index.mdx:121 |
| /docs/ideas/all | src/content/docs/ideas/index.mdx:156 |
| /docs/ideas/all | src/content/docs/ideas/index.mdx:324 |
| /book/language-integration-european-politics/ | src/content/docs/index.mdx:33 |
| /book/language-integration-national-states/ | src/content/docs/index.mdx:34 |
| /sitemap.xml | src/components/Footer.astro:31 |

## Dead external links (7)
| URL | Status | Where |
|---|---|---|
| https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_en.pdf | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:38 |
| https://onlinelibrary.wiley.com/doi/full/10.1111/weng.12646 | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:40 |
| https://commission.europa.eu/system/files/2023-11/styleguide_english_dgt_en.pdf | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:224 |
| https://onlinelibrary.wiley.com/doi/full/10.1111/weng.12646 | 403 (bot block? check by hand) | src/content/docs/book/european-english.mdx:228 |
| https://www.patreon.com/c/zentala | 404 | src/pages/support.astro:31 |
| https://www.patreon.com/c/zentala | 404 | src/pages/support.astro:91 |
| https://www.linkedin.com/in/zentala/ | 999 | src/components/Author.astro:56 |

## Orphan pages (13) — built, but no page links to them
- /commentary
- /confirm
- /docs/book
- /docs/european-english
- /docs/for-you
- /docs/index
- /docs/why-reforms
- /home-classic
- /search
- /ui
- /vision/add/robotic
- /vision/digital-integration
- /vision/robotic-reindustrialization

## Drafts (15) — not published
| File | Title |
|---|---|
| src/content/docs/articles/learning-from-china.mdx | Learning from China - A Vision for EU Integration and Economic Reform |
| src/content/docs/book/digital-receipts.mdx | Digital Receipts |
| src/content/docs/book/economic-growth-language-unity.mdx | Economic Growth Through Language Unity |
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

## Pages missing a meta description (19)
- /commentary
- /docs/book
- /docs/book/digital-receipts
- /docs/book/economic-growth-language-unity
- /docs/book/european-blockchain-archives
- /docs/book/european-elearning-system
- /docs/book/language-integration-administrative-implementation
- /docs/book/media-cultural-integration
- /docs/book/near-zero-transaction-costs
- /docs/book/predictive-healthcare-system
- /docs/book/principles
- /docs/book/unified-payment-zone
- /docs/for-you
- /docs/why
- /home-classic
- /vision/add/robotic
- /vision/digital-integration
- /vision/language-integration
- /vision/robotic-reindustrialization

## Duplicate meta descriptions (11)
- "A comprehensive vision for European integration through technology, language, and infrastructure." — /benefits/baltic-states, /benefits/businesses, /benefits/central-europe, /benefits/citizens, /benefits/ecommerce, /benefits/european-integration, /benefits/european-security, /benefits/france, /benefits/germany, /benefits/information-economy, /benefits/it-startups, /benefits/italy, /benefits/netherlands, /benefits/northern-europe, /benefits/poland, /benefits/regional-development, /benefits/south-eastern-europe, /benefits/southern-europe, /benefits/spain, /benefits/sweden, /benefits/ukraine, /confirm, /docs/all, /docs/articles/blockchain-state, /docs/articles, /docs/articles/learning-from-china, /docs/ideas/finance/european-cryptocurrency, /docs/ideas/governance/blockchain-state, /docs/ideas, /docs/reference, /tags/action, /tags/addressing, /tags/administration, /tags/articles, /tags/automation, /tags/autonomous, /tags/autonomous-vehicles, /tags/blockchain, /tags/central-europe, /tags/certification, /tags/challenges, /tags/china, /tags/citizen-participation, /tags/citizen-power, /tags/civic-technology, /tags/clean-energy, /tags/cooperation, /tags/cryptocurrency, /tags/culture, /tags/decentralization, /tags/defence, /tags/democracy, /tags/demographics, /tags/digital, /tags/digital-currency, /tags/digital-government, /tags/digital-identity, /tags/digital-payments, /tags/digital-state, /tags/digital-transformation, /tags/digital-voting, /tags/direct-democracy, /tags/documentation, /tags/economic-growth, /tags/economic-reform, /tags/economy, /tags/education, /tags/egovernment, /tags/english, /tags/environment, /tags/eu, /tags/eu-reform, /tags/euro, /tags/europe, /tags/finance, /tags/financial-integration, /tags/future, /tags/government, /tags/index, /tags/industry, /tags/infrastructure, /tags/innovation, /tags/integration, /tags/land-restoration, /tags/language, /tags/learning, /tags/lifelong-learning, /tags/logistics, /tags/manifesto, /tags/mobility, /tags/navigation, /tags/objections, /tags/open-source, /tags/payments, /tags/pensions, /tags/poland, /tags/politics, /tags/public-private-partnership, /tags/reference, /tags/referendums, /tags/reform, /tags/research, /tags/robotics, /tags/scale-up, /tags/security, /tags/sidecar, /tags/skills, /tags/smart-contracts, /tags/smes, /tags/sovereignty, /tags/specs, /tags/standardization, /tags/strategy, /tags/sustainability, /tags/technology, /tags/transportation, /tags/treaties, /tags/union-of-nations, /tags/urban-planning, /tags/vision, /tags/workforce-mobility, /ui
- "Europe is aging, the pension model is ending, and we have roughly thirty years of working economy left to build what replaces it." — /book/designing-our-retirement, /docs/book/designing-our-retirement
- "Representative democracy has failed Europe for twenty years. Direct democracy is the highest-leverage change available, and this chapter is the playbook for demanding it." — /book/direct-democracy, /docs/book/direct-democracy
- "Key challenges in implementing a unified European eGovernment system" — /book/egov-challenges, /docs/book/egov-challenges
- "A shared digital government infrastructure for all EU member states" — /book/european-egovernment, /docs/book/european-egovernment
- "How the EU could develop a clear, neutral and testable English standard without replacing national languages or prescribing one accent." — /book/european-english, /docs/book/european-english, /docs/european-english
- "How this gets carried out when the people currently in charge do not want it — through citizens, a coalition of the willing, and direct democracy as the offer." — /book/political-path, /docs/book/political-path
- "How Europe funds robotics through defence research now, converts it to civilian use after the war, and keeps the machines cheap enough that everyone benefits." — /book/robotic-reindustrialisation, /docs/book/robotic-reindustrialisation
- "A state built on typewriters wastes people and money, and a state built on software can switch a person off. Both are true, which is why digitalisation and direct democracy have to ship together." — /book/the-total-state, /docs/book/the-total-state
- "Why I built this site: complaint was all I could find, and complaint without a programme leaves the agenda to whoever else has one. The first demand is that we know what we want." — /docs/manifesto, /manifesto
- "If you accept that Europe is aging and the pension model ends with it, the hard questions start here: why machines and not migrants, who owns them, who pays, and how any of it happens politically." — /docs/why-reforms, /why
