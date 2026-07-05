# Widget Studio — UI kit

A high-fidelity recreation of a **Shopify widget-management app admin**, composed entirely from the Vanilla Tailwind Design System components. It demonstrates how the primitives assemble into a real product surface for building storefront widgets / theme app extensions.

## Files
- `index.html` — entry; layout chrome (sidebar, top bar, slide-over) in CSS, mounts the app.
- `icons.jsx` — small inline Lucide icon set (the icon library this DS documents).
- `app.jsx` — the interactive dashboard: stat cards, widget table, and a slide-over editor.

## Interactions
- **Toggle a widget** with the row `Switch` → its `Status` flips between Live / Draft and the active count updates.
- **Search** filters the table live.
- **New widget** / **Edit** opens the right-hand slide-over (`Field`, `Input`, `Select`, `Switch`, `Checkbox`, `Button`); Save/Cancel closes it.

## Components used
Button · Card (+ parts) · Badge · Status · Table (+ parts) · Input · Select · Switch · Checkbox · Label · Field · Separator · Avatar.

The sidebar, top bar and slide-over shell are plain layout CSS (product chrome), styled with design-system tokens — no Sidebar/Sheet primitive was ported (see the roadmap in the root readme).
