# Tech Context

## Stack
| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js | 15.3.1 |
| Language | TypeScript | ^5 |
| UI Library | React | ^19.0.0 |
| Styling | Tailwind CSS | ^4 |
| Animations | Framer Motion | ^12.7.4 |
| Icons | react-icons | ^5.5.0 |
| Runtime | Node.js | (project default) |

## Dev Dependencies
- `@tailwindcss/postcss` ^4
- `eslint` ^9 + `eslint-config-next`
- TypeScript type definitions for React/Node

## Fonts
- **Poppins** (Google Fonts) — used for headings (`.font-poppins`, `font-bold`)
- **Inter** (Google Fonts) — used for body text (default `body` font)

## Config Files
- `next.config.ts` — empty (no custom config yet)
- `tailwind.config.ts` — present (likely default)
- `postcss.config.mjs` — for Tailwind v4 PostCSS plugin
- `tsconfig.json` — standard Next.js TypeScript config; `@/` path alias resolves to `src/`

## Development
```bash
npm run dev     # starts dev server with Turbopack
npm run build   # production build
npm run start   # production server
```

## Deployment
Vercel (inferred from project type and developer history)
