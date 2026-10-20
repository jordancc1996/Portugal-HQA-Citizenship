# Finished Cursor prompts (archive)

Do not paste these again.

---

## Prompt 1: Project setup

```
Read AGENTS.md and docs/design-brief.md first.

Set up an Astro project in this folder. The folder already contains AGENTS.md, .cursor/rules/ and docs/. Keep them exactly as they are.

1. Create a new Astro project (latest stable Astro, TypeScript strict, no UI framework) in the current folder. If the scaffolder refuses because the folder is not empty, scaffold into a temporary subfolder and move the files up, keeping AGENTS.md, .cursor/ and docs/ untouched.
2. Install and configure:
   - Tailwind CSS (official Astro integration)
   - @astrojs/sitemap with site: "https://portugalhqacitizenship.com"
   - @fontsource/newsreader (weights 400, 500, and italic 400) and @fontsource/inter (weights 400, 500)
3. astro.config: output "static", trailingSlash "never". Keep the default directory build format so URLs have no .html.
4. Create src/data/facts.ts that imports docs/facts.json and exports it with TypeScript types (value, status, source). Export lastVerified as well. Do not copy or change any fact text.
5. Create src/data/reviews.ts exporting an object of page slug to legal review date. Leave every date as null for now and add a comment: "Fill only with real review dates."
6. Create src/data/image-credits.ts (empty array with a type: file, photographer, unsplashUrl).
7. Create .env.example with PUBLIC_FORMCARRY_CHECKLIST_URL= and PUBLIC_FORMCARRY_CONSULT_URL=
8. Create public/robots.txt allowing all and pointing to https://portugalhqacitizenship.com/sitemap-index.xml
9. Create CHANGELOG.md with the first entry for today: "Change: Project setup. Why: Start the build."
10. Run npm run build and fix any errors.

Do not create pages or components yet. Do not commit.
Report: files created, packages installed, build result.
```

---

## Prompt 2: Design system and images

```
Read AGENTS.md and docs/design-brief.md sections 2 to 5.

1. Tailwind theme (tailwind config or @theme in CSS, whichever this Tailwind version uses):
   - Colors: paper #FFFFFF, cream #F7F1E8, ink #141414, graphite #4A4A4A, stone #6B6B6B, rule #E5DFD6, atlantic #1F3A68
   - Fonts: serif = "Newsreader", Georgia, serif; sans = "Inter", system-ui, sans-serif
2. src/styles/global.css:
   - Import the @fontsource files. Body: Newsreader 19px, line-height 1.6, color ink, background paper. Mobile 18px.
   - Type scale from docs/design-brief.md section 3: H1 56px/36px, H2 36px/28px, H3 24px/21px, lead 23px/20px, UI text Inter 14 to 15px, small print Inter 13px graphite.
   - Links: atlantic, underline with 1px thickness and 3px offset. Focus ring: 2px atlantic outline, 3px offset.
   - Tables: hairline rule borders, no fills except a cream header row, tabular numbers.
   - No shadows, no gradients anywhere.
3. Images. Download these Unsplash photos at width 2400 (use the URL format https://images.unsplash.com/<photo-id>?w=2400&q=90&fm=jpg), convert to WebP at quality 84 with sharp, and save to src/assets/images/ with these exact names:
   - photo-1501927023255-9063be98970c → lisbon-alfama-rooftops.webp (Liam McKay, https://unsplash.com/photos/VHWyqXsWHg0)
   - photo-1697992251532-3e3b197b4722 → university-of-coimbra-paco-das-escolas.webp (Miriam Pereira, https://unsplash.com/photos/uQFnfKPbbd4)
   - photo-1784729891980-db69ff444801 → assembleia-da-republica-lisbon.webp (Eduard Pretsi, https://unsplash.com/photos/WIugzkRSTkc)
   - photo-1601027193051-d980f5ca2659 → lisbon-praca-do-comercio-arch.webp (Bruno Martins, https://unsplash.com/photos/fkLWwOAf7Dw)
   - photo-1763151426451-52ea62241f32 → cascais-town-square.webp (Jeffrey Eisen, https://unsplash.com/photos/luBpAwn5huo)
   - photo-1541320779116-ec4a3d4692bc → blue-white-tile-pattern.webp (Annie Spratt, https://unsplash.com/photos/BAj9EOZiDaE)
   Never upscale. Keep the aspect ratio. Add each one to src/data/image-credits.ts with photographer and Unsplash URL. Delete any temporary JPGs.
4. Use Astro's <Image> or <Picture> for responsive sizes, with loading="eager" and no lazy loading anywhere. Explicit width and height to prevent layout shift.
5. Add an "Image standard" section to CHANGELOG.md entry and confirm AGENTS.md image rules are followed.
6. npm run build and fix errors.

Report: tokens added, image files with sizes in KB, build result. Do not commit.
```

---

## Prompt 3: Layout and components

```
Read AGENTS.md and docs/design-brief.md sections 2, 6 and 8.

Build these in src/components/ and src/layouts/. Plain Astro components, minimal JavaScript.

1. BaseLayout.astro: props title, metaTitle, description, canonicalPath, ogImage, schema (array), noindex (default false). Outputs <html lang="en">, meta title, description, self-referencing canonical on https://portugalhqacitizenship.com, Open Graph and Twitter tags with absolute URLs, JSON-LD from props plus a WebSite object. Includes Header and Footer.
2. Header.astro: wordmark "Portugal HQA Citizenship" in Newsreader 20px, ink. Text menu on the right in Inter 15px sentence case: Investment (/portugal-hqa-visa-investment), Costs (/hqa-visa-cost), Requirements (/hqa-visa-requirements), Citizenship (/guides/hqa-visa-citizenship-10-year-rule), Guides (/guides), About (/about). A quiet text link "Request a consultation" (/consultation) in atlantic. White background, hairline bottom rule. Mobile: a simple menu button that opens a full-screen white panel with the same links. Works with keyboard. Use a <details> element or minimal JS.
3. Footer.astro: three short blocks in Inter 14px graphite:
   - Independence: "Portugal HQA Citizenship is an independent information site. We take no referral fees or commissions from any provider, incubator, university or law firm."
   - Disclaimer: "This site gives general information, not legal, tax or investment advice. Rules change. Speak to a qualified Portuguese lawyer before you commit money."
   - Links: Methodology, Status updates, Image credits, Privacy, Terms, Contact.
   No company name. Copyright line: "© 2026 Portugal HQA Citizenship".
4. LastVerified.astro: one line in Inter 13px graphite: "Last verified: [date] · Legally reviewed by an independent Portuguese lawyer on [date]". The review part renders only when a real date exists in src/data/reviews.ts for that page. Never render a placeholder.
5. KeyFacts.astro: heading "Key facts" (H2 in sentence case, small size: Inter 15px/500), then 3 to 5 numbered items in a 2-column grid on desktop, 1 column on mobile. Each item: bold lead-in plus 1 to 2 sentences. Hairline rule above and below, no box, no background.
6. SourceNote.astro: small inline citation link in graphite, e.g. "Source: Lei Orgânica 1/2026".
7. UnknownsBox.astro: titled "What we don't know yet". Left hairline rule in atlantic, cream background allowed here only, body text normal.
8. Table.astro wrapper: horizontal scroll on mobile with a visible hint, hairline borders, cream header row.
9. FAQ.astro: uses <details>/<summary> so it works without JS. Generates FAQPage JSON-LD from the same items that render on the page.
10. LeadMagnetBand.astro: full-width cream band, heading, one paragraph, the ChecklistForm (built in Prompt 4; render a placeholder slot for now).
11. GuideList.astro: list of guides, each with title (link), one-line summary, and "Last verified" date. Hairline separators, no cards, no thumbnails.
12. Breadcrumbs.astro with BreadcrumbList JSON-LD.
13. Button.astro: solid atlantic, white Inter 15px/500 text, 4px radius, 48px tall, no shadow. Plus a TextLink variant.

Create src/pages/styleguide.astro that renders every component with sample content, set noindex true, and exclude it from the sitemap.
npm run build and fix errors. Report what was built. Do not commit.
```

---

## Prompt 4: Forms

```
Read AGENTS.md "Forms" section and docs/design-brief.md section 7.

Build two forms as Astro components with a small vanilla TypeScript script each. No new dependencies.

1. ChecklistForm.astro
   - Fields in this order: Name (required), Email (required, type email), then an UNCHECKED checkbox: "I have read the Privacy Policy and agree that Portugal HQA Citizenship may use my details to send me the checklist." with "Privacy Policy" linking to /privacy. Required.
   - Then an optional UNCHECKED checkbox: "Email me when the rules change. I can unsubscribe at any time."
   - Button: "Send me the checklist".
   - POST JSON to import.meta.env.PUBLIC_FORMCARRY_CHECKLIST_URL with headers Content-Type and Accept: application/json. Include fields name, email, privacyConsent (true), marketingConsent (true/false), source: "Checklist - [page path]".
   - Show success ONLY if the Formcarry response has code 200. Success text: "Thank you. The checklist is ready to download." plus a link to /downloads/hqa-due-diligence-checklist-2026.pdf (the PDF will be added later; the link is fine for now).
   - On failure: keep the entered data, show "Something went wrong and your details were not sent. Please try again." No success state.
   - Disable the button while sending. Prevent double submits. Errors announced with aria-live.
2. ConsultationForm.astro (used on /consultation only)
   - Fields: First name, Last name, Email, Phone (optional), LinkedIn Profile URL (required), Country of citizenship (required, text), When do you plan to move? (select: Within 6 months, 6 to 12 months, 1 to 2 years, Just researching), Message (optional, textarea).
   - LinkedIn validation: accept linkedin.com/in/... with or without https and www, including country subdomains. Normalize to https://www.linkedin.com/in/... Reject company pages, other domains and empty paths. Messages: "Please enter your LinkedIn profile URL." and "Please enter a valid LinkedIn profile URL." Placeholder https://www.linkedin.com/in/username
   - Consent: the same required privacy checkbox (wording: "...to respond to my enquiry."), optional marketing checkbox.
   - Button: "Request a consultation". Same Formcarry rules using PUBLIC_FORMCARRY_CONSULT_URL. Include linkedinProfileUrl in the payload. Never send it to analytics or put it in a URL.
3. Styling: inputs 48px tall, 1px rule border, 4px radius, Inter 16px, labels above fields in Inter 14px/500, visible atlantic focus ring, errors in text (not color alone).
4. Render both forms in /styleguide.

npm run build. Report the payloads each form sends and the test cases you checked (blank fields, bad LinkedIn URL, company page URL, protocol-less URL normalized, unchecked privacy box blocked). Do not commit.
```

---

## Prompt 5: Home page

```
Read AGENTS.md and docs/content/home.md.

Build src/pages/index.astro using docs/content/home.md word for word. Do not rewrite, shorten or "improve" any copy.

Layout (docs/design-brief.md section 2):
1. Hero: split layout. Left: H1, the first paragraph as the lead (23px), Button "Get the due diligence checklist" scrolling to the lead magnet band, TextLink "Read the investment guide". Right: lisbon-alfama-rooftops.webp, full height of the hero, object-fit cover, alt "Rooftops of Alfama in Lisbon with São Vicente de Fora church on the skyline". Under the hero: LastVerified.
2. KeyFacts with the 4 facts, values pulled from src/data/facts.ts where they exist. Sources line under it.
3. Sections in this order, each in the 680px reading column with generous vertical space: What the HQA visa actually is; What the €175,000 packages are; The honest timeline (Table + UnknownsBox for "What we don't know yet"); Who this route suits, and who it does not (two simple lists side by side on desktop); HQA packages and the Golden Visa (Table).
4. LeadMagnetBand with the heading "Before you sign with any provider", its paragraph and ChecklistForm.
5. Guides: GuideList. Only include guides whose pages exist. If none exist yet, hide the section.
6. How we work: the four short items, with a link to /methodology.
7. FAQ with the five questions (FAQPage schema from the visible items).
8. Disclaimer line near the top (under LastVerified) in small graphite text, and in the footer.

SEO:
- metaTitle and metaDescription from the frontmatter of docs/content/home.md exactly.
- Canonical https://portugalhqacitizenship.com/
- Schema: WebSite, WebPage, FAQPage. No Organization.
- Run the 5-location keyword check for "portugal hqa visa" and show the ✓/✗ table.

Links to pages that do not exist yet: keep them, but list them in your report so we build them next.
Check desktop (1440), tablet (768) and mobile (390). No horizontal scroll except inside tables.
npm run build. Report: keyword table, missing link targets, build result. Do not commit.
```

---

---

## Prompt 5.1: Fixes from Claude's review (paste before Prompt 6)

