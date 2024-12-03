import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('sdk-component')
export class SDKComponent extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  override render() {
    return html` <div>Add some Maps SDK for JS content here</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sdk-component': SDKComponent;
  }
}
