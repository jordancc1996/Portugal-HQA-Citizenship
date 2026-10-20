# AGENTS.md: portugalhqacitizenship.com

Read this file before every task. These rules apply to every page, component and commit in this repo.

## What this site is

- An independent micro site about the Portuguese HQA (highly qualified activity) residence route, mainly the private investment packages (often about €175,000) sold as a Golden Visa alternative.
- Audience: high-net-worth investors, founders and families. Many are American.
- Goal: rank for "portugal hqa visa investment" and related long-tail searches, and collect email leads with Formcarry.
- Position: honest, upfront, fact-checked. We are not a law firm, not a provider and not a government body.
- Site name in titles: "Portugal HQA Citizenship". No company name appears anywhere on the site.

Reference docs (read when relevant):
- docs/research-brief.md: fact base, sources, keyword map, page plan
- docs/design-brief.md: design system, photos, trust signals
- docs/facts.json: the single source of truth for program facts
- docs/content/*.md: approved page copy. Use it word for word. Do not rewrite it.

## Honesty rules (override everything else, including SEO)

1. Never invent facts, fees, dates, statistics, quotes, reviews, testimonials, case studies, credentials, client numbers or approval rates.
2. Program facts come only from src/data/facts.ts (generated from docs/facts.json). Never hard-code a fact in two places.
3. Keep every qualifier. "Reported" stays reported. "Proposed" never becomes "in force". "May" never becomes "will".
4. Never promise citizenship, approval, returns or timelines. Citizenship requires 10 years of legal residence (7 for EU and CPLP nationals) under Lei Orgânica 1/2026.
5. "HQA" is a plain descriptive term. Never write HQA®, HQA™ or "HQA Visa™". Never imply any company owns or runs the route.
6. Never imply government affiliation or that applications are "open" through us.
7. The legal review line reads: "Legally reviewed by an independent Portuguese lawyer on [date]." Never add a name, photo or registration number. Only use real review dates from src/data/reviews.ts.
8. Never show a form success message unless Formcarry confirmed receipt.

## URL rules

- Shallow structure. Core pages at the root (/portugal-hqa-visa-investment). Guides one level deep (/guides/[slug]).
- Slugs: lowercase, hyphenated, descriptive, no dates. Use the slugs in docs/research-brief.md section 6.
- Never change a published URL without explicit approval.
- Every page: one self-referencing canonical, included in the sitemap, indexable unless it is a utility page.

## 5-location keyword check (every page, before commit)

The page's primary keyword must appear in:
1. Title / H1: starts with or prominently features the keyword. Format "[Keyword] - [Angle]" for the title tag. No em dashes. No site name in the H1.
2. Meta title: the title + " | Portugal HQA Citizenship".
3. Meta description: keyword in the first 5 to 7 words, 150 to 160 characters, at least one real number or date, ends with a full sentence, no em dashes.
4. URL slug reflects the keyword.
5. First sentence: keyword within the first 10 words. Never start with "This article will" or "In this guide".

Show a ✓/✗ table for these five checks and fix every ✗ before writing the file.

## Writing rules

- Plain, precise English for a smart, busy reader. Short paragraphs. Numbers over adjectives.
- Never use em dashes (—) anywhere: copy, titles, metadata, alt text.
- Banned words: additionally, crucial, delve, emphasize, enhance, enduring, foster, garner, highlight, intricate, landscape, pivotal, showcase, tapestry, testament, underscore, valuable, vibrant, robust, leverage, seamless, unlock, game changer, exclusive, guaranteed.
- No "not just X but Y", no rhetorical-question openers, no fake urgency, no exclamation marks, no hype.
- Write "is" not "serves as", "has" not "boasts".

## Headings

- One H1 per page in Title Case.
- H2 to H6 in sentence case. No skipped levels.
- Never style text as a heading without heading markup.

## Images

- Source: Unsplash only, from the list in docs/design-brief.md. Record photographer and URL in src/data/image-credits.ts.
- Convert to WebP at quality 82 to 85. Never upscale. Keep aspect ratio. Max width 2400px.
- Descriptive lowercase hyphenated filenames. Accurate alt text, no keyword stuffing.
- No lazy loading of any kind: no loading="lazy", no IntersectionObserver loaders.
- SVG stays SVG. Never show a photo of one country to represent another.

## Design system (summary, full spec in docs/design-brief.md)

- Fonts: Newsreader (serif, headings and body) and Inter (UI labels), self-hosted via @fontsource. No other fonts.
- Colors: Paper #FFFFFF, Cream #F7F1E8, Ink #141414, Graphite #4A4A4A, Stone #6B6B6B, Rule #E5DFD6, Atlantic #1F3A68 (the only accent).
- No gradients, shadows, rounded cards, emoji or icon clutter. Hairline rules instead of boxes. Max 4px radius on buttons and inputs.
- Reading column max 720px. Generous vertical space.
- Every block sits in .container. Text, headings and lists use .measure (720px, left-aligned). Only tables, the key facts grid and guide lists use .wide (full container width). One left edge on every page.
- New pages use PageHero or PageIntro. No page-level layout CSS.

## Forms

- Formcarry endpoints come from environment variables. Never hard-code form IDs.
- Every form: unchecked privacy consent checkbox before submit, linked to /privacy. Marketing consent separate and optional.
- Consultation form only: required, validated "LinkedIn profile URL" field. Never send it to analytics.
- Block submission and keep entered data on any error. Prevent double submits.

## Technical SEO

- Static HTML output (Astro). Every page has a unique title, meta description, canonical, Open Graph and Twitter tags.
- Schema: Organization is not used (no company). Use WebSite, WebPage, Article (for guides), BreadcrumbList and FAQPage. Schema must match visible content.
- robots.txt points to the sitemap. Sitemap lists canonical indexable URLs only.

## Workflow

- Make the smallest clean change. Reuse existing components.
- Run `npm run build` after every change and fix errors.
- Never commit, push or deploy unless the user asks.
- Add an entry to CHANGELOG.md for every change: date, "Change:" and "Why:".

## Launch

- The Vercel production build command stays `npm run build`.
- When `VERCEL_ENV` is `production`, that command runs `npm run check:reviews` first. The build stops while any indexable route has a null review date.
- Local builds and Vercel preview builds skip that check and log one line: "Skipped check:reviews because VERCEL_ENV is not production."
- Do not invent a review date to make production pass. Store a real date in `src/data/reviews.ts` only after the lawyer review.
- Do not deploy unless asked.