```
Read AGENTS.md. Apply these fixes. Do not change any approved copy except where stated.

1. Lists: in src/styles/global.css inside @layer base add
     main ul { list-style: disc; padding-left: 1.25rem; }
     main ol { list-style: decimal; padding-left: 1.25rem; }
   KeyFacts, GuideList and Breadcrumbs must still show no markers.

2. Tables: in src/components/Table.astro wrap the min-width: 40rem rule in @media (max-width: 47.99rem). From 48rem up tables are 100% wide with no sideways scroll.

3. CSS size (currently 278KB):
   a. Run and report: ls -la dist/_astro/*.css ; grep -c "@font-face" dist/_astro/*.css ; grep -o "data:font/[a-z0-9]*" dist/_astro/*.css | sort | uniq -c ; ls -la (repo root).
   b. global.css line 1: @import "tailwindcss" source("../");
   c. Replace the font imports with latin subsets only:
        @import "@fontsource/newsreader/latin-400.css";
        @import "@fontsource/newsreader/latin-500.css";
        @import "@fontsource/newsreader/latin-400-italic.css";
        @import "@fontsource/inter/latin-400.css";
        @import "@fontsource/inter/latin-500.css";
   d. If data:font URIs were found, add vite: { build: { assetsInlineLimit: 0 } } to astro.config.mjs.
   e. Delete leftover scaffold or temp folders found in step a.
   Target: CSS under 30KB, 5 @font-face rules.

4. Images:
   a. src/components/Photo.astro: add props maxWidth (default 960) and priority (default false). w = Math.min(maxWidth, src.width), h scaled to match. Pass width={w} height={h} quality={82} loading="eager" fetchpriority={priority ? "high" : "auto"}. Never pass a width above src.width. Largest srcset width 1920.
   b. Home hero: <Photo priority maxWidth={960} ... />.
   c. OG image: in index.astro use getImage from "astro:assets" to make a 1200x630 JPG (fit cover, quality 82) from the hero and pass it as ogImage. BaseLayout: add og:image:width, og:image:height, og:image:alt (new ogImageAlt prop), og:site_name "Portugal HQA Citizenship", og:locale "en_US".
   d. Re-encode the six files in src/assets/images at WebP quality 82, sharp effort 6, max 2400px wide, never upscaled. Cap blue-white-tile-pattern.webp at 1600px wide. Report new sizes in KB.

5. Guide list in src/pages/index.astro: use these exact titles from docs/content/home.md and remove summaries:
     "What is the HQA visa? The legal basis in plain English" -> /guides/what-is-hqa-visa
     "HQA visa cost: the full breakdown" -> /hqa-visa-cost
     "HQA visa requirements and who qualifies" -> /hqa-visa-requirements
     "HQA visa citizenship under the 10-year rule" -> /guides/hqa-visa-citizenship-10-year-rule
     "HQA visa presence rules: how long you must stay" -> /guides/hqa-visa-presence-requirements
     "HQA visa and IFICI tax: who actually qualifies" -> /guides/hqa-visa-ifici-tax
     "Portugal HQA vs Golden Visa" -> /portugal-hqa-vs-golden-visa
   GuideList.astro: summary optional, render <p> only when non-empty. Each entry's date must come from that guide page's own lastVerified, never the site-wide date. Only list pages that exist.

6. src/data/facts.ts: replace with
     import factsFile from "../../docs/facts.json";
     export type FactStatus = "CONFIRMED" | "REPORTED" | "CURRENT" | "UNVERIFIED";
     export interface Fact { value: string; status: FactStatus; source: string; }
     export type FactKey = keyof typeof factsFile.facts;
     export const facts = factsFile.facts as Record<FactKey, Fact>;
     export const lastVerified: string = factsFile.lastVerified;
   Add "check": "astro check" to package.json scripts (install @astrojs/check and typescript as devDependencies). Run it and fix all errors.

7. UnknownsBox.astro: add prop level (2 or 3, default 3), render <h3> by default. In index.astro change "the new nationality law" to "The new nationality law" (capital T only).

8. Header.astro: render a <nav aria-label="Primary"> with the links outside <details>, visible from 64rem up and hidden below. Keep the <details> mobile menu, hidden from 64rem up. Remove the ::details-content and !important rules. Close the mobile menu on Escape (a few lines of JS).

9. Forms:
   a. ChecklistForm.astro and ConsultationForm.astro: add an idPrefix prop (defaults "checklist" and "consult") and build every id, for and aria-describedby from it.
   b. ConsultationForm labels: "Phone (optional)" and "Message (optional)".
   c. src/scripts/formcarry.ts: return true only if response.ok && Number(data?.code) === 200. Add an AbortController with a 15 second timeout that returns false.
   d. Add a <noscript> line in both forms: "Please enable JavaScript to send this form."
   e. linkedin-url.ts: also accept m.linkedin.com, and trim extra path after /in/username (for example /in/name/details/ becomes /in/name).

10. Button.astro focus ring: var(--color-atlantic) instead of ink.
11. LeadMagnetBand.astro: add margin-inline: auto to .inner.
12. BaseLayout: viewport content="width=device-width, initial-scale=1". JSON-LD: WebSite url "https://portugalhqacitizenship.com/" with @id; WebPage gets @id, isPartOf (WebSite @id), inLanguage "en" and dateModified = lastVerified.
13. Rename the CSS class "block" to "section-block" everywhere.
14. Hosting is Vercel: create vercel.json with { "trailingSlash": false, "cleanUrls": true }.
15. Replace public/favicon.svg and favicon.ico if they are the default Astro logo: a simple serif "P" in Atlantic #1F3A68 on white.

Run npm run check and npm run build. Report: CSS size and @font-face count, image sizes, hero fallback width and KB, OG JPG size, confirmation of no loading="lazy", check and build results, files changed. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 6: Investment pillar page

```
Read AGENTS.md and docs/content/portugal-hqa-visa-investment.md.

Build src/pages/portugal-hqa-visa-investment.astro using the copy in docs/content/portugal-hqa-visa-investment.md word for word. Do not rewrite, shorten or add copy. Lines in [square brackets] are layout notes, not text to show.

Layout (same system as the home page):
1. Breadcrumbs: Home > HQA visa investment (with BreadcrumbList JSON-LD).
2. Hero: split layout like the home page. Left: H1, the first paragraph as the lead. Right: university-of-coimbra-paco-das-escolas.webp with <Photo priority maxWidth={960}>, alt from the frontmatter heroAlt.
3. LastVerified and the one-line disclaimer under the hero. The legal review part renders only when src/data/reviews.ts has a real date for this page. Never render "[review date]".
4. KeyFacts with the 4 facts and the sources line.
5. Sections in order, in the 680px reading column: What the €175,000 pays for (Table); How the package connects to your residence permit (numbered list, then UnknownsBox for the "What we don't know yet" paragraph); The risks, stated plainly (each bold lead-in as a short paragraph); Timeline from investment to citizenship (Table, then the note); Tax: IFICI is possible, not automatic; HQA package or Golden Visa fund? (Table); Red flags in HQA marketing (list plus closing line); Questions to ask before you sign (numbered list).
6. LeadMagnetBand with heading "Get the full checklist", its paragraph and ChecklistForm (idPrefix "pillar-checklist").
7. FAQ with the six questions (FAQPage JSON-LD from the visible items).
8. Text links exactly as written. Keep links to pages that do not exist yet and list them in your report.

SEO:
- title, metaTitle, metaDescription from the frontmatter exactly. Canonical https://portugalhqacitizenship.com/portugal-hqa-visa-investment
- Schema: WebPage (with isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author, publisher omitted), BreadcrumbList, FAQPage. No Organization.
- og:image: a 1200x630 JPG made from the Coimbra photo with getImage, plus og:image:alt.
- Add /portugal-hqa-visa-investment to the "reviews" keys in src/data/reviews.ts if it is missing (value null).
- Run the 5-location keyword check for "portugal hqa visa investment" and show the table.

Run npm run check and npm run build. Check 1440, 768 and 390 widths: no sideways scroll except inside tables on mobile. Report: keyword table, missing link targets, hero image size in KB, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Batch: Prompts 7 to 10

Paste these one after another. Wait for each build to pass before pasting the next. Then tell Claude "batch done".

---

## Prompt 7: Cost page

```
Read AGENTS.md and docs/content/hqa-visa-cost.md.

0. Small fix on /portugal-hqa-visa-investment: in the "What we don't know yet" box, the first word must be "Providers" with a capital P (docs/content was updated). Rule for every page: when a bold lead-in like "What we don't know yet:" becomes the UnknownsBox heading, the text after it starts with a capital letter.
1. First, create src/data/pages.ts: a list of built pages with url, title (the exact guide title from docs/content/home.md where one exists) and lastVerified (from each page's content file frontmatter). Add the home page, /portugal-hqa-visa-investment and this page. The home page GuideList must read from this list and show only pages that exist, each with its own lastVerified date.
2. Build src/pages/hqa-visa-cost.astro from docs/content/hqa-visa-cost.md. Breadcrumb: Home > HQA visa cost. heroImage is none: use a text-only hero (H1 and lead paragraph in the reading column, no photo).
3. In the cost table, keep the "How sure we are" column exactly as written. Bold the subtotal row in the family-of-four table.

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 8: Requirements page

```
Read AGENTS.md and docs/content/hqa-visa-requirements.md.

Build src/pages/hqa-visa-requirements.astro. Breadcrumb: Home > HQA visa requirements. Hero: split layout with blue-white-tile-pattern.webp (Photo, priority, maxWidth 960), alt from heroAlt. The "What we don't know yet" section is three bold-led paragraphs: render the whole section inside UnknownsBox with level 2 so the heading stays an H2.

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 9: Citizenship guide

```
Read AGENTS.md and docs/content/hqa-visa-citizenship-10-year-rule.md.

Build src/pages/guides/hqa-visa-citizenship-10-year-rule.astro. Breadcrumb: Home > Guides (/guides) > HQA visa citizenship. Hero: split layout with assembleia-da-republica-lisbon.webp (Photo, priority, maxWidth 960), alt from heroAlt. The "What we don't know yet" section goes in UnknownsBox with level 2. The "How the law got here" list is a simple dated list, no timeline graphic.

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 10: Portugal HQA vs Golden Visa

```
Read AGENTS.md and docs/content/portugal-hqa-vs-golden-visa.md.

Build src/pages/portugal-hqa-vs-golden-visa.astro. Breadcrumb: Home > HQA vs Golden Visa. Hero: split layout with lisbon-praca-do-comercio-arch.webp (Photo, priority, maxWidth 960), alt from heroAlt. The "Side by side" table is wide: on desktop it must fit the reading column without sideways scroll (allow the table to use up to 840px if needed, centered); on mobile it scrolls with the hint. The two "can fit if you" lists sit side by side on desktop, stacked on mobile.

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Batch: Prompts 11 to 14

Paste these one after another. Wait for each build to pass before pasting the next. Then tell Claude "batch done".

---

## Prompt 11: What is the HQA visa (guide) + image fix

```
Read AGENTS.md and docs/content/what-is-hqa-visa.md.

0. Image fix: the requirements hero (blue-white-tile-pattern.webp) is 357KB at 960px because it is a detailed texture. On /hqa-visa-requirements pass quality={70} and maxWidth={720} to Photo for this image only (add a quality prop to Photo.astro, default 82). Target under 150KB. Report the new size.
1. Build src/pages/guides/what-is-hqa-visa.astro from docs/content/what-is-hqa-visa.md. Breadcrumb: Home > Guides (/guides) > What is the HQA visa?. heroImage is none: text-only hero.
2. Add it to src/data/pages.ts with the home.md guide title "What is the HQA visa? The legal basis in plain English".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 12: Presence rules guide

```
Read AGENTS.md and docs/content/hqa-visa-presence-requirements.md.

Build src/pages/guides/hqa-visa-presence-requirements.astro. Breadcrumb: Home > Guides (/guides) > HQA visa minimum stay. heroImage is none: text-only hero. The "What we don't know yet" paragraph inside "What 'no minimum stay' claims mean" goes in UnknownsBox (level 3). Add it to src/data/pages.ts with the home.md guide title "HQA visa presence rules: how long you must stay".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 13: Family page

```
Read AGENTS.md and docs/content/hqa-visa-family.md.

Build src/pages/hqa-visa-family.astro. Breadcrumb: Home > HQA visa family. Hero: split layout with cascais-town-square.webp (Photo, priority, maxWidth 960), alt from heroAlt. The "What we don't know yet" section (three bold-led list items) goes in UnknownsBox with level 2. Add it to src/data/pages.ts with title "HQA visa family: spouse, children and parents" (it is not in the home guide list, so add it after the guides).

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 14: Due diligence page

```
Read AGENTS.md and docs/content/hqa-visa-due-diligence.md.

Build src/pages/hqa-visa-due-diligence.astro. Breadcrumb: Home > HQA visa due diligence. heroImage is none: text-only hero. The 15 questions are one numbered list (1 to 15) with the five bold group labels as small subheadings (H3, sentence case) between them; numbering continues across groups. Red flags is a plain list. Add it to src/data/pages.ts with title "Is the HQA visa legit? A due diligence guide".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Batch: Prompts 15 to 18

Paste these one after another. Wait for each build to pass before pasting the next. Then tell Claude "batch done".

---

