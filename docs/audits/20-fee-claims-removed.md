# Fee claims removed

Date: 20 October 2026. No new statement was added that the site is paid or that it sells leads. "Independent" stays in titles and H1s. "We do not sell investment packages" stays. Consent checkboxes, forms, payloads and sharing wording were not changed.

## Hits before the edit

`public/` had no hits. Government fees, provider fees and family fees were left alone. The citizenship FAQ "How long does HQA visa citizenship take now?" matches the letters "take no" inside "take now". It is not a fee claim and was not changed. The cost page and the other guides had no claim that this site takes no fees.

| File | Line | Text |
|---|---|---|
| `src/components/Footer.astro` | 17 | We take no referral fees or commissions from any provider, incubator, university or law firm. |
| `src/pages/index.astro` | 329 | Independent. We take no referral fees or commissions from any provider, incubator, university or law firm. |
| `docs/content/home.md` | 132 | Same home bullet. |
| `src/pages/about.astro` | 12 | Meta description ended "and no provider fees." |
| `docs/content/about.md` | 7 | Same meta description. |
| `src/pages/about.astro` | 93 | We take no referral fees or commissions from any provider, incubator, university, law firm or advisor. |
| `docs/content/about.md` | 40 | Same sentence. |
| `src/pages/about.astro` | 94 | and we are not paid for the introduction. |
| `docs/content/about.md` | 42 | Same clause. |
| `src/pages/methodology.astro` | 12 | Meta description ended "and no fees from any provider." |
| `docs/content/methodology.md` | 7 | Same meta description. |
| `src/pages/methodology.astro` | 130 | No-fee sentence, plus "we are not paid for the introduction." |
| `docs/content/methodology.md` | 55 | Same paragraph. |
| `src/pages/contact.astro` | 76 | We take no fees for introductions. |
| `docs/content/contact.md` | 29 | Same sentence. |
| `src/pages/consultation.astro` | 11 | No fees paid to us, ever. |
| `docs/content/consultation.md` | 7 | Same meta description. |
| `src/pages/consultation.astro` | 15 | We take no referral fees or commissions, so we have no reason to push you toward any one of them. Also the JSON-LD description. |
| `docs/content/consultation.md` | 15 | Same lead. |
| `src/pages/consultation.astro` | 80 | We are paid nothing for introductions. |
| `docs/content/consultation.md` | 31 | Same bullet. |
| `src/pages/hqa-visa-due-diligence.astro` | 252 | We take no fees from any provider. |
| `docs/content/hqa-visa-due-diligence.md` | 124 | Same sentence. |
| `src/pages/terms.astro` | 82 | We are not paid for introductions and |
| `docs/content/terms.md` | 30 | Same clause. |
| `src/pages/privacy.astro` | 125 | We do not sell your data. We are not paid for introductions. |
| `docs/content/privacy.md` | 53 | Same sentence. |
| `scripts/generate-machine.ts` | 341 | takes no referral fees |
| `AGENTS.md` | 10 | We take no referral fees or commissions. |
| `docs/lawyer-pack.md` | 7 | It takes no referral fees or commissions. |

## What changed

Each visible sentence is in both the content file and the matching page or component. The consultation lead is also the JSON-LD description. The other fee sentences were not copied into JSON-LD.

The footer is one sentence: "Portugal HQA Citizenship is an independent information site." The home bullet is "Independent. We are not a provider and do not sell investment packages." Unpaid clauses were cut from about, methodology, contact, consultation, due diligence and the terms. The privacy sentence was deleted and nothing was put in its place. `llms.txt` now says the site is independent and that program facts are checked against Portuguese law with the date shown on each page.

## 5-location check

Methodology keyword: how we verify hqa visa information

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

The description is 158 characters, starts with the keyword, includes 4, and ends with a period: "and dated updates on the status page."

About and consultation descriptions also changed. Their titles, slugs and first sentences did not. About is 153 characters and ends "and dated updates." Consultation is 151 characters and ends "who fit your situation."

## Checks

`npm run build` passed: fact checks for 21 indexable pages, heading checks for 219 headings. A search of `dist/` for referral, commission, unpaid and "sell your data" found no hits.
