import * as React from "react";

/**
 * Alert — inline message banner. Variant `default` or `destructive`.
 * Pass an SVG/icon as the first child to get the icon layout.
 */
export function Alert({ variant = "default", className = "", children, ...props }) {
  return (
    <div data-slot="alert" role="alert" data-variant={variant} className={className} {...props}>
      {children}
    </div>
  );
}

/** AlertTitle — the bold headline line of an Alert. */
export function AlertTitle({ className = "", children, ...props }) {
  return (
    <div data-slot="alert-title" className={className} {...props}>
      {children}
    </div>
  );
}

/** AlertDescription — supporting body copy of an Alert. */
export function AlertDescription({ className = "", children, ...props }) {
  return (
    <div data-slot="alert-description" className={className} {...props}>
      {children}
    </div>
  );
}
