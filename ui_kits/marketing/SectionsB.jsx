/* Baheth marketing — Services, Research opportunities, Testimonials */
const { Button, Card, CardMedia, CardBody, Badge, Avatar, Icon } = window.BahethDesignSystem_c51e92;
const _chevR = () => <Icon name="chevron-right" size={18} />;

const SERVICES = [
  { icon: "bar-chart", tag: "Analysis", title: "Statistical analysis using SPSS and R", body: "We handle the numbers so you can focus on the science." },
  { icon: "file-text", tag: "Writing", title: "Polish your work with feedback from experienced academics", body: "Detailed manuscript review from published Saudi researchers." },
  { icon: "message-circle", tag: "Consultation", title: "One-on-one research consultations", body: "Personalized sessions on methodology and project planning." },
  { icon: "book-open", tag: "Publishing", title: "Research team matching for co-authorship", body: "Get matched with indexed-journal projects seeking collaborators." },
];

function Services() {
  return (
    <section className="bk-section scheme-3">
      <div className="baheth-container">
        <div className="bk-head bk-head--center">
          <p className="bh-eyebrow">Services</p>
          <h2>What we offer</h2>
          <p className="bk-lead">Four core services to advance your research career</p>
        </div>
        <div className="bk-services">
          {SERVICES.map((s) => (
            <Card key={s.title} className="bk-service">
              <CardBody size="lg">
                <div className="bk-service__icon"><Icon name={s.icon} size={26} /></div>
                <p className="bh-eyebrow">{s.tag}</p>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <Button variant="link" iconRight={_chevR()}>Learn more</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  { img: "../../assets/images/home-research-0.jpg", title: "Diabetes management in Saudi clinics", body: "Multi-center study examining treatment protocols and patient outcomes", tags: ["Clinical research", "Endocrinology", "Co-authorship"] },
  { img: "../../assets/images/home-research-1.jpg", title: "Pediatric infection prevention", body: "Hospital-based observational study on infection control measures", tags: ["Hospital research", "Pediatrics", "Co-authorship"] },
  { img: "../../assets/images/home-research-2.jpg", title: "Cardiac risk assessment", body: "Prospective cohort study evaluating cardiovascular risk factors in adults", tags: ["Prospective study", "Cardiology", "Co-authorship"] },
];

function ResearchOpportunities() {
  return (
    <section className="bk-section scheme-5">
      <div className="baheth-container">
        <div className="bk-head bk-head--center">
          <p className="bh-eyebrow">Opportunities</p>
          <h2>Active research waiting for you</h2>
          <p className="bk-lead">Browse current projects seeking co-authors and collaborators</p>
        </div>
        <div className="bk-projects">
          {PROJECTS.map((p) => (
            <Card key={p.title} className="bk-project">
              <CardMedia src={p.img} alt="" />
              <CardBody>
                <h5>{p.title}</h5>
                <p>{p.body}</p>
                <div className="bk-project__tags">
                  {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
                <Button variant="link" iconRight={_chevR()}>View project</Button>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="bk-center"><Button variant="secondary">View all</Button></div>
      </div>
    </section>
  );
}

const VOICES = [
  { q: "They understood exactly what SCFHS needed. No guessing, no wasted effort.", name: "Dr. Fatima Al-Otaibi", role: "Consultant, Pediatrics", initials: "FA" },
  { q: "I had the research idea but not the time. Baheth handled the statistics and writing review. I earned my co-authorship.", name: "Dr. Mohammed Al-Harbi", role: "Fellow, Cardiology", initials: "MH" },
  { q: "The statistical analysis alone saved me months. I could focus on the clinical insight while they handled SPSS.", name: "Dr. Layla Al-Mutairi", role: "Fellow, Orthopedic Surgery", initials: "LM" },
  { q: "They matched me with a team doing work I actually cared about. The co-authorship felt earned, not given.", name: "Dr. Hassan Al-Qahtani", role: "Consultant, Neurology", initials: "HQ" },
];

function Stars() {
  return (
    <div className="bk-stars">
      {[0, 1, 2, 3, 4].map((i) => <Icon key={i} name="star" fill size={18} />)}
    </div>
  );
}

function Testimonials() {
  return (
    <section className="bk-section scheme-3">
      <div className="baheth-container">
        <Card className="bk-testi">
          <div className="bk-testi__intro">
            <h2>Real voices</h2>
            <p className="bk-lead">Doctors who found their way</p>
            <div className="bk-btnrow">
              <Button variant="secondary">Explore</Button>
              <Button variant="link" iconRight={_chevR()}>Connect</Button>
            </div>
          </div>
          <div className="bk-testi__grid">
            {VOICES.map((v) => (
              <Card key={v.name} className="bk-voice">
                <CardBody>
                  <Stars />
                  <h5 className="bk-voice__q">"{v.q}"</h5>
                  <div className="bk-voice__person">
                    <Avatar initials={v.initials} size="sm" />
                    <div>
                      <p className="bk-voice__name">{v.name}</p>
                      <p className="bk-voice__role">{v.role}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

Object.assign(window, { Services, ResearchOpportunities, Testimonials });
