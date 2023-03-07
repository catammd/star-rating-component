import { LitElement } from 'lit';
export default class RatingIcon extends LitElement {
    static styles: import("lit").CSSResult;
    private svg;
    /**
     * An alternate description to use for assistive devices. If omitted, the icon will be considered presentational and
     * ignored by assistive devices.
     */
    label: string;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    setLabel(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rating-icon': RatingIcon;
    }
}
//# sourceMappingURL=index.d.ts.map