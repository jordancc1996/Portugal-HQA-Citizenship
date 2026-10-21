# Forms

Date: 21 October 2026. Field text is the text in the built pages. The production Formcarry form IDs are not in this repository. `.env.example` leaves `PUBLIC_FORMCARRY_CHECKLIST_URL` and `PUBLIC_FORMCARRY_CONSULT_URL` empty. Those two variables are the endpoints. On Vercel they are set outside the repository. This pack does not contain the live IDs.

Both forms post JSON. A success message is shown only after Formcarry returns code 200. The local check aborted the request, and the success message did not appear. See `05-cookie-network-check.md`.

The checklist PDF is public at `/downloads/hqa-due-diligence-checklist-2026.pdf`. Nothing is emailed.

## Checklist form

It appears on `/` and on the topic pages that include the checklist band: `/portugal-hqa-visa-investment`, `/hqa-visa-cost`, `/hqa-visa-requirements`, `/hqa-visa-family`, `/portugal-hqa-vs-golden-visa`, `/hqa-visa-due-diligence`, `/hqa-visa-for-americans`, `/hqa-vs-startup-visa-tech-visa`, `/hqa-visa-status`, and the five guides. It is not on `/consultation`.

| Field | Label | Required |
|---|---|---|
| name | Name | Required |
| email | Email | Required |
| privacyConsent | I have read the Privacy Policy and consent to Portugal HQA Citizenship using my information to send the checklist. | Required. Unchecked until the visitor ticks it. The Privacy Policy link goes to `/privacy`. |
| marketingConsent | Email me when the rules change. I can unsubscribe at any time. | Optional |

There is no message field and no note under a message field.

Button: Send me the checklist.

After Formcarry confirms receipt, the form is hidden and the visitor sees: "Thank you. The checklist is ready to download." The link text is "Download the checklist" and the address is `/downloads/hqa-due-diligence-checklist-2026.pdf`. The page does not send the file by email. The consent sentence still says "to send the checklist."

Payload names sent to Formcarry: `name`, `email`, `privacyConsent`, `marketingConsent`, `source`. The `source` value is `Checklist -` plus the page path. It is not a visible field.

## Consultation form

It appears on `/consultation` only.

| Field | Label | Required |
|---|---|---|
| firstName | First name | Required |
| lastName | Last name | Required |
| email | Email | Required |
| phone | Phone (optional) | Optional |
| linkedinProfileUrl | LinkedIn profile URL | Required. Placeholder: `https://www.linkedin.com/in/username`. |
| countryOfCitizenship | Country of citizenship | Required |
| timeframe | When do you plan to move? | Required. Options: Select a timeframe; Within 6 months; 6 to 12 months; 1 to 2 years; Just researching. |
| message | Message (optional) | Optional |
| privacyConsent | I have read the Privacy Policy and consent to Portugal HQA Citizenship storing and using the information I provide to respond to my request. | Required. Unchecked until ticked. Links to `/privacy`. |
| thirdPartySharingConsent | I authorise Portugal HQA Citizenship to share my request with independent advisors or providers where needed to make the introduction I asked for. | Required. Unchecked until ticked. |
| marketingConsent | Email me when the rules change. I can unsubscribe at any time. | Optional |

Note under the message field: "Please do not include passport numbers, medical details, criminal records or information about children. Share only what is needed for the introduction."

Button: Request a consultation.

After Formcarry confirms receipt, the visitor sees: "Thank you. Your request was received."

Payload names: `firstName`, `lastName`, `email`, `phone`, `linkedinProfileUrl`, `countryOfCitizenship`, `timeframe`, `message`, `privacyConsent`, `thirdPartySharingConsent`, `marketingConsent`, `source`. The `source` value is `Consultation -` plus the page path. The LinkedIn URL is not sent to analytics.
