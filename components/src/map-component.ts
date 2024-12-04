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

  @property({ type: String }) map = 'hello';

  override render() {
    return html` <div>Add some map components here ${this.map}</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-component': MapComponent;
  }
}
