import * as React from "react";

/** Data table with a horizontally-scrollable container. Compose with the sub-parts. */
export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {}

export function Table(props: TableProps): React.JSX.Element;
export function TableHeader(props: React.HTMLAttributes<HTMLTableSectionElement>): React.JSX.Element;
export function TableBody(props: React.HTMLAttributes<HTMLTableSectionElement>): React.JSX.Element;
export function TableRow(props: React.HTMLAttributes<HTMLTableRowElement>): React.JSX.Element;
export function TableHead(props: React.ThHTMLAttributes<HTMLTableCellElement>): React.JSX.Element;
export function TableCell(props: React.TdHTMLAttributes<HTMLTableCellElement>): React.JSX.Element;
export function TableCaption(props: React.HTMLAttributes<HTMLTableCaptionElement>): React.JSX.Element;
