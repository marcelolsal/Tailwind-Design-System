import * as React from "react";

/** Inline message banner. Pass an icon as the first child for the icon layout. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "default" */
  variant?: "default" | "destructive";
}

export function Alert(props: AlertProps): React.JSX.Element;
export function AlertTitle(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function AlertDescription(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
