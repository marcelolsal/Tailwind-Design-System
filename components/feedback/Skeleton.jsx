import * as React from "react";

/** Skeleton — pulsing placeholder for loading content. Size it with style/className. */
export function Skeleton({ className = "", style, ...props }) {
  return <div data-slot="skeleton" className={className} style={style} {...props} />;
}
