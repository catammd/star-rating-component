---
layout: page.11ty.cjs
title: <star-rating> ⌲ Install
---

# Install

`<star-rating>` is distributed on npm, so you can install it locally or use it via npm CDNs like unpkg.com.

## Local Installation

```bash
npm i star-rating
```

## CDN

npm CDNs like [unpkg.com]() can directly serve files that have been published to npm. This works great for standard JavaScript modules that the browser can load natively.

For this element to work from unpkg.com specifically, you need to include the `?module` query parameter, which tells unpkg.com to rewrite "bare" module specifiers to full URLs.

### HTML

```html
<script type="module" src="https://unpkg.com/star-rating?module"></script>
```

### JavaScript

```html
import {StarRating} from 'https://unpkg.com/star-rating?module';
```
