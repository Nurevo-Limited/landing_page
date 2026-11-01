export type Crumb = { name: string; path: string };

export type PageKind =
  | "home"
  | "standard"
  | "faq"
  | "news"
  | "article"
  | "legal"
  | "notfound";

export type PageMeta = {
  path: string;
  title: string;
  description: string;
  label: string;
  h1: string;
  nav: boolean;
  footer: boolean;
  lastUpdated: boolean;
  kind: PageKind;
  crumbs: Crumb[];
  /** ISO date this page last changed. Falls back to site.updatedIso. */
  updatedIso?: string;
};

/**
 * Copy marked `draft: true` is shown on the page with a visible
 * "[to be approved]" marker, and is left out of JSON-LD, llms.txt,
 * llms-full.txt, facts.txt and the markdown copies of each page.
 * To approve a piece of copy, delete its `draft` flag.
 */
export type Draftable = { draft?: boolean };

export type FaqItem = Draftable & {
  id: string;
  group: string;
  question: string;
  answer: string;
};

export type DraftText = Draftable & { text: string };

export type Fact = {
  term: string;
  value: string;
  href?: string;
};

const url = "https://nurevo.health";

const oneLine =
  "Nurevo builds AI cognitive screening that turns a short, natural conversation into an explainable risk score for cognitive decline.";

const shortDescription =
  "Nurevo Technology Limited is a UK health technology company building a multimodal AI platform for cognitive screening and triage. A short conversation on a phone or laptop is analysed across speech, language and facial signals to produce an explainable risk score, helping clinicians decide who needs specialist assessment first.";

const registration =
  "Nurevo Technology Limited is registered in Scotland, company number SC892389. Registered office: 89/63 Holyrood Road, Edinburgh, EH8 8BA.";

const disclaimer =
  "Nurevo is a screening and triage tool in development. It is not a diagnostic device and is not currently available for clinical use.";

const stage =
  "Pre-seed. Working prototype of the data pipeline; preparing clinical validation.";

const sourceUrl =
  "https://www.alzheimers.org.uk/about-us/policy-and-influencing/economic-impact-of-dementia";

function crumbs(...items: Crumb[]): Crumb[] {
  return [{ name: "Home", path: "/" }, ...items];
}

