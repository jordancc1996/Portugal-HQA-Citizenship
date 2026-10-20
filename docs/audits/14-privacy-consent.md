# Privacy consent

Date: 20 October 2026. Brand: Portugal HQA Citizenship. Domain: portugalhqacitizenship.com. An independent information site. It is not a law firm, adviser, broker, government body or immigration provider. It takes no referral fees or commissions and names no other company. This report does not say the site is legally compliant.

## Forms discovered

Two shared components. No other `<form>` exists. Contact, about, methodology, privacy and terms use a mailto link only.

| Form | Pages | Purpose | Fields | Provider | Consent | Privacy link |
|---|---|---|---|---|---|---|
| Checklist (`ChecklistForm.astro`) | `/`, `/portugal-hqa-visa-investment`, `/portugal-hqa-vs-golden-visa`, `/hqa-vs-startup-visa-tech-visa`, `/hqa-visa-status`, `/hqa-visa-requirements`, `/hqa-visa-for-americans`, `/hqa-visa-family`, `/hqa-visa-due-diligence`, `/hqa-visa-cost`, `/guides/what-is-hqa-visa`, `/guides/hqa-visa-presence-requirements`, `/guides/hqa-visa-permanent-residency`, `/guides/hqa-visa-ifici-tax`, `/guides/hqa-visa-citizenship-10-year-rule`, `/styleguide` | Send the checklist download after Formcarry confirms receipt. Optional rule-change emails. | Name, email. PDF link is not a field. It appears only after a confirmed receipt. | Formcarry, `PUBLIC_FORMCARRY_CHECKLIST_URL` (not set in this workspace) | Required privacy box, unchecked. Optional updates box, unchecked. | `/privacy` |
| Consultation (`ConsultationForm.astro`) | `/consultation`, `/styleguide` | Ask for an introduction to independent advisors or providers. The introduction is the service. Optional rule-change emails. | First name, last name, email, phone (optional), LinkedIn profile URL (required), country of citizenship, timeframe, message (optional) | Formcarry, `PUBLIC_FORMCARRY_CONSULT_URL` (not set in this workspace) | Required privacy box, required sharing box, optional updates box. All unchecked. | `/privacy` |

Each checklist page uses its own id prefix, so two forms on `/styleguide` do not share ids.

## Classification

| Form | Class |
|---|---|
| Checklist | Simple request for the checklist, plus optional update emails |
| Consultation | Professional introduction. Sharing consent is required because the introduction is the service. Optional update emails are separate. |

## Consent implementation

Labels that already matched were kept. The update-email line was already optional, unchecked, and not required to submit: "Email me when the rules change. I can unsubscribe at any time."

Changed:

- Checklist privacy label is now: "I have read the Privacy Policy and consent to Portugal HQA Citizenship using my information to send the checklist."
- Consultation privacy label is now: "I have read the Privacy Policy and consent to Portugal HQA Citizenship storing and using the information I provide to respond to my request."
- Consultation sharing label is now: "I authorise Portugal HQA Citizenship to share my request with independent advisors or providers where needed to make the introduction I asked for."
- Under the consultation message field, not a checkbox: "If you mention family members, only include information you are allowed to share."

Payload names stayed `privacyConsent`, `thirdPartySharingConsent`, and `marketingConsent`. A required box left unchecked does not build a payload, so false is not sent as true. `marketingConsent` is the real boolean from the box.

## Validation

A required box left unchecked returns field errors, does not call fetch, does not clear the fields, and does not show the success block. Success is shown only when `submitToFormcarry` gets `response.ok` and Formcarry `code` 200. HTTP ok with code 400, and code 200 with `ok: false`, both return false. An empty endpoint returns false and does not fetch.

Mocked fetch, 20 October 2026:

| Test | Result |
|---|---|
| A. Privacy unchecked, both forms | Blocked. No request. |
| B. Sharing unchecked, consultation | Blocked. No request. |
| C. Valid submit | Sent only when the mock returned ok and code 200. |
| D. Marketing unchecked | Both forms still valid and the consultation request was sent. |
| E. Payload | Checklist: `privacyConsent: true`, `marketingConsent: false`, no sharing field. Consultation: `privacyConsent: true`, `thirdPartySharingConsent: true`, `marketingConsent: false`. With the updates box ticked, `marketingConsent` is true. |

