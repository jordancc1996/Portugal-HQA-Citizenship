# Editorial review

Date: 20 October 2026. Read-only. No page, link, or fact file was changed. Nothing here is published.

Evidence: Measured means counted in the source. Observed means read in the source. Inferred means an editorial judgment. Unknown means the file does not say.

No Search Console or analytics data. Nothing below is a ranking or traffic claim.

Inputs: `src/pages/**/*.astro` (indexable pages only), `src/components/LastVerified.astro`, `src/data/reviews.ts`, `src/data/site.ts`, `docs/facts.json`. Phrase counts are case-insensitive matches in each page file after style and script blocks were removed. "HQA visa" includes matches inside "Portugal HQA visa". "Portugal HQA Citizenship" is the site name and is not counted as the visa phrase.

Indexable pages reviewed: the 21 routes in the sitemap set. `/privacy`, `/terms`, and `/styleguide` are noindex and were not phrase-counted. Image alt text on the indexable pages does not contain "HQA visa", "Portugal HQA visa", or "highly qualified activity". Measured.

## Keyword stuffing findings

The five-location keyword rule already puts the primary phrase in the title, the meta title, the description, the slug, and the first sentence. FAQ questions also need the subject, because a question can be read on its own. Those uses are needed terminology. They are not listed as defects.

"Highly qualified activity", articles 61 and 90, and the D3 visa are the legal names. Repeating them where the sentence states the law is required.

No high-risk stuffing was found. No page hides the same phrase in alt text. The rows below are the only trims worth making. Each one keeps the primary keyword in the opening.

| Page | Location | Phrase | Count | Before | After | Risk |
|---|---|---|---|---|---|---|
| `/guides/what-is-hqa-visa` | Text button after the related-routes table | HQA visa family rules | Exact anchor also used on the investment page | HQA visa family rules | Family rules for article 90 | Low |
| `/guides/what-is-hqa-visa` | Text button under "Is the HQA visa legitimate?" | HQA visa due diligence | 1 on this page | HQA visa due diligence | How to check a provider | Low |
| `/guides/hqa-visa-presence-requirements` | First sentence of the lead | HQA visa minimum stay | Title, meta title, description, H1, lead, schema, breadcrumb, and one FAQ. The lead adds an unsupported aside. | HQA visa minimum stay rules are stricter than many investors expect. | HQA visa minimum stay rules are the 6-month and 8-month absence limits below. | Low |
| `/consultation` | First sentence of the lead | HQA visa consultation | Title, meta title, description, H1, and lead | An HQA visa consultation starts here. | An HQA visa consultation is a request for an introduction. | Low |

Label for all four rows: AUTOMATED SUGGESTION. They do not change a legal rule. Any accepted sentence still has to be copied into `docs/content/` and the matching `.astro` file, including the JSON-LD description where that description repeats the lead.

Measured totals for "HQA visa", for context. These totals are not themselves findings.

| Page | HQA visa | of which "Portugal HQA visa" | highly qualified activity |
|---|---|---|---|
| `/guides` | 17 | 2 | 1 |
| `/guides/what-is-hqa-visa` | 15 | 0 | 9 |
| `/portugal-hqa-visa-investment` | 11 | 7 | 5 |
| `/` | 10 | 6 | 3 |
| `/guides/hqa-visa-presence-requirements` | 9 | 0 | 5 |
| `/hqa-visa-for-americans` | 9 | 7 | 3 |
| `/guides/hqa-visa-citizenship-10-year-rule` | 8 | 0 | 0 |
| `/guides/hqa-visa-ifici-tax` | 8 | 0 | 0 |
| `/hqa-visa-cost` | 8 | 0 | 1 |
| `/hqa-visa-due-diligence` | 8 | 0 | 3 |
| `/hqa-visa-family` | 8 | 0 | 3 |
| `/hqa-visa-requirements` | 8 | 0 | 6 |
| `/guides/hqa-visa-permanent-residency` | 7 | 0 | 2 |
| `/hqa-visa-status` | 6 | 0 | 1 |
| `/consultation` | 5 | 0 | 1 |
| `/methodology` | 5 | 0 | 0 |
| `/hqa-vs-startup-visa-tech-visa` | 2 | 0 | 4 |
| `/portugal-hqa-vs-golden-visa` | 2 | 0 | 0 |
| `/about` | 1 | 0 | 1 |
| `/contact` | 0 | 0 | 0 |
| `/image-credits` | 0 | 0 | 0 |

On `/guides/what-is-hqa-visa`, the count of 15 is the opening, three FAQ questions, the quoted informal label inside two answers, the H2 "Is the HQA visa legitimate?", the breadcrumb, and two buttons. The FAQ wording should stay. The buttons are the trim.

