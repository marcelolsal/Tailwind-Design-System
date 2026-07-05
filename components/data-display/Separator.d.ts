import * as React from "react";

/** Thin divider line. */
export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "horizontal" */
  orientation?: "horizontal" | "vertical";
}

export function Separator(props: SeparatorProps): React.JSX.Element;
