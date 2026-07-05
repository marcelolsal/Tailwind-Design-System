# Changelog

All notable changes to the Vanilla Tailwind Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
