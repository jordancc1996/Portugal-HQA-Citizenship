# Internal linking

Date: 20 October 2026. Read-only. No link, anchor, page, or component was changed. A second pass re-counted every internal `href` in `src/pages` and `src/components`. The five recommendations below are unchanged.

Evidence labels: Measured means counted in the source. Observed means seen in the files without a count. Inferred means an editorial judgment. Unknown means we do not have the data.

No Search Console, analytics, rankings, search volume, backlinks, or click data exists for this site. Click potential below is an editorial estimate, not a measurement.

## A. Executive summary

The topic pages already link to the pages that own the main rules: cost, family, presence, citizenship, IFICI, and the Golden Visa comparison. The gaps that matter are small.

Five links are worth adding. Each one sits on a sentence that already states the other page's topic. None is a new sales path.

Three indexable pages have no contextual inbound link: `/guides`, `/about`, and `/image-credits`. They are reached from the header or the footer. Do not add body links only to fix that.

`/guides/hqa-visa-ifici-tax` has contextual links in and none out. It is the one topical dead end.

No broken internal URL, redirect, or trailing-slash duplicate was found in the page sources.

## B. Website core topic

Inputs used:

- `src/pages/**/*.astro` for body links, titles, and H1s
- `src/components/Header.astro` and `src/components/Footer.astro` for chrome, counted separately
- `src/data/pages.ts` for the home guide list (`listOnHome`)
- `src/pages/guides/index.astro` for the hub list
- `src/pages/image-credits.astro` for credit links
- `src/data/reviews.ts` for noindex
- `vercel.json` for redirects and trailing slash

Core topic: the Portuguese residence route for highly qualified activity, articles 61 and 90 of Lei 23/2007, and the private packages sold around it.

Primary entity: the highly qualified activity residence route.

Audience: high-net-worth investors and families deciding whether to buy a package.

Search objective: understand the legal route, the private price, the family and presence rules, and the time to permanent residence and citizenship before spending money.

This website primarily helps high-net-worth investors and families decide whether to buy a private package through information about Portugal's highly qualified activity residence route.

## C. Topical cluster map

Level 1, core: the route itself (articles 61 and 90) and the private package.

Level 2, clusters:

- What the route is, and what the package buys
- Cost and who qualifies
- Family and living in Portugal
- Citizenship and tax
- Comparisons with other routes
- How this site checks facts, and whether the law has changed

Level 3, subtopics: Americans, permanent residence, the StartUP Visa and Tech Visa comparison, due diligence questions.

Level 4, supporting detail: source labels, the "what we don't know yet" boxes, the checklist, image credits.

Pages that do not carry the core topic: `/about`, `/contact`, `/consultation`, `/methodology`, `/image-credits`, and the `/guides` catalog. They support the site. They are not a cluster.

## Indexable working set

Measured in source. 21 indexable URLs. `/privacy` and `/terms` are noindex while their review dates in `src/data/reviews.ts` are null. `/styleguide` is always noindex. Footer links to privacy and terms are fine. Styleguide is not in the header, footer, or guide lists.

`vercel.json` sets `trailingSlash: false` and has no redirect list. No body href uses a trailing slash, a query string, or a path that does not match a page file. No contextual link points at a noindex page.

Live indexing, canonical conflicts in Google, and redirect chains on the public host are Unknown. There is no Search Console data. This pass did not fetch the live site.

Indexable URLs: `/`, `/guides`, `/guides/what-is-hqa-visa`, `/portugal-hqa-visa-investment`, `/hqa-visa-due-diligence`, `/hqa-visa-cost`, `/hqa-visa-requirements`, `/hqa-visa-for-americans`, `/hqa-visa-family`, `/guides/hqa-visa-presence-requirements`, `/guides/hqa-visa-permanent-residency`, `/guides/hqa-visa-citizenship-10-year-rule`, `/guides/hqa-visa-ifici-tax`, `/portugal-hqa-vs-golden-visa`, `/hqa-vs-startup-visa-tech-visa`, `/hqa-visa-status`, `/methodology`, `/about`, `/contact`, `/consultation`, `/image-credits`.

## Page inventory

Crawl depth is from the home page using every rendered link, including the header and footer. It is 0 for `/` and 1 for every other indexable page. In and Out are unique contextual targets, excluding header, footer, breadcrumbs, lead-magnet bands, mailto, and same-page anchors.

