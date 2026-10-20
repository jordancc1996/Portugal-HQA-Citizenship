# Architecture, content, and factual audit

Audit date: 20 October 2026. Scope: source in this repo and the built files in `dist/`. No pages, facts, or copy were changed for this audit.

The site is a static Astro build. Program facts live in `docs/facts.json`, loaded only by `src/data/facts.ts`. Approved sentences live in `docs/content/*.md`. Those markdown files are not imported at build time. Each public page is a separate file under `src/pages/`, with the approved sentences copied into it.

## Executive findings

1. Privacy and terms are marked `status: DRAFT - must be reviewed by the lawyer before launch` in `docs/content/privacy.md` and `docs/content/terms.md`. Both are built, indexable, and listed in the sitemap. The draft flag is not shown on the page, which is what the build rule required, but the pages are still public legal text.

2. The site says a legal-review date is shown on each page. `src/data/reviews.ts` sets every recorded path to `null`, and several live paths are missing from that file. The rendered line is only "Last verified". No page shows a lawyer review date. Home still says: "Each page shows its review date."

3. `BaseLayout.astro` stamps every `WebPage` `dateModified` with `facts.lastVerified`, which is `2026-10-19`. Pages whose visible date is 20 October 2026, including the privacy and terms "Last updated" lines, still emit `2026-10-19` on `WebPage`. `Article` dates on the newer guides are `2026-10-20`. The two dates disagree on the same page.

4. `facts.legalBasis` says articles 61 and 90 of Lei 23/2007, and labels that `CONFIRMED`. The URL stored as its source is a Tech Visa portaria PDF, not the foreigners law. That source does not support the claim as cited.

5. Article pages do not read `facts.ts` for the claims they repeat. The same numbers are typed again in `docs/content/*.md` and again in each `.astro` file. `facts.ts` is used for visible program facts only on `/styleguide`, plus the site-wide date on the home page, the investment page, and every `WebPage` node.

6. There is no `llms.txt`, no published Markdown alternate, and no Astro content collection. A crawler gets static HTML, one self-referencing canonical per page, JSON-LD, and the sitemap. The guide index is the only machine-readable content list, and it covers the guides, not the whole site.

No internal link in `dist/` points at a missing page or file. `/styleguide` is the only HTML page omitted from the sitemap, and it is `noindex`.

## Route/indexation inventory

23 indexable routes, all present in `dist/sitemap-0.xml`. One noindex route.

| Route | Indexable | In sitemap | Canonical | Schema |
|---|---|---|---|---|
| `/` | yes | yes | self | WebSite, WebPage, FAQPage |
| `/portugal-hqa-visa-investment` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-visa-cost` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-visa-requirements` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-visa-family` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/portugal-hqa-vs-golden-visa` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-vs-startup-visa-tech-visa` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-visa-for-americans` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-visa-due-diligence` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/hqa-visa-status` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList |
| `/guides` | yes | yes | self | WebSite, WebPage, CollectionPage, BreadcrumbList |
| `/guides/what-is-hqa-visa` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/guides/hqa-visa-citizenship-10-year-rule` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/guides/hqa-visa-presence-requirements` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/guides/hqa-visa-ifici-tax` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/guides/hqa-visa-permanent-residency` | yes | yes | self | WebSite, WebPage, Article, BreadcrumbList, FAQPage |
| `/methodology` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/about` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/contact` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/consultation` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/privacy` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/terms` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/image-credits` | yes | yes | self | WebSite, WebPage, BreadcrumbList |
| `/styleguide` | no (`noindex`) | no | self | WebSite, WebPage, FAQPage, BreadcrumbList |

`/downloads/hqa-due-diligence-checklist-2026.pdf` is a static file in `dist/downloads/`. It is not an HTML route and it is not in the sitemap.

### Registry discrepancies

