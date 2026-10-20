# Launch readiness

Date: 20 October 2026. Read-only. Audits 01 to 16 were read first. This pass covers brand, launch readiness, and crawlability. It does not reopen the statute edits in audit 16. The site is not deployed. Nothing here was deployed.

Owner-owned items are reported and not fixed: review dates, the lawyer's read of privacy and terms, the two Formcarry URLs, the hello@ inbox, the Vercel project and domain, and Google Search Console.

Evidence is the current `dist/` from the last local build, plus `astro.config.mjs`, `vercel.json`, `public/robots.txt`, `src/layouts/BaseLayout.astro`, and `src/data/reviews.ts`. HTTP status codes cannot be measured until a host answers.

## Part 1. Brand and launch

### 1. Staging build

Status: NEEDS IMPROVEMENT

Finding: The site is a static Astro build and can be checked locally. There is no Vercel project in this workspace, so a Vercel preview does not exist yet.

Evidence: `package.json` scripts `build` and `preview`. `astro.config.mjs` sets `output: "static"` and `site: "https://portugalhqacitizenship.com"`. `dist/` contains 24 HTML pages and `sitemap-0.xml`. No `.vercel` directory. `.env.example` leaves both Formcarry URLs empty.

Action: The owner creates the Vercel project, attaches a preview, and sets the two Formcarry variables on that project before production. Cursor does not deploy. After the preview URL exists, Claude requests the 21 indexable URLs, `/privacy`, `/terms`, a trailing-slash URL, and one missing path.

### 2. One property

Status: PASS

Finding: Every page shares one header, one footer, one site name, and one canonical host. The header points at the investment, cost, requirements, citizenship, guides, about, and consultation pages. The footer points at methodology, status, image credits, privacy, terms, and contact.

Evidence: `src/components/Header.astro`, `src/components/Footer.astro`, `src/data/site.ts`. Sitemap host is `https://portugalhqacitizenship.com` with no second host.

Action: None.

### 3. Brand identity

Status: PASS

Finding: The name is Portugal HQA Citizenship. The footer states that it is an independent information site and takes no referral fees. There is no company name and no Organization schema. WebSite schema uses that same name and the site URL.

Evidence: `src/data/site.ts`. `src/layouts/BaseLayout.astro` WebSite node. `src/components/Footer.astro`.

Action: None. Do not add a company, a logo lockup, or Organization schema.

### 4. Social and reference profiles

Status: NOT APPLICABLE for a LinkedIn Company Page and a Google Business Profile. NEEDS IMPROVEMENT only if someone will actually post.

Finding: No social profile is linked, and none should be invented. A Google Business Profile is for a business with a public location or a service area. This site has no company and no premises, so it is not eligible. A LinkedIn Company Page requires an organization name, which this site does not use. An empty X account would not help a 21-page site.

Evidence: No profile URLs in `src/`. WebSite JSON-LD has `name` and `url` only. No `sameAs`.

Action: Do not create a Google Business Profile. Do not create a LinkedIn Company Page. Create an X account under the site name only after a person is ready to post status updates. Then add that URL in the footer and as `sameAs` on the WebSite node. Do not create the account in this pass.

### 5. Trust information

Status: NEEDS IMPROVEMENT

Finding: The site name and `hello@portugalhqacitizenship.com` come from `siteConfig` and match the contact page, the privacy draft, and the consultation copy. Independence and "no referral fees" match on the home page, about, methodology, consultation, and the footer. The failure is the review line. Every date in `reviews.ts` is null, so the dated review sentence is hidden, but home, about, and the guides meta description still say a review date is shown. Audit 16 already recorded this.

Evidence: `src/data/site.ts`. `src/data/reviews.ts`. `docs/content/home.md`, `docs/content/about.md`, `docs/content/guides-index.md`. `scripts/check-reviews.ts` exits 1 while any indexable route has a null date.

Action: The owner stores real dates only after the lawyer review, then re-runs `npm run check:reviews`. Until then, a later Cursor prompt should stop the visible sentences that say the date is already shown. Do not invent a date or a name.

### 6. XML sitemap

Status: PASS

Finding: The production sitemap is in the build, uses the production host, and lists the 21 indexable canonical URLs only.

Evidence: `dist/sitemap-index.xml` points at `https://portugalhqacitizenship.com/sitemap-0.xml`. That file has 21 `<loc>` values, from `/` through `/portugal-hqa-vs-golden-visa`. It does not list `/privacy`, `/terms`, `/styleguide`, `/markdown/`, `/llms.txt`, or the PDF. `public/robots.txt` points at `https://portugalhqacitizenship.com/sitemap-index.xml`. The filter is `isNoindex` in `astro.config.mjs`.

