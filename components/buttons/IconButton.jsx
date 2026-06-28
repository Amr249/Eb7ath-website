import React from "react";
import { Icon } from "../icon/Icon.jsx";

/**
 * Square icon-only button. Same visual variants as Button; pass an
 * icon name (Baheth set) or any node as children.
 */
export function IconButton({
  variant = "secondary",
  size = "md",
  icon,
  label,
  className = "",
  children,
  ...props
}) {
  const VARIANTS = {
    primary: "bh-btn--primary",
    alternate: "bh-btn--alternate",
    secondary: "bh-btn--secondary",
    ghost: "bh-btn--ghost",
  };
  const cls = [
    "bh-btn",
    "bh-btn--icon",
    VARIANTS[variant] || VARIANTS.secondary,
    size === "sm" ? "bh-btn--sm" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={cls} aria-label={label} {...props}>
      {typeof icon === "string" ? <Icon name={icon} size={size === "sm" ? 18 : 20} /> : icon}
      {children}
    </button>
  );
}
