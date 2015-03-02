# Basscss Grid

<p class="hide">Grid layout module for Basscss.</p>

<a href="http://basscss.com" class="hide">basscss.com</a>

The utility-based grid allows a lot of flexibility in creating complex layouts.
Start by using a `.clearfix` container.

Optionally use a `.container` to set a max-width.
Adjust the container width with the `--container-width` variable.

```html
<div class="container">
  <div class="clearfix">
  </div>
</div>
```

Add columns using the `.col` and grid width `.col-N` classes.
`.col` floats elements left and sets box-sizing to border-box.
`.col-N` sets width according to a 12 column grid.
The total number of columns in a row should add up to 12.

```html
<div class="clearfix outline-blue">
  <div class="col col-6">.col.col-6</div>
  <div class="col col-6">.col.col-6</div>
</div>
```

## Responsive Grid
Use breakpoint-prefixed column utilities to change the grid at different screen widths.
Each breakpoint applies to that screen width and up.
Unprefixed styles apply to all screen widths.

```html
<div class="clearfix outline-blue">
  <div class="sm-col sm-col-6 md-col-5 lg-col-4">.sm-col.sm-col-6.md-col-5.lg-col-4</div>
  <div class="sm-col sm-col-6 md-col-7 lg-col-8">.sm-col.sm-col-6.md-col-7.lg-col-8</div>
</div>
```

## Gutters
Use padding and negative margin utilities to create gutters based on the white space scale.
When using negative margin, be sure to compensate for the extra width created
with a padded parent element or by using overflow hidden.
Otherwise, horizontal scrolling may occur.

```html
<div class="clearfix mxn2 outline-blue">
  <div class="sm-col sm-col-6 md-col-5 lg-col-4 px2"><div>.px2</div></div>
  <div class="sm-col sm-col-6 md-col-7 lg-col-8 px2"><div>.px2</div></div>
</div>
```

## Nesting
Nest whole grid structures within columns to created nested grids.

```html
<div class="clearfix mxn2 outline-blue">
  <div class="sm-col sm-col-6 md-col-5 lg-col-4 px2"><div>Unnested</div></div>
  <div class="sm-col sm-col-6 md-col-7 lg-col-8 px2">
    <div class="clearfix mxn2">
      <div class="col col-6 px2"><div>Nested</div></div>
      <div class="col col-6 px2"><div>Nested</div></div>
    </div>
  </div>
</div>
```

## Reversed
To reverse the order of columns, use the `.col-right` class to float right

```html
<div class="clearfix outline-blue">
  <div class="col-right col-6">.col-right.col-6</div>
  <div class="col col-6">.col.col-6</div>
</div>
```

## Centering Columns
Use the `.mx-auto` class to center columns within their containers.

```html
<div class="clearfix mxn2 outline-blue">
  <div class="col-8 px2 mx-auto">
    <div>Centered Column</div>
  </div>
</div>
```

