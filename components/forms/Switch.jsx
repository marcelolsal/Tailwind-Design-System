import * as React from "react";

/** Switch — on/off toggle. Sizes: default | sm. Renders a native checkbox. */
export function Switch({ size = "default", className = "", ...props }) {
  return (
    <input
      type="checkbox"
      role="switch"
      data-slot="switch"
      data-size={size}
      className={className}
      {...props}
    />
  );
}
