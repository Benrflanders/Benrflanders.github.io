# Design system — benflanders.me

This document describes how the site is built visually and structurally today, and how it could evolve. It is for humans and agents who change UI without drifting from intent.

---

## 1. Current design in one sentence

A **single long-scrolling page** with a **full-viewport hero**, **DaisyUI “business”** (dark, corporate blue) as the global theme, **Tailwind utility classes** everywhere, and **almost no custom CSS** beyond global smooth scrolling.

---

## 2. Color scheme

### 2.1 Global theme

The active theme is set on the document root:

```23:24:app/layout.tsx
    <html lang="en" className={inter.className} data-theme="business">
      <body>{children}</body>
```

**DaisyUI `business` (v2.x)** is a **dark** theme (`color-scheme: dark`). Core tokens from the bundled theme definition:

| Token | Typical role | Hex (theme default) |
|-------|----------------|---------------------|
| `primary` | Brand / main actions | `#1C4E80` |
| `secondary` | Secondary actions, alternate surfaces | `#7C909A` |
| `accent` | Highlights (available; used lightly in components) | `#EA6947` |
| `neutral` | Dark structural UI | `#23282E` |
| `base-100` | Deepest “page” surface in this theme | `#202020` |
| `info` | Informational | `#0091D5` |
| `success` / `warning` / `error` | Semantic states | `#6BB187` / `#DBAE59` / `#AC3E31` |

DaisyUI also exposes **`*-content`** pairs (e.g. `primary-content`, `base-content`) for accessible foreground colors on those surfaces; components and utilities reference them rather than raw hex.

**Theme radius (business):** `--rounded-box: 0.25rem`, `--rounded-btn: 0.125rem`, `--rounded-badge: 0.125rem` — a **tight, professional** corner radius, not playful.

`tailwind.config.js` registers many DaisyUI themes, but **only `business` is applied** at runtime; the rest are unused unless you add a theme switcher.

### 2.2 How colors are used in components

| Area | Classes / pattern |
|------|-------------------|
| Main shell | `bg-base-300` on `<main>` |
| Hero backdrop | `bg-base-300`, hero image with `object-cover` |
| Hero overlay card | `bg-base-100` at **75% opacity** (`bg-opacity-75`), `rounded-3xl` |
| Hero headings / email | `text-primary-content` |
| Primary CTAs | `btn btn-primary` (circular max-width buttons) |
| Resume | `btn btn-secondary` |
| Section dividers | `divider prose-xl` on neutral-ish bands |
| Portfolio grid | `bg-neutral-200` |
| Portfolio cards | `card bg-base-100 shadow-xl` |
| About panel | `bg-neutral-200` section, inner `bg-neutral-100` with `text-secondary-content` |
| Blog entries | `card bg-neutral-400` with `text-secondary-content` titles/body |
| Footer | `bg-neutral-200`, `text-accent-content` |

**Inconsistency to be aware of:** Portfolio and About lean on **Tailwind `neutral-*`** (gray scale) while the global theme is **semantic DaisyUI**. Those grays are **not** the same as `neutral` / `base-*` from the theme, so elevation and “card on page” relationships are partly **ad hoc** rather than one coherent scale.

---

## 3. Typography

| Choice | Implementation |
|--------|------------------|
| **Family** | **Inter** via `next/font/google` — applied as `inter.className` on `<html>` (entire site). |
| **Scale / rhythm** | Mix of **semantic HTML headings** (`h1`–`h4`) and DaisyUI `card-title`. |
| **Prose** | `@tailwindcss/typography` — `prose-lg`, `prose-2xl`, `prose-xl`, `prose-md` on hero and about blocks for readable line length and type scale. |

There is **no second display font** and **no fluid type**; sizing is breakpoint-based (`md:`, `lg:`) where used.

---

## 4. Layout and spatial patterns

| Pattern | Where |
|---------|--------|
| **Full-viewport hero** | `h-screen` / `max-h-screen`; background image `fill` + overlay column with CTAs |
| **Single-column with centered caps** | About: `lg:grid-cols-4` with empty side columns to center a `lg:col-span-2` content block |
| **Responsive grids** | Portfolio: `grid-cols-1 md:grid-cols-2 xl:grid-cols-3`; Blog sections: `grid-cols-1 lg:grid-cols-2` |
| **Max width** | Hero text card: `md:max-w-screen-md`; buttons `max-w-xs` / `md:max-w-md` |
| **Scroll** | `html { scroll-behavior: smooth; }` in `app/globals.css`; in-page anchors `/#portfolio`, `/#about` |

**Viewport width:** frequent `w-screen` / `max-w-screen` — full-bleed sections edge-to-edge.

---

## 5. Key UI components (DaisyUI vocabulary)

Recurring primitives:

- **Buttons:** `btn`, `btn-primary`, `btn-secondary`, `btn-circle`, `btn-square`, `btn-ghost`
- **Cards:** `card`, `card-body`, `card-title`, `card-actions`
- **Code stack display:** `mockup-code` + `<pre><code>` for tech tags in portfolio
- **Dividers:** `divider` between major sections
- **Footer:** `footer` utility layout with grid columns

**Icons:** `react-icons` (e.g. `FaFileDownload` on resume). **Images:** `next/image` for hero, logos, footer social marks.

---

## 6. Style-related code architecture

