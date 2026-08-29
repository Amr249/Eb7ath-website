"use client";

import Link from "next/link";
import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { expertsDict, formatPublicationDate } from "@/lib/i18n/experts";
import { Reveal, RevealGroup, RevealItem, scaleIn } from "@/lib/motion";

export function ExpertProfilePage({ slug, expert: expertProp, publications: publicationsProp = [] }) {
  const { lang, dir, langClass, langLabel, toggleLang, mounted } = useLanguage();
  const t = expertsDict(lang);
  const expert = expertProp;
  const publications = publicationsProp;

  if (!mounted) return null;

  if (!expert) {
    return (
      <main className={`be-root ${langClass}`} dir={dir}>
        <SiteHeader page="blog" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />
        <section className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
          <div className="baheth-container be-not-found">
            <h1>{t.profile.notFound}</h1>
            <Button variant="secondary" asChild>
              <Link href="/">{t.profile.back}</Link>
            </Button>
          </div>
        </section>
        <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
      </main>
    );
  }

  const name = expert.name[lang] ?? expert.name.en;
  const specialty = expert.specialty[lang] ?? expert.specialty.en;
  const affiliation = expert.affiliation[lang] ?? expert.affiliation.en;

  return (
    <main key={`${lang}-${slug}`} className={`be-root ${langClass}`} dir={dir} style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <SiteHeader page="blog" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section className="scheme-3 be-profile-hero-section" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <Reveal>
            <Link href="/#mentors" className="be-back-link">
              <Icon name="chevron-left" size={18} />
              {t.profile.back}
            </Link>
          </Reveal>

          <Reveal className="be-profile-hero" style={{ direction: "ltr" }}>
            <div className="be-profile-hero__info" dir={dir}>
              <dl className="be-profile-meta">
                <div className="be-profile-meta__row">
                  <dt>{t.profile.nameLabel}</dt>
                  <dd>{name}</dd>
                </div>
                <div className="be-profile-meta__row">
                  <dt>{t.profile.affiliationLabel}</dt>
                  <dd>{affiliation}</dd>
                </div>
                <div className="be-profile-meta__row">
                  <dt>{t.profile.specialtyLabel}</dt>
                  <dd>{specialty}</dd>
                </div>
              </dl>
            </div>
            <div className="be-profile-hero__photo">
              <img src={expert.img} alt={name} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scheme-5 be-publications-section" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <RevealGroup style={{ marginBottom: 48 }}>
            <RevealItem hover={false}>
              <h2 style={{ marginBottom: 12 }}>{t.profile.publicationsTitle}</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "var(--text-large)", maxWidth: "42rem" }}>{t.profile.publicationsLead}</p>
            </RevealItem>
          </RevealGroup>

          {publications.length === 0 ? (
            <p style={{ color: "var(--text-muted)" }}>—</p>
          ) : (
            <RevealGroup className="be-publications-list">
              {publications.map((pub) => (
                <RevealItem key={pub.slug} variants={scaleIn} className="be-publications-list__item">
                  <Link href={`/research/${pub.slug}`} className="be-pub-card">
                    <span className="be-pub-card__journal" lang="en" dir="ltr">
                      {pub.journal}
                    </span>
                    <h3 className="be-pub-card__title" lang="en" dir="ltr">
                      {pub.title}
                    </h3>
                    <span className="be-pub-card__footer">
                      {pub.publishedAt ? (
                        <span className="be-pub-card__date">
                          <Icon name="calendar" size={14} />
                          {formatPublicationDate(pub.publishedAt, lang)}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="be-pub-card__cta">
                        {t.profile.viewResearch}
                        <Icon name="arrow-right" size={16} />
                      </span>
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
