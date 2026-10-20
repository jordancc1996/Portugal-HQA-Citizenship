# Lawyer pack

Date: 20 October 2026. This note is for the owner to send with the site. It does not name a reviewer.

## What the site is

Portugal HQA Citizenship is an independent information site about the Portuguese highly qualified activity residence route. It takes no referral fees or commissions. It is not a law firm, not a provider and not a government body. No company name appears on the site.

Please review all 21 indexable pages, the privacy policy and the terms. The review line on the site stays hidden until a real date is stored. Do not send a name, a photo or a registration number for that line.

## How to reply

For each page, reply "approved" and give a date, or list the changes needed. Use YYYY-MM-DD for the date.

| URL | Approved (yes/no) | Review date | Notes |
|---|---|---|---|
| / | | | |
| /guides | | | |
| /guides/what-is-hqa-visa | | | |
| /portugal-hqa-visa-investment | | | |
| /hqa-visa-cost | | | |
| /hqa-visa-requirements | | | |
| /guides/hqa-visa-citizenship-10-year-rule | | | |
| /guides/hqa-visa-presence-requirements | | | |
| /guides/hqa-visa-ifici-tax | | | |
| /portugal-hqa-vs-golden-visa | | | |
| /hqa-visa-family | | | |
| /hqa-visa-due-diligence | | | |
| /hqa-visa-for-americans | | | |
| /hqa-vs-startup-visa-tech-visa | | | |
| /guides/hqa-visa-permanent-residency | | | |
| /hqa-visa-status | | | |
| /methodology | | | |
| /about | | | |
| /contact | | | |
| /consultation | | | |
| /image-credits | | | |
| /privacy | | | |
| /terms | | | |

## Changed sentences

[docs/lawyer-review-queue.md](lawyer-review-queue.md) lists every sentence changed since the first draft. Please read that file with the pages.

## Open legal questions

1. Can the privacy policy name Portugal HQA Citizenship as the site that collects the data when no company, person, address or registration number is named? A controller still has to be identified. Do not invent one.
2. What retention period should the policy state for a checklist request, a consultation request, and an address used for update emails?
3. The privacy draft says a purpose is to send the checklist. The site does not email the PDF. After the form is accepted, the page shows a link to the file, and that file is public. Should the draft say that?
4. Should the citizenship page state the CPLP language presumption in article 6(10) of Lei Orgânica 1/2026, and should it say the presumption covers the language part only?
5. Does the family integration duty in article 101 apply in practice to article 90 families? The statute states the duty. The article 90 exemption from the waiting period is not repeated there.
6. How does AIMA apply the article 105 extension in practice? The statute says AIMA must decide a family reunification request within 9 months, and that it can extend once by the same period in exceptional cases and must tell the applicant, except for the ordinary 2-year and 15-month cases.
7. Is the IFICI education wording right for each category? The page limits "doctorate, or a degree plus at least 3 years of experience" to the highly qualified professions category in Portaria 352/2024/1, and says other categories have their own education rules.
8. Is the residence-card wording right? The permanent-residence page now says the permit has no expiry date and the card is renewed every 5 years (article 76).

## What happens after

The owner puts each approved date in `src/data/reviews.ts`. The production build refuses to deploy until every indexable page has one. Privacy and terms stay out of the index until their own dates are stored.
