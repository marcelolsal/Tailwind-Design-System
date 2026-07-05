import * as React from "react";

/**
 * Spinner — indeterminate loading indicator.
 * Mirrors the source's LoaderCircle (lucide) spinner: size-4, animate-spin.
 */
export function Spinner({ className = "", style, ...props }) {
  return (
    <svg
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
