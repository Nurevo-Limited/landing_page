# Nurevo website

The public website for Nurevo Technology Limited. It is a static site. The words on the pages are in the HTML, so they can be read with JavaScript turned off.

The primary address is https://nurevo.health.

## Requirements

Node.js 22. The version is recorded in `.nvmrc`.

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open http://localhost:4321.

## Build

```bash
npm run build
```

This writes the site to `dist/` and then checks the built pages for banned wording, missing facts, and broken structured data. `npm run check` runs that check on its own, after a build.

Preview the built site:

```bash
npm run preview
```

## Contact forms

Copy `.env.example` to `.env` and set `PUBLIC_FORMSPREE` when the form exists. That form must email info@nurevo.tech. Every topic on Talk to us uses it.

Until it is set, the Send button stays disabled.

## Deploy

The site is hosted on Vercel. The build command is `npm run build` and the output directory is `dist`.

Production should use the domain `nurevo.health`, without `www`. Host redirects for `nurevo.tech`, `www.nurevo.tech`, and `www.nurevo.health` are in `vercel.json`. They only work after those domains are attached to the same Vercel project.

See `HANDOVER.md` before changing copy. See `SEARCH-SETUP.md` for search-engine verification.

## Checks

```bash
npm run lint
npm run build
```

`npm run lint` is the Astro type check. The build check scans the HTML for wording that must not appear on this site.
