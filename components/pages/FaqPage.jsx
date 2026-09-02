"use client";

import { Button } from "@/components/buttons/Button.jsx";
import { Accordion } from "@/components/feedback/Accordion.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { faqDict } from "@/lib/i18n/faq";
import { WHATSAPP_URL } from "@/lib/externalLinks";
import { Reveal } from "@/lib/motion";

export function FaqPage() {
  const { lang, dir, langClass, langLabel, toggleLang, mounted } = useLanguage();
  const t = faqDict(lang);

  if (!mounted) return null;

  return (
    <main key={lang} className={`bb-root ${langClass}`} dir={dir} style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <SiteHeader page="faq" active="faq" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section className="scheme-1 logo-alt" style={{ paddingBlock: "var(--section-py)" }}>
        <Reveal className="baheth-container" style={{ maxWidth: "48rem", textAlign: "center" }}>
          <p className="bh-eyebrow">{t.hero.eyebrow}</p>
          <h1 className="bf-hero__title">{t.hero.h1}</h1>
          <p style={{ fontSize: "var(--text-medium)", color: "var(--color-white-50)" }}>{t.hero.sub}</p>
        </Reveal>
      </section>

      <section className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container bf-faq">
          <Reveal>
            <Accordion items={t.items} type="single" defaultOpen={[0]} />
          </Reveal>

          <Reveal style={{ textAlign: "center", marginTop: 64 }}>
            <h2 style={{ marginBottom: 16 }}>{t.more.h2}</h2>
            <p style={{ fontSize: "var(--text-large)", color: "var(--text-muted)", marginBottom: 24 }}>{t.more.lead}</p>
            <Button variant="secondary" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">{t.more.contact}</a>
            </Button>
          </Reveal>
        </div>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
