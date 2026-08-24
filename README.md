# Sultan al-Burhan

**السلطان والبرهان** — static Arabic manifesto/document site.

## Architecture

- GitHub `main` is the source of truth.
- Vercel is the production hosting target.
- Changes should go through a branch + Pull Request.
- The document lives in the same repository as the landing page.
- No cross-deployment document-data projects are required by the current architecture.

## Main paths

- `/` — landing page
- `/document/` — full document reader
- `/assets/` — styles, JS, favicon, social preview
- `/document/parts/` — document content parts

## Release workflow

1. Create a branch.
2. Make changes.
3. Open a PR.
4. Review desktop + mobile.
5. Merge to `main`.
6. Vercel deploys `main` to production once Git Integration is connected.

See `DEPLOYMENT.md` and `docs/ARCHITECTURE.md` for details.
