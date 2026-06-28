import React from "react";

const VARIANTS = {
  primary: "bh-btn--primary",
  alternate: "bh-btn--alternate",
  secondary: "bh-btn--secondary",
  link: "bh-btn--link",
  ghost: "bh-btn--ghost",
};
const SIZES = { sm: "bh-btn--sm", md: "", lg: "bh-btn--lg" };

/**
 * Baheth button. Primary = the single saturated Salem-green CTA;
 * `alternate` (white) for dark/image schemes; `secondary` outlined;
 * `link` is a text + chevron affordance. Recolors per scheme.
 */
export function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  asChild = false,
  className = "",
  children,
  ...props
}) {
  const cls = ["bh-btn", VARIANTS[variant] || VARIANTS.primary, SIZES[size] || "", className]
    .filter(Boolean)
    .join(" ");

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: [cls, children.props.className].filter(Boolean).join(" "),
      ...props,
      children: (
        <>
          {iconLeft}
          {children.props.children}
          {iconRight}
        </>
      ),
    });
  }

  return (
    <button className={cls} {...props}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
