# System Patterns

## Architecture
Single-page Next.js 15 application (App Router). All content lives in one page (`src/app/page.tsx`).

## Component Structure
```
src/
  app/
    globals.css       → Global styles, CSS variables, font imports, scrollbar hide
    layout.tsx        → Root layout: wraps all pages with <Header> and <Footer>
    page.tsx          → Main page: "Sobre Mim" + "Projetos" sections
  components/
    Header.tsx        → Fixed nav bar with pill-switch section indicator
    Footer.tsx        → Tech stack credits grid
```

## Key Technical Decisions
- **Next.js App Router** with `"use client"` where interactivity is needed
- **Framer Motion** for all entrance animations (`whileInView`, `motion.*`)
- **Tailwind CSS v4** for styling (uses `@import "tailwindcss"` syntax, not `@tailwind` directives)
- **CSS Variables** for accent colors, consumed via `var(--accent-color-*)` and utility classes `.accent-color-1/2`

## Navigation Pattern
- Header tracks active section using `useEffect` + `window.addEventListener("scroll")`
- Debounced with `setTimeout` (100ms) to avoid conflicts with smooth scroll
- `scrollToSection()` uses `getBoundingClientRect` + `window.pageYOffset` with 100px header offset

## Animation Pattern
All animated elements use:
```tsx
initial={{ y: 50, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: false, amount: 0.3 }}
transition={{ duration: 0.8, delay: X, ease: "easeOut" }}
```
Horizontal slides use `x` instead of `y`.
