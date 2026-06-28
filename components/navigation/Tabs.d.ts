import * as React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
}
export interface TabsProps {
  /** Tab definitions. */
  tabs: TabItem[];
  /** Controlled active value. */
  value?: string;
  /** Uncontrolled initial value (defaults to first tab). */
  defaultValue?: string;
  /** Fires with the new value on select. */
  onChange?: (value: string) => void;
  className?: string;
}
/** Pill segmented tab control (e.g. blog category filter). */
export function Tabs(props: TabsProps): JSX.Element;
