import * as React from "react";

/** Avatar — rounded user image container. Compose with AvatarImage + AvatarFallback. */
export function Avatar({ className = "", children, ...props }) {
  return (
    <span data-slot="avatar" className={className} {...props}>
      {children}
    </span>
  );
}

/** AvatarImage — the photo. */
export function AvatarImage({ className = "", alt = "", ...props }) {
  return <img data-slot="avatar-image" alt={alt} className={className} {...props} />;
}

/** AvatarFallback — shown when no image; typically initials. */
export function AvatarFallback({ className = "", children, ...props }) {
  return (
    <span data-slot="avatar-fallback" className={className} {...props}>
      {children}
    </span>
  );
}
