# Baheth (باحث) — Design System

**Baheth** (Arabic: باحث, "researcher") is a medical-research support platform for
Saudi doctors. It connects physicians with active research teams and provides the
academic services — statistical analysis, manuscript review, consultations, and
journal-publishing guidance — that help them earn co-authorship and the **SCFHS**
(Saudi Commission for Health Specialties) research points required for promotion and
program acceptance. The positioning is "empowerment, not replacement": doctors earn
their place on a paper through genuine contribution, not shortcuts.

This project is the compiled design system: brand tokens, fonts, reusable React
components, foundation specimen cards, and a full marketing-site UI kit.

## Sources

This system was reverse-engineered from a **Relume** export of the Baheth marketing
site (exported 2026-06-25). Original materials live under `/reference` and the
read-only mounted folder `baheth-باحث-design/`:

- `DESIGN.md` — design tokens (colors, type scale, radii, color schemes) as YAML.
- `sitemap.md` — page structure, section order, scheme assignment per section.
- `assets.md` — logo / image / SVG placement map.
- `react/globals.css` — the source-of-truth token set (Tailwind v4 `@theme`). **Where
  `DESIGN.md` and `globals.css` disagree on scheme→color mapping, `globals.css` wins**
  — that is what the live site renders, and what this system reproduces.
- `react/components/**` — Relume section components (the homepage, about, services, blog).
- `reference/homepage/*.png` — full-page + per-section screenshots used to verify layout.

No public URL, Figma file, or GitHub repo was provided — only the Relume export.

---

## Content fundamentals

**Voice — direct, credible, second person.** Copy speaks *to* the doctor as "you" and
about Baheth as "we." It is plain-spoken and reassuring, never salesy or academic-stiff.

- **Headlines** are short, purposeful, sentence-or-title case, set in the Fraunces
  serif: *"Build your research career with purpose"*, *"Two ways to advance"*,
  *"Active research waiting for you"*, *"Real voices"*, *"Numbers that speak to our
  commitment"*. Often a value (*purpose*, *advance*) anchors the line.
- **Eyebrows** — a one-word semibold label sits above most headings: *Pathways*,
  *Story*, *Services*, *Opportunities*, *Featured*, *Analysis*.
- **Body copy** is concise and concrete, leading with benefit then mechanism:
  *"We handle the numbers so you can focus on the science."* / *"Your name appears on
  the paper because you contributed genuine research work."*
- **Integrity is the throughline.** Recurring promises: *"genuine collaboration, not
  shortcuts"*, *"earned, not given"*, *"empowerment, not replacement"*. SCFHS, indexed
  journals (Scopus/ISI), co-authorship, and residency realities are named explicitly —
  the audience is specialists, so the copy is specific.
- **Testimonials** use realistic Saudi physician names + specialty/grade
  (*"Dr. Fatima Al-Otaibi — Consultant, Pediatrics"*), 5-star, one tight quote each.
- **No emoji. No exclamatory hype.** Punctuation is calm. Numbers are rounded and
  confident (*500+ doctors supported, 300+ papers published, 50+ active teams*).

## Visual foundations

**Overall feel:** clinical, trustworthy, editorial. A serif-display + clean-sans
pairing over real laboratory photography, organized into full-width color-scheme bands.

- **Color.** A light theme anchored by one saturated **Salem green `#0A8754`** (the
  only loud color — used for the primary CTA, active states, and tint accents). Deep
  greens (`#043621`, `#032819`) carry dark "feature" bands; a neutral grey
  (`#D9D9D9`) and a soft **Spindle blue `#BFD7EA`** provide quieter section variety.
  Greys run from near-black ink `#040708` to white. Wedgewood teal is a reserve accent.
- **Color schemes drive layout rhythm.** Every section applies one of five scheme
  classes (`.scheme-1`…`.scheme-5`); children read `--scheme-*` variables so text,
  accent, and border recolor automatically. The homepage alternates
  dark-green → white → grey → white → blue → white to create cadence. Use **1–2 dark
  bands** per page, not more.
- **Typography.** Headings in **Fraunces** (optical serif, weight **500**, slightly
  tight tracking) — distinctive, warm, academic. Body and all UI in **Inter** (400/500/
  600/700). Big editorial scale: desktop h1 = 72px. Stat numbers are oversized Fraunces
  (~80px).
