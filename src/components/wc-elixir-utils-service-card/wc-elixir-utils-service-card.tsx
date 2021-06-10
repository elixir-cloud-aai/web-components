import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-elixir-utils-service-card',
  styleUrl: 'wc-elixir-utils-service-card.css',
  shadow: true,
})
export class WcElixirUtilsServiceCard {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
