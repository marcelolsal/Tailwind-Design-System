import * as React from "react";

/** Single-line text field. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Show the invalid/error ring. */
  invalid?: boolean;
}

export function Input(props: InputProps): React.JSX.Element;
