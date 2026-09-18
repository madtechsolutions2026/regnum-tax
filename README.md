# Regnum Tax — Website Demo

One-page client demo for **Regnum Tax** (Tax Consulting | Advisory | Compliance).
Built with React, Vite, Tailwind CSS v4, Framer Motion and Lucide icons.

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
```

## Brand system (from the office signage)

- **Mark** — serif "R" with a gold check-mark leg (`src/components/ui/Logo.jsx`)
- **Wordmark** — Cinzel caps, REGNUM in navy, TAX in gold, gold hairline ending in a dot (`SignatureRule`)
- **Signage motifs** — acrylic plate with gold standoff bolts, navy corner sweep with a gold edge (`src/components/ui/Signage.jsx`)
- **Colours / fonts** — tokens in `src/index.css` (`@theme`)

## Replacing demo content

All editable content lives in **`src/data/siteContent.js`**. Search for `⚠ PLACEHOLDER`:

| Item | Key |
| --- | --- |
| Phone, email, address, hours, map link | `contact` |
| Social profile URLs | `socials` |
| Statistics (demo values) | `stats` |
| Testimonials (demo names/quotes) | `testimonials` |
| Insight articles (demo) | `insights` |
| Photography (Unsplash, demo) | `images`, `insights[].image` |

The contact form is demo-only (`src/components/Contact.jsx`, `onSubmit`); connect it to a form endpoint or CRM before launch.
To use an official logo file, replace `<Logo />` / `<Mark />` with an `<img>` as noted in `Logo.jsx`.
