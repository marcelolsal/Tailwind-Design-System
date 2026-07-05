import * as React from "react";

/** Rounded user image container. Compose with AvatarImage + AvatarFallback. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Avatar(props: AvatarProps): React.JSX.Element;
export function AvatarImage(props: React.ImgHTMLAttributes<HTMLImageElement>): React.JSX.Element;
export function AvatarFallback(props: React.HTMLAttributes<HTMLSpanElement>): React.JSX.Element;
