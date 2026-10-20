# Menu fit

Date: 20 October 2026. Menu size and empty-hub links only.

## Link size

Menu links use `font-size: clamp(34px, min(6.2vh, 4.4vw), 56px)`, line-height 1.1, and a 48px minimum height. The old steps (34px, 44px, 56px) are gone.

With all 10 links still stacked, that size puts "Request a consultation" at y = 680 on a 1280 x 720 screen. The button is 60px tall, so it ends at y = 740, past the bottom of the screen. From 1024px the button and the email sit in a right-hand column, bottom-aligned with the last link. Below 1024px they stay under the list.

## Button position

The browser tool was not available, so these positions are the layout math: header offset, 32px padding, the clamp size, 4px gaps, and a 60px button. The open menu currently has 8 links, because Reports and Press are hidden.

| Screen | Where the button sits | Bottom of the button | Inside the screen |
|---|---|---|---|
| 1280 x 720 | Right column, y = 402 | y = 462 | Yes |
| 1280 x 800 | Right column, y = 445 | y = 505 | Yes |
| 1440 x 900 | Right column, y = 500 | y = 560 | Yes |
| 375 x 812 | Under the list, y = 549 | y = 609 | Yes |

When Reports and Press return, the same 1280 x 720 column keeps both buttons above y = 568. The list ends at y = 640.

## Empty hubs

Reports, Press and "Read our reports" use the same check as `noindex`: the content folder has no Markdown files. The built home page menu is Home, Investment, Costs, Requirements, Citizenship, Guides, About, Contact, then the consultation button and the email. The footer is Methodology, Status updates, Image credits, Privacy, Terms, Contact.

No built page has an anchor to `/reports` or `/press`. The hub routes stay noindex.

## Checks

`npm run build` passed: 21 fact checks and 227 headings.
