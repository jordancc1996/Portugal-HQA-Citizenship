# Changelog

## 2026-10-19

Change: Project setup.
Why: Start the build.

## 2026-10-19

Change: Design tokens, type styles, and six source photographs.
Why: Set the visual system and the image standard before pages are built.

### Image standard

AGENTS.md image rules, as applied:

- Photographs are the Unsplash files named for this task. Each file, photographer, and Unsplash URL is in src/data/image-credits.ts.
- Files are WebP at quality 84, inside the required 82 to 85 range. Width is at most 2400px. Sharp did not enlarge any file. Aspect ratio was kept.
- Filenames are lowercase and hyphenated.
- src/components/Photo.astro renders a photograph with Astro Image, responsive widths, loading="eager", and the file width and height. Alt text is required. No loading="lazy". No IntersectionObserver loader.
- SVG files stay SVG. These photographs show places in Portugal.

## 2026-10-19

Change: Shared layout, content components, and a noindex styleguide.
Why: Build the page shell before the public pages.

## 2026-10-19

Change: Checklist and consultation forms.
Why: Collect the checklist request and the consultation request through Formcarry.

## 2026-10-19

Change: Home page from the approved copy.
Why: Publish the first public page, and keep the desktop header links visible.

## 2026-10-19

Change: Tighten the home page, fonts, images, forms, and schema.
Why: Keep the approved copy, cut the CSS, and fix the layout and markup checks.

## 2026-10-19

Change: Investment pillar page from the approved copy.
Why: Publish the page on what a private HQA package pays for, with the same layout as the home page.

## 2026-10-19

Change: Cost page from the approved copy, and a shared list of built pages.
Why: Publish the cost breakdown and let the home guide list use each page's own verification date.

## 2026-10-19

Change: Requirements page from the approved copy.
Why: Publish who qualifies for the route, with the legal rules separated from provider rules.

## 2026-10-19

Change: Citizenship guide from the approved copy.
Why: Publish the 10-year residence rule and the points that are still unclear.

## 2026-10-20

Change: Comparison page from the approved copy.
Why: Publish the HQA and Golden Visa differences on cost, stay and citizenship.

## 2026-10-20

Change: Smaller requirements hero, and the what-is guide from the approved copy.
Why: Cut the tile photograph below 150KB and publish the legal basis of the route.

## 2026-10-20

Change: Presence guide from the approved copy.
Why: Publish the absence limits and what "no minimum stay" claims do not establish.

## 2026-10-20

Change: Family page from the approved copy.
Why: Publish who can join an article 90 holder, and which family points are still unclear.

## 2026-10-20

Change: Due diligence page from the approved copy.
Why: Publish the 15 questions, the claim checks and the red flags.

## 2026-10-20

Change: Americans page from the approved copy.
Why: Publish how US citizens apply, and which US tax duties continue after a move.

## 2026-10-20

Change: IFICI guide from the approved copy.
Why: Publish who can use the 20% regime, and that the permit does not qualify anyone on its own.

## 2026-10-20

Change: StartUP Visa and Tech Visa comparison from the approved copy.
Why: Publish how the three routes differ in law, cost and family rules.

## 2026-10-20

Change: Permanent residency guide from the approved copy.
Why: Publish what a 5-year residence card changes, and what it does not change about citizenship.

## 2026-10-20

Change: Guides index and status page from the approved copy.
Why: Publish the guide list and the current status of the route, including law changes since October 2025.

## 2026-10-20

Change: Methodology, about and contact pages from the approved copy.
Why: Publish how facts are checked, who the site is, and the email address in one place.

## 2026-10-20

Change: Consultation page, with a required sharing consent box on the consultation form.
Why: Introductions share enquiry details, so that consent has to be explicit before anything is sent.

## 2026-10-20

Change: Privacy, terms and image credits pages from the approved copy.
Why: Publish how personal data is handled, the terms of use, and the source of each photograph.

## 2026-10-20

Change: Keep page CSS in one external file instead of inlining it.
Why: A cached stylesheet is smaller to download on later pages than repeating it in every HTML file.

## 2026-10-20

Change: One verified date per page, a review-date check before deploy, and noindex on draft privacy and terms until a review date exists.
Why: Page dates and legal-review status were coming from more than one place, and the unconfirmed fee-increase figure is no longer on the cost or status pages.

