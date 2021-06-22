import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-service-list',
  styleUrl: 'app-service-list.css',
  scoped: true,
})
export class AppServiceList {
  render() {
    return (
      <Host>
        <div class="text-4xl font-semibold">Service List Component</div>
        <div class="mt-10">
          <div class="border-gray-100 rounded-lg p-3 border-2">
            <div class="text-sm font-semibold w-full border-b-2 border-gray-100 pb-2">Component Demo</div>
            <div class="mt-4">
              <wc-elixir-utils-service-list></wc-elixir-utils-service-list>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
