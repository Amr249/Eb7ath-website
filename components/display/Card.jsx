import React from "react";

/**
 * Outlined surface — the workhorse container. Flat by default (border
 * only); `transparent` for dark schemes, `elevated` for floating cards.
 * Compose freely; CardMedia + CardBody are thin helpers.
 */
export function Card({ variant = "default", className = "", children, ...props }) {
  const V = { default: "", transparent: "bh-card--transparent", elevated: "bh-card--elevated" };
  const cls = ["bh-card", V[variant] || "", className].filter(Boolean).join(" ");
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}

export function CardMedia({ src, alt = "", className = "", children, ...props }) {
  return (
    <div className={["bh-card__media", className].filter(Boolean).join(" ")} {...props}>
      {src ? <img src={src} alt={alt} /> : children}
    </div>
  );
}

export function CardBody({ size = "md", className = "", children, ...props }) {
  const cls = ["bh-card__body", size === "lg" ? "bh-card__body--lg" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls} {...props}>
      {children}
    </div>
  );
}
