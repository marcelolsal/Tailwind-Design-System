# Changelog

All notable changes to the Vanilla Tailwind Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [1.1.0] — 2026-07-05

### Added
- Drop-in "import this into a new session" prompt block in `readme.md`, with strict-copy rules and an after-import verify checklist — so a fresh session can import this repo with nothing to parse or reinterpret
- `templates/consuming-project-template/` — a second template: a blank starter page + `ds-base.js` loader + README for bootstrapping a brand-new project off this system
- `THEME_APP_EXTENSION.prompt.md` — rules for generating actual Shopify Theme App Extension widgets (app blocks / app embeds) from this system's tokens and markup shape, including the hard platform limits (10 MB total, 30 blocks, 100 KB Liquid, ~10 KB JS per asset) and why the React/Babel prototyping runtime must never ship inside a real extension
- Core do/don't rules restated independently in `CLAUDE.md`, the `readme.md` import block, and the new template's `README.md`, so whichever file is read first is self-contained

## [1.0.0] — 2026-07-05

### Added
- Initial local snapshot, mirrored from the "Szum-Tech Design System" claude.ai project
- 18 component families in `components/`: Button, Badge, Status, Card (+6 sub-parts), Avatar, Kbd, Separator, Table (+6 sub-parts), Alert (+2 sub-parts), Progress, Skeleton, Spinner, Checkbox, Field (+2 sub-parts), Input, Label, Select, Switch
- Design tokens in `tokens/`: OKLCH colors (light + dark), Poppins/JetBrains Mono typography, 4px spacing scale, radius, shadow, motion
- 19 preview cards under `guidelines/` and `components/*/*.card.html`
- `ui_kits/widget-studio/` — a full Shopify widget-admin dashboard built from the components
- `templates/widget-settings/` — a `.dc.html` template for the design-doc/preview pipeline
- Meta layer: `CLAUDE.md`, `SKILL.md`, `EXPORT_MOCKUPS.prompt.md`, `IMPLEMENT_PRD.prompt.md`, `MOUNT_MOCKUPS.prompt.md`, this file, `CONTRIBUTING.md`, `.gitignore`

---

**Local, editable system:** unlike a vendored third-party design system, this repo is meant to grow — add components, tokens, or templates directly and bump this changelog.