## 2026-10-20

Change: Generate llms.txt, Markdown copies, and a content index from the built pages.
Why: Agents need a discovery file and a text copy of each indexable page without a second hand-written source.

## 2026-10-20

Change: Correct the Golden Visa comparison summary, and take the styleguide fact-file date from the fact file.
Why: The summary said every Golden Visa legal minimum was €500,000 and that citizenship was a 10-year wait. The page lists €250,000 options and a 7-year rule for EU and CPLP nationals. The styleguide description still said 19 October after the fact file moved to 20 October.

## 2026-10-20

Change: Link Article, CollectionPage and FAQ schema to the page and the shared website id.
Why: Those nodes described the same URL without a shared id, so a crawler could not tell they were one page.

## 2026-10-20

Change: Put the methodology keyword at the start of the title and name the 4 source levels in the description.
Why: The title started with "Methodology" and the description had no number, so the page failed the keyword check.

## 2026-10-20

Change: Add six checked facts, five internal links, and the approved wording fixes from the linking and editorial audits.
Why: The lawyer's review of those audits confirmed which sentences to narrow, which figure to delete, and which links belong in the copy. Review dates stay empty until the lawyer supplies them.

## 2026-10-20

Change: Correct the StartUP Visa H1 and check heading case at the end of the build.
Why: The comparison page H1 used "Startup Visa" instead of the official name. The other headings already matched the case rules.

## 2026-10-20

Change: Record the image check. No photo files were re-encoded.
Why: The six source photos were already WebP, and the Open Graph files stay JPG on purpose.

## 2026-10-20

Change: Put every page on one 1200px container, with a 720px measure column and a 1040px wide column.
Why: The header, hero, facts, and body used different left edges, and the hero photo stretched to the height of the text.

## 2026-10-20

Change: Narrow three lines on the investment page: the package split, what the money funds, and the family-rules button.
Why: The cost, home, and what-is pages already used this wording. The investment page still stated the broader claims.

## 2026-10-20

Change: Left-align the measure and wide columns, and keep headings with the text.
Why: A section that contained a table was placed in the wide column, so its heading started further left than the paragraphs around it.

## 2026-10-20

Change: Match the checklist and consultation consent lines to the privacy wording, and add the family-information note on the consultation form.
Why: The boxes were already required and unchecked, but the labels did not say what the person was consenting to. The privacy draft was left for the lawyer.

## 2026-10-20

Change: Set the consultation LinkedIn field to type url and sentence-case the label.
Why: The field was already required and normalized, but the control was a text input and the label capitalized "Profile."

## 2026-10-20

Change: Shrink the consent checkbox to 20px and align it with the first line of the label.
Why: At 375px the 44px box sat in the middle of a four-line label.

## 2026-10-20

Change: Correct the family-wait, decision-time, absence, renewal and invitation sentences against the consolidated Lei 23/2007, and drop the unsourced backlog line.
Why: The family page treated article 90 as the only exemption and treated 9 months as a ceiling. The comparison tables dropped the 8-month absence limit, the Golden Visa 2-year renewal and the low-density reduction.

## 2026-10-20

Change: Add a noindex 404 page, cache hashed /_astro files for one year, and stop a production build while a review date is null.
Why: Unknown URLs had no site page, and a production deploy should not go out before the lawyer dates exist. public/favicon.ico is present, so its link stays.

## 2026-10-20

Change: State that the permanent residence permit has no expiry and that the D3 visa allows a stay of up to 4 months, and add a cover note for the lawyer.
Why: The permanent-residence page said the permit was valid for 5 years, and the D3 visa was described as 120 days. Articles 76 and 58(2) say otherwise.

## 2026-10-20

Change: Remove every claim that the site takes no fees, is not paid for introductions, or does not sell data.
Why: The owner may sell leads later. Those sentences would be false if that starts, and no new claim about payment was added.

## 2026-10-20

Change: Replace the desktop link row with one menu button, and set the wordmark in Inter 700.
Why: The header uses the same menu at every screen size, with the wordmark on the left.

## 2026-10-20

Change: Build pages from full-width paper, cream and Atlantic bands, and set the footer on Ink.
Why: A single white column did not show where one section ended and the next began.



