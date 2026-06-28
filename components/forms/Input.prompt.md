Form controls. Baheth inputs default to a clean underline (newsletter, search); switch to `boxed` for forms that need defined fields. Checkbox/Switch use the Salem-green active state.

```jsx
import { Input, Checkbox, Switch } from ".../Input.jsx";
import { Icon } from ".../Icon.jsx";

<Input placeholder="you@hospital.sa" type="email" />
<Input boxed placeholder="Search projects" icon={<Icon name="search" size={18}/>} />
<Checkbox label="I agree to the terms" />
<Switch label="Email me new opportunities" defaultChecked />
```

Notes:
- On dark schemes the underline/border picks up `--scheme-border` and text picks up `--scheme-text` automatically.
- Pair an underline `Input` + `primary` Button for the newsletter CTA pattern.
