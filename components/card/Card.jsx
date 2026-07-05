import * as React from "react";

/** Card — surface container. Compose with the sub-parts below. */
export function Card({ className = "", children, ...props }) {
  return (
    <div data-slot="card" className={className} {...props}>
      {children}
    </div>
  );
}

/** CardHeader — top region; switches to a two-column grid when a CardAction is present. */
export function CardHeader({ className = "", children, ...props }) {
  return (
    <div data-slot="card-header" className={className} {...props}>
      {children}
    </div>
  );
}

/** CardTitle — bold heading line. */
export function CardTitle({ className = "", children, ...props }) {
  return (
    <div data-slot="card-title" className={className} {...props}>
      {children}
    </div>
  );
}

/** CardDescription — muted supporting copy under the title. */
export function CardDescription({ className = "", children, ...props }) {
  return (
    <div data-slot="card-description" className={className} {...props}>
      {children}
    </div>
  );
}

/** CardAction — top-right slot (e.g. a menu button); place inside CardHeader. */
export function CardAction({ className = "", children, ...props }) {
  return (
    <div data-slot="card-action" className={className} {...props}>
      {children}
    </div>
  );
}

/** CardContent — main body region. */
export function CardContent({ className = "", children, ...props }) {
  return (
    <div data-slot="card-content" className={className} {...props}>
      {children}
    </div>
  );
}

/** CardFooter — bottom region, typically actions. */
export function CardFooter({ className = "", children, ...props }) {
  return (
    <div data-slot="card-footer" className={className} {...props}>
      {children}
    </div>
  );
}
