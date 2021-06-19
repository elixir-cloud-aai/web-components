import { Component, Host, h } from '@stencil/core';
import Router from '../../router';

@Component({
  tag: 'wc-docs',
  styleUrl: 'wc-docs.css',
  scoped: true,
})
export class WcDocs {
  renderContent = () => {
    switch (Router.url.pathname) {
      case '/docs/components/service-list':
        return <wc-elixir-utils-service-list></wc-elixir-utils-service-list>;
      default:
        break;
    }
  };

  render() {
    return (
      <Host>
        <div class="relative min-h-screen md:flex">
          <wc-indexes></wc-indexes>
          <div class="flex-1 m-5 md:m-10 overflow-y-visible">{this.renderContent()}</div>
        </div>
      </Host>
    );
  }
}
