---
layout: example.11ty.cjs
title: <star-rating> ⌲ Examples ⌲ Name Property
tags: example
name: Display rating (non-interactive)
description: Display product rating
---

<style>
  .product-details{
    display: flex;
    flex-direction: column;
  }
  .product-example{
    border: 1px solid rgb(224, 224, 224);
    padding: 10px;
    max-width: 342px;
  }
  .product-rating{
    padding-top: 1rem;
  }

  h2{
    font-weight: bold;
    font-size: 16px;
  }
</style>
<div class="product-example">

  <div class="product-details">
    <div class="product-image">
    <img src="https://www.lego.com/cdn/cs/set/assets/blt00ba54004c17e820/10283.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1?format=webply&fit=bounds&quality=80&width=400&height=400&dpr=2" />
    </div>
    <h2>NASA Space Shuttle Discovery</h2>
    <div class="product-price">1599,00 kr.</div>
    <div class="product-rating">
        <star-rating  label="Rate this product" precision="0.1" style="--star-size: 1rem" max="5" value="4.3" readonly></star-rating>
        <span><b>4.3</b> (53)</span>
    </div>
  </div>
  
</div>
