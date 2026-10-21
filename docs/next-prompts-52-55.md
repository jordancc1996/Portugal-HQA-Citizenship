# Next prompts: 52 to 55

Paste in order: 52, 53, 54, 55. Then tell Claude "batch done".

---

## Prompt 52: New logo (docs/brand/logo-option-ph-mark.webp)

```
Context: read AGENTS.md, src/components/Header.astro, src/components/Footer.astro and src/styles/global.css first. The owner's four logo options are in docs/brand/:
- docs/brand/logo-option-ph-mark.webp  <- CHOSEN: the "PH" monogram on the left, "PORTUGAL" in a large serif, "HQA CITIZENSHIP" in small, widely spaced capitals underneath
- docs/brand/logo-option-regular.webp (not used)
- docs/brand/logo-option-spaced.webp (not used)
- docs/brand/logo-option-bold.webp (not used)
Open docs/brand/logo-option-ph-mark.webp and use it as the reference. Do not redesign it, add elements, or change the wording. The docs/brand/ files are references only and are not shipped on the site.

1. Measure the reference (1440 x 360 px): the mark's height and stroke width, the PORTUGAL cap height, the HQA CITIZENSHIP cap height and letter-spacing, and the gaps between them. Use those ratios below.
2. Build the logo as code so it stays sharp and light:
   - src/components/Logo.astro renders the lockup: the PH mark (inline SVG) on the left; to its right "PORTUGAL" in Newsreader 400, all caps, letter-spacing 0.02em; under it "HQA CITIZENSHIP" in Inter 500, all caps, letter-spacing 0.32em, about 28% of the PORTUGAL size. Both text lines share one left edge. Match the proportions in the reference image as closely as you can.
   - The PH mark: recreate it as a simple SVG (src/assets/brand/logo-mark.svg) from straight strokes only, like the reference: a "P" whose bowl sits on the left stem and an "H" sharing that stem, stroke width about 9% of the mark height, square ends, viewBox 0 0 48 48, fill/stroke currentColor. Also save a full lockup SVG as src/assets/brand/logo-full.svg with the text converted to paths if you can do that reliably; if not, keep the lockup as live text in Logo.astro and say so.
   - Color: Atlantic #1F3A68 by default (not the green in the reference). The component takes a tone prop: "atlantic" or "white".
   - Accessibility: the home link has aria-label="Portugal HQA Citizenship, home"; the SVG mark is aria-hidden="true". The visible text stays real text so it reads correctly.
3. Header: replace the current Inter Bold wordmark with Logo. The PORTUGAL line is 26px from 768px and 21px below 768px. The mark matches the height of both text lines together. Keep the logo on the container's left edge and the menu button exactly as it is. If "HQA CITIZENSHIP" ends up under 7px tall on mobile, report it.
4. Footer: Logo in white at about 80% of the header size, above the footer text, on the dark footer band.
5. Favicons from the mark: public/favicon.svg (Atlantic mark on transparent), public/favicon.ico (16 and 32 px, Atlantic mark on white), public/apple-touch-icon.png (180 x 180, white mark on #1F3A68 with about 18% padding). Also export public/brand/logo-mark-512.png (512 x 512, white mark on #1F3A68) for the owner's email profile picture. Add <link rel="apple-touch-icon" href="/apple-touch-icon.png"> to BaseLayout.astro. If the mark breaks up at 16px, thicken the strokes in the favicon version only and report it.
6. Remove the Inter 700 font import if nothing else uses it.
7. Do not add the logo to JSON-LD, Open Graph images or page copy. No ® or ™.
8. Update /styleguide (logo in Atlantic, in white on the footer band, favicon sizes) and the AGENTS.md design section: "Logo: Logo.astro (PH mark plus PORTUGAL / HQA CITIZENSHIP) in Atlantic, white on dark bands. Favicons from logo-mark.svg."
QA: npm run check and npm run build (all checks pass). Confirm the logo and the H1 share the same left edge at 1280px and 375px, nothing scrolls sideways at 375px, and the header height is unchanged or within 8px. Report the file sizes of the SVGs and PNGs. Add a CHANGELOG entry. Commit "New logo and favicons".
```

