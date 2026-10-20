# Layout refinement

Date: 20 October 2026. Layout and CSS only. Nothing was committed.

## What changed

`.measure` and `.wide` are left-aligned inside `.container` (`margin-inline: 0`). `.measure` stays `max-width: 720px`. `.wide` is `width: 100%` and `max-width: none`, so it is the container's content width. The container itself stays centered at 1200px.

Headings, paragraphs, lists, the unknowns box, action links, and the FAQ stay in `.measure`. Only `Table`, `GuideList`, and the key facts grid stay in `.wide`. A section is no longer wrapped in `.wide` just because it contains a table.

Key facts are 1 column below 768px and 2 columns from 768px. The 4-column rule is gone. The hairlines stay.

The cream band is still full bleed. Its text is in `.container` `.measure`.

The AGENTS.md design line is now: "Every block sits in .container. Text, headings and lists use .measure (720px, left-aligned). Only tables, the key facts grid and guide lists use .wide (full container width). One left edge on every page." The next bullet still says new pages use PageHero or PageIntro.

`/styleguide` shows the same split. Two demo sentences on that noindex page were rewritten because they still said the wide column was 1040px and centered. Those sentences are not in the schema description. `dist/markdown` and the ld+json blocks do not include them.

## Files changed

- `src/styles/global.css`
- `src/components/KeyFacts.astro`
- `src/pages/*.astro` (19 page files): wide blocks split so prose is in `.measure`
- `src/pages/styleguide.astro`
- `AGENTS.md`
- `CHANGELOG.md`

No new files. Header, footer, PageHero, and LeadMagnetBand already used `.container`. Their CSS did not need a new rule.

## Left edge at 1280px

The browser tool did not start (`cursor-ide-browser` returned "Server not found"), so these positions were not read from a rendered window. They are the CSS layout position for a 1280px layout viewport.

The gutter at 1280px is 48px. The container is 1200px, so it starts at (1280 − 1200) / 2 = 40px. Every listed element is the first content in that container, with no extra left margin. The shared left edge is 40 + 48 = 88px.

A window whose scrollbar makes the layout viewport a few pixels under 1280 will show one smaller number. The wordmark, the H1, and the body still share it.

### Home

| Element | Left |
|---|---|
| Wordmark | 88px |
| H1 | 88px |
| Key facts | 88px |
| What the HQA visa actually is | 88px |
| What the €175,000 packages are | 88px |
| The honest timeline | 88px |
| First table (the timeline) | 88px |
| Who this route suits, and who it does not | 88px |
| HQA packages and the Golden Visa | 88px |
| Before you sign with any provider (cream band) | 88px |
| Guides | 88px |
| How we work | 88px |
| Frequently asked questions | 88px |
| Footer | 88px |

### /hqa-visa-cost

| Element | Left |
|---|---|
| Wordmark | 88px |
| H1 | 88px |
| Key facts | 88px |
| Cost table | 88px |
| First table | 88px |
| What the package price usually includes | 88px |
| What is not usually included | 88px |
| Is the money refundable? | 88px |
| What a family of four might pay | 88px |
| How this compares to the Golden Visa | 88px |
| Check the contract before you pay (cream band) | 88px |
| Frequently asked questions | 88px |
| Disclaimer | 88px |
| Footer | 88px |

The hero on the home page is still two equal columns. The H1 is in the left column, so it starts on the same edge as the wordmark. The photo stays in the right column at 4 / 5.

## Checks

`npm run check`: 0 errors, 0 warnings, 0 hints.

`npm run build`: 24 pages. Fact drift checks passed for 21 indexable pages. Heading case checks passed for 218 headings.

Compared with the build from before this change:

- `dist/markdown`: 21 files, 0 differences.
- Every `application/ld+json` block: 0 differences.
