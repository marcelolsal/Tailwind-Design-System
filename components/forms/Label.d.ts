import * as React from "react";

/** Accessible form label. Pair with a control via `htmlFor`. */
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export function Label(props: LabelProps): React.JSX.Element;
