# Audit of the previous Nurevo website

Reviewed on 31 October 2026, before the rebuild of this repository.

Sources reviewed:

- Rendered pages at https://nurevo.tech
- The repository source, which is what Vercel builds

The live site and this repository were the same single-page app. There were no other routes.

## How the old site was built

The site was a Vite and React single-page app. [index.html](index.html) contained an empty `<div id="root">` and loaded JavaScript. The readable copy lived in React components, not in the server HTML.

That fails the requirement that every page is readable with JavaScript disabled, and it is a poor source for search engines and AI tools that do not execute JavaScript.

Other technical gaps:

- `lang` was `en`, not `en-GB`
- No canonical URL
- No Open Graph image
- No JSON-LD
- No `robots.txt`, sitemap, or `llms.txt`
- No security headers in [vercel.json](vercel.json)
- No redirect from `nurevo.tech` to `nurevo.health`
- Footer and contact used `info@nurevo.tech`
- The title used a dash and the banned word "detection": "Nurevo — AI-Powered Early Detection for Alzheimer's"
- The meta description used "detection" and framed the product as Alzheimer's detection
- The hero image at `public/hero_section.png` is about 5.8MB
- Logos were CSS-inverted copies of older files, not the supplied brand files
- [src/components/Features.tsx](src/components/Features.tsx) was unused template copy ("Fast setup", "Built to scale", "Team-first")
- [src/components/MarketOpportunity.tsx](src/components/MarketOpportunity.tsx) was not mounted in [src/App.tsx](src/App.tsx), but the market claims were still in the repository

## Identity problems

The old site called the company "Nurevo Limited". The legal entity is Nurevo Technology Limited, company number SC892389.

Missing from every page, the footer, and metadata:

- Legal name and company number
- Registered office
- Headquarters
- Founding date
- Stage
- Bethnal Green Ventures
- `nurevo.health` email addresses
- The screening disclaimer

The one-line description was "AI-powered, multimodal early detection for Alzheimer's disease." That is not the approved description, and it uses banned wording.

## Language that had to be removed

Banned or out-of-policy wording found in the rendered page, metadata, or source:

- detection, early detection, diagnostic, diagnosed, diagnostic accuracy, diagnostic pathway, diagnostic bottleneck, diagnostic process, diagnostic funnel
- "proven track record"
- Alzheimer's disease as the name of the condition. Management asked for "dementia" in reader-facing copy, because it is easier to understand. The old title, description, hero, about section, and footer all said Alzheimer's.

The phrase "not a diagnostic device" did not appear. The old site did the opposite: it described a diagnostic process.

## Claims and names that are not allowed

Unsourced or out-of-scope figures:

- 55 million global cases, and 139 million by 2050
- 60% of cases never formally diagnosed
- Market figures in the unused market component: $6.5B, $2B, $3.2M, and "Greater China" and "Greater Bay Area by 2030"

Named drugs, institutions, places, languages, and other entities:

- Lecanemab and Donanemab
- National Hospital for Neurology and Neurosurgery (UCLH)
- Fudan University
- Cantonese and Mandarin
- Greater China and the Greater Bay Area
- MoCA
- "Attention Rollout Engine"
- Provisional patents and proprietary datasets

No personal names were published. No prices or investment amounts were published. No backer was named.

The old "About us" section described unnamed clinical and engineering leadership, including venture-backed exits. That copy is removed. The new site does not name team members.

## What the rebuild changes

- Replaced the single-page app with a static multi-page site whose text is in the HTML.
- Moved the public identity to https://nurevo.health, with host redirects from `nurevo.tech` and `www` hosts.
- Put the approved facts in one content file, and built the pages, footer, JSON-LD, sitemap, and `llms.txt` from that file.
- Replaced Alzheimer's framing with dementia in reader-facing statistics and explanation. The words "Alzheimer's Society" remain only as the name and URL of the source for the UK figures.
- Removed the banned clinical claims, unsourced global figures, market sizing, drug names, institutions, languages, patents, and the old legal name.
- Added the legal name, company number, registered office, stage, Bethnal Green Ventures, and the screening disclaimer.
- Replaced old logo files and the hero photograph with the supplied logo files and abstract graphics.
- Added the page set in the brief, including contact routes, a draft news post, and legal pages marked for review.

The UK figures used on the new home page are the ones supplied for this project, each with a visible link to the Alzheimer's Society source. The "no diagnosis" statistic is written without that banned word. The figure and the source link remain.
