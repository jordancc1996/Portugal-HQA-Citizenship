# LinkedIn field check

Date: 2026-10-20

The consultation form is the only high-intent form. It already had a required LinkedIn profile URL. Two gaps were fixed: the label was "LinkedIn Profile URL", and the input was `type="text"`. The label is now "LinkedIn profile URL", and the input is `type="url"`. Placeholder, `inputmode="url"`, `autocomplete="url"`, `required`, the name `linkedinProfileUrl`, and the position (after phone, before country, timeframe, message, and the consent boxes) were already correct.

The checklist form is a content download. LinkedIn was not added there.

Validation was already in `src/scripts/linkedin-url.ts`. It was not changed. It does not call LinkedIn or any identity check. It only parses the string.

## What is accepted

These inputs normalize to `https://www.linkedin.com/in/slug` before the request:

- `https://www.linkedin.com/in/slug`
- `https://www.linkedin.com/in/slug/`
- `https://www.linkedin.com/in/slug?trk=public`
- `www.linkedin.com/in/slug`
- `linkedin.com/in/slug`
- `uk.linkedin.com/in/slug`
- `https://m.linkedin.com/in/slug/`
- `http://pt.linkedin.com/in/slug`

`linkedin.com/in/test-profile` normalizes to `https://www.linkedin.com/in/test-profile`.

## What is rejected

| Input | Message |
| --- | --- |
| Blank or spaces | Please enter your LinkedIn profile URL. |
| `not-a-linkedin-profile` | Please enter a valid LinkedIn profile URL. |
| `https://example.com/person` | Please enter a valid LinkedIn profile URL. |
| `https://www.linkedin.com/company/acme` | Please enter a valid LinkedIn profile URL. |
| `https://www.linkedin.com/school/harvard` | Please enter a valid LinkedIn profile URL. |
| `https://www.linkedin.com/in/` | Please enter a valid LinkedIn profile URL. |
| `https://` | Please enter a valid LinkedIn profile URL. |

`/school/` is rejected because the first path segment is not `in`.

## Payload and leakage

The JSON body keeps `firstName`, `lastName`, `email`, `phone`, `countryOfCitizenship`, `timeframe`, `message`, `privacyConsent`, `thirdPartySharingConsent`, `marketingConsent`, and `source`. `linkedinProfileUrl` is the normalized URL. Consent values stay as they were: required boxes are `true` only after they pass, and an unchecked marketing box is `false`.

The form calls `preventDefault`, so the URL is not written into the page URL or a query string. `src` has no `console.log` of the field, and no analytics script. The privacy page mentions advertising cookies in prose only. The URL leaves the browser only in the Formcarry JSON body.

`PUBLIC_FORMCARRY_CONSULT_URL` is not set in this workspace. An empty URL makes `submitToFormcarry` return false before `fetch`.

## Mocked checks

| Test | Result |
| --- | --- |
| A. Valid URL submits, payload has the normalized value | Pass |
| B. Blank blocks, no request | Pass |
| C. `https://example.com/person` blocks, no request | Pass |
| D. `not-a-linkedin-profile` blocks, no request | Pass |
| E. `linkedin.com/in/test-profile` is accepted and normalized | Pass |
| F. Empty first name and email still block, no request | Pass |
| G. Provider throw and HTTP 500 return false. The failure branch shows "Something went wrong and your details were not sent. Please try again.", re-enables the button, leaves the fields, and does not show success | Pass |

Payload verified with a mocked provider. Stored lead record not verified (Formcarry URL not configured yet).

Test G was not a click in a browser. The mocked provider returned false, and the failure branch in `handleSubmit` does not reset inputs and does not unhide the success message.

## Responsive QA

The browser tool was unavailable. The consultation page was not opened at 1440, 1024, 768, or 390. `input[type="url"]` is already in the shared form styles (48px height, full width).

## Checks

`npm run check`: 0 errors, 0 warnings, 0 hints.

`npm run build`: 24 pages, fact drift checks passed for 21 indexable pages, heading case checks passed for 218 headings.

Not committed.

## Result

| Form | URL/Location | Classification | LinkedIn Added | Required | Validation | Payload | Provider | End-to-End | Responsive QA | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Consultation | `/consultation`, `/styleguide` | High-intent introduction | Already present. Label and `type="url"` fixed | Yes | Pass | `linkedinProfileUrl`, normalized, other fields kept | Formcarry. URL not configured | Mocked only | Not inspected | Pass |
| Checklist | `/`, `/portugal-hqa-visa-investment`, `/portugal-hqa-vs-golden-visa`, `/hqa-vs-startup-visa-tech-visa`, `/hqa-visa-status`, `/hqa-visa-requirements`, `/hqa-visa-for-americans`, `/hqa-visa-family`, `/hqa-visa-due-diligence`, `/hqa-visa-cost`, `/guides/what-is-hqa-visa`, `/guides/hqa-visa-presence-requirements`, `/guides/hqa-visa-permanent-residency`, `/guides/hqa-visa-ifici-tax`, `/guides/hqa-visa-citizenship-10-year-rule`, `/styleguide` | Content download | No. Excluded because it is not a high-intent form | No | Not applicable | Not applicable | Formcarry checklist URL, not configured | Not applicable | Not applicable | Excluded |
