import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('calcite-component')
export class CalciteComponent extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  override render() {
    return html` <div>Add some calcite components here</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'calcite-component': CalciteComponent;
  }
}
