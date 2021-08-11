import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-elixir-service',
  styleUrl: 'wc-elixir-service.css',
  scoped: true,
})
export class WcElixirService {
  render() {
    return (
      <Host>
        <wc-elixir-utils-service-list itemsPerPage={5} authToken="component-demo"></wc-elixir-utils-service-list>
      </Host>
    );
  }
}
