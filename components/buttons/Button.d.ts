import * as React from "react";

export type ButtonVariant = "primary" | "alternate" | "secondary" | "link" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual treatment. `primary` is the green CTA; `alternate` (white) for dark schemes. Default "primary". */
  variant?: ButtonVariant;
  /** Size. Default "md". */
  size?: ButtonSize;
  /** Node rendered before the label (e.g. an <Icon/>). */
  iconLeft?: React.ReactNode;
  /** Node rendered after the label (e.g. a chevron). */
  iconRight?: React.ReactNode;
  /** Merge props onto the single child element instead of a <button>. */
  asChild?: boolean;
}

/** Primary action control. Recolors per scheme. */
export function Button(props: ButtonProps): JSX.Element;

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Icon name (Baheth set) or a React node. */
  icon?: string | React.ReactNode;
  /** Accessible label (required for icon-only). */
  label?: string;
  variant?: "primary" | "alternate" | "secondary" | "ghost";
  size?: "sm" | "md";
}

/** Square, icon-only button. */
export function IconButton(props: IconButtonProps): JSX.Element;
