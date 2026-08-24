# Deployment

- `main` is the production source branch.
- `site-rebuild` was used for the initial rebuild review.
- Vercel should be connected to this repository and deploy `main` to production.
- Preview deployments should be used for pull requests before merge.

## Production rules

1. Do not patch production directly.
2. Make changes on a branch.
3. Open a PR.
4. Review the Vercel Preview (desktop + mobile).
5. Merge only after the preview is verified.

## Current rebuild verification

- Landing page checked on desktop and mobile.
- Full document reader checked on desktop.
- Mobile document overflow found during QA and fixed before merge.
- Social preview asset, sitemap, robots, favicon, sharing helpers, and client-side PDF/Word export are included.
