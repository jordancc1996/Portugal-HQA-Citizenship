# Search quality audit

Date: 20 October 2026. Read-only. Audits 01 to 15 were read first. Closed items from those audits are not reopened: layout, images, heading case, the LinkedIn field, consent controls, the five approved internal links, the approved sentence edits, keyword placement, schema, and the machine-readable layer. No new page is recommended for a keyword variant.

The indexable set is the 21 routes in `src/data/reviews.ts`, excluding `/privacy`, `/terms`, and `/styleguide`.

## Dimension results

| # | Dimension | Result |
|---|---|---|
| 1 | Relevance | Pass. Each indexable page answers a different question. |
| 2 | Page quality | Pass on the core route, with the statute gaps below. |
| 3 | Popularity | Pass as citation-worthiness. The checklist, comparison tables, and "what we don't know" boxes are original. No reviews, client counts, or other artificial signals. |
| 4 | Freshness | Pass as of 20 October 2026. Page dates are 19 or 20 October 2026. See the monitoring list. |
| 5 | Localization | Pass. Amounts are in euros. Authorities named are AIMA, IAPMEI, the tax authority, and consulates. The Americans page is the US page. |
| 6 | Language | Pass. Prose is direct. One home sentence overclaims how sources are shown. |
| 7 | Centrality | Pass. Home, what the route is, the investment page, and the status log carry the topic. |
| 8 | Topical diversity | Pass. Cost and investment still answer different questions. No merge. |
| 9 | Personalization | Pass for families, Americans, budgets, and the decision to sign. The job-offer path is short on the existing what-is page. |
| 10 | Web ecosystem | Mixed. The statutes opened below match the main numbers. Several fact-file sources are still secondary. |
| 11 | Mobile friendly | No new source defect. Comparison tables sit in a horizontal scroller. This pass did not open a rendered page. |
| 12 | Social fairness | Pass. Nationality limits are described as provider rules to check, not as the site's rule. |
| 13 | Optionalization | Pass. The 15 questions are on `/hqa-visa-due-diligence`. The checklist form is optional. |
| 14 | Spam | Pass. No doorway page, thin page, or review schema. Repeated anchors were left in audit 07 and stay left. |
| 15 | Authority | Mixed. Independence, the source ladder, and the corrections email are real. Review-date sentences are ahead of the empty dates. |
| 16 | Privacy | Not reopened. Audit 14 stands. The draft policy stays noindex. The lawyer queue already lists the draft gaps. |
| 17 | Spell correction | Not Applicable. The site has no search. |

## Critical issues

### 1. The family page states the 2-year wait too narrowly

Issue: On `/hqa-visa-family`, the open-questions box says "Only article 90 gives the family exemption." The FAQ says holders under article 89 "do have to wait" to bring a spouse.

Why it matters: Relevance and page quality. Lei 61/2025, article 98 n.º 3 of Lei 23/2007, also removes the wait for family of article 90-A and article 121-A holders, for minors and incapacitated dependents, and for a spouse or partner who is a parent or adopter of a dependent minor. The page's own table already lists the Golden Visa and the EU Blue Card. The FAQ does not.

Recommended correction: Keep the article 90 exemption. Say article 89 is not in that list, and name the other statutory exceptions in the same sentence. Do not say article 89 holders always wait.

Priority: Critical.

### 2. The family page treats 9 months as the ceiling

Issue: The same page says "The law gives up to 9 months to decide a family reunification request."

Why it matters: Page quality. Article 105 n.º 1 of Lei 23/2007, as amended by Lei 61/2025, sets 9 months. N.º 2 allows an equal extension in exceptional cases. That extension is excluded for the ordinary waits in article 98 n.º 1 and n.º 2. Article 90 families are in n.º 3, so the extension can apply to them. "Up to 9 months" is the wrong cap for the readers this page is for.

