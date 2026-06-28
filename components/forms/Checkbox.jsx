import React from "react";
import { Icon } from "../icon/Icon.jsx";

/** Checkbox with the Salem-green checked state. Label optional. */
export function Checkbox({ label, className = "", children, ...props }) {
  return (
    <label className={["bh-checkbox", className].filter(Boolean).join(" ")}>
      <input type="checkbox" {...props} />
      <span className="bh-checkbox__box">
        <Icon name="check" size={14} strokeWidth={3} />
      </span>
      {label || children ? <span>{label || children}</span> : null}
    </label>
  );
}
