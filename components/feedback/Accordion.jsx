import React from "react";
import { Icon } from "../icon/Icon.jsx";

/**
 * FAQ-style accordion. Pass `items` as [{ title, content }]. `type`
 * "single" (default) closes others on open; "multiple" allows many.
 */
export function Accordion({ items = [], type = "single", defaultOpen = [], className = "" }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const toggle = (i) => {
    setOpen((prev) => {
      const next = new Set(type === "multiple" ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };
  return (
    <div className={["bh-accordion", className].filter(Boolean).join(" ")}>
      {items.map((item, i) => {
        const isOpen = open.has(i);
        return (
          <div className="bh-accordion__item" data-open={isOpen} key={i}>
            <button
              className="bh-accordion__trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              {item.title}
              <Icon className="bh-accordion__icon" name="chevron-down" size={26} />
            </button>
            <div className="bh-accordion__panel">
              <div>
                <div className="bh-accordion__content">
                  {item.rich && typeof item.content === "string" ? (
                    <div className="bh-accordion__rich" dangerouslySetInnerHTML={{ __html: item.content }} />
                  ) : (
                    item.content
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