The commercial next step already on the page is the checklist band. That band is chrome, not a contextual link, and this audit does not add more of it. Consultation is an introduction, linked from the header and from contact. Topic pages should not gain a new consultation link.

Entity on every topic page is the highly qualified activity residence route, plus the narrower entity named below.

| URL | Title | H1 | Topic and intent | Type | Parent | In | Out |
|---|---|---|---|---|---|---|---|
| `/` | Portugal HQA Visa - Independent Guide | Portugal HQA Visa: An Independent, Verified Guide | Overview. Informational. | WebPage | none | 1 | 15 |
| `/guides/what-is-hqa-visa` | What Is the HQA Visa - The Legal Basis in Plain English | What Is the HQA Visa? The Legal Basis in Plain English | Articles 61 and 90. Informational. | Article | `/` | 3 | 5 |
| `/portugal-hqa-visa-investment` | Portugal HQA Visa Investment - What €175,000 Buys | Portugal HQA Visa Investment: What €175,000 Actually Buys | What a package buys. Commercial investigation. | Article | `/` | 6 | 8 |
| `/hqa-visa-cost` | HQA Visa Portugal Cost - The Full 2026 Breakdown | HQA Visa Portugal Cost: The Full Breakdown | Package price and fees. Commercial investigation. | Article | investment | 8 | 2 |
| `/guides/hqa-visa-citizenship-10-year-rule` | HQA Visa Citizenship - The 10-Year Rule Explained | HQA Visa Citizenship: The 10-Year Rule Explained | 10-year and 7-year citizenship. Informational. | Article | `/guides` | 11 | 1 |
| `/hqa-visa-requirements` | HQA Visa Portugal Requirements - Who Qualifies | HQA Visa Portugal Requirements: Who Qualifies | Who qualifies. Informational. | Article | what-is | 5 | 3 |
| `/hqa-visa-family` | HQA Visa Family - Spouse, Children and Parents | HQA Visa Family: Spouse, Children and Parents | Who can join, and when. Informational. | Article | requirements | 7 | 3 |
| `/guides/hqa-visa-presence-requirements` | HQA Visa Minimum Stay - How Long You Must Live in Portugal | HQA Visa Minimum Stay: How Long You Must Live in Portugal | Absence limits. Informational. | Article | `/guides` | 7 | 3 |
| `/guides/hqa-visa-ifici-tax` | HQA Visa IFICI Tax - Who Actually Qualifies | HQA Visa IFICI Tax: Who Actually Qualifies | IFICI, not automatic. Informational. | Article | `/guides` | 6 | 0 |
| `/portugal-hqa-vs-golden-visa` | Portugal HQA vs Golden Visa - Cost, Stay and Citizenship | Portugal HQA vs Golden Visa: Cost, Stay and Citizenship | HQA against Golden Visa. Comparison. | Article | investment | 8 | 5 |
| `/hqa-visa-due-diligence` | Is the HQA Visa Legit - A Due Diligence Guide | Is the HQA Visa Legit? A Due Diligence Guide | How to test a provider. Informational. | Article | investment | 5 | 2 |
| `/hqa-visa-status` | Is the HQA Visa Still Available - Status and Law Changes | Is the HQA Visa Still Available? Status and Law Changes | Whether the route is open. Informational. | Article | `/` | 3 | 2 |
| `/hqa-visa-for-americans` | Portugal HQA Visa for Americans - What US Investors Should Know | Portugal HQA Visa for Americans: What US Investors Should Know | US tax and reporting. Informational. | Article | requirements | 2 | 4 |
| `/hqa-vs-startup-visa-tech-visa` | HQA vs Startup Visa Portugal - And the Tech Visa | HQA vs Startup Visa Portugal: And the Tech Visa | Article 90 against article 89 and Tech Visa. Comparison. | Article | what-is | 2 | 4 |
| `/guides/hqa-visa-permanent-residency` | HQA Visa Permanent Residency - What Changes After 5 Years | HQA Visa Permanent Residency: What Changes After 5 Years | After 5 years. Informational. | Article | `/guides` | 2 | 1 |
| `/guides` | HQA Visa Guides - Independent, Verified Answers | HQA Visa Guides: Independent, Verified Answers | Catalog of the 14 guides. Navigational. | CollectionPage | `/` | 0 | 14 |
| `/methodology` | How We Verify HQA Visa Information - Methodology | Methodology: How We Verify HQA Visa Information | How facts are checked. Informational. | WebPage | `/` | 2 | 1 |
| `/about` | About Portugal HQA Citizenship - Independent Information | About Portugal HQA Citizenship: Independent Information | Independence. Informational. | WebPage | `/` | 0 | 2 |
| `/contact` | Contact Portugal HQA Citizenship | Contact Portugal HQA Citizenship | How to write to the site. Navigational. | WebPage | `/` | 1 | 1 |
| `/consultation` | HQA Visa Consultation - Request a Private Introduction | HQA Visa Consultation: Request a Private Introduction | Request an introduction. Transactional. | WebPage | contact | 1 | 1 |
| `/image-credits` | Image Credits | Image Credits | Photo sources. Utility. | WebPage | `/` | 0 | 6 |

