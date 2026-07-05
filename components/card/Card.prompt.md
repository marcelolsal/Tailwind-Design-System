Use `Card` as a content surface — dashboards, widget settings, product tiles.

```jsx
<Card>
  <CardHeader>
    <CardTitle>Free Shipping Bar</CardTitle>
    <CardDescription>Motivate shoppers to hit the threshold.</CardDescription>
    <CardAction><Badge>Live</Badge></CardAction>
  </CardHeader>
  <CardContent>…</CardContent>
  <CardFooter><Button size="sm">Edit</Button></CardFooter>
</Card>
```

Placing `CardAction` inside `CardHeader` switches the header to a two-column layout with the action pinned top-right.