---

## Prompt 53: No white boxes inside cream bands (CSS only)

```
Context: read AGENTS.md and src/components/Section.astro first. CSS only. Do not change copy, headings, links, schema or images. dist/markdown and every ld+json block must stay identical.

The owner wants cream sections to read as one solid cream block. Right now, inside cream bands, the table header row and the "What we don't know yet" box have white backgrounds, which looks patchy. Apply this to every component sitewide, using one rule set scoped to the cream tone (for example [data-tone="cream"] or .tone-cream), not page by page.

Inside a cream band:
1. Tables: no background on any cell, header included. The header row is set apart by type and lines only: header text in Inter 500 14px Ink, a 1px Ink (#141414) bottom border under the header row, 1px #E5DFD6 lines between body rows. Remove the vertical cell borders and the outer box border on cream so the table reads as clean rows. Keep tabular figures and the mobile horizontal scroll.
2. "What we don't know yet" box (UnknownsBox): no background fill. Keep the 2px Atlantic left border and the padding, so it is still clearly marked.
3. The same rule for anything else that sets a white or paper background inside cream: KeyFacts, FAQ items, GuideList rows, SourceNote, form fields' surrounding wrappers. Form inputs themselves stay white so people can see where to type.
4. On paper (white) bands, keep the current look, but use the same row-style tables (header bottom border in Ink, row lines, no vertical borders) so tables look the same on every band. The header row on paper bands gets no fill either.
5. On the atlantic band nothing changes except that no white box appears inside it other than the input fields.
Update /styleguide to show a table and the unknowns box on paper and on cream. Add one line to the AGENTS.md design section: "No white boxes inside cream bands. Tables are row style everywhere. Only form inputs stay white."
QA: npm run build (all checks pass). Check home, /hqa-visa-cost and /portugal-hqa-vs-golden-visa: list every element inside a cream band that still has a non-transparent background (only inputs are allowed). Confirm text contrast on cream passes WCAG AA. Add a CHANGELOG entry. Commit "Solid cream bands".
```

---

## Prompt 54: Full-screen menu redesign (design only)

```
Context: read AGENTS.md and src/components/Header.astro first. Design and CSS only, plus the two new menu items. Do not change page copy, schema or SEO files. Save a short report to docs/audits/24-menu.md.

The owner wants the open menu to feel like a confident full-screen panel: big links stacked on the left and a big call to action, on our cream instead of a bright color.

1. Panel: full screen, background cream #F7F1E8, content inside .container (same left edge as the logo and the H1). The logo stays visible top-left in Atlantic; the close button (X icon plus "Close") stays top-right in the same spot as the menu button.
2. Links, stacked and left-aligned, in this order: Home, Investment, Costs, Requirements, Citizenship, Guides, Reports, Press, About, Contact. Newsreader 400, 56px from 1024px, 44px from 768px, 34px below 768px, line-height 1.1, Ink color, no bullets, 4px between links. Hover and focus: Atlantic color plus a 2px underline offset 6px. The current page: Atlantic with the underline.
   Reports and Press point to /reports and /press, which Prompt 55 creates. If those routes do not exist yet when you run this, hide those two items until they do.
3. Calls to action under the links, 40px below the last link, side by side from 768px and stacked below:
   - Primary: "Request a consultation" as a solid Atlantic button, white text, Inter 500 18px, height 60px, padding 0 32px, 4px radius.
   - Secondary: "Read our reports" with an arrow icon (↗ style, drawn as an inline SVG), outlined: 1px Atlantic border, Atlantic text, same size as the primary. Links to /reports.
4. Below the buttons, small Inter 14px graphite: the contact email as a mailto link.
5. Behaviour stays as it is now: links live in the <details> in the HTML, Escape closes, focus moves to the first link, Tab stays in the panel, body scroll locked, 150ms fade only.
6. Contrast: check Ink, Atlantic and graphite on cream pass WCAG AA. Tap targets at least 48px tall on mobile.
Update /styleguide with a screenshot-style example of the open menu (a static copy of the panel). QA: npm run build (all checks pass); confirm nothing scrolls sideways at 375px with the menu open, and the longest link ("Requirements") fits on one line at 375px. Add a CHANGELOG entry. Commit "Full-screen menu".
```

