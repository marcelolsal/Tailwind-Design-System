Use `Button` for any click action — submit, save, add to cart, navigate.

```jsx
<Button variant="default" size="default" startIcon={<PlusIcon />}>Add product</Button>
```

Variants: `default` (primary), `secondary`, `outline`, `ghost`, `error`, `link`.
Sizes: `xs` `sm` `default` `lg`, plus square `icon-xs`/`icon-sm`/`icon`/`icon-lg` for icon-only buttons.
Props: `loading` (shows a Spinner, disables), `loadingPosition` (`start`/`end`/`center`), `startIcon`/`endIcon`, `fullWidth`, `disabled`.
