import * as React from "react";

/** Progress — determinate progress bar. `value` is 0–100. */
export function Progress({ value = 0, className = "", ...props }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div data-slot="progress" role="progressbar" aria-valuenow={v} aria-valuemin={0} aria-valuemax={100} className={className} {...props}>
      <div data-slot="progress-indicator" style={{ transform: `translateX(-${100 - v}%)` }} />
    </div>
  );
}
