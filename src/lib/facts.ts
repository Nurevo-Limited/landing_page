import { site } from "../content/site";

export function factsText(): string {
  const lines = [
    site.legalName,
    "",
    site.identity,
    "",
    `Stage: ${site.stage}`,
    `Sector: ${site.sector}`,
    `Founded: ${site.founded}`,
    `Headquarters: ${site.headquarters}`,
    site.team,
    `Registered office: ${site.street}, ${site.locality}, ${site.postalCode}, ${site.country}`,
    `Company number: ${site.companyNumber}`,
    `Companies House: ${site.companiesHouse}`,
    "",
    site.oneLine,
    "",
    site.shortDescription,
    "",
    site.longDescription,
    "",
    site.company.regulatory,
    "",
    site.disclaimer,
    "",
    `Website: ${site.url}`,
    `Email: ${site.emails.info}`,
    `Investors: ${site.emails.investors}`,
    `Media: ${site.emails.media}`,
    `LinkedIn: ${site.linkedin}`,
    `Investor brief: ${site.url}/about#investors`,
    `Full text of the website: ${site.url}/llms-full.txt`,
    "",
    ...site.home.figures.flatMap((group) => [
      `Dementia, ${group.title}`,
      ...group.stats.map(
        (stat) => `- ${stat.value} ${stat.label}. Source: ${group.sourceName}, ${group.sourceUrl}. ${group.sourceNote}`,
      ),
      "",
    ]),
    "",
    `Updated: ${site.updated}`,
    "",
  ];
  return lines.join("\n");
}
