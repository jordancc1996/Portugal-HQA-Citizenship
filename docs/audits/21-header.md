# Header

Date: 20 October 2026. Design and CSS only. Page copy, link targets, schema and metadata were not changed.

## What changed

The desktop row of text links is gone. One `nav` with `aria-label="Primary"` stays inside the existing `details` menu, so the seven links are in the HTML without JavaScript. Escape still closes the menu.

The wordmark is Inter 700, 20px below 768px and 22px from 768px, letter-spacing 0.01em, Ink, no underline. `@fontsource/inter/latin-700.css` is imported in `global.css`. Inter 700 is not used anywhere else.

The menu button is at least 48 by 48px. It shows three 28px lines, 2px thick, 7px apart, plus the word "Menu" in Inter 500 at 15px. Open, the icon is an X and the word is "Close". The bar is 64px tall below 768px and 80px from 768px, with the hairline under the header.

The open menu is a full-screen white panel at every size. The six text links are Newsreader 400, 28px below 768px and 36px from 768px, with 16px between them. The current page keeps `aria-current` and a thin underline. "Request a consultation" sits under a hairline as the solid Atlantic button. The site email is a mailto link in Inter 13px graphite. The panel fades in over 150ms. While it is open, page scroll is locked, focus moves to the first link, and Tab stays inside the menu.

## Checks

`npm run check` passed with 0 errors. `npm run build` passed: 21 fact checks and 220 headings.

All 25 built HTML files contain one primary nav, and that nav contains all seven links: Investment, Costs, Requirements, Citizenship, Guides, About, and Request a consultation. `desktop-nav` is gone.

The wordmark and the H1 both start at the `.container` content edge. The wordmark has no extra left margin, and the H1 sits in that same container.

At 375px the content width is 335px. The wordmark at 20px is about 253px wide, and the menu button is about 79px, so the name wraps onto a second line inside the 64px bar instead of widening the page. The longest menu label, "Requirements" at 28px, is about 166px. The email is about 216px. Neither is wider than 335px.

The browser tool was not available, so this width check is from the font files rather than a screenshot.