On `/hqa-visa-for-americans`, the seven "Portugal HQA visa" hits are the title, meta title, description, H1, lead, the schema copy of the lead, and the FAQ "Can Americans apply for the Portugal HQA visa?". That FAQ should stay so the question still makes sense alone.

## Template-driven repetition

These patterns are shared. Do not edit them page by page.

- Title, meta title, H1, and the first sentence repeat the primary phrase because the keyword rule requires it. JSON-LD `description` then copies the lead (`description: lead`, or the same paragraph pasted again). Machines see the lead twice. That is duplication, not a third claim. If a lead changes, the schema string has to change with it.
- `/guides` looks the most repetitive. Measured: 17 "HQA visa" matches. Most are the catalog titles in `src/pages/guides/index.astro`, which repeat `src/data/pages.ts`. Each title starts with the phrase because each guide's own keyword rule starts that way. Do not shorten those titles to thin the hub.
- The exact button "HQA visa and IFICI tax" is on the presence, Americans, and investment pages. "Portugal HQA vs Golden Visa" is on five pages. "citizenship guide" is on seven. Leave them until a later anchor pass. A sweep would touch approved copy for a small gain.
- The shared photo alt "Rooftops of Alfama in Lisbon with São Vicente de Fora church on the skyline" is the default Open Graph image. It does not contain a keyword. Unique hero alts (Coimbra, Cascais, tiles, Rua Augusta Arch, São Bento) are place names. No change.
- `LastVerified.astro` can append "Legally reviewed by an independent Portuguese lawyer on {date}." It renders that clause only when `src/data/reviews.ts` holds a date string. Every value is `null`, so the clause is not on the site today. Measured.

## Editorial checklist

Use this on every new or rewritten page before a lawyer re-read.

1. Primary phrase once in the title, once in the description, and once in the first ten words. After that, use "the route", "the permit", "the package", or "this page".
2. FAQ questions keep the subject. FAQ answers do not open by repeating the question.
3. Alt text names what is in the picture. No keyword in alt text.
4. Buttons name the destination in ordinary words. Do not paste the full keyword if the surrounding sentence already used it.
5. Every figure, date, and legal test is in `docs/facts.json`, or the sentence says reported or unverified and names where it came from.
6. Do not write "most", "usually", or "real" unless the source supports that scope.
7. Do not let one page's timeline numbers disagree with another page unless both sentences say they are estimates.
8. A source line covers only the facts that source supports. Provider prices do not sit under a statute citation.
9. Claims about other websites, investor expectations, or "advantages" need a source or they come out.
10. The review date is printed only by `LastVerified` from `reviews.ts`. Body copy does not say a review date is visible until one is.

## Page-by-page revision plan

Priority order follows the brief. Accurate figures, the existing internal links, and the primary keyword stay.

### 1. `/`

Intent is clear: what the route is, what the packages cost, and how long citizenship takes. The opening keyword is required. Do not thin it.

- NEEDS QUALIFIED HUMAN REVIEW. Lead: "Most investors meet it through private packages priced near €175,000." `docs/facts.json` says the price is reported. It does not say most investors use a package. Suggested replacement, if no source exists: "Private packages priced near €175,000 are sold as one way to use the route."
- NEEDS QUALIFIED HUMAN REVIEW. "The money funds a real business and real research work." That states every package does both. The fact file describes incubator and university research packages as a reported price range, not a guarantee of the underlying work.
- NEEDS QUALIFIED HUMAN REVIEW. The home timeline says the D3 visa is "Months 0 to 3". The investment page says "Months 2 to 4" and labels those bands as provider estimates. The fact file gives the visa's validity (120 days, two entries), not a processing time. Do not pick a new number here. Make the home row say it is an estimate, or point at the investment page's qualified table.
- NEEDS QUALIFIED HUMAN REVIEW. "You want a passport in less than 10 years" omits the 7-year period for EU and CPLP nationals, which the same page states elsewhere.
- NEEDS QUALIFIED HUMAN REVIEW. The source line "Sources: Lei 23/2007, Lei Orgânica 1/2026" sits under key facts that also include the reported package price and the absence limits. In the fact file, the price is reported from provider sites, and the absence limit is sourced to a law-firm article. The line should not look like those two statutes are the source of every figure in the strip.

### 2. `/portugal-hqa-visa-investment`

Intent is clear: what the private money buys, and that the law sets no minimum. Keyword placement in the title and the first sentence should stay.

