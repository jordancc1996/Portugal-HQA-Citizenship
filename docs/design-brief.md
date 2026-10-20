# Design Brief: portugalhqacitizenship.com

Date: October 19, 2026
Reference site (one only): **Julia Bell Art Advisory** (juliabellartadvisory.com)

---

## 1. Why this reference

I reviewed all seven sites in the Website Design Inspiration doc. Julia Bell Art Advisory is the best fit:

- **Same business model.** It is an independent advisor that helps wealthy clients and family offices make high-value decisions. That matches our audience exactly.
- **Its positioning is our positioning.** Its homepage says impartiality is its greatest asset. Our site is built on honesty and independence, so the tone carries over directly.
- **Very minimalist.** White page, one serif typeface for almost everything, a single warm cream accent band, few elements per screen.
- **Built for editorial content.** Its "Insights" section shows a date and a "Words by" byline on every article. Our site lives on dated, sourced, fact-checked guides, so this pattern is ideal.
- **Sharp and calm.** Large serif text, black on white, one strong photograph beside the headline. Nothing decorative.

Why not the others:
- Gurr Johns: strong trust story, but heavier (dark navy bands, cookie-banner-heavy, more corporate).
- Edmiston and TWW Yachts: video heroes, red or blue brand colors and a sales tone. Too loud for an honesty-first site.
- Sibyl Colefax and Pelham: interiors portfolios, built around image sliders rather than information.
- Cadell: good independence message, but the layout feels dated.

We take the **structure, restraint and editorial pattern** from Julia Bell. We do not copy its text, logo, photos or custom font.

---

## 2. Layout

Desktop (1440px):
- **Header:** wordmark top-left ("Portugal HQA Citizenship" in Inter 700), one Menu button on the right at every screen size. The button opens a full-screen white menu with the same links. White background, thin bottom rule. No dropdown mega-menus.
- **Hero:** split layout. Left half: H1 with the keyword, a two-sentence honest summary, one primary button. Right half: one sharp, full-height photograph of Portugal. No video, no slider, no overlay text on the photo.
- **Key facts strip** directly under the hero: 4 short facts with sources (for example: "No legal minimum investment", "Citizenship after 10 years of legal residence", "Permit valid 2 years, then 3-year renewals", "Last verified: [date]").
- **Content sections:** full-width bands with equal padding. Paper and cream alternate, and a page has at most one Atlantic band, for the checklist. Text stays in the reading column. Tables use the wide column.
- **Guides list** in the Julia Bell "Insights" style: title, one-line summary, "Last verified" date and author line. No cards, no thumbnails grid clutter.
- **Footer:** Ink background, white text, white links, same container and left edge. The closing band of the page.

Mobile (390px): single column, photo moves under the H1, key facts stack 2x2, full-width button, 20px side padding.

---

## 3. Typography

One serif carries the brand, one sans handles small UI text. Both are free, self-hosted with @fontsource (no Google Fonts call).

| Role | Font | Size (desktop / mobile) | Notes |
|---|---|---|---|
| H1 | Newsreader, 400 | 56px / 36px, line-height 1.1 | Title Case. Tight, sharp, no italics |
| H2 | Newsreader, 400 | 36px / 28px | Sentence case |
| H3 | Newsreader, 500 | 24px / 21px | Sentence case |
| Body | Newsreader, 400 | 19px / 18px, line-height 1.6 | Long-form reading |
| Lead paragraph | Newsreader, 400 | 23px / 20px | First paragraph of each page |
| UI, labels, nav, buttons | Inter, 500 | 14 to 15px, letter-spacing 0.02em | Nav in sentence case, not all caps |
| Small print, dates, sources | Inter, 400 | 13px | Color #4A4A4A |

Rules: no more than these two families. No all-caps headings. No letter-spaced logos. Numbers use tabular figures in tables.

---

## 4. Color

| Token | Hex | Use | Contrast |
|---|---|---|---|
| Paper | #FFFFFF | Page background | |
| Cream | #F7F1E8 | One band per page, form background | |
| Ink | #141414 | Headings and body | 18.4:1 on white |
| Graphite | #4A4A4A | Secondary text, captions, dates | 8.9:1 on white |
| Stone | #6B6B6B | Least important meta text only | 5.3:1 on white, 4.75:1 on cream |
| Rule | #E5DFD6 | Hairlines and table borders | decorative |
| Atlantic | #1F3A68 | The single accent: links, buttons, focus rings, key numbers | 11.3:1 on white |

Why Atlantic blue: it is the deep cobalt of Portuguese azulejo tiles, so the accent itself is a Portugal signal. All text pairs pass WCAG AA.

