Pill segmented tabs — the blog category filter ("All posts · Publishing · Research · Career"). Active pill gets an ink outline; manage the panel yourself from the active value.

```jsx
import { Tabs } from ".../Tabs.jsx";

const [tab, setTab] = React.useState("all");
<Tabs
  value={tab}
  onChange={setTab}
  tabs={[
    { value: "all", label: "All posts" },
    { value: "publishing", label: "Publishing" },
    { value: "research", label: "Research" },
  ]}
/>
```

Notes: works controlled (`value` + `onChange`) or uncontrolled (`defaultValue`). Center the list under a section heading; it recolors per scheme.
