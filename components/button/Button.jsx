import * as React from "react";

import { Spinner } from "../feedback/Spinner.jsx";

/**
 * Button — the primary interactive control.
 *
 * Vanilla recreation of @szum-tech/design-system Button. Styling is driven by
 * the `data-slot="button"` + `data-variant` + `data-size` attributes (see
 * components/components.css), so it renders identically under React or Preact
 * with no Tailwind build step.
 */
export function Button({
  variant = "default",
  size = "default",
  fullWidth = false,
  loading = false,
  loadingPosition = "start",
  startIcon = null,
  endIcon = null,
  disabled = false,
  type = "button",
  className = "",
  children,
  ...props
}) {
  const isDisabled = disabled || loading;
  const isIcon = typeof size === "string" && size.startsWith("icon");
  const pos = isIcon ? "center" : loadingPosition;

  const start = loading && pos === "start" ? <Spinner /> : startIcon;
  const end = loading && pos === "end" ? <Spinner /> : endIcon;
  const center = loading && pos === "center";

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-full-width={fullWidth ? "true" : undefined}
      data-state={loading ? "loading" : undefined}
      type={type}
      disabled={isDisabled}
      aria-disabled={isDisabled || undefined}
      className={className}
      {...props}
    >
      {start}
      {center ? <Spinner /> : children}
      {end}
    </button>
  );
}
