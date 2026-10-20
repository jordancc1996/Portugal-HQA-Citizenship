# Lawyer review queue

Date: 20 October 2026. These are the sentences changed in the approved-fixes pass. Review dates in `src/data/reviews.ts` are still empty. Please confirm each sentence and send the review dates.

Fact key is the entry in `docs/facts.json` when the sentence rests on one. "none" means the change is wording or a link, not a new fact.

| Page | Before | After | Reason | Fact key |
|---|---|---|---|---|
| `/` | Most investors meet it through private packages priced near €175,000. | Private providers sell packages priced near €175,000 as one way to use the route. | "Most investors" was not sourced. | none |
| `/` | The money funds a real business and real research work. | In the packages we researched, the money funds a company and a research project. | The broader claim covered every package. | none |
| `/` | Visa row: Months 0 to 3 | Months 2 to 4 (provider estimate) | Match the investment page. Do not treat it as a legal deadline. | none |
| `/` | You want a passport in less than 10 years | You want a passport in less than 10 years (7 for EU and CPLP nationals) | The 7-year rule was missing from that line. | citizenshipYears |
| `/` | Sources: Lei 23/2007, Lei Orgânica 1/2026. | Sources: Lei 23/2007, Lei Orgânica 1/2026. Package prices are reported by providers. | The price is not set by those two laws. | packagePriceReported |
| `/portugal-hqa-visa-investment` | A Portugal HQA visa investment is money you pay into a private package that sets up a Portuguese research company, and Portuguese law does not require it. | A Portugal HQA visa investment is money you pay into a private package that sets up a Portuguese company and a research project. Portuguese law does not require that payment. | Split the sentence and name both parts of the package. | legalMinimumInvestment |
| `/portugal-hqa-visa-investment` | One published breakdown splits a €175,000 package into about €150,000 for incubation and research and €25,000 for legal and setup costs. | One provider's published breakdown splits a €175,000 package into about €150,000 for incubation and research and €25,000 for legal and setup costs. | Say it is a provider figure. No company name. The following sentences stay. | none |
| `/portugal-hqa-visa-investment` | It funds a real company and real research. It is not a deposit, and returns are not promised. | In the packages we researched, the money funds a company and a research project. It is not a deposit, and returns are not promised. | Same scope limit as the home page. | none |
| `/portugal-hqa-visa-investment` | Button: HQA visa family rules | Button: Family rules for article 90 | Shorter anchor. Same destination. | none |
| `/hqa-visa-cost` | One published breakdown splits a €175,000 package into about €150,000 for incubation and research and €25,000 for legal and setup costs. | One provider's published breakdown splits a €175,000 package into about €150,000 for incubation and research and €25,000 for legal and setup costs. | Say it is a provider figure. No company name. | none |
| `/hqa-visa-cost` | A place in a certified incubator, often for about 3 years | A place in a certified incubator, often for about 3 years in the packages we researched | Limit the duration to the packages reviewed. | none |
| `/hqa-visa-cost` | The money funds a real company and real research. Once it is spent, it is gone, whatever happens to your application. | In the packages we researched, the money funds a company and a research project. Once it is spent, it is gone, whatever happens to your application. | Same scope limit as the home page. | none |
| `/hqa-visa-requirements` | For the Tech Visa, the government rules ask for a degree at level 6 (a bachelor's degree or equivalent), or level 5 plus 5 years of relevant experience. | Under Portaria 328/2018, the Tech Visa asks for a degree at level 6 (a bachelor's degree or equivalent), or a level 5 higher technical course plus at least 5 years of specialized experience. | Name the instrument. | techVisaQualification |
| `/hqa-visa-requirements` | Some packages may file under article 90, others under article 89 (StartUP Visa). The answer changes the rules for your family. | Some packages may file under article 90, others under article 89 (StartUP Visa). The answer changes the family rules. | Link to the family page. Anchor: family rules. | familyReunification |
| `/guides/hqa-visa-citizenship-10-year-rule` | Permanent residence after 5 years lets you stop renewing a temporary permit. | Permanent residence after 5 years lets you stop renewing a temporary permit. | Link on "Permanent residence" to the permanent-residence guide. | permanentResidence |
| `/guides/hqa-visa-citizenship-10-year-rule` | Certain prison sentences of 3 years or more can block an application. | A final conviction with an effective prison sentence of more than 3 years for certain serious crimes can block an application. | Match the statute's test. | naturalisationCriminalBar |
| `/guides/hqa-visa-citizenship-10-year-rule` | (Acórdão 1133/2025) | (Acórdão 1133/2025 of 15 December 2025) | Add the date of the ruling. The 4 rules stay. | constitutionalCourtRuling |
| `/portugal-hqa-vs-golden-visa` | but you must live in Portugal and build a real business. | but you must not be away for more than 6 months in a row or 8 months in total during each permit. | Match the absence rule. €175,000 and the Golden Visa's 7 and 14 days stay. | absenceLimit |
| `/portugal-hqa-vs-golden-visa` | Some minimums can be up to 20% lower in low-density areas. | Sentence deleted. | Not confirmed for the rules after 2023. Restored in a narrower form in Prompt 43 (article 3(2)): job, research and culture amounts only. | none |
| `/hqa-visa-due-diligence` | It funds a company and a research project. | In the packages we researched, it funds a company and a research project. | Limit the claim to researched packages. | none |
| `/hqa-visa-family` | HQA visa family rules are one of the route's real advantages. | HQA visa family rules changed in October 2025. | Drop the judgment. The next sentences stay. | familyReunification |
| `/hqa-visa-family` | It follows the main applicant's permit. | It runs for the same length as the main applicant's permit. | State the duration rule. | familyPermitDuration |
| `/hqa-visa-family` | Source: Lei 61/2025, Diário da República n.º 204/2025. | Source: Lei 61/2025, Diário da República n.º 204/2025. Provider fees are reported by providers, not set by that law. | The fee in the same strip is not from that statute. | packagePriceReported |
| `/hqa-visa-status` | We have not found official guidance on "no minimum stay" claims. | We have not found official guidance on "no minimum stay" claims. The absence limits in the law are explained separately. | Link to the presence guide. Anchor: absence limits in the law. | absenceLimit |
| `/guides/hqa-visa-ifici-tax` | An HQA package can put you in a position to qualify, for example through a role in a certified startup or certified research work. | An HQA investment package can put you in a position to qualify, for example through a role in a certified startup or certified research work. | Link to the investment page. Anchor: HQA investment package. | none |
| `/guides/what-is-hqa-visa` | Families of article 89 (StartUP Visa) holders are not. | Same sentence, plus: The fuller comparison of HQA, the StartUP Visa and the Tech Visa is separate from the Golden Visa comparison. | Link to the comparison page. | familyReunification |
| `/guides/what-is-hqa-visa` | Button: HQA visa family rules | Button: Family rules for article 90 | Shorter anchor. Same destination. | none |
| `/guides/what-is-hqa-visa` | Button: HQA visa due diligence | Button: How to check a provider | Shorter anchor. Same destination. | none |
| `/guides/hqa-visa-presence-requirements` | HQA visa minimum stay rules are stricter than many investors expect. | HQA visa minimum stay rules come down to two absence limits: 6 months in a row or 8 months in total. | Drop the unsupported aside. The next sentences stay. | absenceLimit |
| `/consultation` | An HQA visa consultation starts here. | An HQA visa consultation here is a request for an introduction to an independent advisor or provider. | Say what the page does. | none |

