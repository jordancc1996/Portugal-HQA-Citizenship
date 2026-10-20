# Statute fixes

Date: 20 October 2026. Source for the Lei 23/2007 facts: the consolidated text at https://www.pgdlisboa.pt/leis/lei_mostra_articulado.php?nid=920&tabela=leis. Not committed.

## Facts

- `absenceLimit` now states articles 85(2), 85(4) and 85(3). Status CURRENT. Source is the PGDL URL.
- `familyReunification` now states articles 98(1), 98(3) and 98(4), and that article 89 is not in the exemption list. Status CONFIRMED. Source is the PGDL URL.
- New `familyDecisionDeadline` (article 105) and `familyIntegration` (article 101(3) to (5)). Both CONFIRMED, PGDL source.
- `permitValidity` value is unchanged. Its source was already the PGDL URL. Article 75(1) is cited in the new `goldenVisaRenewal` fact.
- New `goldenVisaRenewal`: Golden Visa renewals are 2 years (article 90-A(2)). The highly qualified activity permit renews for 3 years (article 75(1)).
- `goldenVisaOptions` value is unchanged. Source is now the PGDL URL (article 3(1)(d)).
- New `goldenVisaLowDensity`: the job-creation, research and arts and culture amounts can be 20% lower in low-density territories. The fund and company routes are not reduced (article 3(2) and (3)). This is narrower than the old unsourced sentence that was removed earlier.
- `permanentResidence` now states articles 80 and 76. Status CONFIRMED. Source is the PGDL URL. The permanent-residency page was not in the page list, so it was not edited. Its key fact still says "Valid 5 years."
- `residenceVisaValidity` value and VFS source are unchanged. Article 58(2) of the same consolidated text says the residence visa allows two entries and a stay of four months. It does not say "120 days," so "(article 58)" was not added.
- `feie2026` value is unchanged. Source is now the IRS newsroom page for the 2026 inflation adjustments.

## Pages

Every visible sentence below is in both `docs/content` and the matching `.astro` page. The family FAQ answer is also the FAQPage JSON-LD string. No other JSON-LD description copied a changed sentence.

- `/hqa-visa-family`: article 90 is not the only exemption. Article 89 is not on the list, so most of those families wait 2 years, or 15 months for a spouse who lived with the holder for 18 months, unless an exception applies. AIMA decides within 9 months, and for article 90 families it can extend once by the same period and must tell the applicant. The training duty is stated as law. The unknowns box asks only how AIMA applies it in practice.
- `/guides/hqa-visa-presence-requirements` only: proof of company or work travel, and justification to AIMA before a longer absence.
- Home key fact 4 states both the 6-month and 8-month limits. The Golden Visa sentence stays. The source bullet now says every legal claim names its source, and the official text is linked where one exists.
- `/portugal-hqa-vs-golden-visa`: both absence limits in key fact 3 and the table. Renewal row: HQA every 3 years, Golden Visa every 2 years. Low-density sentence under the amounts. "Backlogs have been long" removed. The 90-day deadline stays.
- `/portugal-hqa-visa-investment`: the same backlog clause removed. The 90-day deadline stays.
- `/hqa-vs-startup-visa-tech-visa`: the citizenship row is "10 years (7 for EU and CPLP nationals)" in every column.
- `/hqa-visa-requirements`: the invitation route is a teaching or vocational-training institution (article 90(1)(b)).
- `/guides/hqa-visa-ifici-tax`: the doctorate or degree-plus-3-years sentence is limited to the highly qualified professions category in Portaria 352/2024/1. Other categories have their own education rules. No new numbers were added.

The CPLP language presumption was not added to the citizenship page. It is a question in `docs/lawyer-review-queue.md`.

## Checks

No title, meta description, slug or first sentence changed, so the 5-location check had nothing to fix.

`scripts/test-facts.ts` was not edited. It still reads 6 consecutive months, 8 non-consecutive months, 10 years, 7 years, 20%, 15 January and 90 days from the fact file and the built pages.

`npm run build` passed: 24 pages, fact checks for 21 indexable pages, 218 headings. No em dashes in the edited copy.

The browser tool was not available, so the rendered pages were not opened. The old phrases are gone from the built HTML and Markdown.
