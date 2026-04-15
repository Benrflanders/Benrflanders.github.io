# benflanders.me

Personal portfolio website for **Ben Flanders** — hosted at **[benflanders.me](https://benflanders.me)**.

Built with [Next.js](https://nextjs.org/) 14 (App Router, static export), [Tailwind CSS](https://tailwindcss.com/), and [`@tailwindcss/typography`](https://tailwindcss.com/docs/typography-plugin). Deployed to GitHub Pages.

## Documentation

- **[docs/me.md](docs/me.md)** — Factual reference about Ben. Agents and contributors **must** cross-reference this file and never fabricate biographical details.
- **[docs/overview.md](docs/overview.md)** — Site architecture, tech stack, file structure, and key URLs.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (by default [http://localhost:3000](http://localhost:3000)). If something else is already using port 3000, Next.js will use the next free port (for example 3001) and show that URL instead.

## Build & Export

```bash
npm run build
```

This produces a static export in `./out` (configured via `output: 'export'` in `next.config.js`).

## Deployment

The site is deployed automatically via GitHub Actions (`.github/workflows/nextjs.yml`) to GitHub Pages on the `prod` branch. The custom domain `benflanders.me` is configured via the `CNAME` file.

## Google Tag Manager

Google Tag Manager can preview tags at http://localhost:3000/. Start the dev server, then preview current tags at that URL.