## Prompt 15: HQA visa for Americans

```
Read AGENTS.md and docs/content/hqa-visa-for-americans.md.

Build src/pages/hqa-visa-for-americans.astro from docs/content/hqa-visa-for-americans.md. Breadcrumb: Home > HQA visa for Americans. heroImage is none: text-only hero. The "What we don't know yet" paragraph goes in UnknownsBox (level 3). Add it to src/data/pages.ts with title "Portugal HQA visa for Americans".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 16: IFICI tax guide

```
Read AGENTS.md and docs/content/hqa-visa-ifici-tax.md.

Build src/pages/guides/hqa-visa-ifici-tax.astro from docs/content/hqa-visa-ifici-tax.md. Breadcrumb: Home > Guides (/guides) > HQA visa and IFICI tax. heroImage is none: text-only hero. The "What we don't know yet" paragraph goes in UnknownsBox (level 3). Add it to src/data/pages.ts with title "HQA visa and IFICI tax: who actually qualifies".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---



---

## Prompt 18: HQA vs StartUP Visa and Tech Visa

```
Read AGENTS.md and docs/content/hqa-vs-startup-visa-tech-visa.md.

Build src/pages/hqa-vs-startup-visa-tech-visa.astro from docs/content/hqa-vs-startup-visa-tech-visa.md. Breadcrumb: Home > HQA vs Startup Visa and Tech Visa. heroImage is none: text-only hero. The three-route table may use up to 840px on desktop with no sideways scroll; it scrolls with the hint on mobile. The "Which one fits you" groups use H3 headings. The "What we don't know yet" paragraph goes in UnknownsBox (level 3). Add it to src/data/pages.ts with title "HQA vs StartUP Visa and Tech Visa".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

(Prompt 17 was not run in this batch; it moved to the next batch.)

---

## Batch: Prompts 17, 19 to 22

Paste these one after another. Wait for each build to pass before pasting the next. Then tell Claude "batch done". (Prompt 17 was skipped in the last batch, so it comes first.)

---

## Prompt 17: Permanent residency guide

```
Read AGENTS.md and docs/content/hqa-visa-permanent-residency.md.

Build src/pages/guides/hqa-visa-permanent-residency.astro from docs/content/hqa-visa-permanent-residency.md. Breadcrumb: Home > Guides (/guides) > HQA visa permanent residency. heroImage is none: text-only hero. The "What we don't know yet" paragraph goes in UnknownsBox (level 3). Add it to src/data/pages.ts with title "HQA visa permanent residency after 5 years".

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 19: Guides index and status page

```
Read AGENTS.md, docs/content/guides-index.md and docs/content/hqa-visa-status.md.

1. Build src/pages/guides/index.astro (URL /guides) from docs/content/guides-index.md. Text-only hero. Render each group heading as an H2 and each entry with GuideList, pulling href and lastVerified from src/data/pages.ts by matching the title. Only list pages that exist. The status page entry links to /hqa-visa-status.
2. Build src/pages/hqa-visa-status.astro from docs/content/hqa-visa-status.md. Breadcrumb: Home > HQA visa status. Text-only hero. Tables with Table. LeadMagnetBand with ChecklistForm (idPrefix "status-checklist"). Add it to src/data/pages.ts with title "HQA visa status and law changes".
3. Schema for /guides: WebPage, CollectionPage, BreadcrumbList. For /hqa-visa-status: WebPage, Article, BreadcrumbList.

Rules for this page (same as Prompt 6):
- Use the copy word for word. Lines in [square brackets] are layout notes, not text to show. Never render "[review date]".
- Same layout system as the investment page: Breadcrumbs, hero, LastVerified plus one-line disclaimer, KeyFacts, sections in the 680px column, tables with Table, "What we don't know yet" content in UnknownsBox, LeadMagnetBand with ChecklistForm (unique idPrefix), FAQ with FAQPage JSON-LD.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. og:image 1200x630 JPG from the hero photo (or the site default if heroImage is none), with og:image:alt.
- Schema: WebPage (isPartOf WebSite), Article (headline = H1, dateModified = lastVerified, no author), BreadcrumbList, FAQPage. No Organization.
- Add the page to src/data/reviews.ts (value null) and to src/data/pages.ts (see Prompt 7).
- Run the 5-location keyword check for the primaryKeyword and show the table.
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: keyword table, missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 20: Methodology, About and Contact

```
Read AGENTS.md, docs/content/methodology.md, docs/content/about.md and docs/content/contact.md.

Build src/pages/methodology.astro, src/pages/about.astro and src/pages/contact.astro from those files. Breadcrumbs: Home > Methodology, Home > About, Home > Contact. Show the email hello@portugalhqacitizenship.com as a mailto link, taken from a new siteConfig.contactEmail value (create src/data/site.ts with siteName and contactEmail) so it is set in one place. Use the same value in the footer Contact link target (/contact) and anywhere else the email appears.

Rules for these pages:
- Use the copy in docs/content word for word. Lines in [square brackets] or (round brackets) at the start of a line are layout notes, not text to show.
- Text-only hero (H1 plus first paragraph), Breadcrumbs, the 680px reading column. No KeyFacts or FAQ unless the copy has them.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. Schema: WebPage (isPartOf WebSite) and BreadcrumbList only.
- Never show the "status: DRAFT" frontmatter on the page.
- Add each page to src/data/pages.ts (not to the home guide list).
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 21: Consultation page and sharing consent

```
Read AGENTS.md and docs/content/consultation.md.

1. Build src/pages/consultation.astro from docs/content/consultation.md. Breadcrumb: Home > Consultation. Text-only hero. Render ConsultationForm (idPrefix "consult") where the "[Form]" note is.
2. Update ConsultationForm: we introduce people to advisors or providers, so add a separate REQUIRED, UNCHECKED checkbox after the privacy checkbox:
   "I agree that Portugal HQA Citizenship may share my enquiry details with the advisors or providers it introduces me to, so they can contact me about the introduction I requested."
   Validation message: "Please confirm that we may share your enquiry with the advisors or providers we introduce you to."
   Payload field: thirdPartySharingConsent (true). Order: privacy, sharing, optional updates.
3. Change the privacy checkbox text on ConsultationForm to: "I have read the Privacy Policy and agree that Portugal HQA Citizenship may use my details to respond to my enquiry."
4. Re-test: sharing box unchecked blocks submit and sends nothing; valid submit includes thirdPartySharingConsent; ChecklistForm is unchanged.

Rules for these pages:
- Use the copy in docs/content word for word. Lines in [square brackets] or (round brackets) at the start of a line are layout notes, not text to show.
- Text-only hero (H1 plus first paragraph), Breadcrumbs, the 680px reading column. No KeyFacts or FAQ unless the copy has them.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. Schema: WebPage (isPartOf WebSite) and BreadcrumbList only.
- Never show the "status: DRAFT" frontmatter on the page.
- Add each page to src/data/pages.ts (not to the home guide list).
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 22: Privacy, Terms and Image credits

```
Read AGENTS.md, docs/content/privacy.md, docs/content/terms.md and docs/content/image-credits.md.

1. Build src/pages/privacy.astro and src/pages/terms.astro from those files. Breadcrumbs: Home > Privacy, Home > Terms. Tables with Table. Email from siteConfig.contactEmail.
2. Build src/pages/image-credits.astro. Render the list from src/data/image-credits.ts: a short description of each photo, the photographer's name, a link to the original Unsplash photo (rel="noopener"), and the page where it is used. Add a "page" field to image-credits.ts if it is missing.
3. Footer links: Methodology, Status updates, Image credits, Privacy, Terms, Contact must all resolve now.
4. After this prompt, list every internal link on the site that still points to a page that does not exist.

Rules for these pages:
- Use the copy in docs/content word for word. Lines in [square brackets] or (round brackets) at the start of a line are layout notes, not text to show.
- Text-only hero (H1 plus first paragraph), Breadcrumbs, the 680px reading column. No KeyFacts or FAQ unless the copy has them.
- title, metaTitle, metaDescription from the frontmatter exactly. Self-referencing canonical. Schema: WebPage (isPartOf WebSite) and BreadcrumbList only.
- Never show the "status: DRAFT" frontmatter on the page.
- Add each page to src/data/pages.ts (not to the home guide list).
- Run npm run check and npm run build. Check 1440, 768 and 390. Report: missing link targets, build and check results. Add a CHANGELOG entry. Do not commit.
```

---

## Batch: Prompts 23 and 24 (then stop for Claude's review)

Paste Prompt 23, wait for the build, then paste Prompt 24. Prompt 24 is an audit only. When it finishes, tell Claude "24 done". Claude reviews the audit before any fixes.

---

## Prompt 23: Final cleanup before the audits

```
Read AGENTS.md.

1. CSS: every page currently inlines about 43KB of CSS in a <style> tag. Set build.inlineStylesheets: "never" in astro.config.mjs so the CSS is one cached file. Report the CSS file size and confirm no page has a large inline <style> block.
2. Checklist PDF: public/downloads/hqa-due-diligence-checklist-2026.pdf now exists (added by Claude). Confirm the ChecklistForm success link points to /downloads/hqa-due-diligence-checklist-2026.pdf and that the file is in dist after the build. Do not change the PDF.
3. Add public/downloads to the sitemap exclusions if the sitemap integration picks it up (it should not list PDFs).
4. Run npm run check and npm run build. List any internal link that points to a page or file that does not exist (should be none). Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 24: Business Prompt 1 – Full Architecture, Content & Factual Audit (AUDIT ONLY)

```
Context for this audit: this is portugalhqacitizenship.com, an Astro static site in this repo. Read AGENTS.md first. Program facts live in docs/facts.json (loaded by src/data/facts.ts). Approved page copy lives in docs/content/*.md. The site has 23 pages plus /styleguide (noindex). Audit the built output in dist/ as well as the source.

Save the full final report to docs/audits/01-architecture-content-factual-audit.md as well as showing it in chat.

Perform a comprehensive technical, factual, content, and machine-retrieval audit of this website.

AUDIT ONLY.

Do not modify files yet.

The goal is to establish a reliable foundation for both human searchers and AI/research agents without creating duplicate sources of truth.

# 1. INVENTORY

Identify:
- all public routes
- indexable routes
- noindex routes
- redirects
- canonical URLs
- sitemap URLs
- orphan pages
- content collections
- page templates
- schema types
- FAQ data sources
- comparison-table data
- shared data files
- repeated factual claims
- forms/calculators/checkers
- metadata sources

Report discrepancies.

# 2. CRAWLABILITY

Verify:
- robots.txt
- XML sitemap
- canonical tags
- indexability
- redirects
- internal linking
- static/server-rendered primary content
- accidental duplicate URLs
- accidental noindex
- orphan pages

Separate genuine technical problems from preferences.

# 3. PAGE OWNERSHIP

Determine which page should own each important topic/fact.

Create a table:
TOPIC / FACT | AUTHORITATIVE PAGE | OTHER PAGES REPEATING IT | DRIFT RISK

Examples may include: current program/product status, pricing/investment requirements, eligibility, launch timing, family rules, documents, processing time, tax, work rights, physical presence, passport/travel, real estate, legal status, comparisons.

Do not assume every site needs these categories. Derive them from the actual site.

# 4. FACTUAL CONSISTENCY

Find repeated claims across: body content, FAQs, comparison tables, metadata, JSON-LD, CTAs, forms, calculators, eligibility tools, shared components.

Identify contradictions.

Classify claims as appropriate to the site's subject: CONFIRMED, PUBLISHED, ENACTED, CURRENT, PROPOSED, EXPECTED, REPORTED, UNVERIFIED, UNKNOWN, OUTDATED.

Do not silently resolve factual conflicts. Report them.

# 5. SOURCE QUALITY

Identify which important factual claims have: OFFICIAL PRIMARY SOURCE, HIGH-QUALITY SECONDARY SOURCE, WEAK SECONDARY SOURCE, NO SOURCE.

Do not invent citations.

Flag facts that require external verification before implementation.

# 6. METADATA

Audit: title, meta description, H1, Open Graph, Twitter metadata, Article/WebPage descriptions.

Determine whether metadata accurately describes the visible page.

Flag stale or promotional metadata that creates factual implications not supported by the page.

# 7. STRUCTURED DATA

Audit existing: Organization, WebSite, WebPage, Article, FAQPage, BreadcrumbList, Product/Service or other schema.

Check whether structured data matches visible content.

Do not recommend schema merely because a schema type exists.

# 8. MACHINE RETRIEVAL

Determine whether the site currently provides: llms.txt, Markdown alternates, structured content index, JSON-LD, clear canonical pages, machine-readable primary content.

Evaluate what an AI agent can currently discover.

# 9. INTERACTIVE TOOLS

Audit: eligibility checkers, calculators, quizzes, intake forms, waitlists, recommendation tools.

Determine whether their scoring or results imply facts that the site's authoritative pages do not support.

# 10. DUPLICATION RISK

Identify where facts are independently maintained in multiple files.

The target architecture should follow: ONE FACT → ONE SOURCE OF TRUTH → MULTIPLE REPRESENTATIONS.

Identify candidates for shared source data only where sharing would genuinely reduce drift.

Do not recommend moving paragraph-length nuanced facts into a global registry merely for centralization.

# FINAL REPORT

Return:
## Executive findings
## Route/indexation inventory
## Technical issues
## Topic ownership map
## Factual contradictions
## Source-quality gaps
## Metadata problems
## Structured-data problems
## Interactive-tool problems
## Machine-retrieval status
## Duplication/drift risks
## Recommended implementation order
## Facts requiring external verification before implementation

STOP.

Do not modify the site.
```

