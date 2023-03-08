/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {StarRating} from '../star-rating';

import {assert, expect, fixture} from '@open-wc/testing';
import {html} from 'lit/static-html.js';

suite('star-rating', () => {
  test('is defined', () => {
    const el = document.createElement('star-rating');
    assert.instanceOf(el, StarRating);
  });

  test('should pass accessibility tests', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating label="Test"></star-rating> `
    );
    await expect(el).to.be.accessible();

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('role')).to.equal('slider');
    expect(base.getAttribute('aria-disabled')).to.equal('false');
    expect(base.getAttribute('aria-readonly')).to.equal('false');
    expect(base.getAttribute('aria-valuenow')).to.equal('0');
    expect(base.getAttribute('aria-valuemin')).to.equal('0');
    expect(base.getAttribute('aria-valuemax')).to.equal('5');
    expect(base.getAttribute('tabindex')).to.equal('0');
    expect(base.getAttribute('class')).to.equal(' rating ');
  });

  test('renders with default values', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating value="3"></star-rating> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-valuenow')).to.equal('3');
  });

  test('renders as readonly when the readonly attribute is set', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating label="Test" readonly></star-rating> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-readonly')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' rating rating--readonly ');
  });

  test('renders as disabled when the disabled attribute is set', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating label="Test" disabled></star-rating> `
    );
    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    expect(base.getAttribute('aria-disabled')).to.equal('true');
    expect(base.getAttribute('class')).to.equal(' rating rating--disabled ');
  });

  test('should set focus state on inner div', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating label="Test"></star-rating> `
    );

    const base = el.shadowRoot!.querySelector<HTMLElement>('[part~="base"]')!;

    el.focus();
    await el.updateComplete;

    expect(el.shadowRoot!.activeElement).to.equal(base);
  });

  test('should remove focus state from inner div', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating label="Test"></star-rating> `
    );

    el.focus();
    await el.updateComplete;

    el.blur();
    await el.updateComplete;

    expect(el.shadowRoot!.activeElement).to.equal(null);
  });
});
