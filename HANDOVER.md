# Handover

Read this before you change the Nurevo website. When you change the site, add a dated note to the change log at the end of this file.

## 1. What this site is for

This is the public website of Nurevo Technology Limited. It has three jobs.

People and AI tools should be able to describe the company from this site alone, without confusing it with another business that uses a similar name. That is why the legal name and company number appear with the brand.

An investor should be able to understand the company, its stage, and its backing in a couple of minutes, and then write to us.

NHS organisations, research groups, care providers, and pharmaceutical partners should be able to see that the product is still in development, and should have a clear way to get in touch.

The pages speak in plain UK English. They describe screening and triage. They do not say the product can diagnose, detect, or cure anything.

Reader-facing pages say dementia, because that is the word management asked us to use. The product description supplied for the company still says cognitive screening and cognitive decline. Those sentences are kept word for word. The name Alzheimer's Society appears only as the publisher of the UK figures, with a link to their page.

## 2. Change log

### 31 October 2026

Replaced the old one-page React site with this static site.

- Recorded the review of the old site in `AUDIT.md`. Removed Alzheimer's detection claims, unsourced global figures, drug names, hospital names, named languages, patents, market sizes, and the wrong legal name "Nurevo Limited".
- Published the approved company facts, the dementia figures with their source, the pre-seed stage, and the backing from Bethnal Green Ventures.
- Added the pages listed in the brief, structured data, `llms.txt`, `robots.txt`, a sitemap, canonical links, and host redirects toward `nurevo.health`.
- Set the public wording rule: say dementia, not Alzheimer's, except for the source name Alzheimer's Society.

### 1 November 2026

Set the pages out so a person or an assistant can quote the same facts, without adding claims.

- Home now opens with the stage line, then one idea at a time: the headline, the signal visual, the sourced UK figures, and routes for each audience.
- How it works explains each stream on its own, with a diagram and a plain statement of what the tool is not.
- Research is a system card: intended use, population, inputs, output, limits, oversight, data, fairness, an undated roadmap, and the statement that Nurevo holds no conformity marking.
- Company facts include the regulatory sentence for journalists, common misconceptions, colour values, and a plain-text fact sheet at `/facts.txt`.
- FAQ questions are grouped and each has its own link. A new answer states that the storage region has not been published.
- Paste the short description from the press kit, word for word, onto LinkedIn, Crunchbase, and the Bethnal Green Ventures listing. Those profiles are not updated from this repository.
- The signal panel now names the four streams: speech timing and voice, language, facial movement, and background information.
- Dementia figures include the World Health Organization worldwide counts for 2021, beside the three Alzheimer's Society figures for the UK.
- Who it is for, Solutions, How it works, and Research use diagrams and cards. Talk to us appears once for those audiences, not on every card.
- The press kit page keeps the address `/company` and is labelled Press kit.
- Contact is one form. The person chooses investors, clinical and research partners, or media. The three email addresses stay on the page. Send stays off until the Formspree addresses are set.
- The Bethnal Green Ventures logo is the published mark, shown on a white background.

### 1 November 2026, design and AI visibility update

Made the site look and read like a mature company, and made it easier for AI tools to describe the company correctly. No approved wording was changed.

- New look: navy hero with an animated four-stream signal, a serif display face (Newsreader) for headings, gradient main buttons, soft glow behind visuals, and one set of line illustrations in the logo's rounded style. Brain imagery, robots, photos and accuracy tiles are still excluded.
- Motion plays once and then stays still. It uses CSS only, so the page is complete without JavaScript, and it switches off for anyone who asks for reduced motion.
- Home now shows the three steps and the "why this approach" copy that were written but not shown, an illustrative product view labelled as an example, numbered sources for the dementia figures, and an Investors card.
- How it works now shows the numbered pipeline diagram, a card for each stream, a "Human in the loop" panel, and the "What it is not" box.
- Research has a status strip, an on-page index, a roadmap timeline, and draft sections for the evaluation plan and the standards Nurevo is working towards.
- New page: `/investors`, an investor brief built from approved facts.
- FAQ has the audience groups from the design brief and new draft answers to the hard questions.
- Press kit has copy buttons. They appear only when JavaScript runs.
- New draft copy is marked [to be approved] on the page and is kept out of every machine-readable file. See "Approve draft copy" below.
- For AI tools: a markdown copy of every page (for example `/technology.md`), `/llms-full.txt` with the whole site as text, a richer `llms.txt`, a WebPage node with `dateModified` on every page, `disambiguatingDescription` on the Organization, and a social image for each page.
- `robots.txt` now also names Googlebot, Applebot, Perplexity-User, DuckAssistBot, Amazonbot, Meta-ExternalAgent, MistralAI-User and CCBot.
- Added IndexNow (`npm run indexnow`) and `/.well-known/security.txt`.
- Header logo is served as WebP, which cut its size from 81 kB to 3 kB.
- The release check now also fails on draft copy in machine-readable files, missing markdown copies, missing social images, and inline styles or scripts, which the security policy would block.
- Lighthouse (mobile, local preview): performance 99 to 100, accessibility 100, SEO 100 on home, How it works, Investors, Research, FAQ and Press kit.

