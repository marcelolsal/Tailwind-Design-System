import * as React from "react";

/** Native checkbox styled to the system. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Checkbox(props: CheckboxProps): React.JSX.Element;
