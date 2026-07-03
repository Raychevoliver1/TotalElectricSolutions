# Total Electric Solutions — Website

A static Next.js site for [totalelectricsolutions.co.uk](https://totalelectricsolutions.co.uk), rebuilt to replace the previous WordPress + Elementor site.

## Stack

- **Next.js 16** (App Router), exported as static HTML (`output: "export"`)
- **TypeScript** + **Tailwind CSS v4**
- Content lives in `/content/*.json` and is read at build time (`src/lib/content.ts`)
- **Decap CMS** (`/admin`) for non-technical content editing, backed by Git

See `HANDOFF.md` for deployment and CMS setup instructions.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `/out`.

## Editing content

Page copy, services, projects, and team members live as JSON files in `/content`. Edit them directly, or use the `/admin` content manager once deployed (see `HANDOFF.md`). Images live in `/public/images`.
