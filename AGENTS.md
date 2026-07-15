# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single Next.js 16 (App Router) web app (`portfolio-2026`) using React 19, Tailwind CSS v4, TypeScript, and pnpm. There are no backend services, databases, or external dependencies — the Next.js dev server is the only runtime process.

Standard commands live in `package.json` scripts; run them with pnpm:

- `pnpm dev` — dev server with hot reload at http://localhost:3000
- `pnpm build` — production build (Turbopack)
- `pnpm start` — serve production build
- `pnpm lint` — ESLint

Non-obvious notes:

- The update script runs `pnpm install`, so dependencies are already installed at session start.
- `next build` uses Turbopack and runs TypeScript type-checking as part of the build; a passing `pnpm build` also validates types.
