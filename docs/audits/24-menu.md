# Menu

Date: 20 October 2026. Design and CSS only, plus the menu items. Page copy, schema and SEO files were not changed.

## What changed

The open menu is a full-screen cream panel (`#F7F1E8`). While it is open, the header bar uses the same cream, so the logo and the close control sit on one field. The logo stays Atlantic at the top left. The close control stays at the top right, in the same Menu button: the X icon plus the word Close.

The links are stacked and left-aligned, inside `.container`, on the same left edge as the logo and the H1. Order: Home, Investment, Costs, Requirements, Citizenship, Guides, Reports, Press, About, Contact. Reports and Press render only when `src/pages/reports.astro` or `src/pages/press.astro` exists (an `index.astro` in that folder counts). Neither route exists, so both items are omitted. The outlined "Read our reports" button uses the same check for `/reports`, so it is omitted too. Its styles are already in the header.

The links are Newsreader 400, Ink, line-height 1.1, with 4px between the link boxes. The size is 34px below 768px, 44px from 768px, and 56px from 1024px. Hover, focus and the current page use Atlantic with a 2px underline, offset 6px. Each link box is at least 48px tall. At 34px the line is about 37px, so the extra space sits inside the box. That keeps the 4px gap and a 48px tap target. The consultation button is 60px tall. The email link is also at least 48px tall.

"Request a consultation" sits 40px below the last link. It is a solid Atlantic button, white text, Inter 500, 18px, height 60px, padding 0 32px, 4px radius. From 768px it sits beside the reports button. Below 768px the buttons stack. The contact email is under the buttons, Inter 14px graphite, as a mailto link.

The behaviour is unchanged. The links live in the `<details>` element. Escape closes the menu. Focus moves to the first link. Tab stays inside the menu. Page scroll locks. The panel fades in over 150ms.

## Contrast on cream `#F7F1E8`

| Pair | Ratio | WCAG AA (4.5:1) |
|---|---|---|
| Ink `#141414` | 16.41:1 | Pass |
| Atlantic `#1F3A68` | 10.04:1 | Pass |
| Graphite `#4A4A4A` | 7.89:1 | Pass |
| White `#FFFFFF` on Atlantic | 11.27:1 | Pass |

## Width at 375px

The content width is 335px (20px gutter on each side). Advance widths from the Newsreader 400 and Inter 500 files:

- Requirements at 34px: 201px. It fits on one line.
- "Request a consultation" at 18px: 196px of text, plus 64px of horizontal padding, 260px in all.
- The email at 14px: 233px.

None of those is wider than 335px, so the open menu should not scroll sideways. The header bar is still 64px below 768px and 80px from 768px.

The browser tool was not available, so this width check is from the font files rather than a live viewport.

## Checks

`npm run build` passed: 21 fact checks and 221 headings.

The home page has one primary nav. It includes Home, Investment, Costs, Requirements, Citizenship, Guides, About, Contact, the consultation button and the email. It does not include Reports, Press or "Read our reports". The sitemap does not list `/reports` or `/press`.

`/styleguide` has a static cream copy of the open panel. In that copy only, Investment shows the current-page underline.
