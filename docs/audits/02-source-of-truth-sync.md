# Source-of-truth sync

Date: 20 October 2026. This pass applies the verified decisions from the architecture audit. `docs/facts.json` was not edited. No machine-readable layer was added.

## PAGES CHANGED

Fee wording, now the same in both files:

- `docs/content/hqa-visa-cost.md` was already updated. `src/pages/hqa-visa-cost.astro` now uses that wording. The "up to 33%" sentence is gone.
- `docs/content/hqa-visa-status.md` was already updated for the fee row. `src/pages/hqa-visa-status.astro` now uses that wording. Both files also gained the family and citizenship links below.

Authority links, changed in both the content file and the page:

- `docs/content/hqa-visa-status.md` and `src/pages/hqa-visa-status.astro`
- `docs/content/hqa-vs-startup-visa-tech-visa.md` and `src/pages/hqa-vs-startup-visa-tech-visa.astro`
- `docs/content/portugal-hqa-visa-investment.md` and `src/pages/portugal-hqa-visa-investment.astro`
- `docs/content/hqa-visa-for-americans.md` and `src/pages/hqa-visa-for-americans.astro`
- `docs/content/hqa-visa-presence-requirements.md` and `src/pages/guides/hqa-visa-presence-requirements.astro`
- `docs/content/hqa-visa-family.md` and `src/pages/hqa-visa-family.astro`
- `docs/content/what-is-hqa-visa.md` and `src/pages/guides/what-is-hqa-visa.astro`
- `docs/content/hqa-visa-requirements.md` and `src/pages/hqa-visa-requirements.astro`
- `docs/content/hqa-visa-due-diligence.md` and `src/pages/hqa-visa-due-diligence.astro`
- `docs/content/portugal-hqa-vs-golden-visa.md` and `src/pages/portugal-hqa-vs-golden-visa.astro`

Date and index plumbing, not body copy:

- `src/layouts/BaseLayout.astro` takes `dateModified` and writes it on `WebPage`, `Article`, and `CollectionPage`.
- Every page passes its own date. Article pages, the home page, the investment page, and `/guides` read that date from `src/data/pages.ts`. The styleguide passes the fact-file date, because that page displays the fact file.
- `src/data/pages.ts` now includes `/guides` (`listOnHome: false`, `lastVerified` `2026-10-20`).
- `src/data/reviews.ts` drops `/hqa-visa-process-timeline` and lists every indexable route, all `null`.
- `src/pages/privacy.astro` and `src/pages/terms.astro` are `noindex` while that date is null. The sitemap filter uses the same rule.
- `scripts/check-reviews.ts` and `npm run check:reviews`. It is not part of `npm run build`.

Canonical paths were not changed. Footer and consent links to `/privacy` and `/terms` were not removed.

## TOPIC OWNERS

| Topic | Authoritative page |
|---|---|
| Route still open, and the law-change log | `/hqa-visa-status` |
| What the route is (articles 61 and 90) | `/guides/what-is-hqa-visa` |
| No legal minimum, and what a package buys | `/portugal-hqa-visa-investment` |
| Package price, including government fees | `/hqa-visa-cost` |
| Who qualifies | `/hqa-visa-requirements` |
| Family 2-year rule and the spouse exception | `/hqa-visa-family` |
| Golden Visa family exemption, and Golden Visa stay | `/portugal-hqa-vs-golden-visa` |
| Absence limits (6 and 8 months) | `/guides/hqa-visa-presence-requirements` |
| Citizenship years and the 12-year window | `/guides/hqa-visa-citizenship-10-year-rule` |
| Permanent residence after 5 years | `/guides/hqa-visa-permanent-residency` |
| IFICI | `/guides/hqa-visa-ifici-tax` |
| US tax for Americans | `/hqa-visa-for-americans` |
| HQA vs StartUP Visa vs Tech Visa | `/hqa-vs-startup-visa-tech-visa` |
| How to test a provider | `/hqa-visa-due-diligence` |

No new pages were added.

## FACTUAL CORRECTIONS

