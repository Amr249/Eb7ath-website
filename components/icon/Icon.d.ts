import * as React from "react";

export type IconName =
  | "chevron-right" | "chevron-down" | "chevron-left"
  | "arrow-right" | "arrow-up-right"
  | "star" | "check" | "check-circle" | "search" | "x" | "menu"
  | "mail" | "microscope" | "flask" | "file-text" | "graduation-cap"
  | "users" | "book-open" | "bar-chart" | "quote" | "plus" | "minus"
  | "calendar" | "message-circle" | "award" | "globe"
  | "instagram" | "tiktok" | "linkedin";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Icon name from the Baheth set. */
  name: IconName;
  /** Pixel size (width & height). Default 24. */
  size?: number;
  /** Stroke width. Default 2. */
  strokeWidth?: number;
  /** Fill with currentColor instead of stroking (use for `star`). Default false. */
  fill?: boolean;
}

/** Inline SVG icon from the curated Baheth (Lucide-derived) set. */
export function Icon(props: IconProps): JSX.Element | null;

/** All available icon names. */
export const ICON_NAMES: IconName[];
