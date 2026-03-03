# Product Context

## Why This Project Exists
This is the second version of André's portfolio. The original (`old/`) was a plain HTML/CSS/JS site. The current version is a full Next.js rebuild with modern tooling, animations, and component architecture.

## Problems It Solves
- Provides a professional online presence for a developer
- Demonstrates technical skills through the stack choices themselves (Next.js, TypeScript, Framer Motion, Tailwind)

## How It Should Work
1. User lands on the page → animated "Sobre Mim" section greets them
2. Header has a pill-style switch between "Sobre Mim" and "Projetos" sections
3. Smooth scroll to sections; active section is tracked and highlighted in header
4. Projects section shows cards with descriptions, tech tags, and project images
5. Footer shows the tech stack used to build the site

## User Experience Goals
- Dark, clean aesthetic (gray-900 background, blue accent colors)
- Fluid entrance animations using Framer Motion (`whileInView`)
- Mobile-first responsive layout
- No horizontal scroll overflow
