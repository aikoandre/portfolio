# Product Context

## Why This Project Exists
Personal developer portfolio for André Luiz — second version. The original (`old/`) was plain HTML/CSS/JS. The current version is a full Next.js rebuild with modern tooling and a polished design inspired by Grok's dark aesthetic.

## Problems It Solves
- Professional online presence for a Data Analyst / AI enthusiast
- Demonstrates technical depth through the stack itself (Next.js, TypeScript, Framer Motion, Tailwind)

## How It Should Work
1. User lands on the **Intro** page — typewriter cycles through role titles, bio below
2. Scroll (or tap nav) snaps to **Projects** — grid of project cards with images
3. Scroll to **Contact** — social links (GitHub, LinkedIn), resume placeholder
4. Bottom pill nav always visible: language toggle (EN / PT-BR) + section links
5. Left-side bullet dots show which page the user is on (desktop)

## User Experience Goals
- Near-black background, cyan-blue (`#00B4D8`) accent — clean Grok-like aesthetic
- Snap-scroll for a focused, page-by-page feel
- Mobile-first: animations use `whileInView` / `whileTap` instead of hover
- Bilingual (EN / PT-BR), toggled from the nav pill
