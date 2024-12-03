import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('map-component')
export class MapComponent extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  override render() {
    return html` <div>Add some map components here</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-component': MapComponent;
  }
}
