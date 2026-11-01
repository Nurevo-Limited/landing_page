/**
 * Markdown copy of every public page, built from site.ts. Served at
 * /<page>.md and concatenated into /llms-full.txt so AI tools can read the
 * site without parsing HTML. Draft copy is left out until it is approved.
 */
import {
  approved,
  facts,
  pageUpdated,
  publicPages,
  site,
  type PageMeta,
} from "../content/site";
import { llmsText } from "./llms";

const abs = (path: string) => new URL(path, site.url).href;

function factsTable(terms?: string[]): string[] {
  const rows = facts().filter((row) => !terms || terms.includes(row.term));
  return ["| Fact | Value |", "| --- | --- |", ...rows.map((row) => `| ${row.term} | ${row.value} |`)];
}

function figures(): string[] {
  return site.home.figures.flatMap((group) => [
    `### ${group.title}`,
    "",
    ...group.stats.map((stat) => `- ${stat.value} ${stat.label}.`),
    "",
    `Source: [${group.sourceName}](${group.sourceUrl}). ${group.sourceNote}`,
    "",
  ]);
}

function steps(): string[] {
  return site.home.steps.map((step, index) => `${index + 1}. **${step.title}.** ${step.text}`);
}

function diffs(): string[] {
  return site.home.diffs.map((diff) => `- **${diff.title}.** ${diff.text}`);
}

function roadmap(): string[] {
  const status = {
    done: site.ui.completed,
    now: site.ui.inProgress,
    planned: site.ui.planned,
  };
  return site.research.roadmap.map(
    (item, index) => `${index + 1}. ${item.name} (${status[item.state]})`,
  );
}

