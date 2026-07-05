import * as React from "react";

/** Vertical stack wrapping a Label, control and optional description / error. */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Field(props: FieldProps): React.JSX.Element;
export function FieldDescription(props: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element;
export function FieldError(props: React.HTMLAttributes<HTMLParagraphElement>): React.JSX.Element;
