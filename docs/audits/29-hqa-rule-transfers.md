# HQA rule and data transfers

Date: 21 October 2026. Source: `docs/legal/open-checks-2026-10-21.md`, sections 1, 3 and 4.

## HQA rule

AGENTS.md now says "HQA" means highly qualified activity, that it is a plain description of the permit under Lei 23/2007, article 90, and that it belongs to no one. The rule forbids a trademark symbol after "HQA" or "Portugal HQA Citizenship".

Search of `src/`, `docs/content/` and `public/` for ™, ®, `&trade;` and `&reg;` in text files:

| File | Hit | Decision |
|---|---|---|
| `docs/content/what-is-hqa-visa.md` | FAQ question: Does "HQA®" mean a company owns the route? | Kept. This is the allowed quotation of how some companies market the route. |
| `src/pages/guides/what-is-hqa-visa.astro` | The same FAQ question, including the JSON-LD string. | Kept. |

No other text file contains those marks. `public/` had none. Image files were not treated as copy.

## Privacy

`/privacy` still says Formcarry receives the submissions and Vercel hosts the website, and now adds that they process this data on our instructions under their data processing terms.

A new section, "Transfers outside Europe", states that both companies are based in the United States, that Formcarry stores submissions in the European Union while some of its providers (email delivery and spam filtering) are in the United States, that Vercel may process an IP address in the United States, and that both sets of terms include the EU Standard Contractual Clauses, with Vercel also certified under the EU-U.S. Data Privacy Framework.

The retention sentences are unchanged. The page stays noindex. Section bands still alternate cream and paper. "Europe" is on the heading-check exception list so the H2 keeps the proper noun.
