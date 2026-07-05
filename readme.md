# Vanilla Tailwind Design System

A **vanilla, framework-agnostic** rebuild of the [`@szum-tech/design-system`](https://github.com/JanSzewczyk/design-system) — retooled for building **Shopify storefront widgets and theme app extensions**, and for authoring in **Preact** (or plain React) with **no Tailwind build step**.

The upstream library is a React 19 + Tailwind CSS v4 + Radix UI component kit (55+ components) using the OKLCH color space and CVA for variants. This project preserves its **exact tokens and component styling** but expresses everything as **plain CSS driven by `data-*` attributes**, so a component renders identically whether it's mounted by React, Preact, or dropped into a Liquid theme block — without shipping Tailwind's JIT engine to a merchant's storefront.

## Source

- **GitHub:** https://github.com/JanSzewczyk/design-system (`@szum-tech/design-system`, MIT)
- **Storybook:** https://janszewczyk.github.io/design-system
- Tokens lifted verbatim from `src/tailwind/palette.css` (colors), `src/tailwind/typography.css` (type scale) and Tailwind's default spacing scale. Component values (heights, paddings, radii) copied from each component's `*.styles.ts` / `.tsx`.

Explore the upstream repo for the full component catalogue, Radix behaviors and CVA variant definitions when you need to extend this system.

---

## Content fundamentals

The upstream library is developer tooling; its own copy is terse, technical and lowercase-leaning. For **Shopify merchant-facing** surfaces (the intended use here) write like a modern Shopify app:

- **Voice:** direct, friendly, task-oriented. Address the merchant as **you** ("Add a free-shipping bar to your store"). The product refers to itself in the first person sparingly ("We'll never share it").
- **Casing:** **Sentence case** everywhere — buttons, headings, labels, menu items ("New widget", "Show on storefront"), never Title Case. Product/feature names keep their capitalization ("Free Shipping Bar", "Widget Studio").
- **Buttons = verbs:** "Create widget", "Save changes", "Publish", "Manage theme" — not "OK" / "Submit".
- **Brevity:** labels are 1–3 words; helper text is one short sentence and optional. Empty states and descriptions explain the *why* in a single line.
- **Numbers & metrics:** compact (`48.2k`, `$8,240`, `↑ 12.4%`); use `—` for "no data", never "N/A" or "0" when a value is genuinely absent.
- **Emoji:** none. The upstream README uses emoji as section markers in docs only; product UI has none.
- **Tone examples:** "Motivate shoppers to hit the threshold." · "Reconnect your store to continue." · "Free shipping on orders over $75". Warm, concrete, never salesy or exclamatory.

---

## Visual foundations

- **Color:** defined in **OKLCH** for perceptual uniformity. A single **indigo-violet primary** (`oklch(0.488 0.243 264)`) carries brand; everything else is a near-neutral grey ramp. Three semantic families — **success** (green), **warning** (amber), **error** (red) — each with a paired `-foreground`. Opacity tints (Tailwind's `primary/10`) are reproduced with `color-mix(in oklch, … , transparent)`. Full **light + dark** themes: add `.dark` to any ancestor and every token remaps.
- **Type:** **Poppins** for all UI/display (weights 300–800), **JetBrains Mono** for code/keys/metrics. A responsive scale — display (36–72px), headings (h1–h4), body (12–20px) — with the step-up at the 768px breakpoint. Tight letter-spacing on large text (`-0.02em`), relaxed line-height (1.6) on body.
- **Spacing:** Tailwind's **4px base unit**. Controls share a height ladder: 24 / 28 / **32 (default)** / 36px. Cards pad 24px; the app container maxes at 1280px.
- **Radius:** small and consistent — base **`--radius` = 4px**. Controls and cards use 4px; alerts 8px; badges/inputs 4px; status pills, avatars-when-round, and switches use full pill. Nothing is heavily rounded.
- **Backgrounds:** flat. Solid surfaces only — **no gradients, no images, no patterns or textures**. Depth comes from a 1px border + a subtle shadow, not from color washes. Page background is `--muted` (a hair off-white); cards sit on `--card` (pure white in light mode).
- **Borders & elevation:** hairline 1px `--border` everywhere. A restrained shadow scale (`xs → lg`); cards default to `shadow-sm`. Dark mode borders are white at 10–15% alpha rather than a solid grey.
- **Corners / cards:** a card = `--card` fill + 1px border + `radius` (4px) + `shadow-sm`, vertical flex with 24px gaps and 24px inline padding. No colored left-border accents, no tinted card bodies.
- **Motion:** quick and understated. Enter animations are slide+fade over ~400ms on `cubic-bezier(0.16, 1, 0.3, 1)` (`--ease-out-quart`); state changes 150–200ms. The slide-over uses that easing. Buttons **nudge down 1px on press** (`active:translate-y-px`). Spinners spin; skeletons pulse. No bounce, no parallax, no decorative loops.
- **Hover / focus / press:** hover darkens filled buttons (~88%) and lightens ghost/outline to `--muted`; focus shows a **3px ring** at `ring/50` plus a border color shift (never an outline); press nudges down 1px. Disabled = 50% opacity + no pointer events.
- **Transparency & blur:** used sparingly — the slide-over scrim is `oklch(0 0 0 / 0.4)`, semantic tints are 10% alpha fills. No glassmorphism / backdrop-blur.
- **Imagery:** the system ships **no photography or illustration**. Avatars fall back to initials on a `--muted` tile. Iconography does all the visual lifting (see below).

---

## Iconography

- **Library:** [**Lucide**](https://lucide.dev) (`lucide-react` upstream) — 24×24 viewBox, **2px stroke**, round caps & joins, `fill="none"`, `currentColor`. This is the one and only icon system; match its stroke weight and geometry if you add glyphs.
- **In this project:** icons are used as **inline SVG** with Lucide path data (see `ui_kits/widget-studio/icons.jsx`) so nothing depends on a build step. For production React/Preact, import from `lucide-react` / `lucide-preact`, or pull individual SVGs from the Lucide CDN.
- **Brand provider marks:** the upstream repo ships a few flat brand SVGs (Google, X, Auth0) as icon components. The Google mark is copied to `assets/icons/google-logo.svg`; the others live in the source repo under `src/icons/` if you need them.
- **Emoji / unicode:** not used as icons. Keyboard hints use real characters inside `Kbd` (`⌘`, `S`).
- **Logo:** the upstream project has **no standalone logo file** (its README banner is a hosted image, not a repo asset). This system therefore renders the wordmark in **plain Poppins type** with a lettered tile as a placeholder mark (see Widget Studio's sidebar). No logo was invented — supply real brand assets to replace the placeholder.

---

## What's in here (index)

**Foundations**
- `styles.css` — the single entry point consumers link. `@import`s only.
- `tokens/fonts.css` — Poppins + JetBrains Mono (Google Fonts webfonts).
- `tokens/colors.css` — OKLCH palette, light + `.dark`.
- `tokens/typography.css` — families, scale, and `.text-*` type utility classes.
- `tokens/spacing.css` — spacing, radius, control heights, shadows, motion.
- `tokens/base.css` — resets + body defaults.
- `components/components.css` — every component's styling, keyed on `data-slot`.

**Components** (18 families, `window.VanillaTailwindDesignSystem_*`)
- `button/` — **Button** (6 variants, 8 sizes, loading, icons)
- `badge/` — **Badge**, **Status** (+ StatusIndicator, StatusLabel)
- `forms/` — **Input**, **Label**, **Checkbox**, **Switch**, **Select**, **Field** (+ FieldDescription, FieldError)
- `card/` — **Card** (+ Header, Title, Description, Action, Content, Footer)
- `feedback/` — **Alert** (+ Title, Description), **Spinner**, **Progress**, **Skeleton**
- `data-display/` — **Avatar** (+ Image, Fallback), **Separator**, **Kbd**, **Table** (+ Header, Body, Row, Head, Cell, Caption)

**UI kits**
- `ui_kits/widget-studio/` — Shopify widget-app admin dashboard (interactive), composed from the components above.

**Templates**
- `templates/widget-settings/` — a `.dc.html` widget-configuration card (Card + Fields + Switch), for the design-doc/preview pipeline.
- `templates/consuming-project-template/` — a blank starter page + loader script for bootstrapping a brand-new project off this design system. Start here if you're wiring this system into something new.

**Meta**
- `SKILL.md` — Agent-Skills-compatible entry point.
- `assets/icons/` — brand SVGs.

---

## Using it

**In a card / prototype (this environment):** link `styles.css`, load `_ds_bundle.js`, then read components off the namespace:
```html
<link rel="stylesheet" href="styles.css" />
<script src="_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card } = window.VanillaTailwindDesignSystem_1f5ec4;
</script>
```

**In production (Preact / React):** ship `styles.css` and author components that emit the same `data-slot` / `data-variant` / `data-size` attributes — the CSS does the rest, no Tailwind required.

---

## Intentional deviations from source

- **No Tailwind at runtime.** Utility-class styling is pre-compiled into plain CSS keyed on `data-*` attributes. This is deliberate — a merchant's theme app extension shouldn't carry a CSS framework.
- **Native form primitives.** `Checkbox`, `Switch` and `Select` wrap native inputs (styled to match) instead of Radix/`base-ui` primitives, to stay dependency-free and Preact-portable. Visual output matches the source.
- **`Field`** is a lightweight stand-in for the upstream Field family (which has ~9 sub-parts).

## Roadmap — source families not yet ported

The upstream library defines **55+** component families. This project ships a **core 18** most relevant to Shopify widget building. Not yet ported (listed so nothing is silently missing): Accordion, AlertDialog, Breadcrumb, ButtonGroup, Carousel, Collapsible, ColorPicker, ColorSwatch, Combobox, CountingNumber, Dialog, DropdownMenu, Empty, FileUpload, Header, InputGroup, Item, Marquee, Masonry, Pagination, Popover, RadioGroup, ScrollArea, Sheet, Sidebar, Sortable, Stepper, Tabs, Toast (sonner), Tooltip.

> **Missing fonts?** None — Poppins and JetBrains Mono are the source's actual fonts and are served here from Google Fonts, so no substitution was made.

---

## Importing This Design System Into a New Claude Session

When starting a new Claude project and you want to use this design system, copy the prompt below and paste it as your first message. Click the copy button on the code block to grab it.

```text
Import the Vanilla Tailwind Design System from the following GitHub repository into this project as a bound design system. Import it directly — nothing to think about, nothing to parse, nothing to reinterpret. Drop it in and it works.

Repository: <this repo's URL>
Branch: main (or master)

PROJECT NAME: if creating a new design-system project as part of this import, name it "Vanilla Tailwind Design System" — do not leave it at a generic default name.

RULES:
- Import EVERY file exactly as-is. No modifications to any .jsx, .d.ts, .prompt.md, .css, .html, or .js file.
- Preserve the exact folder structure (components/, tokens/, templates/, guidelines/, ui_kits/).
- Do not add, remove, rename, or restructure anything during import.
- Do not "improve" or "optimize" any code during import.
- Do not substitute Tailwind, a component library, or hand-built look-alikes for what's already here.
- This is an EDITABLE system once imported — after import, you may add new components/tokens/templates following CONTRIBUTING.md. The "don't modify" rules above apply only to the import step itself, not to ongoing use.

AFTER IMPORT — VERIFY:
- Run check_design_system (or manually count) and confirm: 18 component families, ~100 tokens, 19+ cards, 2 templates.
- Confirm the project is actually named "Vanilla Tailwind Design System", not a generic default — rename it if it isn't.
- If anything is missing, go back and import the missing files from the repo.

This design system is a vanilla, framework-agnostic rebuild of @szum-tech/design-system for Shopify storefront widgets and Theme App Extensions:
- Runtime: link styles.css, load _ds_bundle.js, then read components off window.VanillaTailwindDesignSystem_1f5ec4 — no Tailwind, no build step, no CDN component library.
- Tokens use --primary, --space-*, --radius-*, --font-size-* naming, defined in OKLCH.
- Fonts are Poppins (UI/display, 300–800) and JetBrains Mono (code/keys/metrics).
- Base rhythm is 4px; default control height is 32px; base radius is 4px.
- Copy is sentence case, merchant-second-person, no emoji in product UI.

Read CLAUDE.md once imported for the full rule set, SKILL.md for the AI entry point, and CONTRIBUTING.md before adding anything new.
```

---

## Additional Documentation

- [`CLAUDE.md`](./CLAUDE.md) — Rules, workflows, and commands for anyone building with this design system
- [`SKILL.md`](./SKILL.md) — Agent-Skills-compatible entry point
- [`CONTRIBUTING.md`](./CONTRIBUTING.md) — How to add components, tokens, or templates
- [`CHANGELOG.md`](./CHANGELOG.md) — Version history
- [`templates/consuming-project-template/README.md`](./templates/consuming-project-template/README.md) — Starter kit for bootstrapping a new project off this system
- [`THEME_APP_EXTENSION.prompt.md`](./THEME_APP_EXTENSION.prompt.md) — Rules for generating actual Shopify Theme App Extension widgets (app blocks / app embeds) from this system — read before writing any Liquid block
