# Contributing to the Vanilla Tailwind Design System

This is an editable, local design system — not a vendored external one. You (or an AI session working in this repo) can add and change components, tokens, and templates directly. This guide just keeps additions consistent with what's already here.

## Adding a Component

- **File structure:** `ComponentName.d.ts` + `ComponentName.jsx` + `ComponentName.prompt.md`, grouped by family folder under `components/`
- **Naming:** PascalCase component names, `data-slot` / `data-variant` / `data-size` attributes in kebab-case
- **Styling:** plain CSS in `components/components.css`, keyed on the component's `data-slot` — no Tailwind classes, no CSS-in-JS
- **No new dependencies:** components must render with only React/Preact + this system's own CSS and tokens
- **Register it:** add the component to `_ds_manifest.json`'s `components` list and rebuild `_ds_bundle.js` (or hand-edit both consistently) so it's reachable via `window.SzumTechDesignSystem_1f5ec4`
- **Add a preview card:** every new component family needs a `@dsCard`-tagged HTML file (see any existing `*.card.html` for the pattern) so it shows up in the Design System pane

## Adding or Changing a Token

- **Color:** `tokens/colors.css`, OKLCH format, light value on `:root` + dark value on `.dark`
- **Typography:** `tokens/typography.css`
- **Spacing / radius / shadow / motion:** `tokens/spacing.css`
- Update `_ds_manifest.json`'s `tokens` array so tools that read it stay in sync

## Documentation

- Update `readme.md` when you add a component family, token category, or template
- Every `.prompt.md` next to a component should stay short: what it's for, one code example, the variant/prop list

## Before Committing

1. The bundle actually mounts: open one of the `*.card.html` preview files in a browser and confirm it renders
2. `_ds_manifest.json` and `_ds_bundle.js` agree on the component list
3. `readme.md`'s "What's in here" index still matches the folders on disk
