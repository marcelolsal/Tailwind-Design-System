Use `Alert` for an inline, contextual message.

```jsx
<Alert variant="destructive">
  <TriangleIcon />
  <AlertTitle>Sync failed</AlertTitle>
  <AlertDescription>Reconnect your store to continue.</AlertDescription>
</Alert>
```

Variants: `default`, `destructive`. Pass an icon SVG as the first child to get the icon column.
