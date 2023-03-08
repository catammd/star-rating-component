/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {classMap} from 'lit/directives/class-map.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import './star-icon/index';
import {watch} from './utilities/watch';

/**
 * @summary Rating component
 *
 * @cssproperty --star-color - The inactive color for rating stars.
 * @cssproperty --star-color-active - The active color for rating stars.
 * @cssproperty --star-size - The size of star.
 * @cssproperty --star-spacing - The spacing to use around stars.
 */
@customElement('star-rating')
export class StarRating extends LitElement {
  static override styles = css`
    :host {
      --color-blue: #0ea5e9;
      --color-gray: #ccc;
      --color-active: #f2a702;
      --spacing-small: 2px;
      --star-color: var(--color-gray);
      --star-color-active: var(--color-active);
      --star-size: 1.2rem;
      --star-spacing: var(--spacing-small);
      --focus-color: var(--color-blue);
      --focus-style: solid;
      --focus-width: 2px;
      --focus-offset: 1px;
      --border-radius-medium: 0.25rem;
      --focus-ring: var(--focus-style) var(--focus-width) var(--focus-color);

      display: inline-flex;
    }
    .rating {
      position: relative;
      display: inline-flex;
      border-radius: var(--border-radius-medium);
      vertical-align: middle;
    }

    .rating:focus {
      outline: none;
    }

    .rating:focus-visible {
      outline: var(--focus-ring);
      outline-offset: var(--focus-offset);
    }

    .rating__symbols {
      display: inline-flex;
      position: relative;
      font-size: var(--star-size);
      line-height: 0;
      color: var(--star-color);
      white-space: nowrap;
      cursor: pointer;
    }

    .rating__symbols > * {
      padding: var(--star-spacing);
    }

    .rating__symbols--indicator {
      position: absolute;
      top: 0;
      left: 0;
      color: var(--star-color-active);
      pointer-events: none;
    }

    .rating--disabled .rating__symbols,
    .rating--readonly .rating__symbols {
      cursor: default;
    }

    .rating--disabled {
      opacity: 0.5;
    }

    .rating--disabled .rating__symbols {
      cursor: not-allowed;
    }
  `;
  /**
   * Label to describe the rating for accesibility purposes.
   */
  @property() label = '';
  /**
   * Value of the current rating
   */
  @property({type: Number}) value = 0;
  /**
   * Max amount of stars in the rating
   */
  @property({type: Number}) max = 5;
  /**
   * The precision at which the rating will increase and decrease. For example, to allow half-star ratings, set this
   * attribute to `0.5`.
   */
  @property({type: Number}) precision = 1;
  /**
   * Rating readonly mode
   */
  @property({type: Boolean, reflect: true}) readonly = false;
  /**
   * Rating disabled mode
   */
  @property({type: Boolean, reflect: true}) disabled = false;

  @query('.rating')
  rating!: HTMLElement;

  @state() private hoverValue = 0;
  @state() private isHovering = false;

  private getSymbol: (value: number) => string = () =>
    `<rating-icon label="This is a rating"></rating-icon>`;

  private getValueFromMousePosition(event: MouseEvent) {
    return this.getValueFromXCoordinate(event.clientX);
  }

  private getValueFromXCoordinate(coordinate: number) {
    const {left, width} = this.rating.getBoundingClientRect();
    const value = this.roundToPrecision(
      ((coordinate - left) / width) * this.max,
      this.precision
    );

    return this.ensureNumberBetweenMinAndMax(value, 0, this.max);
  }

  private roundToPrecision(numberToRound: number, precision = 0.5) {
    const multiplier = 1 / precision;
    return Math.ceil(numberToRound * multiplier) / multiplier;
  }

  private ensureNumberBetweenMinAndMax(
    value: number,
    min: number,
    max: number
  ) {
    const noNegativeZero = (n: number) => (Object.is(n, -0) ? 0 : n);

    if (value < min) {
      return noNegativeZero(min);
    }

    if (value > max) {
      return noNegativeZero(max);
    }

    return noNegativeZero(value);
  }

  private handleClick(event: MouseEvent) {
    if (this.disabled) {
      return;
    }

    this.setValue(this.getValueFromMousePosition(event));
    this.dispatchEvent(new CustomEvent('rating-change'));
  }

  private setValue(newValue: number) {
    if (this.disabled || this.readonly) {
      return;
    }

    this.value = newValue === this.value ? 0 : newValue;
    this.isHovering = false;
  }
  /**
   * Accesibility: enable rating via Keyboard events
   *
   */
  private handleKeyDown(event: KeyboardEvent) {
    const oldValue = this.value;

    if (this.disabled || this.readonly) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowLeft') {
      const decrement = event.shiftKey ? 1 : this.precision;
      this.value = Math.max(0, this.value - decrement);
      event.preventDefault();
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowRight') {
      const increment = event.shiftKey ? 1 : this.precision;
      this.value = Math.min(this.max, this.value + increment);
      event.preventDefault();
    }

