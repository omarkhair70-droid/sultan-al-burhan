# Architecture

The public site is intentionally static-first.

## Goals

- Fast first paint on mobile.
- No runtime dependency is required to read the manifesto landing page.
- The document reader loads content only from this repository/project.
- No cross-deployment fetch chain.
- Share metadata is explicit and versioned.
- Production is deployed from GitHub through Vercel.

## Main routes

- `/` — launch/manifesto landing page.
- `/document/` — full document reader.
- `/downloads/` — downloadable artifacts when published.

## Source layout

- `index.html`
- `document/index.html`
- `document/parts/*.html`
- `assets/styles.css`
- `assets/app.js`
- `assets/favicon.svg`
- `robots.txt`
- `sitemap.xml`
- `vercel.json`
