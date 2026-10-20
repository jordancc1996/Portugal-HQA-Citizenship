# Photos and photo breaks

Date: 20 October 2026. Nine Unsplash License photographs taken in Portugal. No other photo was added.

## Source files

Each file was downloaded from `https://images.unsplash.com/{id}?w=2400&q=90&fm=jpg`, saved as WebP at quality 82, and capped at 2400px wide. None was enlarged. The temporary JPGs were deleted. There is no JPG left in `src/assets/images/`.

| File | Pixels | Master |
|---|---|---|
| `lisbon-25-de-abril-bridge.webp` | 2400×1749 | 719 KB |
| `lisbon-gare-do-oriente.webp` | 2400×1600 | 536 KB |
| `champalimaud-foundation-lisbon.webp` | 2400×3600 | 1064 KB |
| `torre-do-tombo-reading-room.webp` | 2400×1600 | 269 KB |
| `lisbon-tiled-residential-building.webp` | 2400×1603 | 605 KB |
| `lisbon-parque-das-nacoes.webp` | 2400×3200 | 654 KB |
| `lisbon-praca-do-comercio-tagus.webp` | 2400×3600 | 710 KB |
| `lisbon-hilltop-view.webp` | 2400×1600 | 654 KB |
| `lisbon-sunset-from-hill.webp` | 2400×1600 | 244 KB |

`lisbon-alfama-rooftops.webp` was already on the site. It is the home hero and the citizenship photo break. It was not downloaded again.

## Largest file in each srcset

Heroes use the same Photo settings as the other heroes: max width 960, quality 82, `loading="eager"`, `fetchpriority="high"`. The component also emits wider copies, up to 1920px, for sharp screens. Photo breaks use quality 80 and a 1600px cap, so they do not emit a 1920px copy.

| Photo | Largest served WebP |
|---|---|
| 25 de Abril Bridge | 368 KB |
| Gare do Oriente | 260 KB |
| Champalimaud Foundation | 381 KB |
| Torre do Tombo | 133 KB |
| Tiled residential building | 368 KB |
| Parque das Nações | 389 KB |
| Praça do Comércio | 408 KB |
| Hilltop view | 382 KB |
| Sunset from a hill | 120 KB |

Praça do Comércio is the only one over 400 KB, by 8 KB, at the required quality of 82. The sunset photo break stops at 1600px and quality 80, so its largest file is 120 KB.

No page source and no built HTML contains `loading="lazy"`.

## Pages

Eight pages moved from PageIntro to PageHero. The H1, lead, breadcrumbs, actions and Last verified line are unchanged. Each Open Graph image is a 1200×630 JPG made from that page's new hero.

- `/hqa-visa-for-americans`
- `/guides/hqa-visa-presence-requirements`
- `/guides/what-is-hqa-visa`
- `/hqa-visa-due-diligence`
- `/guides/hqa-visa-permanent-residency`
- `/hqa-vs-startup-visa-tech-visa`
- `/guides/hqa-visa-ifici-tax`
- `/guides`

`PhotoBreak` is a paper band. The photo sits in `.container .wide`, at 4/3 below 1024px and 21/9 from 1024px, with `object-fit: cover`. The caption is Inter 13px in graphite. A page has at most one.

Home: the sunset photo sits after "What the €175,000 packages are" and before "The honest timeline". Caption: "Lisbon at sunset."

Citizenship guide: the Alfama rooftops photo sits after "Your timeline on the HQA route" and before "What we don't know yet". Caption: "Most applicants now need 10 years of legal residence for a Portuguese passport (7 for EU and CPLP nationals)."

The bands after each photo break were retoned so two paper bands are not next to each other.

Home: paper hero, cream key facts, paper "What the HQA visa actually is", cream "What the €175,000 packages are", paper photo break, cream "The honest timeline", paper "Who this route suits, and who it does not", cream "HQA packages and the Golden Visa", Atlantic checklist, paper Guides, cream "How we work", paper frequently asked questions.

Citizenship: paper hero, cream key facts, paper "What changed", cream "Your timeline on the HQA route", paper photo break, cream "What we don't know yet", paper "The other requirements for citizenship", cream "How the law got here", paper "Does the Golden Visa get you citizenship faster?", Atlantic checklist, paper frequently asked questions, cream disclaimer.

These pages stay text only: `/hqa-visa-status`, `/hqa-visa-cost`, `/methodology`, `/about`, `/contact`, `/consultation`, `/image-credits`, `/privacy`, `/terms`.

## Credits and copy

All nine new photos are in `src/data/image-credits.ts` and in the photo table in `docs/design-brief.md`. Alfama is listed a second time for the citizenship photo break. `/image-credits` lists every one.

The two captions are in `docs/content/home.md`, `docs/content/hqa-visa-citizenship-10-year-rule.md` and `docs/lawyer-review-queue.md`.

## Checks

`npm run build` passed. Fact checks passed for 21 indexable pages. Heading checks passed for 220 headings.

Markdown changed only in `index.md`, `guides/hqa-visa-citizenship-10-year-rule.md` and `image-credits.md`. Every `ld+json` block is byte-for-byte the same as before this change.

The browser tool was not available, so this was checked from the built HTML: each new hero has `loading="eager"` and `fetchpriority="high"`, each photo break caption is present and sits after the first H2, and the Open Graph image on each of the eight pages is that page's new photograph.
