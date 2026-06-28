Outlined surfaces and labels — the building blocks of Baheth's research, blog, service, and testimonial cards.

```jsx
import { Card, CardMedia, CardBody, Badge, Avatar } from ".../Card.jsx";
import { Button } from ".../Button.jsx";
import { Icon } from ".../Icon.jsx";

<Card>
  <CardMedia src="research.jpg" alt="" />
  <CardBody>
    <h3>Diabetes management in Saudi clinics</h3>
    <p>Multi-center study examining treatment protocols and outcomes.</p>
    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
      <Badge>Clinical research</Badge>
      <Badge>Endocrinology</Badge>
    </div>
    <Button variant="link" iconRight={<Icon name="chevron-right" size={18}/>}>View project</Button>
  </CardBody>
</Card>

<Avatar initials="FA" />
<Avatar src="/doctor.jpg" alt="Dr. Al-Otaibi" size="lg" />
```

Notes:
- `Card` is flat/outlined by default — on dark schemes use `variant="transparent"`; reserve `elevated` for floating cards.
- `Badge` default is the outlined tag pill; `solid`/`soft` for emphasis, `tag` for squared filter chips.
- All recolor automatically inside a `.scheme-*` section.