- AUTOMATED SUGGESTION. The lead is one long sentence and the second clause is easy to misread. Before: "A Portugal HQA visa investment is money you pay into a private package that sets up a Portuguese research company, and Portuguese law does not require it." After: "A Portugal HQA visa investment is money you pay into a private package that sets up a Portuguese research company. Portuguese law does not require that payment."
- NEEDS QUALIFIED HUMAN REVIEW. "Research company" is narrower than the fact file, which covers incubator and university research packages, and narrower than the four legal routes on the what-is page. Confirm the lead still matches the packages this page describes.
- NEEDS QUALIFIED HUMAN REVIEW. The same month bands noted on the home page. This page already says they are provider estimates. The home page should use that qualification rather than this page changing its numbers.

### 3. `/hqa-visa-cost`

Intent is clear: the package price is not the whole cost, and several figures are unconfirmed. The unverified AIMA fees are labeled. Keep that.

- NEEDS QUALIFIED HUMAN REVIEW. "One published breakdown splits a €175,000 package into about €150,000 for incubation and research and €25,000 for legal and setup costs." That split is not in `docs/facts.json`, and the sentence does not name the publication. Name it, or take the sentence out until it is in the fact file.
- NEEDS QUALIFIED HUMAN REVIEW. "A place in a certified incubator, often for about 3 years." The duration is not in the fact file.
- NEEDS QUALIFIED HUMAN REVIEW. Lawyer fees of €5,000 to €10,000 and the consular fee of about €90 to €110 are marked reported or not confirmed in the table. They are still not in the fact file. Confirm the owner wants those rows to stay on that basis.
- NEEDS QUALIFIED HUMAN REVIEW. "The money funds a real company and real research. Once it is spent, it is gone." The second sentence is a useful warning. The first states a scope the fact file does not.
- AUTOMATED SUGGESTION. None for keyword trimming. "How much does the HQA visa cost in total?" should stay. It is the question a reader asks.

### 4. `/hqa-visa-requirements`

Intent is clear: the statute on one side, provider rules on the other. The unknowns box is the right place for open points.

- NEEDS QUALIFIED HUMAN REVIEW. "For the Tech Visa, the government rules ask for a degree at level 6 (a bachelor's degree or equivalent), or level 5 plus 5 years of relevant experience." Not in the fact file. Keep it only with the instrument named in the sentence.
- NEEDS QUALIFIED HUMAN REVIEW. "IAS, €537.13 a month in 2026." The unknowns box correctly says the salary threshold for a self-funded package is unconfirmed. The IAS figure itself is not in the fact file. Confirm the figure and the year, or move it out until it is.
- AUTOMATED SUGGESTION. The FAQ "Do I need a degree for the HQA visa?" should stay. The answer already says "in practice" rather than "the law requires". No wording change from this pass.

### 5. `/guides/hqa-visa-citizenship-10-year-rule`

Intent is clear: 10 years for most applicants, 7 for EU and CPLP nationals, from 19 May 2026. The clock-start box matches the unverified fact. Pending applications match the transition fact. Do not weaken those qualifiers.

- NEEDS QUALIFIED HUMAN REVIEW. "Certain prison sentences of 3 years or more can block an application." Not in the fact file.
- NEEDS QUALIFIED HUMAN REVIEW. "Portugal's Constitutional Court struck down 4 rules in an earlier version of the law (Acórdão 1133/2025)." The citation is specific. The count of 4 rules is not in the fact file. Confirm both before they stay.
- AUTOMATED SUGGESTION. "Many websites still promise a passport after 5 years." That is useful context and does not invent a statute. Optional trim if the owner wants every claim sourced: delete the sentence about other websites and keep "That is no longer true for new applications."

### 6. `/portugal-hqa-vs-golden-visa`

Intent is clear: money against time in Portugal, and the same citizenship clock. The description's range of €250,000 to €500,000 matches the table. The lead's €500,000 is tied to the fund route, which matches the fact file. Leave that distinction.

- NEEDS QUALIFIED HUMAN REVIEW. Lead: "you must live in Portugal and build a real business." The absence rule is 6 consecutive or 8 non-consecutive months, not a sentence that says the applicant must build a business. Suggested direction, for the lawyer to rewrite: keep the €175,000 and the 7-day and 14-day stay, and describe presence the way the presence page does.
- NEEDS QUALIFIED HUMAN REVIEW. "Some minimums can be up to 20% lower in low-density areas." Not in the fact file. No source in the sentence. Confirm or remove. Do not replace it with a different percentage.

### 7. `/hqa-visa-due-diligence`

Intent is clear: the legal route is real, and the packages are private products to test. The 15 questions are a practical example. This is the strongest of the eight pages on that point. The opening question repeats the H1 on purpose. Leave it.

- NEEDS QUALIFIED HUMAN REVIEW. Key fact: "It funds a company and a research project." Same scope problem as the home and cost pages. Not every package in the fact file is both a company and a research project.
- AUTOMATED SUGGESTION. None on keywords. "Is the HQA visa a scam?" should stay as the standalone question.

### 8. `/hqa-visa-family`