- `src/data/pages.ts` has no entry for `/guides`. The guides index hardcodes `lastVerified` as `2026-10-20`.
- `src/data/reviews.ts` includes `/hqa-visa-process-timeline`. There is no page and no content file for that path.
- `reviews.ts` has no keys for `/methodology`, `/about`, `/contact`, `/consultation`, `/privacy`, `/terms`, or `/image-credits`. Those pages do not render `LastVerified`, so the gap is latent.
- There is no Astro content collection. `docs/content/*.md` is an editorial source, not a runtime source.
- Page templates: one layout, `src/layouts/BaseLayout.astro`. Body copy, FAQ arrays, and comparison tables are written into each page file. Shared pieces are `FAQ`, `Table`, `KeyFacts`, `LastVerified`, `ChecklistForm`, and `ConsultationForm`.
- FAQ text is the `items` array in each page. The same array is passed to `FAQ.astro`, which prints the questions and the `FAQPage` JSON-LD. Styleguide FAQs are the exception: three answers are read from `facts.ts`.
- Comparison tables are not a shared dataset. They are HTML tables on `/`, `/portugal-hqa-visa-investment`, `/portugal-hqa-vs-golden-visa`, and `/hqa-vs-startup-visa-tech-visa`.
- Metadata is copied from each content file's frontmatter into that page's `BaseLayout` props. It is not generated from `pages.ts`.
- `pages.ts` titles do not all match the H1. Example: the investment entry is the H1, while the document title is "Portugal HQA Visa Investment - What €175,000 Buys". That split matches the approved frontmatter. It is not a second fact.

### Redirects

`vercel.json` sets `trailingSlash: false` and `cleanUrls: true`. `astro.config.mjs` sets `trailingSlash: "never"`. There is no redirect map from old paths to new paths. Sitemap URLs have no trailing slash. This audit did not request the live host, so it does not confirm how production treats a slash URL.

## Technical issues

Genuine problems, not preferences:

- Draft privacy and terms pages are indexable. See executive finding 1.
- `WebPage.dateModified` does not follow the page's own verified date. See executive finding 3.
- Visible copy claims a review date that the HTML does not show. See executive finding 2.

Checked and not treated as defects:

- `public/robots.txt` allows `/` and points at `https://portugalhqacitizenship.com/sitemap-index.xml`.
- Every indexable route is in the sitemap. `/styleguide` is not. The PDF is not.
- Every page has one self-referencing canonical on `https://portugalhqacitizenship.com`.
- The only `noindex` page is `/styleguide`.
- Primary copy is in the static HTML. It does not depend on the form scripts.
- No HTML route is an orphan except `/styleguide`, which is intentional. Header, footer, the home guide list, or the guides index links the other routes.
- No second URL was found for the same page in the sitemap. Trailing-slash handling is configured, not proven on the host.
- Internal links in `dist/` resolve. The checklist PDF is present.

Preferences, not failures: home has no breadcrumb; utility pages have no `Article` node; there is no `Organization` node. Those match the site rules.

## Topic ownership map

The authoritative page is the one that should be updated first. Other pages may keep a short statement and a link. "Drift risk" is high when the same number is typed in several files and is not read from `facts.ts`.

