import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-elixir-utils-manage-permissions',
  styleUrl: 'wc-elixir-utils-manage-permissions.css',
  shadow: true,
})
export class WcElixirUtilsManagePermissions {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
