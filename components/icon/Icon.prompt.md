Inline SVG icon from Baheth's curated, Lucide-derived set (2px outline, 24px grid) — use anywhere the UI needs a glyph; pair with Button via `iconLeft`/`iconRight`.

```jsx
<Icon name="chevron-right" size={20} />
<Icon name="star" fill size={18} />          // filled star for ratings
<Icon name="microscope" size={28} strokeWidth={1.75} />
```

Notes:
- Inherits `currentColor`, so it recolors with text/scheme automatically.
- `fill` swaps stroke for solid fill — used for star ratings; most icons stay outline.
- Names: chevrons, arrow-right, arrow-up-right, star, check, check-circle, search, x, menu, mail, microscope, flask, file-text, graduation-cap, users, book-open, bar-chart, quote, plus, minus, calendar, message-circle, award. (`ICON_NAMES` exports the full list.)