---

## Prompt 25: Business Prompt 2 – Source of Truth and Content Synchronization

Paste this one on its own. When it finishes, tell Claude "25 done".

```
Context: read AGENTS.md and docs/audits/01-architecture-content-factual-audit.md first. Claude has reviewed the audit and verified the flagged facts. Apply these decisions as part of this synchronization. Save your final report to docs/audits/02-source-of-truth-sync.md as well as showing it in chat.

DECISIONS FROM CLAUDE (already verified):
A. docs/facts.json was updated by Claude. Do not edit it. Changes: legalBasis and legalMinimumInvestment now cite the consolidated Lei 23/2007 text (pgdlisboa.pt) with status CURRENT; permanentResidence cites the official article 80 requirements; new verified entries residenceWindow (12 years, 9 for EU/CPLP), spouseException (18 months cohabitation, apply after 15 months), goldenVisaFamilyExempt, residenceVisaValidity (120 days, two entries); lastVerified is 2026-10-20.
B. The "up to 33%" fee increase could not be confirmed, so it is removed. docs/content/hqa-visa-cost.md and docs/content/hqa-visa-status.md were updated by Claude. Update the matching .astro pages to the new wording exactly.
C. Dates: WebPage.dateModified (and Article/CollectionPage dateModified) must use each page's own lastVerified, passed as a BaseLayout prop. facts.lastVerified is only the fact file's date. One date per page, everywhere it appears.
D. Registries: add /guides to src/data/pages.ts. In src/data/reviews.ts remove /hqa-visa-process-timeline and add every indexable route (value null). Make the guides index read its date from pages.ts instead of hardcoding it.
E. Legal review is a LAUNCH GATE, not a copy change. Keep the approved wording about legal review. Add a script "check:reviews" (npm run check:reviews) that fails and lists every indexable route without a real review date in reviews.ts. It must NOT run in the normal build; it runs before deploy. Never fill dates yourself.
F. Privacy and terms are drafts until the lawyer reviews them: give /privacy and /terms noindex and exclude them from the sitemap while their reviews.ts date is null (automatic: once a real date exists they become indexable again). Keep them reachable from the footer and consent labels.
G. Copy changes must be made in both docs/content/*.md and the .astro page so they never diverge. Report every pair you changed.
H. Authority links: where a page summarizes a high-risk fact owned elsewhere (citizenship years, family 2-year rule, absence limits, package price, IFICI), add at most one natural link to the owning page per topic per page, using the owners in the audit's topic ownership map. Do not add links where one already exists.

Using the completed audit and verified factual research, synchronize this website around authoritative topic ownership.

Do not create the machine-readable layer yet.

# CORE PRINCIPLE

ONE FACT → ONE SOURCE OF TRUTH → MULTIPLE REPRESENTATIONS.

Each important topic should have a clear owning page.
Other pages may summarize and link to that owner.
They should not independently establish conflicting versions.

# 1. DEFINE TOPIC OWNERS

Using the audit, finalize the authoritative page for each high-risk topic.
Do not create unnecessary new pages when an existing page can own the topic.

# 2. SYNCHRONIZE CONTENT

Correct contradictions across: page bodies, FAQs, comparison tables, summaries, CTAs, metadata, structured data, forms, interactive tools.
Use verified controlling content.
Do not invent missing facts.

# 3. STATUS LANGUAGE

Where the subject contains proposed, changing, pending, or uncertain information, preserve those distinctions.
Do not turn: PROPOSED → CONFIRMED, REPORTED → ENACTED, EXPECTED → REQUIRED, PUBLISHED → OPERATING, APPLICATION PROCESS DESCRIBED → APPLICATIONS OPEN, unless the evidence supports it.

# 4. METADATA

Make titles and descriptions accurately represent the verified page.
Do not optimize metadata at the expense of factual accuracy.

# 5. STRUCTURED DATA

Synchronize JSON-LD with visible content.
Structured data can be shorter than the page. It cannot materially contradict it.

# 6. INTERACTIVE TOOLS

Ensure calculators/checkers/forms distinguish PRIVATE ASSESSMENT from OFFICIAL DETERMINATION.
Do not score users against unpublished requirements.

# 7. INTERNAL AUTHORITY LINKS

Where another page summarizes a high-risk fact, link naturally to its owning page when useful.
Avoid excessive repetitive linking.

# QA

After changes verify:
- canonical URLs unchanged unless explicitly required
- sitemap intact
- redirects intact
- no accidental noindex
- no new factual contradictions

# FINAL REPORT

Return:
PAGES CHANGED
TOPIC OWNERS
FACTUAL CORRECTIONS
METADATA CORRECTIONS
SCHEMA CORRECTIONS
INTERACTIVE-TOOL CORRECTIONS
INTERNAL AUTHORITY LINKS ADDED
KNOWN UNRESOLVED FACTS
BUILD RESULT

STOP.

Do not create llms.txt, Markdown alternates, content indexes, OKF, or a knowledge graph yet.

After the report: run npm run check and npm run build, and run npm run check:reviews once to show it lists the missing review dates (expected to fail until the lawyer's dates are added). Add a CHANGELOG entry. Do not commit.
```


---

## Prompt 26: Business Prompt 3 – Machine Readable Layer

```
Context: read AGENTS.md, docs/audits/01-architecture-content-factual-audit.md and docs/audits/02-source-of-truth-sync.md first. Save your final report to docs/audits/03-machine-readable-layer.md as well as showing it in chat.

Site-specific decisions from Claude:
- Generate everything at build time (an Astro integration or a post-build script run by npm run build) from the built canonical HTML in dist/ or from the page data. Nothing in public/ may be hand-written for llms.txt, Markdown or content-index.json.
- Only include indexable pages. /privacy and /terms are noindex while their review date is null, so they must be left out of llms.txt, content-index.json and the Markdown set until they become indexable (follow the same rule as the sitemap filter). /styleguide is never included.
- llms.txt sections: Start here (home, what is the HQA visa, investment, due diligence), Costs and eligibility, Family and living in Portugal, Citizenship and tax, Comparisons, Updates and method (status, methodology, about). One line per page: title, URL and the page's meta description. Add one line saying the site is independent, takes no referral fees, and that program facts are checked against Portuguese law with the date shown on each page.
- Markdown must keep tables, lists, the "What we don't know yet" boxes, FAQs (as Q and A text), source lines and the Last verified line. Drop header, footer, forms, lead-magnet bands and buttons.
- content-index.json: dateModified = the page's own lastVerified from src/data/pages.ts. Do not add datePublished (we have no real publication dates yet).
- Vercel serving: in vercel.json add headers so /markdown/(.*) and /llms.txt are served as text/markdown; charset=utf-8 and text/plain; charset=utf-8, and /markdown/* responses include Link: <canonical HTML URL>; rel="canonical". If the canonical link cannot be set per file through vercel.json, report it as a known limitation instead of guessing.
- Drift tests: a small test (run by npm run check or a new npm run test:facts) that checks the built HTML of each topic owner page contains the current values from docs/facts.json for: citizenship years (10 and 7), absence limits (6 and 8 months), IFICI 20% and 15 January, AIMA 90 days. Do not test full sentences.

Implement a minimal machine-readable publishing layer for this website.

The human-facing canonical HTML remains the authority.

# PRINCIPLE

Do NOT create an independently maintained AI copy of the website.

Use:
CANONICAL SOURCE → HTML → GENERATED MACHINE REPRESENTATIONS
where technically practical.

# 1. LLMS.TXT

Create a generated `/llms.txt`.

Its purpose is DISCOVERY.

It should:
- identify the site
- briefly explain its purpose
- link to the most authoritative pages
- organize pages into useful sections
- use existing verified metadata/descriptions where appropriate

Do not turn llms.txt into a second factual database.
Do not manually maintain facts there if they already belong to canonical pages.

# 2. MARKDOWN REPRESENTATIONS

Generate a Markdown representation for each canonical indexable content page.
Prefer generation from rendered canonical content rather than maintaining separate Markdown copies.

Use a predictable structure such as:
`/markdown/{canonical-path}.md`
with a suitable homepage representation.

Exclude: navigation, forms, modal UI, decorative interface elements, newsletter forms, scripts/styles, repeated site chrome.

Preserve: headings, body content, useful lists, tables, authoritative links.

# 3. HTML DISCOVERY

On canonical HTML pages, expose the Markdown alternate where appropriate using:
`<link rel="alternate" type="text/markdown">`

The HTML page remains canonical.

# 4. MARKDOWN RESPONSE

Serve Markdown with an appropriate text/markdown content type.
Where the hosting architecture permits, provide an HTTP Link relationship pointing back to the HTML canonical.
Do not add Markdown URLs to the XML sitemap unless there is a specific reason.

# 5. CONTENT INDEX

Generate `/content-index.json`.

Each record should use information already available from the canonical page.

Potential fields: title, canonical_url, markdown_url, content_type, description, published date where genuinely available, modified date where genuinely available.

Do not invent dates.
Do not create independent factual summaries.

# 6. JSON-LD

Preserve existing appropriate page-level JSON-LD.
Do not attempt to turn Schema.org into a full fact graph.

# 7. SHARED FACTS

Only centralize a repeated fact if:
- it appears frequently
- exact consistency matters
- the fact is short and atomic
- multiple pages genuinely need it

Do not centralize nuanced legal/research paragraphs merely because they repeat similar concepts.

# 8. GENERATED OUTPUT RULE

Generated files must not be hand-edited.
Corrections must flow: SOURCE → BUILD → GENERATED OUTPUT.

# 9. DRIFT TESTS

Add reasonable tests for the small number of shared critical facts.
Do not create brittle exact-text tests for every paragraph.

# QA

Verify: INDEXABLE HTML URLS, SITEMAP URLS, MARKDOWN FILES, CONTENT INDEX RECORDS, CANONICALS, NOINDEX, REDIRECTS, LLMS.TXT, MARKDOWN ALTERNATES, BUILD RESULT

# FINAL REPORT

Return:
FILES CREATED
FILES MODIFIED
GENERATION METHOD
LLMS.TXT STRUCTURE
MARKDOWN COVERAGE
CONTENT INDEX COVERAGE
SHARED FACTS CREATED
DRIFT TESTS
BUILD QA
KNOWN LIMITATIONS

Do not implement OKF or a knowledge graph.
```

---

## Prompt 27: Business Prompt 4 – Final QA

```
Context: read AGENTS.md and docs/audits/01 to 03 first. Save your final report to docs/audits/04-final-qa.md as well as showing it in chat. The legal review dates are still null by design (a launch gate checked by npm run check:reviews); do not treat that as a contradiction to fix and do not add dates.

Perform a final cross-layer factual and machine-readable QA.

Review every canonical indexable page.

Do not perform a general rewrite.

# FOR EACH PAGE COMPARE

- visible body
- title
- meta description
- H1
- FAQs
- comparison tables
- CTAs
- JSON-LD
- llms.txt entry
- content-index record
- generated Markdown
- interactive tools where applicable

# CLASSIFY PROBLEMS

Only edit issues classified as:
FACTUAL CONTRADICTION
STALE METADATA
MISLEADING SUMMARY
SCHEMA CONTRADICTION
TERMINOLOGY CONFLICT
UNSUPPORTED PROMOTIONAL CLAIM
INTERACTIVE-TOOL CONTRADICTION
BROKEN AUTHORITY LINK

If it fits none: DO NOT EDIT.

# HIGH-RISK FACTS

Derive the site's high-risk facts from the audit.
Search every representation for older versions of those facts.
Do not assume the categories from another website apply here.

# INTERACTIVE TOOLS

Pay special attention to eligibility tools, calculators and quizzes.

Ask:
Could a reasonable user mistake this result for an official determination?
Does the scoring rely on facts the authoritative page says are unconfirmed?
Does the CTA imply a government filing or approval that does not exist?

If yes, fix the tool while preserving its useful commercial function.

# MACHINE OUTPUT

Never manually patch: llms.txt, generated Markdown, content-index.json.
Fix the canonical source and regenerate.

# SEMANTIC TEST

For each major topic ask:
If an AI agent saw only the machine-readable surfaces, would it reach materially the same conclusion as a careful reader of the canonical page?
PASS / FAIL
Fix genuine failures.

# FINAL BUILD

Verify: BUILD, INDEXABLE URL COUNT, SITEMAP URL COUNT, MARKDOWN COUNT, CONTENT INDEX COUNT, CANONICAL CHANGES, REDIRECT CHANGES, ACCIDENTAL NOINDEX, BROKEN INTERNAL LINKS

# FINAL REPORT

## Executive result
## Corrections made
## High-risk fact QA
## Metadata QA
## Schema QA
## Interactive-tool QA
## Machine-readable QA
## Build QA
## Remaining genuine contradictions
If none: `NONE FOUND`
## Architecture status
MACHINE-READABLE ARCHITECTURE COMPLETE: YES / NO

STOP.
```


