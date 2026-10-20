# Machine-readable layer

Date: 20 October 2026. The HTML page remains the canonical source. `llms.txt`, the Markdown files, and `content-index.json` are written at the end of `astro build` from that HTML. Nothing for this layer was placed in `public/`.

## FILES CREATED

Source:

- `scripts/machine-layer.ts`
- `scripts/generate-machine.ts`
- `scripts/test-facts.ts`
- `src/lib/markdown-path.ts`

Generated on each build, and not kept as source:

- `dist/llms.txt`
- `dist/content-index.json`
- 21 files under `dist/markdown/`

## FILES MODIFIED

- `src/layouts/BaseLayout.astro`: indexable pages link to their Markdown alternate.
- `astro.config.mjs`: runs the generator after the sitemap.
- `package.json`: `npm run build` runs the fact check after the build. `npm run test:facts` runs that check on its own.
- `vercel.json`: content types for `/llms.txt` and `/markdown/(.*)`.
- `CHANGELOG.md`

`node-html-parser` was added as a dev dependency so the generator can read the HTML.

## GENERATION METHOD

An Astro integration runs on `astro:build:done`. It reads each built `index.html` in `dist/`, keeps routes that pass the same `isNoindex` rule as the sitemap, and writes the three outputs. `/privacy` and `/terms` are left out while their review date is null. `/styleguide` is never included. A new indexable route that is not listed in the section map fails the build, so a page cannot be published in HTML and omitted from discovery.

## LLMS.TXT STRUCTURE

`/llms.txt` is discovery only. It names the site, says what the site explains, and then this line:

This site is independent, takes no referral fees, and program facts are checked against Portuguese law with the date shown on each page.

Each later line is the page title, the canonical URL, and that page's meta description. Sections:

- Start here: home, what the HQA visa is, investment, due diligence, then the guides index.
- Costs and eligibility: cost, requirements, Americans.
- Family and living in Portugal: family, presence, permanent residency.
- Citizenship and tax: the 10-year rule, IFICI.
- Comparisons: Golden Visa, StartUP Visa and Tech Visa.
- Updates and method: status, methodology, about, contact, consultation, image credits. Privacy and terms join this section only when they are indexable.

## MARKDOWN COVERAGE

One Markdown file per indexable HTML page. Home is `/markdown/index.md`. A nested route such as `/guides/what-is-hqa-visa` is `/markdown/guides/what-is-hqa-visa.md`. `/guides` is `/markdown/guides.md`.

The converter reads `<main>` and keeps headings, paragraphs, lists, tables, source lines, the Last verified line, "What we don't know yet" boxes, and FAQ questions and answers. Links to other pages stay, including the text links that point at a topic owner. Header, footer, breadcrumbs, photos, forms, lead-magnet bands, solid buttons, and the "scroll sideways" table hint are dropped.

Each indexable HTML page has `<link rel="alternate" type="text/markdown">` pointing at that file. Privacy, terms, and the styleguide do not. Markdown URLs are not in the sitemap.

## CONTENT INDEX COVERAGE

`/content-index.json` has the same 21 pages, in the same order as `llms.txt`. Each record has `title`, `canonical_url`, `markdown_url`, `content_type`, `description`, and `dateModified`. `dateModified` is that page's `lastVerified` from `src/data/pages.ts`. There is no `datePublished`. `content_type` is `Article`, `CollectionPage`, or `WebPage`, taken from the page's existing JSON-LD. The guides index is `CollectionPage`. Home is `WebPage`. The long guides are `Article`.

Existing JSON-LD was not rebuilt into a fact graph.

## SHARED FACTS CREATED

None. Repeated legal paragraphs were not moved into a new registry. `docs/facts.json` is still the only fact file, and the drift test reads it.

## DRIFT TESTS

`npm run test:facts` runs after `npm run build`. It does not check whole sentences. It reads the current values from `docs/facts.json` and checks the built HTML of the owning page:

- Citizenship page contains both year counts (`10 years` and `7 years` today).
- Presence page contains both absence counts (`6 consecutive` and `8 non-consecutive` today).
- IFICI page contains the rate and the January deadline (`20%` and `15 January` today).
- Status page contains the AIMA day count (`90 days` today).

The same command checks that the sitemap, `llms.txt`, the content index, and the Markdown files list the same indexable routes, that noindex routes are absent, that each HTML page links its Markdown file, and that `dateModified` matches `pages.ts`.

## BUILD QA

- `npm run check`: 0 errors, 0 warnings, 58 files.
- `npm run build`: 24 HTML pages, then `test:facts` passed for 21 indexable pages.
- Sitemap: 21 URLs. No `/privacy`, `/terms`, `/styleguide`, `/markdown/`, or `llms.txt`.
- Canonical URLs were not changed. No redirects were added.
- Indexable pages have a Markdown alternate. Privacy does not.

## KNOWN LIMITATIONS

`vercel.json` can set one `Content-Type` for every file under `/markdown/(.*)`, and `text/plain` for `/llms.txt`. It cannot set a different `Link: <canonical HTML URL>; rel="canonical"` header on each Markdown file. Each Markdown file therefore starts with the canonical URL copied from that page's HTML canonical tag. That line is not an HTTP `Link` header.

The consultation page still says "You fill in the form below." The form itself is removed from the Markdown. That sentence is page copy, so the generator does not rewrite it.
