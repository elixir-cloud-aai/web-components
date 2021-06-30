import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-manage-permission',
  styleUrl: 'app-manage-permission.css',
  shadow: true,
})
export class AppManagePermission {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
