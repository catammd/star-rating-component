/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {StarRating} from '../star-rating';

import {assert} from '@open-wc/testing';
// import {fixture, assert} from '@open-wc/testing';
// import {html} from 'lit/static-html.js';

suite('star-rating', () => {
  test('is defined', () => {
    const el = document.createElement('star-rating');
    assert.instanceOf(el, StarRating);
  });

  // test('renders with default values', async () => {
  //   const el = await fixture(html`<star-rating></star-rating>`);
  //   assert.shadowDom.equal(
  //     el,
  //     `
  //     <h1>Hello, World!</h1>
  //     <button part="button">Click Count: 0</button>
  //     <slot></slot>
  //   `
  //   );
  // });
});