Siblings and children, so the table stays readable:

- `/` children: the 14 home-listed guides, plus methodology in the body. Header children also include `/guides`, about, and consultation. Footer children include contact, status, methodology, and image credits.
- What-is siblings: investment and due diligence (the "start here" group). Children in the body: family, Golden Visa, investment, cost, due diligence.
- Investment siblings: what-is, cost, requirements. Body children: cost, family, requirements, presence, citizenship, IFICI, Golden Visa, due diligence.
- Cost siblings: investment and IFICI. Body children: investment, Golden Visa.
- Citizenship siblings: presence and permanent residence. Body child: Golden Visa only.
- Requirements siblings: family and Americans. Body children: investment, Golden Visa, presence.
- Family siblings: requirements and presence. Body children: cost, presence, citizenship.
- Presence siblings: permanent residence and citizenship. Body children: citizenship, Golden Visa, IFICI.
- IFICI siblings: citizenship. Body children: none.
- Golden Visa siblings: the StartUP comparison. Body children: cost, presence, family, citizenship, IFICI.
- Due diligence siblings: investment and what-is. Body children: cost, citizenship.
- Status siblings: none in a topic cluster. Body children: family, citizenship.
- Americans siblings: requirements and family. Body children: citizenship, requirements, IFICI, presence.
- StartUP comparison siblings: Golden Visa and what-is. Body children: family, cost, citizenship, what-is.
- Permanent residence siblings: citizenship and presence. Body child: citizenship.
- `/guides` children: the same 14 guides as the home list, grouped. No other body links.
- Methodology body child: status. About body children: methodology, contact. Contact body child: consultation. Consultation body child: due diligence.
- Image credits body children: `/`, investment, citizenship, Golden Visa, family, requirements. Those are credit attributions, not editorial recommendations.

## D. Core/pillar page report

Tier 1, the pages a decision depends on:

- `/`, overview
- `/guides/what-is-hqa-visa`, legal definition
- `/portugal-hqa-visa-investment`, what the package is
- `/hqa-visa-cost`, what the money adds up to
- `/guides/hqa-visa-citizenship-10-year-rule`, how long the route takes

Tier 2, important support: requirements, family, presence, IFICI, Golden Visa comparison, due diligence, status.

Tier 3, long-tail: Americans, permanent residence, StartUP Visa and Tech Visa comparison.

Tier 4, peripheral: `/guides`, methodology, about, contact, consultation, image credits.

Tier 3 pages already point upward. Americans links requirements, citizenship, IFICI, and presence. The StartUP comparison links the definition, family, cost, and citizenship. Permanent residence links citizenship. The missing support is the other way: Tier 1 and Tier 2 pages that mention a Tier 3 topic and do not link it.

## E. Orphan and low-inbound report

Contextual inbound means a link in another indexable page's body, including the home guide list and the `/guides` list. Header, footer, breadcrumbs, and lead-magnet bands are excluded.

Crawl depth using every link on the home page, including the header and footer: 0 for `/`, and 1 for every other indexable page. Measured from the home template.

