# Basscss Utility Responsive States

<p class="hide">Responsive state utilities module for Basscss</p>

<a href="http://basscss.com" class="hide">basscss.com</a>

These styles allow for conditionally showing and hiding elements using a mobile-first approach.

## Prefix Naming Convention

<div class="overflow-scroll">
  <table class="mb2 table-light overflow-hidden border rounded">
    <thead class="bg-darken-1">
      <tr> <th>Prefix</th> <th>Description</th> </tr>
    </thead>
    <tbody>
      <tr> <td>(no prefix)</td> <td>Not scoped to a breakpoint</td> </tr>
      <tr> <td>sm-</td> <td>--breakpoint-sm (default: min-width 40em)</td> </tr>
      <tr> <td>md-</td> <td>--breakpoint-md (default: min-width 52em)</td> </tr>
      <tr> <td>lg-</td> <td>--breakpoint-lg (default: min-width 64em)</td> </tr>
    </tbody>
  </table>
</div>

To adjust the default breakpoints, declare custom media queries after importing the file via Rework, or manually adjust them in CSS.

```css
.sm-show, .md-show, .lg-show {
  display: none !important
}
@media (--breakpoint-sm) {
  .sm-show { display: block !important }
}
@media (--breakpoint-md) {
  .md-show { display: block !important }
}
@media (--breakpoint-lg) {
  .lg-show { display: block !important }
}
@media (--breakpoint-sm) {
  .sm-hide { display: none !important }
}
@media (--breakpoint-md) {
  .md-hide { display: none !important }
}
@media (--breakpoint-lg) {
  .lg-hide { display: none !important }
}
.display-none { display: none !important }
.hide {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}
```

## Example
Resize the browser window to see the effect.

```html
<h3 class="sm-show">Visible from <code>--breakpoint-sm</code> and up.</h3>
<h3 class="sm-hide red">Hidden from <code>--breakpoint-sm</code> and up.</h3>
```

## Responsive Line Break
Control wrapping at different screen widths.

```html
<h1>
  Responsive Line Break
  <br class="md-show">
  To Control Wrapping
</h1>
```