| Topic / fact | Authoritative page | Other pages repeating it | Drift risk |
|---|---|---|---|
| Whether the route is still open, and the dated law log | `/hqa-visa-status` | Home, investment, due diligence | Medium. Status is the log. Other pages repeat the current rule, not the log. |
| What "HQA visa" means, articles 61 and 90 | `/guides/what-is-hqa-visa` | Home, investment, requirements, family, comparisons | High. The legal label is repeated, and `facts.legalBasis` cites the wrong document. |
| No legal minimum investment | `/portugal-hqa-visa-investment` and `/hqa-visa-cost` | Home, requirements, comparisons, FAQs | High. Same sentence in many files. `facts.legalMinimumInvestment` is not what the pages render. |
| Reported package price, about €170,000 to €200,000, often €175,000 | `/hqa-visa-cost` | Home, investment, comparisons, due diligence, Americans | High. Price is typed everywhere. Status in `facts.json` is `REPORTED`. |
| €150,000 / €25,000 split of one published package | `/hqa-visa-cost` | Investment page | Low. Both call it one provider's figure. |
| Government fees after 1 March 2026, including "up to 33%" | `/hqa-visa-cost` for amounts, `/hqa-visa-status` for the change log | Cost unknowns, status table | Medium. `facts.governmentFees` does not contain 33%. Both pages say the amounts are not confirmed. |
| Who qualifies, articles and documents | `/hqa-visa-requirements` | What-is guide, investment | Medium. |
| Family reunification and the article 90 exemption | `/hqa-visa-family` | Home, investment, status, both comparisons, FAQs | High. The 2-year rule is repeated. The 15-month / 18-month exception is only on the family page and is not in `facts.json`. |
| Golden Visa family also exempt from the 2-year wait | `/portugal-hqa-vs-golden-visa` | Home comparison table | Medium. Not in `facts.json`. Needs the statute, not another page. |
| Absence limits: 6 consecutive months or 8 non-consecutive months | `/guides/hqa-visa-presence-requirements` | Home, investment, Americans, Golden Visa comparison | High. |
| Golden Visa stay: 7 days, then 14 | `/portugal-hqa-vs-golden-visa` | Home table, presence guide | Medium. |
| Permanent residence after 5 years | `/guides/hqa-visa-permanent-residency` | Citizenship guide, status | Medium. |
| Citizenship: 10 years, 7 for EU and CPLP nationals, in force 19 May 2026 | `/guides/hqa-visa-citizenship-10-year-rule` | Almost every guide, home, status, comparisons | High. |
| 12-year aggregation window (9 for EU and CPLP) | `/guides/hqa-visa-citizenship-10-year-rule` | Presence guide table | Medium. Not in `facts.json`. The two pages agree. |
| When the residence clock starts | `/guides/hqa-visa-citizenship-10-year-rule` | Status "what we are waiting for" | Low if both stay qualified. `facts.citizenshipClockStart` is `UNVERIFIED`. |
| IFICI: 20% for 10 years, not automatic, 15 January | `/guides/hqa-visa-ifici-tax` | Investment page, Americans page | Medium. |
| US tax continues for US citizens | `/hqa-visa-for-americans` | None as a full treatment | Low. |
| HQA vs Golden Visa | `/portugal-hqa-vs-golden-visa` | Home table, investment table | Medium. Home table is shorter, not a different rule. |
| HQA vs StartUP Visa vs Tech Visa | `/hqa-vs-startup-visa-tech-visa` | What-is guide (article 89 vs 90) | Medium. |
| How to test a provider | `/hqa-visa-due-diligence` | Checklist form on many pages | Low. The form collects an email. It does not score a provider. |
| How this site checks facts | `/methodology` | Home "How we work", about | High for the review-date sentence, because the HTML does not show one. |
| Personal data | `/privacy` | Form consent lines | Medium. Draft status. |
| Terms of use | `/terms` | Footer disclaimer is shorter | Medium. Draft status. |

## Factual contradictions

These are conflicts or qualified statements that a reader can see. They are not resolved here.

1. Review date. Home (`docs/content/home.md` and the built page) says each page shows its review date. About says the same. Methodology says a date is shown, and also says a date is shown only when a review took place. `reviews.ts` is all `null`. The built `LastVerified` line does not include a lawyer date. The "shows its review date" sentence is not true of the HTML.

2. Verified date in JSON-LD versus the page. Visible "Last verified" or "Last updated" on the 20 October 2026 pages is 20 October 2026. `WebPage.dateModified` is `2026-10-19` because `BaseLayout` always uses `facts.lastVerified`. Affected `Article` pages also emit `Article.dateModified` of `2026-10-20`. Two machine-readable dates, one human date.

3. Guides index metadata. The meta description says the guides are "each verified and legally reviewed." The pages do not show a review date. "Verified" here is easy to read as legal sign-off.

