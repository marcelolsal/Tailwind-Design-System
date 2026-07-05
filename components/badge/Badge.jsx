import * as React from "react";

/**
 * Badge — compact label for counts, categories and metadata.
 * Variants: primary | secondary | outline | success | warning | error.
 */
export function Badge({ variant = "primary", className = "", children, ...props }) {
  return (
    <span data-slot="badge" data-variant={variant} className={className} {...props}>
      {children}
    </span>
  );
}
