"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { SiteHeader } from "@/components/site/SiteHeader.jsx";
import { SiteFooter } from "@/components/site/SiteFooter.jsx";
import { useLanguage } from "@/lib/useLanguage";
import { blogDict, getStaticBlogPost } from "@/lib/i18n/blog";
import { prepareArticleHtml } from "@/lib/cms/content";

function formatDate(value, lang) {
  if (!value) return "";
  try {
    return new Intl.DateTimeFormat(lang === "ar" ? "ar-SA" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(value));
  } catch {
    return "";
  }
}

export function BlogPostPage({ slug, initialArticlesByLocale }) {
  const { lang, dir, langClass, langLabel, toggleLang } = useLanguage();
  const t = blogDict(lang);
  const serverArticle = initialArticlesByLocale?.[lang] ?? null;
  const [article, setArticle] = useState(serverArticle);
  const [loading, setLoading] = useState(!serverArticle);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setArticle(serverArticle);
    setLoading(!serverArticle);
    setNotFound(false);

    let active = true;

    fetch(`/api/public/blog/${slug}?locale=${lang}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!active) return;
        if (data?.item) {
          setArticle(data.item);
          setNotFound(false);
        } else if (!serverArticle) {
          const fallback = getStaticBlogPost(lang, slug);
          setArticle(fallback);
          setNotFound(!fallback);
        }
      })
      .catch(() => {
        if (!active) return;
        if (!serverArticle) {
          const fallback = getStaticBlogPost(lang, slug);
          setArticle(fallback);
          setNotFound(!fallback);
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [slug, lang, serverArticle]);

  const articleHtml = useMemo(
    () => (article?.content ? prepareArticleHtml(article.content) : ""),
    [article?.content]
  );

  return (
    <main key={`${lang}-${slug}`} className={`bb-root ${langClass}`} dir={dir} style={{ fontFamily: "var(--font-body)", color: "var(--text-body)" }}>
      <SiteHeader page="blog" active="blog" lang={t} locale={lang} langLabel={langLabel} toggleLang={toggleLang} />

      <section className="scheme-3" style={{ paddingBlock: "var(--section-py)" }}>
        <div className="baheth-container bb-post">
          <Link href="/blog" className="bb-post__back">
            <Icon name="chevron-right" size={18} />
            {t.post.back}
          </Link>

          {loading ? (
            <p className="bb-post__state">{lang === "ar" ? "جارٍ تحميل المقال..." : "Loading article..."}</p>
          ) : notFound || !article ? (
            <div className="bb-post__state">
              <h1>{t.post.notFound}</h1>
              <div style={{ marginTop: 24 }}>
                <Link href="/blog">
                  <Button variant="primary">{t.post.back}</Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <div className="bb-post__hero">
                {article.img ? (
                  <img className="bb-post__cover" src={article.img} alt="" loading="eager" decoding="async" />
                ) : null}
                <div className="bb-post__meta">
                  <span>{article.read}</span>
                  {article.publishedAt ? <span>{formatDate(article.publishedAt, lang)}</span> : null}
                </div>
                <h1 className="bb-post__title">{article.title}</h1>
                <p className="bb-post__excerpt">{article.excerpt}</p>
              </div>

              <div
                className="bb-post__content"
                dangerouslySetInnerHTML={{ __html: articleHtml }}
              />
            </>
          )}
        </div>
      </section>

      <SiteFooter footer={{ ...t.footer, nav: t.nav }} locale={lang} />
    </main>
  );
}
