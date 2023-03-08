---
layout: example.11ty.cjs
title: <star-rating> ⌲ Examples ⌲ Basic
tags: example
name: display rating value on hover
description: Interactive example
---

<style>
  star-rating p {
    border: solid 1px blue;
    padding: 8px;
  }
  .form-example{
    background-color: whitesmoke;
    border: 1px solid #ccc;
    padding: 20px;
  }
  textarea{
    width: 100%;
    height: 100px;
  }
  .rating-hover {
    display:flex;
    justify-content: center;
    position: relative;
    width:220px;
  }
  .rating-hover span {
    position: absolute;
    top: -45px;
    border-radius: 4px;
    background: #222;
    color: white;
    text-align: center;
    padding: 8px 12px;
  }
  .rating-hover span::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -8px;
    border-width: 8px;
    border-style: solid;
    border-color: #222 transparent transparent transparent;
  }
  .rating-hover span:empty {
    display: none;
  }
</style>
<div class="form-example">
  <h3>We've received your registration!</h3>
  <p>We value your input and would appreciate if you took the time to rate your experience.</p>
  <div class="rating-hover">
    <star-rating  label="Rate this product" precision="0.5" style="--star-size: 2.5rem" max="5"></star-rating>
    <span></span>
  </div>
  
  <p>Any additional comments?</p>
  <textarea name='review' maxlength='100' placeholder='Enter your comments here'></textarea>
</div>
<script>
  const rating = document.querySelector('.rating-hover > star-rating');
  const span = rating.nextElementSibling;
  rating.addEventListener('rating-hover', event => {
  span.textContent = `${event.detail.value}/${rating.getAttribute("max")}`;
  // Clear feedback when hovering stops
      if (event.detail.phase === 'end') {
        span.textContent = '';
      }
  });
</script>
