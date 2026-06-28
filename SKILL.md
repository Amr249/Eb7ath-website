---
name: baheth-design
description: Use this skill to generate well-branded interfaces and assets for Baheth (باحث) — a medical-research support platform for Saudi doctors — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Baheth is a clinical, trustworthy, editorial brand: a serif display (Fraunces 500) over
clean Inter, one saturated Salem green (`#0A8754`) as the only loud color, full-width
color-scheme bands, flat outlined cards, and real cool-toned lab photography. Voice is
direct and second-person ("you" the doctor, "we" Baheth), specific about SCFHS points,
co-authorship, and indexed journals. No emoji, no hype.

Key files:
- `styles.css` — link this one file to get all tokens, fonts, schemes, and `.bh-*` component classes.
- `readme.md` — full design guide: content fundamentals, visual foundations, iconography, manifest.
- `tokens/` — color / type / spacing / radii / scheme CSS custom properties.
- `components/` — React primitives (Button, Card, Badge, Input, Accordion, Tabs, Icon, …) under `window.BahethDesignSystem_<id>`.
- `ui_kits/marketing/` — full homepage recreation to copy sections from.
- `assets/` — logo, fonts, lab photography.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and
create static HTML files for the user to view. If working on production code, copy assets
and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without other guidance, ask them what they want to build or
design, ask a few questions, and act as an expert designer who outputs HTML artifacts _or_
production code, depending on the need.
