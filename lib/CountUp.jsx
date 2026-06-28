"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";

function toWestern(value) {
  return value.replace(/[٠-٩]/g, (d) => String(AR_DIGITS.indexOf(d)));
}

function formatNumber(n, locale) {
  const rounded = Math.round(n);
  if (locale === "ar") {
    return String(rounded).replace(/\d/g, (d) => AR_DIGITS[Number(d)]);
  }
  return String(rounded);
}

function parseStatValue(value) {
  const suffix = value.includes("+") ? "+" : "";
  const num = parseInt(toWestern(value).replace(/\D/g, ""), 10);
  return { target: Number.isFinite(num) ? num : 0, suffix };
}

export function CountUp({ value, className, locale = "en", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const { target, suffix } = parseStatValue(value);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    setDisplay(0);
    const start = performance.now();
    const ms = duration * 1000;
    let raf;

    const tick = (now) => {
      const progress = Math.min((now - start) / ms, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration, value]);

  return (
    <div ref={ref} className={className} aria-label={value}>
      {formatNumber(display, locale)}
      {suffix}
    </div>
  );
}
