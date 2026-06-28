import React from "react";

/** Toggle switch — green when on. Pair with a label for settings rows. */
export function Switch({ label, className = "", children, ...props }) {
  return (
    <label className={["bh-switch", className].filter(Boolean).join(" ")}>
      <input type="checkbox" role="switch" {...props} />
      <span className="bh-switch__track">
        <span className="bh-switch__thumb" />
      </span>
      {label || children ? <span>{label || children}</span> : null}
    </label>
  );
}
