# Section bands

Date: 20 October 2026. Layout and CSS only. Copy, headings, links, schema, metadata and images were not changed.

`dist/markdown` (21 files) and every `ld+json` block are byte-for-byte the same as before this change.

## What changed

`Section` draws a full-width band and puts the content in `.container`. Padding is 64px below 768px and 112px from 768px, on the top and the bottom. The old section top margin is gone, so the space above and below the content is equal.

Paper is #FFFFFF with Ink text. Cream is #F7F1E8 with Ink text. On cream, table header cells and the "What we don't know yet" box use paper. Atlantic is #1F3A68 with white text, white underlined links, and small text #E5DFD6. Buttons on that band are white with Atlantic text. Inputs stay white. The focus ring is white. A page has one Atlantic band, the checklist. The footer is Ink #141414, white text, white links, and small text #B8B2A8. The header stays white.

Text stays in `.measure`. Tables stay in `.wide`.

## Band order

Home: paper hero, cream key facts, paper "What the HQA visa actually is", cream "What the €175,000 packages are", paper "The honest timeline", cream "Who this route suits, and who it does not", paper "HQA packages and the Golden Visa", Atlantic checklist, paper Guides, cream "How we work", paper frequently asked questions.

Cost: paper hero, cream key facts, paper cost table, cream "What the package price usually includes", paper "What is not usually included", cream "Is the money refundable?", paper "What a family of four might pay", cream "How this compares to the Golden Visa", Atlantic checklist, paper frequently asked questions, cream disclaimer.

Citizenship: paper hero, cream key facts, paper "What changed", cream "Your timeline on the HQA route", paper "What we don't know yet", cream "The other requirements for citizenship", paper "How the law got here", cream "Does the Golden Visa get you citizenship faster?", Atlantic checklist, paper frequently asked questions, cream disclaimer.

The cost table and the home timeline stay on paper. The band before each one is cream, so a second cream band would break the rhythm.

## Contrast

Every pair below is at least 4.5:1.

| Text | Background | Ratio |
|---|---|---|
| Ink #141414 | Paper #FFFFFF | 18.42 |
| Ink #141414 | Cream #F7F1E8 | 16.41 |
| Graphite #4A4A4A | Paper | 8.86 |
| Graphite #4A4A4A | Cream | 7.89 |
| Stone #6B6B6B | Paper | 5.33 |
| Stone #6B6B6B | Cream | 4.75 |
| Atlantic #1F3A68 | Paper | 11.27 |
| Atlantic #1F3A68 | Cream | 10.04 |
| White #FFFFFF | Atlantic #1F3A68 | 11.27 |
| Rule #E5DFD6 | Atlantic | 8.51 |
| White | Ink #141414 | 18.42 |
| #B8B2A8 | Ink | 8.75 |
| Atlantic on the white button | White | 11.27 |

## Width

Bands are `width: 100%` inside the page. They do not use `100vw`. Every band, the header wordmark and the footer use `.container`, so the left edge is the same gutter: 20px at 375px. The browser tool was not available, so this was not checked with a screenshot. A table that is wider than the screen still scrolls inside its own scroller.
