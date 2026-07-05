import * as React from "react";

/** On/off toggle. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** @default "default" */
  size?: "default" | "sm";
}

export function Switch(props: SwitchProps): React.JSX.Element;
