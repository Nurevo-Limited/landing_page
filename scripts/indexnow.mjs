/**
 * Tells IndexNow search engines (Bing, which also feeds Copilot and
 * ChatGPT search, plus Yandex, Seznam and Naver) that every public page
 * has changed. Run after a production deploy: npm run indexnow
 * The key file public/d2a569c21a763826691e7df0fa7d426e.txt must stay deployed at the site root.
 */
import { pageSlug, publicPages, site } from "../src/content/site.ts";

const key = "d2a569c21a763826691e7df0fa7d426e";
const host = new URL(site.url).host;
const urlList = [
  ...publicPages().flatMap((page) => [
    new URL(page.path, site.url).href,
    new URL(`/${pageSlug(page)}.md`, site.url).href,
  ]),
  `${site.url}/llms.txt`,
  `${site.url}/llms-full.txt`,
  `${site.url}/facts.txt`,
];

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `${site.url}/${key}.txt`, urlList }),
});

console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`);
if (!response.ok && response.status !== 202) process.exit(1);
