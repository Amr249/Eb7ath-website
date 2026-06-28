/* Baheth marketing — Hero, Pathways, About, Stats */
const { Button, Card, CardMedia, CardBody, Icon } = window.BahethDesignSystem_c51e92;
const chevR = () => <Icon name="chevron-right" size={18} />;

function Hero({ onStart }) {
  return (
    <section id="top" className="bk-hero scheme-1 logo-alt">
      <img className="bk-hero__bg" src="../../assets/images/home-hero-header-section.jpg" alt="" />
      <div className="bk-hero__scrim" />
      <div className="baheth-container bk-hero__grid">
        <div className="bk-hero__head">
          <h1>Build your research career with purpose</h1>
          <div className="bk-btnrow">
            <Button variant="alternate" onClick={onStart}>Start</Button>
            <Button variant="secondary">Learn more</Button>
          </div>
        </div>
        <div className="bk-hero__sub">
          <p>
            Baheth connects Saudi doctors with active research teams and provides the
            academic support you need to advance your career. Earn your SCFHS points
            through genuine collaboration, not shortcuts.
          </p>
        </div>
      </div>
    </section>
  );
}

function Pathways() {
  return (
    <section className="bk-section scheme-2 logo-alt">
      <div className="baheth-container">
        <div className="bk-head bk-head--center">
          <p className="bh-eyebrow">Pathways</p>
          <h2>Two ways to advance</h2>
          <p className="bk-lead">Choose the path that fits your research journey and career goals</p>
        </div>
        <div className="bk-pathways">
          <Card variant="transparent" className="bk-pathcard">
            <CardBody size="lg">
              <p className="bh-eyebrow">Collaborate</p>
              <h3>Join active research teams</h3>
              <p>Become a co-author on established projects</p>
              <Button variant="link" iconRight={chevR()}>Explore</Button>
            </CardBody>
            <CardMedia src="../../assets/images/home-features-list-section-0.jpg" alt="Researchers at work" />
          </Card>
          <Card variant="transparent" className="bk-pathcard bk-pathcard--wide">
            <CardBody size="lg">
              <p className="bh-eyebrow">Develop your own research</p>
              <h3>Get guidance from start to publication</h3>
              <p>From methodology to journal submission, we support every step</p>
              <Button variant="link" iconRight={chevR()}>Explore</Button>
            </CardBody>
            <CardMedia src="../../assets/images/home-features-list-section-1.jpg" alt="Microscopy" />
          </Card>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="bk-section scheme-3">
      <div className="baheth-container bk-about">
        <div className="bk-head bk-head--center">
          <p className="bh-eyebrow">Story</p>
          <h2>Baheth was built by doctors for doctors</h2>
          <p className="bk-lead">
            We started because we saw talented physicians held back by the gap between
            clinical work and research. We built a bridge. Now we help others cross it.
          </p>
          <div className="bk-btnrow bk-btnrow--center">
            <Button variant="secondary">Learn</Button>
            <Button variant="link" iconRight={chevR()}>About</Button>
          </div>
        </div>
        <img className="bk-about__img" src="../../assets/images/home-about-section.jpg" alt="Researcher with microscope" />
      </div>
    </section>
  );
}

const STATS = [
  { n: "500+", l: "Doctors supported", img: "../../assets/images/home-stats-section-0.jpg" },
  { n: "300+", l: "Papers published", img: null },
  { n: "50+", l: "Active research teams", img: "../../assets/images/home-stats-section-1.jpg" },
];

function Stats() {
  return (
    <section className="bk-section scheme-4">
      <div className="baheth-container">
        <div className="bk-statshead">
          <h3>Numbers that speak to our commitment</h3>
          <p>
            Baheth has supported hundreds of Saudi doctors in advancing their research
            careers, connecting practitioners with meaningful publications and building
            the academic profiles that matter for promotions and program acceptance.
          </p>
        </div>
        <div className="bk-stats">
          <Card className="bk-stat bk-stat--tall">
            <CardBody size="lg" className="bk-stat__body">
              <div className="bk-stat__num">{STATS[0].n}</div>
              <h4>{STATS[0].l}</h4>
            </CardBody>
          </Card>
          <div className="bk-stat__img"><img src={STATS[0].img} alt="" /></div>
          <Card className="bk-stat">
            <CardBody size="lg" className="bk-stat__body">
              <div className="bk-stat__num">{STATS[1].n}</div>
              <h4>{STATS[1].l}</h4>
            </CardBody>
          </Card>
          <div className="bk-stat__img"><img src={STATS[2].img} alt="" /></div>
          <Card className="bk-stat">
            <CardBody size="lg" className="bk-stat__body">
              <div className="bk-stat__num">{STATS[2].n}</div>
              <h4>{STATS[2].l}</h4>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Pathways, About, Stats });
