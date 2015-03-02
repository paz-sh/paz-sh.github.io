# Basscss Defaults

Default variables and custom media queries for [Basscss](http://basscss.com). Includes colors from [mrmrs/colors](//clrs.cc).


```css
@custom-media --breakpoint-sm (min-width: 40em);
@custom-media --breakpoint-md (min-width: 52em);
@custom-media --breakpoint-lg (min-width: 64em);
```

```css
:root {
  --font-family: 'Helvetica Neue', Helvetica, sans-serif;
  --line-height: 1.5;
  --heading-font-family: var(--font-family);
  --heading-font-weight: bold;
  --heading-line-height: 1.25;
  --monospace-font-family: 'Source Code Pro', Consolas, monospace;
  --h1: 2rem;
  --h2: 1.5rem;
  --h3: 1.25rem;
  --h4: 1rem;
  --h5: .875rem;
  --h6: .75rem;
  --bold-font-weight: bold;
  --space-1: .5rem;
  --space-2: 1rem;
  --space-3: 2rem;
  --space-4: 4rem;
  --container-width: 64em;
  --dark-gray: var(--black);
  --mid-gray: var(--gray);
  --light-gray: var(--silver);
  --darken-1: rgba(#000,.0625);
  --darken-2: rgba(#000,.125);
  --darken-3: rgba(#000,.25);
  --darken-4: rgba(#000,.5);
  --border-width: 1px;
  --border-radius: 3px;
  --border-color: var(--darken-2);
  --hover-background-color: var(--darken-1)
}
```

