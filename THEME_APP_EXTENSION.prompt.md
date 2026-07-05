---
name: theme-app-extension
description: >
  Use this skill when generating Shopify Theme App Extension widgets (app blocks or app embed blocks) built from the Vanilla Tailwind Design System. Covers the extension's required file structure, the hard platform limits that shape what you can ship, and — critically — why the React/Babel runtime used elsewhere in this repo for prototyping must NOT be shipped in a real extension asset.
user-invocable: true
auto-trigger: >
  Fire when the user asks to build a Theme App Extension, a storefront widget, an app block, an app embed, or mentions "TAE", "theme extension", or "Shopify widget" in the context of this design system.
---

## What a Theme App Extension Is

A Theme App Extension (TAE) is how a Shopify app adds merchant-installable UI into a storefront theme, without editing theme code directly. It ships as its own directory inside a Shopify app:

```
extensions/<extension-name>/
├── assets/          # CSS, JS, images — served from Shopify's CDN
├── blocks/          # .liquid files — both app blocks and app embed blocks live here
├── snippets/        # reusable Liquid partials, {% render %}'d from blocks
├── locales/         # JSON — schema locale (merchant-facing) + storefront locale (customer-facing)
├── shopify.extension.toml
└── package.json
```

This design system is the **source of design truth** (tokens, component CSS, markup shape) that a generated Liquid block should match — not something imported wholesale into the extension. See "How This Design System Maps Onto a TAE" below.

## Two Kinds of Widget

| | App block | App embed block |
|---|---|---|
| **`target`** in schema | `section` | `head`, `body`, or `compliance_head` |
| **Placed by merchant** | Dragged into a section from the theme editor, or dropped as a full-width element (Shopify auto-wraps it in an `apps.liquid` section) | Toggled on/off in **Theme Settings → App embeds** — off by default after install |
| **Use for** | Widgets that live in a specific spot on a specific page — a product-page upsell card, a cart-drawer banner | Site-wide or floating things not tied to one section — an announcement bar, a free-shipping progress bar, a chat bubble |
| **Precondition** | The section must opt in with `"blocks": [{ "type": "@app" }]` in its own schema (no `limit` allowed on that entry) — if the merchant's section doesn't declare this, your app block can't be dropped into it | None — always available once the merchant enables it |

Ask the user which kind fits before generating: "Is this pinned to one spot on the page (app block), or a site-wide toggle like a bar/popup (app embed block)?" if it's not obvious from the request.

## Hard Limits — Design Around These, Don't Discover Them Later

| Limit | Value |
|---|---|
| Total extension size | 10 MB |
| Blocks per extension | 30 |
| Liquid size, all files combined | 100 KB |
| CSS per asset (compressed), suggested | 100 KB |
| JavaScript per asset (compressed), suggested | 10 KB |
| Locale files | 100 max, 15 KB each |
| Block name in theme editor | keep under 25 characters |

The **10 KB JS budget is the one that changes how you build.** It rules out shipping a React runtime.

## How This Design System Maps Onto a TAE

**The component `.jsx` files, `_ds_bundle.js`, and the React+Babel-standalone pattern used in `*.card.html` and `ui_kits/` are for prototyping and internal admin dashboards — never for the storefront-facing widget itself.** React UMD + ReactDOM + Babel standalone alone is several hundred KB; the entire JS budget for a real block is 10 KB. Shipping the prototyping runtime into `assets/` will blow every size limit and is the single most common mistake to avoid here.

What *does* transfer directly, because the system was built vanilla on purpose:

1. **The CSS is already framework-free.** `components/components.css` + the relevant `tokens/*.css` files are plain CSS keyed on `data-slot` / `data-variant` / `data-size` — exactly what a Liquid-rendered `<div data-slot="card">` needs, no JS required to look right.
2. **The markup shape is already known.** Read the component's `.jsx` file for the DOM shape (which element, which `data-slot`/`data-variant`/`data-size` attributes) and hand-write the equivalent as plain Liquid/HTML — don't try to run the `.jsx` file itself.
3. **Interactivity, if any, is native HTML + a few lines of vanilla JS** (e.g. a `Switch` is just a styled native checkbox — no JS needed for the visual; a click handler to persist state, if required, is a handful of lines, not a component runtime).

### Recipe: Building One Block

1. **Pick target.** `section` for an app block, `head`/`body` for an app embed.
2. **Write the CSS asset.** Create one `assets/<extension>.css` containing only the token values and component rules this block actually uses — copy the relevant `:root` custom properties from `tokens/colors.css` / `tokens/typography.css` / `tokens/spacing.css` and the specific `[data-slot="…"]` rules from `components/components.css`. Don't ship the whole design system's CSS if the block only uses Button and Card — stay inside the 100 KB compressed budget, and it'll be a fraction of that in practice.
3. **Write the block's `{% schema %}`:**
   ```json
   {% schema %}
   {
     "name": "Free shipping bar",
     "target": "section",
     "stylesheet": "widget-name.css",
     "settings": [
       { "type": "text", "id": "message", "label": "Message", "default": "Free shipping on orders over $75" },
       { "type": "range", "id": "threshold", "label": "Threshold", "min": 0, "max": 500, "step": 5, "default": 75 }
     ]
   }
   {% endschema %}
   ```
   Referencing the CSS via the schema's `stylesheet` field (not a manual `<link>`) gets automatic injection and de-duplication if the merchant adds the block more than once.
4. **Write the Liquid + markup**, using this design system's `data-slot`/`data-variant`/`data-size` attributes exactly as the `.jsx` source defines them, with merchant-configurable values pulled from `block.settings.*`:
   ```liquid
   <div data-slot="alert" data-variant="default" class="shopify-block">
     <div data-slot="alert-title">{{ block.settings.message }}</div>
   </div>
   ```
5. **Only add a JS asset if the widget needs real interactivity** (persisting a dismiss, live-updating a counter). Hand-write it vanilla, keep it under the 10 KB suggested budget, and reference it via the schema's `javascript` field the same way as `stylesheet`.
6. **Map every merchant-facing string through `block.settings` or a schema locale file** — never hardcode copy a merchant might want to change, and follow this repo's content fundamentals (sentence case, merchant-second-person, no emoji) from `readme.md`.

### What NOT to Do

- Don't include `_ds_bundle.js`, React, ReactDOM, or Babel standalone in `assets/`.
- Don't `{% render %}` a `.jsx` file — Liquid can't execute it; translate the markup shape by hand instead.
- Don't ship the entire `components.css` / all of `tokens/*.css` unmodified if the block only needs a fraction of it — trim to what's used.
- Don't invent new visual treatment outside the token system just because Liquid makes `var(--token)` slightly more awkward to reach — copy the actual token values into the trimmed CSS asset instead of approximating them.
- Don't add a `"blocks": [{ "type": "@app", "limit": 1 }]` entry when opting a section into app blocks — `@app` block entries don't accept `limit`, it's a validation error.

## Reference

- [Configure theme app extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions/configuration) — file structure, schema fields, limits
- [App blocks for themes](https://shopify.dev/docs/storefronts/themes/architecture/blocks/app-blocks) — the `@app` opt-in, rendering blocks in a section
- [About theme app extensions](https://shopify.dev/docs/apps/build/online-store/theme-app-extensions) — app blocks vs app embeds, theme editor UX
