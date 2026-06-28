import * as React from "react";

export interface AccordionItem {
  title: React.ReactNode;
  content: React.ReactNode;
}
export interface AccordionProps {
  /** Items to render. */
  items: AccordionItem[];
  /** "single" (default) auto-closes others; "multiple" allows many open. */
  type?: "single" | "multiple";
  /** Indices open on mount. */
  defaultOpen?: number[];
  className?: string;
}
/** FAQ / disclosure accordion. */
export function Accordion(props: AccordionProps): JSX.Element;