const bodies: Record<string, () => string[]> = {
  "/": () => [
    site.subhead,
    "",
    site.ui.homeCtaNote,
    "",
    `Stage: ${site.stage}`,
    "",
    `## ${site.home.waveCaption}`,
    "",
    ...site.home.streams.map((stream) => `- **${stream.title}.** ${stream.text}`),
    "",
    `## ${site.home.howTitle}`,
    "",
    site.home.howIntro,
    "",
    ...steps(),
    "",
    `## ${site.home.diffTitle}`,
    "",
    ...diffs(),
    "",
    `## ${site.home.problemTitle}`,
    "",
    site.home.problem,
    "",
    ...figures(),
    `## ${site.home.whoTitle}`,
    "",
    site.solutions.intro,
    "",
    ...site.solutions.audiences.map((audience) => `- **${audience.heading}.** ${audience.text}`),
  ],
  "/technology": () => {
    const t = site.technology;
    return [
      t.intro,
      "",
      `## ${t.takeawaysTitle}`,
      "",
      ...t.takeaways.map((line) => `- ${line}`),
      "",
      `## ${t.pipelineTitle}`,
      "",
      ...t.flow.steps.map((step, index) => `${index + 1}. **${step.title}.** ${step.lines.join("; ")}`),
      "",
      ...t.bands.flatMap((band) => [
        `## ${band.heading}`,
        "",
        band.text,
        "",
        ...(band.kind === "score" ? [t.exampleCaption, ""] : []),
      ]),
      `## ${t.limitsTitle}`,
      "",
      site.disclaimer,
    ];
  },
  "/solutions": () => {
    const r = site.research;
    return [
      site.solutions.intro,
      "",
      `## ${site.home.whoTitle}`,
      "",
      ...site.solutions.audiences.flatMap((audience) => [`### ${audience.heading}`, "", audience.text, ""]),
      site.notForClinicalUse,
      "",
      `## ${r.title}`,
      "",
      r.intro,
      "",
      ...r.where,
      "",
      `${r.versionLabel}: ${r.version} ${site.updated}.`,
      "",
      `### ${r.systemCardTitle}`,
      "",
      ...r.card.flatMap((item) => [`#### ${item.heading}`, "", ...item.paragraphs.flatMap((p) => [p, ""])]),
      `### ${r.dataTitle}`,
      "",
      r.dataIntro,
      "",
      ...r.dataPrinciples.map((item) => `- **${item.name}.** ${item.text}`),
      "",
      `### ${r.roadmapTitle}`,
      "",
      r.roadmapIntro,
      "",
      ...roadmap(),
      "",
      `### ${r.evaluation.title}`,
      "",
      r.evaluation.intro,
      "",
      ...r.evaluation.items.map((item) => `- **${item.name}.** ${item.text}`),
      "",
      `### ${r.standardsTitle}`,
      "",
      r.regulatory.intro,
      "",
      ...r.regulatory.status.map((row) => `- **${row.label}:** ${row.value}`),
      "",
      ...r.standards.flatMap((p) => [p, ""]),
      `#### ${r.regulatory.pathwayTitle}`,
      "",
      ...r.regulatory.pathway.map((step, index) => `${index + 1}. **${step.name}.** ${step.text}`),
      "",
      r.regulatory.note,
    ];
  },
  "/about": () => {
    const inv = site.investors;
    return [
      site.identity,
      "",
      site.shortDescription,
      "",
      "## Mission",
      "",
      site.mission,
      "",
      "## Our story",
      "",
      site.story,
      "",
      `## ${inv.title}`,
      "",
      inv.intro.text,
      "",
      `### ${inv.snapshotTitle}`,
      "",
      ...factsTable(["Stage", "Sector", "Founded", "Legal name", "Company number", "Registered in", "Headquarters"]),
      "",
      `### ${site.home.diffTitle}`,
      "",
      ...diffs(),
      "",
      `### ${inv.nextTitle}`,
      "",
      ...roadmap(),
      "",
      inv.contact.text,
      "",
      "## Company facts",
      "",
      ...factsTable(),
    ];
  },
  "/company": () => {
    const c = site.company;
    return [
      site.identity,
      "",
      "## Company facts",
      "",
      ...factsTable(),
      "",
      `## ${c.descriptionsTitle}`,
      "",
      c.canonicalNote,
      "",
      `### ${c.oneLineLabel}`,
      "",
      site.oneLine,
      "",
      `### ${c.shortLabel}`,
      "",
      site.shortDescription,
      "",
      `### ${c.longLabel}`,
      "",
      site.longDescription,
      "",
      `## ${c.regulatoryTitle}`,
      "",
      c.regulatory,
      "",
      `## ${c.misconceptionsTitle}`,
      "",
      ...c.misconceptions.map((item) => `- ${item}`),
      "",
      `## ${c.coloursTitle}`,
      "",
      ...c.colours.map((colour) => `- ${colour.name}: ${colour.value}`),
      "",
      `## ${c.pressTitle}`,
      "",
      c.pressIntro,
      "",
      ...site.logos.map((logo) => `- [${logo.label}](${abs(`/brand/${logo.file}`)})`),
      "",
      `## ${c.mediaTitle}`,
      "",
      site.emails.media,
    ];
  },
  "/faq": () => {
    const items = approved(site.faq);
    const groups = [...new Set(items.map((item) => item.group))];
    return groups.flatMap((group) => [
      `## ${group}`,
      "",
      ...items
        .filter((item) => item.group === group)
        .flatMap((item) => [`### ${item.question}`, "", item.answer, ""]),
    ]);
  },
  "/contact": () => [
    site.contact.intro,
    "",
    ...site.contact.routes.map((route) => `- **${route.heading}.** ${route.intro}`),
    "",
    `Email: ${site.contact.inbox}`,
    "",
    site.ui.healthWarning,
  ],
  "/privacy": () => [site.ui.legalPlaceholder, "", ...site.legal.privacy.flatMap((p) => [p, ""])],
  "/cookies": () => [site.ui.legalPlaceholder, "", ...site.legal.cookies.flatMap((p) => [p, ""])],
  "/terms": () => [site.ui.legalPlaceholder, "", ...site.legal.terms.flatMap((p) => [p, ""])],
  "/accessibility": () => [site.ui.legalPlaceholder, "", ...site.legal.accessibility.flatMap((p) => [p, ""])],
};

export function pageMarkdown(page: PageMeta): string {
  const body = bodies[page.path];
  if (!body) throw new Error(`No markdown body for ${page.path}`);
  const lines = [
    `# ${page.h1}`,
    "",
    `URL: ${abs(page.path)}`,
    `Last updated: ${pageUpdated(page)}`,
    "",
    `> ${site.identity}`,
    "",
    ...body(),
    "",
    "---",
    "",
    site.registration,
    "",
    site.disclaimer,
    "",
  ];
  return lines.join("\n").replace(/\n{3,}/g, "\n\n");
}

export function llmsFullText(): string {
  const pages = publicPages().map((page) => pageMarkdown(page));
  return [
    llmsText().trimEnd(),
    "# Full text of every page\n\nEach section below is one page of the website, as markdown.",
    ...pages.map((text) => text.trimEnd()),
  ].join("\n\n---\n\n") + "\n";
}
