import * as React from "react";

/** Checkbox — native checkbox styled to the system. Controlled or uncontrolled. */
export function Checkbox({ invalid = false, className = "", ...props }) {
  return (
    <input
      type="checkbox"
      data-slot="checkbox"
      aria-invalid={invalid || undefined}
      className={className}
      {...props}
    />
  );
}
