import type { APIRoute } from "astro";
import { pageUpdated, publicPages, site } from "../content/site";

export const GET: APIRoute = () => {
  const urls = publicPages()
    .map((page) => {
      const loc = new URL(page.path, site.url).href;
      return `  <url><loc>${loc}</loc><lastmod>${pageUpdated(page)}</lastmod></url>`;
    })
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