Action: After the domain is live, submit `https://portugalhqacitizenship.com/sitemap-index.xml` in Search Console. Do not submit the Markdown URLs.

### 7. Crawlability and indexability

Status: PASS for the built files. NEEDS IMPROVEMENT for host status codes, because there is no host yet.

Finding: `robots.txt` allows `/` and does not block the 21 pages. A `noindex` meta tag appears on exactly three built pages: `/privacy`, `/terms`, and `/styleguide`. The 21 indexable HTML files have a self-referencing `https://portugalhqacitizenship.com` canonical and no robots meta tag. Home is `https://portugalhqacitizenship.com/` in both the canonical and the sitemap. Other URLs have no trailing slash in either place. Article text is in the HTML. Forms need JavaScript to submit and say so in `<noscript>`. The menu works as `<details>` without JavaScript.

What flips privacy and terms: a real `YYYY-MM-DD` date for that path in `src/data/reviews.ts`. `isNoindex` then returns false, the sitemap filter includes the URL, `noindex` is omitted, and the machine layer can emit the Markdown alternate. `/styleguide` stays noindex by a hard rule in `isNoindex`. It does not flip with a date.

Evidence: `public/robots.txt`. `src/data/reviews.ts` `isNoindex`. `dist/privacy/index.html`, `dist/terms/index.html`, `dist/styleguide/index.html` contain `meta name="robots" content="noindex"`. A search of `dist/**/index.html` found that robots meta on those three files only. `dist/index.html` contains the H1 in the HTML.

Action: On the first preview, confirm 200 for the 21 pages, 200 with noindex for privacy, terms, and the styleguide, and one redirect (not a chain) from a trailing slash to the canonical. Do not remove noindex from privacy or terms before the lawyer review.

### 8. Promotion proportionate to 21 pages

Status: PASS

Finding: The header already spreads attention across the investment, cost, requirements, and citizenship pages, not only the home page. The status page is the update log. No page is a doorway.

Evidence: `src/components/Header.astro`. `dist/sitemap-0.xml` has 21 URLs. Audit 05 found no merge.

Action: Cite the page that owns the fact. Citizenship claims go to `/guides/hqa-visa-citizenship-10-year-rule`. Status claims go to `/hqa-visa-status`. Package claims go to `/portugal-hqa-visa-investment`. Do not build the brand on the home URL alone.

### 9. Early outreach

Status: NEEDS IMPROVEMENT as a plan only. Nothing was sent.

Finding: The 10-year rule has been in force since 19 May 2026. Pages that still say a 5-year passport for new applicants are the useful correction target. Buying links would fight the independence claim.

Evidence: Citizenship page and status page in `dist/`. No outreach assets in the repo.

Action: Ideas only.

- Send a short correction, with the citizenship URL, to articles that still promise citizenship after 5 years for new applicants. One page, one purpose. No payment.
- When a journalist covers Lei Orgânica 1/2026, offer the status page as a dated log.
- Answer a specific question on an American-in-Portugal forum with the Americans page or the presence page. Do not drop the same signature on every thread.
- Do not buy links, rent guest posts, or submit the site to generic directories.

## Part 2. Technical and indexing

### Sitemap and Search Console

Status: PASS for the file. NEEDS IMPROVEMENT for submission.

Finding: The sitemap is ready to submit. Search Console is not connected, which is expected before the domain is live.

Evidence: `dist/sitemap-index.xml`, `dist/sitemap-0.xml`, `public/robots.txt`.

Action: Owner, after DNS: add the domain property, submit the sitemap index, and inspect the home URL and the citizenship URL first.

### Rendering

Status: PASS

Finding: The built HTML contains the title, description, canonical, H1, and body copy. Crawlers do not need JavaScript to read the guides.

Evidence: `dist/index.html` and the other `dist/**/index.html` files. `astro.config.mjs` `output: "static"`.

Action: None for rendering. Confirm on the preview that the HTML view-source matches these files.

### Robots, canonicals, metadata, blocking tags

Status: PASS

Finding: One canonical per built page, on the production host. Unique titles. Open Graph uses the same host. No `noindex` on the 21 pages. No `X-Robots-Tag` in `vercel.json`. Markdown and `llms.txt` are not in the sitemap. Indexable pages link a Markdown alternate. Privacy, terms, and the styleguide do not.

