import React from "react";

/**
 * Small status / category label. Default is the outlined pill used for
 * research tags; `solid` (green) and `soft` for emphasis. `tag` squares
 * the corners for filter chips.
 */
export function Badge({ variant = "default", tag = false, className = "", children, ...props }) {
  const V = { default: "", solid: "bh-badge--solid", soft: "bh-badge--soft" };
  const cls = ["bh-badge", V[variant] || "", tag ? "bh-tag" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <span className={cls} {...props}>
      {children}
    </span>
  );
}