Facts added with no sentence change on a page:

| Fact key | Value | Why there is no sentence edit |
|---|---|---|
| iasMonthly2026 | IAS (social support index) is €537.13 a month in 2026 | The requirements page already said this. It stays. |
| feie2026 | US foreign earned income exclusion is up to $132,900 for 2026 | The Americans page already said this. It was not in the approved sentence list. |

`/methodology` and `/about` now use the same Last verified line as the other pages. No review date was added. The line does not say a review took place until `reviews.ts` has a date.

## Privacy policy review needed

Date: 20 October 2026. The privacy draft was not rewritten. These items are for the lawyer. Fact key is "none" because none of them is a program fact in `docs/facts.json`.

| Page | What the draft says | What the forms do | Fact key |
|---|---|---|---|
| `/privacy` | Portugal HQA Citizenship is the website that collects the data. No person, company, address or registration number is named. | The forms name Portugal HQA Citizenship and no other company. A controller still has to be identified before launch. Do not invent one. | none |
| `/privacy` | One purpose is "to send you the checklist you asked for." | The site does not email the PDF. After Formcarry returns code 200, the page shows a link to `/downloads/hqa-due-diligence-checklist-2026.pdf`. That file is public. | none |
| `/privacy` | Sharing is with "advisors or providers we introduce you to," only if the consultation box is ticked. They use their own privacy policies. | The required consultation box says "independent advisors or providers" and "where needed to make the introduction I asked for." | none |
| `/privacy` | The consultation fields are listed. The message is optional. | The message field now tells the person to include family information only when they are allowed to share it. The draft does not mention information about other people. | none |
| `/privacy` | Data is kept only as long as needed, and deleted on request. | No period is stated for a checklist request, a consultation request, or an address used for update emails. | none |
| `/privacy` | The site does not use advertising cookies. Analytics would be added only after this policy is updated and consent is asked for where required. | The site source has no analytics script and sets no cookie. `vercel.json` is present. The draft does not say there is no analytics and no site cookie today, and it does not say whether the host sets one. | none |
| `/privacy` | Formcarry and Vercel process the data for the site and do not use it for their own purposes. | The forms post JSON to the Formcarry URL in an environment variable. Those URLs are not set in this workspace. The "own purposes" sentence is not checked against Formcarry's or Vercel's terms. | none |
| `/privacy` | Rights email is hello@portugalhqacitizenship.com. The draft lists access, correction, deletion, restriction, objection, a copy, withdrawal, and a complaint to the CNPD. | The contact address matches the site config. The draft states no response time. | none |