export const site = {
  brand: "Nurevo",
  legalName: "Nurevo Technology Limited",
  companyNumber: "SC892389",
  jurisdiction: "Scotland",
  street: "89/63 Holyrood Road",
  locality: "Edinburgh",
  postalCode: "EH8 8BA",
  country: "United Kingdom",
  headquarters: "Edinburgh, United Kingdom",
  team: "Team based in the UK, with team members internationally.",
  founded: "June 2026",
  foundingDate: "2026-06",
  url,
  emails: {
    info: "info@nurevo.health",
    investors: "investors@nurevo.health",
    media: "media@nurevo.health",
  },
  linkedin: "https://www.linkedin.com/company/nurevo",
  companiesHouse:
    "https://find-and-update.company-information.service.gov.uk/company/SC892389",
  extraSameAs: [] as string[],
  stage,
  sector: "Health technology, healthcare AI",
  oneLine,
  subhead: `${oneLine.replace(/\.$/, "")}, helping clinicians decide who needs specialist assessment first.`,
  shortDescription,
  longDescription:
    "Nurevo Technology Limited is a UK health technology company building a multimodal AI platform for cognitive screening and triage. A short conversation on a phone or laptop is analysed across speech, language and facial signals to produce an explainable risk score, helping clinicians decide who needs specialist assessment first. The company is headquartered in Edinburgh, United Kingdom, and is registered in Scotland, company number SC892389. The registered office is 89/63 Holyrood Road, Edinburgh, EH8 8BA, United Kingdom. Nurevo was founded in June 2026. It is at pre-seed stage, with a working prototype of the data pipeline, and is preparing clinical validation.",
  mission:
    "Make early cognitive screening accessible to everyone, in their own language, before decline becomes costly.",
  story:
    "Nurevo brings together clinical neurology experience with AI, data and product engineering. People often reach specialists late because screening is slow, feels like a test, and is built around one language and culture. We set out to build screening that feels like a conversation and works for diverse, multilingual populations.",
  prototypeLine:
    "Nurevo is at prototype stage and preparing clinical validation.",
  notForClinicalUse:
    "Nurevo is in development and not yet available for clinical use. We welcome conversations about future pilots and research.",
  registration,
  disclaimer,
  updated: "1 November 2026",
  updatedIso: "2026-11-01",
  ico: "[number]",
  source: {
    name: "Alzheimer's Society",
    url: sourceUrl,
  },
  identity:
    "Nurevo is the brand of Nurevo Technology Limited, company number SC892389.",
  ui: {
    skip: "Skip to content",
    menu: "Menu",
    lastUpdated: "Last updated",
    source: "Source",
    howItWorks: "How it works",
    talkToUs: "Talk to us",
    send: "Send",
    healthWarning: "Please do not include personal health information.",
    formActionPlaceholder: "[placeholder]",
    externalNote: "Links to other websites open in a new tab.",
    toBeApproved: "[to be approved]",
    legalPlaceholder: "This page is a placeholder for legal review.",
    download: "Download",
    homeCtaNote: "In plain terms, Nurevo is building this screening for dementia.",
    onThisPage: "On this page",
    copy: "Copy",
    copied: "Copied",
    planned: "Planned",
    completed: "Completed",
    inProgress: "In progress",
    notAchieved: "Not yet achieved",
    status: "Status",
    lastReviewed: "Last reviewed",
    whatWeLookAt: "What we look at",
    investorBrief: "Investor brief",
    readTheBrief: "Read the investor brief",
    footerCompany: "Company",
    footerProduct: "Product",
    footerLegal: "Legal",
  },
  logos: [
    {
      file: "nurevo-logo-on-dark.png",
      label: "Full logo for dark backgrounds",
      alt: "Nurevo logo with a white mark and gradient wordmark, for dark backgrounds",
    },
    {
      file: "nurevo-logo-on-light.png",
      label: "Full logo for light backgrounds",
      alt: "Nurevo logo with a navy mark and navy wordmark, for light backgrounds",
    },
    {
      file: "nurevo-mark-white.png",
      label: "Mark in white",
      alt: "Nurevo mark in white",
    },
    {
      file: "nurevo-mark-navy.png",
      label: "Mark in navy",
      alt: "Nurevo mark in navy",
    },
    {
      file: "nurevo-wordmark-gradient.png",
      label: "Wordmark with gradient",
      alt: "Nurevo wordmark in a blue gradient",
    },
    {
      file: "nurevo-wordmark-navy.png",
      label: "Wordmark in navy",
      alt: "Nurevo wordmark in navy",
    },
    {
      file: "favicon-32.png",
      label: "Icon, 32 pixels",
      alt: "Nurevo icon, 32 pixels",
    },
    {
      file: "favicon-180.png",
      label: "Icon, 180 pixels",
      alt: "Nurevo icon, 180 pixels",
    },
    {
      file: "favicon-512.png",
      label: "Icon, 512 pixels",
      alt: "Nurevo icon, 512 pixels",
    },
  ],
  home: {
    problemTitle: "Dementia",
    problem:
      "Specialist capacity is limited, so many people reach memory services late. Existing screening is slow, feels like a test, and was largely designed around one language and culture. The figures below are the published picture worldwide and in the UK.",
    waveCaption: "Four signal streams",
    streams: [
      {
        kind: "speech",
        title: "Speech timing and voice",
        text: "Pauses, rate, rhythm and fluency. These parts of speech carry across languages.",
      },
      {
        kind: "language",
        title: "Language",
        text: "Vocabulary, structure and coherence.",
      },
      {
        kind: "face",
        title: "Facial movement",
        text: "Movement of the face during the conversation.",
      },
      {
        kind: "background",
        title: "Background information",
        text: "Age, education and other context.",
      },
    ],
    figures: [
      {
        title: "Worldwide",
        sourceName: "World Health Organization",
        sourceUrl: "https://www.who.int/news-room/fact-sheets/detail/dementia",
        sourceNote: "Fact sheet updated 26 October 2026. The worldwide counts are for 2021.",
        stats: [
          {
            value: "57 million",
            label: "people were living with dementia worldwide in 2021",
          },
          {
            value: "Nearly 10 million",
            label: "new cases each year",
          },
          {
            value: "More than 60%",
            label: "of people living with dementia live in low and middle income countries",
          },
        ],
      },
      {
        title: "In the UK",
        sourceName: "Alzheimer's Society",
        sourceUrl: sourceUrl,
        sourceNote: "The three UK figures are taken from this page.",
        stats: [
          {
            value: "982,000",
            label: "people are estimated to be living with dementia in the UK",
          },
          {
            value: "More than a third",
            label: "of people living with dementia in the UK have not been formally identified",
          },
          {
            value: "1.4 million",
            label: "people are expected to be living with dementia in the UK by 2040",
          },
        ],
      },
    ],
    whoTitle: "Who it is for",
    investorCard: {
      heading: "Investors",
      text: "Nurevo is a pre-seed company. The investor brief on the About page sets out the stage, the approach and what happens next.",
      href: "/about#investors",
    },
    previewTitle: "Explainable by design",
    previewNote: {
      text: "Illustrative design concept, not a product screenshot.",
    } as DraftText,
    howTitle: "How it works",
    howIntro:
      "Three steps, from a short conversation to an explainable risk score.",
    steps: [
      {
        title: "A conversation",
        text: "A short guided conversation on a phone or laptop. It is low-burden, and it is designed to feel like a conversation rather than a test.",
      },
      {
        title: "Four streams",
        text: "Speech timing and voice, language, facial movement, and background information are analysed together.",
      },
      {
        title: "A risk score",
        text: "A cross-modal transformer combines the streams into one explainable risk score and shows which signals contributed most.",
      },
    ],
    diffTitle: "Why this approach",
    diffs: [
      {
        title: "Multimodal",
        text: "Multimodal rather than single-signal. Speech, language, facial movement and background information are analysed together.",
      },
      {
        title: "Multilingual",
        text: "Built for multilingual populations from the start.",
      },
      {
        title: "Explainable",
        text: "Explainable by design. The risk score shows which signals contributed most.",
      },
    ],
  },
  technology: {
    intro:
      "A short guided conversation on a phone or laptop is analysed across four signal streams. A cross-modal transformer combines them into one risk score and shows which signals contributed most.",
    flow: {
      title: "How a conversation becomes a risk score",
      description:
        "A conversation is split into four streams: speech, language, facial movement and background information. A model combines them into a risk score.",
      steps: [
        { title: "Conversation", lines: ["A short guided conversation"] },
        {
          title: "Four streams",
          lines: [
            "Speech timing and voice",
            "Language",
            "Facial movement",
            "Background information",
          ],
        },
        { title: "Model", lines: ["Cross-modal transformer"] },
        {
          title: "Risk score",
          lines: ["Shows which signals contributed most"],
        },
        {
          title: "Clinician review",
          lines: ["A clinician decides who should be seen sooner"],
        },
      ],
    },
    takeawaysTitle: "Key takeaways",
    takeaways: [
      "A short guided conversation on a phone or laptop.",
      "Speech, language, facial movement and background information are analysed together.",
      "A cross-modal transformer combines them into one explainable risk score.",
    ],
    exampleCaption: "Illustrative example. These marks are not a result.",
    pipelineTitle: "From conversation to clinician review",
    streamsTitle: "The four streams",
    humanTitle: "Human in the loop",
    limitsTitle: "What it is not",
    limitsLink: "Read the research notes",
    bands: [
      {
        id: "conversation",
        kind: "conversation",
        heading: "A conversation",
        text: "A short guided conversation on a phone or laptop. It is low-burden, and it is designed to feel like a conversation rather than a test. The conversation is designed for everyday devices: a phone or a laptop.",
      },
      {
        id: "speech",
        kind: "speech",
        heading: "Speech timing and voice",
        text: "Speech timing and voice: pauses, rate, rhythm and fluency. These parts of speech carry across languages.",
      },
      {
        id: "language",
        kind: "language",
        heading: "Language",
        text: "Language: vocabulary, structure and coherence. Existing screening was largely designed around one language and culture. Nurevo is built for multilingual populations from the start.",
      },
      {
        id: "face",
        kind: "face",
        heading: "Facial movement",
        text: "Facial movement during the conversation.",
      },
      {
        id: "background",
        kind: "background",
        heading: "Background information",
        text: "Background information: age, education and other context.",
      },
      {
        id: "model",
        kind: "model",
        heading: "The model",
        text: "A cross-modal transformer combines the four streams into one risk score. The streams are analysed together, rather than as separate results that a person must reconcile.",
      },
      {
        id: "score",
        kind: "score",
        heading: "The risk score",
        text: "The risk score shows which signals contributed most. A clinician can see what informed the result. That is what we mean by explainable by design.",
      },
      {
        id: "clinician",
        kind: "clinician",
        heading: "Clinician review",
        text: "The risk score helps clinicians decide who needs specialist assessment first. A clinician can see what informed the result.",
      },
    ],
    sections: [
      {
        heading: "The four streams",
        paragraphs: [
          "Speech timing and voice: pauses, rate, rhythm and fluency. These parts of speech carry across languages.",
          "Language: vocabulary, structure and coherence.",
          "Facial movement during the conversation.",
          "Background information: age, education and other context.",
        ],
      },
      {
        heading: "The combined model",
        paragraphs: [
          "A cross-modal transformer combines the four streams into one risk score. The streams are analysed together, rather than as separate results that a person must reconcile.",
        ],
      },
      {
        heading: "Explainability",
        paragraphs: [
          "The risk score shows which signals contributed most. A clinician can see what informed the result. That is what we mean by explainable by design.",
        ],
      },
      {
        heading: "Everyday devices",
        paragraphs: [
          "The conversation is designed for everyday devices: a phone or a laptop.",
        ],
      },
      {
        heading: "Why multilingual design matters",
        paragraphs: [
          "Existing screening was largely designed around one language and culture. Nurevo is built for multilingual populations from the start. Speech timing and voice carry across languages, which is why they sit alongside language, facial movement and background information.",
        ],
      },
    ],
  },
  solutions: {
    intro:
      "Nurevo is being designed for organisations that need a low-burden way to prioritise who should be seen sooner.",
    audiences: [
      {
        kind: "health",
        heading: "Health systems and memory services",
        text: "Nurevo is being designed so health systems and memory services can prioritise referrals.",
        href: "/contact#clinical",
      },
      {
        kind: "primary",
        heading: "Primary care",
        text: "Nurevo is being designed for primary care, as a low-burden conversation that can offer an early signal before a specialist referral.",
        href: "/contact#clinical",
      },
      {
        kind: "care",
        heading: "Care homes and community organisations",
        text: "Nurevo is being designed for care homes and community organisations, where a short conversation on a phone or laptop can be offered in the place where the person already is.",
        href: "/contact#clinical",
      },
      {
        kind: "research",
        heading: "Pharmaceutical companies and research partners",
        text: "Nurevo is being designed for pharmaceutical companies and contract research organisations, to support recruitment and stratification for early-stage trials.",
        href: "/contact#clinical",
      },
    ],
  },
  research: {
    versionLabel: "Version",
    version: "Prototype. Last reviewed",
    whereTitle: "Where we are",
    where: [
      "Nurevo is at pre-seed stage. There is a working prototype of the data pipeline. Nurevo is preparing clinical validation.",
    ],
    card: [
      {
        id: "intended-use",
        heading: "Intended use",
        paragraphs: [
          "Nurevo is a screening and triage tool. A short conversation produces an explainable risk score, helping clinicians decide who needs specialist assessment first.",
        ],
      },
      {
        id: "population",
        heading: "Intended population",
        paragraphs: [
          "Nurevo is designed for diverse, multilingual populations. Screening is not built around one language or culture.",
        ],
      },
      {
        id: "inputs",
        heading: "Inputs",
        paragraphs: [
          "A short guided conversation on a phone or laptop is analysed across speech timing and voice, language, facial movement, and background information.",
        ],
      },
      {
        id: "output",
        heading: "Output",
        paragraphs: [
          "The output is one explainable risk score. It shows which signals contributed most.",
        ],
      },
      {
        id: "limitations",
        heading: "Limitations",
        paragraphs: [
          "Nurevo is at prototype stage and preparing clinical validation. No performance figures are published. It is not a diagnostic device, and it is not currently available for clinical use.",
        ],
      },
      {
        id: "oversight",
        heading: "Human oversight",
        paragraphs: [
          "A clinician can see what informed the result. The score helps clinicians decide who needs specialist assessment first.",
        ],
      },
      {
        id: "fairness",
        heading: "Fairness",
        paragraphs: [
          "Nurevo aims to report how the screening behaves across languages, ages and sexes, so differences can be seen and addressed. No performance figures are published at this prototype stage.",
        ],
      },
    ],
    roadmapTitle: "Roadmap",
    roadmapIntro: "Where the work stands, without dates:",
    roadmap: [
      { name: "Working prototype", state: "done" as const },
      { name: "Feasibility testing", state: "done" as const },
      { name: "Model development", state: "now" as const },
      { name: "Clinical studies", state: "planned" as const },
      {
        name: "The UK pathway for software as a medical device, overseen by the MHRA",
        state: "planned" as const,
      },
    ],
    standardsTitle: "Regulatory status",
    regulatory: {
      intro:
        "Where Nurevo stands today, in plain terms, and the route it intends to follow before any clinical use.",
      status: [
        { label: "What it is", value: "A screening and triage tool in development", state: "info" },
        { label: "Clinical use", value: "Not currently available", state: "no" },
        { label: "Conformity marking", value: "None held", state: "no" },
        { label: "Regulatory clearance", value: "None held", state: "no" },
        {
          label: "Intended route",
          value: "UK pathway for software as a medical device, overseen by the MHRA",
          state: "planned",
        },
      ],
      pathwayTitle: "The intended route",
      pathway: [
        {
          name: "Build the evidence",
          text: "The working prototype and feasibility testing are complete. Model development is underway, followed by registered clinical studies.",
        },
        { name: "Quality and risk management", text: "Put a quality management system and clinical risk management in place." },
        { name: "Conformity assessment", text: "Show that the software meets UK medical device requirements." },
        { name: "Registration with the MHRA", text: "Register the device before any clinical use in the UK." },
      ],
      note: "No date is set for any step. This section will be updated as each step is reached.",
    },
    title: "Research and responsible AI",
    intro:
      "How Nurevo is being developed: what the system is for, what goes in and out, its limits, and the steps still to come.",
    systemCardTitle: "System card",
    dataTitle: "Data protection",
    dataIntro: "Nurevo is designing the service around consent, UK GDPR and data minimisation.",
    dataPrinciples: [
      { kind: "consent", name: "Consent", text: "People take part by choice, and know what the conversation is used for." },
      { kind: "gdpr", name: "UK GDPR", text: "The service is being designed to meet UK data protection law." },
      { kind: "minimise", name: "Data minimisation", text: "The service is designed to collect and keep the least information needed for screening." },
    ],
    standards: [
      "Nurevo holds no conformity marking and no regulatory clearance.",
      "Nurevo intends to follow the UK pathway for software as a medical device, overseen by the MHRA. The roadmap places this pathway after model development and clinical studies. The working prototype and feasibility testing are complete. No date is set.",
    ],
    evaluation: {
      title: "How we plan to evaluate",
      intro: "The evaluation plan is named here so it can be checked later. No results are published.",
      items: [
        {
          name: "Subgroup reporting",
          text: "Report how the screening behaves across languages, age groups and sexes, side by side.",
        },
        {
          name: "Comparison with specialist assessment",
          text: "Compare the risk score with the outcome of specialist assessment in registered clinical studies.",
        },
        {
          name: "Clinician review of explanations",
          text: "Ask clinicians whether the signals shown as contributing most help them decide who to see sooner.",
        },
      ],
    },
  },
  company: {
    descriptionsTitle: "Descriptions",
    oneLineLabel: "One-line description",
    shortLabel: "Short description",
    longLabel: "Long description",
    boilerplateLabel: "Boilerplate",
    boilerplateNote: "Press can use the boilerplate wording as it stands.",
    canonicalNote:
      "Use these descriptions word for word on LinkedIn, Crunchbase and other company listings.",
    regulatoryTitle: "Regulatory status",
    regulatory:
      "Nurevo holds no conformity marking and no regulatory clearance. Nurevo is a screening and triage tool in development. It is not a diagnostic device and is not currently available for clinical use.",
    misconceptionsTitle: "Common misconceptions",
    misconceptions: [
      "Nurevo does not name a condition. It is a screening and triage tool in development.",
      "Nurevo has no regulatory clearance. It is not currently available for clinical use.",
    ],
    coloursTitle: "Colours",
    colours: [
      { name: "Navy", value: "#0A1628" },
      { name: "Link blue", value: "#2F5BD8" },
      { name: "Body text", value: "#334155" },
      { name: "Muted text", value: "#64748B" },
      { name: "Border", value: "#E2E8F0" },
      { name: "Mist", value: "#F8FAFC" },
      { name: "Accent", value: "#7398FF" },
      { name: "Accent light", value: "#A9EDFF" },
    ],
    factsLabel: "Plain-text fact sheet",
    pressTitle: "Logos",
    pressIntro: "Download the logo files as supplied. Please do not redraw or recolour them.",
    mediaTitle: "Media contact",
  },
  investors: {
    intro: {
      text: "A short brief for investors. Every fact here comes from the company record on this website and can be checked against Companies House.",
    } as DraftText,
    title: "Investor brief",
    snapshotTitle: "Snapshot",
    problemTitle: "The problem",
    approachTitle: "The approach",
    nextTitle: "What happens next",
    contactTitle: "Talk to us",
    contact: {
      text: "For investment enquiries, talk to us.",
    } as DraftText,
  },
  footerGroups: [
    { key: "footerProduct", paths: ["/technology", "/solutions", "/faq"] },
    { key: "footerCompany", paths: ["/about", "/company", "/contact"] },
    { key: "footerLegal", paths: ["/privacy", "/cookies", "/terms", "/accessibility"] },
  ] as { key: "footerProduct" | "footerCompany" | "footerLegal"; paths: string[] }[],
  faq: [
    {
      id: "what-stage-is-it-at",
      group: "Investors",
      question: "What stage is it at?",
      answer:
        "Nurevo is at pre-seed stage. There is a working prototype of the data pipeline, and Nurevo is preparing clinical validation.",
    },
    {
      id: "is-nurevo-a-screening-tool",
      group: "NHS and clinicians",
      question: "Is Nurevo a diagnostic tool?",
      answer:
        "No. Nurevo is a screening and triage tool. It is not a diagnostic device.",
    },
    {
      id: "how-does-it-work",
      group: "NHS and clinicians",
      question: "How does it work?",
      answer:
        "A short guided conversation on a phone or laptop is analysed across speech, language and facial signals, together with background information, to produce an explainable risk score.",
    },
    {
      id: "which-populations",
      group: "NHS and clinicians",
      question: "Which populations is it designed for?",
      answer:
        "Nurevo is designed for diverse, multilingual populations. Screening is not built around one language or culture.",
    },
    {
      id: "is-it-available-for-clinical-use",
      group: "NHS and clinicians",
      question: "Is it available for clinical use?",
      answer:
        "Not yet. Nurevo is in development and is not currently available for clinical use.",
    },
    {
      id: "has-it-been-tested-in-clinical-studies",
      group: "NHS and clinicians",
      question: "Has Nurevo been tested in clinical studies?",
      answer:
        "Not yet. Nurevo is at prototype stage and is preparing clinical validation. No performance figures are published.",
    },
    {
      id: "is-nurevo-a-medical-device",
      group: "NHS and clinicians",
      question: "Is Nurevo a medical device?",
      answer:
        "Not at present. Nurevo holds no conformity marking and no regulatory clearance. Nurevo intends to follow the UK pathway for software as a medical device, overseen by the MHRA.",
    },
    {
      id: "can-my-organisation-take-part-in-a-pilot",
      group: "NHS and clinicians",
      question: "Can my organisation take part in a pilot?",
      answer:
        "We welcome conversations about future pilots and research. Nurevo is not yet available for clinical use. Use the clinical and research partners route on the contact page.",
    },
    {
      id: "who-is-it-for",
      group: "NHS and clinicians",
      question: "Who is it for?",
      answer:
        "Nurevo is for health systems and memory services, for primary care, for care homes and community organisations, and for pharmaceutical companies and contract research organisations.",
    },
    {
      id: "how-is-data-protected",
      group: "Research partners",
      question: "How is data protected?",
      answer:
        "Nurevo designs for consent, UK GDPR and data minimisation. Please do not include personal health information in messages sent through this website.",
    },
    {
      id: "where-is-data-stored",
      group: "Research partners",
      question: "Where is data stored?",
      answer:
        "The storage region has not been published. The service is being designed around consent, UK GDPR and data minimisation.",
    },
    {
      id: "can-nurevo-support-trial-recruitment",
      group: "Pharma and CROs",
      question: "Can Nurevo support clinical trial recruitment?",
      answer:
        "Nurevo is being designed to support recruitment and stratification for early-stage trials. It is in development and not yet available for use in trials. Use the clinical and research partners route on the contact page.",
    },
    {
      id: "does-it-need-special-equipment",
      group: "Care providers",
      question: "Does it need special equipment?",
      answer:
        "No. The conversation is designed for everyday devices: a phone or a laptop.",
    },
    {
      id: "what-does-nurevo-do",
      group: "General",
      question: "What does Nurevo do?",
      answer:
        "Nurevo builds AI cognitive screening that turns a short, natural conversation into an explainable risk score for cognitive decline, helping clinicians decide who needs specialist assessment first. In plain terms, Nurevo is building this screening for dementia.",
    },
    {
      id: "how-is-it-different",
      group: "General",
      question: "How is it different?",
      answer:
        "Nurevo is multimodal rather than single-signal, built for multilingual populations from the start, and explainable by design. It is low-burden and conversational.",
    },
    {
      id: "where-is-nurevo-based",
      group: "General",
      question: "Where is Nurevo based?",
      answer:
        "Nurevo is headquartered in Edinburgh, United Kingdom. The team is based in the UK, with team members internationally. Nurevo Technology Limited is registered in Scotland, company number SC892389. The registered office is 89/63 Holyrood Road, Edinburgh, EH8 8BA, United Kingdom.",
    },
    {
      id: "how-can-i-contact-nurevo",
      group: "General",
      question: "How can I contact Nurevo?",
      answer:
        "Use the contact page, or email info@nurevo.tech. Investment, clinical, research and media messages all go to that address.",
    },
    {
      id: "can-i-use-nurevo-to-check-my-memory",
      group: "The public",
      question: "Can I use Nurevo to check my memory?",
      answer:
        "Not at the moment. Nurevo is in development and is not available for clinical or personal use. If you are worried about your memory, speak to your GP.",
    },
  ] as FaqItem[],
  contact: {
    inbox: "info@nurevo.tech",
    intro:
      "Send us a message and we will reply by email. Tell us what it is about. Every message is sent to info@nurevo.tech.",
    sending: "Sending",
    sent: "Thank you. Your message has been sent, and we will reply by email.",
    failed: "Sorry, your message could not be sent. Please try again in a moment.",
    subject: "Nurevo website enquiry",
    routeLabel: "What is this about?",
    fields: {
      name: "Name",
      email: "Email",
      organisation: "Organisation",
      message: "Message",
      consent:
        "I agree to Nurevo Technology Limited using my name, email, organisation and message to reply to this enquiry.",
      gotcha: "Leave this field empty",
    },
    routes: [
      {
        id: "investors",
        heading: "Investors",
        intro: "For investment enquiries.",
      },
      {
        id: "clinical",
        heading: "Clinical and research partners",
        intro:
          "For NHS organisations, research groups, care providers and pharmaceutical partners.",
      },
      {
        id: "media",
        heading: "Media",
        intro: "For journalists and other media enquiries.",
      },
    ],
  },
  legal: {
    privacy: [
      "Data controller: Nurevo Technology Limited, 89/63 Holyrood Road, Edinburgh, EH8 8BA, United Kingdom. Company number SC892389.",
      "ICO registration: [number].",
      "Contact: info@nurevo.health.",
      "This website uses cookieless analytics. It does not use tracking pixels or a cookie banner.",
      "Do not send personal health information through the contact form.",
      "The full privacy notice will be published after legal review.",
    ],
    cookies: [
      "This website uses cookieless analytics. It does not set tracking cookies, and it does not use a cookie banner.",
      "The full cookie notice will be published after legal review.",
    ],
    terms: [
      "These terms will set out how people may use the Nurevo website.",
      "The website describes a screening and triage tool in development. It is not a diagnostic device and is not currently available for clinical use.",
      "The full terms will be published after legal review.",
    ],
    accessibility: [
      "Nurevo aims to meet WCAG 2.2 AA on this website.",
      "If you have trouble using this website, email info@nurevo.health.",
      "The full accessibility statement will be published after legal review.",
    ],
  },
  notFound: {
    text: "That page is not on the Nurevo website.",
    home: "Go to the home page",
  },
  pages: [
    {
      path: "/",
      title: "Cognitive screening | Nurevo",
      description: oneLine,
      label: "Home",
      h1: "Cognitive screening, in a conversation.",
      nav: false,
      footer: true,
      lastUpdated: false,
      kind: "home",
      crumbs: [],
    },
    {
      path: "/technology",
      title: "How it works | Nurevo",
      description:
        "How a short conversation is analysed across speech, language, facial signals and background information to produce a risk score.",
      label: "How it works",
      h1: "How Nurevo's cognitive screening works",
      nav: true,
      footer: true,
      lastUpdated: false,
      kind: "standard",
      crumbs: crumbs({ name: "How it works", path: "/technology" }),
    },
    {
      path: "/solutions",
      title: "Solutions | Nurevo",
      description:
        "Who Nurevo is for, and how it is being developed responsibly: system card, roadmap, evaluation plan and data protection.",
      label: "Solutions",
      h1: "Solutions",
      nav: true,
      footer: true,
      lastUpdated: false,
      kind: "standard",
      crumbs: crumbs({ name: "Solutions", path: "/solutions" }),
    },
    {
      path: "/about",
      title: "About | Nurevo",
      description:
        "About Nurevo Technology Limited, SC892389: mission, story, investor brief and company facts for a pre-seed health technology company.",
      label: "About",
      h1: "About Nurevo",
      nav: true,
      footer: true,
      lastUpdated: true,
      kind: "standard",
      crumbs: crumbs({ name: "About", path: "/about" }),
    },
    {
      path: "/company",
      title: "Press kit | Nurevo",
      description:
        "Approved descriptions, facts and logos for Nurevo Technology Limited, company number SC892389.",
      label: "Press kit",
      h1: "Press kit",
      nav: true,
      footer: true,
      lastUpdated: true,
      kind: "standard",
      crumbs: crumbs({ name: "Press kit", path: "/company" }),
    },
    {
      path: "/faq",
      title: "FAQ | Nurevo",
      description:
        "Straight answers on what Nurevo does, who it is for, how data is handled, and how to get in touch.",
      label: "FAQ",
      h1: "FAQ",
      nav: true,
      footer: true,
      lastUpdated: true,
      kind: "faq",
      crumbs: crumbs({ name: "FAQ", path: "/faq" }),
    },
    {
      path: "/contact",
      title: "Contact | Nurevo",
      description:
        "Email or write to Nurevo about investment, clinical and research partnerships, or media.",
      label: "Contact",
      h1: "Contact",
      nav: true,
      footer: true,
      lastUpdated: false,
      kind: "standard",
      crumbs: crumbs({ name: "Contact", path: "/contact" }),
    },
    {
      path: "/privacy",
      title: "Privacy | Nurevo",
      description:
        "Placeholder privacy notice for Nurevo Technology Limited, the data controller for this website.",
      label: "Privacy",
      h1: "Privacy",
      nav: false,
      footer: true,
      lastUpdated: false,
      kind: "legal",
      crumbs: crumbs({ name: "Privacy", path: "/privacy" }),
    },
    {
      path: "/cookies",
      title: "Cookies | Nurevo",
      description:
        "Placeholder cookie notice. This site uses cookieless analytics and has no cookie banner.",
      label: "Cookies",
      h1: "Cookies",
      nav: false,
      footer: true,
      lastUpdated: false,
      kind: "legal",
      crumbs: crumbs({ name: "Cookies", path: "/cookies" }),
    },
    {
      path: "/terms",
      title: "Terms | Nurevo",
      description:
        "Placeholder terms of use for the Nurevo website, awaiting legal review.",
      label: "Terms",
      h1: "Terms",
      nav: false,
      footer: true,
      lastUpdated: false,
      kind: "legal",
      crumbs: crumbs({ name: "Terms", path: "/terms" }),
    },
    {
      path: "/accessibility",
      title: "Accessibility | Nurevo",
      description:
        "Placeholder accessibility statement. Nurevo aims to meet WCAG 2.2 AA on this website.",
      label: "Accessibility",
      h1: "Accessibility",
      nav: false,
      footer: true,
      lastUpdated: false,
      kind: "legal",
      crumbs: crumbs({ name: "Accessibility", path: "/accessibility" }),
    },
    {
      path: "/404",
      title: "Page not found | Nurevo",
      description: "That page is not on the Nurevo website.",
      label: "Page not found",
      h1: "Page not found",
      nav: false,
      footer: false,
      lastUpdated: false,
      kind: "notfound",
      crumbs: [],
    },
  ] satisfies PageMeta[],
};

