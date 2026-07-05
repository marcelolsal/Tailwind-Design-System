# Consuming Project Template

This folder is a **starter template** for projects that want to use the Vanilla Tailwind Design System. Drop it in and it works — nothing to parse, nothing to reinterpret, no config to write first.

## How to Use This Template

### Option 1: Copy Into Your Project
1. Download this folder
2. Place it in your project root or a `templates/` subdirectory
3. Update `ds-base.js` to point to your design system location (adjust `base = '../..'` as needed)
4. Open `consuming-project-template.html` in your browser
5. Start building your mock using the components already wired up

### Option 2: Fork the Template
1. Save this folder as a new project
2. Update the `base` path in `ds-base.js` to point to your copy of this design system
3. Replace the example content with your design

## File Structure

```
consuming-project-template/
├── consuming-project-template.html    # The page (edit this)
└── ds-base.js                          # Loads the design system bundle + styles
```

## Do / Don't

✅ **Do:**
- Use components from `window.SzumTechDesignSystem_1f5ec4`
- Use design tokens (`var(--primary)`, `var(--space-4)`, `var(--radius-md)`, …) for colors, spacing, typography
- Export and share your mock — it will render identically wherever it's opened

❌ **Don't:**
- Invent custom colors, spacing, or typography outside the token system
- Reintroduce Tailwind or a CSS-in-JS build step — this system is deliberately build-step-free
- Hand-build a look-alike component that already exists here — extend `components/` instead (see `CONTRIBUTING.md`)

## Finding Components

All components live in the design system's `components/` folder, organized by family:
- **button/** — Button
- **badge/** — Badge, Status (+ StatusIndicator, StatusLabel)
- **card/** — Card (+ Header, Title, Description, Action, Content, Footer)
- **data-display/** — Avatar (+ Image, Fallback), Kbd, Separator, Table (+ Header, Body, Row, Head, Cell, Caption)
- **feedback/** — Alert (+ Title, Description), Progress, Skeleton, Spinner
- **forms/** — Input, Label, Checkbox, Switch, Select, Field (+ Description, Error)

Each component has a `.d.ts` file showing available props and a `.prompt.md` with a usage example.

## Component Namespace

The design system's namespace is `window.SzumTechDesignSystem_1f5ec4`. Load it via the bundle:

```html
<link rel="stylesheet" href="../../styles.css" />
<script src="../../_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card } = window.SzumTechDesignSystem_1f5ec4;
</script>
```

See `consuming-project-template.html` for a full working example (React UMD + Babel standalone, no build step).

## Exporting Your Mock

When you finish:
1. Save your HTML file
2. It already includes the bundle reference — no extra packaging needed to preview it
3. Share with your team, or run it through `EXPORT_MOCKUPS.prompt.md` if it's part of a feature set headed to a developer

## Questions?

- **Component props:** see the `.d.ts` file for that component
- **Design guidelines & foundations:** `readme.md` at the design system root
- **Full rule set:** `CLAUDE.md` at the design system root
- **Adding something new:** `CONTRIBUTING.md` at the design system root

---

**For the design system team:** update this template when the system changes significantly (new component family, major token restructure).
