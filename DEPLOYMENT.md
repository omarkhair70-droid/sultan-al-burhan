# Deployment

- `main` is the production source branch.
- `site-rebuild` is the rebuild branch used for review.
- Vercel should be connected to this repository and deploy `main` to production.
- Preview deployments should be used for pull requests before merge.

## Production rules

1. Do not patch production directly.
2. Make changes on a branch.
3. Open a PR.
4. Review the Vercel Preview.
5. Merge only after the preview is verified.
