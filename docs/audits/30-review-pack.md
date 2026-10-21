# Full review pack

Date: 21 October 2026.

The pack is in `docs/legal/full-review-pack/`. No page copy was edited. `src/data/reviews.ts` was not edited. Every review date is still null.

## Pages

All 21 indexable URLs in `src/data/pages.ts` have a file in `01-pages/`. Privacy, terms, consultation, contact, about and methodology are included. Reports and press are included and are noindex.

The page files were taken from `dist/` after `npm run build`. A comparison of each file with the visible text in `main` found no missing block. Navigation, the footer and JSON-LD were left out. Paragraphs are numbered.

## Sources

Printed on 21 October 2026: Lei 23/2007, Lei Orgânica 1/2026, Lei 61/2025, Lei 62/2026, the tax-authority IFICI leaflet, three of the four €175,000 provider pages, and both DPA pages.

Owner to save manually: Harvey Law (HTTP 403), Portaria 352/2024/1 and Portaria 328/2018 (the Diário da República detail pages said they were not available), IAPMEI Tech Visa (the request failed), Portaria 208/2017 (no URL is stored), and The Portugal News (already blocked in the open checks).

## Local network check

`05-cookie-network-check.md` records the preview on 127.0.0.1. No cookie, no localStorage key, no sessionStorage key, and no request to a host other than the preview, on load or after the menu. Both form posts were aborted. The success message did not show. This is a local check. Claude will repeat it on the live domain.

## Build

`npm run build` passed: fact checks for 21 indexable pages, heading checks for 228 headings. The local build skips the review-date check because `VERCEL_ENV` is not production.
