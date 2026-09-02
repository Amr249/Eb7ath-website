"use client";

import Link from "next/link";
import { Button } from "@/components/buttons/Button.jsx";
import { Card } from "@/components/display/Card.jsx";
import { Badge } from "@/components/display/Badge.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { consultantsDict } from "@/lib/i18n/consultants";
import { RESEARCH_TEAM_FORM_URL } from "@/lib/externalLinks";
import { Reveal, RevealGroup, RevealItem, scaleIn, motion } from "@/lib/motion";

export function ConsultantsPage({ expertsByLocale }) {
  const { lang, dir, langClass, langLabel, toggleLang } = useLanguage();
  const t = consultantsDict(lang);
  const experts = expertsByLocale?.[lang] ?? [];

  return (
    <main
      key={lang}
      className={`bb-root ${langClass}`}
      dir={dir}
      style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}
    >
      <SiteHeader
        page="consultants"
        active="consultants"
        lang={t}
        locale={lang}
        langLabel={langLabel}
        toggleLang={toggleLang}
      />

      <section className="scheme-1 logo-alt" style={{ paddingBlock: "var(--section-py)" }}>
        <Reveal className="baheth-container bc-hero" style={{ maxWidth: "48rem", textAlign: "center" }}>
          <h1 className="bc-hero__title">{t.hero.h1}</h1>
          <p style={{ fontSize: "var(--text-medium)", color: "var(--color-white-50)" }}>{t.hero.sub}</p>
        </Reveal>
      </section>

      <section className="scheme-5" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <Reveal style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 64px" }}>
            <p className="bh-eyebrow">{t.list.eyebrow}</p>
            <h2 style={{ margin: "16px 0 20px" }}>{t.list.h2}</h2>
            <p style={{ fontSize: "var(--text-large)", color: "var(--text-muted)" }}>{t.list.lead}</p>
          </Reveal>

          <RevealGroup className="bc-grid">
            {experts.map((expert, i) => (
              <RevealItem key={expert.slug ?? i} variants={scaleIn}>
                <Card className="bc-card">
                  <motion.img
                    className="bh-expert-photo"
                    src={expert.img}
                    alt={expert.title}
                    initial={{ opacity: 0, scale: 1.06 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.4, 0, 0.2, 1] }}
                  />
                  <div className="bc-card__body">
                    <h3 style={{ fontSize: "var(--text-h5)", margin: "0 0 8px" }}>{expert.title}</h3>
                    <p style={{ color: "var(--text-body)", margin: expert.affiliation ? "0 0 8px" : 0 }}>
                      {expert.body}
                    </p>
                    {expert.affiliation ? (
                      <p
                        className="bl-mentor-card__affiliation"
                        style={{
                          color: "var(--text-muted)",
                          fontSize: "var(--text-small)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {expert.affiliation}
                      </p>
                    ) : null}
                    {expert.researchCount > 0 ? (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                        <Badge>
                          {expert.researchCount}{" "}
                          {expert.researchCount === 1 ? t.list.researchOne : t.list.research}
                        </Badge>
                      </div>
                    ) : null}
                    <div className="bc-card__cta">
                      <Button variant="link" asChild>
                        <Link href={`/experts/${expert.slug}`}>{t.list.view}</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </RevealItem>
            ))}
          </RevealGroup>

          {experts.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "48px 0" }}>
              {t.list.empty}
            </p>
          )}
        </div>
      </section>

      <section className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
        <Reveal className="baheth-container" style={{ maxWidth: "40rem", textAlign: "center" }}>
          <h2 className="bc-cta__title">{t.cta.h2}</h2>
          <p style={{ fontSize: "var(--text-medium)", color: "var(--text-muted)" }}>{t.cta.lead}</p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center" }}>
            <Button variant="primary" asChild>
              <a href={RESEARCH_TEAM_FORM_URL} target="_blank" rel="noopener noreferrer">
                {t.cta.button}
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