    if (event.key === 'Home') {
      this.value = 0;
      event.preventDefault();
    }

    if (event.key === 'End') {
      this.value = this.max;
      event.preventDefault();
    }

    if (this.value !== oldValue) {
      this.dispatchEvent(new CustomEvent('rating-change'));
    }
  }
  private handleMouseEnter(event: MouseEvent) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromMousePosition(event);
  }

  private handleMouseMove(event: MouseEvent) {
    this.hoverValue = this.getValueFromMousePosition(event);
  }

  private handleMouseLeave() {
    this.isHovering = false;
  }

  private getValueFromTouchPosition(event: TouchEvent) {
    return this.getValueFromXCoordinate(event.touches[0].clientX);
  }

  private handleTouchStart(event: TouchEvent) {
    this.isHovering = true;
    this.hoverValue = this.getValueFromTouchPosition(event);
    event.preventDefault(); // Prevent scrolling when touch is initiated
  }

  private handleTouchMove(event: TouchEvent) {
    this.hoverValue = this.getValueFromTouchPosition(event);
  }

  private handleTouchEnd(event: TouchEvent) {
    this.isHovering = false;
    this.setValue(this.hoverValue);
    this.dispatchEvent(new CustomEvent('rating-change'));
    event.preventDefault(); // Prevent click on mobile devices
  }

  @watch('hoverValue')
  handleHoverValueChange() {
    const event = new CustomEvent('rating-hover', {
      detail: {
        phase: 'move',
        value: this.hoverValue,
      },
    });
    this.dispatchEvent(event);
  }

  @watch('isHovering')
  handleIsHoveringChange() {
    const event = new CustomEvent('rating-hover', {
      detail: {
        phase: this.isHovering ? 'start' : 'end',
        value: this.hoverValue,
      },
    });
    this.dispatchEvent(event);
  }

  /** Sets focus on the rating. */
  override focus(options?: FocusOptions) {
    this.rating.focus(options);
  }

  /** Removes focus from the rating. */
  override blur() {
    this.rating.blur();
  }

  override render() {
    const counter = Array.from(Array(this.max).keys());
    let displayValue = 0;

    if (this.disabled || this.readonly) {
      displayValue = this.value;
    } else {
      displayValue = this.isHovering ? this.hoverValue : this.value;
    }
    return html` <div
      part="base"
      class=${classMap({
        rating: true,
        'rating--readonly': this.readonly,
        'rating--disabled': this.disabled,
      })}
      role="slider"
      aria-label=${this.label}
      aria-disabled=${this.disabled ? 'true' : 'false'}
      aria-readonly=${this.readonly ? 'true' : 'false'}
      aria-valuenow=${this.value}
      aria-valuemin=${0}
      aria-valuemax=${this.max}
      tabindex=${this.disabled ? '-1' : '0'}
      @click=${this.handleClick}
      @keydown=${this.handleKeyDown}
      @mouseenter=${this.handleMouseEnter}
      @touchstart=${this.handleTouchStart}
      @mouseleave=${this.handleMouseLeave}
      @touchend=${this.handleTouchEnd}
      @mousemove=${this.handleMouseMove}
      @touchmove=${this.handleTouchMove}
    >
      <span class="rating__symbols rating__symbols--inactive">
        ${counter.map((index) => {
          // Users can click the current value to clear the rating. When this happens, we set this.isHovering to
          // false to prevent the hover state from confusing them as they move the mouse out of the control. This
          // extra mouseenter will reinstate it if they happen to mouse over an adjacent symbol.
          return html`
            <span
              class=${classMap({
                rating__symbol: true,
                'rating__symbol--hover':
                  this.isHovering && Math.ceil(displayValue) === index + 1,
              })}
              role="presentation"
              @mouseenter=${this.handleMouseEnter}
            >
              ${unsafeHTML(this.getSymbol(index + 1))}
            </span>
          `;
        })}
      </span>
      <span class="rating__symbols rating__symbols--indicator">
        ${counter.map((index) => {
          return html`
            <span
              class=${classMap({
                rating__symbol: true,
                'rating__symbol--hover':
                  this.isHovering && Math.ceil(displayValue) === index + 1,
              })}
              style=${styleMap({
                clipPath:
                  displayValue > index + 1
                    ? 'none'
                    : `inset(0 ${
                        100 - ((displayValue - index) / 1) * 100
                      }% 0 0)`,
              })}
              role="presentation"
            >
              ${unsafeHTML(this.getSymbol(index + 1))}
            </span>
          `;
        })}
      </span>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'star-rating': StarRating;
  }
}
