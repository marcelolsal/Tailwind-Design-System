import * as React from "react";

/**
 * The primary interactive control. Use for actions: submit, save, add to cart.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "default" */
  variant?: "default" | "outline" | "secondary" | "ghost" | "error" | "link";
  /** Control size. @default "default" */
  size?: "xs" | "sm" | "default" | "lg" | "icon-xs" | "icon-sm" | "icon" | "icon-lg";
  /** Stretch to fill the container width. */
  fullWidth?: boolean;
  /** Show a spinner and disable interaction. */
  loading?: boolean;
  /** Where the spinner appears while loading. @default "start" */
  loadingPosition?: "start" | "end" | "center";
  /** Icon rendered before the label. */
  startIcon?: React.ReactNode;
  /** Icon rendered after the label. */
  endIcon?: React.ReactNode;
}

export function Button(props: ButtonProps): React.JSX.Element;
