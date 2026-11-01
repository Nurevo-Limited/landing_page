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

Production is https://nurevo.health, without `www`. `www.nurevo.health` redirects to that address.

The site is a private S3 bucket behind CloudFront. DNS for `nurevo.health` is the Route 53 zone already in the AWS account. `infra/site.yaml` describes the bucket, certificate, distribution, DNS records, and the GitHub publish role.

GitHub Actions (`.github/workflows/ci.yml`) runs the checks on pull requests. A push to `main` builds the site and publishes `dist/`. `PUBLIC_FORMSPREE` is set in that workflow and is baked into the contact page at build time.

`nurevo.tech` is not part of this deployment. Its website still points at the previous host, and its mail records stay as they are.

Create or update the AWS resources:

```bash
aws cloudformation deploy \
  --profile nurevo \
  --region us-east-1 \
  --stack-name nurevo-landing \
  --template-file infra/site.yaml \
  --capabilities CAPABILITY_NAMED_IAM
```

Publish a build from this machine:

```bash
AWS_PROFILE=nurevo npm run publish
```

See `HANDOVER.md` before changing copy. See `SEARCH-SETUP.md` for search-engine verification.

## Checks

```bash
npm run lint
npm run build
```

`npm run lint` is the Astro type check. The build check scans the HTML for wording that must not appear on this site.