- Removed the unconfirmed "up to 33%" fee increase from the cost page and the status table. Both now say the fees changed on 1 March 2026 and the new amounts are not confirmed. That matches `facts.governmentFees`, which stays `UNVERIFIED`.
- Page dates no longer follow `facts.lastVerified` (`2026-10-20`) when the page's own date is different. Home, the investment page, and the cost page use `2026-10-19`. Status, the guides index, and the 20 October guides use `2026-10-20`.
- No status was upgraded. Package prices stay reported. The citizenship clock stays unsettled on the pages that already say so. `facts.json` labels were left as Claude set them (`CURRENT` for the legal basis and the legal minimum, `CONFIRMED` for the new window, spouse, Golden Visa family, and visa-validity entries).

## METADATA CORRECTIONS

Titles, meta descriptions, and H1s were not rewritten. The sentences that say pages are legally reviewed were kept on purpose. They are a launch gate, checked by `npm run check:reviews`, not a copy edit.

`/privacy` and `/terms` keep their titles and descriptions. They are `noindex` and out of the sitemap until `reviews.ts` has a real date for that path. Their canonical URLs are unchanged.

## SCHEMA CORRECTIONS

`WebPage.dateModified`, `Article.dateModified`, and `CollectionPage.dateModified` now use the page date passed into `BaseLayout`. Checked in the build:

- `/` has one `dateModified`, `2026-10-19`.
- `/hqa-visa-status` and `/guides` have `2026-10-20` on both nodes.
- `/hqa-visa-cost` and `/portugal-hqa-visa-investment` have `2026-10-19` on both nodes.
- `/privacy` and `/terms` have `2026-10-20`, matching "Last updated: 20 October 2026", and `noindex`.

FAQ text was not changed, so `FAQPage` still matches the visible questions. No `Organization`, `Product`, or `Service` node was added.

## INTERACTIVE-TOOL CORRECTIONS

None. The checklist form only collects a name and email for a PDF. The consultation form asks for an introduction and already says the site is not a law firm, does not give legal advice, and that any later agreement is between the visitor and the advisor. Neither form scores eligibility or states an official outcome.

## INTERNAL AUTHORITY LINKS ADDED

One link per topic, only where that page states the fact and did not already link the owner.

| Page | New links |
|---|---|
| `/hqa-visa-status` | Family page. Citizenship guide. |
| `/hqa-vs-startup-visa-tech-visa` | Family page. Cost page. Citizenship guide. |
| `/portugal-hqa-visa-investment` | Family page. Cost, presence, citizenship, and IFICI links were already there. |
| `/hqa-visa-for-americans` | Citizenship guide. Presence and IFICI links were already there. |
| `/guides/hqa-visa-presence-requirements` | Citizenship guide. The IFICI link was already there. |
| `/hqa-visa-family` | Citizenship guide. Cost and presence links were already there. |
| `/guides/what-is-hqa-visa` | Family page. Cost page. The investment-page link for what the package buys was already there. |
| `/hqa-visa-requirements` | Presence page. |
| `/hqa-visa-due-diligence` | Cost page. Citizenship guide. |
| `/portugal-hqa-vs-golden-visa` | Cost, presence, family, citizenship, and IFICI. |

Home already links the cost, citizenship, presence, family, and IFICI pages from its guide list, so no second link was added there.

## KNOWN UNRESOLVED FACTS

- Every review date in `reviews.ts` is still `null`. The legal-review sentences remain in the approved copy. `npm run check:reviews` fails until real dates are added. Do not invent them.
- `/privacy` and `/terms` stay drafts in the source files. They are reachable, but not indexable, until those dates exist.
- `facts.citizenshipClockStart` is still `UNVERIFIED`. The citizenship and status pages still say the law text does not settle when the clock starts.
- `facts.governmentFees` is still `UNVERIFIED`. Exact AIMA amounts are still unpublished on the site.
- `facts.packagePriceReported` is still `REPORTED` and still has no source URL.
- `facts.absenceLimit` still cites a law-firm article, not the statute.
- `docs/research-brief.md` still mentions fee increases of up to 33%. That file is an internal note. The public pages no longer say it.
- Article prose still repeats short figures instead of rendering `facts.ts`. That was left in place. The owning page is the place to edit the explanation. The fact file remains the record of status and source.

## BUILD RESULT

- `npm run check`: 0 errors, 0 warnings, 54 files.
- `npm run build`: 24 pages. Sitemap has 21 URLs. `/privacy`, `/terms`, and `/styleguide` are not in it. No other route was dropped. No redirect was added or removed.
- `npm run check:reviews`: exit code 1, as expected. It lists 21 indexable routes with no review date, and notes that `/privacy` and `/terms` stay out of the index until a date exists.

Not committed.