---

## Prompt 28: Semantic SEO integration pass

```
Context: read AGENTS.md and docs/audits/01 to 04 first. Save your final report to docs/audits/05-semantic-seo.md as well as showing it in chat.

Site-specific decisions from Claude:
- This is the first run, so the CONTENT INTEGRATION QUEUE is all 21 indexable pages. There are no new pages. Do not create pages, hubs or categories.
- Body copy is approved, word for word, and the lawyer reviews it. Do NOT add, move or change contextual links, sentences or headings in body copy in this prompt. A read-only internal linking audit runs next. Put any body-link or copy ideas in the report under "Items requiring human review".
- You MAY fix: schema, metadata gaps, breadcrumbs, the /guides hub listing, Open Graph and Twitter tags, canonicals, sitemap, alt text that is wrong or missing, and facts that conflict with docs/facts.json. Any visible text change must be made in both docs/content/*.md and the matching .astro page.
- Schema: no Organization with a company name, no Person or author (the lawyer is not named), no reviews, ratings, prices as Offers, awards or government affiliation. Reuse one WebSite @id across pages and link each WebPage to it with isPartOf. Do not invent dates.
- Social previews: report which pages use a fallback og:image and whether that is intended. Pages with heroImage none may use one sitewide default image, but it must exist, be absolute, and have correct og:image:width and og:image:height.
- Facts: docs/facts.json is the only source of truth. Flag conflicts. Do not guess.

Act as the content architecture, semantic SEO, internal-linking, structured-data and technical SEO manager. Treat each page as part of the site's entity and topic graph, not an isolated keyword page.

1. FULL SITE INVENTORY: indexable URLs, titles, H1s, meta titles and descriptions, canonicals, sitemap entries, page types, primary and secondary topics, entities, pillar and cluster pages, comparisons, FAQs, existing internal links, breadcrumbs, schema, social metadata, navigation and footer links.
2. QUEUE: for each page give URL, content type, primary topic, primary entity, secondary entities, search intent (informational, navigational, commercial, transactional), parent pillar, related pages, whether it fills a real gap, whether it overlaps another page.
3. INTENT BEFORE KEYWORDS: decide what question or need the page satisfies. Pages with the same intent should not compete.
4. ENTITIES: programs, laws (Lei 23/2007, Lei 61/2025, Lei Orgânica 1/2026, Lei 62/2026), agencies (AIMA, consulates), concepts (IFICI, D3 visa, article 90 permit, Golden Visa), amounts, dates, requirements. Check that ENTITY → ATTRIBUTE → VALUE and ENTITY → RELATIONSHIP → ENTITY links are clear in natural language. Do not add irrelevant entities.
5. TOPIC CLUSTERS: place each page under the site's actual architecture.
6. SEMANTIC GAP CHECK: report missing definitions, attributes or user questions that would materially help. Do not pad.
7. CANNIBALIZATION: flag pages with the same intent, competing titles or H1s, near-identical FAQs or duplicated passages. Report destructive options (redirect, merge, canonical) separately. Do not do them.
8. INTERNAL LINKS: report which pages should link to and from each page, with descriptive anchors. Do not insert them (see decisions above).
9. HUBS: confirm /guides lists every guide and uses the existing GuideList component.
10. BREADCRUMBS: visible breadcrumbs and BreadcrumbList must match and reflect real hierarchy.
11. SCHEMA: most specific valid type, matching visible content, consistent @id references.
12. ON-PAGE STRUCTURE: one H1, logical H2 and H3, answer first. Report only.
13. TITLE AND META: title, description, H1, og:title, og:description agree on topic and intent.
14. IMAGES: meaningful alt text, decorative images marked, sensible filenames, correct dimensions, no duplicates.
15. SOCIAL PREVIEWS: og:title, og:description, og:image, og:url and Twitter tags, absolute URLs, correct sizes.
16. CANONICALS: no trailing-slash, www, http or query duplicates.
17. SITEMAP: indexable canonical URLs and sitemap URLs must reconcile. Report missing, extra, redirected, noindex.
18. ROBOTS: nothing intended to rank is blocked by robots.txt, meta robots, X-Robots-Tag or config.
19. FACT CONSISTENCY: search every page for prices, amounts, dates, timelines, requirements and status. No conflicts with docs/facts.json.
20. RELATED CONTENT: check any related-guides blocks are semantic, not date-based.
21. DO NOT CREATE FACTS. This overrides optimization.
22. Follow the repo's existing conventions. Do not replace a working system.
23. QA: npm run check, npm run build (this runs test:facts). Do not claim a check passed unless you ran it.

FINAL REPORT
## CONTENT QUEUE (per page: URL, content type, primary entity/topic, search intent, topic cluster, parent/pillar, related pages, status: Integrated / Needs Review / Potential Overlap)
## CHANGES MADE
## SEMANTIC RELATIONSHIPS ADDED
## OVERLAP / CANNIBALIZATION
## SITEMAP STATUS
## TECHNICAL QA
## ITEMS REQUIRING HUMAN REVIEW

Add a CHANGELOG entry. Do not commit, push, deploy, delete pages, or change URLs.
```

---

## Prompt 29: Keyword 5-location audit (all pages)

```
Context: read AGENTS.md first. Save your report to docs/audits/06-keyword-placement.md as well as showing it in chat.

Run the 5-location keyword check on every indexable page. The primary keyword for each page is the primaryKeyword in its docs/content/*.md front matter. Utility pages without a ranking keyword (contact, consultation, image credits, about) are marked N/A with the reason. Do not invent a keyword for them.

PRIMARY KEYWORD must appear in ALL FIVE locations:
1. TITLE: starts with the keyword, format "[Keyword] - [Angle]", no em dashes, no site name.
2. META TITLE: the title + " | Portugal HQA Citizenship".
3. META DESCRIPTION: keyword in the first 5 to 7 words, 150 to 160 characters, at least one specific number, date or euro amount, no em dashes, ends with a full sentence.
4. URL/SLUG: reflects the keyword. Never change a slug. If a slug does not match, report it only.
5. FIRST SENTENCE of the intro: keyword in the first 10 words, specific and informative, no em dashes.

Red flags to catch:
- a description copied from another page
- a first sentence that starts with context instead of the keyword
- a title that buries the keyword at the end
- a description under 140 or over 165 characters
- em dashes in any SEO field
- a first sentence starting "This article will" or "In this guide"
- the same primary keyword used by two pages

For each page show:
Keyword: [keyword]
| Title | Meta title | Description | Slug | Intro |
| ✓/✗ | ✓/✗ | ✓/✗ | ✓/✗ | ✓/✗ |
plus the description character count.

Fix any ✗ in title, meta title, description or first sentence with the smallest possible change, in BOTH docs/content/*.md and the matching .astro page. Keep facts, tone and the writing rules in AGENTS.md. Show before and after for each fix. Do not touch slugs, H1s or other body copy. A changed first sentence is a copy change: list it under "Needs lawyer re-read" in the report.

Then run npm run check and npm run build. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 30: Internal linking audit (READ-ONLY)

```
READ-ONLY. Do not edit, create, delete, rename or move any file except the report itself: docs/audits/07-internal-linking.md. Show the report in chat as well. Do not insert, remove or change links, anchors, metadata, navigation, components or redirects. If anything else changes by accident, restore it before finishing.

Site context:
- Core topic: the Portuguese residence route for highly qualified activity (articles 61 and 90 of Lei 23/2007) and the private investment packages sold around it.
- Audience: high-net-worth investors and families deciding whether to buy a package.
- Independent site. No referral fees. The consultation page offers introductions to advisors or providers. The checklist PDF is the lead magnet. Do not recommend heavy commercial linking.
- Header, footer, breadcrumbs and lead-magnet bands are NOT contextual links. Count them separately.
- Any accepted link will later be added to approved copy and re-read by the lawyer, so propose few, strong links.

Act as a senior technical SEO, semantic SEO and editorial internal-linking specialist. Be aggressive in FINDING opportunities and conservative in RECOMMENDING them.

1. Classify evidence as Measured, Observed, Inferred or Unknown. Never invent traffic, rankings, search volume, backlinks, authority, clicks or indexing. We have no Search Console or analytics data yet: say so.
2. State the available inputs you used.
3. Define the core topic, primary entity, audience, search objective, and one sentence: "This website primarily helps [AUDIENCE] understand/accomplish [OBJECTIVE] through information about [CORE TOPIC]."
4. Build the topical hierarchy: Level 1 core, Level 2 clusters, Level 3 subtopics, Level 4 supporting details. Flag pages that do not fit.
5. Indexable working set: report links to redirects, broken pages, noindex pages (privacy and terms are noindex for now; footer links to them are fine), non-canonical or trailing-slash URLs.
6. Page inventory for every indexable page: URL, title, H1, primary topic, entity, intent, page type, parent, siblings, children, commercial next step, contextual inbound and outbound link counts, crawl depth from home.
7. Tier pages: Tier 1 core/pillar, Tier 2 important supporting, Tier 3 long-tail, Tier 4 peripheral. Check Tier 3 → Tier 2 → Tier 1 support.
8. Find orphans and pages with 0, 1 to 2, and 3 to 4 contextual inbound links. Find related pages that are not connected, redundant links, weak anchors, topical islands and cannibalization.
9. Every proposed link gets a topical distance (0 to 4) and a topical relationship score (0 to 10). HARD GATE: below 6, do not recommend it. Orphan status or commercial value does not override relevance.
10. Valid reasons only: next question, deeper explanation, prerequisite, comparison, alternative, parent, subtopic, problem → solution, requirement → detail, commercial next step where intent supports it.
11. Prefer early, natural placements. Estimate click potential (Very High, High, Moderate, Low) as an editorial estimate.
12. Anchors: descriptive and natural, no "click here" or "learn more", no keyword stuffing, no repeated exact-match anchors.
13. Change types: ADD, MOVE, CHANGE ANCHOR, REPLACE TARGET, REMOVE, FIX.
14. Score qualified opportunities 0 to 5 on topical relevance, reader value, click potential, target importance, source strength, architecture value and implementation fit, minus penalties. Use one method throughout.

FINAL REPORT
A. Executive summary
B. Website core topic
C. Topical cluster map
D. Core/pillar page report
E. Orphan and low-inbound report
F. Existing link problems
G. Prioritized opportunities table: | ID | Priority | Source | Target | Cluster | Relationship | Topical Score | Placement | Anchor | Change Type | Opportunity Score | Confidence |
H. Exact recommendations for every HIGH priority item: source, target, why, placement (heading and sentence), current excerpt (shortest needed), anchor, proposed sentence in Markdown link format
I. Topical focus problems
J. Cross-cluster review (strongly justified, reasonable, weak, unnecessary)
K. Rejected opportunities and why
L. Recommended implementation order in batches 1 to 9 (broken links, orphans, pillar links, cluster links, long-tail to parent, commercial paths, early placements, anchors, refinements)

Final check: confirm no file other than the report changed.
```

---

## Prompt 31: Keyword stuffing and editorial review (READ-ONLY)

```
READ-ONLY. Do not edit any file except the report itself: docs/audits/08-editorial-review.md. Show it in chat as well. If anything else changes by accident, restore it.