Evidence: `src/layouts/BaseLayout.astro`. `vercel.json` headers are content types only. Sample: `dist/portugal-hqa-visa-investment/index.html` canonical `https://portugalhqacitizenship.com/portugal-hqa-visa-investment`.

Action: None.

### JavaScript

Status: PASS

Finding: Content is not injected by JavaScript. Form submission is. An empty Formcarry URL fails closed and does not show success.

Evidence: `src/scripts/formcarry.ts`. `.env.example`. `<noscript>` in both form components.

Action: Owner sets the two URLs on Vercel before expecting leads. This does not block indexing.

### vercel.json

Status: PASS for slash handling and Markdown types. NEEDS IMPROVEMENT for asset caching.

Finding: `trailingSlash: false` and `cleanUrls: true` match Astro `trailingSlash: "never"`. `/llms.txt` is `text/plain; charset=utf-8`. `/markdown/(.*)` is `text/markdown; charset=utf-8`. There is no `redirects` array. There is no `Cache-Control` for `/_astro`.

Evidence: `vercel.json`. `astro.config.mjs`.

Action: Add one header, after the owner has a preview to compare:

```json
{
  "source": "/_astro/(.*)",
  "headers": [
    { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
  ]
}
```

Do not put that cache on HTML. Hashed file names make the long cache safe. Leave HTML on the platform default so a new deploy is visible.

### Redirects and chains

Status: PASS in config. Unproven on a host.

Finding: No redirect map in Astro or Vercel. The only expected redirect is the platform folding a trailing slash, `/about/`, onto `/about`. That is one hop. No chain is configured. No www host is configured. A second host would be a duplicate if DNS adds www without a redirect.

Evidence: `vercel.json` has no `redirects`. `astro.config.mjs` has no `redirects`.

Action: On preview, request `/portugal-hqa-visa-investment/` and a nonsense path. Expect one redirect, then 200, for the slash. Expect 404 for the nonsense path. When the domain is attached, send www to the apex in one hop, or do not create the www record.

### Images

Status: PASS

Finding: Audit 11 still holds. Source photos are WebP. Open Graph files are JPG at 1200 by 630. The SVG favicon is the one that exists. Pages set width and height and do not lazy-load.

Evidence: `docs/audits/11-images.md`. `public/favicon.svg`. Built pages link `/favicon.svg`.

Action: None for the photo set.

### Favicon

Status: NEEDS IMPROVEMENT

Finding: Every page requests `/favicon.ico`, and that file is not in the project. `/favicon.svg` does exist.

Evidence: `src/layouts/BaseLayout.astro` links both. `public/` contains `favicon.svg` and `robots.txt` only. A workspace search found no `favicon.ico`.

Action: Remove the `/favicon.ico` link, or add a real `public/favicon.ico` copied from the existing mark. Do not invent a new logo. A missing linked icon will 404 on every page.

### 404 page

Status: NEEDS IMPROVEMENT

Finding: There is no `src/pages/404.astro` and no `dist/404.html`. An unknown URL will use the host's default page.

Evidence: No 404 template under `src/pages/`. No `404.html` in `dist/`.

Action: Add a short 404 page with the site header and footer, a link home, and `noindex`. Keep it out of the sitemap. Do not use it to list keywords.

### Pages to monitor after launch

Request these in Search Console after the sitemap is submitted, then again when a law date on the status page changes:

- `/`
- `/portugal-hqa-visa-investment`
- `/hqa-visa-cost`
- `/hqa-visa-requirements`
- `/hqa-visa-family`
- `/portugal-hqa-vs-golden-visa`
- `/hqa-vs-startup-visa-tech-visa`
- `/hqa-visa-for-americans`
- `/hqa-visa-due-diligence`
- `/hqa-visa-status`
- `/guides`
- `/guides/what-is-hqa-visa`
- `/guides/hqa-visa-presence-requirements`
- `/guides/hqa-visa-permanent-residency`
- `/guides/hqa-visa-ifici-tax`
- `/guides/hqa-visa-citizenship-10-year-rule`
- `/methodology`
- `/about`
- `/contact`
- `/consultation`
- `/image-credits`

Also watch, without expecting them in the index yet: `/privacy`, `/terms`. Confirm `/styleguide` stays out. Content to recheck when the source changes: AIMA fees, the nationality regulation, the citizenship clock, IFICI, and the Golden Visa fund rules. That list is from audit 16.

