import React from "react";

/**
 * Text field. Default is Baheth's underline style; `boxed` gives a
 * 12px-radius outlined box. Optional leading icon node.
 */
export function Input({ icon, boxed = false, className = "", wrapperClassName = "", ...props }) {
  const inputCls = ["bh-input", boxed ? "bh-input--boxed" : "", className].filter(Boolean).join(" ");
  const wrapCls = ["bh-field", icon ? "bh-field--icon" : "", wrapperClassName].filter(Boolean).join(" ");
  return (
    <div className={wrapCls}>
      {icon && <span className="bh-field__icon">{icon}</span>}
      <input className={inputCls} {...props} />
    </div>
  );
}
