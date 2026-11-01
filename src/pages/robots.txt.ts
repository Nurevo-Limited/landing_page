import type { APIRoute } from "astro";
import { site } from "../content/site";

const bots = [
  "*",
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bingbot",
  "Googlebot",
  "Applebot",
  "Perplexity-User",
  "DuckAssistBot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "MistralAI-User",
  "CCBot",
];

export const GET: APIRoute = () => {
  const groups = bots
    .map((bot) => `User-agent: ${bot}\nAllow: /`)
    .join("\n\n");
  const body = `${groups}\n\nSitemap: ${site.url}/sitemap.xml\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
