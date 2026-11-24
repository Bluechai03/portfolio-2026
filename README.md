# Anna Montero — Portfolio 2026

Portfolio of a product-minded frontend developer. North star: **build proof, not just knowledge.**

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- TypeScript
- pnpm

## Develop

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3026](http://localhost:3026).

## Test

```bash
pnpm test                          # unit tests (Vitest)
pnpm build && pnpm test:e2e        # smoke tests (Playwright), against the production build
pnpm exec playwright install chromium   # once, to download the browser
```

The smoke tests run on a desktop and an iPhone-sized viewport and cover the home page, its links and mobile menu, and the `/how-its-built` and `/playground` pages.

## Ship

```bash
pnpm build
pnpm start
```

**Live:** [annamontero.dev](https://annamontero.dev/)

## Structure

```
src/
  app/           # routes + global styles
  components/    # Hero, About, Projects, chrome
  content/       # editable site copy
```