## Statute sentences, 20 October 2026

Each row is a sentence changed against the consolidated Lei 23/2007 on pgdlisboa.pt. Review dates are still empty.

| Page | Before | After | Article |
|---|---|---|---|
| `/hqa-visa-family` | Only article 90 gives the family exemption. | Article 90 families are exempt from the 2-year wait, as are Golden Visa and EU Blue Card families, minors and incapacitated dependants, and a spouse or partner who shares a dependent child with the holder. Article 89 is not on that list, so most article 89 families wait 2 years, or 15 months for a spouse who lived with the holder for 18 months, unless an exception applies. | 98(1), 98(3), 98(4) |
| `/hqa-visa-family` | Holders under article 89, the StartUP Visa route, do have to wait. | Article 89 is not on that list, so most article 89 families wait 2 years, or 15 months for a spouse who lived with the holder for 18 months, unless an exception applies. | 98(1), 98(2), 98(3), 98(4) |
| `/hqa-visa-family` | The law gives up to 9 months to decide a family reunification request. Real times vary. | AIMA must decide a family reunification request within 9 months. For article 90 families, AIMA can extend that once by the same period in exceptional cases and must tell the applicant. | 105 |
| `/hqa-visa-family` | The law does not say clearly whether this applies to families of article 90 holders. | After the family permit is granted, family members must take Portuguese language training and training on constitutional values, and children must attend compulsory school. Renewal depends on that training, with a humanitarian exception. The article 90 exemption from the waiting period is not repeated in this rule. The unknowns box now asks only how AIMA applies the training in practice. | 101(3) to 101(5) |
| `/guides/hqa-visa-presence-requirements` | The list did not state the proof rule or the timing of the justification. | Travel for the company, or for other work, does not cancel the permit if you can prove that activity. A longer absence should be justified to AIMA before you leave, or afterwards in exceptional cases. | 85(4), 85(3) |
| `/` | More than 6 consecutive months abroad can cost you the permit. | More than 6 consecutive months, or 8 months in total, abroad can cost you the permit. The Golden Visa sentence stays. | 85(2) |
| `/portugal-hqa-vs-golden-visa` | HQA holders must live in Portugal. | An HQA permit can be cancelled after more than 6 consecutive months, or 8 months in total, abroad. | 85(2) |
| `/portugal-hqa-vs-golden-visa` | Live there; more than 6 consecutive months abroad can cost the permit. | More than 6 consecutive months, or 8 months in total, abroad can cost the permit. | 85(2) |
| `/portugal-hqa-vs-golden-visa` | The comparison table had no renewal row. | Renewal: HQA renewed every 3 years. Golden Visa renewed every 2 years. | 75(1), 90-A(2) |
| `/portugal-hqa-vs-golden-visa` | The amounts table had no low-density sentence. | The job, research and culture amounts can be 20% lower in low-density areas. The fund and company routes are not reduced. | 3(2), 3(3) |
| `/portugal-hqa-vs-golden-visa` | but backlogs have been long, especially for Golden Visa files. | Removed. The 90-day deadline, extendable by 30, stays. | none |
| `/portugal-hqa-visa-investment` | but backlogs have been long. | Removed. The 90-day deadline, extendable by 30, stays. | none |
| `/hqa-vs-startup-visa-tech-visa` | Citizenship row: 10 years of legal residence, in every column. | 10 years (7 for EU and CPLP nationals), in every column. | Lei Orgânica 1/2026 |
| `/hqa-visa-requirements` | An invitation from a teaching or research institution | An invitation from a teaching or vocational-training institution | 90(1)(b) |
| `/guides/hqa-visa-ifici-tax` | Highly qualified roles generally require a doctorate, or a degree plus at least 3 years of professional experience. | For the highly qualified professions category in Portaria 352/2024/1, the role generally requires a doctorate, or a degree plus at least 3 years of professional experience. Other categories have their own education rules. | Portaria 352/2024/1 |
| `/` | Every legal claim links to the law or an official source. | Every legal claim names its source, and we link the official text where one exists. | none |
| `/guides/hqa-visa-permanent-residency` | Valid 5 years. The card is renewed every 5 years, without the conditions of a temporary permit. Also: "A residence card valid 5 years." FAQ: "5 years, and it is renewed every 5 years." | No expiry date. The card is renewed every 5 years. The comparison cell and the FAQ use the same wording. The source line now cites articles 76 and 80. The home timeline was checked. It says permanent residence is possible at year 5. It does not say the permit expires. | 76 |
| `/guides/what-is-hqa-visa` | Valid for 120 days, two entries | Two entries and a stay of up to 4 months | 58(2) |

## Question for the lawyer

Do not add this to the citizenship page until you answer.

Article 6(10) of Lei Orgânica 1/2026 presumes that CPLP nationals meet the Portuguese language part of article 6(1)(c), unless the lack is obvious. Culture, history and national symbols sit outside that presumption. The citizenship page still says the applicant must show knowledge of Portuguese through a test or certificate. Should that page state the presumption, and should it say the presumption covers language only?