Part 1: Keyword stuffing audit (all indexable pages)
- Find unnatural repetition of exact-match phrases (for example "HQA visa", "Portugal HQA visa", "highly qualified activity") in headings, intros, FAQs, anchors, metadata and image alt text, written to influence search engines or AI answers.
- Separate needed terminology (legal names, the route's real name, article numbers) from unnatural repetition.
- Flag repetition that comes from shared components or templates.
- For each issue give the exact before and after, a minimal edit that keeps the primary keyword and intent, and a risk rating (low, medium, high).
- Keep URLs, canonicals, structure and factual meaning. Do not remove useful synonyms.

Part 2: Human editorial review plan
Priority pages: home, /portugal-hqa-visa-investment, /hqa-visa-cost, /hqa-visa-requirements, /guides/hqa-visa-citizenship-10-year-rule, /portugal-hqa-vs-golden-visa, /hqa-visa-due-diligence, /hqa-visa-family.
For each, audit:
- unclear search intent
- wordy or repetitive writing
- unsupported facts (check against docs/facts.json and the cited sources)
- outdated legal or regulatory information
- generic claims without a practical example
- missing qualifications or contradictions
- awkward transitions and unnatural keyword repetition
- missing source attribution
Keep accurate information, distinctive examples, keyword intent and important internal links.

Legal review wording: pages say "Legally reviewed by an independent Portuguese lawyer on [review date]", and some descriptions mention legal review. Every date in src/data/reviews.ts is still null, and npm run check:reviews blocks launch until real dates exist. Do not treat this as an error to fix. List each page that claims review so the owner can confirm the dates before launch. Never state that a review happened.

Label every recommendation either AUTOMATED SUGGESTION (style, clarity, structure) or NEEDS QUALIFIED HUMAN REVIEW (legal meaning, tax, facts, anything the lawyer must approve).

FINAL REPORT
## Keyword stuffing findings (table: page, location, phrase, count, before, after, risk)
## Template-driven repetition
## Editorial checklist (a reusable checklist for every future page)
## Page-by-page revision plan (priority pages, in priority order)
## Needs qualified human review
## Pages that claim legal review

Final check: confirm no file other than the report changed. Do not publish.
```


---

## Prompt 32: Apply the approved link and editorial fixes

```
Context: read AGENTS.md, docs/audits/07-internal-linking.md and docs/audits/08-editorial-review.md first. Claude has reviewed both audits and checked the flagged facts against primary sources. Apply ONLY the changes below. Every visible text change goes into BOTH docs/content/*.md and the matching .astro page, and into any JSON-LD description that copies the changed sentence. Keep the writing rules in AGENTS.md (no em dashes, H1 Title Case, H2 to H6 sentence case, no banned words). Save a report to docs/audits/09-approved-fixes.md and show it in chat.

PART A: docs/facts.json (add these entries, keep existing ones, set lastVerified to 2026-10-20)
- iasMonthly2026: "IAS (social support index) is €537.13 a month in 2026", status CONFIRMED, source https://apcmc.pt/legislacao/ias-para-2026-fixado-em-e-53713/ (Portaria 480-A/2025)
- techVisaQualification: "Tech Visa workers need an ISCED level 6 qualification, or a level 5 higher technical course plus at least 5 years of specialized experience (Portaria 328/2018, as amended)", status CURRENT, source https://arquivo.pt/wayback/20231215195537mp_/https://imigrante.sef.pt/en/solicitar/trabalhar/art90-techvisa
- naturalisationCriminalBar: "A final conviction with an effective prison sentence of more than 3 years for certain serious crimes blocks naturalisation", status CONFIRMED, source https://files.diariodarepublica.pt/1s/2026/05/09500/0000200020.pdf
- constitutionalCourtRuling: "Acórdão 1133/2025 of 15 December 2025 found 4 rules of the draft nationality law unconstitutional", status CONFIRMED, source https://www.cortecostituzionale.it/uploads/report/12-Portogallo-TC-sentenza-1133-2025-694c02fd1bb3d.pdf
- familyPermitDuration: "A family member's residence permit runs for the same length as the main applicant's permit (article 107 of Lei 23/2007)", status CURRENT, source https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis
- feie2026: "US foreign earned income exclusion is up to $132,900 for 2026", status CONFIRMED, source https://www.cpapracticeadvisor.com/2026/04/29/irs-increases-foreign-earned-income-tax-breaks/182444/

PART B: internal links (from audit 07, accept L1 to L5 exactly as proposed there)
- L1 citizenship → /guides/hqa-visa-permanent-residency, anchor "Permanent residence"
- L2 status → /guides/hqa-visa-presence-requirements, anchor "absence limits in the law" (add the short sentence proposed in the audit)
- L3 IFICI → /portugal-hqa-visa-investment, anchor "HQA investment package"
- L4 requirements → /hqa-visa-family, anchor "family rules"
- L5 what-is → /hqa-vs-startup-visa-tech-visa, anchor "HQA, the StartUP Visa and the Tech Visa" (add the sentence proposed in the audit)
No other links.

PART C: editorial fixes (from audit 08, with Claude's decisions)
Home (/):
1. "Most investors meet it through private packages priced near €175,000." → "Private providers sell packages priced near €175,000 as one way to use the route."
2. "The money funds a real business and real research work." → "In the packages we researched, the money funds a company and a research project."
3. Timeline row for the D3 visa: use the same month band as the investment page and label it a provider estimate, for example "Months 2 to 4 (provider estimate)". Do not invent a new number.
4. "You want a passport in less than 10 years" → "You want a passport in less than 10 years (7 for EU and CPLP nationals)".
5. Key-facts source line: keep the two laws and add "Package prices are reported by providers."

/portugal-hqa-visa-investment:
6. Split the lead: "A Portugal HQA visa investment is money you pay into a private package that sets up a Portuguese company and a research project. Portuguese law does not require that payment." (Keyword stays in the first 10 words.)

/hqa-visa-cost:
7. "One published breakdown splits..." → "One provider's published breakdown splits..." (keep the numbers; we do not name companies on this site).
8. "A place in a certified incubator, often for about 3 years" → "A place in a certified incubator, often for about 3 years in the packages we researched".
9. "The money funds a real company and real research. Once it is spent, it is gone, whatever happens to your application." → "In the packages we researched, the money funds a company and a research project. Once it is spent, it is gone, whatever happens to your application."
10. Lawyer and consular fee rows stay as they are (already labeled reported / not confirmed).

/hqa-visa-requirements:
11. Tech Visa sentence: name the instrument. "Under Portaria 328/2018, the Tech Visa asks for a degree at level 6 (a bachelor's degree or equivalent), or a level 5 higher technical course plus at least 5 years of specialized experience."
12. IAS €537.13 a month in 2026 stays. It is now in facts.json.

/guides/hqa-visa-citizenship-10-year-rule:
13. "Certain prison sentences of 3 years or more can block an application." → "A final conviction with an effective prison sentence of more than 3 years for certain serious crimes can block an application."
14. Acórdão 1133/2025 and the 4 rules stay. Add "of 15 December 2025" after the acórdão number if the sentence has no date.
15. Keep "Many websites still promise a passport after 5 years."

/portugal-hqa-vs-golden-visa:
16. In the lead, replace "you must live in Portugal and build a real business" with wording that matches the presence page: you must not be away for more than 6 months in a row or 8 months in total during each permit. Keep €175,000 and the Golden Visa's 7 and 14 days.
17. Delete the sentence "Some minimums can be up to 20% lower in low-density areas." We could not confirm it applies after the 2023 changes.

/hqa-visa-due-diligence:
18. "It funds a company and a research project." → "In the packages we researched, it funds a company and a research project."

/hqa-visa-family:
19. "HQA visa family rules are one of the route's real advantages." → "HQA visa family rules changed in October 2025." (Keep the following sentences.)
20. "It follows the main applicant's permit." → "It runs for the same length as the main applicant's permit."
21. Key-facts source line: keep Lei 61/2025 and add "Provider fees are reported by providers, not set by that law."

Keyword-stuffing trims (audit 08, all four accepted, with these final wordings):
22. what-is: button "HQA visa family rules" → "Family rules for article 90".
23. what-is: button "HQA visa due diligence" → "How to check a provider".
24. presence lead first sentence → "HQA visa minimum stay rules come down to two absence limits: 6 months in a row or 8 months in total."
25. consultation lead first sentence → "An HQA visa consultation here is a request for an introduction to an independent advisor or provider."

Legal review wording:
26. Mount the existing LastVerified component on /methodology and /about, in the same position as other pages, so their review date shows once reviews.ts has one. Do not add dates. Leave the review wording on home, about, methodology and /guides as it is (it becomes true at launch, and check:reviews blocks launch until then).

PART D: lawyer queue
Create docs/lawyer-review-queue.md: a table of every sentence changed in this prompt (page, before, after, reason, fact key). The owner sends this to the lawyer with the review dates request.

PART E: QA
- Rerun the 5-location check on every page whose title, description or first sentence changed (investment, family, presence, consultation). All must stay ✓.
- npm run check, npm run build (runs test:facts). npm run check:reviews should still fail only on null dates.
- Confirm no em dashes were added, no other copy changed, no slugs or canonicals changed, llms.txt and Markdown regenerated by the build.
Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 33: Heading capitalization audit and validator

```
Context: read AGENTS.md first. Save your report to docs/audits/10-headings.md and show it in chat.

Rules (already in AGENTS.md):
- H1: Title Case. Capitalize first and last words and major words. Lowercase a, an, the, and, but, or, in, on, at, to, for, of, vs unless first or last. Keep proper nouns, acronyms and official names.
- H2 to H6: sentence case. Capitalize only the first word and words that need it on their own.
- Approved exceptions for this site: HQA, AIMA, IFICI, CPLP, EU, US, D3, D7, IAS, ISCED, StartUP Visa, Tech Visa, Golden Visa, Lei, Lei Orgânica, Portaria, Acórdão, Portugal, Portuguese, Lisbon, Coimbra, Cascais, Alfama, Formcarry, Unsplash, January to December, article numbers. Ask before adding others.

1. Inventory every indexable route from src/pages and the built dist/ HTML. Report any indexable route missing from the sitemap.
2. Check every H1 to H6 in the built HTML, including headings from components (KeyFacts, UnknownsBox, FAQ, LeadMagnetBand, GuideList, Footer, forms).
3. Fix capitalization only. Do not change wording, meaning, URLs or links. Any heading text change goes into both docs/content/*.md and the .astro file.
4. Report separately (do not restructure): pages with no H1 or more than one, empty headings, skipped levels (H2 to H4), text styled as a heading without heading markup, headings duplicated by responsive components.
5. Add a validator script scripts/check-headings.ts (no new dependencies) that reads dist/**/*.html and flags H1 not in Title Case and H2 to H6 not in sentence case, using the exception list above in one exported array. Output file path, URL, level, heading and suggested fix. Add npm run check:headings and run it at the end of npm run build after test:facts. It must exit 1 on a violation.
6. QA: npm run check, npm run build. Confirm styling, schema, canonicals and links are unchanged.

Report table: | Page URL | Heading level | Original heading | Corrected heading | Status |
Plus totals: pages discovered, pages audited, headings inspected, H1 fixes, H2 to H6 fixes, remaining violations, manual exceptions, structural issues, build result.
Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 34: WebP and lazy-loading check

```
Context: read AGENTS.md first. Save your report to docs/audits/11-images.md and show it in chat.

This is an image check only. Do not change layout, copy, URLs, headings, links, components or styling.

Site facts: the 6 Unsplash photos are already .webp and go through the Photo component (largest srcset 1920, quality 82 by default, tile photo at 70 and maxWidth 720, loading="eager"). The favicons are SVG and ICO. The checklist is a PDF.

1. Find every .jpg, .jpeg, .png and .webp in the repo and where each is used (pages, components, CSS, metadata, Open Graph, JSON-LD, public/).
2. Convert any JPG, JPEG or PNG used by the site to WebP at quality 82 to 85, no upscaling, same aspect ratio, descriptive filename. Keep SVG as SVG. Exception: if the Open Graph fallback image is a JPG or PNG, keep it as is and report it (some social platforms handle JPG previews more reliably). Do not delete originals unless nothing references them; list unused originals.
3. Check that the built srcset widths are sensible for each photo's display size and that no image is much larger than needed. Report sizes per photo. Change only clear outliers.
4. Search src/ and dist/ for loading="lazy", IntersectionObserver or lazy-load libraries. There should be none. Remove any you find.
5. Confirm every image has alt text, width and height (no layout shift).
6. Confirm AGENTS.md already contains the image standard (WebP by default, quality 82 to 85, no upscaling, descriptive filenames, natural alt text, no lazy loading, SVG stays SVG). Add only missing points to the existing section. Do not create a new rules file.
7. npm run build and confirm no broken image, Open Graph or JSON-LD image references.

Final report: images audited, converted, intentionally not converted (with reason), original size, WebP size, reduction, unused originals, remaining JPG/PNG and why, lazy-loading found and remaining, broken references, instruction file updated, build PASS/FAIL, visual check PASS/ISSUES.
Add a CHANGELOG entry. Do not commit.
```


---

## Prompt 35: Layout system fix (design only, no copy changes)

```
Context: read AGENTS.md and docs/design-brief.md first. Save your report to docs/audits/12-layout.md and show it in chat.

THE PROBLEM
The pages look jumbled because there is no shared layout system:
- The header and the home hero run edge to edge with only 40px of padding, so on a wide screen the wordmark, H1 and nav touch the window edges and the photo runs off the right side.
- Below the hero, blocks sit in centered columns of different widths (680px for reading, 960px for the key facts strip, 840px on some pages). So the page has three or four different left edges.
- The "Last verified" line and disclaimer float alone in a narrow centered column, cut off from the intro they belong to.
- The hero photo stretches to the height of the text, so it becomes a thin wide strip.
- Every page copies its own .hero, .reading and .strip CSS, so pages drift apart.

Our design reference is Julia Bell Art Advisory. It works because every block sits on one central axis inside one container with fixed gutters, the hero is two equal halves with a tall photo, and spacing between sections is generous and identical.

THE FIX (layout and CSS only)

1. Shared layout tokens and classes in src/styles/global.css (one place, not per page):
   - --gutter: 20px below 768px, 40px from 768px, 48px from 1280px.
   - --space-section: 72px below 768px, 128px from 768px. --space-block: 32px below 768px, 48px from 768px.
   - .container: max-width 1200px, margin-inline auto, padding-inline var(--gutter), box-sizing border-box.
   - .measure: max-width 720px, margin-inline auto (reading text).
   - .wide: max-width 1040px, margin-inline auto (key facts, tables, comparison tables, guide lists, FAQ).
   - .section: margin-top var(--space-section).
   Every block on every page must use .container plus either .measure or .wide. All columns share the same center line. No other max-width values for layout.

2. Header and footer: put the inner bar inside .container. The wordmark lines up with the container's left edge and the nav with its right edge. The header rule stays full width. Same for the footer.

3. New component src/components/PageHero.astro, used by every page that has a hero photo (home, investment, requirements, family, Golden Visa comparison, citizenship). Props: title (H1), lead, photo, photoAlt, photo settings, actions slot, verified, path.
   - From 1024px: inside .container, two equal columns with a 64px gap. Left column: H1, lead, actions, then the LastVerified line and the disclaimer as small text 24px below the actions. Vertically center the left column against the photo. Right column: the photo with a fixed aspect-ratio of 4 / 5, object-fit cover, width 100%. The photo must not stretch to the text height.
   - Below 1024px: one column. H1, then the photo at aspect-ratio 3 / 2, then lead, actions, LastVerified and disclaimer. The solid button is full width below 768px.
   - Update the Photo sizes attribute to match: "(min-width: 1024px) 560px, 100vw". Keep loading="eager", the existing quality settings and fetchpriority on the hero.
   - Exception: the tile photo on /hqa-visa-requirements is portrait already. Use it at 4 / 5 too, it is a texture.

4. New component src/components/PageIntro.astro for pages without a photo: inside .container .measure, breadcrumbs, H1, lead, actions if any, then LastVerified and the disclaimer directly underneath. Left-aligned text.

5. Key facts: directly after the hero or intro, margin-top var(--space-block), inside .container .wide. "Key facts" label and the sources line align to the left edge of .wide. Grid: 1 column below 768px, 2 columns from 768px, 4 columns from 1200px only when there are exactly 4 facts. Keep the hairline top and bottom rules.

6. Body sections: inside .container .measure, left-aligned text, each section with class .section. Tables, comparison tables, the guide list and the FAQ break out to .wide (still centered on the same axis). On mobile, tables keep the existing horizontal scroll.

7. The cream band (LeadMagnetBand) stays full bleed for the background color only. Its content sits in .container .measure. One cream band per page at most.

8. Remove the duplicated .hero, .reading, .strip and spacing CSS from every page file and use the shared classes and components instead. Do not change any text, heading, link, button label, schema, metadata, image file or alt text. The JSON-LD and the Markdown output must be byte-for-byte the same as before for every page (compare dist/markdown and the ld+json blocks before and after).

9. Update /styleguide to show the container, measure, wide, PageHero and PageIntro.

10. Add one line to the design section of AGENTS.md: "Every block uses .container plus .measure or .wide. New pages use PageHero or PageIntro. No page-level layout CSS."

QA
- npm run check, npm run build (test:facts and check:headings must still pass).
- Compare dist/markdown/*.md and every ld+json block with the previous build: no differences.
- No loading="lazy". No new dependencies. No shadows, gradients or new colors.
- If you have a browser tool, check the home page and one text-only page at 390, 768, 1280 and 1440px wide and confirm: one left edge per column type, header aligned with content, hero photo not a thin strip, no horizontal scroll at 390px. If you do not have a browser tool, say so in the report.

Report: files created, files changed, CSS removed per page, the measured content edges at 1280px for home (header, H1, key facts, first H2, footer), and the before and after diff check.
Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 36: Two leftover copy fixes on the investment page

```
Context: read AGENTS.md first. Prompt 32 fixed these sentences on the cost and due diligence pages but not on /portugal-hqa-visa-investment. Apply the same wording there, in BOTH docs/content/portugal-hqa-visa-investment.md and src/pages/portugal-hqa-visa-investment.astro (and any JSON-LD string that copies them):

1. "One published breakdown splits..." → "One provider's published breakdown splits..." (keep the numbers).
2. Any sentence saying the money funds "a real company and real research" (or similar) → "In the packages we researched, the money funds a company and a research project."
3. The button "HQA visa family rules" → "Family rules for article 90" (same as the what-is page).

Add these three rows to docs/lawyer-review-queue.md. Run npm run build (all checks must pass). Add a CHANGELOG entry. Do not commit.
```


---

## Prompt 37: Layout refinement, one left edge

```
Context: read AGENTS.md and docs/audits/12-layout.md first. Save your report to docs/audits/13-layout-refinement.md and show it in chat. Layout and CSS only. No copy, heading, link, schema, metadata or image changes.

Claude checked the built home page at 1280px after Prompt 35. The container, header, hero and mobile layout are right. Two problems remain:

1. Section headings jump sideways. Measured on the home page at 1280px: the wordmark and H1 start at 81px, "Key facts" at 113px, "What the HQA visa actually is" at 273px, "The honest timeline" back at 113px, "Who this route suits" at 273px, and "HQA packages and the Golden Visa" at 113px. Whole sections are placed in .wide when they contain a table, so their heading and text move with them. The reader's eye has no stable edge.
2. The 4-column key facts are too narrow (230px each at 19px serif, up to 8 lines per fact).

THE FIX
A. One left edge for everything. Change .measure and .wide so they are LEFT-aligned inside .container (margin-inline: 0, not auto). .measure keeps max-width 720px. .wide becomes the full container content width (max-width none, width 100%). Result at every width: the wordmark, H1, Last verified line, Key facts, every H2, every paragraph, tables, the FAQ, the guide list, the cream band text and the footer all start at the same x position. The hero keeps its two equal columns.
B. Headings and prose never break out. In every section, the H2, paragraphs, lists, unknowns box and action links stay in .measure. Only the table, comparison table, guide list and key facts grid use .wide. Do not wrap a whole section in .wide.
C. Key facts: 1 column below 768px, 2 columns from 768px. Remove the 4-column rule. Keep the hairlines.
D. The cream band: background full bleed, content in .container with the text in .measure, left-aligned to the same edge.
E. Update the AGENTS.md design line to: "Every block sits in .container. Text, headings and lists use .measure (720px, left-aligned). Only tables, the key facts grid and guide lists use .wide (full container width). One left edge on every page."
F. Update /styleguide.

QA
- npm run check and npm run build (test:facts and check:headings must pass).
- dist/markdown and every ld+json block identical to the previous build.
- Report, for home and /hqa-visa-cost at 1280px, the left x of: wordmark, H1, Key facts label, every H2, the first table, the cream band text, the footer. They must all be the same number.
Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 38: Privacy, consent and form disclaimer audit

```
Context: read AGENTS.md, src/components/ChecklistForm.astro, src/components/ConsultationForm.astro, src/pages/privacy.astro, src/pages/terms.astro and docs/content/privacy.md first. Save your report to docs/audits/14-privacy-consent.md and show it in chat.

Facts about this site (do not rediscover them differently):
- Brand: Portugal HQA Citizenship. Domain: portugalhqacitizenship.com. An independent information site. It is NOT a law firm, adviser, broker, government body or immigration provider. It takes no referral fees or commissions and names no other company.
- Form provider: Formcarry, through PUBLIC_FORMCARRY_CHECKLIST_URL and PUBLIC_FORMCARRY_CONSULT_URL (not set yet, so test with a mocked fetch).
- Forms: (1) the checklist form (name, email; the PDF link appears only after Formcarry confirms receipt; optional update emails on some pages); (2) the consultation form, which asks for an introduction to independent advisors or providers. The introduction IS the service, so sharing consent is required on that form only.
- Privacy policy and terms are DRAFTS, noindex, waiting for the lawyer. The data controller cannot be named as a company. Do not invent a company, address or registration number.

Run the full audit:
1. Inventory every form and shared form component: page, purpose, fields, provider, consent controls, privacy link.
2. Classify each form (simple enquiry, professional introduction, marketing, updates).
3. Privacy consent (required, unchecked) on both forms, linking to /privacy: "I have read the Privacy Policy and consent to Portugal HQA Citizenship storing and using the information I provide to respond to my request." Compact version on the checklist form: "I have read the Privacy Policy and consent to Portugal HQA Citizenship using my information to send the checklist."
4. Consultation only, separate required checkbox: "I authorise Portugal HQA Citizenship to share my request with independent advisors or providers where needed to make the introduction I asked for."
5. Marketing or update emails: separate, optional, unchecked, on any form that offers them. Never a condition of submitting.
6. Consultation only: one short line under the message field, not a checkbox: "If you mention family members, only include information you are allowed to share."
7. Keep the existing controls if they already match; change wording only where it differs. Keep the existing payload names (privacyConsent, thirdPartySharingConsent, marketingConsent) and make sure false is never sent as true.
8. Validation: a required box left unchecked blocks submission, sends no request, keeps entered data, shows a clear message, and never shows success. Success only when response.ok and Formcarry code 200.
9. Consent text 14 to 15px, readable contrast, real checkboxes with labels, visible focus, 44px tap targets.
10. Privacy policy review: compare the draft policy with what the forms do (data collected, purpose, Formcarry as processor, introductions to advisors or providers, optional update emails, the PDF download, no analytics or cookies if that is true, rights, contact by hello@portugalhqacitizenship.com, retention). Do NOT rewrite the policy. List every mismatch under PRIVACY POLICY REVIEW NEEDED for the lawyer, and add those items to docs/lawyer-review-queue.md.
11. Disclaimers near forms: check the forms do not imply legal, tax or investment advice, government affiliation, guaranteed approval or a client relationship. The consultation page already says the site is not a law firm. Report only.
12. Functional QA with a mocked fetch: tests A (privacy unchecked), B (sharing unchecked, consultation), C (valid submit), D (marketing unchecked still submits), E (payload values). Responsive check at 1440, 1024, 768 and 390px if you have a browser tool; otherwise say so.
13. Do not change URLs, H1s, metadata, schema, page copy outside the forms, review dates or the sitemap. Do not claim the site is GDPR compliant.
Use the report format from the privacy audit: brand, forms discovered, consent implementation, validation, payload, privacy policy review, other disclaimer review, accessibility, responsive QA, content protection, build, files modified, items requiring legal review, final status (PASS means the implementation is consistent, not legally approved).
Run npm run check and npm run build. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 39: LinkedIn profile field check on the consultation form

```
Context: read AGENTS.md and src/components/ConsultationForm.astro first. Save your report to docs/audits/15-linkedin.md and show it in chat.

The consultation form already has a required LinkedIn Profile URL field. This prompt verifies it against our standard and fixes only real gaps.

Rules:
- Only high-intent forms get the field. The consultation form is the only high-intent form. The checklist form is a content download: do NOT add LinkedIn there. Report it as excluded with the reason.
- Label "LinkedIn profile URL", placeholder https://www.linkedin.com/in/username, type="url", inputmode="url", autocomplete="url", required, placed with the contact fields before the consent boxes.
- Accept: https://www.linkedin.com/in/slug, www.linkedin.com/in/slug, linkedin.com/in/slug, country subdomains (uk.linkedin.com/in/slug), m.linkedin.com/in/slug, trailing slash, query strings. Normalize to https://www.linkedin.com/in/slug before sending.
- Reject: blank, random text, non-LinkedIn URLs, /company/ pages, /school/ pages, /in/ with no slug, malformed URLs.
- Messages: "Please enter your LinkedIn profile URL." and "Please enter a valid LinkedIn profile URL."
- Payload property: linkedinProfileUrl. Keep every existing field and consent value.
- The URL must not appear in page URLs, query strings, console logs, analytics or anything other than the Formcarry request. The site has no analytics; confirm that.
- Never call URL validation identity verification.

QA with a mocked fetch: tests A (valid URL submits, payload has the normalized value), B (blank blocks, no request), C (https://example.com/person blocks), D (not-a-linkedin-profile blocks), E (linkedin.com/in/test-profile is accepted and normalized), F (other required fields still validate), G (a provider failure shows the error, keeps the data, no success). State clearly: "Payload verified with a mocked provider. Stored lead record not verified (Formcarry URL not configured yet)."
Report with the table: | Form | URL/Location | Classification | LinkedIn Added | Required | Validation | Payload | Provider | End-to-End | Responsive QA | Status |
Run npm run check and npm run build. Add a CHANGELOG entry. Do not commit.
```


---

## Prompt 40: Consent checkbox styling

```
Context: read AGENTS.md first. CSS only, in src/styles/global.css (the .site-form rules). Do not change form text, fields, validation or payloads.

Claude checked /consultation at 375px. The consent checkboxes render as 44 x 44px boxes, vertically centered against 4-line labels. They look oversized and float away from the first line of text.

Fix:
- Visible checkbox 20 x 20px (accent-color Atlantic), aligned to the first line of the label (align-items: start, margin-top so the box centers on the first text line).
- Keep a 44px tap target with the label: the whole row (checkbox plus label) is clickable, min-height 44px, and the checkbox column is 20px plus a 12px gap.
- Consent label text 15px, line-height 1.5, Ink color. Keep the Privacy Policy link underlined.
- 16px between consent rows. 24px between the last row and the submit button.
- Same rules for the checklist form.

QA: npm run build. Confirm in the built CSS that no other form style changed. Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 41: Search quality content QA (READ-ONLY)

```
READ-ONLY. Do not edit any file except docs/audits/16-search-quality.md. Show the report in chat as well. If anything else changes by accident, restore it.

Context: read AGENTS.md, docs/facts.json and docs/audits/01 to 15 first. Do not re-report issues those audits already closed. Do not recommend new pages for keyword variants. This is a high-stakes immigration and tax topic: apply a higher standard for sources.

Act as a senior search-quality, SEO, content-quality and user-experience auditor. Review all 21 indexable pages against these dimensions, marking any that do not apply as Not Applicable:
1 Relevance, 2 Page quality, 3 Popularity (link-worthiness, citation-worthiness, original assets; no artificial signals), 4 Freshness, 5 Localization (Portugal, euros, Portuguese authorities; Americans page for the US), 6 Language (natural, no AI-style phrasing, no filler), 7 Centrality, 8 Topical diversity (gaps, overlap, cannibalization), 9 Personalization (beginner vs experienced, families, Americans, budgets, decision stage), 10 Web ecosystem (primary-source citations, useful outbound links), 11 Mobile friendly, 12 Social fairness, 13 Optionalization (useful content is not gated; the checklist form is optional), 14 Spam (stuffing, doorway pages, thin pages, misleading headings, manipulative schema, exact-match anchors), 15 Authority (anonymous lawyer review, methodology, independence statement, corrections practice), 16 Privacy, 17 Spell correction (the site has no search: Not Applicable).

Fact-checking: for every legal, regulatory, financial or date claim, check it against docs/facts.json and the source URL listed there. If you can use the web, open the source and confirm it. If you cannot, list the claim under "Needs Claude to verify" with the page and sentence. Never invent a citation.

For every meaningful issue: Issue, Why it matters (dimension), Recommended correction, Priority (Critical / High / Medium / Low). Skip cosmetic issues.

FINAL REPORT
## Critical issues
## High-priority improvements
## Content gaps
## Content to consolidate or remove
## Internal linking opportunities
## Authority and source improvements
## Freshness issues (and what needs monitoring after launch: AIMA fees, the nationality regulation, the citizenship clock start, IFICI, the Golden Visa fund rules)
## Mobile / UX issues
## Needs Claude to verify
## What is already strong
## Recommended action plan (P0 fix now, P1 high, P2 enhancement)
Final check: confirm no file other than the report changed.
```

---

## Prompt 42: Launch readiness audit (READ-ONLY)

```
READ-ONLY. Do not edit any file except docs/audits/17-launch-readiness.md. Show the report in chat as well.

Context: read AGENTS.md and docs/audits/01 to 16 first. The site is not deployed yet. Known open items owned by the site owner (report them, do not fix them): lawyer review dates in src/data/reviews.ts (npm run check:reviews fails until then), the lawyer's review of privacy and terms, the Formcarry URLs PUBLIC_FORMCARRY_CHECKLIST_URL and PUBLIC_FORMCARRY_CONSULT_URL, the hello@portugalhqacitizenship.com inbox, the Vercel project and domain, Google Search Console.

Act as a senior SEO strategist. Audit brand/entity strength, launch readiness and crawlability only. For every check report PASS / NEEDS IMPROVEMENT / FAIL / NOT APPLICABLE, then Finding, Evidence (URL, file, config) and Action.

Part 1: brand and launch (Charles Floate Prompt 1)
1. The site builds and can be QA'd in a staging (Vercel preview) environment before launch.
2. The site works as one coherent property, not disconnected pages.
3. The brand has a clear identity users and search engines can understand (name, independence, no company name by design).
4. Social and reference profiles: list what an independent micro site should create at launch (for example LinkedIn page, X, a Google Business profile only if eligible). Do not create anything. Mark missing ones NEEDS IMPROVEMENT with the exact action.
5. Core trust information is consistent everywhere (site name, email, independence statement, no referral fees, review wording).
6. The production XML sitemap exists, lists only indexable canonical URLs, uses https://portugalhqacitizenship.com, and is ready for Search Console.
7. Crawlability and indexability: robots.txt, meta robots, canonicals, status codes from the built output, no JavaScript needed to read content, no accidental noindex on the 21 pages, privacy and terms noindex until reviewed (and what flips them).
8. Promotion proportionate to a 21-page site; authority spread across pillar pages rather than one URL.
9. Outreach that should start early because of editorial delays (for example corrections to outdated "5-year citizenship" articles, expat forums, journalists covering the nationality law). Ideas only, no backlink buying.

Part 2: technical and indexing (Charles Floate Prompt 11)
Sitemap and Search Console readiness, rendering of the built HTML, robots, canonicals, metadata, JavaScript behavior, blocking tags, the vercel.json headers (text/markdown, trailing slash, clean URLs), redirects and chains (none expected), image delivery, caching headers for /_astro assets, 404 page, favicon, and a list of the pages to monitor after launch.
For each problem: Severity | URL/File | Evidence | Likely cause | Exact fix.

FINAL
- A launch checklist in order: what the owner must do, what Cursor must do (as future prompts), and what Claude must verify.
- A prioritized list of only the actions from this audit.
Final check: confirm no file other than the report changed. Do not deploy.
```


---

## Prompt 43: Statute corrections from audit 16

```
Context: read AGENTS.md, docs/audits/16-search-quality.md and docs/facts.json first. Claude opened the consolidated Lei 23/2007 on pgdlisboa.pt (articles 3, 75, 76, 80, 85, 90, 90-A, 98, 101 and 105) and confirmed every statute point below. Apply ONLY these changes. Every visible change goes into BOTH docs/content/*.md and the matching .astro page, and into any JSON-LD string that copies the sentence. Keep the AGENTS.md writing rules. Add every changed sentence (page, before, after, article) to docs/lawyer-review-queue.md. Save a short report to docs/audits/18-statute-fixes.md.

Source URL for all Lei 23/2007 facts: https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis (cite the article number in the fact value).

PART A: docs/facts.json
- absenceLimit: "A temporary permit can be cancelled after more than 6 consecutive months or 8 non-consecutive months outside Portugal during its validity without good reason (article 85(2)). It is not cancelled if the holder proves professional, business, cultural or social activity during the absence (article 85(4)). A longer absence should be justified to AIMA before leaving, or afterwards in exceptional cases (article 85(3))." Status CURRENT, source the PGDL URL.
- familyReunification: "The 2-year wait (article 98(1)) does not apply to minors or incapacitated dependants, to a spouse or partner who is a parent or adopter of a dependent child with the holder, or to family of holders under articles 90, 90-A or 121-A (article 98(3)). Article 89 holders are not in that list. The wait can be waived or reduced in exceptional cases (article 98(4))." Status CONFIRMED.
- familyDecisionDeadline (new): "AIMA must decide a family reunification request within 9 months. Except for the ordinary 2-year and 15-month cases, it can extend once by the same period in exceptional circumstances and must tell the applicant (article 105)." Status CONFIRMED.
- familyIntegration (new): "After the family permit is granted, family members must take Portuguese language and constitutional values training, and children must attend compulsory school. Renewal depends on it, with a humanitarian exception (article 101(3) to (5)). The article 90 exemption from the waiting period is not repeated here." Status CONFIRMED.
- permitValidity: same value, source the PGDL URL (article 75(1)).
- goldenVisaRenewal (new): "The Golden Visa permit (article 90-A) is renewed for periods of 2 years (article 90-A(2)). The highly qualified activity permit is renewed for periods of 3 years (article 75(1))." Status CONFIRMED.
- goldenVisaOptions: keep the value, change the source to the PGDL URL (article 3(1)(d)).
- goldenVisaLowDensity (new): "The job-creation, research and arts and culture amounts can be 20% lower in low-density territories. The fund and company routes are not reduced (article 3(2) and (3))." Status CONFIRMED.
- permanentResidence: "After 5 years of temporary residence, with no sentence over 1 year in prison in the last 5 years, means of subsistence, housing and basic Portuguese (article 80). The permanent permit has no expiry, but the card is renewed every 5 years (article 76)." Status CONFIRMED, source the PGDL URL.
- residenceVisaValidity: keep the value. Add "(article 58)" only if you confirm it in the same consolidated text; otherwise leave the VFS source.
- feie2026: if you have the IRS newsroom URL for the 2026 adjustments, use it as the source; otherwise keep the current one.

PART B: page fixes
1. /hqa-visa-family (P0): replace "Only article 90 gives the family exemption" and the FAQ line saying article 89 holders "do have to wait" with wording based on familyReunification: article 90 families are exempt, as are Golden Visa and EU Blue Card families, minors and incapacitated dependants, and a spouse or partner who shares a dependent child. Article 89 is not on that list, so most article 89 families wait 2 years, or 15 months for a spouse who lived with the holder for 18 months, unless an exception applies.
2. /hqa-visa-family (P0): replace "up to 9 months to decide" with familyDecisionDeadline: 9 months, and for article 90 families AIMA can extend once by the same period in exceptional cases and must tell the applicant.
3. /hqa-visa-family (P1): replace the sentence saying the law is unclear on language and civic training with familyIntegration. Keep it in the "What we don't know yet" box only for how AIMA applies it in practice.
4. /guides/hqa-visa-presence-requirements (P1): add article 85(4) and 85(3) in plain words: travel for the company or for work does not cancel the permit if you can prove it, and AIMA wants a longer absence justified before you leave. Only on this page.
5. Home key fact 4 (P1): "More than 6 consecutive months, or 8 months in total, abroad can cost you the permit." Keep the Golden Visa sentence.
6. /portugal-hqa-vs-golden-visa (P1): in key fact 3 and the comparison table, state both absence limits. Add a renewal row to the table: HQA "Renewed every 3 years", Golden Visa "Renewed every 2 years". Add one sentence under the Golden Visa amounts: "The job, research and culture amounts can be 20% lower in low-density areas. The fund and company routes are not reduced." Remove "Backlogs have been long" unless it has a source.
7. /portugal-hqa-visa-investment: remove "Backlogs have been long" unless it has a source.
8. /hqa-vs-startup-visa-tech-visa (P1): in the table citizenship row, use "10 years (7 for EU and CPLP nationals)" in every column.
9. /hqa-visa-requirements (P1): change "research institution" in the invitation route to "a teaching or vocational-training institution" (article 90(1)(b)).
10. /guides/hqa-visa-ifici-tax (P1): limit the "doctorate, or a degree plus at least 3 years of experience" sentence to the highly qualified professions category in Portaria 352/2024/1, and say other categories have their own education rules. Do not add new numbers you have not read in the tax-authority leaflet.
11. Home "Every legal claim links to the law or an official source" (P2): change to "Every legal claim names its source, and we link the official text where one exists."
12. Do NOT add the CPLP language presumption to the citizenship page. Add it to docs/lawyer-review-queue.md as a question for the lawyer.

PART C: QA
- npm run build (test:facts and check:headings must pass). Update scripts/test-facts.ts only if a tested value changed wording; the numbers 6, 8, 10, 7, 20%, 15 January and 90 days must still be tested.
- Rerun the 5-location check for any page whose first sentence or description changed (there should be none).
- No em dashes. No other copy changes.
Add a CHANGELOG entry. Do not commit.
```

---

## Prompt 44: Technical launch fixes from audit 17

```
Context: read AGENTS.md and docs/audits/17-launch-readiness.md first. Save a short report to docs/audits/19-launch-fixes.md. Do not deploy.

1. Favicon: audit 11 said public/favicon.ico exists, audit 17 says it does not. Check public/. If favicon.ico is missing, remove its <link> from BaseLayout.astro. Do not invent a new icon.
2. 404 page: add src/pages/404.astro using BaseLayout with noindex, the shared header and footer, PageIntro with the H1 "Page Not Found", one sentence ("This page does not exist or has moved."), and links to the home page and /guides. Keep it out of the sitemap, llms.txt, content-index.json and the Markdown set. It must pass check:headings.
3. vercel.json: add a Cache-Control header "public, max-age=31536000, immutable" for /_astro/(.*) only. Do not cache HTML.
4. Launch gate on Vercel production: make the production build fail while any review date is null, without blocking preview builds. Add a script so that `npm run build` runs `npm run check:reviews` first when process.env.VERCEL_ENV === "production", and skips it otherwise (log one line saying it was skipped). Document this in AGENTS.md under the launch section.
5. Confirm robots.txt, the sitemap and canonicals are unchanged.
QA: npm run check, npm run build (locally VERCEL_ENV is unset, so check:reviews is skipped). Then run `VERCEL_ENV=production npm run build` (or the Windows equivalent) once and confirm it fails on the null review dates. Add a CHANGELOG entry. Do not commit.
```
