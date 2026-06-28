"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/buttons/Button.jsx";
import { Icon } from "@/components/icon/Icon.jsx";
import { RevealGroup, RevealItem } from "@/lib/motion";

const STEP_ICONS = ["search", "users", "check-circle", "microscope"];

function TimelineLine({ sectionRef }) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 55%", "start start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="bl-steps__line" aria-hidden="true">
      <motion.div className="bl-steps__line-fill" style={{ height }} />
    </div>
  );
}

export function StepsSection({ t, locale = "en" }) {
  const sectionRef = useRef(null);
  const numerals = locale === "ar" ? ["١", "٢", "٣", "٤"] : ["1", "2", "3", "4"];

  return (
    <section
      id="steps"
      ref={sectionRef}
      className="scheme-3 bl-steps"
      style={{ paddingBlock: "var(--section-py)" }}
    >
      <div className="baheth-container">
        <div className="bl-steps__grid">
          <RevealGroup className="bl-steps__intro">
            <RevealItem hover={false}>
              <p className="bh-eyebrow">{t.steps.eyebrow}</p>
            </RevealItem>
            <RevealItem hover={false}>
              <h2 className="bl-steps__heading">{t.steps.h2}</h2>
            </RevealItem>
            <RevealItem hover={false}>
              <div className="bl-steps__cta">
                <Button variant="primary">{t.steps.cta}</Button>
              </div>
            </RevealItem>
          </RevealGroup>

          <div className="bl-steps__timeline">
            <TimelineLine sectionRef={sectionRef} />
            <RevealGroup className="bl-steps__list" amount={0.12}>
              {t.steps.items.map((step, i) => (
                <RevealItem key={i} hover={false} className="bl-steps__row">
                  <div className="bl-steps__marker-col">
                    <motion.div
                      className="bl-steps__marker"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.45, delay: i * 0.08, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <Icon name={STEP_ICONS[i]} size={24} />
                    </motion.div>
                  </div>
                  <div className="bl-steps__content">
                    <h3 className="bl-steps__step-title">
                      {numerals[i]}. {step.title}
                    </h3>
                    <p className="bl-steps__step-body">{step.body}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
