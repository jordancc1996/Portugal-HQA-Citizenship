# Lawyer round 1

Date: 21 October 2026. Source: `docs/legal/lawyer-memo-2026-10-21.md`. The memo is not a page approval. `src/data/reviews.ts` was not edited.

## What changed

The sentence list is in `docs/lawyer-review-queue.md` under "Round 1 corrections, 2026-10-21". Each visible sentence is in `docs/content` and the matching `.astro` page. FAQ answers that changed are the same strings in the FAQPage JSON-LD.

`docs/facts.json` `lastVerified` is 2026-10-21. Updated facts: `legalMinimumInvestment`, `packagePriceReported`, `permitValidity`, `absenceLimit`, `familyReunification`, `familyDecisionDeadline`, `familyIntegration`, `familyPermitDuration`, `permanentResidence`, `citizenshipYears`, `residenceWindow`, `goldenVisaRenewal`, `goldenVisaLowDensity`, `techVisaQualification` (source is now the IAPMEI Tech Visa page), `ificiRate`, `constitutionalCourtRuling`, and new `languagePresumption`.

`llms.txt` does not say a lawyer reviews every page. That line was left as it was.

The €150,000 / €25,000 split and the "about 3 years" incubation line are removed. The €170,000 to €200,000 range and €175,000 stay, labeled reported by providers, October 2026.

Acórdão 1133/2025 is only on `/hqa-visa-status`, as a dated event. The citizenship page no longer cites it.

## 5-location check

Pages whose first sentence or description changed.

Keyword: portugal hqa visa

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

The home intro still starts "The Portugal HQA visa". The description was not rewritten.

Keyword: portugal hqa visa investment

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Intro: "A Portugal HQA visa investment is money paid to a private provider." The keyword is in the first five words. The description was not rewritten.

Keyword: hqa visa portugal cost

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Intro: "HQA visa Portugal cost starts with a private package of about €175,000". The description was not rewritten.

Keyword: hqa visa family

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

The first sentence is still "HQA visa family rules changed in October 2025." The Lei 61/2025 line is the next paragraph.

Keyword: hqa visa citizenship

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Intro: "HQA visa citizenship now takes 10 years of legal residence for most applicants." The description was not rewritten.

Keyword: portugal hqa vs golden visa

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

The description still says "CPLP" because the full phrase does not fit 150 to 160 characters. The first paragraph says CPLP means countries where Portuguese is an official language.

Keyword: is the hqa visa legit

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

The description no longer uses "real" for the legal route. It keeps the same length, the 2026 date, and the 15 questions.

Keyword: hqa visa guides

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description, 158 characters: "HQA visa guides for investors in 2026: cost, family, tax, presence and the 10-year path. Pages are reviewed by an independent Portuguese lawyer before launch."

Keyword: about portugal hqa citizenship

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description, 150 characters: "About Portugal HQA Citizenship: an independent site for the 2026 HQA visa rules. Pages are reviewed by an independent Portuguese lawyer before launch."

Keyword: how we verify hqa visa information

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description, 150 characters: "How we verify HQA visa information: 4 source levels, using Portuguese law first. Pages are reviewed by an independent Portuguese lawyer before launch."

## Checks

`npm run build` passed. `test:facts` passed for 21 indexable pages. `check:headings` passed for 227 headings. `scripts/test-facts.ts` was not edited. It still reads 6 consecutive months, 8 non-consecutive months, 10 years, 7 years, 20%, 15 January and 90 days.

Grep of `dist/` for "passport in", "150,000", "about 3 years", "not a deposit" and "reviews every page": no matches.

Grep of `dist/` for "1133/2025": only `dist/hqa-visa-status/index.html` and `dist/markdown/hqa-visa-status.md`.

Local build skipped `check:reviews` because `VERCEL_ENV` is not production. A production build will still stop while review dates are null.
