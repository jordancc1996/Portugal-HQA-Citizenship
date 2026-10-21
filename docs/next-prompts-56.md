# Next prompt: 56

## Prompt 56: Menu fits the screen, and hide Reports and Press until they have content

```
Context: read AGENTS.md, src/components/Header.astro, src/components/Footer.astro and docs/audits/24-menu.md and 25-reports-press.md first. Small fixes only. Save a short report to docs/audits/26-menu-fit.md.

Claude checked the open menu at 1280 x 800. It looks right (cream panel, logo top-left, Close top-right, big serif links on the left edge), but two things need fixing:

1. The two buttons sit below the fold. With 10 links at 56px (62px per line) the buttons start at y = 805 on an 800px-tall screen, so "Request a consultation" is not visible without scrolling. Fix: size the links by screen height as well as width, for example font-size: clamp(34px, min(6.2vh, 4.4vw), 56px), keep line-height 1.1 and the 48px minimum tap height. Confirm the buttons are fully visible without scrolling at 1280 x 720, 1280 x 800, 1440 x 900 and 375 x 812. If they still are not at 1280 x 720, place the buttons and email in a right-hand column from 1024px, bottom-aligned with the last link, instead of under the list.
2. Reports and Press are now linked from the menu, the "Read our reports" button and the footer, but both hubs are empty and noindex, so every page links visitors to an empty page. Use the same check that decides noindex for those hubs (the content collection has no published items): while a hub is empty, hide its menu item, its footer link and, for Reports, the "Read our reports" button. They reappear automatically on the build after the first item is published. The hub routes themselves stay as they are (noindex).
QA: npm run build (all checks pass). Report the button positions at the four screen sizes and confirm no page links to /reports or /press while the collections are empty. Add a CHANGELOG entry. Commit "Menu fits the screen".
```

---