### 1 November 2026, review feedback

Changes requested by the site owner after reviewing the redesign.

- All copy that was marked [to be approved] was approved by the site owner and published, including the FAQ answers, the investor brief, the evaluation plan, the Our story paragraph and the news post. The markers are gone, and the copy now also appears in `llms.txt`, the FAQ structured data and the markdown copies.
- Research is merged into Solutions (`/solutions#research`), and Investors is merged into About (`/about#investors`). `/research` and `/investors` permanently redirect there.
- Removed "Standards we are working towards" and Publications. The regulatory statement stays, under "Regulatory status".
- Data protection is now three high-level principles: consent, UK GDPR and data minimisation. The ICO number and storage region are still on the privacy page and in the FAQ.
- "Who it is for" is general: health systems and memory services, primary care, care homes and community organisations, and pharmaceutical and research partners. Each card has an icon.
- Home: the product preview is now a laptop showing an example conversation and example analytics, labelled illustrative.
- Contact: one form with a topic dropdown, no route cards and no placeholder text. It sends in the page and shows a confirmation. See "Set up the contact form".
- Every inner page has an animated line visual in its header.
- FAQ is in the main navigation.

### 1 November 2026, second review

- **Bethnal Green Ventures removed.** The investment has not been completed, so at the site owner's request every mention was removed: the last sentence of the short and long descriptions ("Nurevo is backed by Bethnal Green Ventures."), the backer rows on Home, About and the footer, the Organization `funder` in structured data, the investor line in `llms.txt` and `facts.txt`, two FAQ answers, and a common misconception. The release check now fails if "Bethnal" or "BGV" appears anywhere in the built site. The logo is kept, unpublished, in `brand-archive/bgv-logo.svg`. See "Restore the investor" below.
- **News removed.** It held only the investment announcement. `/news` and its post now send visitors to the home page with a temporary redirect, so the address can be used again later.
- Home: the laptop preview shows a video conversation with face tracking, live captions, the speech waveform and call controls, beside the same analytics. The closing section has a single "Talk to us" button.
- Solutions: a new hero visual shows four input streams feeding a model with an attention grid, then an explanation. The roadmap is a track from "Today" (working prototype of the data pipeline) through the four planned steps. Regulatory status is a status board (what it is, clinical use, conformity marking, regulatory clearance, intended route) followed by the intended route in four planned steps. It names no standards and no dates.
- About: the investor section says "For investment enquiries, email investors@nurevo.health or submit the contact form."

### 1 November 2026, roadmap and Talk to us

- About: the investor close now says "For investment enquiries, talk to us." and has one Talk to us button.
- Talk to us keeps the topic dropdown. Every topic is sent to info@nurevo.tech through one Formspree form (`PUBLIC_FORMSPREE`).
- Solutions roadmap: the working prototype and feasibility testing are complete, and model development is in progress. Clinical studies and the UK pathway remain planned.

### 2 November 2026

Moved production hosting from Vercel to AWS.

- `nurevo.health` and `www.nurevo.health` are served from a private S3 bucket through CloudFront. The template is `infra/site.yaml`. DNS stays in the existing Route 53 zone.
- GitHub Actions publishes `main`. The contact form address `PUBLIC_FORMSPREE` is set in that workflow.
- Removed Vercel Web Analytics. The privacy and cookie notices now say the site does not use analytics.
- `nurevo.tech` is unchanged. Its website still points at the previous host, and its mail records stay in Route 53.

## 3. How the site is built