| URL | Contextual inbound | Contextual outbound | Note |
|---|---|---|---|
| `/` | 1 | 15 | The one inbound link is an image credit. The wordmark is chrome. |
| `/guides` | 0 | 14 | Header only. The home list links the guides, not the hub. |
| `/guides/what-is-hqa-visa` | 3 | 5 | |
| `/portugal-hqa-visa-investment` | 6 | 8 | |
| `/hqa-visa-due-diligence` | 5 | 2 | |
| `/hqa-visa-cost` | 8 | 2 | |
| `/hqa-visa-requirements` | 5 | 3 | |
| `/hqa-visa-for-americans` | 2 | 4 | Home list and `/guides` only. |
| `/hqa-visa-family` | 7 | 3 | |
| `/guides/hqa-visa-presence-requirements` | 7 | 3 | |
| `/guides/hqa-visa-permanent-residency` | 2 | 1 | Home list and `/guides` only. |
| `/guides/hqa-visa-citizenship-10-year-rule` | 11 | 1 | |
| `/guides/hqa-visa-ifici-tax` | 6 | 0 | Dead end. |
| `/portugal-hqa-vs-golden-visa` | 8 | 5 | |
| `/hqa-vs-startup-visa-tech-visa` | 2 | 4 | Home list and `/guides` only. |
| `/hqa-visa-status` | 3 | 2 | |
| `/methodology` | 2 | 1 | Home body and about. Footer also links it. |
| `/about` | 0 | 2 | Header only. |
| `/contact` | 1 | 1 | From about. Footer also links it. |
| `/consultation` | 1 | 1 | From contact. Header also links it. |
| `/image-credits` | 0 | 6 | Footer only. Terms links it, and terms is noindex. |

Contextual orphans (0 inbound): `/guides`, `/about`, `/image-credits`.

1 to 2 contextual inbound links: `/`, `/contact`, `/consultation`, `/methodology`, Americans, permanent residence, StartUP comparison.

3 to 4: what-is (3), status (3).

## F. Existing link problems

Measured. No broken internal target. Every body path matches an existing page. `vercel.json` has no redirect list. Internal hrefs have no trailing slash and no query string. `/privacy` and `/terms` are noindex while their review dates are null. Footer links to them are appropriate. `/styleguide` is noindex and is not in the header, footer, or guide lists.

Problems that are real, and not worth a wave of edits:

- IFICI sends the reader nowhere in the body.
- The exact button text "Presence rules" is used on requirements, family, and Americans. Investment uses the near variant "Presence rules explained". "Portugal HQA vs Golden Visa" is the button on requirements, what-is, presence, cost, and citizenship. "citizenship guide" is the anchor on the Golden Visa comparison, due diligence, family, presence, Americans, the StartUP comparison, and status. Repeated, not wrong.
- The home FAQ answers "Can I bring my family?" and "Do I need to live in Portugal?" without a link in the answer. The guide list on the same page already links the family and presence pages. A second link on the same page would be redundant.
- The Golden Visa comparison uses short anchors ("cost page", "presence page", "family page"). They are clear in that paragraph. Do not rewrite them now.
- Home links methodology twice, once under the sources and once near the end. Both are relevant. Leave both.
- What-is names the D7 visa and has no D7 page. Do not invent one.

## G. Prioritized opportunities

Score method, used for every row. Seven factors, each 0 to 5: topical relevance, reader value, click potential, target importance, source strength, architecture value, implementation fit. Opportunity score = the sum divided by 7, minus penalties, shown to one decimal. Penalty of 1 if the source already links to the target. No row below has that penalty.

Topical relationship score is 0 to 10. Distance is 0 to 4. A topical score below 6 is not recommended. Click potential in the table is the editorial label. The numeric click factor inside the score uses Very High 5, High 4, Moderate 3, Low 2.

HIGH means topical score at least 8 and opportunity score at least 4.0.

| ID | Priority | Source | Target | Cluster | Relationship | Topical Score | Placement | Anchor | Change Type | Opportunity Score | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|---|
| L1 | HIGH | `/guides/hqa-visa-citizenship-10-year-rule` | `/guides/hqa-visa-permanent-residency` | Citizenship and living | Comparison | 9 (distance 1) | Timeline, after the year table | Permanent residence | ADD | 4.7 | High |
| L2 | HIGH | `/hqa-visa-status` | `/guides/hqa-visa-presence-requirements` | Updates to living | Problem to the rule | 9 (distance 1) | What we are waiting for | absence limits in the law | ADD | 4.3 | High |
| L3 | HIGH | `/guides/hqa-visa-ifici-tax` | `/portugal-hqa-visa-investment` | Tax to the package | Prerequisite | 8 (distance 2) | How this works with an HQA package | HQA investment package | ADD | 4.3 | High |
| L4 | HIGH | `/hqa-visa-requirements` | `/hqa-visa-family` | Eligibility to family | Requirement to detail | 9 (distance 1) | What we don't know yet | family rules | ADD | 4.1 | High |
| L5 | HIGH | `/guides/what-is-hqa-visa` | `/hqa-vs-startup-visa-tech-visa` | Definition to comparison | Deeper comparison | 9 (distance 1) | Related routes | HQA, the StartUP Visa and the Tech Visa | ADD | 4.0 | High |

