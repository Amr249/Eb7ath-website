import React from "react";

/**
 * Pill segmented tabs. Pass `tabs` as [{ value, label }] and render
 * content via the `value` returned to `onChange`, or use children with
 * the active value. Controlled or uncontrolled.
 */
export function Tabs({ tabs = [], value, defaultValue, onChange, className = "" }) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value ?? internal;
  const select = (v) => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return (
    <div className={["bh-tabs__list", className].filter(Boolean).join(" ")} role="tablist">
      {tabs.map((t) => (
        <button
          key={t.value}
          role="tab"
          aria-selected={active === t.value}
          data-active={active === t.value}
          className="bh-tab"
          onClick={() => select(t.value)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
