import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('breakpoint-app')
export class BreakpointApp extends LitElement {
  render() {
    return html`
      <h1>Breakpoint</h1>
      <app-button .onClick=${() => console.log('clicked')} />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'breakpoint-app': BreakpointApp
  }
}
