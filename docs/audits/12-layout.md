# Layout

Date: 20 October 2026. Layout and CSS only. No copy, heading, link, button label, schema, metadata, image file, or alt text was changed on the public pages. Nothing was committed.

## Files created

- `src/components/PageHero.astro`
- `src/components/PageIntro.astro`

## Files changed

- `src/styles/global.css`: gutter, section, and block tokens, plus `.container`, `.measure`, `.wide`, `.section`, and `.facts`.
- `src/components/Header.astro` and `src/components/Footer.astro`: the inner bar is a `.container`. The hairline stays full width.
- `src/components/KeyFacts.astro`: 1 column below 768px, 2 from 768px, 4 from 1200px only when there are exactly 4 facts.
- `src/components/LeadMagnetBand.astro`: the cream background stays full bleed. The text sits in `.container` `.measure`. The `band` class is unchanged, so the machine layer still drops it.
- `src/pages/index.astro`, `portugal-hqa-visa-investment.astro`, `hqa-visa-requirements.astro`, `hqa-visa-family.astro`, `portugal-hqa-vs-golden-visa.astro`, `guides/hqa-visa-citizenship-10-year-rule.astro`: hero photo pages now use `PageHero`.
- Text pages now use `PageIntro`: about, methodology, consultation, contact, privacy, terms, image credits, status, cost, due diligence, Americans, the guides index, what-is, IFICI, presence, permanent residency, and the StartUP comparison.
- `src/pages/styleguide.astro`: shows `.container`, `.measure`, `.wide`, `PageIntro`, and `PageHero`.
- `AGENTS.md`: the design section now says every block uses `.container` plus `.measure` or `.wide`, and that new pages use `PageHero` or `PageIntro`. The reading-column line was updated from 680px to 720px so it matches `.measure`.
- `CHANGELOG.md`

`PageHero` passes `sizes="(min-width: 1024px) 560px, 100vw"`. Loading stays `eager`. Home and the other standard heroes keep quality 82 and max width 960. The requirements tile keeps quality 45 and max width 720, and its frame is 4 / 5 at every width.

Contact, consultation, privacy, terms, and image credits do not render a "Last verified" line. They did not have one before.

## CSS removed per page

The trailing `<style>` block was removed from all 24 files in `src/pages`. Those blocks repeated the same layout rules: `.hero`, `.reading`, `.strip`, `.end`, `.section-block`, and the 48rem padding overrides. None of those selectors remain in `global.css`.

Rules that were not column widths were kept in `global.css`: `.suit`, `.fit-pair`, the comparison label column, `.sources`, `.disclaimer`, `.action-line`, the unknowns spacing, and the image-credit list. A few pages still have a `<div class="reading">` around body sections. That class has no CSS, so it does not set a width.

## Content edges at 1280px, home

The browser tool was not available (`cursor-ide-browser` returned "Server not found"), so these edges are calculated from the CSS, not measured on a rendered page.

At 1280px the gutter is 48px and the container is 1200px, so the container starts at (1280 − 1200) / 2 = 40px. The content edge inside the container is 40 + 48 = 88px. The container's content box is 1104px wide. `.wide` is 1040px, so it sits 32px inside that box. `.measure` is 720px, so it sits 192px inside that box. All three boxes share the viewport center at 640px.

| Block | Left edge |
|---|---|
| Header wordmark | 88px |
| H1 | 88px |
| Key facts | 120px |
| First H2 ("What the HQA visa actually is") | 280px |
| Footer | 88px |

The hero is two equal columns with a 64px gap. Each column is (1104 − 64) / 2 = 520px. The photo frame is 4 / 5, so the photo is 520 × 650, with `object-fit: cover`. It does not grow with the text.

## Before and after

`npm run check`: 0 errors.

`npm run build`: 24 pages. Fact drift checks passed for 21 indexable pages. Heading case checks passed for 218 headings. The three new headings are on `/styleguide` only: "Layout", "Wide column", and "Page Hero".

Compared with the build from before this change:

- `dist/markdown`: 21 files, 0 differences.
- Every `application/ld+json` block, including privacy, terms, and the styleguide: 0 differences.

No `loading="lazy"`. No new dependency. No new color. The only `box-shadow` values in the source are `none`, which were already there. No gradient is painted.

The home page and a text-only page were not opened at 390, 768, 1280, or 1440px, because the browser tool did not start. Tables still scroll inside `.table-scroller` below 768px (`min-width: 40rem` on the table, `overflow-x: auto` on the scroller). The page column itself is `width: 100%` with a 20px gutter at 390px.
