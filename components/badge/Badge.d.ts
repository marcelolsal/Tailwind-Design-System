import * as React from "react";

/** Compact label for counts, categories and metadata. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "success" | "warning" | "error";
}

export function Badge(props: BadgeProps): React.JSX.Element;
