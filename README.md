# Modern React + Bootstrap Portfolio


A clean, minimal, modern portfolio with light/dark themes, JSON-driven content, and strong a11y.


## Features
- React + Vite + TS
- React Router (code-split)
- React-Bootstrap + Bootstrap 5 utilities
- Theme toggle with CSS variables; AA+ contrast
- SEO with react-helmet-async (per-route)
- Projects grid with tag filters + detail pages
- Experience timeline, About, Contact (validation + toasts), Resume (embed)
- Lazy images, responsive grid, prefers-reduced-motion friendly


## Setup
1. `npm i`
2. `npm run dev`
3. Personalize `src/data/site.json`, `projects.json`, images, and text


## Theming
- Edit `src/theme.css` and `src/data/site.json` to set `primaryColor` and `accentColor`.
- Colors are mapped to Bootstrap tokens (`--bs-primary`, etc.).


## Images
- Place under `public/images/...`
- Use optimized formats (WebP/AVIF) with fallbacks when possible
- Provide natural dimensions and `loading="lazy"`


## Accessibility
- Semantic landmarks (header/nav/main/footer)
- Keyboard navigable; visible focus styles
- ARIA labels for toggles and external links


## SEO
- Edit `baseUrl` in `site.json`
- Robots & sitemap in `public/`


## Deploy
- **Netlify**: Connect repo → Build command `npm run build`, Publish dir `dist/`
- **Vercel**: Import project → Framework: Vite → Build & Output: auto
- **GitHub Pages**: `npm run build` then push `dist/` via action or `gh-pages`


## Contact Form
- Replace `sendContact` with your API or use Netlify Forms:
- Add `<form name="contact" data-netlify="true">` attributes and a hidden input `name="form-name" value="contact"`


## Quality
- Avoid console warnings
- Aim for Lighthouse 90+ across PWA/Perf/SEO/A11y