4. No contradiction found between the repeated numeric rules that are in both `facts.json` and the pages: no statutory minimum, reported band about €170,000 to €200,000, permit 2 years then 3-year renewals, 6 and 8 month absences, Golden Visa 7 then 14 days, article 90 family exemption, 5 years to permanent residence, 10 and 7 years to citizenship, IFICI 20% and 15 January, AIMA 90 days extendable by 30, fees changed on 1 March 2026 and amounts not confirmed. The pages keep the qualifiers ("about", "reported", "legal deadline, not a measured average").

5. The 12-year window is stated as a rule on the citizenship and presence pages. It is not in `facts.json`. That is a registry gap, not a fight between the two pages. `docs/research-brief.md` calls it confirmed and cites Lei Orgânica 1/2026, articles 6(1)(b) and 15(3). This audit did not open that statute.

6. "Up to 33%" appears on the cost page and the status page as a reported increase. `facts.governmentFees` does not mention 33% and is `UNVERIFIED`. The pages do say the new amounts are not confirmed. The percentage is an extra reported claim outside the fact file.

## Source-quality gaps

Classes used here: official primary (the statute or an official agency PDF), high-quality secondary (a structured statute mirror or a named official-adjacent text), weak secondary (a firm page or an unnamed provider), no source (no URL).

| Claim in `docs/facts.json` | Status in file | Source class |
|---|---|---|
| Articles 61 and 90, Lei 23/2007 | CONFIRMED | Mismatched. The URL is `portaria_328_18_techvisa.pdf` on vistos.mne.gov.pt, a Tech Visa document. |
| No legal minimum investment | CONFIRMED | Secondary. leximigratoria mirror of article 90. The "none" is an inference from what that text does not set. |
| Package price band | REPORTED | No source URL. The note says provider and law firm websites. |
| Permit valid 2 years, then 3-year renewals | CURRENT | Secondary. leximigratoria article 75. |
| 6-month / 8-month absence | CURRENT | Weak secondary. lvpadvogados.com article. |
| Golden Visa 7 days then 14 | CURRENT | Secondary. leximigratoria article 90-A. |
| Article 90 family exemption, October 2025 | CONFIRMED | Official primary. Diário da República PDF for Lei 61/2025. |
| Permanent residence after 5 years | CURRENT | Weak secondary. mcs.pt article. The residency page instead cites "Lei 23/2007, article 80" with no URL. |
| 10 years / 7 years citizenship | CONFIRMED | Official primary. Diário da República PDF for Lei Orgânica 1/2026. |
| Law in force 19 May 2026 | CONFIRMED | Same official PDF. |
| Pending applications keep old nationality rules | CONFIRMED | Same official PDF. Not re-read for this audit. |
| When the residence clock starts | UNVERIFIED | The file itself says the law text does not say this expressly. |
| IFICI 20% and 15 January | CONFIRMED | Official primary. Portal das Finanças PDF. |
| Golden Visa amounts and closed real-estate route | CURRENT | Secondary. leximigratoria consolidated text. |
| AIMA 90 days, extendable by 30 | CONFIRMED | Official primary. Diário da República PDF for the September 2026 law. |
| AIMA fees changed 1 March 2026, amounts unknown | UNVERIFIED | Weak. `https://aima.gov.pt` with no fee-table URL. |

Page-only claims with no entry in `facts.json`:

- 12-year and 9-year aggregation windows. Law named on the citizenship page. Article numbers are only in `docs/research-brief.md`.
- Spouse exception: 18 months of prior cohabitation, application after 15 months. Family page. The source line is Lei 61/2025, not a pinpoint.
- Golden Visa families exempt from the 2-year wait. Comparison pages. Not in the fact file.
- Residence visa valid 120 days, two entries. What-is guide.
- One provider's €150,000 / €25,000 split. Cost and investment pages. Correctly labelled as a provider figure, with no URL.
- Reported fee increases of up to 33%. Cost and status pages.

Do not treat `docs/research-brief.md` as a source the site can cite. It is an internal note.

## Metadata problems

