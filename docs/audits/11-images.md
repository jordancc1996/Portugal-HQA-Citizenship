# Image check

Date: 20 October 2026. No layout, copy, URL, heading, link, component, or style changes. Nothing was committed.

## What was found

Six source photos, all already WebP, in `src/assets/images/`. No JPG, JPEG, or PNG masters exist in `src/` or `public/`. CSS does not reference an image. JSON-LD has no image field. `public/` has `favicon.svg`, `favicon.ico`, and the checklist PDF.

The six photos are credited in `src/data/image-credits.ts`. `Photo` renders the visible photo. `getImage` makes the Open Graph file.

| File | Pixels | Source size | Where it is used |
|---|---|---|---|
| `lisbon-alfama-rooftops.webp` | 2400×1800 | 698 KB | Visible on `/`. Open Graph image for `/` and for the 17 pages that have no photo of their own. |
| `university-of-coimbra-paco-das-escolas.webp` | 2400×1350 | 412 KB | Visible and Open Graph on `/portugal-hqa-visa-investment`. |
| `assembleia-da-republica-lisbon.webp` | 2400×3000 | 1,338 KB | Visible and Open Graph on `/guides/hqa-visa-citizenship-10-year-rule`. |
| `lisbon-praca-do-comercio-arch.webp` | 2400×1600 | 461 KB | Visible and Open Graph on `/portugal-hqa-vs-golden-visa`. |
| `cascais-town-square.webp` | 2400×1600 | 540 KB | Visible and Open Graph on `/hqa-visa-family`. |
| `blue-white-tile-pattern.webp` | 1600×2399 | 674 KB | Visible and Open Graph on `/hqa-visa-requirements`. |

The 17 Open Graph-only pages are about, methodology, what-is, cost, IFICI, status, consultation, presence, due diligence, Americans, image credits, terms, privacy, contact, permanent residency, the guides index, and the StartUP comparison. `/styleguide` has no photo and no Open Graph image. It is noindex.

`BaseLayout` links `/favicon.svg` and `/favicon.ico`. The checklist link is `/downloads/hqa-due-diligence-checklist-2026.pdf`.

## Converted

None. The source photos are already WebP, at or under 2400px wide, with the same aspect ratio they are displayed at. Reduction: none.

## Intentionally not converted

| File | Reason |
|---|---|
| Six `dist/_astro/*.jpg` files, each 1200×630 | Open Graph and Twitter image. JPG is kept because some social platforms handle JPG previews more reliably. They are generated at build time from the WebP masters. Quality 82. |
| `public/favicon.svg` | SVG stays SVG. |
| `public/favicon.ico` | Icon file, not a photo. |
| `public/downloads/hqa-due-diligence-checklist-2026.pdf` | The checklist, not an image. |

## Delivered size

Hero photos use `sizes="(min-width: 768px) 50vw, 100vw"` and a layout width of 960. The srcset is 480, 640, 768, 960, 1280, 1600, and 1920. The 1920 file is the 2x candidate for a column about 960px wide. That is the right top size, so it was not cut.

The tile photo is the exception. The page sets `maxWidth={720}` and `quality={45}`. `Photo` then stops the srcset at the layout width, so the files are 480, 640, and 720. The largest is 145 KB. A 2x screen would ask for more than 720, but the file is not larger than the slot. It was left as it is. The quality in the source is 45, not 70.

| Photo | Layout box | Largest WebP served | Open Graph JPG |
|---|---|---|---|
| Alfama rooftops | 960×720 | 1920×1440, 386 KB | 1200×630, 186 KB |
| Coimbra courtyard | 960×540 | 1920×1080, 222 KB | 1200×630, 133 KB |
| São Bento Palace | 960×1200 | 1920×2400, 711 KB | 1200×630, 192 KB |
| Rua Augusta Arch | 960×640 | 1920×1280, 223 KB | 1200×630, 102 KB |
| Cascais square | 960×640 | 1920×1280, 325 KB | 1200×630, 180 KB |
| Tile pattern | 720×1080 | 720×1080, 145 KB | 1200×630, 220 KB |

All six `<img>` tags have alt text, width, height, and `loading="eager"`. The width and height match the source aspect ratio. Alt text matches the credit descriptions.

## Unused originals

None. All six source files are referenced. No JPG or PNG master is sitting unused.

## Remaining JPG and PNG

No PNG files. The only JPG files are the six generated Open Graph images above.

## Lazy loading

`src/` and `dist/` have no `loading="lazy"`, no `IntersectionObserver`, and no lazy-load library. Every photo uses `loading="eager"`.

## Broken references

None. Every `src`, `srcset`, and `og:image` URL points at a file in `dist`. Twitter uses the same JPG. JSON-LD does not name an image, so there is no image URL there to break. `/styleguide` omits the Open Graph image on purpose.

## Instruction file

`AGENTS.md` already says WebP, quality 82 to 85, no upscaling, descriptive filenames, accurate alt text, no lazy loading, and SVG stays SVG. No line was added.

## Totals

| Item | Result |
|---|---|
| Images audited | 6 source WebP photos, 6 Open Graph JPGs, 1 SVG, 1 ICO, 1 PDF |
| Converted | 0 |
| Intentionally not converted | 6 Open Graph JPGs, the SVG, the ICO, and the PDF |
| Original size | See the source table. Already WebP. |
| WebP size | Same as the source size. No new encode. |
| Reduction | None |
| Unused originals | None |
| Remaining JPG/PNG | 6 generated Open Graph JPGs. No PNG. |
| Lazy-loading found | None |
| Lazy-loading remaining | None |
| Broken references | None |
| Instruction file updated | No |
| Build | PASS |
| Visual check | PASS for file integrity |

`npm run build` wrote 24 pages, passed the fact check for 21 indexable pages, and passed the heading check for 215 headings. The in-browser screenshot was not available, so the rendered crop was not seen. Every referenced image file is present, and the hero WebP at 1920px decoded as a real image at the right aspect ratio.
