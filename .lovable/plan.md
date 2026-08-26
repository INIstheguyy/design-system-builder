# Portfolio v2 — Pass 1: structure, tokens, content

Building the portfolio described in your brief as a single-page scroll. This first pass covers Phases 0–3 (setup, design tokens, page shell, real content). Motion (GSAP), theme toggle, and the footer carve effect come in pass 2.

## One stack note up front

The brief specifies Next.js static export. This project runs on TanStack Start, which already gives you the thing Next static export was chosen for: pre-rendered HTML for SEO, no extra config. Everything else in the brief — React, TypeScript, Tailwind, GSAP + ScrollTrigger, single-page scroll — carries over unchanged. The only difference is that instead of marking components `"use client"`, animated components guard their GSAP work behind a mount effect.

## What gets built

**Design tokens** — layered grayscale scale (not flat black/white) defined in `src/styles.css` as oklch tokens: page background, three surface levels, and four text tiers (primary → faint) so hierarchy comes from shade, not size alone. Light and dark values both defined now; the toggle wires up in pass 2. Rounded friendly sans-serif loaded via a `<link>` in the root head.

**Page shell** — one route at `/`, sections in final order with generous vertical rhythm (one idea per screen-scroll): Nav → Hero → About → Skills → Work → Experiments → Contact → Footer. Native smooth scroll for anchor jumps.

**Content, pulled from your live site:**
- Hero — "Inioluwa Komolafe", systems-engineer positioning subtext, plus a static (unanimated for now) systems wireframe: Client → Middleware → Server → Third-party, horizontal chain on desktop, vertical on mobile.
- About — your existing about-me copy, front-end engineer / CS degree / football analysis / psychology paragraphs.
- Skills — flat text list (no logo icons; the brief's minimal grayscale direction rules out the colored devicon row): HTML, CSS, JavaScript, TypeScript, React, Next.js, React Native, Tailwind, Bootstrap, Firebase, Airtable, Framer Motion, Figma, Git, Postman, WordPress.
- Work — three real projects with title, description, live + GitHub links: Career Compass (AI career discovery), Festival Twin Finder, ExamSense (Mock WASSCE AI). Markup shaped so the pass-2 scroll-expand drops in without restructuring.
- Experiments — placeholder block, framed as an animation playground.
- Contact — direct closing CTA with email/socials.
- Footer — large "INISTHEGUYY" baseline text with social handles laid over the center, plain layout for now (carve/mask effect in pass 2).

**SEO** — real title, meta description, og/twitter tags on the index route.

## Technical notes

- Files: `src/routes/index.tsx` (replaces the placeholder) plus `src/components/portfolio/*` for Nav, Hero, SystemsWireframe, About, Skills, Work, Experiments, Contact, Footer; project/skill data in `src/lib/portfolio-data.ts`.
- Work items use transform/opacity-friendly markup from the start (no `max-height`) to protect CLS later.
- GSAP is not installed in this pass — added in pass 2 with ScrollTrigger.
- All colors go through semantic tokens; no hardcoded `text-white` / `bg-black`.

## Pass 2 (not in this plan)

Nav scroll-up reveal, hero entrance timeline, wireframe draw-in + bidirectional pulse, About scroll-scrub, Skills hover-to-bold, Work scroll-expand, radial-mask theme toggle, footer carve, `prefers-reduced-motion` handling, and the final gray-value tuning.
