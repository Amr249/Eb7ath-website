"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { Card } from "@/components/display/Card.jsx";
import { Badge } from "@/components/display/Badge.jsx";
import { Avatar } from "@/components/display/Avatar.jsx";
import { Accordion } from "@/components/feedback/Accordion.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { landingDict } from "@/lib/i18n/landing";
import { IMAGES } from "@/lib/assets";
import { Reveal, RevealGroup, RevealItem, scaleIn, HeroEnter, HeroStagger, motion, fadeUp } from "@/lib/motion";
import { CountUp } from "@/lib/CountUp";
import { StepsSection } from "@/components/sections/StepsSection.jsx";

function Stars() {
  return (
    <div className="bl-stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" fill size={22} />
      ))}
    </div>
  );
}

function VoiceCard({ v }) {
  return (
    <div className="bh-card bl-voice">
      <Stars />
      <h5 className="bl-voice__quote">{v.quote}</h5>
      <div className="bl-voice__person">
        <Avatar src={v.img} alt={v.name} initials={v.initials} size="sm" />
        <div>
          <p style={{ fontWeight: 600 }}>{v.name}</p>
          <p style={{ color: "var(--text-muted)", fontSize: "var(--text-small)" }}>{v.role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialColumn({ voices, direction = "up" }) {
  const items = [...voices, ...voices];
  return (
    <div className={`bl-testi__track bl-testi__track--${direction}`}>
      <div className="bl-testi__col-inner">
        {items.map((v, i) => (
          <VoiceCard key={`${v.initials}-${i}`} v={v} />
        ))}
      </div>
    </div>
  );
}

export function LandingPage() {
  const { lang, dir, langClass, langLabel, toggleLang, mounted } = useLanguage();
  const t = landingDict(lang);
  const allVoices = useMemo(() => [...t.voicesLeft, ...t.voicesRight], [t.voicesLeft, t.voicesRight]);
  const stackRef = useRef(null);
  const heroImages = [IMAGES.homeHero, IMAGES.homeHero2, IMAGES.homeHero3];
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, [heroImages.length]);

  const updateServices = useCallback(() => {
    const container = stackRef.current;
    if (!container) return;
    const cards = container.querySelectorAll(".bl-svc");
    if (window.matchMedia("(max-width: 767px)").matches) {
      cards.forEach((c) => { c.style.transform = ""; });
      return;
    }
    const total = cards.length;
    const rect = container.getBoundingClientRect();
    const totalScroll = rect.height - window.innerHeight * 0.6;
    let progress = totalScroll > 0 ? -rect.top / totalScroll : 0;
    progress = Math.max(0, Math.min(1, progress));
    cards.forEach((card, i) => {
      if (i === total - 1) { card.style.transform = "scale(1)"; return; }
      const frac = 1 / total;
      let p = (progress - frac * i) / frac;
      p = Math.max(0, Math.min(1, p));
      card.style.transform = `scale(${1 - p * 0.2})`;
    });
  }, []);

  const onScroll = useCallback(() => {
    updateServices();
  }, [updateServices]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll, mounted]);

  if (!mounted) return null;

  return (
    <main key={lang} className={`bl-root ${langClass}`} dir={dir} style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <SiteHeader page="landing" active="home" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section id="top" className="scheme-1 logo-alt" style={{ position: "relative", overflow: "hidden", minHeight: "100vh", display: "flex", alignItems: "flex-end" }}>
        {heroImages.map((src, i) => (
          <motion.img
            key={src}
            src={src}
            alt=""
            initial={{ opacity: i === 0 ? 1 : 0, scale: 1 }}
            animate={{
              opacity: i === heroIndex ? 1 : 0,
              scale: i === heroIndex ? 1.12 : 1,
            }}
            transition={{
              opacity: { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
              scale: { duration: 6.4, ease: "linear" },
            }}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "absolute", inset: 0, background: "rgba(4,7,8,0.58)", zIndex: 1 }}
        />
        <div key={lang} className="bl-hero-grid baheth-container" style={{ position: "relative", zIndex: 2, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
          <HeroStagger>
            <motion.h1 variants={fadeUp} style={{ color: "var(--color-white)", marginBottom: 28 }}>{t.hero.title}</motion.h1>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Button variant="alternate">{t.hero.start}</Button>
              <Button variant="secondary">{t.hero.learn}</Button>
            </motion.div>
          </HeroStagger>
          <HeroEnter as="p" delay={0.25} className="bl-hero-grid__sub" style={{ color: "var(--color-white)", maxWidth: "44ch" }}>{t.hero.sub}</HeroEnter>
        </div>
      </section>

      <section id="trust" className="scheme-4" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <Reveal className="bl-stats-head" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginBottom: 64 }}>
            <h3>{t.stats.h3}</h3>
            <p>{t.stats.p}</p>
          </Reveal>
          <RevealGroup className="bl-stats">
            <RevealItem className="bl-stats__cell bl-stats__cell--tall">
              <Card className="bl-stat-card-wrap">
                <div className="bl-stat-card">
                  <CountUp value={t.stats.v1} className="bl-stat-num bl-stat-num--xl" locale={lang} />
                  <p className="bl-stat-label">{t.stats.l1}</p>
                </div>
              </Card>
            </RevealItem>
            <RevealItem className="bl-stats__cell bl-stat-media">
              <img src={IMAGES.homeStats0} alt="" />
            </RevealItem>
            <RevealItem className="bl-stats__cell">
              <Card className="bl-stat-card-wrap">
                <div className="bl-stat-card">
                  <CountUp value={t.stats.v2} className="bl-stat-num bl-stat-num--lg" locale={lang} />
                  <p className="bl-stat-label">{t.stats.l2}</p>
                </div>
              </Card>
            </RevealItem>
            <RevealItem className="bl-stats__cell">
              <Card className="bl-stat-card-wrap">
                <div className="bl-stat-card">
                  <CountUp value={t.stats.v3} className="bl-stat-num bl-stat-num--lg" locale={lang} />
                  <p className="bl-stat-label">{t.stats.l3}</p>
                </div>
              </Card>
            </RevealItem>
            <RevealItem className="bl-stats__cell bl-stat-media">
              <img src={IMAGES.homeStats1} alt="" />
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="scheme-2 logo-alt" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <Reveal style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 64px" }}>
            <p className="bh-eyebrow">{t.path.eyebrow}</p>
            <h2 style={{ margin: "16px 0 20px" }}>{t.path.h2}</h2>
            <p style={{ fontSize: "var(--text-large)", color: "var(--color-white-50)" }}>{t.path.lead}</p>
          </Reveal>
          <RevealGroup className="bl-3">
            <RevealItem>
              <Card variant="transparent">
                <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                  <div style={{ padding: 32 }}>
                    <h3 className="bl-path-card__title">{t.path.c1title}</h3>
                    <p className="bl-path-card__body">{t.path.c1body}</p>
                    <div style={{ marginTop: 20 }}>
                      <Button variant="alternate" size="sm">{t.path.c1cta}</Button>
                    </div>
                  </div>
                  <img src={IMAGES.homeFeatures0} alt="" style={{ marginTop: "auto", width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }} />
                </div>
              </Card>
            </RevealItem>
            <RevealItem>
              <Card variant="transparent">
                <div className="bl-path-card__split">
                  <div className="bl-path-card__split-text">
                    <h3 className="bl-path-card__title bl-path-card__title--sm">{t.path.c2title}</h3>
                    <p className="bl-path-card__body">{t.path.c2body}</p>
                    <div style={{ marginTop: 20 }}>
                      <Button variant="alternate" size="sm">{t.path.c2cta}</Button>
                    </div>
                  </div>
                  <img src={IMAGES.homeFeatures1} alt="" className="bl-path-card__split-img" />
                </div>
              </Card>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <StepsSection t={t} locale={lang} />

      <section id="services" className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <RevealGroup style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 64px" }}>
            <RevealItem hover={false}>
              <p className="bh-eyebrow">{t.svcHead.eyebrow}</p>
            </RevealItem>
            <RevealItem hover={false}>
              <h2 style={{ margin: "16px 0 20px" }}>{t.svcHead.h2}</h2>
            </RevealItem>
            <RevealItem hover={false}>
              <p style={{ fontSize: "var(--text-large)", color: "var(--text-muted)" }}>{t.svcHead.lead}</p>
            </RevealItem>
          </RevealGroup>
          <div id="bl-services-stack" ref={stackRef} style={{ position: "relative" }}>
            {t.services.map((s, i) => (
              <div key={i} className="bl-svc" style={{ position: "sticky", top: "10%", height: "80vh", marginBottom: "10vh", transformOrigin: "center top" }}>
                <Reveal variants={scaleIn} amount={0.18}>
                  <Card>
                    <div className="bl-svc-grid">
                      <motion.div
                        className="bl-svc-text"
                        initial={{ opacity: 0, x: dir === "rtl" ? 24 : -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.55, delay: 0.08, ease: [0.4, 0, 0.2, 1] }}
                      >
                        <p className="bh-eyebrow">{s.eyebrow}</p>
                        <h2 style={{ fontSize: "var(--text-h3)", margin: "12px 0 16px" }}>{s.title}</h2>
                        <p style={{ color: "var(--text-muted)" }}>{s.body}</p>
                        <div style={{ marginTop: 24, display: "flex", gap: 16, alignItems: "center" }}>
                          <Button variant="secondary">{s.learn}</Button>
                          <Button variant="primary" size="sm">{s.explore}</Button>
                        </div>
                      </motion.div>
                      <motion.img
                        className="bl-svc-img"
                        src={s.img}
                        alt=""
                        initial={{ opacity: 0, scale: 1.06 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{ duration: 0.65, delay: 0.14, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </Card>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mentors" className="scheme-5" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <RevealGroup style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 64px" }}>
            <RevealItem hover={false}>
              <p className="bh-eyebrow">{t.oppsHead.eyebrow}</p>
            </RevealItem>
            <RevealItem hover={false}>
              <h2 style={{ margin: "16px 0 20px" }}>{t.oppsHead.h2}</h2>
            </RevealItem>
            <RevealItem hover={false}>
              <p style={{ fontSize: "var(--text-large)", color: "var(--text-muted)" }}>{t.oppsHead.lead}</p>
            </RevealItem>
          </RevealGroup>
          <RevealGroup className="bl-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {t.projects.map((p, i) => (
              <RevealItem key={i} variants={scaleIn}>
                <Card>
                  <motion.img
                    src={p.img}
                    alt=""
                    initial={{ opacity: 0, scale: 1.06 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                    style={{ width: "100%", aspectRatio: "3/2", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: 24 }}>
                    <h5 style={{ fontSize: "var(--text-h5)", marginBottom: 8 }}>{p.title}</h5>
                    <p style={{ color: "var(--text-muted)" }}>{p.body}</p>
                    {p.tags?.length > 0 && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "16px 0" }}>
                        {p.tags.map((tg, j) => (
                          <Badge key={j}>{tg}</Badge>
                        ))}
                      </div>
                    )}
                    <div style={{ marginTop: 16 }}>
                      <Button variant="link">{t.oppsHead.view}</Button>
                    </div>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal delay={0.1} style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
            <Button variant="primary" size="sm">{t.oppsHead.viewAll}</Button>
          </Reveal>
        </div>
      </section>

      <section className="scheme-3 bl-testi-section" style={{ overflow: "hidden", paddingBlock: "var(--space-18)" }}>
        <div className="baheth-container">
          <Card>
            <div className="bl-testi">
              <Reveal className="bl-testi__intro">
                <h2 style={{ marginBottom: 12 }}>{t.testi.h2}</h2>
                <p style={{ fontSize: "var(--text-medium)", color: "var(--text-muted)" }}>{t.testi.sub}</p>
              </Reveal>
              <div className="bl-testi__tracks">
                <div className="bl-testi__right bl-testi__right--desktop">
                  <TestimonialColumn voices={t.voicesLeft} direction="up" />
                  <TestimonialColumn voices={t.voicesRight} direction="down" />
                </div>
                <div className="bl-testi__right bl-testi__right--mobile">
                  <TestimonialColumn voices={allVoices} direction="up" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bl-cta-section bl-cta">
        <div className="bl-cta__bg" aria-hidden="true">
          <div
            className="bl-cta__bg-fixed"
            style={{ backgroundImage: `url(${IMAGES.ctaLanding})` }}
          />
        </div>
        <div className="bl-cta__overlay" aria-hidden="true" />
        <Reveal className="bl-cta__content" variants={scaleIn}>
          <h2 className="bl-cta__title">{t.cta.h2}</h2>
          <p className="bl-cta__lead">{t.cta.lead}</p>
          <Button variant="alternate">{t.cta.signup}</Button>
        </Reveal>
      </section>

      <section id="faq" className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container" style={{ maxWidth: "48rem" }}>
          <Reveal style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ marginBottom: 20 }}>{t.faqHead.h2}</h2>
            <p style={{ fontSize: "var(--text-large)", color: "var(--text-muted)" }}>{t.faqHead.lead}</p>
          </Reveal>
          <Reveal>
            <Accordion items={t.faqItems} type="single" defaultOpen={[0]} />
          </Reveal>
          <Reveal style={{ textAlign: "center", marginTop: 64 }}>
            <h4 style={{ marginBottom: 24 }}>{t.faqHead.more}</h4>
            <Button variant="secondary">{t.faqHead.contact}</Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
