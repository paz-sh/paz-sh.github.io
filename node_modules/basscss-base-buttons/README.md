# Basscss Base Buttons

Base button styles module for Basscss - http://basscss.com

Structural styles and resets for buttons are set in this base element styles module.
All buttons share common padding and height, well suited for tap targets on touchscreen displays.

```html
<div class="mb1">
  <button>Button</button>
  <a href="#!" class="button">Link Button</a>
  <input type="button" class="button" value="Input Button">
</div>
```

Color style modules and other custom extensions adjust their surface-level appearance.

```html
<div class="mb1">
  <button class="button mb1">Button</button>
  <button class="button-outline blue mb1">Button Outline</button>
  <button class="button black bg-silver mb1">Silver Button</button>
  <button class="button bg-red mb1">Button Red</button>
  <button class="button-transparent mb1">Transparent Button</button>
</div>
```

## Default Variables
To customize base button styles, use the following variables.

```css
:root {
  --button-font-size: inherit;
  --button-font-weight: bold;
  --button-line-height: 1.125rem;
  --button-padding-y: .5rem;
  --button-padding-x: 1rem;
}
```

Note: adjusting the line-height and padding may require adjustments to form element variables to maintain vertical alignment.

