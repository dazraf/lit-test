import { LitElement, html } from 'lit-element';

class FooElement extends LitElement {
  render() {
    return html`<div>hello, <slot></slot>!<div>`
  }
}
window.customElements.define('x-foo', FooElement);