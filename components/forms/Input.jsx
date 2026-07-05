import * as React from "react";

/** Input — single-line text field. Set `invalid` to show the error ring. */
export function Input({ invalid = false, className = "", type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      aria-invalid={props["aria-invalid"] || invalid || undefined}
      className={className}
      {...props}
    />
  );
}
