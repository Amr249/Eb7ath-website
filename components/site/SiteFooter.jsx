import Link from "next/link";
import { Icon } from "@/components/icon/Icon.jsx";
import { IMAGES, SITE_NAME, SITE_NAME_EN, SOCIAL_LINKS } from "@/lib/assets";

export function SiteFooter({ footer, locale = "ar" }) {
  const isEn = locale === "en";
  const footerLogo = isEn ? IMAGES.logoEn : IMAGES.logoAr;
  const siteName = isEn ? SITE_NAME_EN : SITE_NAME;

  return (
    <footer className="scheme-3" style={{ paddingBlock: 80, borderTop: "1px solid var(--scheme-border)" }}>
      <div className="baheth-container">
        <div className="site-footer__top">
          <Link href="/" className="site-footer__logo">
            <img key={footerLogo} src={footerLogo} alt={siteName} />
          </Link>
          <ul className="site-footer__social">
            {SOCIAL_LINKS.map(({ icon, href, label }) => (
              <li key={icon}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon name={icon} size={20} />
                </a>
              </li>
            ))}
          </ul>
          <ul className="site-footer__links">
            <li><Link href="/">{footer.nav?.home ?? "Home"}</Link></li>
            <li><Link href="/about">{footer.nav?.about ?? "About us"}</Link></li>
            <li><Link href="/blog">{footer.nav?.blog ?? "Blog"}</Link></li>
          </ul>
        </div>
        <div style={{ height: 1, background: "var(--scheme-border)" }} />
        <div className="site-footer__bottom">
          <p>{footer.copyright}</p>
          <ul className="site-footer__legal">
            <li><a href="#">{footer.privacy}</a></li>
            <li><a href="#">{footer.terms}</a></li>
            <li><a href="#">{footer.cookies}</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
