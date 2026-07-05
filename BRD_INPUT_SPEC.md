# What This Design System Needs From a BRD/PRD to Generate a Mockup

**Audience:** this is written for the author (human or AI skill) of a different repo that produces BRDs/PRDs which get handed to the **Vanilla Tailwind Design System** project to generate Shopify Theme App Extension widget mockups. You don't need to know what that other skill does internally — this document is the contract at the handoff point: what a document needs to contain for the design system's `IMPLEMENT_PRD.prompt.md` skill to turn it into a mockup, reliably, without asking clarifying questions.

---

## 1. What You're Handing Off To

The Vanilla Tailwind Design System is a component library + token set (Button, Badge, Card, Table, Alert, form controls, etc.) built to render as **Shopify Theme App Extension widgets** — app blocks or app embeds that render *inline inside an existing Shopify storefront page*, not standalone pages. That has two consequences for what you write in a BRD:

- **You're describing a widget, not a page.** No navigation chrome, no full-page layout, no responsive breakpoints to specify — the widget occupies one slot in a section (app block) or floats site-wide (app embed), and inherits the host page's responsiveness. Don't include "mobile / tablet / desktop" variants unless the widget's *behavior*, not just its width, genuinely differs by context.
- **The receiving skill produces a real, working HTML mockup per screen/state**, not a written description or a wireframe sketch. Whatever you specify becomes literal copy, literal states, and literal structure in that mockup. Precision in the BRD is precision in the output; vagueness in the BRD is where the generator is *expected* to make a reasonable call (see §4).

---

## 2. Document Shape (Required)

A BRD/PRD the design system can consume needs exactly two sections, in this order, using these headings verbatim (the receiving skill pattern-matches on them):

```markdown
# [Feature Name] — Design PRD

Derived from: [Main PRD title/version, if one exists — omit the line if there isn't one]

## Open Questions
[List any unresolved questions here. Leave the heading with no items under it if there are none —
an empty list, not a missing section, is what tells the receiving skill it's safe to proceed.]

## Screen Inventory
[see §3]

## Per-Screen Specs
[see §4]
```

A document with **only** a "Screen Inventory" or **only** "Per-Screen Specs" — or neither — gets rejected by the receiving skill as "not the screen-level Design-PRD/BRD shape." Both sections are required, and they must agree with each other (every screen named in the Inventory has a matching Per-Screen Spec, and vice versa).

---

## 3. Screen Inventory

A flat list (table or bullets, either is fine) naming every screen/state that needs its own mockup file, in the order they should be numbered:

| # | Screen Name | Purpose |
|---|---|---|
| 1 | Full page | Default state, no data yet |
| 2 | Loading | While fetching existing config |
| 3 | Error — save failed | Save request rejected |

**Rules:**
- **Screen Name is the stable identity.** The receiving skill matches screens across regenerations by this name, not by position — rename a screen and it's treated as a new screen (the old one's file gets deleted); keep the name the same and edits land in the same file even if you reorder the list.
- Gaps and reordering are fine on a re-run — a screen dropped from the Inventory gets its mockup file deleted on the next run; that's intentional, not a bug to work around.
- Only list states that are genuinely distinct UI, not every possible data permutation. A products table with 0/1/50 rows is one screen ("populated") unless empty-state has meaningfully different UI, in which case that's its own screen ("empty").

---

## 4. Per-Screen Specs

One entry per Screen Inventory row:

```markdown
### [Screen Name]

**Reuse:** new - no existing match  |  <description of an existing mockup this should resemble>

**States:** default | loading | error | success | empty  (pick the ones that apply to *this* screen)

**Content:**
- [Literal copy, literal labels, literal numbers — exactly what should appear, not a description of what should appear]

**Layout:** [see §4a — this is where discretion lives]

**Settings surfaced to the merchant:** [see §4b]
```

### What's authoritative vs. what's the generator's discretion

| This is fixed — must match exactly | This is discretion — the generator decides |
|---|---|
| Literal copy/labels/numbers under **Content** | Exact spacing/alignment choices not pinned down by **Layout** |
| The list of **States** | Which specific component variant (e.g. `Alert` vs `Card`) best expresses an unspecified detail |
| **Reuse** resolution (must reuse the named mockup, or explicitly flag no match found) | Minor visual polish within the token system (which shadow depth, which of two reasonable icon choices) |
| **Settings surfaced to the merchant** (these become real `block.settings` fields) | — |

**This asymmetry is intentional, not a gap to close.** Regenerating a mockup from an unchanged BRD is not expected to produce byte-identical output every time, and it shouldn't be forced to — locking down every pixel in the BRD would make the BRD brittle and slower to write for no real benefit, since the fixed column above is what actually matters for review and implementation. Write BRDs that pin down content, states, and merchant-facing settings precisely, and leave structural/visual judgment calls to the design system that actually knows its own component set.