The site is a static [Astro](https://astro.build) project with Tailwind CSS. The body font is Inter and the heading font is Newsreader. Both are loaded from the project itself, not from a third-party font host. There is no React. Page text is HTML. The mobile menu uses a `details` element, so it works with JavaScript off.

The design is built from a few colour values in `src/styles/global.css`: navy `#0A1628` and the gradient `#7398FF` to `#A9EDFF`. The gradient is only for the wordmark, main buttons and the signal visuals, never for body text. Page bands use `src/components/ui/Section.astro`. A `dark` or `deep` band switches links and buttons to their light versions.

Motion is CSS only. `.draw`, `.fade` and `.rise` play once on load. `.reveal` and `.reveal-draw` play as a section scrolls into view, in browsers that support scroll-driven animation. Everything is visible without them. Do not add motion that loops, and do not hide text until a script runs.

The content security policy blocks inline `style` attributes and inline scripts. Put colours in classes or SVG attributes, and put scripts in `public/` and load them with `src`, as `contact-form.js` and `copy.js` do.

AWS hosts the site. CloudFront adds the security headers, and a CloudFront function does the redirects and the extensionless page routes. `vercel.json` keeps the same rules for any leftover Vercel project. The site does not load analytics.

Node.js 22 is the version to use. See `.nvmrc`.

### Where things live

| What | Where |
| --- | --- |
| All facts and page copy | `src/content/site.ts` |
| Pages | `src/pages/` |
| Header, footer, forms, illustrations, pipeline diagram | `src/components/` |
| Shared building blocks (section, heading, button, sources, draft marker) | `src/components/ui/` |
| Shared head, header, and footer | `src/layouts/Base.astro` |
| JSON-LD | `src/lib/jsonld.ts`, built from `site.ts` and placed in each page |
| `llms.txt` | `src/lib/llms.ts` and `src/pages/llms.txt.ts` |
| Plain-text fact sheet | `src/lib/facts.ts` and `src/pages/facts.txt.ts` |
| Markdown copy of each page and `llms-full.txt` | `src/lib/markdown.ts`, `src/pages/[...slug].md.ts`, `src/pages/llms-full.txt.ts` |
| `robots.txt` | `src/pages/robots.txt.ts` |
| Sitemap | `src/pages/sitemap.xml.ts` |
| Logos and icons | `public/brand/` |
| Social images, one per page | `public/og/`, built by `scripts/build-og.mjs` |
| IndexNow ping and key | `scripts/indexnow.mjs` and the key file at the root of `public/` |
| Release check | `scripts/check-release.mjs` |
| AWS hosting | `infra/site.yaml` |
| Publish | `scripts/publish.sh`, run by `.github/workflows/ci.yml` on `main` |

`site.ts` is the only place company facts are written. The footer, the pages, the structured data, `llms.txt`, and the sitemap read from it. If you type a fact into a page by hand, the next edit will drift.

## 4. Common changes

### Edit a sentence or a company fact

Open `src/content/site.ts`. Change the fact there. Do not paste the new wording into a component. Run `npm run build` and read the check output.

The one-line description, the short description, the mission, the story, the stage line, the footer registration sentence, and the disclaimer are approved wording. Change them only when the company has agreed the new words.

When you update LinkedIn, Crunchbase, or another listing, paste the short description from the company page unchanged.

### Add a news post

News was removed on 1 November 2026 because it held only one announcement. To bring it back:

1. Add a `news` object in `site.ts` with an intro and the post's headline, date and paragraphs.
2. Add page entries in `site.pages` for `/news` (kind `news`) and the post (kind `article`), with titles ending in `| Nurevo` and descriptions under 160 characters.
3. Add the pages under `src/pages/news/`, a markdown body for each path in `src/lib/markdown.ts`, and a `NewsArticle` node in `src/lib/jsonld.ts`.
4. Remove the `/news` redirects from the CloudFront function in `infra/site.yaml` and from `vercel.json`, and add `/news` to the Company list in `footerGroups`.
5. Do not add a quote, an amount, or a person's name unless that has been explicitly approved. Run `npm run og`, and add a dated line to the change log.

### Approve draft copy

New copy that the company has not yet agreed has `draft: true` in `src/content/site.ts`. The page shows it with a [to be approved] marker. JSON-LD, `llms.txt`, `llms-full.txt`, `facts.txt` and the markdown copies leave it out.

To approve a piece of copy, delete its `draft: true` line, run `npm run build`, and add a line to the change log. To reject it, delete the item. The build prints how many markers are still visible.

### Set up the contact form

The form keeps a topic dropdown, and every topic posts to one Formspree form. That form emails info@nurevo.tech.

1. Sign in at [formspree.io](https://formspree.io) with a company account.
2. Create one form, "Talk to us", sending to info@nurevo.tech. Confirm that inbox when Formspree asks.
3. In the form's settings, add `nurevo.health` as an allowed domain.
4. Set `PUBLIC_FORMSPREE` to the form's full URL, such as `https://formspree.io/f/abcdwxyz`, in `.github/workflows/ci.yml`. Do the same in a local `.env` to test. Remove `PUBLIC_FORMSPREE_INVESTORS`, `PUBLIC_FORMSPREE_PARTNERS` and `PUBLIC_FORMSPREE_MEDIA` if they are still set.
5. Redeploy. Send one test message for each topic and confirm each one arrives at info@nurevo.tech.

Until the address is set, the Send button stays disabled and the build prints a warning. The security policy already allows the form to post to Formspree.

### Update the social images

Run `npm run og` after you change a page title, h1 or description, or add a page. Commit the new files in `public/og/`. The release check fails if a page has no image.

### Tell search engines about a release

After a production deploy, run `npm run indexnow`. It sends every page, every markdown copy and the text files to IndexNow, which Bing uses. Bing results feed Copilot and ChatGPT search. Keep the key file in `public/` deployed.

### Add a page

1. Add an entry to `site.pages`. `nav: true` puts it in the header. `footer: true` puts it in the footer. `lastUpdated: true` shows the date. Set `kind` to `standard`, `legal`, `faq`, `news`, or `article`.
2. Create `src/pages/your-page.astro` using `Base`. Pass `pageGraph(page)` into it.
3. Add a markdown body for the path in `src/lib/markdown.ts`. The build fails without it.
4. Run `npm run og` to make its social image.
5. The sitemap, `llms.txt` and `llms-full.txt` pick up any page whose kind is not `notfound`.
6. Add a dated line to the change log.

### Add Crunchbase, PitchBook, or Dealroom

Add the full `https` URL to `extraSameAs` in `src/content/site.ts`. It is copied into the Organization `sameAs` list. Do not invent a profile URL.

### Restore the investor

When an investment is confirmed and the company approves naming the investor:

1. Add an `investor` object (name and URL) and a `backedBy` line in `site.ts`, and add the agreed sentence to the short and long descriptions.
2. Add it back to `facts()`, the Organization `funder` in `src/lib/jsonld.ts`, `llms.ts` and `facts.ts`.
3. Put the logo file in `public/brand/` and show it on Home, About and the footer. The archived Bethnal Green Ventures logo is in `brand-archive/`.
4. Remove that investor's name from the `denied` list in `scripts/check-release.mjs`.
5. Add a dated line to the change log, including who approved it.

### Add a team page later

Do not add names, photos, or `Person` structured data until the company asks for a team page. When that happens:

- Add a normal page, as above.
- Use `Person` only for people the company has agreed to name.
- Keep the organization facts in `site.ts`.
- Add a dated line to this change log, including who approved the names.

## 5. Content rules

These rules are here so a later edit does not undo the regulatory and factual care in this version.

**Regulatory language.** Nurevo is a screening and triage tool in development. It is not a diagnostic device and it is not available for clinical use. Do not write detect, detection, diagnose, diagnosis, or diagnostic, except the sentence "not a diagnostic device" and the FAQ question "Is Nurevo a diagnostic tool?". Do not write catch, prevent, cure, protect memory, proven, validated, accurate, accuracy, or any AUC figure. Do not write first, only, leading, or revolutionary, except the approved phrase "who needs specialist assessment first". Do not write MHRA approved, UKCA, CE marked, or NHS approved. Do not use the NHS logo. You may say that Nurevo intends to follow the UK pathway for software as a medical device, overseen by the MHRA.

**Dementia, not Alzheimer's.** Use dementia when you are naming the condition for a reader. Keep the approved sentences that say cognitive screening and cognitive decline. The only allowed appearance of Alzheimer's is the source name "Alzheimer's Society" and the URL of that source page.

**No unsourced statistics.** The only figures on the site are the three UK dementia figures, each with a visible link to the Alzheimer's Society page. Do not add a number, a percentage, or a money figure unless you also add the source in the same place.

**One legal entity.** The company is Nurevo Technology Limited, number SC892389, registered in Scotland. Do not write "Nurevo Limited". Pair the brand, the legal name, and the company number on About, the company facts, the footer, and the structured data.

**No extra names.** Do not add team or founder names, patents, prices, investment amounts, competitor names, institutional partners, specific languages, or any other company, office, programme, or grant. No investor is named on the site until an investment is confirmed and approved for publication. If a fact is missing, write `[placeholder]` rather than guessing.

**Punctuation.** Do not use an em dash or an en dash as punctuation inside a sentence. Hyphens in words such as pre-seed and cross-modal are fine.

**UK English.** Use spellings such as organisation, analysed, and prioritise.

The release check enforces the banned words, the Alzheimer's exception, the removed names from the old site, and the company facts. It does not understand intent. Read the page yourself as well.

## 6. Domains, hosting, and analytics

- Primary domain: `https://nurevo.health` with no `www`.
- CloudFront permanently redirects `www.nurevo.health` to the same path on `https://nurevo.health`.
- `nurevo.tech` and `www.nurevo.tech` are not on this distribution. Moving them would replace the live site at `nurevo.tech`. Leave the mail records in that Route 53 zone alone.
- Canonical links point at `nurevo.health`.
- The site does not use analytics. Do not add a tracking pixel or a cookie banner.
- Security headers, including a content security policy, are on the CloudFront distribution in `infra/site.yaml`. The same policy is in `vercel.json` for a leftover Vercel project. If you add a new script host, update both. Do not weaken the policy so that an inline script can run.
- Do not put a firewall in front of the site that blocks GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, Google-Extended, Googlebot, Applebot, Applebot-Extended, Bingbot, DuckAssistBot, Amazonbot, Meta-ExternalAgent, MistralAI-User, or CCBot. `robots.txt` allows them.
- Markdown copies (`*.md`) are sent with `X-Robots-Tag: noindex`, so search engines index the HTML page and AI tools can still fetch the markdown.

Search Console and Bing setup are in `SEARCH-SETUP.md`.

## 7. Checks before every release

1. Search the built HTML for the banned words in section 5. `npm run build` does this.
2. Confirm structured data still matches the facts. The same check parses the JSON-LD. You can also paste a page into the [Schema Markup Validator](https://validator.schema.org/).
3. Open a built page with JavaScript disabled, or view the source. The main text must be in the HTML, not injected later.
4. Run Lighthouse on a mobile view of the home page and one inner page. Accessibility and SEO should be at least 95. Performance should be at least 90.
5. Read the changed page against the content rules above.
6. Add a dated entry to the change log in this file.

`npm run lint` runs the Astro type check. Run it when you change components. It needs Node.js 22. Node 20 fails with `ERR_REQUIRE_ESM`.

To check AI access after a deploy, fetch `/`, `/llms.txt`, `/llms-full.txt` and `/technology.md` with a crawler user agent, for example `curl -A "GPTBot" https://nurevo.health/llms.txt`. Each should return 200 with the full text, not a challenge page.

## 8. Open items

- ICO registration number. The privacy page says `[number]` until the real number is supplied.
- The incorporation day. The site says June 2026. Structured data uses `2026-06` so we do not invent a day.
- One Formspree form that emails info@nurevo.tech. See "Set up the contact form" above.
- Investor. No backer is named until an investment is confirmed. See "Restore the investor".
- Legal review of the privacy, cookies, terms, and accessibility pages. They are marked as placeholders.
- `nurevo.tech` still points at the previous host. Attach it to CloudFront only when that site should redirect to `nurevo.health`. Do not change its MX or DKIM records.
- Stage line. The design brief suggests "Pre-seed. Prototype stage. Preparing clinical validation." The site keeps the approved line "Pre-seed. Working prototype of the data pipeline; preparing clinical validation." Change it only if the company agrees.
- Published research citations for "why it may matter" on each stream card on How it works. The cards show only "What we look at" until approved citations are supplied.
- Paste the approved short description, unchanged, into Crunchbase, Dealroom, PitchBook and LinkedIn. Add each profile URL to `extraSameAs`. AI tools rely heavily on these profiles.
- After the first production deploy, run `npm run indexnow`. Then ask ChatGPT, Perplexity and Claude "What is Nurevo Technology Limited and what stage is it at?" and record the answers here as a baseline.
