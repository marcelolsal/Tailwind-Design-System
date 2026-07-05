import * as React from "react";

/** Select — native select styled to match Input. Pass <option> children. */
export function Select({ className = "", children, ...props }) {
  return (
    <select data-slot="select" className={className} {...props}>
      {children}
    </select>
  );
}
