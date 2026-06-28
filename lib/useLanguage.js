"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "eb7ath-lang";

export function useLanguage() {
  const [lang, setLangState] = useState("ar");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) ?? localStorage.getItem("baheth-lang");
      if (stored === "ar" || stored === "en") setLangState(stored);
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "en" ? "ar" : "en";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang, mounted]);

  return {
    lang,
    mounted,
    dir: lang === "ar" ? "rtl" : "ltr",
    langClass: lang === "ar" ? "lang-ar" : "",
    langLabel: lang === "en" ? "العربية" : "English",
    toggleLang,
  };
}
