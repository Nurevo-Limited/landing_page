# Search setup

Do this after `nurevo.health` is the live domain and serves the new site over HTTPS.

The sitemap address is:

https://nurevo.health/sitemap.xml

`robots.txt` already points at that sitemap and allows the search and AI crawlers named in the project brief.

## Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console) with the Google account that should own the property.
2. Add a property. Choose the domain property `nurevo.health`, not a URL-prefix property. A domain property covers `www` and the apex together.
3. Google shows a DNS TXT record. Add that record at the DNS host for `nurevo.health`. Do not remove the records that point the domain at Vercel.
4. Wait for DNS to update, then click verify in Search Console.
5. Open Sitemaps. Submit `https://nurevo.health/sitemap.xml`.
6. Use URL inspection on the home page and request indexing once the new pages are live.

## Bing Webmaster Tools

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters) and sign in.
2. Add the site `https://nurevo.health`.
3. Choose DNS verification. Bing shows a TXT record, often named something like `msvalidate.01` or a `CNAME` they specify. Add the record they show, at the same DNS host.
4. Verify the site.
5. Submit the sitemap `https://nurevo.health/sitemap.xml`.

Bing can also import a verified site from Google Search Console. DNS verification is still worth doing so the property does not depend on the Google account.

## After submission

- Confirm the live `robots.txt` allows GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Applebot-Extended, and Bingbot.
- In the Vercel project, check Firewall and Bot Protection. Those tools must not challenge or block the crawlers listed above. Attack challenge mode and a blanket bot fight will stop AI tools from reading the site.
- Give the new sitemap a few days, then look for coverage or indexing errors in both consoles.
