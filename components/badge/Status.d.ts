import * as React from "react";

/** Pill communicating live state, with a leading indicator dot. */
export interface StatusProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "default" */
  variant?: "default" | "primary" | "success" | "warning" | "error";
}

export function Status(props: StatusProps): React.JSX.Element;
export function StatusIndicator(props: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
export function StatusLabel(props: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
