import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site, publicPages, approved, pageSlug } from "../src/content/site.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const errors = [];

function fail(message) {
  errors.push(message);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

function decode(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;|&#x27;/gi, "'");
}

function scannable(html) {
  const jsonLd = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => decode(match[1]),
  );
  const withoutScripts = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ");
  const attrs = [...withoutScripts.matchAll(/\s(?:alt|content|aria-label|href)="([^"]*)"/g)].map(
    (match) => decode(match[1]),
  );
  const text = decode(withoutScripts.replace(/<[^>]+>/g, " ").replace(/\s+/g, " "));
  return `${text}\n${attrs.join("\n")}\n${jsonLd.join("\n")}`;
}

function normalisedPath(canonical) {
  const pathname = new URL(canonical).pathname;
  if (pathname !== "/" && pathname.endsWith("/")) return pathname.slice(0, -1);
  return pathname || "/";
}

const allowedPhrases = [
  "not a diagnostic device",
  "Is Nurevo a diagnostic tool?",
  "specialist assessment first",
  "Alzheimer's Society",
  "alzheimers.org.uk",
];

const banned = [
  /\bdetect(?:ion)?\b/i,
  /\bdiagnos(?:e|is|tic|tics)\b/i,
  /\bcatch\b/i,
  /\bprevent\b/i,
  /\bcure\b/i,
  /protect memory/i,
  /\bproven\b/i,
  /\bvalidated\b/i,
  /\baccurate\b/i,
  /\baccuracy\b/i,
  /\bAUC\b/,
  /\bfirst\b/i,
  /\bonly\b/i,
  /\bleading\b/i,
  /\brevolutionary\b/i,
  /MHRA approved/i,
  /\bUKCA\b/,
  /CE marked/i,
  /NHS approved/i,
  /alzheimer/i,
];

const denied = [
  "lecanemab",
  "donanemab",
  "cantonese",
  "mandarin",
  "greater china",
  "greater bay area",
  "uclh",
  "fudan",
  "moca",
  "attention rollout",
  "nurevo limited",
  "nurevo.tech",
  "patent",
  "lumbar",
  // Removed until the investment is confirmed. See HANDOVER.md.
  "bethnal",
  "bgv",
];

function scanCopy(label, raw) {
  let text = raw;
  // Talk to us delivers to this inbox. The public site stays on nurevo.health.
  text = text.replaceAll("info@nurevo.tech", " ");
  for (const phrase of allowedPhrases) {
    text = text.replaceAll(phrase, " ");
    text = text.replaceAll(phrase.toLowerCase(), " ");
  }
  if (text.includes("\u2014") || text.includes("\u2013")) {
    fail(`${label} uses a dash as punctuation`);
  }
  for (const pattern of banned) {
    const match = text.match(pattern);
    if (match) fail(`${label} contains banned term “${match[0]}”`);
  }
  const lower = text.toLowerCase();
  for (const phrase of denied) {
    if (lower.includes(phrase)) fail(`${label} contains removed entity “${phrase}”`);
  }
}

if (!fs.existsSync(dist)) {
  console.error("dist/ is missing. Run astro build first.");
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith(".html"));
if (htmlFiles.length === 0) fail("No HTML files were built");

const seen = new Set();

// Copy marked draft in site.ts must stay out of every machine-readable output.
function collectDrafts(value, out = []) {
  if (Array.isArray(value)) value.forEach((item) => collectDrafts(item, out));
  else if (value && typeof value === "object") {
    if (value.draft === true) {
      for (const field of Object.values(value)) if (typeof field === "string" && field.length > 20) out.push(field);
    }
    Object.values(value).forEach((item) => collectDrafts(item, out));
  }
  return out;
}
const draftTexts = collectDrafts(site);

function checkNoDrafts(label, text) {
  for (const draft of draftTexts) {
    if (text.includes(draft)) fail(`${label} contains draft copy: “${draft.slice(0, 60)}”`);
  }
}

