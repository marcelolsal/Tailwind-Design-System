Use `Table` for tabular data. Compose the sub-parts.

```jsx
<Table>
  <TableHeader>
    <TableRow><TableHead>Product</TableHead><TableHead>Stock</TableHead></TableRow>
  </TableHeader>
  <TableBody>
    <TableRow><TableCell>Ceramic Mug</TableCell><TableCell>128</TableCell></TableRow>
  </TableBody>
</Table>
```

Rows have hover + `data-state="selected"` states. The table wraps itself in a horizontally-scrollable container.
