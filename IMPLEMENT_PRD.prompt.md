---
name: implement-prd
description: >
  Use this skill when the product owner pastes a Design-PRD (screen-level mockup
  spec - has a "Screen Inventory" and "Per-Screen Specs" section, produced by the
  to-prd-pair skill or equivalent) into this design system project and asks to
  generate the mockups it describes. Parses the Screen Inventory and Per-Screen
  Specs, resolves Reuse references against already-mounted mockups, and emits one
  standalone Vanilla Tailwind Design System mockup per screen. Idempotent by
  screen name, not sequence number, so re-running an updated PRD updates the
  right screens without orphaning stale ones.
user-invocable: true
auto-trigger: >
  Fire when the user pastes text containing both a "## Screen Inventory" and a
  "## Per-Screen Specs" heading (the Design-PRD shape), or says "implement this
  PRD", "generate mockups from this PRD", "build the mocks for this PRD".
---

## Who Runs This

Only the product owner's session runs this skill. Developers never run a PRD
against a design system - they only ever mount an already-exported zip (see
`MOUNT_MOCKUPS.prompt.md`). This skill produces the mockups the product owner
later exports via `EXPORT_MOCKUPS.prompt.md` once satisfied.

```
Design-PRD (pasted) → THIS SKILL → mockups/<slug>/ (in PO's session)
                                        │
                                        │ "export this mockup" (PO, when done)
                                        ▼
                                  ZIP handed to developer
                                        │
                                        │ mount (developer session)
                                        ▼
                              mockups/<slug>/ (in developer's session)
```

---

## Step 0 — Preconditions

- If the pasted document has no "Screen Inventory" section, it's a Main/dev PRD,
  not a Design-PRD. Say: "This looks like the developer-facing PRD, not the
  Design-PRD. Paste the screen-level Design-PRD instead - the one with a Screen
  Inventory and Per-Screen Specs."
- If the Design-PRD's "Open Questions" section is non-empty, stop and surface it:
  "This Design-PRD has N unresolved open question(s): [list]. Resolve them first,
  or tell me to proceed anyway and I'll flag the affected screens as
  provisional."

---

## Step 1 — Determine the Feature Slug

Read the "Derived from: [Main PRD title/version]" line, or the Design-PRD's own
`# [Feature Name] — Design PRD` title. Slugify exactly as `EXPORT_MOCKUPS` and
`MOUNT_MOCKUPS` do: lowercase, spaces/underscores → hyphens.

---

## Step 2 — Resolve Reuse References

For each Per-Screen Spec whose `Reuse:` field is not `new - no existing match`:

1. Read `mockups/index.html`'s `groups-data` registry to see existing feature
   groups and their descriptions.
2. Open the group index (`mockups/<candidate-slug>/index.html`) for any group
   whose label/description plausibly matches the Reuse description, then open
   the specific mockup file that looks closest.
3. If a confident match is found, use it as the structural/visual base for the
   new screen - same layout, same components from `window.SzumTechDesignSystem_1f5ec4`,
   same content model - without copying content verbatim where the new
   Per-Screen Spec differs.
4. If no confident match is found, do not guess silently. Tell the user:
   "Screen '[Name]' says it should reuse '[Reuse text]' but I couldn't find a
   confident match in mockups/ - point me at the right existing mockup, or
   confirm this is actually new."

---

## Step 3 — Generate Each Screen

Produce one standalone HTML file per screen inventory entry, bundled the same
way `EXPORT_MOCKUPS.prompt.md` requires (`styles.css` + `_ds_bundle.js` inlined,
fonts inlined, `<div id="__bundler_thumbnail">` splash) so it needs no separate
re-bundling step before export.

- Use only components and tokens from this design system per its `SKILL.md` and
  `CLAUDE.md` - the same constraints apply here as anywhere else in this project.
  If a screen genuinely needs something that doesn't exist yet, add it first
  (this is an editable system) rather than hand-rolling a one-off replacement.
- Content, action labels, and states come **exactly** from the Per-Screen Spec
  - literal copy, literal labels. Do not invent states beyond what's listed.
- Embed a stable identity marker as the first line of the file:
  `<!-- @prdScreen <slugified-screen-name> -->`

---

## Step 4 — Idempotent Identity: Screen Name, Not Sequence Number

This is the one place this skill's idempotency rule differs from
`MOUNT_MOCKUPS.prompt.md`'s "never delete, latest overwrite" rule. A Design-PRD
is authoritative over its own feature's screen set, so:

- On re-run for the same feature slug, match existing files in
  `mockups/<feature-slug>/` by their `@prdScreen` marker, not by `Mockup NN`
  position.
  - **Marker found** → overwrite that file's content in place. Keep its current
    sequence number unless the Screen Inventory order actually changed.
  - **Screen no longer in the new Screen Inventory** → delete its file. The PRD
    dropped it on purpose; this is not accidental staleness like a partial
    mount.
  - **New screen name** → create it at the next sequence number.
- Do not reshuffle numbers for screens that didn't move, just because one
  screen was inserted or removed elsewhere in the sequence.

---

## Step 5 — Update Indexes

Same mechanics as `MOUNT_MOCKUPS.prompt.md` Steps 5-6: rewrite
`mockups/<feature-slug>/index.html` (sidebar viewer) and update the
`groups-data` entry in `mockups/index.html` (count, description).

---

## Step 6 — Report

```
Implemented [Feature Name] Design-PRD → mockups/<slug>/
  ✓ Generated: Mockup 01 - Full page (new)
  ✓ Updated:   Mockup 04 - Eligibility (matched by screen name)
  ✗ Deleted:   Mockup 09 - Tags (removed from Screen Inventory)
  ? Unresolved reuse: Mockup 07 - Combinations (no confident match found)
```

Then say: "Mockups generated. Review them, and say 'export this mockup' when
ready to hand off to developers."

---

## Hard Rules

| Rule | |
|---|---|
| Never auto-export | The product owner explicitly runs Export when satisfied - this skill never packages a zip itself |
| Never invent scope | Every field comes from the Per-Screen Spec, nothing added |
| Never resolve Reuse silently | Always report which existing mockup a match was resolved to, or that none was found |
| Identity is screen name, not position | Re-running an edited PRD must not create duplicate or renumbered orphans |
| Developers never run this skill | It only fires in the product owner's session; developer sessions only mount exported zips |
