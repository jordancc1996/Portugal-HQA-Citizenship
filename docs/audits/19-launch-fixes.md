# Launch fixes

Date: 20 October 2026. Nothing was deployed. Nothing was committed.

## Favicon

`public/favicon.ico` is present (441 bytes, last written 19 October 2026), next to `favicon.svg` and `robots.txt`. Audit 11 was right. Audit 17 did not see the file. The `/favicon.ico` link in `BaseLayout.astro` stays. No new icon was made.

## 404 page

`src/pages/404.astro` uses `BaseLayout` with `noindex`, the shared header and footer, and `PageIntro`. The H1 is "Page Not Found". The sentence is "This page does not exist or has moved." The links are Home and Guides.

The built file is `dist/404.html`. It is not in `sitemap-0.xml`, `llms.txt`, `content-index.json`, or `dist/markdown/`. `isNoindex("/404")` is true, and `test:facts` checks that route the same way it checks privacy, terms, and the styleguide. Heading checks passed, including this H1 (219 headings).

## Cache and production gate

`vercel.json` sets `Cache-Control: public, max-age=31536000, immutable` on `/_astro/(.*)` only. HTML is not given that header.

`npm run build` runs `scripts/review-gate.ts` first. When `VERCEL_ENV` is `production`, that script runs `npm run check:reviews` and stops the build if it fails. Otherwise it logs `Skipped check:reviews because VERCEL_ENV is not production.` The rule is in the Launch section of `AGENTS.md`. The Vercel production build command has to stay `npm run build`.

## Checks

`npm run check`: 0 errors, 0 warnings, 0 hints.

Local `npm run build`, with `VERCEL_ENV` unset: the review check was skipped, then the site built. Fact checks passed for 21 indexable pages.

`VERCEL_ENV=production` via `cmd /c "set VERCEL_ENV=production&& npm run build"` exited 1. `check:reviews` listed the 21 indexable routes with null dates, and listed `/privacy` and `/terms` as withheld. The Astro build did not start. The shell variable was not left set.

`public/robots.txt` was not edited. It still allows `/` and points at `https://portugalhqacitizenship.com/sitemap-index.xml`. `dist/sitemap-0.xml` is byte-identical to the sitemap from before this pass (21 URLs, no `/404`). Existing canonicals were not changed. The 404 page has its own canonical, `https://portugalhqacitizenship.com/404`, and `noindex`.
