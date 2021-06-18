import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'wc-elixir-utils-service-list',
  styleUrl: 'wc-elixir-utils-service-list.css',
  scoped: true,
})
export class WcElixirUtilsServiceList {
  @Prop() authToken?: any;

  render() {
    return (
      <Host>
        {/* <div class="border-gray-200 px-5 pb-5 shadow-md border-2 rounded">
          <div class="flex border-2 rounded-lg mt-2">
            <div class="title text-lg m-2">Service 1</div>
          </div>
          <div class="flex border-2 mt-2">
            <div class="title text-lg m-2">Service 1</div>
          </div>
          <div class="flex border-2 mt-2">
            <div class="title text-lg m-2">Service 1</div>
          </div>
          <div class="flex border-2 mt-2">
            <div class="title text-lg m-2">Service 1</div>
          </div>
          <div class="flex border-2 mt-2">
            <div class="title text-lg m-2">Service 1</div>
          </div>
        </div> */}
      </Host>
    );
  }
}
