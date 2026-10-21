# Cursor Prompts: portugalhqacitizenship.com

This file only holds the prompts you have NOT run yet. Paste them in order.
Finished prompts move to docs/prompts-done.md.

Do not save this file from Cursor. If it looks out of date, close the tab and reopen it.

---

## Status: waiting for the lawyer's review

Production stays locked until every indexable page has a real review date in src/data/reviews.ts. Next session starts from the lawyer's reply.

---

## Prompt 57: Commit the project notes and push (skip if already done)

```
Commit the five files that are not in Git yet: docs/cursor-prompts.md, docs/prompts-done.md, docs/brand/ (the four logo option images), docs/next-prompts-52-55.md and docs/next-prompts-56.md.
1. Delete docs/next-prompts-52-55.md and docs/next-prompts-56.md first. Their prompts are already archived in docs/prompts-done.md.
2. Run git status and confirm .env is NOT listed and nothing under node_modules or dist is staged.
3. Commit with the message "Project notes and logo references" and push to origin main. Then run git checkout staging, git merge main, git push, git checkout main so staging stays in step.
4. Show git log --oneline -3 and git status (it should be clean).
Do not change any other file.
```

---

## Owner tasks

Done:
- hello@portugalhqacitizenship.com inbox
- Formcarry forms (checklist: https://formcarry.com/s/udkvAS-hBVy, consultation: https://formcarry.com/s/8ht8txeHTKq)
- Code on GitHub (main and staging at 3e45e98, Node pinned to 22.x)
- Vercel project imported (production locked until review dates exist)
- Formcarry variables in Vercel (Config, Production and Preview), staging redeployed

Now:
1. Send docs/lawyer-pack.md and docs/lawyer-review-queue.md to the lawyer.

When the lawyer replies, bring Claude:
- the review date (or dates) for each page, plus /privacy and /terms if approved
- any sentence the lawyer wants changed
- answers to the open questions in docs/lawyer-pack.md (data controller wording, retention periods, selling leads, CPLP language presumption, and the rest)

Claude will then write one prompt that applies the changes and the dates, merges to main, and lets the production build go through.

Before launch (any time):
- Turn on Formcarry email notifications to hello@portugalhqacitizenship.com for both forms.
- Optional: send Claude the staging preview URL for a check and one approved test submission per form.

After the production build succeeds: attach portugalhqacitizenship.com (www redirects to the apex) and submit the sitemap in Google Search Console.
