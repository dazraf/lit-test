import { LitElement, html } from 'lit-element';

class FooElement extends LitElement {
  render() {
    return html`<div>hello world!</div>`;
  }
}
window.customElements.define('x-foo', FooElement);
