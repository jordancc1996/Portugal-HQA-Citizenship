# Press syndication checklist

Publish every release on this site first. Do not send the text to another site, a wire, or a journalist until the page at `/press/[slug]` is live.

## Before you send a release

1. Publish the release at `/press/[slug]` on https://portugalhqacitizenship.com.
2. Wait until that page is indexed. Check Google Search Console before you send it anywhere else.
3. The page canonical is the self-referencing URL on this site. Do not add a cross-domain canonical on our own pages.

## When another site republishes it

1. Ask them first to add a `noindex` tag to their copy. That has been Google's recommendation for syndicated content since 2023.
2. Always ask for a visible link back to our original URL.
3. If they will not use `noindex`, ask for `rel="canonical"` pointing at our URL as a fallback. Google treats a cross-domain canonical only as a hint.
4. Wire services usually add nofollow links and do not set canonicals. Use them for reach, not rankings.
5. Record every republication in the release's `syndicatedTo` list (`outlet`, `url`, `date`). The "Also published on" list is built from that field.

## Dates and duplicates

- Never copy a release onto our own site twice.
- Never backdate a release.
- Never change `datePublished` after publication.
