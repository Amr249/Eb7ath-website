/* Compose the full Baheth marketing page */
const { Navbar, Hero, Pathways, About, Stats, Services, ResearchOpportunities, Testimonials, CTA, FAQ, Footer, StartDialog } = window;

function App() {
  const [startOpen, setStartOpen] = React.useState(false);
  const open = () => setStartOpen(true);
  return (
    <div className="bk-page">
      <Navbar onStart={open} />
      <Hero onStart={open} />
      <Pathways />
      <About />
      <Stats />
      <Services />
      <ResearchOpportunities />
      <Testimonials />
      <CTA onStart={open} />
      <FAQ />
      <Footer />
      <StartDialog open={startOpen} onClose={() => setStartOpen(false)} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
