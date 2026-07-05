import * as React from "react";

/**
 * Surface container. Compose with the sub-parts.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card(props: CardProps): React.JSX.Element;
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function CardTitle(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function CardDescription(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function CardAction(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
export function CardFooter(props: React.HTMLAttributes<HTMLDivElement>): React.JSX.Element;
