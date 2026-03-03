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

## Fonts
- **Poppins** (Google Fonts) — headings (`.font-poppins`)
- **Inter** (Google Fonts) — body text (default)

## Color Palette
| Variable | Value | Usage |
|---|---|---|
| `--background` | `#050505` | Page background |
| `--surface` | `#0f0f0f` | Cards, nav pill |
| `--border` | `#1f1f1f` | Borders |
| `--text-muted` | `#888888` | Secondary text |
| `--accent` | `#00B4D8` | Cyan-blue accent, highlights, cursor |

## Config Files
- `next.config.ts` — empty (no custom config)
- `tailwind.config.ts` — present (default)
- `postcss.config.mjs` — Tailwind v4 PostCSS plugin
- `tsconfig.json` — `@/` alias resolves to `src/`

## Development
```bash
npm run dev     # starts dev server with Turbopack
npm run build   # production build
npm run start   # production server
```

## Deployment
Vercel

## .gitignore Additions
- `/memory-bank` — not committed to repo
