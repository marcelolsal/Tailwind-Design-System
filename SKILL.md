---
name: szum-tech-design
description: Use this skill to generate well-branded interfaces and assets for the Szum-Tech design system (a vanilla, Preact-friendly rebuild of @szum-tech/design-system, tuned for Shopify storefront widgets and theme app extensions), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css` and mount components via `_ds_bundle.js` (`window.SzumTechDesignSystem_*`). If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand; components are plain-CSS driven by `data-slot` / `data-variant` / `data-size` attributes, so they port to Preact/React/Liquid with no Tailwind build step.

Key files: `readme.md` (full design guide + content/visual/iconography rules), `styles.css` (token + component CSS entry), `tokens/` (colors, type, spacing), `components/` (18 component families with `.jsx` + `.d.ts` + `.prompt.md`), `ui_kits/widget-studio/` (a Shopify widget-app admin recreation).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
