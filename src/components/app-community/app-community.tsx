import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-community',
  styleUrl: 'app-community.css',
  shadow: true,
})
export class AppCommunity {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
