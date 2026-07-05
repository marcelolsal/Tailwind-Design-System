---
name: mount-mockups
description: >
  Auto-trigger this skill whenever standalone HTML mockup files arrive in the project context — via an attached local folder, an uploaded ZIP file, or a direct file upload. Validates each file, organises it into a feature-scoped path under `mockups/<feature-slug>/`, creates a sidebar viewer index for that group, and updates the master `mockups/index.html` registry. Never modifies mockup content.
user-invocable: false
auto-trigger: >
  Fire when the user attaches a local folder or uploads files AND those files include `.html` or `.zip` files. Fire also when the user says "mount", "mount these", "mount mockups", "these are from my designer", or similar phrasing indicating incoming mockup files.
---

## What This Skill Does

Designers export Vanilla Tailwind Design System mockups as self-contained standalone HTML files, bundled individually or zipped together as a feature set. This skill:

1. **Detects** the incoming files (folder or zip)
2. **Validates** each HTML file as a genuine standalone bundle
3. **Determines** the feature slug (from zip filename, folder name, or one question to the user)
4. **Mounts** every valid file into `mockups/<feature-slug>/`, matching by identity marker when present (see Step 3) or filename otherwise
5. **Mounts** the accompanying `design-prd.md`, if present, untouched
6. **Creates** `mockups/<feature-slug>/index.html` as a sidebar viewer
7. **Updates** `mockups/index.html` (the master registry) with the new group
8. **Reports** what was mounted, renamed, skipped, and why

---

## Step 0 — Detect the Source

### Attached local folder
Use `local_ls("<folder>")` to list contents. Collect all `.html` files (direct children and one level deep). Also check for `.zip` files — if found, handle them via ZIP extraction (Step 0B) first. Also check for a `design-prd.md` file — it's not a mockup, but it travels with the group (Step 2).

### Uploaded ZIP file
If the user uploads a `.zip` file (or the attached folder contains a `.zip`):

**ZIP Extraction procedure** (use `run_script`):

```js
// 1. Copy zip into project first
// 2. Then extract:
const zipBlob = await readFileBinary('path/to/upload.zip');
const buf = await zipBlob.arrayBuffer();
const bytes = new Uint8Array(buf);

// Find End of Central Directory (EOCD) — last occurrence of signature 0x504B0506
let eocdOffset = -1;
for (let i = bytes.length - 22; i >= 0; i--) {
  if (bytes[i]===0x50 && bytes[i+1]===0x4B && bytes[i+2]===0x05 && bytes[i+3]===0x06) {
    eocdOffset = i; break;
  }
}
const view = new DataView(buf);
const cdOffset = view.getUint32(eocdOffset + 16, true);
const cdSize   = view.getUint32(eocdOffset + 12, true);
const cdCount  = view.getUint16(eocdOffset + 8,  true);

// Parse central directory entries
let pos = cdOffset;
const entries = [];
for (let i = 0; i < cdCount; i++) {
  const compMethod   = view.getUint16(pos + 10, true);
  const compSize     = view.getUint32(pos + 20, true);
  const uncompSize   = view.getUint32(pos + 24, true);
  const nameLen      = view.getUint16(pos + 28, true);
  const extraLen     = view.getUint16(pos + 30, true);
  const commentLen   = view.getUint16(pos + 32, true);
  const localOffset  = view.getUint32(pos + 42, true);
  const name = new TextDecoder().decode(bytes.slice(pos + 46, pos + 46 + nameLen));
  entries.push({ name, compMethod, compSize, uncompSize, localOffset });
  pos += 46 + nameLen + extraLen + commentLen;
}

// Extract each HTML file (and design-prd.md, if present)
for (const entry of entries) {
  if (entry.name.endsWith('/')) continue;
  if (!entry.name.endsWith('.html') && entry.name !== 'design-prd.md') continue;
  const lhBase = entry.localOffset;
  const lhNameLen  = view.getUint16(lhBase + 26, true);
  const lhExtraLen = view.getUint16(lhBase + 28, true);
  const dataStart  = lhBase + 30 + lhNameLen + lhExtraLen;
  const compData   = bytes.slice(dataStart, dataStart + entry.compSize);

  let text;
  if (entry.compMethod === 0) {
    text = new TextDecoder().decode(compData);
  } else {
    const ds = new DecompressionStream('deflate-raw');
    const writer = ds.writable.getWriter();
    const reader = ds.readable.getReader();
    writer.write(compData);
    writer.close();
    const chunks = [];
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
    }
    const totalLen = chunks.reduce((s, c) => s + c.length, 0);
    const out = new Uint8Array(totalLen);
    let offset = 0;
    for (const c of chunks) { out.set(c, offset); offset += c.length; }
    text = new TextDecoder().decode(out);
  }

  const filename = entry.name.split('/').pop();
  await saveFile(`mockups/${featureSlug}/${filename}`, text);
  log(`Extracted: ${filename}`);
}
```

**Feature slug from zip filename:** strip the `.zip` extension and slugify (lowercase, spaces → hyphens). `discount-flow.zip` → `discount-flow`. If the zip name is generic (e.g. `export.zip`, `mockups.zip`), fall back to asking the user (Step 1B).

---

## Step 1A — Determine Feature Slug (from filename)

Check the zip filename or the attached folder name:
- `discount-flow.zip` → `discount-flow`
- `Checkout V2.zip` → `checkout-v2`
- `order-details-screens.zip` → `order-details-screens`

Slugify: lowercase, strip special characters, spaces and underscores → hyphens.

## Step 1B — Determine Feature Slug (ask if unclear)

If the source name is generic (`export`, `mockups`, `files`, `untitled`, a date string), ask the user **one question only**:

