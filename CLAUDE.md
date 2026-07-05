# CLAUDE.md — Persistent Instructions for This Project

## This is the Vanilla Tailwind Design System

This project is the **Vanilla Tailwind Design System** — a vanilla, framework-agnostic rebuild of `@szum-tech/design-system`, retooled for building Shopify storefront widgets and theme app extensions, and for authoring in Preact (or plain React) with **no Tailwind build step**. Everything here is real, working design-system code: plain CSS driven by `data-slot` / `data-variant` / `data-size` attributes, so a component renders identically under React, Preact, or a Liquid theme block.

Unlike a vendored third-party design system, **this one is editable.** It's your own system — add components, tokens, or templates directly, following the conventions in `CONTRIBUTING.md`.

## What This Project Contains

- **18 component families** in `components/` — Button, Badge, Status, Card (+ Header/Title/Description/Action/Content/Footer), Avatar (+ Image/Fallback), Kbd, Separator, Table (+ Header/Body/Row/Head/Cell/Caption), Alert (+ Title/Description), Progress, Skeleton, Spinner, Checkbox, Field (+ Description/Error), Input, Label, Select, Switch
- **~100 design tokens** in `tokens/` — OKLCH colors (light + `.dark`), Poppins/JetBrains Mono typography, Tailwind's 4px spacing scale, radius ladder, shadows, motion
- **19 preview cards** — `@dsCard`-tagged HTML files (`guidelines/*.card.html`, `components/*/*.card.html`) for the Design System pane
- **1 UI kit** — `ui_kits/widget-studio/` — a full interactive Shopify widget-admin dashboard built from these components
- **1 template** — `templates/widget-settings/` — a `.dc.html` widget-settings card for the design-doc/preview pipeline
- **Runtime:** link `styles.css`, load `_ds_bundle.js`, then read components off `window.SzumTechDesignSystem_1f5ec4`
- **Fonts:** Poppins (300–800, UI/display), JetBrains Mono (code/keys/metrics)
- **Foundations:** 16px body, 4px radius base, 32px default control height, indigo-violet primary (`oklch(0.488 0.243 264)`)
- **`IMPLEMENT_PRD.prompt.md`** — AI skill: parses a pasted Design-PRD (Screen Inventory + Per-Screen Specs) and generates/updates the mockups it specifies, idempotent by screen name
- **`MOUNT_MOCKUPS.prompt.md`** — AI skill: auto-triggered when designer mockups (HTML or ZIP) are attached; validates, organises into `mockups/<feature-slug>/`, and creates a sidebar viewer + master index
- **`EXPORT_MOCKUPS.prompt.md`** — AI skill: packages standalone HTML mockups into a named ZIP for designer-to-developer handoff
- **`THEME_APP_EXTENSION.prompt.md`** — AI skill: rules for generating actual Shopify Theme App Extension widgets (app blocks / app embeds) from this system's tokens and markup shape — read this before writing any Liquid block, since the React/Babel prototyping runtime used elsewhere in this repo must never ship inside a real extension asset

## Rules

### Keep in mind
- Use only the components and tokens already in this system, or add new ones following `CONTRIBUTING.md` — don't invent one-off custom components that duplicate what's already here
- Reference the exact token names (`--primary`, `--space-*`, `--radius-*`, `--font-size-*`) rather than hardcoded hex/px values
- Load `styles.css` + `_ds_bundle.js` and read components off `window.SzumTechDesignSystem_1f5ec4` — don't reintroduce a Tailwind build step
- Follow each component's `.prompt.md` for usage guidance, and `SKILL.md` for overall design-system behavior
- Sentence case, merchant-second-person copy (see readme.md's "Content fundamentals"), no emoji in product UI
- Fold every generated mockup into `mockups/<feature-slug>/` and update the index — never leave one as a loose file outside that structure (see "No Orphan Mockups" below)

### Safe to change (this is an editable system)
- Add new components, tokens, or templates — update `_ds_manifest.json` and `_ds_bundle.js` to match
- Fix or extend existing components — just keep `.d.ts`, `.jsx`, and `.prompt.md` in sync, and re-check the `*.card.html` preview still renders
- Restructure `mockups/` freely; that folder isn't part of the versioned design-system surface

## No Orphan Mockups

**Every mockup, however it gets created, ends up indexed the same way.** It doesn't matter whether it came from a direct "mock this up for me" request, `implement-prd`, or a mounted designer export — a mockup that isn't in `mockups/<feature-slug>/` and reflected in the index is a mockup nobody can find later. There is exactly one indexing mechanism in this project; every creation path uses it instead of inventing its own:

1. **Determine a feature slug** the same way `MOUNT_MOCKUPS.prompt.md` Step 1A/1B does — derive it from what the user is naming or describing, or ask the one clarifying question from Step 1B if it's unclear. Never guess silently and never skip this because "it's just a quick mock."
2. **Save the file** into `mockups/<feature-slug>/` using the same `Mockup NN - Description.html` naming convention used everywhere else in this project (see `EXPORT_MOCKUPS.prompt.md`'s Naming Conventions).
3. **Build or update the viewer index** exactly as `MOUNT_MOCKUPS.prompt.md` Steps 5–6 describe: create or refresh `mockups/<feature-slug>/index.html` (the sidebar viewer) and update the `groups-data` entry in the master `mockups/index.html` registry. Don't rewrite this logic ad hoc — reuse the same procedure so every group's index behaves identically regardless of how it was populated.
4. **Report** the mockup's location the same way `MOUNT_MOCKUPS.prompt.md` Step 7 does. The user should always be able to find any mockup by opening `mockups/index.html` — that's the whole point of having one master viewer instead of scattered files.

This applies retroactively too: if you notice a mockup file sitting outside `mockups/<feature-slug>/` from before this rule existed, fold it in and update the index rather than leaving it stranded.

## When Users Ask You To Build Something

When a user asks you to create a mock, prototype, or design:

1. **Load `styles.css` and `_ds_bundle.js`** in the HTML file
2. **Use only components from `window.SzumTechDesignSystem_1f5ec4`** — or add a new one first if it genuinely doesn't exist yet
3. **Use only design tokens** from `tokens/` for any host/chrome styling
4. **Read the relevant `.prompt.md`** files for component usage
5. **Determine a feature slug** for this mock (ask one question if unclear) — see "No Orphan Mockups" above
6. **Save it into `mockups/<feature-slug>/`** using the standard `Mockup NN - Description.html` naming
7. **Build or update the viewer index** per "No Orphan Mockups" above — `mockups/<feature-slug>/index.html` and the master `mockups/index.html`
8. **Report** the mockup's location in the index, not just that it was created

## When Users Ask You To Import This Design System

If someone points at this repo and asks to import it into a new project:

1. Import every file as-is unless they specifically want to fork/extend it
2. Preserve the folder structure
3. Confirm the counts: 18 component families, ~100 tokens, 19 cards, 1 template, 1 UI kit
4. Since this is an editable system (not a vendored one), feel free to prune components the target project won't use, or extend it with new ones

## Component Namespace

Components are accessed via:
```
window.SzumTechDesignSystem_1f5ec4.ComponentName
```

In `@dsCard` HTML or consuming projects:
```html
<link rel="stylesheet" href="path/to/styles.css" />
<script src="path/to/_ds_bundle.js"></script>
<script>
  const { Button, Card, Badge, Status } = window.SzumTechDesignSystem_1f5ec4;
</script>
```
