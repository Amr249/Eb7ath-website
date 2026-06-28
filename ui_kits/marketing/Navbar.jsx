/* Baheth marketing site — top navigation (scheme-3, white). */
const { Button, Icon } = window.BahethDesignSystem_c51e92;

function Navbar({ onStart }) {
  const [open, setOpen] = React.useState(false);
  const [resOpen, setResOpen] = React.useState(false);
  const links = ["About us", "Services", "Blog"];
  return (
    <header className="bk-nav scheme-3">
      <div className="bk-nav__inner">
        <a href="#top" className="bk-nav__logo">
          <img src="../../assets/logo/logo-light.png" alt="Baheth — Medical Research" />
        </a>

        <nav className="bk-nav__links">
          {links.map((l) => (
            <a key={l} href="#" className="bk-nav__link">{l}</a>
          ))}
          <div
            className="bk-nav__res"
            onMouseEnter={() => setResOpen(true)}
            onMouseLeave={() => setResOpen(false)}
          >
            <button className="bk-nav__link bk-nav__resbtn">
              Resources
              <Icon name="chevron-down" size={18} style={{ transform: resOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
            </button>
            {resOpen && (
              <div className="bk-nav__menu">
                <a href="#faq">FAQ</a>
                <a href="#">Team</a>
                <a href="#">Contact</a>
              </div>
            )}
          </div>
        </nav>

        <div className="bk-nav__actions">
          <Button variant="secondary" size="sm">Login</Button>
          <Button size="sm" onClick={onStart}>Start</Button>
        </div>

        <button className="bk-nav__burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <Icon name={open ? "x" : "menu"} size={26} />
        </button>
      </div>

      {open && (
        <div className="bk-nav__mobile">
          {links.map((l) => <a key={l} href="#" className="bk-nav__link">{l}</a>)}
          <a href="#faq" className="bk-nav__link">FAQ</a>
          <div className="bk-nav__mobileactions">
            <Button variant="secondary" size="sm">Login</Button>
            <Button size="sm" onClick={onStart}>Start</Button>
          </div>
        </div>
      )}
    </header>
  );
}

window.Navbar = Navbar;