let draftMarkers = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const label = path.relative(dist, file);
  draftMarkers += html.split(site.ui.toBeApproved).length - 1;
  // The content security policy allows no inline styles or inline scripts.
  if (/<[^>]+\sstyle="/i.test(html)) fail(`${label} has an inline style attribute, which the CSP blocks`);
  for (const tag of html.match(/<script\b[^>]*>/gi) ?? []) {
    if (!/\ssrc=/.test(tag) && !/application\/ld\+json/.test(tag)) {
      fail(`${label} has an inline script, which the CSP blocks`);
    }
  }
  if (!html.includes('<html lang="en-GB">')) fail(`${label} is missing lang en-GB`);
  const h1s = html.match(/<h1\b/g) ?? [];
  if (h1s.length !== 1) fail(`${label} has ${h1s.length} h1 elements`);
  for (const img of html.match(/<img\b[^>]*>/g) ?? []) {
    if (!/\salt(="|[\s>])/.test(img)) fail(`${label} has an image without alt`);
  }
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) {
    fail(`${label} is missing a canonical URL`);
    continue;
  }
  const pagePath = normalisedPath(canonical);
  seen.add(pagePath);
  const page = site.pages.find((item) => item.path === pagePath);
  if (!page) {
    fail(`${label} canonical ${pagePath} is not in the content file`);
    continue;
  }
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "");
  if (title !== page.title) fail(`${pagePath} title is “${title}”`);
  if (title.length > 60) fail(`${pagePath} title is ${title.length} characters`);
  const descriptionTag = [...html.matchAll(/<meta\b[^>]*>/g)].find((tag) =>
    /\bname="description"/.test(tag[0]),
  );
  const description = decode(descriptionTag?.[0].match(/\bcontent="([^"]*)"/)?.[1] ?? "");
  if (description !== page.description) fail(`${pagePath} description does not match the content file`);
  if (description.length > 160) fail(`${pagePath} description is ${description.length} characters`);
  const h1Text = decode((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "").replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
  if (h1Text !== page.h1) fail(`${pagePath} H1 is “${h1Text}”, expected “${page.h1}”`);
  if (page.kind !== "notfound") {
    const md = `${site.url}/${pageSlug(page)}.md`;
    if (!html.includes(`<link rel="alternate" type="text/markdown" href="${md}"`)) {
      fail(`${pagePath} is missing the markdown alternate link`);
    }
    if (!fs.existsSync(path.join(root, "public/og", `${pageSlug(page)}.png`))) {
      fail(`${pagePath} has no social image. Run npm run og`);
    }
  }
  const plain = scannable(html);
  if (!plain.includes(site.companyNumber)) fail(`${pagePath} is missing the company number`);
  if (!plain.includes(site.legalName)) fail(`${pagePath} is missing the legal name`);
  if (!plain.includes(site.street)) fail(`${pagePath} is missing the registered office`);
  if (!plain.includes("not a diagnostic device")) fail(`${pagePath} is missing the screening disclaimer`);
  if (!plain.includes(site.oneLine)) fail(`${pagePath} is missing the one-line description`);
  scanCopy(pagePath, plain);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.parse(decode(match[1])),
  );
  const graph = blocks.flatMap((block) => block["@graph"] ?? [block]);
  checkNoDrafts(`${pagePath} JSON-LD`, JSON.stringify(graph));
  const types = graph.map((node) => node["@type"]);
  if (types.includes("MedicalOrganization") || types.includes("Person")) {
    fail(`${pagePath} JSON-LD uses a forbidden type`);
  }
  const org = graph.find((node) => node["@type"] === "Organization" && node.legalName);
  if (!org) fail(`${pagePath} is missing Organization JSON-LD`);
  else {
    if (org.name !== site.brand) fail(`${pagePath} Organization name is wrong`);
    if (org.legalName !== site.legalName) fail(`${pagePath} legalName is wrong`);
    if (org.url !== site.url) fail(`${pagePath} Organization url is wrong`);
    if (org.foundingDate !== site.foundingDate) fail(`${pagePath} foundingDate is wrong`);
    if (org.description !== site.shortDescription) fail(`${pagePath} Organization description is wrong`);
    if (org.identifier?.value !== site.companyNumber) fail(`${pagePath} identifier is wrong`);
    if (org.address?.streetAddress !== site.street) fail(`${pagePath} street address is wrong`);
    if (org.address?.postalCode !== site.postalCode) fail(`${pagePath} postcode is wrong`);
    const same = org.sameAs ?? [];
    if (!same.includes(site.linkedin) || !same.includes(site.companiesHouse)) {
      fail(`${pagePath} sameAs is missing LinkedIn or Companies House`);
    }
    const emails = (org.contactPoint ?? []).map((point) => point.email);
    for (const email of Object.values(site.emails)) {
      if (!emails.includes(email)) fail(`${pagePath} contactPoint is missing ${email}`);
    }
  }
  if (page.kind === "home" && !types.includes("WebSite")) fail("Home is missing WebSite JSON-LD");
  if (page.crumbs.length > 0 && !types.includes("BreadcrumbList")) {
    fail(`${pagePath} is missing BreadcrumbList JSON-LD`);
  }
  if (page.kind === "faq") {
    const faq = graph.find((node) => node["@type"] === "FAQPage");
    if (!faq) fail("FAQ page is missing FAQPage JSON-LD");
    else {
      const pairs = faq.mainEntity ?? [];
      const live = approved(site.faq);
      if (pairs.length !== live.length) fail("FAQ JSON-LD count does not match the approved visible list");
      pairs.forEach((pair, index) => {
        const expected = live[index];
        if (pair.name !== expected.question || pair.acceptedAnswer?.text !== expected.answer) {
          fail(`FAQ JSON-LD item ${index + 1} does not match the visible answer`);
        }
        if (!plain.includes(expected.question) || !plain.includes(expected.answer)) {
          fail(`FAQ answer ${index + 1} is not visible in the HTML`);
        }
        if (!html.includes(`id="${expected.id}"`)) fail(`FAQ is missing #${expected.id}`);
      });
    }
  }
}

