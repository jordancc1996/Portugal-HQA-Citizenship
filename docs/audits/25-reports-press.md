# Reports and press structure

Date: 20 October 2026. Structure only. No report or press release body was written.

## Routes

| URL | Role |
|---|---|
| /reports | Hub. PageIntro, a cream list band, then the checklist band. |
| /reports/[slug] | One report from `src/content/reports/`. |
| /press | Press room. PageIntro, a cream list band, then "For journalists". |
| /press/[slug] | One release from `src/content/press/`. |

Slugs are lowercase and hyphenated. The content schema rejects a four-digit year in a slug. There is no trailing slash.

Both collections are empty. Astro warns that the glob found no Markdown files. That warning stops when the first file is added. Item pages are not built until then.

## What an item page renders

A report uses PageIntro, key findings on cream, the Markdown body, a "Download the PDF" button when `pdf` is set, sources and related links when those fields are set, FAQ when `faq` is set, the checklist band, and a disclaimer.

A release shows the dateline and publication date under the headline, then the body, then "About this site" from `siteConfig.about`, the media email, and "Also published on" from `syndicatedTo`.

Dates on those pages come from front matter. The hub "Last verified" date is 20 October 2026 from `pages.ts`, the day this structure was added. It is not a publication date.

## Schema

Report items use Article with `headline`, `datePublished`, `dateModified` and `isPartOf` the WebSite id. Releases use NewsArticle with the same date fields, plus the visible dateline. Hubs use CollectionPage and an ItemList. There is no Organization schema and no author name.

## Indexing

An empty hub is `noindex`. It is left out of the sitemap, `llms.txt`, `content-index.json` and the Markdown set. The same check that hides privacy and terms now hides `/reports` and `/press` while `src/content/reports` and `src/content/press` have no Markdown files. The first file makes that hub indexable on the next build.

`/reports` and `/press` are in the llms.txt section map under "Reports and press". They do not appear in the generated file while they are noindex. Item URLs are added to that section when they are indexable.

Each item page needs a `reviews.ts` entry before a production build, like every other indexable page. `check:reviews` reads the `slug` in each content file and fails production if that path is missing or has no review date. Local builds still skip that check.

## Canonicals

Both hubs use a self-referencing canonical on https://portugalhqacitizenship.com. Item pages will do the same from their slug. No page sets a cross-domain canonical. The syndication checklist is `docs/press-syndication.md`.

## Keyword check

Keyword: HQA visa reports

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ 156 characters | ✓ | ✓ |

Keyword: HQA visa press releases

| Title | Meta title | Description | Slug | Intro |
|---|---|---|---|---|
| ✓ | ✓ | ✓ 157 characters | ✓ | ✓ |

## Checks

`npm run build` passed: 21 fact checks and 227 headings. The two new hubs are built and are not among the 21 indexable URLs.

Built HTML: both hubs have `noindex`, a self-referencing canonical, CollectionPage and ItemList. Neither `/reports` nor `/press` is in the sitemap, `llms.txt`, `content-index.json` or `dist/markdown`. The home page links to both from the menu and the footer.