- **Imagery.** Real lab/clinical photography — microscopes, pipettes, petri dishes,
  gloved hands, charts. Cool-toned, slightly desaturated, professional (no warm
  filters, no illustration). Hero images sit under a ~55% near-black scrim with white
  type. Photos use the 16px image radius and mostly 3:2 / 16:9 crops.
- **Surfaces.** Cards are **flat and outlined** — 1px border (`--scheme-border`), 16px
  radius, scheme-colored background, **no shadow** in normal flow. Shadows
  (`--shadow-md/-lg`) are reserved for floating surfaces only: nav dropdown, the
  sign-up dialog, the stat card. On dark bands, cards go `transparent` (1px white
  border).
- **Controls.** "Sleek": 12px radius on buttons/inputs/badges, 6px on square tags.
  Primary button = solid Salem green → darker green on hover. `alternate` = white fill
  (for dark/image bands). `secondary` = transparent + 1px border, inheriting scheme ink,
  with a subtle 10px backdrop-blur. `link` = text + chevron. Inputs are **underline**
  by default (border-bottom), focus turns the underline to accent.
- **Motion.** Restrained. 200ms standard ease (`cubic-bezier(.4,0,.2,1)`); accordions
  height-animate (300ms) with a rotating chevron; hover = opacity/color shift; press has
  no shrink. Tasteful, never bouncy.
- **Layout.** 5% page gutters, 80rem max content width, vertical rhythm
  64 → 96 → 112px (mobile → tablet → desktop). Generous whitespace; centered heading
  blocks (eyebrow → h2 → lead) introduce most sections.

## Iconography

- The original site uses **`relume-icons`** (Google **Material Symbols** style:
  `ChevronRight`, `KeyboardArrowDown`, `StarFull`). That package isn't redistributable,
  so this system ships a curated **Lucide-derived** set (ISC license) as the
  **`Icon`** component — 24px grid, 2px outline, `currentColor`. **This is a
  substitution** (outline Lucide vs. filled Material); the silhouette and usage match
  closely. Swap in the real Material Symbols if exact parity is required.
- Icons are **outline / stroked**, used sparingly: chevrons for links and accordions,
  a filled **star** for ratings (`<Icon name="star" fill />`), and topical glyphs for
  service cards (`microscope`, `flask`, `bar-chart`, `file-text`, `book-open`,
  `message-circle`, `users`, `graduation-cap`). Full list via `ICON_NAMES`.
- **No emoji**, no unicode-glyph icons. The **logo** is a DNA double-helix forming a
  rosette beside the "BAHETH / MEDICAL RESEARCH" wordmark (`assets/logo/logo-light.png`,
  black artwork). On dark schemes apply `.logo-alt` to flip it to solid white.

---

## Index / manifest

**Root**
- `styles.css` — global entry point (consumers link this); `@import`s the token layers + `components.css`.
- `components.css` — class-based styling for every primitive (`.bh-*`).
- `readme.md` — this guide. · `SKILL.md` — Agent-Skills wrapper.

**`tokens/`** — `fonts.css` (`@font-face` Fraunces + Inter, local woff2), `colors.css`
(palette + alpha + semantic aliases), `typography.css` (families, scale, weights),
`spacing.css`, `radii.css` (radii, shadows, motion), `base.css` (resets, element
defaults, `.baheth-container`), `schemes.css` (`.scheme-1`…`.scheme-5`, `.logo-alt`).

**`components/`** (namespace `window.BahethDesignSystem_c51e92`)
- `icon/` — **Icon**, `ICON_NAMES` (curated SVG set)
- `buttons/` — **Button**, **IconButton**
- `display/` — **Card**, **CardMedia**, **CardBody**, **Badge**, **Avatar**
- `forms/` — **Input**, **Checkbox**, **Switch**
- `feedback/` — **Accordion**
- `navigation/` — **Tabs**

Each directory has `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md` + a `@dsCard` HTML.

**`guidelines/`** — foundation specimen cards (Colors, Type, Spacing, Brand) for the
Design System tab.

**`ui_kits/marketing/`** — full Baheth homepage recreation (`index.html`), interactive
(mobile nav, FAQ accordion, working sign-up dialog). Sections split across
`Navbar.jsx`, `SectionsA.jsx`, `SectionsB.jsx`, `FAQFooter.jsx`, composed by `app.jsx`,
styled by `marketing.css`.

**`assets/`** — `logo/logo-light.png`, `fonts/*.woff2`, `images/*.jpg` (lab photography
used across the kit).

**`reference/`** — original Relume homepage screenshots + logo, for layout cross-checking.