Recommended correction: Say the statute sets 9 months and allows an equal extension, with notice to the applicant, except for the ordinary 2-year and 15-month cases. A lawyer should confirm how AIMA applies the extension.

Priority: Critical.

## High-priority improvements

### 3. The absence rule omits the activity exception

Issue: The presence page, and the fact `absenceLimit`, state the 6-month and 8-month limits and "unless the absence is justified." Article 85 n.º 2 of Lei 23/2007 matches those two periods and says the permit may be cancelled. N.º 4 says the permit is not cancelled when the holder proves professional, business, cultural, or social activity during the absence. N.º 3 says a justification request goes to AIMA before departure, or after it in exceptional cases.

Why it matters: Page quality and web ecosystem. The fact file still cites a law-firm article. The statute is public. Package holders who travel for the company can misread the current sentence as "any long trip ends the permit unless you asked first."

Recommended correction: On `/guides/hqa-visa-presence-requirements` only, add n.º 4 and the AIMA request. Point `absenceLimit` at article 85: `https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?artigo_id=920A0085&nid=920&tabela=leis`. Do not copy the new sentence onto every page.

Priority: High.

### 4. Short summaries drop a limb the owner page already has

Issue: Home key fact 4 states only the 6 consecutive months. The home FAQ states both limits. On `/portugal-hqa-vs-golden-visa`, the lead states 6 months in a row or 8 months in total, but key fact 3 says "HQA holders must live in Portugal," and the comparison table states only the 6-month limb. On `/hqa-vs-startup-visa-tech-visa`, the table says "10 years of legal residence" in every column. The prose on that page says "most nationals," and the citizenship page states the 7-year EU and CPLP rule.

Why it matters: Relevance. These tables are what a scanner keeps. The full rule already exists on the owner page.

Recommended correction: Put both absence limits in the home key fact and in the Golden Visa comparison table. Put "10 years, or 7 for EU and CPLP nationals" in the StartUP comparison table. Do not add new pages.

Priority: High.

### 5. Visible copy says a review date is shown, and none is

Issue: Every date in `reviews.ts` is still null. The review line stays hidden, which is correct. Home still says "Each page shows its review date." About says the same. The guides meta description says each guide is "verified and legally reviewed." Methodology is closer: it says a date is shown only when a review took place, and also says each page shows the date.

Why it matters: Authority. This was left open in audit 08. It is still on the page. A search result can quote the guides description before a review exists.

Recommended correction: Until a real date is stored, stop saying the date is already shown. Do not invent a date, a name, or a registration number.

Priority: High.

### 6. IFICI education is stated as if one rule covered every category

Issue: `/guides/hqa-visa-ifici-tax` says highly qualified roles generally require a doctorate, or a degree plus at least 3 years of experience.

Why it matters: Page quality. The tax-authority leaflet ties that test to highly qualified professions in Portaria 352/2024/1. The same leaflet gives other categories a different test, including level 4 or 5 years of experience.

Recommended correction: Limit the doctorate-or-3-years sentence to that professions category. Say other categories use their own education rules.

Priority: High.

### 7. Integration duties are described as unclear for article 90 families

Issue: `/hqa-visa-family` says the law does not say clearly whether Portuguese language and civic training apply to families of article 90 holders.

Why it matters: Page quality. Article 101, as amended by Lei 61/2025, sets that duty for family members after the permit is granted, and ties renewal to it, with a humanitarian exception. It does not repeat the article 90 exemption that article 98 uses for the waiting period.

Recommended correction: Do not say the law is silent. Say article 101 states the duty and does not copy the article 90 exemption, and that a lawyer should confirm how AIMA applies it.

Priority: High.

## Content gaps