Intent is clear: who can join, the article 90 exemption, and the extra provider fee. The source line names Lei 61/2025. The spouse timing on the page matches the fact file's 18-month and 15-month exception. Keep those numbers.

- AUTOMATED SUGGESTION. Before: "HQA visa family rules are one of the route's real advantages." After: "HQA visa family rules changed in October 2025." The next sentences already state the 2-year wait and the article 90 exemption. "Real advantages" is a judgment, not a fact.
- NEEDS QUALIFIED HUMAN REVIEW. "Each family member gets a permit. It follows the main applicant's permit." The second sentence is not in the fact file. Confirm the legal effect or narrow it.
- NEEDS QUALIFIED HUMAN REVIEW. The source line under the key-fact strip cites only Lei 61/2025. The strip also states the reported €2,500 to €5,000 provider fee. A reader can think the statute set that fee. Add "Provider fees are reported by providers, not by that law." or split the source line.

## Needs qualified human review

Collected from the plan above. Do not apply these as style edits.

| Page | Item |
|---|---|
| `/` | "Most investors" use packages. Unsupported scope. |
| `/` | "Real business and real research" as a statement about the money. |
| `/` | Visa timing "Months 0 to 3" against the investment page's "Months 2 to 4". |
| `/` | "Passport in less than 10 years" without the 7-year EU and CPLP period. |
| `/` | Source line attributes the whole key-fact strip to two statutes. |
| `/portugal-hqa-visa-investment` | Lead says the package sets up a research company. |
| `/hqa-visa-cost` | Unpublished €150,000 and €25,000 split. |
| `/hqa-visa-cost` | Incubator "often for about 3 years". |
| `/hqa-visa-cost` | Lawyer range and consular fee range outside the fact file. |
| `/hqa-visa-cost` | "Real company and real research." |
| `/hqa-visa-requirements` | Tech Visa degree levels. |
| `/hqa-visa-requirements` | IAS €537.13 a month in 2026. |
| `/guides/hqa-visa-citizenship-10-year-rule` | Prison sentences of 3 years or more. |
| `/guides/hqa-visa-citizenship-10-year-rule` | Acórdão 1133/2025 and the count of 4 struck-down rules. |
| `/portugal-hqa-vs-golden-visa` | "Build a real business" and "must live in Portugal" as the presence test. |
| `/portugal-hqa-vs-golden-visa` | Golden Visa minimums "up to 20% lower in low-density areas." |
| `/hqa-visa-due-diligence` | Every package "funds a company and a research project." |
| `/hqa-visa-family` | A family permit "follows the main applicant's permit." |
| `/hqa-visa-family` | Statute citation sitting under a reported provider fee. |

## Pages that claim legal review

Every date in `src/data/reviews.ts` is `null`. `npm run check:reviews` is the launch block. This list is for the owner to confirm dates. It is not a finding that a review failed, and it is not a request to invent a date.

The stock line "Legally reviewed by an independent Portuguese lawyer on [date]" is in `LastVerified.astro`. It is not rendered while the date is null. These indexable pages mount that component, so the line will appear on each of them once a real date is stored:

`/`, `/guides`, `/guides/what-is-hqa-visa`, `/portugal-hqa-visa-investment`, `/hqa-visa-cost`, `/hqa-visa-requirements`, `/hqa-visa-family`, `/guides/hqa-visa-presence-requirements`, `/guides/hqa-visa-permanent-residency`, `/guides/hqa-visa-citizenship-10-year-rule`, `/guides/hqa-visa-ifici-tax`, `/portugal-hqa-vs-golden-visa`, `/hqa-vs-startup-visa-tech-visa`, `/hqa-visa-for-americans`, `/hqa-visa-due-diligence`, `/hqa-visa-status`.

Copy that asserts review in wording a reader or a crawler can see today:

- `/`, under "How we work": "Legally reviewed. An independent Portuguese lawyer reviews every page. Each page shows its review date." The second sentence describes a date line that is hidden while the dates are null.
- `/about`, meta description: "with legally reviewed pages". Body: "Keep every page dated and legally reviewed." Body: "An independent Portuguese lawyer reviews every page and stays anonymous at their request. Each page shows the date of its last legal review."
- `/methodology`, meta description: "legal review of every page". Body: an independent Portuguese lawyer reviews every page, and a date is shown only when a review took place. That last qualifier matches the component.
- `/guides`, meta description: "each verified and legally reviewed."

`/methodology`, `/about`, `/contact`, `/consultation`, and `/image-credits` are in `reviews.ts` and do not mount `LastVerified`. A date added later will not show on those pages until the component is placed. `/contact`, `/consultation`, and `/image-credits` do not claim in their own sentences that a review already happened. `/privacy` and `/terms` are noindex and also have null dates. They are outside the indexable set.
