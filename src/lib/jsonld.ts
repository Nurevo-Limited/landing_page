import {
  approved,
  knowsAbout,
  pageSlug,
  pageUpdated,
  site,
  type PageMeta,
} from "../content/site";

const orgId = `${site.url}/#organization`;
const websiteId = `${site.url}/#website`;

function absolute(path: string): string {
  return new URL(path, site.url).href;
}

function pageUrl(page: PageMeta): string {
  return absolute(page.path);
}

function ogImage(page: PageMeta): string {
  return absolute(`/og/${pageSlug(page)}.png`);
}

const logo = {
  "@type": "ImageObject",
  "@id": `${site.url}/#logo`,
  url: absolute("/brand/nurevo-logo-on-light.png"),
  contentUrl: absolute("/brand/nurevo-logo-on-light.png"),
  width: 968,
  height: 1024,
  caption: site.brand,
};

export function organizationNode(): Record<string, unknown> {
  return {
    "@type": "Organization",
    "@id": orgId,
    name: site.brand,
    legalName: site.legalName,
    alternateName: ["Nurevo Technology", site.legalName],
    url: site.url,
    logo,
    image: absolute("/og/index.png"),
    description: site.shortDescription,
    disambiguatingDescription: site.identity,
    slogan: site.mission,
    foundingDate: site.foundingDate,
    location: {
      "@type": "Place",
      name: site.headquarters,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.locality,
      postalCode: site.postalCode,
      addressCountry: "GB",
    },
    email: site.emails.info,
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: site.emails.info,
        contactType: "general enquiries",
        availableLanguage: "en-GB",
      },
      {
        "@type": "ContactPoint",
        email: site.emails.investors,
        contactType: "investor relations",
        availableLanguage: "en-GB",
      },
      {
        "@type": "ContactPoint",
        email: site.emails.media,
        contactType: "media relations",
        availableLanguage: "en-GB",
      },
    ],
    knowsAbout: knowsAbout(),
    identifier: {
      "@type": "PropertyValue",
      name: "UK Company Number",
      value: site.companyNumber,
      propertyID: site.companiesHouse,
    },
    sameAs: [site.linkedin, site.companiesHouse, ...site.extraSameAs],
  };
}

function websiteNode(): Record<string, unknown> {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.brand,
    alternateName: site.legalName,
    description: site.oneLine,
    inLanguage: "en-GB",
    publisher: { "@id": orgId },
  };
}

function breadcrumbNode(page: PageMeta): Record<string, unknown> {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl(page)}#breadcrumb`,
    itemListElement: page.crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.path),
    })),
  };
}

function pageType(page: PageMeta): string {
  if (page.kind === "faq") return "FAQPage";
  if (page.kind === "news") return "CollectionPage";
  if (page.path === "/about" || page.path === "/company") return "AboutPage";
  if (page.path === "/contact") return "ContactPage";
  return "WebPage";
}

function webPageNode(page: PageMeta): Record<string, unknown> {
  const node: Record<string, unknown> = {
    "@type": pageType(page),
    "@id": `${pageUrl(page)}#webpage`,
    url: pageUrl(page),
    name: page.title,
    headline: page.h1,
    description: page.description,
    inLanguage: "en-GB",
    isPartOf: { "@id": websiteId },
    about: { "@id": orgId },
    publisher: { "@id": orgId },
    dateModified: pageUpdated(page),
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage(page),
      width: 1200,
      height: 630,
    },
  };
  if (page.crumbs.length > 0) node.breadcrumb = { "@id": `${pageUrl(page)}#breadcrumb` };
  if (page.kind === "faq") {
    node.mainEntity = approved(site.faq).map((item) => ({
      "@type": "Question",
      "@id": `${pageUrl(page)}#${item.id}`,
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));
  }
  return node;
}

export function pageGraph(page: PageMeta): Record<string, unknown>[] {
  const nodes: Record<string, unknown>[] = [organizationNode(), websiteNode()];
  if (page.kind === "notfound") return nodes;
  nodes.push(webPageNode(page));
  if (page.crumbs.length > 0) nodes.push(breadcrumbNode(page));
  return nodes;
}

export function graphJson(nodes: Record<string, unknown>[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  }).replace(/</g, "\\u003c");
}
