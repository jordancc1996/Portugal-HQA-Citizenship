# Processors

Copied from the 21 October 2026 open checks, sections 3 and 4. The DPA pages were printed on 21 October 2026. See `03-sources/`.

## Formcarry

Company: Teijal, Inc. d/b/a Formcarry, a Delaware corporation.

DPA: https://formcarry.com/legal/data-processing-agreement (last updated 8 November 2025). Print: `03-sources/2026-10-21-formcarry-dpa.pdf`. It is part of the Terms of Service automatically, with nothing to sign. It includes the EU Standard Contractual Clauses (Module 2).

Where data is stored: the DPA and privacy policy say the EU/EEA, with hosting by DigitalOcean in Frankfurt. The DPA's own sub-processor list contradicts this in part:

- AWS (email sending and file storage) is listed as US.
- Akismet (spam filtering) is US.
- PostHog product analytics, in Frankfurt, is always on.

So submission data may reach the US. The open checks say to ask Formcarry at help@formcarry.com.

Own purposes: the DPA says Formcarry processes data only on the customer's instructions and does not sell it. The privacy page now says they process this data on our instructions under their data processing terms.

Autoresponder: called "Respondent Email Notifications". It is available on the Basic, Growth and Premium plans, not on Free or Starter. The form's email field must be named `email`. Custom HTML emails are Growth and Premium only. You cannot attach your own file. The site does not use the autoresponder. It shows a link instead. Docs: https://formcarry.com/docs/features/respondent-email-notifications

Retention contradiction: no automatic deletion after a set number of days is documented. The pricing FAQ says submissions are stored "forever". The privacy page says checklist requests are deleted within 30 days and consultation requests within 6 months. Formcarry has no automatic deletion, so the owner must delete submissions by hand on a schedule, or ask Formcarry about automatic deletion. The retention sentences on the site were not changed for this pack.

## Vercel

Company: Vercel Inc., a Delaware corporation.

The Hobby plan does not allow commercial use: "Hobby teams are restricted to non-commercial personal use only." Source: https://vercel.com/docs/limits/fair-use-guidelines (updated 2026-09-14). A site collecting leads is commercial and needs the Pro plan.

DPA: https://vercel.com/legal/dpa (updated 17 March 2026). Print: `03-sources/2026-10-21-vercel-dpa.pdf`. It covers Pro and Enterprise only and is part of the agreement automatically. It includes the EU SCCs, and Vercel is certified under the EU-U.S. Data Privacy Framework.

Sub-processors: https://security.vercel.com

Visitor data: IP addresses and derived location appear in logs. Runtime logs are kept for 1 hour (Hobby) or 1 day (Pro).

Cookies: no Vercel cookie on a production custom domain without Analytics and without protection is documented. The toolbar and the login cookie apply to preview deployments. The local preview check found no cookie. The open checks say the live site still has to be confirmed.
