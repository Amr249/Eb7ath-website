The Baheth button — use for every action. `primary` is the single saturated Salem-green CTA; reach for `alternate` (white) on dark green / image schemes, `secondary` (outlined, transparent) for the lower-priority action beside it, and `link` (text + chevron) for inline "Explore →" affordances.

```jsx
import { Button, IconButton } from ".../Button.jsx";
import { Icon } from ".../Icon.jsx";

<Button>Start</Button>
<Button variant="secondary">Learn more</Button>
<Button variant="link" iconRight={<Icon name="chevron-right" size={18} />}>Explore</Button>
<IconButton icon="search" label="Search" />
```

Variants: `primary` · `alternate` · `secondary` · `link` · `ghost`. Sizes: `sm` · `md` · `lg`. Pairs commonly: one `primary` + one `secondary`. On scheme-1/scheme-2 (dark) use `alternate` + `secondary`.