- The presence page does not yet state article 85 n.º 4. That is issue 3, not a new URL.
- `/portugal-hqa-vs-golden-visa` stops the permit row at the first 2 years. Article 90-A n.º 2 renews that permit for periods of two years. The HQA pages say 3-year renewals. The comparison should show that those renewal periods are not the same. Confirm the HQA 3-year limb against article 75 before editing it. It matches `permitValidity` and was not re-opened in this pass.
- A person who qualifies through a job, with no package, is named on home and on `/guides/what-is-hqa-visa`. That page should stay the owner. The four article 90 routes there match the consolidated article: a compatible contract, an invitation from a teaching or vocational-training institution, a responsibility statement from a certified company, or a cultural project recognised as in the national interest. The requirements page says "research institution" in the invitation route. The statute says a teaching or vocational-training institution. Narrow that phrase on the existing page.
- AIMA fee amounts and the nationality regulation are unknown on purpose. Do not fill them.

## Content to consolidate or remove

None. Do not merge, redirect, or canonicalize one of these URLs onto another. Audit 05 already reached that conclusion, and this pass did not find two pages answering the same question.

Delete nothing except the backlog clause in issue form below, if no source is added. "Backlogs have been long" appears on the investment page and the Golden Visa comparison. It has no source. Remove it, or cite one. Priority: Low.

## Internal linking opportunities

None new. L1 to L5 from audit 07 are on the pages. The rejected set stays rejected, including a D7 page, a consultation link from the money pages, cost-page to family, and requirements to the what-is page. Do not add links to fix the contextual orphans `/guides`, `/about`, and `/image-credits`.

## Authority and source improvements

Opened in this pass and consistent with the pages:

- Lei Orgânica 1/2026: published 18 May 2026, in force the next day, 10 years or 7 for EU and CPLP nationals, pending applications keep the old rules, residence windows of 12 and 9 years, means of subsistence in article 6 n.º 1 i), criminal bar of an effective prison sentence of more than 3 years for the listed crimes.
- Lei 61/2025: published 22 October 2025, in force 23 October 2025. The 2-year wait, the 15-month and 18-month spouse exception, and the article 90, 90-A, and 121-A exemption match the family page's table.
- Lei 62/2026: published 10 September 2026, in force 11 September 2026. Residence applications: 90 days, extendable by 30. That matches the status page.
- Article 90 routes match the what-is page, with the "research institution" wording noted above.
- Article 85 n.º 2 matches the 6-month and 8-month figures. The fact file should stop citing the law-firm article.
- IFICI leaflet: 20% for 10 years, most foreign income exempt, register by 15 January, and no Portuguese tax residence in the previous 5 years. Those match the IFICI page.
- IAS €537.13 for 2026 matches the association page, which cites Portaria 480-A/2025/1. The number on the requirements page is right. Store the Portaria as the source.
- US foreign earned income exclusion of $132,900 for 2026 matches the IRS newsroom. The fact file cites a secondary article. Store the IRS page.
- Acórdão 1133/2025 of 15 December 2025 struck down four norms. That matches the citizenship page. The fact file cites an Italian court upload. Store the Diário da República text: `https://files.diariodarepublica.pt/1s/2026/01/00200/0005000136.pdf`.
- CPLP nationals are presumed to meet the language part of article 6 n.º 1 c), unless the lack is obvious. The citizenship page says a test or certificate for everyone. Add the presumption, and keep the culture, history, and symbols part outside it. Priority: Medium.

Do not change the 3-year criminal sentence. Article 6 n.º 11 still describes criminal-record certificates by reference to a prison sentence of 2 years or more. Ask the lawyer before adding that proof rule to the page.

`packagePriceReported` still has no URL. The pages label it as a provider price. Do not invent a company name to create a citation.

Home says "Every legal claim links to the law or an official source." Many claims have a source line, not a link, and the absence fact still points at a firm. Soften that bullet when the article 85 source is stored. Priority: Medium.

## Freshness issues

No stale date was found against the statutes opened today. `lastVerified` in `docs/facts.json` is 2026-10-20.

After launch, monitor these and change a page only when a primary text changes:

