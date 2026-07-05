import * as React from "react";

/**
 * Status — pill communicating live state, with a leading indicator dot.
 * Variants: default | primary | success | warning | error.
 */
export function Status({ variant = "default", className = "", children, ...props }) {
  return (
    <div data-slot="status" data-variant={variant} className={className} {...props}>
      <StatusIndicator />
      {children}
    </div>
  );
}

/** StatusIndicator — the colored dot; rendered automatically inside Status. */
export function StatusIndicator({ className = "", ...props }) {
  return <span data-slot="status-indicator" className={className} {...props} />;
}

/** StatusLabel — optional text wrapper for a Status. */
export function StatusLabel({ className = "", children, ...props }) {
  return (
    <span data-slot="status-label" className={className} {...props}>
      {children}
    </span>
  );
}