## Privacy policy review

The draft at `docs/content/privacy.md` and `/privacy` was not rewritten. It is noindex and still marked draft.

What matches: the field lists, consent as the stated basis, introductions only if the sharing box is ticked, update emails only if the updates box is ticked, Formcarry and Vercel named as processors, no sale of data, no payment for introductions, rights contact `hello@portugalhqacitizenship.com`, and a complaint route to the CNPD. The site source has no analytics script and sets no cookie. The forms do not ask for passport numbers, account details or documents.

## Other disclaimer review

Report only. No form copy was added to imply advice or approval.

The consultation form sits under "What to know first," which says the site is not a law firm and does not give legal advice, that introductions are unpaid, that details are shared only if the sharing box is ticked, and that any agreement is with the advisor or provider. The button says "Request a consultation." It does not say the request is approved or that the site acts for the government.

The checklist button says "Send me the checklist." The form does not mention legal, tax or investment advice, a government body, or a guaranteed outcome.

`/terms` says the site is general information, creates no client relationship, guarantees no visa, permit, citizenship, timeline or return, and is not connected to the Portuguese government, AIMA, IAPMEI or any provider. Terms are still a draft and noindex.

The consultation page bullet still says "advisors or providers" where the new checkbox says "independent advisors or providers." The page copy outside the form was left as it is.

## Accessibility

Consent text is 15px, Ink `#141414` on Paper `#FFFFFF`. Checkboxes are real `input type="checkbox"` elements with `label for` links. They start unchecked. Focus uses a 2px Atlantic outline. Each checkbox is 44 by 44 pixels, in a row at least 44 pixels tall. Errors use `role="alert"`. The family note is tied to the message field with `aria-describedby`.

## Responsive QA

The browser tool did not start (`cursor-ide-browser` returned "Server not found"). The forms were not opened at 1440, 1024, 768 or 390 pixels. The form CSS is one column at every width: inputs are `width: 100%`, and the consent rows are a 44px checkbox plus the label.

## Content protection

No URL, H1, metadata, schema, review date or sitemap entry was changed. Page copy outside the two form components was not changed. The privacy policy and the terms were not rewritten.

## Build

`npm run check`: 0 errors, 0 warnings, 0 hints.

`npm run build`: 24 pages. Fact drift checks passed for 21 indexable pages. Heading case checks passed for 218 headings.

## Files modified

- `src/components/ChecklistForm.astro`
- `src/components/ConsultationForm.astro`
- `src/scripts/checklist-form.ts`
- `src/scripts/consultation-form.ts`
- `src/styles/global.css`
- `docs/lawyer-review-queue.md`
- `CHANGELOG.md`

## Items requiring legal review

These are also in `docs/lawyer-review-queue.md`. The draft was not edited.

1. The draft does not name a person or legal entity as controller, and it has no address or registration number. Do not invent a company.
2. The draft says a purpose is to send the checklist. The site shows a public PDF link after Formcarry code 200. It does not email the file.
3. The sharing box says "independent advisors or providers" and "where needed to make the introduction I asked for." The draft says "advisors or providers we introduce you to."
4. The consultation message can include information about family members. The draft does not mention that.
5. No retention period is stated for checklist requests, consultation requests, or update-email addresses.
6. The source has no analytics script and sets no cookie. The draft only rules out advertising cookies and says analytics would be added later. It does not say whether Vercel sets a cookie. `vercel.json` is in the repo.
7. The draft says Formcarry and Vercel do not use the data for their own purposes. That sentence was not checked against their terms. The Formcarry URLs are not set here.
8. The rights contact matches `hello@portugalhqacitizenship.com`. The draft states no response time.

## Final status

PASS. The form controls, validation and payloads are consistent with each other. This is not a legal approval of the draft privacy policy or the terms. Review dates are still empty.
