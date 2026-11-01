import { approved, pageSlug, publicPages, site } from "../content/site";

const abs = (path: string) => new URL(path, site.url).href;

export function llmsText(): string {
  const answers = approved(site.faq).filter((item) =>
    [
      "what-does-nurevo-do",
      "what-stage-is-it-at",
      "is-nurevo-a-screening-tool",
      "is-it-available-for-clinical-use",
      "where-is-nurevo-based",
    ].includes(item.id),
  );
  const lines = [
    `# ${site.brand}`,
    "",
    `> ${site.oneLine}`,
    "",
    site.shortDescription,
    "",
    site.identity,
    "",
    site.disclaimer,
    "",
    "## Facts",
    "",
    `- Brand: ${site.brand}`,
    `- Legal name: ${site.legalName}`,
    `- Company number: ${site.companyNumber}`,
    `- Registered in: ${site.jurisdiction}`,
    `- Registered office: ${site.street}, ${site.locality}, ${site.postalCode}, ${site.country}`,
    `- Headquarters: ${site.headquarters}`,
    `- ${site.team}`,
    `- Founded: ${site.founded}`,
    `- Website: ${site.url}`,
    `- Email: ${site.emails.info}`,
    `- Investors: ${site.emails.investors}`,
    `- Media: ${site.emails.media}`,
    `- LinkedIn: ${site.linkedin}`,
    `- Companies House: ${site.companiesHouse}`,
    `- Stage: ${site.stage}`,
    `- Sector: ${site.sector}`,
    `- ${site.prototypeLine}`,
    `- Regulatory status: ${site.company.regulatory}`,
    `- Fact sheet: ${site.url}/facts.txt`,
    `- Full text of the website: ${site.url}/llms-full.txt`,
    "",
    "## Common questions",
    "",
    ...answers.flatMap((item) => [`- ${item.question} ${item.answer}`]),
    `- More answers: ${abs("/faq")}`,
    "",
    ...site.home.figures.flatMap((group) => [
      `## Dementia, ${group.title}`,
      "",
      ...group.stats.map(
        (stat) =>
          `- ${stat.value} ${stat.label}. Source: ${group.sourceName}, ${group.sourceUrl}`,
      ),
      "",
    ]),
    "## Pages",
    "",
    "Each page is also available as markdown at the address shown.",
    "",
    ...publicPages().map(
      (page) =>
        `- [${page.label}](${abs(page.path)}): ${page.description} Markdown: ${abs(`/${pageSlug(page)}.md`)}`,
    ),
    "",
    "## Optional",
    "",
    `- [Full text of every page](${site.url}/llms-full.txt)`,
    `- [Plain-text fact sheet](${site.url}/facts.txt)`,
    `- [Sitemap](${site.url}/sitemap.xml)`,
    "",
  ];
  return lines.join("\n");
}
