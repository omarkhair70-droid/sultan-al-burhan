# Deployment

- `main` is the production source branch.
- `site-rebuild` was used for the initial rebuild review.
- Vercel is the production hosting target.
- Preview deployments should be used for future pull requests after Git Integration is connected.

## Production rules

1. Do not patch production directly.
2. Make changes on a branch.
3. Open a PR.
4. Review desktop + mobile.
5. Merge only after the preview/QA is verified.

## Current rebuild verification

- Landing page checked on desktop and mobile.
- Full document reader checked on desktop.
- Mobile document overflow found during QA and fixed before merge.
- Social preview asset, sitemap, robots, favicon, sharing helpers, and client-side PDF/Word export are included.
- Final remaining infrastructure step after merge: connect the existing Vercel project to this GitHub repository so pushes to `main` become the production source.
