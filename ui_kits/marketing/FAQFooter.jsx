/* Baheth marketing — CTA, FAQ, Footer, and the Start dialog */
const { Button, Card, CardBody, Accordion, Input, Checkbox, Icon } = window.BahethDesignSystem_c51e92;

function CTA({ onStart }) {
  return (
    <section className="bk-section scheme-1 logo-alt">
      <div className="baheth-container">
        <div className="bk-cta">
          <h2>Ready to start your research?</h2>
          <p className="bk-lead">
            Join Baheth today and take the first step toward your SCFHS points and career advancement.
          </p>
          <div className="bk-btnrow bk-btnrow--center">
            <Button variant="alternate" onClick={onStart}>Sign up</Button>
            <Button variant="secondary">Begin</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { title: "How does co-authorship work?", content: "You join an active research team or develop your own project with our support. We provide statistical analysis, writing review, and publication guidance. Your name appears on the paper because you contributed genuine research work." },
  { title: "Will this help my SCFHS points?", content: "Yes. Every publication in a Scopus or ISI indexed journal counts toward your SCFHS requirements. We understand the exact standards and timeline you're working within." },
  { title: "What if I have no research experience?", content: "That's where we start. Our consultants guide you through methodology, statistical analysis, and manuscript preparation. You'll learn as you go, earning your co-authorship genuinely." },
  { title: "How long does publication take?", content: "Timeline varies by journal and research complexity. We target indexed journals with reasonable review periods and help navigate the submission and revision process efficiently." },
  { title: "Can I work while doing this?", content: "Absolutely. Most of our doctors are in residency or clinical practice. We structure support around your schedule, not the other way around." },
];

function FAQ() {
  return (
    <section id="faq" className="bk-section scheme-3">
      <div className="baheth-container bk-faq">
        <div className="bk-head bk-head--center">
          <h2>FAQ</h2>
          <p className="bk-lead">
            Find answers to questions about joining research teams, earning co-authorship,
            and meeting SCFHS requirements.
          </p>
        </div>
        <Accordion type="single" defaultOpen={[0]} items={FAQ_ITEMS} />
        <div className="bk-faq__more">
          <h4>Have more questions?</h4>
          <p>What makes Baheth different?</p>
          <Button variant="secondary">Contact</Button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const links = ["About us", "Services", "Blog", "Contact", "Resources"];
  const legal = ["Privacy policy", "Terms of service", "Cookies settings"];
  return (
    <footer className="bk-footer scheme-3">
      <div className="baheth-container">
        <div className="bk-footer__top">
          <a href="#top" className="bk-footer__logo"><img src="../../assets/logo/logo-light.png" alt="Baheth" /></a>
          <ul className="bk-footer__links">
            {links.map((l) => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
        <div className="bk-footer__rule" />
        <div className="bk-footer__bottom">
          <p>© 2025 Baheth. All rights reserved.</p>
          <ul className="bk-footer__legal">
            {legal.map((l) => <li key={l}><a href="#">{l}</a></li>)}
          </ul>
        </div>
      </div>
    </footer>
  );
}

/* ---- Start / sign-up dialog (fake interactive flow) ---- */
function StartDialog({ open, onClose }) {
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { if (open) setDone(false); }, [open]);
  if (!open) return null;
  return (
    <div className="bk-modal" onClick={onClose}>
      <Card className="bk-modal__card" onClick={(e) => e.stopPropagation()}>
        <CardBody size="lg">
          <button className="bk-modal__close" aria-label="Close" onClick={onClose}><Icon name="x" size={22} /></button>
          {done ? (
            <div className="bk-modal__done">
              <div className="bk-modal__check"><Icon name="check-circle" size={48} /></div>
              <h3>You're on the list</h3>
              <p>We'll match you with research opportunities that fit your specialty and SCFHS timeline.</p>
              <Button onClick={onClose}>Done</Button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
              <p className="bh-eyebrow">Get started</p>
              <h3>Create your researcher profile</h3>
              <p className="bk-modal__sub">Tell us a little about you and we'll be in touch within two working days.</p>
              <div className="bk-modal__fields">
                <Input placeholder="Full name" required />
                <Input type="email" placeholder="you@hospital.sa" required />
                <Input placeholder="Specialty (e.g. Cardiology)" />
              </div>
              <Checkbox label="I'm pursuing SCFHS research points" defaultChecked />
              <div className="bk-modal__actions">
                <Button type="submit">Create profile</Button>
                <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
              </div>
            </form>
          )}
        </CardBody>
      </Card>
    </div>
  );
}

Object.assign(window, { CTA, FAQ, Footer, StartDialog });