---

## Prompt 55: Reports and Press sections (structure only)

```
Context: read AGENTS.md, docs/research-brief.md, src/data/pages.ts, src/data/reviews.ts, astro.config.mjs and scripts/machine-layer.ts first. Build the structure for two new sections. Do NOT write report or press release content: Claude writes it into docs/content/ later. Save a report to docs/audits/25-reports-press.md.

1. Routes (follow the existing URL rules: lowercase, hyphenated, no dates in slugs, no trailing slash):
   - /reports: the Reports hub. Lists every report: title, one-line summary, publication date, Last verified date, and a link. Uses PageIntro and Section bands like the other pages.
   - /reports/[slug]: one page per report, from a content collection src/content/reports/ (Markdown with front matter: title, metaTitle, description, slug, datePublished, dateModified, lastVerified, pdf (optional path in /public/downloads/), summary, keyFindings (list)). Page layout: PageHero or PageIntro, key findings in a cream band, the body, a "Download the PDF" button if pdf is set, sources, FAQ if present, checklist band.
   - /press: the Press room. Lists every release newest first: headline, date, one-line summary. Also a short "For journalists" block with the contact email and a note that releases may be republished with a link to the original.
   - /press/[slug]: one page per release, from src/content/press/ (front matter: headline, metaTitle, description, slug, datePublished, dateModified, dateline (city), summary, syndicatedTo (list of {outlet, url, date}, optional)). Page layout: dateline and date at the top, body, "About Portugal HQA Citizenship" boilerplate from siteConfig, media contact email, and an "Also published on" list built from syndicatedTo.
2. Schema: /reports/[slug] uses Article (headline, datePublished, dateModified from front matter, isPartOf the WebSite id). /press/[slug] uses NewsArticle with the same date fields. Hubs use CollectionPage with an ItemList. Never invent dates: they come from front matter only. No Organization schema, no author names.
3. Indexing rule: a hub with no published items is noindex and out of the sitemap, llms.txt, content-index.json and the Markdown set, the same way privacy and terms work. It becomes indexable automatically when the first item is published. Each item page must have a review date in reviews.ts before production, like every other page.
4. Canonicals: every report and release has a self-referencing canonical on https://portugalhqacitizenship.com. Add a docs/press-syndication.md checklist (see below) and do not add any cross-domain canonical on our own pages.
5. Add /reports and /press to the footer and to the menu (Prompt 54), to the llms.txt section map under a new "Reports and press" section, and to the internal-link rules in AGENTS.md (each report links to the topic pages it draws on; each topic page may link to a report only where the report adds data).
6. docs/press-syndication.md (write this file):
   - Publish every release on /press/[slug] first. Wait until the page is live and indexed (check in Search Console) before sending it anywhere else.
   - When another site republishes it, ask them first to add a noindex tag to their copy (Google's recommendation for syndicated content since 2023), and always a visible link back to our original. If they will not use noindex, ask for rel="canonical" pointing to our URL as a fallback; Google treats a cross-domain canonical only as a hint.
   - Wire services usually add nofollow links and do not set canonicals. Use them for reach, not rankings.
   - Record every republication in the release's syndicatedTo list so the "Also published on" list stays accurate.
   - Never copy a release onto our own site twice, never backdate, and never change a datePublished after publication.
7. QA: npm run build (all checks pass, including test:facts and check:headings). Confirm /reports and /press are noindex and absent from the sitemap while empty. Add a CHANGELOG entry. Commit "Reports and press structure".
```

---

