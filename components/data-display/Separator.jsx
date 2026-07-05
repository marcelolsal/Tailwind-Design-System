import * as React from "react";

/** Separator — a thin divider line. Orientation: horizontal | vertical. */
export function Separator({ orientation = "horizontal", className = "", ...props }) {
  return (
    <div
      data-slot="separator"
      role="separator"
      aria-orientation={orientation}
      data-orientation={orientation}
      className={className}
      {...props}
    />
  );
}
