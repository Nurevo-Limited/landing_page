/**
 * Builds one 1200 x 630 social image per public page into public/og/.
 * Run with `npm run og` after changing a page title, h1 or description,
 * then commit the images. Fonts come from node_modules, so the output is
 * the same on every machine and needs no system fonts.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import sharp from "sharp";
import { pageSlug, publicPages, site } from "../src/content/site.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const mod = (p) => path.join(root, "node_modules", p);
const outDir = path.join(root, "public/og");

const fonts = [
  { name: "Inter", weight: 400, style: "normal", data: fs.readFileSync(mod("@fontsource/inter/files/inter-latin-400-normal.woff")) },
  { name: "Inter", weight: 500, style: "normal", data: fs.readFileSync(mod("@fontsource/inter/files/inter-latin-500-normal.woff")) },
  { name: "Newsreader", weight: 400, style: "normal", data: fs.readFileSync(mod("@fontsource/newsreader/files/newsreader-latin-400-normal.woff")) },
];

const wordmark = `data:image/png;base64,${fs
  .readFileSync(path.join(root, "public/brand/nurevo-wordmark-gradient.png"))
  .toString("base64")}`;

const signalSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 380" width="600" height="380" fill="none">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7398FF"/><stop offset="1" stop-color="#A9EDFF"/></linearGradient>
<radialGradient id="n" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#A9EDFF" stop-opacity="0.9"/><stop offset="0.45" stop-color="#7398FF" stop-opacity="0.35"/><stop offset="1" stop-color="#7398FF" stop-opacity="0"/></radialGradient></defs>
<g stroke-linecap="round" stroke-linejoin="round" stroke="url(#g)" stroke-width="3">
<path d="M20 70c15-30 30-30 45 0s30 30 45 0 30-30 45 0 30 30 45 0 30-22 45 0C330 70 362 190 440 190"/>
<path opacity="0.9" d="M20 150h40m12 0h22m12 0h56m12 0h30m12 0h44C330 150 372 190 440 190"/>
<path opacity="0.8" d="M20 230c40-26 80 26 120 0s80-26 120 0C330 230 372 190 440 190"/>
<path opacity="0.7" d="M20 310h240C330 310 362 190 440 190"/>
</g>
<path d="M440 190H548" stroke="#A9EDFF" stroke-width="3.5" stroke-linecap="round"/>
<circle cx="560" cy="190" r="40" fill="url(#n)"/><circle cx="560" cy="190" r="10" fill="#A9EDFF"/>
</svg>`;
const signal = `data:image/svg+xml;base64,${Buffer.from(signalSvg).toString("base64")}`;

const h = (type, style, children) => ({ type, props: { style, children } });

function card(page) {
  const title = page.h1;
  const eyebrow = page.path === "/" ? "Cognitive screening" : page.label;
  return h(
    "div",
    {
      width: 1200,
      height: 630,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "64px 72px",
      backgroundColor: "#0A1628",
      backgroundImage:
        "radial-gradient(circle at 82% 46%, rgba(115,152,255,0.38) 0%, rgba(169,237,255,0.10) 28%, rgba(10,22,40,0) 52%)",
      fontFamily: "Inter",
      color: "#FFFFFF",
      position: "relative",
    },
    [
      { type: "img", props: { src: wordmark, width: 222, height: 40, style: { width: 222, height: 40 } } },
      {
        type: "img",
        props: {
          src: signal,
          width: 420,
          height: 266,
          style: { position: "absolute", right: 48, top: 182, width: 420, height: 266, opacity: 0.95 },
        },
      },
      h("div", { display: "flex", flexDirection: "column", maxWidth: 640 }, [
        h(
          "div",
          { display: "flex", fontSize: 22, fontWeight: 500, letterSpacing: 3, color: "#A9EDFF", textTransform: "uppercase" },
          eyebrow,
        ),
        h(
          "div",
          { display: "flex", marginTop: 22, fontFamily: "Newsreader", fontSize: title.length > 34 ? 60 : 72, lineHeight: 1.06, letterSpacing: -1 },
          title,
        ),
        h(
          "div",
          { display: "flex", marginTop: 26, fontSize: 22, lineHeight: 1.45, color: "#CBD5E1", maxWidth: 600 },
          page.description,
        ),
      ]),
      h("div", { display: "flex", justifyContent: "space-between", fontSize: 20, color: "#94A3B8" }, [
        h("div", { display: "flex" }, `${site.legalName}, company number ${site.companyNumber}`),
        h("div", { display: "flex", color: "#E2E8F0" }, "nurevo.health"),
      ]),
    ],
  );
}

fs.mkdirSync(outDir, { recursive: true });
for (const page of publicPages()) {
  const svg = await satori(card(page), { width: 1200, height: 630, fonts });
  const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } }).render().asPng();
  const file = path.join(outDir, `${pageSlug(page)}.png`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  await sharp(png).png({ compressionLevel: 9, effort: 10 }).toFile(file);
  console.log(`og/${pageSlug(page)}.png`);
}
