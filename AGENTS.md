# AGENTS.md

## Cursor Cloud specific instructions

This is a [Next.js](https://nextjs.org) 16 (App Router, Turbopack) portfolio app written in TypeScript with Tailwind CSS v4. Package manager is `pnpm` (see `packageManager` in `package.json`).

- Dependencies are installed by the startup update script (`pnpm install`); no extra bootstrap is needed.
- Standard commands live in `package.json` scripts:
  - Dev server: `pnpm dev` (Next.js + Turbopack on http://localhost:3000).
  - Lint: `pnpm lint` (ESLint via `eslint.config.mjs`).
  - Build: `pnpm build`; production start: `pnpm start`.
- There is no test runner configured in this repo.
- The single page lives at `src/app/page.tsx`; global styles/layout in `src/app/globals.css` and `src/app/layout.tsx`. The dev server supports hot reload, so edits to these files are reflected without a restart.
