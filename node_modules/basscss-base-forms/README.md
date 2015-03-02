# Basscss Base Forms

Base form element styles module for Basscss - http://basscss.com

Forms use base styles for their structure with color styles applied to adjust the look and feel.
This creates a rhythmic consitency among all forms while allowing thematic differences where needed.
Form elements do not rely on nested styles or markup structure,
so utility styles can be used for contextual adjustments.

## Inline Forms
By default, form elements display inline.

```html
<form>
  <label>Search</label>
  <input type="text" class="mb0 field-light">
  <button class="button">Go</button>
</form>
```

## Stacked Forms

Use `.block` and other utilities to stack form elements.
The use of utilities allows for a lot of flexibility when building form layouts.

```html
<form class="sm-col-6">
  <label>Email Address</label>
  <input type="text" class="block full-width field-light">
  <label>Password</label>
  <input type="password" class="block full-width field-light">
  <label>Select</label>
  <select class="block full-width field-light">
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
    <option>Option 4</option>
    <option>Option 5</option>
  </select>
  <label class="block full-width mb2">
    <input type="checkbox" checked>
    Remember me
  </label>
  <button type="submit" class="button">Sign In</button>
  <button type="reset" class="button bg-gray">Cancel</button>
</form>
```

## Fieldsets
Fieldsets can be reset with `.fieldset-reset` to allow for easier styling of the fieldset and legend.

```html
<form class="sm-col-6">
  <fieldset class="fieldset-reset">
    <legend class="h3 bold">Fieldset Legend</legend>
    <label>Hamburger</label>
    <input type="text" class="block full-width field-light">
    <label>Hot Dog</label>
    <input type="text" class="block full-width field-light">
  </fieldset>
  <button type="sumbit" class="button">Submit</button>
</form>
```

## Default Variables
To customize base form field styles, use the following variables.

```css
:root {
  --form-field-font-size: 1rem;
  --form-field-height: 2.25rem;
  --form-field-padding-y: .5rem;
  --form-field-padding-x: .5rem;
}
```

