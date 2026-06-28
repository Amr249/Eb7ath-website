import React from "react";

/**
 * Round avatar. Pass `src` for a photo, otherwise `initials` render on a
 * soft Salem tint. Sizes sm / md / lg.
 */
export function Avatar({ src, alt = "", initials, size = "md", className = "", ...props }) {
  const S = { sm: "bh-avatar--sm", md: "", lg: "bh-avatar--lg" };
  const cls = ["bh-avatar", S[size] || "", className].filter(Boolean).join(" ");
  return (
    <span className={cls} {...props}>
      {src ? <img src={src} alt={alt} /> : <span>{initials}</span>}
    </span>
  );
}
