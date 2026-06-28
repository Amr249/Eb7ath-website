"use client";

import { motion } from "framer-motion";

const EASE = [0.4, 0, 0.2, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const heroImage = {
  hidden: { scale: 1.08, opacity: 0.85 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: EASE } },
};

const VIEWPORT = { once: true, amount: 0.2 };

/** Above-the-fold entrance — animates on mount, not scroll. */
export function HeroEnter({ children, className, style, delay = 0, variants = fadeUp, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

/** Stagger children on hero mount. */
export function HeroStagger({ children, className, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

/**
 * Scroll-reveal wrapper. Fades + slides its content in once it enters
 * the viewport. Pass `variants` to override (defaults to fadeUp) and
 * `delay` for simple sequencing.
 */
export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  style,
  as = "div",
  amount = 0.2,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, amount }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}

/**
 * Stagger parent — children using `staggerItem` (or any variants with
 * hidden/visible states) animate in sequence as the group reveals.
 */
export function RevealGroup({ children, className, style, amount = 0.15, as = "div" }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

export const staggerItem = fadeUp;

/**
 * A staggered child for use inside <RevealGroup>. Inherits the group's
 * reveal sequencing via `fadeUp` variants and adds a subtle hover lift.
 * Set `hover={false}` to opt out (e.g. inside JS-driven transforms).
 */
export function RevealItem({
  children,
  className,
  style,
  hover = true,
  lift = -6,
  variants = fadeUp,
  ...props
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      whileHover={hover ? { y: lift } : undefined}
      transition={{ duration: 0.3, ease: EASE }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { motion };
