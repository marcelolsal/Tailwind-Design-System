import * as React from "react";

/** Label — accessible form label. Pair via `htmlFor`. */
export function Label({ className = "", children, ...props }) {
  return (
    <label data-slot="label" className={className} {...props}>
      {children}
    </label>
  );
}
