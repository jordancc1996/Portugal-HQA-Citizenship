# Cursor Prompts: portugalhqacitizenship.com

This file only holds the prompts you have NOT run yet. Paste them in order.
Finished prompts move to docs/prompts-done.md.

How to use:
1. Open the Portugal-HQA-Citizenship folder in Cursor, Agent mode.
2. Paste the prompts below in order. Wait for each to finish before pasting the next.
3. Tell Claude "batch done". Claude checks the files, moves the prompts to prompts-done.md and adds the next ones here.

Do not save this file from Cursor. If it looks out of date, close the tab and reopen it.

---

## Batch: Prompts 43 and 44 (final fixes before launch)

Paste 43, wait, then 44. Then tell Claude "batch done".

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

---

## After this batch: launch steps (owner)

1. Send docs/lawyer-review-queue.md to the lawyer with the 21 pages, privacy and terms. Put the real review dates in src/data/reviews.ts.
2. Set up hello@portugalhqacitizenship.com and send yourself a test email.
3. Create the two Formcarry forms (checklist, consultation).
4. Create the Vercel project from this folder, add PUBLIC_FORMCARRY_CHECKLIST_URL and PUBLIC_FORMCARRY_CONSULT_URL, and open a preview. Tell Claude the preview URL.
5. After Claude checks the preview, attach portugalhqacitizenship.com (www redirects to the apex in one hop), then submit the sitemap in Google Search Console.
