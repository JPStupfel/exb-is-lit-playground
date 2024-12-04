import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('map-component')
export class MapComponent extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  @property({ type: Object }) map = {};
  @property({ type: String }) item = '';

  override render() {
    return html`
      <button @click=${() => console.log('map', this.map)}>Log Map</button>
    `;
  }
}
// <button @click=${() => console.log('item', JimuMapView)}>Log Item</button>
// <div>Zoom Level: ${this.map?.view?.zoom ?? 'N/A'}</div>

declare global {
  interface HTMLElementTagNameMap {
    'map-component': MapComponent;
  }
}
