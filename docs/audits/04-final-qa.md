# Final cross-layer QA

Date: 20 October 2026. Compared each of the 21 indexable pages across the visible body, title, meta description, H1, FAQs, tables, calls to action, JSON-LD, `llms.txt`, `content-index.json`, and the generated Markdown. Null legal-review dates were left as they are. `npm run check:reviews` remains the launch gate.

## Executive result

One summary contradicted its own page, and the styleguide description named an old fact-file date. Both were corrected in the source and the site was rebuilt. After that rebuild, the indexable HTML, the sitemap, the Markdown files, and the content index list the same 21 pages, and the high-risk figures agree.

## Corrections made

**Misleading summary, `/portugal-hqa-vs-golden-visa`.** The meta description said "€500,000 legal minimums" and "the same 10-year citizenship wait." The page's own table says the legal minimum is €250,000 to €500,000 depending on the option, and that citizenship is 10 years, or 7 for EU and CPLP nationals. The description was changed in `src/pages/portugal-hqa-vs-golden-visa.astro` and `docs/content/portugal-hqa-vs-golden-visa.md`. The body was not rewritten. The lead still says the fund route costs €500,000, which matches the fund row.

Keyword: portugal hqa vs golden visa

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

The new description is 158 characters, starts with the keyword, includes €175,000, €250,000, €500,000, 10, and 7, and ends with a full sentence.

**Stale metadata, `/styleguide`.** The description still said the fact file was last verified on 19 October 2026. `docs/facts.json` is dated 20 October 2026, and the page's `dateModified` already used that date. The description now takes the date from the fact file. The page stays `noindex` and stays out of `llms.txt`, the content index, the Markdown set, and the sitemap.

`llms.txt`, the Markdown, and `content-index.json` were not edited by hand. `npm run build` regenerated them.

## High-risk fact QA

Older public versions were searched in the built HTML, the Markdown, `llms.txt`, and the content index.

| Fact | Current value | Older version on a public page |
|---|---|---|
| Legal basis | Articles 61 and 90 of Lei 23/2007 | None. The Tech Visa portaria is not cited on a public page. |
| Legal minimum investment | None | None. €175,000 is described as a private price. |
| Package price | About €170,000 to €200,000, often €175,000, reported | None presented as a statutory fee. |
| Government fees | Changed 1 March 2026; amounts not confirmed | "Up to 33%" is not in the built site. It remains only in `docs/research-brief.md`, which is not published. |
| Family wait | Article 90 families exempt. Article 89 families are not. Spouse exception: 18 months together, apply after 15 months. Golden Visa families also exempt. | None that puts article 90 families back under the 2-year wait. |
| Absence | More than 6 consecutive months or 8 non-consecutive months | The Golden Visa's 7 days, then 14, is stated as a different rule. |
| Permanent residence | After 5 years | The 5-year figure is not used as the current citizenship wait. |
| Citizenship | 10 years for most nationals, 7 for EU and CPLP, in force 19 May 2026. Window of 12 years, or 9. Clock start not settled. | "Citizenship in 5 years" and "passport after 5 years" appear only as claims the site says are out of date. |
| IFICI | 20% for 10 years, not automatic, register by 15 January | None that says the permit alone grants IFICI. |
| AIMA | 90 days, extendable by 30. A legal deadline, not an average. | None. |
| Permit length | 2 years, then 3-year renewals | None. |
| Residence visa | 120 days, two entries | None. |
| Golden Visa amounts | €500,000, €250,000 for arts, or 10 jobs. Real estate closed 7 October 2023. | The old meta description treated €500,000 as the legal minimums. That line is gone. |

`HQA®` appears only in the question that says a trademark does not mean a company owns the route.

## Metadata QA

Titles, H1s, and meta descriptions match the approved copy except for the Golden Visa description above. Where a title uses a hyphen and the H1 uses a colon, that difference was already in the approved copy and does not change a fact.

`llms.txt` and `content-index.json` use each page's title and meta description. After the rebuild, the Golden Visa line matches the corrected description. Content-index `dateModified` matches `src/data/pages.ts`. No record has `datePublished`.

Sentences that say pages are legally reviewed were not edited. Every `reviews.ts` date is still null.

## Schema QA

On each indexable page, `WebPage.dateModified` matches `Article.dateModified` or `CollectionPage.dateModified` where those nodes exist, and that date matches the page's own `lastVerified`. FAQ schema matches the visible questions and answers. Article headlines match the H1. The guides `ItemList` matches the visible guide list. There is no `Organization`, `Product`, or `Service` node.

The Golden Visa `WebPage` description is the visible lead. That lead names the fund route at €500,000 and says citizenship is 10 years for most applicants. It does not repeat the old "legal minimums" line.

## Interactive-tool QA

There is no eligibility scorer, calculator, or quiz. The checklist form collects a name and email and, after a confirmed receipt, links to the due diligence PDF. The consultation form asks for an introduction. It says the site is not a law firm, does not give legal advice, and that any later agreement is between the visitor and the advisor. Neither result states an official determination or a government filing. The due diligence page lists 15 questions, which matches the checklist copy. No tool was changed.

## Machine-readable QA

For each major topic, an agent that reads the Markdown, the content-index record, and the `llms.txt` line reaches the same conclusion as the page. The Golden Visa line failed that test before the description change, because discovery copy said €500,000 was the legal minimum and that the citizenship wait was 10 years. It passes after the rebuild.

| Topic | Result |
|---|---|
| What the route is | PASS |
| Investment and the private price | PASS |
| Cost and unconfirmed government fees | PASS |
| Requirements | PASS |
| Family rules | PASS |
| Presence and absence limits | PASS |
| Citizenship, including the 7-year exception and the unsettled clock | PASS |
| Permanent residence | PASS |
| IFICI | PASS |
| Americans and continuing US tax | PASS |
| HQA compared with the Golden Visa | PASS |
| HQA compared with the StartUP Visa and the Tech Visa | PASS |
| Current status | PASS |
| Due diligence | PASS |
| Methodology, about, contact, consultation, image credits | PASS |

`/privacy`, `/terms`, and `/styleguide` are absent from `llms.txt`, the content index, the Markdown set, and the sitemap. Indexable pages have a Markdown alternate. The three noindex pages do not.

## Build QA

- `npm run check`: 0 errors, 0 warnings, 0 hints, 58 files.
- `npm run build`: 24 HTML pages. `test:facts` passed for 21 indexable pages.
- Indexable URL count: 21.
- Sitemap URL count: 21.
- Markdown count: 21.
- Content index count: 21.
- Canonical changes: none.
- Redirect changes: none.
- Accidental noindex: none. The only noindex pages are `/privacy`, `/terms`, and `/styleguide`.
- Broken internal links: none found in the built HTML.

## Remaining genuine contradictions

NONE FOUND

## Architecture status

MACHINE-READABLE ARCHITECTURE COMPLETE: YES