Metadata matches the approved frontmatter. It does not always match the H1, because the approved title and the approved H1 differ on purpose (hyphen in the title, colon in the H1, and sometimes "2026" only in the title). Open Graph title uses the frontmatter `title`. The document `<title>` uses `metaTitle`. Twitter title matches the Open Graph title. Twitter card is `summary_large_image` where an image is set.

Problems that change what a reader or agent would believe:

- Guides index description: "each verified and legally reviewed." Review dates are not on the pages.
- About description: "with legally reviewed pages." Same gap.
- Home title and H1 disagree in wording ("Independent Guide" versus "An Independent, Verified Guide"). "Verified" is not defined on the title tag.
- Privacy meta description is 143 characters. Presence meta description is 170 characters. Both match the approved file. They are length misses against the site's own 150 to 160 character rule, not factual errors.
- Privacy and terms are indexable while their source files still say DRAFT.

No meta description was found that states a fee, a year count, or an approval outcome the body rejects. Cost, citizenship, IFICI, and comparison descriptions use the same qualified numbers as the body.

## Structured-data problems

What is present, and whether it matches the page:

- `WebSite` on every page, `@id` `https://portugalhqacitizenship.com/#website`. No `Organization`. That matches the rule that no company is claimed.
- `WebPage` with `isPartOf` the website. `dateModified` is wrong on every page whose own date is not `2026-10-19`. See finding 3.
- `Article` on the long guides, with `headline` equal to the H1 and no `author` or `publisher`. Headline match is correct. `dateModified` on `Article` follows the page date, so it can disagree with `WebPage` on the same URL.
- `FAQPage` only where `FAQ.astro` is rendered, from the same items as the visible questions. Home has `FAQPage` and no `BreadcrumbList`, which matches the page. Styleguide also emits `FAQPage` while `noindex`.
- `BreadcrumbList` matches the visible crumbs, including the current URL.
- `CollectionPage` on `/guides` includes an `ItemList` of the guide links. That list matches the visible list. Its `dateModified` is `2026-10-20`, while the sibling `WebPage` is `2026-10-19`.
- No `Product` or `Service` schema. Do not add one. The site is not selling a package.

Do not add `Organization`, review schema, or `author` until a real person or firm is allowed to be named. Do not add FAQ schema to pages that have no visible FAQ.

## Interactive-tool problems

Two forms. No calculator, eligibility scorer, quiz, or recommendation engine.

- `ChecklistForm` posts name, email, privacy consent, and optional marketing consent to Formcarry. Success is shown only after a confirmed receipt. The download link is `/downloads/hqa-due-diligence-checklist-2026.pdf`, and that file is in `dist/downloads/`. The form does not say the visitor qualifies for a visa.
- `ConsultationForm` requires privacy consent and `thirdPartySharingConsent` before a payload is built. It does not score the visitor or name a provider. The sharing sentence matches the privacy page's description of introductions.

No tool result was found that states a fact the owning page does not state.

## Machine-retrieval status

An agent that only fetches the public site can:

- Read `robots.txt` and the sitemap of 23 URLs.
- Read static HTML for each URL, including the H1 and the body.
- Read JSON-LD for `WebSite`, `WebPage`, and, where present, `Article`, `FAQPage`, `BreadcrumbList`, and the guides `ItemList`.
- Follow internal links from the header, footer, home list, and `/guides`.

An agent cannot, from the public site:

- Find `llms.txt`. It is not in the repo or in `dist/`.
- Find Markdown or JSON copies of the articles. `docs/content/` and `docs/facts.json` are not published.
- See fact status (`CONFIRMED`, `REPORTED`, `UNVERIFIED`) or the source URL. Those fields exist only in `docs/facts.json` and on the noindex styleguide.
- Trust `WebPage.dateModified` as the page's own verified date.
- Tell a legal review from a "last verified" line. The review date is absent.

The guides `ItemList` is a useful index of 14 guide URLs. It is not a sitewide content index. Utility pages are outside it.

