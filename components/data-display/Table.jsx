import * as React from "react";

/** Table — data table. Wraps in a horizontally-scrollable container. */
export function Table({ className = "", children, ...props }) {
  return (
    <div data-slot="table-container">
      <table data-slot="table" className={className} {...props}>
        {children}
      </table>
    </div>
  );
}

/** TableHeader — <thead> wrapper. */
export function TableHeader({ className = "", children, ...props }) {
  return (
    <thead data-slot="table-header" className={className} {...props}>
      {children}
    </thead>
  );
}

/** TableBody — <tbody> wrapper. */
export function TableBody({ className = "", children, ...props }) {
  return (
    <tbody data-slot="table-body" className={className} {...props}>
      {children}
    </tbody>
  );
}

/** TableRow — <tr>; hover + selected states via data-state="selected". */
export function TableRow({ className = "", children, ...props }) {
  return (
    <tr data-slot="table-row" className={className} {...props}>
      {children}
    </tr>
  );
}

/** TableHead — header cell <th>. */
export function TableHead({ className = "", children, ...props }) {
  return (
    <th data-slot="table-head" className={className} {...props}>
      {children}
    </th>
  );
}

/** TableCell — body cell <td>. */
export function TableCell({ className = "", children, ...props }) {
  return (
    <td data-slot="table-cell" className={className} {...props}>
      {children}
    </td>
  );
}

/** TableCaption — caption rendered below the table. */
export function TableCaption({ className = "", children, ...props }) {
  return (
    <caption data-slot="table-caption" className={className} {...props}>
      {children}
    </caption>
  );
}