Rules: one accent only. No gradients, no shadows, no gold, no red. Buttons are solid Atlantic with white text, 4px radius, or a plain underlined text link.

---

## 5. Photography (semantic and sharp)

Every image must show something the section is actually about. Never a generic handshake, laptop or skyline from another country.

| Placement | Subject | Why it is semantic |
|---|---|---|
| Home hero | Lisbon in clean morning light: rooftops of Alfama or Praça do Comércio | Where most applicants live and where AIMA and most incubators are |
| Investment pillar | University of Coimbra or a Portuguese university research lab exterior | The €175K packages fund university R&D work |
| Requirements | Azulejo tile detail, close-up | Quiet Portugal texture behind a dense information page |
| Citizenship guide | Portuguese parliament (Assembleia da República) | The nationality law changed there |
| Process page | A real Portuguese residence card design shown only from official sources, or Lisbon's Avenida da Liberdade | The process ends in Lisbon |
| Family page | Lisbon or Cascais residential street, school-age context | Families relocate to these areas |
| Comparison pages | Simple tables and charts instead of photos | Data explains more than a picture |

Photo rules:
- Real photographs only. Natural light, true color, crisp focus, no heavy filters, no text on images, no AI-generated pictures of real places.
- One photo per screen at most. Many sections have no photo; tables, timelines and diagrams do the work.
- Licensed or commissioned images only. Record the source and license for each.
- WebP at quality 82 to 85, never upscaled, descriptive filenames (for example `lisbon-alfama-morning-light.webp`), accurate alt text. No lazy loading (your image standard).

Information graphics (same Atlantic and graphite colors, thin lines):
- 10-year citizenship timeline (year 0 to year 10, permanent residence option at year 5)
- All-in cost breakdown table
- HQA package vs Golden Visa comparison table
- Process diagram: provider and certification, consulate, AIMA, residence card, renewals

---

## 6. High-trust signals

These replace the logos, awards and testimonials that sales-driven competitors use. Every one is true and checkable.

1. **"Last verified" date** at the top of every page, plus a short changelog of what changed.
2. **Primary-law citations** next to claims, linking to Diário da República and official sites.
3. **Independence statement** in the footer and on About: whether we take referral fees or commissions, stated plainly.
4. **Plain-language disclaimer** near the top of key pages, not hidden: informational only, not legal or tax advice.
5. **Methodology page:** how we research, which sources we trust, how we label facts (confirmed, reported, unverified).
6. **Honest "what we don't know yet" box** on pages where the law is unclear (for example, when the citizenship clock starts).
7. **Legal review line** on every page: "Reviewed by [name], Portuguese lawyer, Ordem dos Advogados no. [number], on [date]." A Portuguese lawyer reviews every page (confirmed). Show only the reviewer's real details and real review dates.
8. **Status tracker page** with dated updates on the law, AIMA backlogs and fees.
9. **Real contact details** (company name, address, email) in the footer.
10. **No hype:** no countdown timers, no "limited spots", no "guaranteed approval", no stock testimonials, no HQA® or HQA™ marks.

---

## 7. Lead capture (minimal, high-trust)

- **Primary offer:** "HQA Due Diligence Checklist (2026)" PDF in the cream band. Fields: name, email. One unchecked privacy consent checkbox.
- **High-intent offer:** "Request a private consultation" page. Fields: name, email, phone (optional), LinkedIn profile URL (required, validated), country of citizenship, timeframe, short message. Separate consent boxes as your Privacy prompt requires.
- **Formcarry** for both. Success message shown only after Formcarry confirms receipt.
- **Mid-article offer** placed before the H2 nearest the middle of long guides, styled as a quiet cream block, not a popup. No exit-intent popups.

---

## 8. Components list for Cursor

Header, Footer, Hero (split), KeyFacts strip, LastVerified line, SourceNote (inline citation), Disclaimer, UnknownsBox, Timeline graphic, CostTable, ComparisonTable, FAQ (accordion that works without JS), GuideList, LeadMagnetBand, ConsultationForm, Breadcrumbs.

Styling rules for all components: hairline rules instead of boxes, no shadows, no rounded cards, 4px radius maximum on buttons and inputs, visible focus states in Atlantic.

---

## 9. What we need from you

1. Approve the reference (Julia Bell Art Advisory), palette, fonts and photo plan.
2. Confirm the independence statement: do you take referral fees or commissions from any provider?
3. Real footer details: company name, address, contact email.
4. Lawyer's name, Ordem dos Advogados number and how they want to be credited (a Portuguese lawyer reviews every page: confirmed).
5. Photos: Unsplash (confirmed). Record photographer and photo URL for every image, and credit photographers on an Image credits page.

Note: this is a ranking micro site. Keep it lean: the 16 launch pages, no extra features.