## Duplication/drift risks

Target: one fact, one source, many representations. Do not move whole paragraphs into `facts.json`.

Already single-sourced, and should stay that way:

- `siteConfig.contactEmail` and `siteConfig.siteName` for the address and the name in chrome and consent lines.
- `image-credits.ts` for photographer, description, Unsplash URL, and page.
- FAQ JSON-LD, because it is generated from the visible FAQ array.

Duplicated, and worth a single source later:

- The short numeric claims already listed in `docs/facts.json` (citizenship years, absence limits, price band, IFICI rate and deadline, AIMA deadline, family exemption, permit length). Pages repeat them as prose instead of rendering `facts.ts`. A shared source helps only for those short claims. The surrounding explanation should stay in the page.
- `lastVerified`. It exists in the content frontmatter, in `pages.ts`, and, for three call sites, in `facts.lastVerified`. `BaseLayout` uses the fact-file date for `WebPage`. The guides index hardcodes a date. These should be one date per page.
- Legal-review wording in home, about, methodology, and the guides meta description, versus `reviews.ts`.

Leave as page-local prose:

- The due diligence questions, the "what we don't know yet" boxes, the provider-risk explanations, and the American tax narrative. Centralizing them would not remove a number that can drift. It would only create a second article.

Editorial duplication that is already true: `docs/content/*.md` and `src/pages/*.astro` can diverge because the build does not read the markdown. Any later edit has to change both, or the markdown stops being the approved text.

## Recommended implementation order

1. Decide the publication state of `/privacy` and `/terms`. If they are still drafts, stop indexing them until the lawyer review exists. If they are final, remove the draft flag from the source files. Do not invent a review date either way.

2. Make `WebPage.dateModified` use that page's own verified date. Keep `facts.lastVerified` as the date of the fact file only.

3. Change the sentences that say every page shows a legal-review date, so they match `reviews.ts`. When a real review date exists, store it only in `reviews.ts` and let `LastVerified` print it.

4. After checking the statute, replace the Tech Visa URL on `facts.legalBasis`, or stop calling that claim `CONFIRMED` against that URL.

5. For the claims that are only in page prose (12-year window, 15/18 month family exception, Golden Visa family exemption, 120-day visa, 33% fee report), either add a short `facts.json` entry with a real source after the text is checked, or leave them on the owning page and do not copy them further.

6. Only then, if a page needs one of those short claims, render it from `facts.ts` instead of typing it again. Do not generate the articles from the fact file.

7. Machine extras (`llms.txt`, a published fact list) wait until steps 1 to 5 are done. Publishing the current `facts.json` would publish the mismatched legal-basis source.

## Facts requiring external verification before implementation

Do not change these in the site until someone reads the cited document:

- Lei 23/2007 articles 61 and 90, from the Diário da República or another official text. The fact file's current URL is a Tech Visa portaria.
- Whether article 90 sets no investment amount. Confirm by reading the article, not only the leximigratoria mirror.
- Article for temporary permits (2 years, then 3 years) and the article for the 6-month and 8-month absence rule.
- Lei 23/2007 article 80, against the permanent-residence page and against the mcs.pt article now stored as the fact source.
- Lei Orgânica 1/2026 articles 6 and 15, for the 12-year and 9-year windows, before that sentence is copied into `facts.json`.
- Lei 61/2025 for the 15-month / 18-month spouse exception, and for whether Golden Visa (investment) families are exempt from the 2-year wait.
- The 120-day, two-entry residence visa, against the visa rules the what-is page relies on.
- The official AIMA fee table after 1 March 2026, before any amount or the "up to 33%" report is treated as confirmed.
- The citizenship clock start. The fact file already marks this unverified. Leave it that way until the implementing regulation exists.
- The €170,000 to €200,000 band and the €150,000 / €25,000 split. These are provider prices. Any update needs the provider page, and the `REPORTED` label stays.
- Whether a lawyer review happened. The repo has no review date. Do not add one without the real date.
