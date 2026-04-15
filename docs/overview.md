# Site Overview — benflanders.me

> **Purpose:** High-level overview of the website's structure, tech stack, and content for any contributor or agent working on the site.

---

## Hosting & Domain

- **Live URL:** https://benflanders.me
- **Hosting:** GitHub Pages (static export)
- **Repository:** https://github.com/Benrflanders/Benrflanders.github.io
- **Deploy branch:** `prod`
- **CNAME:** `benflanders.me`

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router, static export via `output: 'export'`) |
| Language | TypeScript / React |
| Styling | Tailwind CSS + DaisyUI (theme: `business`) |
| Typography | `@tailwindcss/typography` |
| Font | Inter (via `next/font`) |
| Images | `next/image` + `sharp` |
| Icons | `react-icons` |
| Analytics | Google Tag Manager / GA (env vars: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GTM_ID`) |
| Linting | ESLint (`next/core-web-vitals`) |
| CI/CD | GitHub Actions (`.github/workflows/nextjs.yml`) — Node 20.11, builds and deploys to GitHub Pages |

---

## Site Architecture

This is a **single-page application** with one route (`/`) and hash-based scrolling to sections.

### Page Sections (in order)

1. **Hero** (`components/Hero/`) — Full-screen banner with name, title, email, CTA buttons ("Things Ben has built", "Learn More About Ben"), and a resume download button.
2. **Divider** — Tagline: "Empowering Your Digital Vision with Expert Web Development and Machine Learning"
3. **Portfolio** (`components/Portfolio/`, `id="portfolio"`) — Grid of project cards (8 total): SkiNNer, Artimatic API, Artimatic Web App, Freelance Projects, MS AI Thesis, NPS Water Quality DB, NPS Wildlife DB, Portfolio Website.
4. **Divider** — Quote: "The best way to predict the future is to invent it." — Alan Kay
5. **About** (`components/About/`, `id="about"`) — Bio paragraphs covering background, education, work history, skills, and personal interests.
6. **Divider** — Quote: "If I have seen further, it is by standing on the shoulders of giants" — Sir Isaac Newton
7. **Blog** (`components/Blog/`) — Three subsections: Papers & Patents (patent, thesis, SkiNNer paper), Articles (Stripe blog post), Other Thoughts (Twitter link).
8. **Footer** (`components/Footer/`) — Copyright notice, GitHub and LinkedIn icon links.

### Unused Components
- `components/Contact/index.tsx` exists but is **not** imported on the home page.

---

## Content Model

- **No** CMS, Markdown, or external data files.
- All content is **hardcoded in TSX components**.
- Static assets live in `public/` (images, resume PDF, SVGs).

---

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout (Inter font, DaisyUI business theme)
│   ├── page.tsx            # Single page: Hero → Portfolio → About → Blog → Footer
│   ├── globals.css
│   ├── Home.module.css
│   └── sitemap.ts          # Emits https://benflanders.me/
├── components/
│   ├── About/index.tsx
│   ├── Blog/               # blogEntry.tsx, blogSection.tsx, index.tsx, post.tsx
│   ├── Contact/index.tsx   # (unused)
│   ├── Footer/index.tsx
│   ├── Hero/               # index.tsx, downloadResumeButton.tsx
│   └── Portfolio/index.tsx
├── docs/                   # Documentation for agents and contributors
│   ├── me.md               # Factual reference about Ben (source of truth)
│   └── overview.md         # This file
├── lib/
│   └── gtag.js             # GA tracking ID helper
├── public/                 # Static assets (images, resume PDF, SVGs)
├── .github/workflows/
│   └── nextjs.yml          # CI/CD pipeline
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Key URLs & External Links

| Resource | URL |
|----------|-----|
| Live site | https://benflanders.me |
| Artimatic | https://www.artimatic.io/ |
| Wayfinder Data Solutions | http://wayfinderdata.com/ |
| Patent | https://patents.justia.com/inventor/benjamin-robert-flanders |
| Thesis PDF | https://www.ai.uga.edu/sites/default/files/inline-files/theses/flanders_benjamin_202105_ms.pdf |
| NPS SECN Newsletter | https://www.nps.gov/articles/secn-august19-newsletter.htm |
| Stripe blog post | https://www.artimatic.io/post/three-reasons-i-love-using-stripe |
| GitHub profile | https://github.com/Benrflanders |
| LinkedIn | https://www.linkedin.com/in/benjamin-flanders/ |
| Twitter | https://twitter.com/Benflanders200 |
| Resume PDF | /Ben_Flanders_Resume.pdf (in `public/`) |
