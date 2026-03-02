# AI Agent Guidelines - Nova.js Web

This project is built with a focus on high-performance aesthetics and lightweight code. All AI agents contributing to this repository must adhere to the following standards.

## 🎨 Design Philosophy

- **Celestial Aesthetic:** Maintain the planetary/space theme (Stars, Aurora, Clouds, Comets).
- **Hybrid Vibe:** Blend the minimalist professionalism of Next.js with the tech-heavy glow of Elysia.
- **Color Palette:** Strictly use Black, White, and Blue (#3b82f6) as primary tones.
- **Micro-Interactions:** Every interaction should feel tactile (active scaling, hover glows).

## ⚡ Performance Mandates ("Sat Set")

- **Zero Bloat:** Avoid adding heavy libraries if a CSS-only solution exists.
- **Optimized Motion:** 
  - Durations should rarely exceed 400ms for primary UI transitions.
  - Use `will-change: transform` for all background animations.
  - Prefer CSS `@keyframes` over JS-driven animations where possible.
- **Mobile First:** Verify every UI change on small viewport widths (`< 640px`).

## 🛠️ Code Standards

- **Component Patterns:** Use `memo()` for background elements or components with heavy SVGs.
- **Icons:** Use `lucide-react` for system icons and `simple-icons` for brand identities.
- **Styling:** Use Tailwind CSS v4 utility classes. Avoid custom CSS files; use the `@theme` block in `index.css` for variables.
- **Branding:** "Nova" should always be Title Case unless explicitly requested otherwise.

## 🔦 Spotlight Engine

The footer "Nova" text uses a precision flashlight effect. When modifying this:
- Ensure the center of the `radial-gradient` is perfectly synced with the cursor.
- Maintain the dual-layer system (Silhouette + Masked Reveal).
- Keep the reactive borders synchronized.

---
**Protocol:** Always run `bun run build` after structural changes to ensure zero compilation errors.
