import * as React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** "default" outlined, "solid" green, "soft" tinted. Default "default". */
  variant?: "default" | "solid" | "soft";
  /** Square the corners (6px) for filter chips. Default false. */
  tag?: boolean;
}
/** Status / category label. */
export function Badge(props: BadgeProps): JSX.Element;

/** Outlined container surface. */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** "default" outlined, "transparent" (dark schemes), "elevated" (shadow). Default "default". */
  variant?: "default" | "transparent" | "elevated";
}
/** Outlined container surface. */
export function Card(props: CardProps): JSX.Element;

export interface CardMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Image source; fills the media box (object-fit: cover). */
  src?: string;
  alt?: string;
}
/** Full-bleed media region for a Card. */
export function CardMedia(props: CardMediaProps): JSX.Element;

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Padding size. Default "md" (24px); "lg" = 32px. */
  size?: "md" | "lg";
}
/** Padded content region for a Card. */
export function CardBody(props: CardBodyProps): JSX.Element;

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Photo source. */
  src?: string;
  alt?: string;
  /** Fallback initials when no src. */
  initials?: string;
  size?: "sm" | "md" | "lg";
}
/** Round avatar with photo or initials. */
export function Avatar(props: AvatarProps): JSX.Element;
