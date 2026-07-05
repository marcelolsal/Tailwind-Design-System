Use `Avatar` for a user/merchant image with a text fallback.

```jsx
<Avatar>
  <AvatarImage src="/me.jpg" alt="Jan" />
  <AvatarFallback>JS</AvatarFallback>
</Avatar>
```

32×32 by default with the system radius (not a circle — override with `border-radius: 9999px` for round).