> "What feature are these mockups for? I'll use your answer as the folder name (e.g. `checkout-v2`, `order-details`)."

Use the answer as the slug. Do not proceed until you have a clear feature name.

---

## Step 2 — Validate Each HTML File

Read the first 80 lines of each file. A valid standalone mockup has ALL of these:

| Check | What to look for |
|---|---|
| DOCTYPE | `<!DOCTYPE html>` |
| Bundler splash | `<div id="__bundler_thumbnail">` |
| Loading indicator | `<div id="__bundler_loading">` |
| Bundler manifest | `__bundler/manifest` inside a `<script>` block |

**Pass** → mount it.
**Fail** → skip it, report which file and which check failed. Do NOT attempt to fix, re-export, or recreate it.

**`design-prd.md` is exempt from this check.** It's not a mockup — it's markdown, not a bundled HTML file. If present in the source, mount it untouched into `mockups/<feature-slug>/design-prd.md`. It's the ground truth an implementing developer reads before generating production code (see `CLAUDE.md`, "Implement this mockup").

---

## Step 3 — Mount Files

Copy every valid file into `mockups/<feature-slug>/` using `local_copy_to_project` (for local folder sources) or via the ZIP extraction script above, preserving the original filename exactly.

**Before copying, check for an identity marker.** Read the first ~10 lines of the incoming file for a `<!-- @prdScreen <slug> -->` comment (left by `implement-prd`):

- **Marker present:** search the files already mounted in `mockups/<feature-slug>/` for one carrying the *same* marker under a *different* filename.
  - **Found** → this is a rename, not a new screen (the PRD's Screen Inventory order changed and `implement-prd` renumbered it). Delete the old file, then mount the new one. Report it as `Renamed: Mockup 04 - Eligibility.html → Mockup 05 - Eligibility.html`, not as a separate addition — otherwise the stale numbered file sits alongside the new one forever.
  - **Not found** → mount as a new file.
- **Marker absent** (hand-built mockup, not PRD-generated): fall back to the original rule — overwrite silently if a file of the same name already exists (latest wins).

```
src:  exports/Mockup 01 - Full page.html
dest: mockups/discount-flow/Mockup 01 - Full page.html
```

- Never rename files yourself beyond the rename-detection above
- Never modify content (not one character)
- Overwrite silently on a filename match; delete-then-mount on a marker match under a new name

---

## Step 4 — Parse Mockup Metadata

For each mounted file, extract:
- **Sequence number**: from filename (`Mockup 01`, `Mockup 04B`, `Screen 3`)
- **Label**: the human-readable part of the filename after the number (`Full page`, `Amount off products`)
- Fall back to the full filename minus extension if no pattern matches

---

## Step 5 — Create the Group Index

Write `mockups/<feature-slug>/index.html` as a full-viewport sidebar viewer:

**Sidebar (280px fixed):**
- Header: humanized group name + "N screens from designer" subtitle
- Scrollable nav list: number badge + label per mockup
- Active state: `var(--primary)` background on badge
- Previous / Next buttons at the bottom
- Keyboard navigation: `ArrowUp`/`ArrowDown` or `ArrowLeft`/`ArrowRight`
- Persist last-viewed index in `localStorage` key: `mockup-viewer-<slug>`

**Main area (fills remainder):**
- Top bar: current mockup title + "Open in new tab ↗" link
- Full-height `<iframe>` loading the mockup file
- No overlays, no injected chrome into the iframe

**Rules:**
- The group index iframe loads mockup files with plain relative `src` — no wrappers
- If the group index already exists, replace it entirely
- The only back-navigation is the browser's back button or opening the master index directly

---

## Step 6 — Update the Master Index

Read `mockups/index.html`. Find the `<script id="groups-data" type="application/json">` block. Parse the JSON array. Check if an entry with this slug already exists:

- **New group**: append a new entry `{ "slug": "…", "label": "…", "count": N, "description": "…" }`
- **Existing group** (re-mount / update): update `count` only
- Write the updated JSON back into the script block

Humanize the label from the slug: `discount-flow` → `Discount Flow`, `checkout-v2` → `Checkout V2`.

Generate a short description from the mockup labels if possible (e.g. the first and last screen labels). Keep it under 100 characters.

---

## Step 7 — Report

```
Mounted N mockups → mockups/<slug>/index.html
  ✓ Mockup 01 - Full page
  ✓ Mockup 02 - Amount off products
  ↻ Renamed: Mockup 04 - Eligibility.html → Mockup 05 - Eligibility.html
  ✓ design-prd.md mounted
  …
  ✗ Skipped: SomeBadFile.html — missing bundler manifest
```

Then call `ready_for_verification` with `mockups/index.html`.

---

## Hard Rules

| Rule | |
|---|---|
| Never modify mockup content | Not one character — not even whitespace |
| Never recreate or re-implement | If broken, skip + report |
| Never add overlays to mockups | No floating buttons injected into iframe content |
| Never use a generic folder | Always name the path after the feature |
| Index only, plus one PRD file | The only files you write are `mockups/<slug>/index.html`, `mockups/index.html`, and (if present in the source) `mockups/<slug>/design-prd.md` |
| Overwrite or rename on re-mount | Filename match → latest wins, overwrite in place. `@prdScreen` marker match under a *different* filename → delete the old file, mount the new one (rename), so renumbering upstream doesn't leave orphans |

---

## Resulting File Layout

```
mockups/
  index.html                         ← master registry (always updated)
  discount-flow/
    index.html                       ← sidebar viewer for this group
    design-prd.md                    ← ground truth for "implement this mockup", if provided
    Mockup 01 - Full page.html
    Mockup 02 - Amount off products.html
    …
  checkout-v2/
    index.html
    Mockup 01 - Overview.html
    …
```
