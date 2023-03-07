---
layout: page.11ty.cjs
title: <star-rating> ⌲ Home
---

# &lt;star-rating>

`<star-rating>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<star-rating>` is just an HTML element. You can it anywhere you can use HTML!

```html
<star-rating></star-rating>
```

  </div>
  <div>

<star-rating></star-rating>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<star-rating>` can be configured with attributed in plain HTML.

```html
<star-rating name="HTML"></star-rating>
```

  </div>
  <div>

<star-rating name="HTML"></star-rating>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<star-rating>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;star-rating&gt;</h2>
    <star-rating .name=${name}></star-rating>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;star-rating&gt;</h2>
  <star-rating label="Rating" precision="0.5" value="3"></star-rating>

  </div>
</section>
