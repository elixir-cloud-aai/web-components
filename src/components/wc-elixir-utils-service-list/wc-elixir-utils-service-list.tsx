import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-elixir-utils-service-list',
  styleUrl: 'wc-elixir-utils-service-list.css',
  shadow: true,
})
export class WcElixirUtilsServiceList {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