- AIMA fees. The site already says the 1 March 2026 table is not confirmed. Publish an amount only from an official table.
- The nationality regulation. The citizenship page already says the language level and test format are not final, and that the regulation may speak to when the clock starts.
- The citizenship clock start. `citizenshipClockStart` is UNVERIFIED. Article 15 defines legal residence as being in Portugal with the situation regularised under a visa or permit. It does not say the clock starts on the card. Keep the open box.
- IFICI. Recheck article 58-A and Portaria 352/2024/1, including the education tests by category.
- Golden Visa fund rules. Recheck article 3 and article 90-A before restating €500,000, €250,000, the job counts, or the 7-day and 14-day stay. Those figures were not re-read in the consolidated investment article in this pass. Also record the 2-year renewal in article 90-A n.º 2 once article 75 is checked for the HQA renewal.

## Mobile / UX issues

None new. Inputs are 16px, controls are 48px tall, and tables scroll. The consent box was already reduced to 20px in `src/styles/global.css`, with the row kept at 44px. This pass did not open the page at 375px.

## Needs Claude to verify

These claims were not opened against a primary text in this pass. Do not treat them as confirmed or as false.

| Page | Sentence | Why it is still open |
|---|---|---|
| `/guides/hqa-visa-permanent-residency` | "No prison sentence over 1 year in the previous 5 years." Also the A2 example and "the card is renewed every 5 years." | `permanentResidence` cites a December 2023 SEF archive. Article 80 was not opened. |
| `/portugal-hqa-vs-golden-visa` | Fund, research, culture, and company amounts of €500,000 and €250,000, and the 7-day then 14-day stay. | `goldenVisaOptions` and `goldenVisaStay` cite a Google Sites compilation. Article 3 and the special stay rule were not opened. |
| `/guides/what-is-hqa-visa` | The D3 visa is "valid for 120 days, two entries." | `residenceVisaValidity` cites a VFS one-pager. That file was not opened. |
| `/hqa-visa-for-americans` | FBAR if foreign accounts go over $10,000. FATCA thresholds are named but not numbered. | No FinCEN or IRS FATCA page was opened. The $132,900 exclusion was checked and matches the IRS. |

## What is already strong

- The site separates law, reported provider prices, and open questions. €175,000 is labeled private. AIMA amounts are withheld. The citizenship clock is not invented.
- The 10-year and 7-year rule, the 19 May 2026 start, pending applications, IFICI not being automatic, and the article 90 family exemption are stated in the same way on the owner pages.
- Home, cost, investment, and due diligence limit "company and research project" to the packages reviewed. That editorial fix is holding.
- There is no company name, no HQA trademark, no promise of approval or a return, and no Organization or review schema.
- The checklist does not gate the 15 questions. Consultation is the only high-intent form.
- Independence, the corrections address, and the status log are visible.

## Recommended action plan

P0, before launch:

1. Correct the two family sentences: the article 89 wait, and the 9-month ceiling.
2. Stop saying a review date is shown until `reviews.ts` has a real date.

P1, high:

1. Add article 85 n.º 4 on the presence page and replace the law-firm source.
2. Restore the dropped 8-month limb and the 7-year limb in the short tables.
3. Limit the IFICI education sentence to the professions category.
4. Restate article 101 without calling it unclear.
5. Narrow "research institution" to the teaching or vocational-training invitation in article 90.

P2, enhancement:

1. Swap secondary fact sources for the IRS page, Portaria 480-A/2025/1, the Constitutional Court text in the Diário da República, and article 85.
2. Add the CPLP language presumption on the citizenship page, with its limit.
3. After article 75 is checked, show the Golden Visa 2-year renewal beside the HQA 3-year renewal.
4. Remove or source the backlog clause.
5. Leave the job-offer explanation on the what-is page. Do not add a URL.
6. Run the monitoring list after launch.

## Final check

This pass wrote only `docs/audits/16-search-quality.md`. No page, fact, style, or component file was edited.