## Problems

| Severity | URL/File | Evidence | Likely cause | Exact fix |
|---|---|---|---|---|
| High | `src/data/reviews.ts` | Every value is null. `npm run check:reviews` exits 1. | Lawyer dates are not in yet. | Owner only. Paste real dates. Do not invent them. |
| High | `.env.example`, Vercel env | Both Formcarry variables are empty. | Project is not deployed. | Owner sets `PUBLIC_FORMCARRY_CHECKLIST_URL` and `PUBLIC_FORMCARRY_CONSULT_URL` on Vercel, then rebuilds. |
| High | Vercel project and domain | No project file in the repo. | Not created yet. | Owner creates the project, previews, then attaches `portugalhqacitizenship.com` with one www-to-apex hop. |
| High | Search Console | No property. | Domain is not live. | Owner submits `https://portugalhqacitizenship.com/sitemap-index.xml`. |
| Medium | `src/layouts/BaseLayout.astro` | `href="/favicon.ico"` and no such file. | Second icon link was added without the file. | Remove that link, or add `public/favicon.ico`. |
| Medium | `src/pages/` | No `404.astro`. No `dist/404.html`. | A 404 template was never added. | Add a noindex 404 page with the shared header and footer. |
| Medium | Home, about, guides meta | Copy says a review date is shown. Dates are null. | Wording landed before the review. | Cursor prompt: stop saying the date is shown until `reviews.ts` has one. Already in audit 16. |
| Low | `vercel.json` | No `Cache-Control` for `/_astro`. | Headers were limited to content types. | Add `public, max-age=31536000, immutable` for `/_astro/(.*)` only. |
| Low | Inbox `hello@portugalhqacitizenship.com` | Address is consistent in `siteConfig`. Delivery was not tested. | Mailbox is outside the repo. | Owner sends one message to that address and confirms it arrives. |

Privacy and terms are not a crawl defect. They are noindex until the lawyer review, which is the intended gate.

## Launch checklist

Owner, in order:

1. Finish the lawyer review. Store real dates in `src/data/reviews.ts`. Leave privacy and terms null until those two texts are approved.
2. Run `npm run check:reviews` and expect it to pass for the 21 pages. Privacy and terms stay withheld until their own dates exist.
3. Confirm the hello@ mailbox receives mail.
4. Create the Formcarry forms. Put the two URLs in the Vercel project environment.
5. Create the Vercel project. Open a preview. Do not point the production domain at it yet.
6. On that preview, check a pillar page, a trailing slash, a missing path, `/privacy`, and one form with a test submission.
7. Attach the domain. Send www to the apex in one hop.
8. In Search Console, submit `https://portugalhqacitizenship.com/sitemap-index.xml` and request indexing for `/`, `/portugal-hqa-visa-investment`, and `/guides/hqa-visa-citizenship-10-year-rule`.

Cursor, as later prompts, not in this pass:

1. Remove the broken favicon.ico link, or add the file.
2. Add a noindex 404 page.
3. Add the `/_astro` cache header.
4. Align the review-date sentences with audit 16. Do not invent dates.
5. Apply the audit 16 statute corrections on the family, presence, and comparison pages before launch if the owner accepts them. They are content, not crawl blockers.

Claude, after the preview exists:

1. View source on `/` and `/guides/hqa-visa-citizenship-10-year-rule`. Confirm the H1 is in the HTML, the canonical host is `https://portugalhqacitizenship.com`, and there is no noindex.
2. Confirm `/privacy` and `/terms` are noindex and absent from the live sitemap.
3. Confirm `/portugal-hqa-visa-investment/` redirects once to the URL without the slash.
4. Confirm a missing path returns the site 404, once that page exists, and is not indexed.
5. Confirm a checklist submit and a consultation submit reach Formcarry, and that a failed submit does not show success.

## Actions from this audit, in order

1. Owner: lawyer dates, privacy and terms review, mailbox, Formcarry URLs, Vercel preview, domain, Search Console.
2. Cursor: fix the favicon.ico link, add the 404 page, add the `/_astro` cache header.
3. Cursor, if the owner accepts audit 16: correct the family sentences and the "review date is shown" lines before the domain goes live.
4. Do not create a Google Business Profile or a LinkedIn Company Page.
5. Do not buy links. Start corrections outreach only after the canonical pages are on the production host.

## Final check

This pass wrote only `docs/audits/17-launch-readiness.md`. No page, config, or stylesheet was edited. The site was not deployed.
