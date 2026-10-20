# Semantic SEO

Date: 20 October 2026. First integration pass. The queue is the 21 indexable pages. No pages, hubs, or categories were added. Body copy, headings, and contextual links were not changed. Legal-review dates stay null.

## CONTENT QUEUE

| URL | Content type | Primary entity / topic | Search intent | Topic cluster | Parent | Related pages | Status |
|---|---|---|---|---|---|---|---|
| `/` | WebPage | Highly qualified activity residence route | Informational | Start here | Site pillar | What-is, investment, cost, citizenship, Golden Visa comparison, status, methodology | Integrated |
| `/guides` | CollectionPage | Guide catalog | Navigational | Start here | `/` | All 14 topic guides | Integrated |
| `/guides/what-is-hqa-visa` | Article | Lei 23/2007 articles 61 and 90 | Informational | Start here | `/guides` | Investment, cost, family, Golden Visa comparison, due diligence | Integrated |
| `/portugal-hqa-visa-investment` | Article | Private HQA package | Commercial investigation | Start here | `/` | Cost, requirements, family, presence, citizenship, IFICI, Golden Visa comparison, due diligence | Integrated |
| `/hqa-visa-due-diligence` | Article | Provider checks | Commercial investigation | Start here | `/` | Cost, citizenship | Integrated |
| `/hqa-visa-cost` | Article | Package price and other costs | Commercial investigation | Costs and eligibility | `/portugal-hqa-visa-investment` | Investment, Golden Visa comparison | Potential Overlap |
| `/hqa-visa-requirements` | Article | Who qualifies | Informational | Costs and eligibility | `/guides/what-is-hqa-visa` | Investment, presence, Golden Visa comparison | Integrated |
| `/hqa-visa-for-americans` | Article | US applicant on the same route | Informational | Costs and eligibility | `/` | Requirements, citizenship, IFICI, presence | Integrated |
| `/hqa-visa-family` | Article | Family reunification, Lei 61/2025 | Informational | Family and living | `/guides/what-is-hqa-visa` | Cost, presence, citizenship | Integrated |
| `/guides/hqa-visa-presence-requirements` | Article | Absence limits | Informational | Family and living | `/guides` | Citizenship, Golden Visa comparison, IFICI | Integrated |
| `/guides/hqa-visa-permanent-residency` | Article | Permanent residence after 5 years | Informational | Family and living | `/guides` | Citizenship | Integrated |
| `/guides/hqa-visa-citizenship-10-year-rule` | Article | Lei Orgânica 1/2026 | Informational | Citizenship and tax | `/guides` | Golden Visa comparison, permanent residence | Integrated |
| `/guides/hqa-visa-ifici-tax` | Article | IFICI | Informational | Citizenship and tax | `/guides` | Investment, Americans, presence | Integrated |
| `/portugal-hqa-vs-golden-visa` | Article | HQA package compared with article 90-A | Commercial investigation | Comparisons | `/` | Cost, presence, family, citizenship, IFICI | Integrated |
| `/hqa-vs-startup-visa-tech-visa` | Article | Article 90, article 89, and the Tech Visa | Commercial investigation | Comparisons | `/guides/what-is-hqa-visa` | Family, cost, citizenship, what-is | Integrated |
| `/hqa-visa-status` | Article | Whether the route is still in law | Informational | Updates and method | `/` | Family, citizenship | Integrated |
| `/methodology` | WebPage | How the site checks facts | Informational | Updates and method | `/` | Status | Integrated |
| `/about` | WebPage | The site | Navigational | Updates and method | `/` | Methodology, contact | Integrated |
| `/contact` | WebPage | Email contact | Navigational | Updates and method | `/` | Consultation | Integrated |
| `/consultation` | WebPage | Private introduction | Transactional | Updates and method | `/` | Due diligence | Integrated |
| `/image-credits` | WebPage | Photograph credits | Navigational | Updates and method | `/` | None | Integrated |