export function pageByPath(path: string): PageMeta {
  const page = site.pages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Unknown page: ${path}`);
  }
  return page;
}

export function approved<T extends Draftable>(items: T[]): T[] {
  return items.filter((item) => !item.draft);
}

export function pageUpdated(page: PageMeta): string {
  return page.updatedIso ?? site.updatedIso;
}

/** File-name slug for a page: "/" is "index", "/news/x" is "news/x". */
export function pageSlug(page: PageMeta): string {
  return page.path === "/" ? "index" : page.path.replace(/^\//, "");
}

export function publicPages(): PageMeta[] {
  return site.pages.filter((page) => page.kind !== "notfound");
}

export function facts(): Fact[] {
  return [
    { term: "Brand", value: site.brand },
    { term: "Legal name", value: site.legalName },
    {
      term: "Company number",
      value: site.companyNumber,
      href: site.companiesHouse,
    },
    { term: "Registered in", value: site.jurisdiction },
    {
      term: "Registered office",
      value: `${site.street}, ${site.locality}, ${site.postalCode}, ${site.country}`,
    },
    { term: "Headquarters", value: site.headquarters },
    { term: "Team", value: site.team },
    { term: "Founded", value: site.founded },
    { term: "Website", value: site.url, href: site.url },
    { term: "General email", value: site.emails.info, href: `mailto:${site.emails.info}` },
    {
      term: "Investor email",
      value: site.emails.investors,
      href: `mailto:${site.emails.investors}`,
    },
    { term: "Media email", value: site.emails.media, href: `mailto:${site.emails.media}` },
    { term: "LinkedIn", value: site.linkedin, href: site.linkedin },
    { term: "Stage", value: site.stage },
    { term: "Sector", value: site.sector },
  ];
}

export function knowsAbout(): string[] {
  return ["Cognitive screening", "Healthcare AI", "Health technology", "Dementia"];
}
