import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-service-component',
  styleUrl: 'app-service-component.css',
  scoped: true,
})
export class AppServiceComponent {
  render() {
    return (
      <Host>
        <wc-elixir-service></wc-elixir-service>
      </Host>
    );
  }
}
