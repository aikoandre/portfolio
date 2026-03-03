# System Patterns

## Architecture
Single-page Next.js 15 application (App Router). All page content in `src/app/page.tsx`, split into three snap-scroll sections.

## Component Structure
```
src/
  app/
    globals.css             → Global styles, CSS variables, palette, font imports, scrollbar hide
    layout.tsx              → Root layout: metadata, favicon, LanguageProvider + ActiveSectionProvider + Menu
    page.tsx                → Main page: 3 snap-scroll sections (Intro, Projects, Contact)
  components/
    Menu.tsx                → Fixed bottom floating pill nav: language toggle + divider + section nav
    TypeWriter.tsx          → Char-by-char typewriter effect, cycles through phrases array
  context/
    LanguageContext.tsx     → Language state ("EN" | "PT-BR"), default EN
    ActiveSectionContext.tsx → Active section string + scrollToSection(), updated by IntersectionObserver
public/
  favicon.svg              → Solid #00B4D8 circle (browser tab icon)
  elyndra-bot.jpg          → Project image
```

## Key Technical Decisions
- **Next.js App Router** with `"use client"` where interactivity is needed
- **CSS scroll-snap** (`snap-y snap-mandatory` on container, `snap-start h-screen` on each section)
- **Framer Motion** for entrance animations (`whileInView`) and interactive feedback (`whileTap`)
- **Tailwind CSS v4** using `@import "tailwindcss"` syntax
- **IntersectionObserver** in `page.tsx` drives `ActiveSectionContext` — works with snap scroll
- Image zoom uses `whileInView` (not `group-hover`) so animation fires on mobile/touch

## Navigation Pattern
- Bottom floating pill nav (`fixed bottom-6 left-1/2 -translate-x-1/2`)
- Language toggle is leftmost item, always `#00B4D8`, separated by a `1px` divider
- Active section indicated by cyan fill + dark text on nav button
- Left-side bullet dots (`fixed left-5 top-1/2`), hidden on mobile (`hidden sm:flex`)
- Active dot animates to `scale: 1.6` + `#00B4D8` via Framer Motion `animate`

## Animation Pattern
Entrance animations:
```tsx
initial={{ y: 40, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: false, amount: 0.3 }}
transition={{ duration: 0.7, delay: X, ease: "easeOut" }}
```
Image zoom-in on scroll into view:
```tsx
initial={{ scale: 1.08, opacity: 0.3 }}
whileInView={{ scale: 1, opacity: 0.55 }}
viewport={{ once: false, amount: 0.6 }}
transition={{ duration: 0.7, ease: "easeOut" }}
```

## Key Technical Decisions
- **Next.js App Router** with `"use client"` where interactivity is needed
- **Framer Motion** for all entrance animations (`whileInView`, `motion.*`)
- **Tailwind CSS v4** for styling (uses `@import "tailwindcss"` syntax, not `@tailwind` directives)
- **CSS Variables** for accent colors, consumed via `var(--accent-color-*)` and utility classes `.accent-color-1/2`

## Navigation Pattern
- Bottom floating nav pill (fixed bottom-6, centered) — no top header
- Tracks active section using `useEffect` + `window.addEventListener("scroll")`
- Debounced with `setTimeout` (100ms) to avoid conflicts with smooth scroll
- `scrollToSection()` uses `getBoundingClientRect` + `window.pageYOffset` with 20px offset
- Nav labels are translated via `LanguageContext`

## Language Pattern
- `LanguageContext` provides `language` (`"EN" | "PT-BR"`) and `setLanguage`
- Provider wraps entire app in `layout.tsx`
- `page.tsx` has a fixed top-right `motion.button` toggle with `AnimatePresence` text flip
- All translatable strings defined in a `translations` const object at the top of `page.tsx`

## Animation Pattern
All animated elements use:
```tsx
initial={{ y: 50, opacity: 0 }}
whileInView={{ y: 0, opacity: 1 }}
viewport={{ once: false, amount: 0.3 }}
transition={{ duration: 0.8, delay: X, ease: "easeOut" }}
```
Horizontal slides use `x` instead of `y`.
