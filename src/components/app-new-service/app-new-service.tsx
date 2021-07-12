import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-new-service',
  styleUrl: 'app-new-service.css',
  shadow: true,
})
export class AppNewService {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
