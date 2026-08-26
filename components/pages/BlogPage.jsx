"use client";

import { useMemo } from "react";
import Link from "next/link";
import { Button } from "@/components/buttons/Button.jsx";
import { Input } from "@/components/forms/Input.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { useCmsBlogPosts } from "@/lib/useCmsBlogPosts";
import { blogDict } from "@/lib/i18n/blog";
import { IMAGES } from "@/lib/assets";
import { Reveal, scaleIn } from "@/lib/motion";

export function BlogPage({ initialPostsByLocale }) {
  const { lang, dir, langClass, langLabel, toggleLang } = useLanguage();
  const t = blogDict(lang);
  const { posts: cmsPosts } = useCmsBlogPosts(lang, { initialPostsByLocale });

  const sourcePosts = useMemo(() => {
    if (cmsPosts.length) return cmsPosts;
    return t.posts;
  }, [cmsPosts, t.posts]);

  return (
    <main key={lang} className={`bb-root ${langClass}`} dir={dir} style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <SiteHeader page="blog" active="blog" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section className="scheme-1 logo-alt" style={{ paddingBlock: "var(--section-py)" }}>
        <Reveal className="baheth-container" style={{ maxWidth: "48rem", textAlign: "center" }}>
          <p className="bh-eyebrow">{t.hero.eyebrow}</p>
          <h1 style={{ margin: "16px 0 20px" }}>{t.hero.h1}</h1>
          <p style={{ fontSize: "var(--text-medium)", color: "var(--color-white-50)" }}>{t.hero.sub}</p>
          <div style={{ marginTop: 28, display: "flex", justifyContent: "center", gap: 16 }}>
            <Button variant="alternate">{t.hero.read}</Button>
            <Button variant="secondary">{t.hero.subscribe}</Button>
          </div>
        </Reveal>
      </section>

      <section className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container">
          <Reveal style={{ textAlign: "center", maxWidth: "48rem", margin: "0 auto 48px" }}>
            <p className="bh-eyebrow">{t.feat.eyebrow}</p>
            <h2 style={{ margin: "16px 0 20px" }}>{t.feat.h2}</h2>
            <p style={{ fontSize: "var(--text-large)", color: "var(--text-muted)" }}>{t.feat.lead}</p>
          </Reveal>

          <div className="bb-grid">
            {sourcePosts.map((post, i) => (
              <div key={post.slug || i} className="bh-card">
                <Link href={post.slug ? `/blog/${post.slug}` : "/blog"} className="bb-card__link">
                  <img className="bb-card__img" src={post.img} alt="" loading="lazy" decoding="async" />
                  <div className="bb-card__body">
                    <div className="bb-meta">
                      <span className="bb-meta__read">{post.read}</span>
                    </div>
                    <h3 className="bb-card__title">{post.title}</h3>
                    <p className="bb-card__excerpt">{post.excerpt}</p>
                    <div style={{ marginTop: 20 }}>
                      <Button variant="primary" size="sm">{t.feat.readMore}</Button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {sourcePosts.length === 0 && (
            <p style={{ textAlign: "center", color: "var(--text-muted)", padding: "48px 0" }}>{t.feat.empty}</p>
          )}
        </div>
      </section>

      <section className="scheme-5" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Reveal style={{ textAlign: "center", maxWidth: "32rem", margin: "0 auto 48px" }}>
            <h2 style={{ marginBottom: 20 }}>{t.news.h2}</h2>
            <p style={{ fontSize: "var(--text-medium)" }}>{t.news.lead}</p>
            <div style={{ maxWidth: "24rem", margin: "24px auto 0" }}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-end" }}>
                <Input type="email" placeholder={t.news.placeholder} />
                <Button>{t.news.join}</Button>
              </div>
              <p style={{ fontSize: "var(--text-tiny)", color: "var(--scheme-muted)", marginTop: 12 }}>{t.news.note}</p>
            </div>
          </Reveal>
          <Reveal variants={scaleIn} className="media-zoom" style={{ width: "100%", borderRadius: "var(--radius-image)", overflow: "hidden" }}>
            <img src={IMAGES.blogNewsletter} alt="" style={{ width: "100%", aspectRatio: "16/6", objectFit: "cover", display: "block" }} loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
