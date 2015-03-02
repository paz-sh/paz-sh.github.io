# Basscss Utility White Space

<p class="hide">White space margin and padding utilities module for Basscss</p>

<a href="http://basscss.com" class="hide">basscss.com</a>

Margin and padding utilities are based on a global white space scale defined with variables.
These utilities use a shorthand naming convention.

<div class="overflow-scroll">
  <table class="mb2 bg-darken-1 rounded table-light">
    <thead class="bg-darken-1">
      <tr> <th>Shorthand</th> <th>Description</th> </tr>
    </thead>
    <tbody>
      <tr> <td>m</td> <td>Margin</td> </tr>
      <tr> <td>p</td> <td>Padding</td> </tr>
      <tr> <td>t</td> <td>Top</td> </tr>
      <tr> <td>r</td> <td>Right</td> </tr>
      <tr> <td>b</td> <td>Bottom</td> </tr>
      <tr> <td>l</td> <td>Left</td> </tr>
      <tr> <td>x</td> <td>X-axis (left and right)</td> </tr>
      <tr> <td>y</td> <td>Y-axis (top and bottom)</td> </tr>
      <tr> <td>n</td> <td>Negative (margin only)</td> </tr>
      <tr> <td>1</td> <td>--space-1 (default .5rem)</td> </tr>
      <tr> <td>2</td> <td>--space-2 (default 1rem)</td> </tr>
      <tr> <td>3</td> <td>--space-3 (default 2rem)</td> </tr>
      <tr> <td>4</td> <td>--space-4 (default 4rem)</td> </tr>
    </tbody>
  </table>
</div>

## Margins
Change or reset default margins using the global white space scale.
Negative x-axis margins are used to offset padding.
Margin auto is used to horizontally center block-level elements with a set width.

```css
.m0  { margin:        0 }
.mt0 { margin-top:    0 }
.mr0 { margin-right:  0 }
.mb0 { margin-bottom: 0 }
.ml0 { margin-left:   0 }

.m1  { margin:        var(--space-1) }
.mt1 { margin-top:    var(--space-1) }
.mr1 { margin-right:  var(--space-1) }
.mb1 { margin-bottom: var(--space-1) }
.ml1 { margin-left:   var(--space-1) }

.m2  { margin:        var(--space-2) }
.mt2 { margin-top:    var(--space-2) }
.mr2 { margin-right:  var(--space-2) }
.mb2 { margin-bottom: var(--space-2) }
.ml2 { margin-left:   var(--space-2) }

.m3  { margin:        var(--space-3) }
.mt3 { margin-top:    var(--space-3) }
.mr3 { margin-right:  var(--space-3) }
.mb3 { margin-bottom: var(--space-3) }
.ml3 { margin-left:   var(--space-3) }

.m4  { margin:        var(--space-4) }
.mt4 { margin-top:    var(--space-4) }
.mr4 { margin-right:  var(--space-4) }
.mb4 { margin-bottom: var(--space-4) }
.ml4 { margin-left:   var(--space-4) }

.mxn1 { margin-left: -var(--space-1); margin-right: -var(--space-1); }
.mxn2 { margin-left: -var(--space-2); margin-right: -var(--space-2); }
.mxn3 { margin-left: -var(--space-3); margin-right: -var(--space-3); }
.mxn4 { margin-left: -var(--space-4); margin-right: -var(--space-4); }

.mx-auto { margin-left: auto; margin-right: auto; }
```

## Padding
Padding utilities are only available in symmetrical orientations.
This is to normalize the spacing used around elements.

```css
.p1  { padding:       var(--space-1) }
.py1 { padding-top:   var(--space-1); padding-bottom: var(--space-1) }
.px1 { padding-left:  var(--space-1); padding-right:  var(--space-1) }

.p2  { padding:       var(--space-2) }
.py2 { padding-top:   var(--space-2); padding-bottom: var(--space-2) }
.px2 { padding-left:  var(--space-2); padding-right:  var(--space-2) }

.p3  { padding:       var(--space-3) }
.py3 { padding-top:   var(--space-3); padding-bottom: var(--space-3) }
.px3 { padding-left:  var(--space-3); padding-right:  var(--space-3) }

.p4  { padding:       var(--space-4) }
.py4 { padding-top:   var(--space-4); padding-bottom: var(--space-4) }
.px4 { padding-left:  var(--space-4); padding-right:  var(--space-4) }
```

<span class="red">Margins and padding should never be declared outside of these utilities.</span>
This is meant to help create consistent rhythm and avoid magic numbers.
If, for some reason, the default white space scale does not accomodate your design,
customize and extend it before implementation.

