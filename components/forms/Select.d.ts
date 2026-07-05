import * as React from "react";

/** Native select styled to match Input. Pass <option> children. */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export function Select(props: SelectProps): React.JSX.Element;
