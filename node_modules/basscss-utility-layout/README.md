# Basscss Utility Layout

<p class="hide">Layout utilities module for Basscss</p>

<a href="http://basscss.com" class="hide">basscss.com</a>

Change the default document flow with display, float, and other utilities.

```css
.inline       { display: inline }
.block        { display: block }
.inline-block { display: inline-block }

.overflow-hidden { overflow: hidden }
.overflow-auto   { overflow: auto }
.overflow-scroll { overflow: scroll }

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table
}
.clearfix:after { clear: both }

.left  { float: left }
.right { float: right }

.fit { max-width: 100% }

.half-width { width: 50% }
.full-width { width: 100% }
```

## Media Object
Create a media object using basic utilities.

```html
<div class="clearfix mb2 outline-blue">
  <div class="left p2 mr1">Image</div>
  <div class="overflow-hidden">
    <p><b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
  </div>
</div>
```

## Double-Sided Media Object
For a container with a flexible center, use a double-sided media object.

```html
<div class="clearfix mb2 outline-blue">
  <div class="left p2 mr1">Image</div>
  <div class="right p2 ml1">Image</div>
  <div class="overflow-hidden">
    <p><b>Body</b> Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
  </div>
</div>
```

