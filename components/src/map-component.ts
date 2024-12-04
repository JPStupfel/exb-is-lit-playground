import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('map-component')
export class MapComponent extends LitElement {
  static override styles = css`
    :host {
      #componentWrapper {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-top: 10px;
      }
    }
  `;

  @property({ type: Object }) map = {};
  @property({ type: String }) item = '';
  @property({ type: Number }) lat = 0;
  @property({ type: Number }) lng = 0;

  private _handleClick() {
    // @ts-ignore
  }

  private _handleMapClick() {
    // @ts-ignore
    this.map.on('click', (e) => {
      this.lat = e.mapPoint.latitude;
      this.lng = e.mapPoint.longitude;
    });
    // @ts-ignore
  }

  override render() {
    this._handleMapClick();
    return html`
      <div id="componentWrapper">
        <button @click=${this._handleClick}>Log Map</button>
        <div>
          Lat:
          ${
            // @ts-ignore
            this.lat
          }
        </div>
        <div>
          Lng:
          ${
            // @ts-ignore
            this.lng
          }
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'map-component': MapComponent;
  }
}
