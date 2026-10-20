# Heading case

Date: 20 October 2026. Capitalization only. No wording, URL, or link changes. Nothing was committed.

Title case treats a colon or question mark as the start of a new segment. The first and last word of each segment are capitalized. Small words stay lower in the middle: a, an, the, and, but, or, in, on, at, to, for, of, vs. Sentence case capitalizes the first word, then words that keep their own capital.

## Routes

`src/pages` has 24 routes. The build wrote 24 HTML files. 21 are indexable. The sitemap lists those 21 and no others.

Indexable routes missing from the sitemap: none.

These HTML files are in `dist` and are not in the sitemap, which is correct:

| Route | Why it is out of the sitemap |
|---|---|
| `/privacy` | Noindex while the review date is empty |
| `/terms` | Noindex while the review date is empty |
| `/styleguide` | Always noindex. It is not in `src/data/pages.ts` |

`/styleguide` was still audited, because `check:headings` reads every HTML file in `dist`.

## Corrections

| Page URL | Heading level | Original heading | Corrected heading | Status |
|---|---|---|---|---|
| `/hqa-vs-startup-visa-tech-visa` | H1 | HQA vs Startup Visa Portugal: And the Tech Visa | HQA vs StartUP Visa Portugal: And the Tech Visa | Corrected |

The other 214 headings were already in the required case. They are not listed.

The H1 change is in `docs/content/hqa-vs-startup-visa-tech-visa.md` and in the `headline` constant in `src/pages/hqa-vs-startup-visa-tech-visa.astro`. The title tag and meta title still start with "HQA vs Startup Visa Portugal", because those fields are the keyword title, not the H1. The slug, breadcrumb, and first sentence were not changed.

The WebPage `name` and Article `headline` use that same constant, so those two schema strings now say StartUP. Schema types and ids did not change. After replacing that one string, the built HTML for the page matched the previous file byte for byte. Canonicals, links, and styling did not change.

## Manual exceptions

Two items were left outside the approved spelling list. No heading text was changed for them.

- `Americans` was added to the exported array in `scripts/check-headings.ts`. "How Americans apply" is already sentence case. Lowercasing it would be wrong. This was not a copy change.
- `NHR` was not added. "Old NHR is closed" stays as written because a token of two or more capitals is kept. Say if NHR should be added to the approved list.

`US` and `May` are on the approved list, but the checker applies them only when the source already uses that spelling. "What to email us about" and "may want" stay ordinary words.

Article numbers are not one fixed string, so they are not an array entry. The checker recognizes `article` plus a number. Title case uses "Article 90". Sentence case uses "article 90" unless it is the first word.

## Structure, reported and not changed

Every audited page has one H1. None has an empty heading, a skipped level, or the same heading twice. Header, footer, and both forms have no heading elements. The desktop and mobile navigation does not duplicate a heading.

Three places use heading-like type without a heading tag:

- FAQ questions are `summary` elements: Newsreader, 19px, weight 500.
- Guide list links are Newsreader, 21px, weight 500.
- Key facts leads are `strong` inside a paragraph. The section title "Key facts" is a real H2.

## Checker

`scripts/check-headings.ts` reads `dist/**/*.html`. The approved spellings, plus `Americans`, are in one exported array, `headingExceptions`. A failure prints the file path, URL, level, heading, and suggested fix, then exits 1.

`npm run check:headings` runs that script. `npm run build` runs it after `test:facts`.

## Totals

| Item | Count |
|---|---|
| Pages discovered | 24 |
| Pages audited | 24 |
| Headings inspected | 215 |
| H1 fixes | 1 |
| H2 to H6 fixes | 0 |
| Remaining violations | 0 |
| Manual exceptions | 2 |
| Structural issues | 3 reported, 0 repaired |
| Indexable routes missing from the sitemap | 0 |
| Build result | Passed |

`npm run check`: 0 errors, 0 warnings, 0 hints. `npm run build`: 24 pages, fact drift checks passed for 21 indexable pages, heading case checks passed for 215 headings.
