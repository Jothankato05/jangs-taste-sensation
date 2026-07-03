Glass modal (blur 18, hairline, signature corner). Positioned absolute — parent needs position:relative (or use at page level).

```jsx
<Dialog open={open} kicker="Reservations" title="Your Table Is Waiting." onClose={close}>…</Dialog>
```
