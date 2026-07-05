import * as React from "react";

/** Kbd — keyboard key hint, in the mono type family. */
export function Kbd({ className = "", children, ...props }) {
  return (
    <kbd data-slot="kbd" className={className} {...props}>
      {children}
    </kbd>
  );
}
