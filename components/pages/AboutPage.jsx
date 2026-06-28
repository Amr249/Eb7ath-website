"use client";

import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { aboutDict } from "@/lib/i18n/about";
import { IMAGES } from "@/lib/assets";
import { Reveal, RevealGroup, RevealItem, scaleIn, motion, fadeUp } from "@/lib/motion";

export function AboutPage() {
  const { lang, dir, langClass, langLabel, toggleLang, mounted } = useLanguage();
  const t = aboutDict(lang);

  if (!mounted) return null;

  return (
    <main key={lang} className={`ba-root ${langClass}`} dir={dir} style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <SiteHeader page="about" active="about" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section className="scheme-4 ba-vmv-section" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <div className="ba-vmv">
            <Reveal className="ba-vmv__header">
              <p className="bh-eyebrow">{t.vmv.tagline}</p>
              <h2 className="ba-vmv__title">{t.vmv.heading}</h2>
              <p className="ba-vmv__lead">{t.vmv.description}</p>
            </Reveal>

            <div className="ba-vmv__layout">
              <RevealGroup className="ba-vmv__cards">
                <RevealItem hover={false} className="ba-vmv__featured">
                  <img
                    className="ba-vmv__featured-img"
                    src={t.vmv.cardBig.image}
                    alt=""
                  />
                  <div className="ba-vmv__featured-body">
                    <p className="ba-vmv__card-tag">{t.vmv.cardBig.tagline}</p>
                    <h3 className="ba-vmv__card-title">{t.vmv.cardBig.heading}</h3>
                    <ul className="ba-vmv__values-list">
                      {t.vmv.cardBig.items.map((item, i) => (
                        <li key={i}>
                          <strong>{item.title}:</strong> {item.body}
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>

                {t.vmv.sections.map((section, i) => (
                  <RevealItem key={i} hover={false} className="ba-vmv__card">
                    <div className="ba-vmv__card-body">
                      <div className="ba-vmv__icon">
                        <Icon name={section.icon} size={48} />
                      </div>
                      <h3 className="ba-vmv__card-title">{section.heading}</h3>
                      <p className="ba-vmv__card-desc">{section.description}</p>
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </div>
        </div>
      </section>

      <section id="ba-why" className="scheme-2 logo-alt" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <Reveal style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 64px" }}>
            <p className="bh-eyebrow">{t.why.eyebrow}</p>
            <h2 style={{ margin: "16px 0 20px" }}>{t.why.h2}</h2>
            <p style={{ fontSize: "var(--text-large)", color: "var(--color-white-50)" }}>{t.why.lead}</p>
          </Reveal>
          <RevealGroup className="ba-why">
            {t.whyCards.map((c, i) => (
              <motion.div key={i} className="ba-why__card" variants={fadeUp}>
                <img src={c.img} alt="" />
                <div className="ba-why__scrim" />
                <div className="ba-why__body">
                  <p style={{ fontWeight: 600, color: "var(--color-white)", marginBottom: 8 }}>{c.eyebrow}</p>
                  <h3 style={{ fontSize: "var(--text-h4)", color: "var(--color-white)" }}>{c.title}</h3>
                  <div className="ba-why__more">
                    <p style={{ color: "var(--color-white)", marginTop: 20 }}>{c.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="bl-cta-section bl-cta">
        <div className="bl-cta__bg" aria-hidden="true">
          <div
            className="bl-cta__bg-fixed"
            style={{ backgroundImage: `url(${IMAGES.aboutCta})` }}
          />
        </div>
        <div className="bl-cta__overlay" aria-hidden="true" />
        <Reveal className="bl-cta__content" variants={scaleIn}>
          <h2 className="bl-cta__title">{t.cta.h2}</h2>
          <p className="bl-cta__lead">{t.cta.lead}</p>
          <Button variant="alternate">{t.cta.btn}</Button>
        </Reveal>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
