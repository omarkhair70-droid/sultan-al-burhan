# Sultan al-Burhan

**السلطان والبرهان** — an independent Arabic editorial/document project built as a focused digital reading experience.

[Live website](https://sultan-al-burhan.vercel.app) · [Portfolio case study](https://omar-khair-portfolio.vercel.app/work/sultan-al-burhan)

## Project

The repository combines a concise landing experience with a structured long-form document reader. It is presented as independent/editorial work: concept, information structure, Arabic reading experience, and direct web execution.

## Public proof

- Arabic-first editorial structure;
- dedicated document reader;
- static, low-complexity deployment architecture;
- SEO/supporting web files such as sitemap and robots configuration;
- branch/PR-driven release workflow.

## Status

**Live independent editorial project.**

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

