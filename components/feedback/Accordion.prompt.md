Disclosure accordion — used for the FAQ sections. Give it `items`; the chevron rotates and the panel height-animates open.

```jsx
import { Accordion } from ".../Accordion.jsx";

<Accordion
  type="single"
  defaultOpen={[0]}
  items={[
    { title: "How does co-authorship work?", content: "You join an active research team…" },
    { title: "Will this help my SCFHS points?", content: "Yes. Every indexed publication counts…" },
  ]}
/>
```

Notes:
- Constrain width (~`max-width: 48rem`) and center for the FAQ layout.
- Recolors per scheme (borders + text follow `--scheme-*`).
