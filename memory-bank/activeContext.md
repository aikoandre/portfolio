# Active Context

## Current Focus
Initial memory bank creation. Project is functional and complete for its current scope (one project: Elyndra Bot).

## Recent Changes
- Removed the `old/` directory (legacy plain HTML/CSS/JS portfolio — no longer needed)
- Created memory bank

## Next Steps
- Awaiting user direction on what edits to make to the portfolio

## Active Decisions & Considerations
- The `old/` folder has been deleted; the project is now purely the Next.js app
- `src/app/page.tsx` is a single file containing all sections — may need to be split into components if more projects/sections are added
- The header only tracks two sections: "sobre-mim" and "projetos" — adding more sections would require updating the scroll detection logic

## Known Patterns
- Accent colors defined as CSS variables: `--accent-color-1: #5465ff` (blue), `--accent-color-2: #75c1ff` (light blue)
- All animations use Framer Motion `whileInView` with `viewport={{ once: false }}`
- Scrollbar is hidden globally via `display: none` on `::-webkit-scrollbar`
