import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Leading icon node. */
  icon?: React.ReactNode;
  /** Use the boxed (outlined, 12px) style instead of the underline default. */
  boxed?: boolean;
  /** Class applied to the wrapping field div. */
  wrapperClassName?: string;
}
/** Text input — underline by default, optional boxed + icon. */
export function Input(props: InputProps): JSX.Element;

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Inline label text. */
  label?: React.ReactNode;
}
/** Checkbox with Salem-green checked state. */
export function Checkbox(props: CheckboxProps): JSX.Element;

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Inline label text. */
  label?: React.ReactNode;
}
/** Toggle switch. */
export function Switch(props: SwitchProps): JSX.Element;
