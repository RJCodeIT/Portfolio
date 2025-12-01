# 🚀 RJ Code Portfolio

RJ Code Portfolio is a modern, animated developer portfolio website. It showcases selected projects, tech stack, and contact options in a visually rich, responsive layout.

The actual application code lives in the `rj-code-portfolio/` directory and is built with Next.js (App Router), Tailwind CSS, animations, and full i18n support (EN/PL).

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling & UI:**
  - Tailwind CSS
  - Custom UI components (hero, project cards, sections)
  - Framer Motion (animations)
  - React Icons
- **Internationalization:**
  - next-i18next
  - react-i18next
  - Locales: `en`, `pl`
- **Other:**
  - canvas-confetti (celebration effects)
  - clsx & tailwind-merge (utility helpers)
  - emailjs-com (sending contact form emails)

The site is configured as a **static export** (`output: 'export'` in `next.config.ts`), which makes it easy to host on static hosting platforms (Vercel static, GitHub Pages, S3, etc.).

---

## Repository Structure

```text
Portfolio/
  README.md             # Root repo README (this file)
  rj-code-portfolio/    # Next.js portfolio app
    package.json
    next.config.ts      # output: 'export', images unoptimized
    next-i18next.config.ts
    src/
      app/              # App Router entry (pages, layout)
      components/       # Reusable UI components
      containers/       # Section containers (Projects, etc.)
      const/projects.ts # Project metadata (links, icons, images)
      lib/i18n.ts       # i18n/translation setup
```

The `projects.ts` file defines projects that appear in the portfolio grid, including:

- Workido
- Budgenix
- My Parish
- Used Cars
- Pawnshop

Each entry includes an image, icon list (tech stack), and external/internal link.

---

## Installation

From the repository root:

```bash
cd rj-code-portfolio
npm install
```

No database or backend services are required – this is a purely frontend/static portfolio.

---

## Running in Development

Inside `rj-code-portfolio/`:

```bash
npm run dev
```

By default, the dev server runs on:

```text
http://localhost:3000
```

Changes in components, translations, and project data will hot‑reload immediately.

---

## Building & Static Export

Build the project:

```bash
npm run build
```

Because `output: 'export'` is enabled in `next.config.ts`, the build will produce a **static exportable site** under `.next` which can then be exported to plain HTML/JS assets (depending on your deployment workflow).

To start a production server locally (SSR‑style):

```bash
npm start
```

For pure static hosting (recommended for this portfolio), configure your deployment to serve the exported assets. On platforms like Vercel, simply connecting this repo and using the Next.js preset is usually enough.

---

## Deployment

Typical deployment options:

- **Vercel** – native support for Next.js, easiest DX
- **Netlify / Cloudflare Pages / GitHub Pages** – via static export artifacts

Make sure your deployment:

- Serves the app from the root path `/` (matching `basePath: ''`)
- Handles static assets correctly (images, CSS, JS bundles)

---

## Main Features

- **Hero & Introduction** – animated landing hero introducing you as a developer
- **Projects Section** – interactive cards for selected projects (animated hover, tilt, gradients)
- **Internationalization (EN/PL)** – language switcher and localized copy using next-i18next
- **Contact Section** – contact form powered by EmailJS + smooth scrolling from the CTA in the projects section
- **Responsive Design** – fully responsive layout optimized for desktop and mobile

---

## Customization

You can easily adapt the portfolio to new projects or branding:

- Update project entries in `rj-code-portfolio/src/const/projects.ts`
- Adjust translations in `rj-code-portfolio/locales/en` and `locales/pl`
- Tweak colors, gradients, and animations in Tailwind config and components

---

## Contact

If you are viewing this repository as part of a recruitment process or collaboration:

- Feel free to open an issue or reach out via the contact form on the live portfolio site.

