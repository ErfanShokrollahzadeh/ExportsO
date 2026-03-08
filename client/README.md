# ExportsO — Premium Pakistani Imports

A modern, fully static marketing website for **ExportsO** — a business that imports premium produce and artisan goods from Pakistan (and Iran) into the Turkish market.

Built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. No backend, no database, no payment gateway — just a fast, SEO-friendly static site deployable anywhere.

---

## Tech Stack

| Layer      | Technology                                      |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js 16 (App Router)                         |
| Styling    | Tailwind CSS v4                                 |
| Language   | TypeScript                                      |
| Fonts      | Geist Sans (body) + Playfair Display (headings) |
| Deployment | Vercel (recommended)                            |

---

## Project Structure

```
client/
├── app/
│   ├── components/
│   │   ├── Header.tsx       # Sticky navbar with scroll transition + mobile menu
│   │   └── Footer.tsx       # Site-wide footer with links and contact info
│   ├── about/
│   │   └── page.tsx         # About Us page
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── products/
│   │   └── page.tsx         # Products page (fruits + coming-soon categories)
│   ├── globals.css          # Global styles + brand color palette (Tailwind v4 theme)
│   ├── layout.tsx           # Root layout — wraps all pages with Header + Footer
│   └── page.tsx             # Home page
├── public/                  # Static assets (images, icons)
├── next.config.ts           # Next.js configuration
├── tailwind.config.*        # Tailwind configuration (via postcss)
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Pages

| Route       | Page     | Description                                                |
| ----------- | -------- | ---------------------------------------------------------- |
| `/`         | Home     | Hero section, features, category cards, CTA banner         |
| `/about`    | About Us | Company story, values, sourcing regions                    |
| `/products` | Products | Fruit listings with season/origin + coming-soon categories |
| `/contact`  | Contact  | Email, phone, WhatsApp, and location cards                 |

---

## Brand Design System

All brand colors are defined as CSS variables in `app/globals.css` and used as Tailwind utility classes throughout:

| Variable               | Hex       | Usage                                     |
| ---------------------- | --------- | ----------------------------------------- |
| `--color-forest`       | `#2C4A1E` | Primary brand green (hero bg, CTAs)       |
| `--color-forest-mid`   | `#3A6228` | Hover state for forest                    |
| `--color-forest-light` | `#4F7A35` | Lighter green accent                      |
| `--color-cream`        | `#F9F6F0` | Main background                           |
| `--color-cream-dark`   | `#EDE8DE` | Alternate section background              |
| `--color-amber`        | `#B87333` | Copper accent (badges, icons, underlines) |
| `--color-amber-light`  | `#C8935A` | Hover state for amber                     |
| `--color-sand`         | `#DEC99A` | Warm highlight text and borders           |
| `--color-sand-light`   | `#F0E6CC` | Subtle warm tint                          |
| `--color-bark`         | `#1A2E14` | Near-black for headings                   |
| `--color-muted`        | `#617055` | Body text / secondary text                |

**Typography:**

- Headings → `Playfair Display` serif (loaded via `var(--font-playfair)`)
- Body / UI → `Geist Sans` (loaded via `var(--font-geist-sans)`)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Install dependencies

```bash
cd client
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start the production server (local preview)

```bash
npm start
```

---

## Deployment

### Vercel (recommended — free)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Set the **Root Directory** to `client`.
4. Click **Deploy** — Vercel auto-detects Next.js and handles everything.

### Other static hosts (Netlify, Cloudflare Pages, etc.)

Run `npm run build` and deploy the generated `.next/` output, or add `output: 'export'` to `next.config.ts` to produce a plain `out/` folder of HTML/CSS/JS files.

---

## Known Notes

- **Hydration warning (Grammarly / browser extensions):** If you see a React hydration mismatch error in the browser console, it is caused by browser extensions (e.g. Grammarly) injecting attributes into the `<body>` tag. This is handled with `suppressHydrationWarning` on the `<body>` element in `layout.tsx` and does not affect production behaviour.
- **TypeScript "Cannot find module" on fresh clone:** If the TS language server shows module-not-found errors for components immediately after cloning, run **TypeScript: Restart TS Server** from the VS Code command palette (`Cmd+Shift+P`). The build itself is unaffected.

---

## Planned Additions

- [ ] Handicrafts category (Pakistan & Iran)
- [ ] Home accessories & decor category
- [ ] Turkish language (`/tr`) locale support
- [ ] Image gallery for product listings

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
