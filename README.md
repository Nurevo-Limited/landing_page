# Nurevo Landing Page

A static landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site locally.

## Build

```bash
npm run build
```

This outputs a static `dist/` folder ready for deployment.

Preview the production build locally:

```bash
npm run preview
```

## Deploy

The `dist/` folder can be hosted on any static file host:

- **Netlify / Vercel / Cloudflare Pages** — connect the repo with build command `npm run build` and publish directory `dist`
- **GitHub Pages** — upload the `dist/` contents or use a GitHub Actions workflow
- **S3 / any web server** — upload the `dist/` folder contents

No Node.js runtime is required in production.

## Project structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```