### 4a. Layout — Tailwind Shorthand Is Fine, Here's the Translation

If your team authors in Tailwind CSS on React/Preact elsewhere, it's fine to describe a screen's layout using Tailwind utility shorthand — the receiving design system translates it, it doesn't need you to pre-translate:

| You write (Tailwind) | Design system reads it as |
|---|---|
| `flex items-center gap-2` | horizontal flex row, `--space-2` gap, vertically centered |
| `flex flex-col gap-4` | vertical stack, `--space-4` gap |
| `p-4` / `px-4` / `py-4` | `--space-4` padding (all sides / inline / block) |
| `gap-6`, `gap-8` | `--space-6`, `--space-8` |
| `rounded-md`, `rounded-lg` | `--radius-md` (4px), `--radius-lg` (8px) |
| `text-sm`, `text-lg` | `--font-size-body-sm`, `--font-size-body-lg` |
| `font-medium`, `font-semibold` | `--font-weight-medium` (500), `--font-weight-semibold` (600) |
| `shadow-sm`, `shadow-md` | `--shadow-sm`, `--shadow-md` |
| `grid grid-cols-3 gap-4` | 3-column grid, `--space-4` gap |

**Don't use Tailwind's color-scale classes** (`bg-blue-500`, `text-gray-600`, etc.) — this design system's palette isn't Tailwind's default scale, it's its own OKLCH indigo-violet brand + semantic set. Describe color by **role**, not by hex/scale:

| You write | Design system reads it as |
|---|---|
| primary / brand action | `--primary` / `--primary-foreground` |
| secondary action | `--secondary` / `--secondary-foreground` |
| muted / subdued text | `--muted-foreground` |
| success / positive | `--success` / `--success-foreground` |
| warning / caution | `--warning` / `--warning-foreground` |
| error / destructive | `--error` / `--error-foreground` |
| card / surface | `--card` / `--card-foreground` |
| page background | `--muted` |

If a BRD says "a warning-toned banner with the threshold amount in bold, `flex items-center gap-3`, `p-4`" — that's a complete, unambiguous instruction to the receiving skill even though it never says a single design-system token name.

### 4b. Settings Surfaced to the Merchant

Since the mockup represents a real Theme App Extension widget, list which values on this screen a merchant would actually configure in the theme editor (these become the block's `settings` schema fields — see `THEME_APP_EXTENSION.prompt.md` in the design system repo). Distinguish these explicitly from hardcoded UI copy:

```markdown
**Settings surfaced to the merchant:**
- Message text (default: "Free shipping on orders over $75")
- Threshold amount (default: 75)
```

Anything not listed here is treated as fixed UI copy, not something a merchant can edit.

---

## 5. Reuse References

If a screen should look like something already built, say so explicitly and describe *what* to reuse, not just that reuse is possible:

```markdown
**Reuse:** the settings-panel layout from the "Discount Flow" feature's screen 04 (Eligibility) — same
Field/Label/Input stack, same Save/Cancel footer, different fields.
```

Vague reuse references ("reuse the usual pattern") get flagged back to you as unresolved rather than guessed at — be as specific as you'd be telling a person which exact screen to go look at.

---

## 6. Worked Example

```markdown
# Free Shipping Bar — Design PRD

Derived from: Storefront Widgets PRD v2

## Open Questions
(none)

## Screen Inventory

| # | Screen Name | Purpose |
|---|---|---|
| 1 | Default | Bar showing progress toward free shipping |
| 2 | Threshold met | Bar showing the shopper has qualified |

## Per-Screen Specs

### Default

**Reuse:** new - no existing match

**States:** default

**Content:**
- "Add $24.00 more to unlock free shipping."
- Progress bar reflecting current cart subtotal vs. threshold

**Layout:** full-bleed bar, `flex items-center gap-4`, `p-4`, primary-toned background, progress bar
inline after the message, `rounded-md`.

**Settings surfaced to the merchant:**
- Message template (default: "Add {amount} more to unlock free shipping.")
- Threshold amount (default: 75)

### Threshold met

**Reuse:** Default screen above — same bar shell, different message and no progress bar.

**States:** success

**Content:**
- "You've unlocked free shipping!"

**Layout:** same shell as Default, success-toned background, no progress bar, a checkmark icon before
the message.

**Settings surfaced to the merchant:**
- Success message template (default: "You've unlocked free shipping!")
```

This is enough for the design system to generate both mockups without asking a single clarifying question — every literal string is given, every state is named, the reuse relationship between the two screens is explicit, and the layout is described precisely enough to translate even though it never names a single design-system token directly.
