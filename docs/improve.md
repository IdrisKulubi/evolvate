# Evolvate website improvements (client feedback)

Phased checklist from the September 2026 client meeting. Implement one phase at a time; mark status as you go.

**Source:** Client meeting + Elizabeth’s professional statement (LinkedIn-aligned, 22 Sep 2026).

---

## Status overview

| Phase | Focus | Status |
| ----- | ----- | ------ |
| 1 | Still hero (no background video) | Done |
| 2 | Honest copy + Elizabeth’s positioning | Done |
| 3 | Founder relevance (placeholder → real data) | Done |
| 4 | Testimonials (demo data, gated in production) | Done |
| 5 | QA and polish | Done |
| 6 | Tutorials / resources | Deferred |

---

## Phase 1: Still hero image

**Goal:** Remove motion background; use a single still image for clarity and performance.

### Tasks

- [x] Replace `<video>` in `components/hero.tsx` with `next/image` (`fill`, `priority`, decorative `alt=""`).
- [x] Remove play/pause controls and video-related state/effects.
- [x] Use `ConsultationTrigger` + shared dialog so hero can stay a Server Component where possible.
- [x] Update `app/globals.css`: remove `.hero-video`, `.motion-button`; add `.hero-image` if needed.
- [x] Remove `public/hero/hero-video.mp4` from the repo.

### Files

- `components/hero.tsx`
- `components/consultation-dialog.tsx` (extracted)
- `app/globals.css`
- `public/hero/hero-image.png` (primary still)

### Acceptance

- [x] No video or autoplay on the homepage hero.
- [x] Hero text readable (contrast overlay unchanged or strengthened).
- [x] LCP is the still image, not a blocked video.

---

## Phase 2: Tone down copy (no overpromising)

**Guiding rule:** Describe support and approach—not guaranteed outcomes. Prefer *we help*, *we support*, *we work with you to* over *we deliver*, *changes what happens next*, *fail*, *before gaps get expensive*.

Elizabeth’s statement (primary source for About + services tone):

> We support businesses and organizations in Sweden and internationally with strategic business development, financial management, and project management solutions. We help clients navigate complex challenges, improve performance, and turn strategic priorities into measurable results.
>
> Our services cover business strategy, financial management, project controls, project management, market research, consulting, and advisory. … Currently providing project controls services to mega projects in Sweden … cross-industry experience … aerospace … construction … clarity, integrity, collaboration, and results.

### Copy approval table

| Location | Before (summary) | After (summary) | Approved |
| -------- | ---------------- | --------------- | -------- |
| Hero H1 | “Strategy that moves businesses forward.” | Measured headline about support for strategic priorities | Client |
| Hero body | “Turn ambition into a clear way forward…” | Sweden/international support; strategy, finance, projects without outcome guarantees | Client |
| Hero CTA | “Book a consultation” | Conversation-first wording | Client |
| Positioning / Advance | “Big initiatives fail between…” | Initiative delivery gap framed as a common challenge we help address | Client |
| Services intro | “before the gaps get expensive” | Connected disciplines without fear-based promise | Client |
| Service outcomes | Strong result claims | Support-oriented outcome lines | Client |
| Services | No project controls | Project controls called out (row or PM focus) | Client |
| About hero | Generic consulting partner | Elizabeth statement + mega projects + industries | Client |
| How we work | Method as certainty | Method as structured support | Client |

### Tasks

- [x] Rewrite copy in: `hero.tsx`, `positioning.tsx`, `services.tsx`, `who-we-help.tsx`, `how-we-work.tsx`, `app/about/page.tsx`.
- [x] Add project controls to services.
- [x] Consultation dialog: conversation, not results.

### Files

- See list above + `components/consultation-dialog.tsx`

### Acceptance

- [x] No unsupported superlatives or guaranteed outcomes in primary sections.
- [x] Project controls and Swedish mega-project context visible on About or Services.

---

## Phase 3: Founder section (placeholder)

**Goal:** Visitors understand founder relevance—experience, sectors, current work.

### Tasks

- [x] `lib/content/founder.ts` — typed content; `// TODO: replace with real data` on placeholders.
- [x] `components/founder.tsx` — editorial layout (photo, bio, highlights, LinkedIn).
- [x] Full section on `app/about/page.tsx`.
- [x] Compact teaser on home → `/about`.

### Placeholder swap checklist (before launch)

- [ ] Real name and title
- [ ] Professional photo (`public/founder/…`)
- [ ] LinkedIn URL
- [ ] Bio and highlights verified by Elizabeth

### Acceptance

- [x] About page answers “who leads this firm and why trust them?”
- [x] Placeholders clearly marked in code

---

## Phase 4: Testimonials (demo data)

**Goal:** Section structure ready; real quotes replace demo before public launch.

### Tasks

- [x] `lib/content/testimonials.ts` — 6 demo entries (clearly fictional names/context).
- [x] `components/testimonials.tsx` — intro + gated render.
- [x] `components/testimonials-marquee.tsx` — GSAP seamless loop (LTR), hover/focus ease to stop, off-screen pause, Pause/Play control, reduced-motion horizontal scroll.
- [x] Home: between `WhoWeHelp` and `Footer`.
- [x] **Production gate:** section hidden unless `NEXT_PUBLIC_SHOW_TESTIMONIALS=true`.

### Before launch

- [ ] Replace all demo quotes with approved client testimonials.
- [ ] Set `NEXT_PUBLIC_SHOW_TESTIMONIALS=true` only when real data is live.

### Acceptance

- [x] Demo testimonials never shown in production by default.
- [x] Marquee loops without visible seam; hover and keyboard focus pause motion smoothly.

---

## Phase 5: QA and polish

### Tasks

- [x] `pnpm lint`
- [x] `pnpm build`
- [x] Prettier on touched files
- [x] Keyboard/focus/heading order spot-check
- [x] Update `PRODUCT.md` — avoid overpromising; describe support not guarantees

### Acceptance

- [x] Clean build
- [x] PRODUCT.md reflects tone rule

---

## Phase 6: Tutorials (deferred)

**Goal (future):** Practical guides with visuals—not walls of text. Possible `/resources` with step-by-step topics (cash forecast, project controls basics, etc.).

- [ ] Scope with client
- [ ] Content + design
- [ ] Ship when ready

---

## Implementation notes

- Follow [AGENTS.md](../AGENTS.md): read `node_modules/next/dist/docs/` before Next.js API changes.
- Design tone: [DESIGN.md](../DESIGN.md) — editorial, no generic card grids for founder/testimonials.
- Do not edit the Cursor plan file; this document is the working checklist.
