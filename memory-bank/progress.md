# Progress

## What Works
- Full snap-scroll SPA: 3 pages (Intro, Projects, Contact)
- **Intro**: `I AM` / `SOU` label + TypeWriter cycling phrases + bio paragraph
- **Projects**: section header, 3-col responsive grid, cards with `whileInView` image zoom, title, description, tag pills
- **Contact**: centered layout, GitHub + LinkedIn links, resume placeholder pill
- Bottom floating pill nav (EN/PT-BR toggle + divider + About/Projects/Contact)
- Left-side bullet dot page indicator (desktop only)
- Full bilingual support (EN / PT-BR), default EN, all text translated
- Framer Motion entrance animations on all elements
- Mobile-friendly: image zoom via `whileInView`, tap feedback via `whileTap`
- Favicon: solid `#00B4D8` circle SVG
- Metadata: title `"André Luiz"`, favicon linked
- `memory-bank/` excluded from git via `.gitignore`

## What's Left to Build
- Resume download (EN + PT-BR) in Contact section — placeholder exists
- More projects to populate the grid (currently 1: Data Delivery)
- Possible: email contact form or mailto link

## Known Issues
- None

## Project History
- v1: Plain HTML/CSS/JS site (`old/` folder — deleted)
- v2 (current): Next.js 15 + TypeScript + Tailwind CSS v4 + Framer Motion + snap-scroll redesign
