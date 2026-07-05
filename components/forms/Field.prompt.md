Use `Field` to lay out a labelled control with optional helper/error text.

```jsx
<Field>
  <Label htmlFor="e">Email</Label>
  <Input id="e" invalid />
  <FieldError>Enter a valid email.</FieldError>
</Field>
```

`Field` is a 6px vertical grid. `FieldDescription` = muted help text; `FieldError` = error-colored message.
