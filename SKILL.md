---
name: vanilla-tailwind-design
description: Use this skill to generate well-branded interfaces and assets for the Vanilla Tailwind Design System (a vanilla, Preact-friendly rebuild of @szum-tech/design-system, tuned for Shopify storefront widgets and theme app extensions), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css` and mount components via `_ds_bundle.js` (`window.VanillaTailwindDesignSystem_*`). If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand; components are plain-CSS driven by `data-slot` / `data-variant` / `data-size` attributes, so they port to Preact/React/Liquid with no Tailwind build step.

Key files: `readme.md` (full design guide + content/visual/iconography rules), `styles.css` (token + component CSS entry), `tokens/` (colors, type, spacing), `components/` (18 component families with `.jsx` + `.d.ts` + `.prompt.md`), `ui_kits/widget-studio/` (a Shopify widget-app admin recreation), `templates/consuming-project-template/` (drop-in starter for a new project).

**Building an actual Shopify Theme App Extension widget (an app block or app embed a merchant installs into their storefront)?** Read `THEME_APP_EXTENSION.prompt.md` first. It is a different target than everything else in this skill: the React/Babel runtime used for prototyping (`_ds_bundle.js`, the `*.card.html` pattern, `ui_kits/`) must never ship inside a real extension — Shopify's JS budget per asset is ~10 KB. A Theme App Extension widget is hand-written Liquid + trimmed CSS copied from `tokens/`/`components/components.css`, matching the `.jsx` source's markup shape and `data-slot` attributes, not the `.jsx` file executed directly.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts, production code, or a Theme App Extension widget, depending on the need.
