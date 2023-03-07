---
layout: page.11ty.cjs
title: <star-rating> ⌲ Home
---

# &lt;star-rating>

`<star-rating>` is an awesome webcomponent. It's a great introduction to building web components with LitElement, with nice documentation site as well.

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

## Support for custom states

<section class="columns">
  <div>

`<star-rating>` can have active/hover or focused or disabled states.

```html
<star-rating label="Rating"></star-rating>
```

  </div>
  <div>

<p>Inactive, hover</p>
<star-rating precision="0.5" value="3"></star-rating><br>
<p>Focus</p>
<star-rating precision="0.5" value="1.5" id="hasFocus"></star-rating><br>
<p>Disabled</p>  
<star-rating precision="0.5" value="3" style="--star-color-active: #6e6e6e"disabled></star-rating><br>
 <script>
      window.onload = function () {
        var input = document.getElementById("hasFocus").focus();
      };
    </script>
  </div>
</section>

## Built with accesibility in mind

<section class="columns">
  <div>

`<star-rating>` accepts label attributes so you should always set a label to provide necessary info for assistive devices.

```html
<star-rating label="Rate this product"></star-rating>
```

  </div>
  <div>
</section>
<section class="columns">
  <div>

`<star-rating>` has support for both mouse and keyboard navigation

```html
<star-rating label="Rating"></star-rating>
```

  </div>
  <div>

<p>Use left(&#8592;) and right(&#8594;) or up(&#8593;) and down(&#8595;) keys to create a rating</p>
<star-rating precision="0.5" value="0"></star-rating><br>
  </div>
</section>

## Support for custom precision

<section class="columns">
  <div>

`<star-rating>` can be configured with attributes to specific precision, value, size and colors.

```html
<star-rating precision="0.5"></star-rating>
```

  </div>
  <div>

<star-rating precision="0.5" value="0"></star-rating><br>
<star-rating precision="0.5" value="1.5"></star-rating><br>
<star-rating precision="0.5" value="2"></star-rating><br>
<star-rating precision="1" value="3"></star-rating><br>
<star-rating precision="0.1" value="3.6"></star-rating><br>
<star-rating precision="0.5" value="4.5"></star-rating>

  </div>
</section>

## Support for custom sizes

<section class="columns">
  <div>

`<star-rating>` can be configured with to custom size via CSS variables.

```html
<star-rating
  label="Rating"
  precision="0.5"
  value="3"
  style="--star-size: 16px"
></star-rating>
```

  </div>
  <div>

<p>Large (L)</p>
<star-rating precision="0.5" value="3"></star-rating><br>
<p>Medium (M)</p>
<star-rating precision="0.5" value="1.5" style="--star-size: 16px"></star-rating><br>
<p>Small (S)</p>  
<star-rating precision="0.5" value="3" style="--star-size: 12px"></star-rating><br>

  </div>
</section>
