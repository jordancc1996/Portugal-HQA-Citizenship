# Pre-review launch

Date: 21 October 2026. The owner decided to launch before the lawyer's full review. `src/data/reviews.ts` and `scripts/check-reviews.ts` were not edited. Every review date stays null.

## Launch lock

`scripts/review-gate.ts` still runs `npm run check:reviews` when `VERCEL_ENV` is `production`. If that check exits with a failure, the gate prints the page list as a warning and the build continues. Local and preview builds still log: "Skipped check:reviews because VERCEL_ENV is not production."

Privacy and terms stay noindex because their review dates are null. The DRAFT label stays in the content front matter and is not shown on the page.

## 5-location check

Pages whose descriptions changed.

Keyword: hqa visa guides

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description, 154 characters: "HQA visa guides for investors in 2026: cost, family, tax, presence and the 10-year path. Every page is being reviewed by an independent Portuguese lawyer."

Keyword: about portugal hqa citizenship

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description, 153 characters: "About Portugal HQA Citizenship: an independent site explaining the 2026 HQA visa rules. Every page is being reviewed by an independent Portuguese lawyer."

Keyword: how we verify hqa visa information

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description, 159 characters: "How we verify HQA visa information: 4 source levels, using Portuguese law first. Every page on this site is being reviewed by an independent Portuguese lawyer."

The first sentence of each page is unchanged, so the keyword stays in the first 10 words.

## Wording

Home, about and methodology now say the review is in progress, and that a page shows a review date once that review is complete. `llms.txt` has no separate review sentence. Its descriptions for those three pages follow the new meta descriptions.

Privacy names Portugal HQA Citizenship and privacy@portugalhqacitizenship.com. It does not add an address, a registration number or a company type. The checklist sentence matches the on-page download. Retention, sharing and cookies use the sentences in the queue. The rights list and the CNPD complaint route stay.

The consultation note tells people not to send passport numbers, medical details, criminal records or information about children. The Privacy Policy link text is unchanged.

Terms names Portugal HQA Citizenship and both email addresses. It stays noindex. The footer shows privacy@portugalhqacitizenship.com next to the Contact link.
