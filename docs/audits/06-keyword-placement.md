# Keyword placement

Date: 20 October 2026. Checked the 21 indexable pages. The keyword is `primaryKeyword` in `docs/content/*.md`. Slugs were not changed. H1s and body sentences were not changed.

A slug passes when it contains the keyword's content words. Ignored words: the, is, a, for, of, and, vs, how, we. A miss is reported and left as it is.

No two pages share a primary keyword. No description is copied from another page. No SEO field contains an em dash. No intro starts with "This article will" or "In this guide".

## Fixes

`/methodology` only.

Title, before: Methodology - How We Verify HQA Visa Information
Title, after: How We Verify HQA Visa Information - Methodology

Meta title, before: Methodology - How We Verify HQA Visa Information | Portugal HQA Citizenship
Meta title, after: How We Verify HQA Visa Information - Methodology | Portugal HQA Citizenship

Description, before (154 characters, no number): How we verify HQA visa information: primary Portuguese law first, clear fact labels, independent legal review of every page and no fees from any provider.
Description, after (151 characters): How we verify HQA visa information: 4 source levels, Portuguese law first, clear fact labels, legal review of every page and no fees from any provider.

The 4 source levels are the numbered list already on the page. The H1 and the first sentence were not changed.

## Pages

### `/`

Keyword: portugal hqa visa

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 152 characters. The slug is `/`. It does not contain the keyword. Not changed.

### `/guides`

Keyword: hqa visa guides

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 156 characters. The slug is `/guides`. It contains "guides" and not "hqa" or "visa". Not changed.

### `/guides/what-is-hqa-visa`

Keyword: what is the hqa visa

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 159 characters.

### `/portugal-hqa-visa-investment`

Keyword: portugal hqa visa investment

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 156 characters.

### `/hqa-visa-due-diligence`

Keyword: is the hqa visa legit

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 158 characters. The slug is `/hqa-visa-due-diligence`. It does not contain "legit". Not changed.

### `/hqa-visa-cost`

Keyword: hqa visa portugal cost

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 159 characters. The slug is `/hqa-visa-cost`. It does not contain "portugal". Not changed.

### `/hqa-visa-requirements`

Keyword: hqa visa portugal requirements

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 157 characters. The slug is `/hqa-visa-requirements`. It does not contain "portugal". Not changed.

### `/hqa-visa-for-americans`

Keyword: portugal hqa visa for americans

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 157 characters. The slug is `/hqa-visa-for-americans`. It does not contain "portugal". Not changed.

### `/hqa-visa-family`

Keyword: hqa visa family

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 154 characters.

### `/guides/hqa-visa-presence-requirements`

Keyword: hqa visa minimum stay

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 160 characters. The slug is `/guides/hqa-visa-presence-requirements`. It does not contain "minimum" or "stay". Not changed.

### `/guides/hqa-visa-permanent-residency`

Keyword: hqa visa permanent residency

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 151 characters.

### `/guides/hqa-visa-citizenship-10-year-rule`

Keyword: hqa visa citizenship

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 156 characters.

### `/guides/hqa-visa-ifici-tax`

Keyword: hqa visa ifici

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 151 characters. The title is "HQA Visa IFICI Tax - Who Actually Qualifies". It starts with the keyword. The word Tax sits before the hyphen.

### `/portugal-hqa-vs-golden-visa`

Keyword: portugal hqa vs golden visa

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✓ | ✓ |

Description: 158 characters.

### `/hqa-vs-startup-visa-tech-visa`

Keyword: hqa vs startup visa portugal

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 158 characters. The slug is `/hqa-vs-startup-visa-tech-visa`. It does not contain "portugal". Not changed.

### `/hqa-visa-status`

Keyword: is the hqa visa still available

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 151 characters. The slug is `/hqa-visa-status`. It does not contain "still" or "available". Not changed.

### `/methodology`

Keyword: how we verify hqa visa information

| Title | Meta title | Description | Slug | Intro |
| ✓ | ✓ | ✓ | ✗ | ✓ |

Description: 151 characters, after the fix above. The slug is `/methodology`. It does not contain the keyword. Not changed.

## N/A

These pages are indexable utilities. This check does not assign them a ranking keyword.

| URL | Reason |
|---|---|
| `/about` | Utility page. Not a ranking page. |
| `/contact` | Utility page. Not a ranking page. |
| `/consultation` | Utility page. Not a ranking page. |
| `/image-credits` | Utility page. Not a ranking page. |

`/privacy` and `/terms` are noindex, so they are outside this check.

## Needs lawyer re-read

None. No first sentence was changed.

## Build

- `npm run check`: 0 errors, 0 warnings, 0 hints, 58 files.
- `npm run build`: 24 HTML pages. `test:facts` passed for 21 indexable pages.