Click labels: L1 High, L2 High, L3 Moderate, L4 High, L5 Moderate.

## H. Exact recommendations

### L1

Source: `/guides/hqa-visa-citizenship-10-year-rule`

Target: `/guides/hqa-visa-permanent-residency`

Why: The citizenship page says permanent residence is not citizenship, and the permanent-residence page has no contextual inbound link except the home list and the guides hub. The reader who hits that sentence is asking what permanent residence changes.

Placement: heading "Your timeline on the HQA route", the paragraph after the year table.

Current excerpt: "Permanent residence after 5 years lets you stop renewing a temporary permit. It does not shorten the 10-year wait for citizenship."

Anchor: Permanent residence

Proposed sentence: [Permanent residence](/guides/hqa-visa-permanent-residency) after 5 years lets you stop renewing a temporary permit. It does not shorten the 10-year wait for citizenship.

### L2

Source: `/hqa-visa-status`

Target: `/guides/hqa-visa-presence-requirements`

Why: Status says official guidance on "no minimum stay" claims was not found. The presence page is where the 6-month and 8-month limits are explained. Do not use the anchor "Presence rules". That phrase is already on four pages.

Placement: heading "What we are waiting for", the third item.

Current excerpt: "Clear guidance on presence for package holders. We have not found official guidance on "no minimum stay" claims."

Anchor: absence limits in the law

Proposed sentence: **Clear guidance on presence for package holders.** We have not found official guidance on "no minimum stay" claims. The [absence limits in the law](/guides/hqa-visa-presence-requirements) are explained separately.

### L3

Source: `/guides/hqa-visa-ifici-tax`

Target: `/portugal-hqa-visa-investment`

Why: This is the only long guide with no outbound body link. The package section already says a package may create a role that can qualify. The investment page explains that package and already links here. One link back, at that sentence, is enough. Do not also link the consultation page.

Placement: heading "How this works with an HQA package", first sentence.

Current excerpt: "An HQA package can put you in a position to qualify, for example through a role in a certified startup or certified research work."

Anchor: HQA investment package

Proposed sentence: An [HQA investment package](/portugal-hqa-visa-investment) can put you in a position to qualify, for example through a role in a certified startup or certified research work.

### L4

Source: `/hqa-visa-requirements`

Target: `/hqa-visa-family`

Why: The page says the choice of article 90 or article 89 changes the family rules, and then does not link the family page. What-is already links family from a similar point. This page still leaves the reader without that link.

Placement: "What we don't know yet" box, after the heading "Who this route suits", the paragraph that starts "The legal article your file uses."

Current excerpt: "Some packages may file under article 90, others under article 89 (StartUP Visa). The answer changes the rules for your family."

Anchor: family rules

Proposed sentence: Some packages may file under article 90, others under article 89 (StartUP Visa). The answer changes the [family rules](/hqa-visa-family).

### L5

Source: `/guides/what-is-hqa-visa`

Target: `/hqa-vs-startup-visa-tech-visa`

Why: The related-routes table names the Tech Visa, the StartUP Visa, and the Golden Visa. The next links cover family and the Golden Visa only. The StartUP comparison is the page that holds the three-way difference, and it currently has no contextual inbound link except the home list and the hub.

Placement: heading "Related routes that are often confused with HQA", after the table and after the article 89 family sentence. Do not remove the family or Golden Visa links.

Current excerpt: "The difference matters. Families of article 90 permit holders are exempt from the 2-year family reunification wait. Families of article 89 (StartUP Visa) holders are not."

Anchor: HQA, the StartUP Visa and the Tech Visa

Proposed sentence, added after that paragraph: The fuller comparison of [HQA, the StartUP Visa and the Tech Visa](/hqa-vs-startup-visa-tech-visa) is separate from the Golden Visa comparison.

## I. Topical focus problems

No page is competing for the same question. Home introduces the route, what-is defines it, investment explains the package, and cost lists the money. That split is sound.

IFICI is focused and then stops. A reader who wants the package explained has to use the header or the back button.

Americans is an audience page with only catalog links pointing at it. That is acceptable. Do not pull US tax into pages that are not about Americans.

The D7 mention on what-is is a one-line distinction, not a missing cluster.

## J. Cross-cluster review

