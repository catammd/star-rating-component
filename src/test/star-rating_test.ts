/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {StarRating} from '../star-rating';

import {assert, expect, fixture} from '@open-wc/testing';
import {sendKeys} from '@web/test-runner-commands';
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

  test('should increase value when using the right arrow on the keyboard', async () => {
    const el = await fixture<StarRating>(html` <star-rating></star-rating> `);

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'ArrowRight'});
    await el.updateComplete;

    expect(el.value).to.equal(1);
  });

  test('should increase value when using the up arrow on the keyboard', async () => {
    const el = await fixture<StarRating>(html` <star-rating></star-rating> `);

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'ArrowUp'});
    await el.updateComplete;

    expect(el.value).to.equal(1);
  });

  test('should remove rating value when using the Home button on the keyboard', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating value="3"></star-rating> `
    );

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'Home'});
    await el.updateComplete;

    expect(el.value).to.equal(0);
  });

  test('should increase value with half step precision when using the right arrow on the keyboard', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating precision="0.5"></star-rating> `
    );

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'ArrowRight'});
    await el.updateComplete;

    expect(el.value).to.equal(0.5);
  });

  test('should decrease value when using the left arrow on the keyboard', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating value="3"></star-rating> `
    );

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'ArrowLeft'});
    await el.updateComplete;

    expect(el.value).to.equal(2);
  });

  test('should decrease value when using the down arrow on the keyboard', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating value="3"></star-rating> `
    );

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'ArrowDown'});
    await el.updateComplete;

    expect(el.value).to.equal(2);
  });

  test('should set rating value to max when using the End key on the keyboard', async () => {
    const el = await fixture<StarRating>(html` <star-rating></star-rating> `);

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'End'});
    await el.updateComplete;

    expect(el.value).to.equal(5);
  });

  test('should decrease value with half step precision when using the lef arrow on the keyboard', async () => {
    const el = await fixture<StarRating>(
      html` <star-rating precision="0.5" value="3"></star-rating> `
    );

    el.focus();
    await el.updateComplete;
    await sendKeys({press: 'ArrowLeft'});
    await el.updateComplete;

    expect(el.value).to.equal(2.5);
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
