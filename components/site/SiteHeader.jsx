"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { IMAGES, SITE_NAME } from "@/lib/assets";

const PREFIXES = {
  landing: "bl",
  about: "ba",
  blog: "bb",
  faq: "bb",
};

export function SiteHeader({ page, active, lang, locale = "ar", langLabel, toggleLang }) {
  const p = PREFIXES[page];
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuIcon = menuOpen ? "x" : "menu";
  const logoSrc = locale === "ar" ? IMAGES.logoHeaderAr : IMAGES.logoHeaderEn;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY >= window.innerHeight - 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const linkStyle = (key) => (active === key ? { fontWeight: 600 } : undefined);

  return (
    <header className={`${p}-hdr scheme-3${scrolled ? ` ${p}-hdr--scrolled` : ""}`}>
      <div className={`baheth-container ${p}-hdr__bar`}>
        <Link href="/" className="bl-hdr__logo">
          <img src={logoSrc} alt={SITE_NAME} />
        </Link>
        <nav className={`${p}-hdr__links`}>
          <Link href="/" style={linkStyle("home")}>{lang.nav.home}</Link>
          <Link href="/about" style={linkStyle("about")}>{lang.nav.about}</Link>
          <Link href="/blog" style={linkStyle("blog")}>{lang.nav.blog}</Link>
          <Link href="/faq" style={linkStyle("faq")}>{lang.nav.faq}</Link>
        </nav>
        <div className={`${p}-hdr__actions`}>
          <button type="button" className={`${p}-lang`} onClick={toggleLang}>
            <Icon name="globe" size={16} />
            {langLabel}
          </button>
          <div className={`${p}-hdr__cta`}>
            <Button size="sm">{lang.nav.start}</Button>
          </div>
          <button
            type="button"
            className={`${p}-burger`}
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuIcon} size={26} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className={`${p}-mobile`}>
          <Link href="/" style={linkStyle("home")} onClick={() => setMenuOpen(false)}>{lang.nav.home}</Link>
          <Link href="/about" style={linkStyle("about")} onClick={() => setMenuOpen(false)}>{lang.nav.about}</Link>
          <Link href="/blog" style={linkStyle("blog")} onClick={() => setMenuOpen(false)}>{lang.nav.blog}</Link>
          <Link href="/faq" style={linkStyle("faq")} onClick={() => setMenuOpen(false)}>{lang.nav.faq}</Link>
          <div className={`${p}-mobile__cta`}>
            <Button size="sm">{lang.nav.start}</Button>
          </div>
        </div>
      )}
    </header>
  );
}
