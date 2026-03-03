# Active Context

## Current Focus
Polishing and refining the portfolio design. Core structure is stable.

## Recent Changes
- Removed `old/` directory and pushed deletion to GitHub
- Rewrote entire UI: snap-scroll, new palette, bottom floating nav, language toggle
- Created `LanguageContext` (EN / PT-BR, default EN) and `ActiveSectionContext`
- Created `TypeWriter` component (char-by-char erase/retype cycling phrases)
- `Header.tsx` → renamed to `Menu.tsx` — bottom floating pill nav
- `Footer.tsx` deleted
- Language toggle moved into `Menu.tsx` (leftmost item) with a vertical divider separating it from nav items
- Palette updated: `#050505` bg, `#00B4D8` cyan-blue accent, `#888` muted text, `#0f0f0f` surfaces
- Three snap-scroll pages: **Intro**, **Projects**, **Contact**
- Left-side page indicator (bullet dots, hidden on mobile)
- Project cards restored with image (zoom-in `whileInView` animation), title, description, tag pills below — not clickable
- **Elyndra Bot replaced by Data Delivery** (`/data-delivery.png`, tags: Python/SQL/PostgreSQL/Docker/Streamlit, link: github.com/aikoandre/data-delivery)
- README.md rewritten in English: Overview, Sections table, Technologies table, Vercel badge live link
- Image zoom uses `whileInView` instead of `hover` so it works on mobile/touch
- `whileTap={{ scale: 0.98 }}` for mobile tap feedback on cards
- Favicon: `/public/favicon.svg` — solid `#00B4D8` circle
- Metadata: title = `"André Luiz"`, no description, icon = `/favicon.svg`
- PT-BR translations updated to mirror EN content (Data Analyst, Python/SQL, Power BI)
- `memory-bank/` added to `.gitignore`

## Next Steps
- Resume download (both languages) in Contact section — placeholder exists
- More projects to add to the grid
- Elyndra Bot project can be re-added later alongside Data Delivery

## Active Decisions & Considerations
- Language state in `LanguageContext`; active section state in `ActiveSectionContext`
- Both contexts provided at root in `layout.tsx`
- `page.tsx` contains all three sections — consider splitting into components if it grows further
- Image animation uses `whileInView` at `amount: 0.6` threshold for the scale effect

## Known Patterns
- Accent colors defined as CSS variables: `--accent-color-1: #5465ff` (blue), `--accent-color-2: #75c1ff` (light blue)
- All animations use Framer Motion `whileInView` with `viewport={{ once: false }}`
- Scrollbar is hidden globally via `display: none` on `::-webkit-scrollbar`
