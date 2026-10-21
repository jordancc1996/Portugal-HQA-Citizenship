# Cookie and network check

Date: 21 October 2026. This is a local check of `npm run preview` on 127.0.0.1. Claude will repeat it on the live domain.

The repository does not contain the production Formcarry form IDs. `.env.example` leaves both URLs empty. For this check only, the preview build used placeholder URLs on formcarry.com, and every request to that host was aborted before it was sent.

## Pages

### Home (/)

Cookies after load: none.
localStorage keys: none.
sessionStorage keys: none.
Other hosts on page load: none.
Other hosts after opening the menu and following a menu link (landed on http://127.0.0.1:4321/about): none.

### What is the HQA visa (/guides/what-is-hqa-visa)

Cookies after load: none.
localStorage keys: none.
sessionStorage keys: none.
Other hosts on page load: none.
Other hosts after opening the menu and following a menu link (landed on http://127.0.0.1:4321/about): none.

### Consultation (/consultation)

Cookies after load: none.
localStorage keys: none.
sessionStorage keys: none.
Other hosts on page load: none.
Other hosts after opening the menu and following a menu link (landed on http://127.0.0.1:4321/about): none.

### Privacy (/privacy)

Cookies after load: none.
localStorage keys: none.
sessionStorage keys: none.
Other hosts on page load: none.
Other hosts after opening the menu and following a menu link (landed on http://127.0.0.1:4321/about): none.

## Form submits

### checklist

Request URL: https://formcarry.com/s/local-check-not-sent
Method: POST
Field names: name, email, privacyConsent, marketingConsent, source.
The request was aborted. Nothing was delivered to Formcarry.
Success message visible after the aborted submit: no.
Status text: Something went wrong and your details were not sent. Please try again.

### consultation

Request URL: https://formcarry.com/s/local-check-consult-not-sent
Method: POST
Field names: firstName, lastName, email, phone, linkedinProfileUrl, countryOfCitizenship, timeframe, message, privacyConsent, thirdPartySharingConsent, marketingConsent, source.
The request was aborted. Nothing was delivered to Formcarry.
Success message visible after the aborted submit: no.
Status text: Something went wrong and your details were not sent. Please try again.

Same-origin requests (the preview host, HTML, CSS, fonts and images) were not listed above. Only cookies, storage and hosts other than the site are listed.