Potential Overlap on `/hqa-visa-cost` means it shares the €175,000 figure with the investment page. The questions differ: the investment page says what the package pays for, and the cost page lists the other costs. No merge.

## CHANGES MADE

Schema only. No body sentence, heading, or link was added or moved.

- `Article` nodes now have `@id` `{url}#article`, `url`, `mainEntityOfPage` pointing at `{url}#webpage`, and `isPartOf` the shared website id `https://portugalhqacitizenship.com/#website`.
- `CollectionPage` on `/guides` now has `@id` `{url}#collection`, `isPartOf` that same website id, and `inLanguage`.
- `FAQPage` now has `@id` `{url}#faq` and `mainEntityOfPage` pointing at `{url}#webpage`.
- `WebPage` already used `{url}#webpage` and `isPartOf` the website. That was left in place.

No `Organization`, `Person`, author, review, rating, `Offer`, award, or government-affiliation type was added. No date was invented. `dateModified` is still each page's `lastVerified`.

## SEMANTIC RELATIONSHIPS ADDED

The only new relationships are the schema ids above. They connect the article, the FAQ, and the guides collection to the page and to one website node. No new sentences were written, so no new entity claims were added in the body.

Entities already stated in natural language, and left as they are:

- Lei 23/2007 articles 61 and 90 are the D3 visa and the highly qualified activity permit. Article 90-A is the Golden Visa. Article 89 is the StartUP Visa.
- Lei 61/2025 is the October 2025 family rule. Article 90 families are exempt. Article 89 families are not.
- Lei Orgânica 1/2026, in force 19 May 2026, sets 10 years of legal residence for most nationals and 7 for EU and CPLP nationals.
- Lei 62/2026 sets the AIMA decision deadline at 90 days, extendable by 30.
- AIMA decides the residence application. The D3 visa is applied for at a consulate.
- IFICI is a tax regime. The permit does not grant it by itself.
- The €175,000 figure is a reported private price. The law sets no investment minimum.

## OVERLAP / CANNIBALIZATION

Same intent was not found. Nearby pages answer different questions:

- Home introduces the route. `/guides/what-is-hqa-visa` defines the legal basis. `/hqa-visa-requirements` says who qualifies and which documents are needed.
- `/portugal-hqa-visa-investment` and `/hqa-visa-cost` both use the reported package price. One explains what the money buys. The other lists fees around it.
- Home has a short comparison table. `/portugal-hqa-vs-golden-visa` is the full comparison and is linked from that table.
- `/hqa-visa-for-americans` repeats the residence rules for US citizens and adds US tax. It links the citizenship, IFICI, presence, and requirements pages.
- FAQ answers that share a number point at the same rule. They are not copies of another page's article.

Destructive options (not done): none. Do not redirect, merge, or point one canonical at another page. The URLs answer different questions.

## SITEMAP STATUS

- Indexable URLs: 21.
- Sitemap URLs: 21.
- Missing from the sitemap: none.
- Extra sitemap URLs: none.
- Redirected URLs: none.
- Noindex and correctly omitted: `/privacy`, `/terms`, `/styleguide`.
- Markdown, `llms.txt`, and `content-index.json` are not in the sitemap.
- `robots.txt` allows `/` and points at `https://portugalhqacitizenship.com/sitemap-index.xml`. No indexable page is blocked by `robots.txt`, a robots meta tag, or an `X-Robots-Tag`.

Canonicals are `https://portugalhqacitizenship.com` plus the path. No `www`, no `http`, and no query duplicates. Paths other than the site root have no trailing slash.

## TECHNICAL QA