| Layer | Role |
|-------|------|
| **`app/layout.tsx`** | Font + `data-theme="business"` + global metadata |
| **`app/globals.css`** | Tailwind directives + **only** `scroll-behavior: smooth` on `html` |
| **`tailwind.config.js`** | Content globs, `@tailwindcss/typography`, `daisyui` plugin + long `themes` list (compile-time inclusion) |
| **`app/Home.module.css`** | **Legacy create-next-app styles — not imported anywhere.** No effect on the live site. |
| **Components** | Almost **100% Tailwind class strings** in TSX; no CSS modules, no styled-components, no design tokens file |

**Implication:** “Design tokens” live in **DaisyUI’s business theme** + **inline Tailwind classes**. Changing the whole look means either switching `data-theme`, customizing DaisyUI in `tailwind.config.js`, or refactoring repeated utilities.

---

## 7. Imagery and brand

- **Hero:** `public/hero_banner.png` — abstract blue / gray / white art (alt text describes palette).
- **Artimatic:** `public/artimatic.png` in portfolio cards.
- **Footer:** GitHub SVG + LinkedIn bug image.

Visual tone: **professional, dark, blue-forward**, with **high contrast** hero text on a frosted panel over imagery.

---

## 8. Interaction and motion

- **Smooth scroll** to hash sections.
- **Resume:** client component opens PDF in a new tab (`window.open`).
- **Links:** external portfolio/blog links use `rel="noopener noreferrer"` and `target="_blank"` where applicable.
- **No** page transitions, scroll-driven animations, or reduced-motion-specific behavior beyond defaults.

---

## 9. Gaps and risks (current state)

- **Two parallel color systems:** DaisyUI semantic colors vs raw `neutral-100/200/400` — can drift or clash if themes change.
- **Unused CSS module** (`Home.module.css`) adds noise for anyone reading the repo.
- **Blog “Coming Soon”** renders a disabled-style secondary button for entries without URLs — fine functionally, but not visually distinguished as “placeholder.”
- **Accessibility:** rely on DaisyUI + browser defaults; no documented focus-ring strategy, skip link, or landmark outline beyond implicit `<main>` / `<footer>`.
- **Navigation:** no persistent header nav; users depend on hero buttons and scrolling.

---

## 10. Ideal design direction (no code — product / UX vision)

This section describes how the site *could* work and feel if you invested in the next iteration, while staying honest to the same content and `docs/me.md`.

### 10.1 Information architecture

- **Sticky or top-of-page navigation** with anchors (Portfolio, About, Writing) so returning visitors never hunt the hero CTAs.
- **Optional “current focus” strip** under the hero (e.g. role + location + date range) so new positions do not require users to read the whole About wall.
- **Clear primary vs secondary CTAs** (e.g. one solid “View work” and one outline “Contact / resume”) to reduce three similar-weight circles.

### 10.2 Visual system

- **Unify surfaces:** map every section to **semantic** `base-100` / `base-200` / `base-300` (or a small custom palette in `tailwind.config`) and retire mixed `neutral-*` **or** explicitly define a “gray ladder” in one place.
- **Accent with purpose:** use `accent` (coral in business) for links, focus states, or one highlight per viewport so the palette feels intentional.
- **Slightly larger radius or stricter grid** — pick one: either embrace the theme’s sharp corners everywhere, or soften cards consistently for a more “product” feel.

### 10.3 Typography and content hierarchy

- **Type ramp** in one config (or Tailwind `theme.extend.fontSize`) so `h1` on hero, portfolio card titles, and blog section titles feel related, not competing.
- **Shorter About scannable blocks** (bullets + short paragraphs) with an optional “full story” expand — same facts as today, easier to skim.

### 10.4 Motion and polish

- **Respect `prefers-reduced-motion`** for any future scroll or entrance animations.
- **Subtle hover states** on portfolio cards (lift or border) for affordance without changing the calm tone.

### 10.5 Theme and modes

- **Light/dark or theme toggle** is optional; if added, **derive grays from DaisyUI** so ADP/print/resume contexts still look coherent.
- If the site stays **dark-only**, document that as a brand choice in this file.

### 10.6 Accessibility and quality bar

- **Visible focus** on all interactive elements, **skip to content**, and **aria-label** on icon-only GitHub/LinkedIn buttons.
- **Color contrast audit** on `neutral-400` cards + `secondary-content` text.

### 10.7 Performance and media

- **Explicit `sizes` on `next/image`** for hero and logos where layout is known — better LCP and clarity when you tune layouts.

### 10.8 “Cooler” without fiction

Any visual upgrade should **amplify structure and motion**, not invent new biography. Factual copy stays anchored to **`docs/me.md`**.

---

## 11. Quick reference — files that affect look

| File | Design impact |
|------|----------------|
| `app/layout.tsx` | Theme + font |
| `app/globals.css` | Smooth scroll only |
| `tailwind.config.js` | Tailwind + DaisyUI |
| `app/page.tsx` | Section order + dividers |
| `components/Hero/*` | First impression, CTAs |
| `components/Portfolio/index.tsx` | Project grid, tech stacks |
| `components/About/index.tsx` | Bio typography |
| `components/Blog/*` | Papers / articles grid |
| `components/Footer/index.tsx` | Footer bar |

---

*Last aligned with repo layout and DaisyUI v2 `business` theme tokens; bump this doc if you upgrade DaisyUI major versions (theme token shapes can change).*