for (const page of site.pages) {
  if (!seen.has(page.path)) fail(`No built HTML for ${page.path}`);
}

for (const page of publicPages()) {
  if (page.title.length > 60) fail(`Content title too long: ${page.path}`);
  if (page.description.length > 160) fail(`Content description too long: ${page.path} (${page.description.length})`);
}

const titles = publicPages().map((page) => page.title);
if (new Set(titles).size !== titles.length) fail("Page titles are not unique");
const descriptions = publicPages().map((page) => page.description);
if (new Set(descriptions).size !== descriptions.length) fail("Page descriptions are not unique");

for (const name of ["llms.txt", "llms-full.txt", "robots.txt", "sitemap.xml", "facts.txt"]) {
  const file = path.join(dist, name);
  if (!fs.existsSync(file)) fail(`Missing ${name}`);
  else {
    const text = fs.readFileSync(file, "utf8");
    scanCopy(name, text);
    checkNoDrafts(name, text);
  }
}

for (const page of publicPages()) {
  const name = `${pageSlug(page)}.md`;
  const file = path.join(dist, name);
  if (!fs.existsSync(file)) {
    fail(`Missing markdown copy ${name}`);
    continue;
  }
  const text = fs.readFileSync(file, "utf8");
  scanCopy(name, text);
  checkNoDrafts(name, text);
  if (!text.includes(site.legalName) || !text.includes(site.disclaimer)) fail(`${name} is missing the legal name or disclaimer`);
}

const llmsFull = fs.existsSync(path.join(dist, "llms-full.txt"))
  ? fs.readFileSync(path.join(dist, "llms-full.txt"), "utf8")
  : "";
for (const page of publicPages()) {
  if (!llmsFull.includes(`URL: ${new URL(page.path, site.url).href}`)) fail(`llms-full.txt is missing ${page.path}`);
}

const robots = fs.existsSync(path.join(dist, "robots.txt"))
  ? fs.readFileSync(path.join(dist, "robots.txt"), "utf8")
  : "";
for (const bot of [
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
]) {
  if (!robots.includes(`User-agent: ${bot}`)) fail(`robots.txt does not name ${bot}`);
}
if (!robots.includes(`Sitemap: ${site.url}/sitemap.xml`)) fail("robots.txt is missing the sitemap");

const sitemap = fs.existsSync(path.join(dist, "sitemap.xml"))
  ? fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8")
  : "";
for (const page of publicPages()) {
  const loc = new URL(page.path, site.url).href;
  if (!sitemap.includes(`<loc>${loc}</loc>`)) fail(`Sitemap is missing ${loc}`);
}
if (!/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sitemap)) fail("Sitemap is missing lastmod");

const llms = fs.existsSync(path.join(dist, "llms.txt"))
  ? fs.readFileSync(path.join(dist, "llms.txt"), "utf8")
  : "";
if (!llms.includes(site.legalName) || !llms.includes(site.companyNumber)) {
  fail("llms.txt is missing the legal identity");
}
if (!llms.includes(`${site.url}/facts.txt`)) fail("llms.txt does not link to the fact sheet");

const facts = fs.existsSync(path.join(dist, "facts.txt"))
  ? fs.readFileSync(path.join(dist, "facts.txt"), "utf8")
  : "";
if (!facts.includes(site.legalName) || !facts.includes(site.companyNumber) || !facts.includes(site.company.regulatory)) {
  fail("facts.txt is missing the canonical facts");
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Checked ${htmlFiles.length} HTML files, ${publicPages().length} markdown copies, robots.txt, sitemap.xml, llms.txt, llms-full.txt and facts.txt.`,
);
const contactHtml = fs.existsSync(path.join(dist, "contact/index.html"))
  ? fs.readFileSync(path.join(dist, "contact/index.html"), "utf8")
  : "";
if (/<button[^>]*type="submit"[^>]*disabled/.test(contactHtml)) {
  console.warn(
    "Warning: no Formspree address is set, so the contact form's Send button is disabled. Set PUBLIC_FORMSPREE for the build (see .github/workflows/ci.yml and .env.example). The form must email info@nurevo.tech.",
  );
}
if (draftMarkers > 0) {
  console.log(`${draftMarkers} “${site.ui.toBeApproved}” markers are visible. See HANDOVER.md, section 8.`);
}
