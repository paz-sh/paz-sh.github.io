# Basscss Positions

<p class="hide">Positioning utilities for Basscss.</p>

<a href="http://basscss.com" class="hide">basscss.com</a>

These styles alter the default document flow.

<span class="red">Use positions with caution.
They are often unnecessary and commonly misused.</span><br>
See the <a href="http://basscss.com/docs/guides/basics">Guide to Basics</a> for more info.

```css
.relative { position: relative }
.absolute { position: absolute }
.fixed    { position: fixed }

.top-0    { top: 0 }
.right-0  { right: 0 }
.bottom-0 { bottom: 0 }
.left-0   { left: 0 }

.z1 { z-index: 1 }
.z2 { z-index: 2 }
.z3 { z-index: 3 }
.z4 { z-index: 4 }

.absolute-center {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  display: table;
}
```
