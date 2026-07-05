import * as React from "react";

/** Determinate progress bar. */
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Progress 0–100. */
  value?: number;
}

export function Progress(props: ProgressProps): React.JSX.Element;
