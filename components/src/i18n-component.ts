import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * An example element.
 */
@customElement('i18n-component')
export class I18nComponent extends LitElement {
  static override styles = css`
    :host {
    }
  `;

  override render() {
    return html` <div>Add some translations here</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'i18n-component': I18nComponent;
  }
}