Strongly justified:

- IFICI to the investment page, because that section is about the package.
- Status to presence, because the open question is the presence claim.
- Citizenship to permanent residence, because the timeline already separates the two.
- What-is to the StartUP comparison, because the table already names those routes.
- Requirements to family, because the sentence is about the family consequence of the article.

Reasonable, not recommended:

- Cost to family, for the €2,500 to €5,000 line. The number is already on the cost page. The legal rule is better linked from requirements, which is L4.
- Due diligence question 3 ("Will my family be exempt from the 2-year family reunification wait?") to the family page. Topical score 9, distance 1. Opportunity about 3.9. The page already links citizenship beside the "citizenship in 5 years" claim, so the pattern is real, but the reader is mid-checklist and the family page already has 7 contextual inbound links. L4 covers the rule from the page that states it.
- Due diligence question 12 and the "no minimum stay" red flag to the presence page. Topical score 9, distance 1. Opportunity about 3.9. L2 is the better source, because status is where the site says the official guidance was not found.
- The family page's line that StartUP Visa holders are not exempt, to the StartUP comparison. Topical score 8. L5 is the better source, from the table that already names the three routes.
- The investment timeline cell "Renewal and permanent residence option" at year 5, to the permanent-residence page. Topical score 8. A table cell is a weak place for a new sentence. L1 uses the paragraph that already explains the difference.

Weak: any new link from investment or cost to consultation. The reader is still learning. Contact already points at consultation.

Unnecessary: home to `/guides`. The home list already links each guide. A hub link would not answer a new question.

## K. Rejected opportunities

| Idea | Why it was rejected |
|---|---|
| Link Americans from investment, cost, or IFICI | Those pages do not discuss US tax. Audience is not a reason. Topical score would be under 6. |
| Link `/guides` from home or from each guide | The hub is a catalog. Home already lists the guides. Fixing a contextual orphan is not a reason. |
| Link about or image credits from topic pages | Peripheral. Topical score under 6. |
| Add consultation links on investment, cost, or due diligence | Commercial path. Contact and the header already offer it. Too heavy for this site. |
| Cost page to family | Reasonable, topical score about 7. L4 covers the family rule from the better sentence. Opportunity would sit near 3.7. |
| Due diligence to family, or due diligence to presence | Topical score 9 on both. Opportunity about 3.9, because click potential from inside a 15-question list is Moderate and both targets are already well linked. See section J. |
| Family page to the StartUP comparison | The exemption line is real. L5 is the comparison source. Opportunity under 4.0. |
| Investment year-5 cell to permanent residence | The cell names the option. L1 is the paragraph that explains it. Do not link from a table cell. |
| Requirements to what-is | The requirements page already states articles 61 and 90. A definition link would not answer a new question. |
| Requirements to the StartUP comparison | The sentence's point is the family consequence, so L4 is the better target. What-is is the better source for L5. |
| Citizenship to status | Status does not answer the citizenship rules. The citizenship page is the owner. |
| Permanent residence to status | The status log is not needed to understand the 5-year rule. |
| Change the repeated "Presence rules" anchors now | True repetition. Low reader gain, and each change needs a lawyer re-read. Leave for a later pass. |
| A D7 page, or a link to one | No page exists. Do not create one for a single table row. |

## L. Recommended implementation order

Batch 1, broken links: none.

Batch 2, orphans: no new links. `/guides`, `/about`, and `/image-credits` should stay on the header or footer only.

Batch 3, pillar links: L3, IFICI to the investment page.

Batch 4, cluster links: L2 status to presence, L4 requirements to family, L5 what-is to the StartUP comparison.

Batch 5, long-tail up to a parent: already done. Permanent residence links citizenship. Americans and the StartUP comparison already link their parents. L1 is the reverse link that those parents are missing, so do L1 with batch 4.

Batch 6, commercial paths: none.

Batch 7, early placement: do not move these links into the opening paragraph. The right sentence is the one that already states the fact. L5 and L1 sit in the middle of the page. L2 and L4 sit later, inside the open-questions section, which is the honest place.

Batch 8, anchors: no anchor rewrites in this batch.

Batch 9, refinements: only if a later edit touches those sentences anyway, vary "Presence rules" and the short "cost page" labels. Do not open a pass for that alone.

Each accepted link has to be added to the approved copy in `docs/content/` and the matching `.astro` file, then re-read by the lawyer. Five sentences, not a sitewide relink.
