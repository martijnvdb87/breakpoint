import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('app-button')
export class AppButton extends LitElement {
  @property({ type: String })
  type = 'play-pause'

  @property()
  onClick?: () => void;

  render() {
    return html`
      <button @click=${this.handleClick}>
        <div class="play-pause"></div>
      </button>
    `
  }

  private handleClick(event: MouseEvent) {
    this.onClick?.()
  }

  static styles = css`
    button {
      display: grid;
      place-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background-color: var(--primary-color);
      color: white;
      border: none;
      cursor: pointer;
    }

    .play-pause {
      position: relative;
      left: 0.125em;
      height: 2em;
      width: 1.5em;
      padding: 0px;
      border: none;
      background: transparent;
      transition: ease all 160ms;
    }

    .play-pause::before,
    .play-pause::after {
      position: absolute;
      top: 50%;
      display: block;
      content: "";
      width: 0em;
      border-style: solid;
      border-width: 0.5em 0em 0.5em 0.75em;
      border-color: transparent transparent transparent white;
      transform: translateY(-50%);
      transition: ease all 160ms;
    }

    .play-pause::before {
      left: 0%;
      height: 1em;
    }

    .play-pause::after {
      left: 50%;
      height: 0em;
    }

    button:hover .play-pause {
    }

    button:hover .play-pause::before {
      left: -0.125em;
    }

    button:hover .play-pause::before,
    button:hover .play-pause::after {
      height: 2em;
      border-width: 0em 0.5em 0em 0.5em;
    }

    button:hover .play-pause::after {
      left: 66.666%;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'app-button': AppButton
  }
}
