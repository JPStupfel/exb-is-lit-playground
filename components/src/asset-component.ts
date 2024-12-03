import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('asset-component')
export class AssetComponent extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  override render() {
    return html` <div>Add some assets here</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'asset-component': AssetComponent;
  }
}
