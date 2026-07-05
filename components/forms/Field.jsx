import * as React from "react";

/**
 * Field — vertical stack wrapping a Label, control and optional description /
 * error. A lightweight take on the source's Field family for form layout.
 */
export function Field({ className = "", children, ...props }) {
  return (
    <div data-slot="field" className={className} style={{ display: "grid", gap: "0.375rem" }} {...props}>
      {children}
    </div>
  );
}

/** FieldDescription — muted helper text below a control. */
export function FieldDescription({ className = "", children, ...props }) {
  return (
    <p
      data-slot="field-description"
      className={className}
      style={{ margin: 0, fontSize: "var(--font-size-body-sm)", color: "var(--muted-foreground)" }}
      {...props}
    >
      {children}
    </p>
  );
}

/** FieldError — error message; rendered in the error color. */
export function FieldError({ className = "", children, ...props }) {
  return (
    <p
      data-slot="field-error"
      className={className}
      style={{ margin: 0, fontSize: "var(--font-size-body-sm)", color: "var(--error)" }}
      {...props}
    >
      {children}
    </p>
  );
}
