Use `Input` for single-line text entry.

```jsx
<Input placeholder="you@store.com" invalid={hasError} />
```

Set `invalid` for the error ring. Pair with `Label` (via `htmlFor`/`id`) and wrap in `Field` for description/error layout. Height 32px, matches `Select`.