- `npm run check`: 0 errors, 0 warnings, 0 hints, 58 files.
- `npm run build`: 24 HTML pages. `test:facts` passed for 21 indexable pages.
- One H1 per indexable page. Heading text was not changed.
- `/guides` lists 14 topic guides through `GuideList`, in topic groups, not by date. The groups are start here, money and tax, eligibility and family, living in Portugal, comparisons, and updates. Home, the guides hub, methodology, about, contact, consultation, and image credits are not guides, so they are not in that list.
- Breadcrumbs match the URL. Pages under `/guides/` are Home / Guides / page. Root pages are Home / page. The visible crumb and `BreadcrumbList` use the same names and URLs. Home has no breadcrumb, which matches the root.
- Titles, meta descriptions, H1s, `og:title`, and `og:description` name the same topic. A title may use a hyphen where the H1 uses a colon. That difference is in the approved copy.
- Visible photographs: home (Alfama rooftops), investment (Coimbra), requirements (tile pattern), family (Cascais), Golden Visa comparison (Rua Augusta Arch), citizenship (São Bento Palace). Each has alt text, width, and height. No empty alt.
- Social previews: every indexable page has absolute `og:url`, `og:title`, `og:description`, `og:image`, `og:image:width` 1200, `og:image:height` 630, and Twitter title, description, and image. Card type is `summary_large_image`.
- Fallback `og:image`: the Alfama rooftops file, which is also the home photograph. Used on pages whose approved `heroImage` is `none`: `/guides`, what-is, presence, permanent residency, IFICI, cost, due diligence, Americans, StartUP/Tech comparison, status, methodology, about, contact, consultation, and image credits. The file exists, the URL is absolute, and the size tags are 1200 by 630. The alt text describes Alfama, which is the picture. That fallback is intended. Privacy and terms use it too, and they are noindex.
- Pages with their own hero use that photo for `og:image`: investment, requirements, family, Golden Visa comparison, and citizenship. Home uses Alfama because that is its own hero, not a stand-in.
- Facts checked against `docs/facts.json`: no legal minimum, reported band about €170,000 to €200,000 and €175,000, permit 2 years then 3-year renewals, absences of 6 and 8 months, Golden Visa stay of 7 then 14 days, family exemption and the 15/18 month spouse exception, Golden Visa family exemption, 5 years to permanent residence, citizenship 10 and 7 years, 12-year and 9-year windows, IFICI 20% and 15 January, AIMA 90 days extendable by 30, fees changed 1 March 2026 with amounts not confirmed, D3 visa 120 days and two entries, Golden Visa amounts and real estate closed on 7 October 2023. No conflict found. "Up to 33%" is not on a public page.

## ITEMS REQUIRING HUMAN REVIEW

Body links were not inserted. A later pass can add them. Ideas only:

- `/hqa-visa-cost` states the family provider fee and does not link `/hqa-visa-family`. Anchor: "what family members cost".
- `/hqa-visa-requirements` states articles 61 and 90 and does not link `/guides/what-is-hqa-visa`. Anchor: "what the HQA visa is".
- `/guides/hqa-visa-permanent-residency` states the 5-year wait and links citizenship. It does not link `/hqa-visa-status`. No change needed unless the status log should be cited there.
- `/hqa-visa-status` links family and citizenship. It does not link the presence page where it says official guidance on "no minimum stay" is missing. Anchor: "presence rules".
- Home already links the main owners from the guide list and from the comparison table. No second link is needed in the body.

Claims on a page that are not entries in `docs/facts.json`. They were not treated as conflicts, and no fact was added:

- Golden Visa minimums "can be up to 20% lower in low-density areas" on `/portugal-hqa-vs-golden-visa`.
- IAS €537.13 a month in 2026 on `/hqa-visa-requirements`, inside a sentence that says the salary threshold for a self-funded package is not confirmed.
- Foreign earned income exclusion of up to $132,900 for 2026 on `/hqa-visa-for-americans`.

The questions those pages already mark as unsettled should stay unsettled: AIMA fee amounts, when the citizenship clock starts, and which salary rule applies to a package holder. Do not fill them without a source.

Every `reviews.ts` date is still null. Do not add a review date.
