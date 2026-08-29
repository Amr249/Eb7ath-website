"use client";

import Link from "next/link";
import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { Badge } from "@/components/display/Badge.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { localizedText } from "@/lib/experts/localize";
import { expertsDict, formatPublicationDate } from "@/lib/i18n/experts";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";

export function ResearchPublicationPage({ slug, research: researchProp, expert: expertProp }) {
  const { lang, dir, langClass, langLabel, toggleLang, mounted } = useLanguage();
  const t = expertsDict(lang);
  const research = researchProp;
  const expert = expertProp;

  if (!mounted) return null;

  if (!research) {
    return (
      <main className={`br-root ${langClass}`} dir={dir}>
        <SiteHeader page="blog" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />
        <section className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
          <div className="baheth-container be-not-found">
            <h1>{t.research.notFound}</h1>
            <Button variant="secondary" asChild>
              <Link href="/">{t.profile.back}</Link>
            </Button>
          </div>
        </section>
        <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
      </main>
    );
  }

  const backHref = expert ? `/experts/${expert.slug}` : "/#mentors";
  const consultantName = localizedText(research.consultant.name, lang);
  const consultantAffiliation = localizedText(research.consultant.affiliation, lang);
  const correspondingName = research.correspondingAuthor
    ? localizedText(research.correspondingAuthor.name, "en")
    : null;

  const facts = [
    { icon: "book-open", label: t.research.journalLabel, value: research.journal },
    { icon: "calendar", label: t.research.published, value: formatPublicationDate(research.publishedAt, lang) },
    {
      icon: "file-text",
      label: t.research.volume,
      value: `${research.volume} — ${t.research.article} ${research.articleNumber}`,
    },
    { icon: "globe", label: t.research.doiLabel, value: research.doi, ltr: true },
  ];

  return (
    <main
      key={`${lang}-${slug}`}
      className={`br-root ${langClass}`}
      dir={dir}
      style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}
    >
      <SiteHeader page="blog" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section className="scheme-1 br-hero">
        <div className="baheth-container br-hero__inner">
          <Reveal>
            <Link href={backHref} className="br-hero__back">
              <Icon name="chevron-left" size={16} />
              {t.research.back}
            </Link>

            <div className="br-hero__badges">
              <Badge>{t.research.typeResearch}</Badge>
              <Badge>{t.research.openAccess}</Badge>
              <span className="br-hero__count">
                {research.researchers.length + 1} {t.research.teamCount}
              </span>
            </div>

            <h1 className="br-hero__title" lang="en" dir="ltr">
              {research.title}
            </h1>

            <div className="br-hero__actions">
              <Button variant="alternate" size="sm" asChild iconRight={<Icon name="arrow-up-right" size={16} />}>
                <a href={research.externalUrl} target="_blank" rel="noopener noreferrer">
                  {t.research.viewArticle}
                </a>
              </Button>
              <Button variant="secondary" size="sm" asChild iconRight={<Icon name="arrow-up-right" size={16} />}>
                <a href={research.telegramUrl} target="_blank" rel="noopener noreferrer">
                  {t.research.joinTelegram}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="scheme-4 br-facts-section">
        <RevealGroup className="baheth-container br-facts">
          {facts.map((fact) => (
            <RevealItem key={fact.label} hover={false} className="br-fact">
              <span className="br-fact__icon">
                <Icon name={fact.icon} size={18} />
              </span>
              <span className="br-fact__text">
                <span className="br-fact__label">{fact.label}</span>
                <span className="br-fact__value" dir={fact.ltr ? "ltr" : undefined}>
                  {fact.value}
                </span>
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="scheme-3 br-team-section">
        <div className="baheth-container">
          <Reveal className="br-consultant">
            {expert ? (
              <img className="br-consultant__photo" src={expert.img} alt={consultantName} />
            ) : null}
            <div className="br-consultant__body">
              <p className="br-consultant__label">{t.research.consultantTitle}</p>
              <p className="br-consultant__name">{consultantName}</p>
              <p className="br-consultant__affiliation">{consultantAffiliation}</p>
            </div>
            {expert ? (
              <Button variant="secondary" size="sm" asChild className="br-consultant__cta">
                <Link href={`/experts/${expert.slug}`}>{t.research.viewExpertProfile}</Link>
              </Button>
            ) : null}
          </Reveal>

          <Reveal className="br-team-heading">
            <h2>{t.research.researchersTitle}</h2>
            <span className="br-team-heading__count">{research.researchers.length}</span>
          </Reveal>

          <RevealGroup className="br-team-grid">
            {research.researchers.map((person, i) => {
              const enName = localizedText(person.name, "en");
              const isCorresponding = correspondingName === enName;
              return (
                <RevealItem key={enName} hover={false} className="br-team-card">
                  <span className="br-team-card__index">{i + 1}</span>
                  <span className="br-team-card__body">
                    <span className="br-team-card__name-row">
                      <span className="br-team-card__name">{localizedText(person.name, lang)}</span>
                      {isCorresponding ? (
                        <span className="br-team-card__tag">{t.research.correspondingBadge}</span>
                      ) : null}
                    </span>
                    {person.affiliation ? (
                      <span className="br-team-card__affiliation">
                        {localizedText(person.affiliation, lang)}
                      </span>
                    ) : null}
                    {person.email ? (
                      <a
                        href={`mailto:${person.email}`}
                        className="br-team-card__email"
                        dir="ltr"
                      >
                        {person.email}
                      </a>
                    ) : null}
                  </span>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
