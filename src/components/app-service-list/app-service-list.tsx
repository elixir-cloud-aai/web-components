import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-service-list',
  styleUrl: 'app-service-list.css',
  scoped: true,
})
export class AppServiceList {
  render() {
    // let props = [
    //   {
    //     name: 'authToken',
    //     type: 'string',
    //     default: '-',
    //   },
    //   {
    //     name: 'itemsPerPage',
    //     type: 'number',
    //     default: '5',
    //   },
    // ];
    return (
      <Host>
        <div class="text-3xl font-semibold mb-5">Service List Component</div>
        <div class=" my-10">
          <div class="border-gray-100 rounded-lg p-3 border-2 my-10">
            <div class="text-sm font-semibold w-full border-b-2 border-gray-100 pb-2">Component Demo</div>
            <div class="mt-4">
              <wc-elixir-utils-service-list></wc-elixir-utils-service-list>
            </div>
          </div>
          <div class="text-3xl my-5">Usage</div>
          <div class="text-2xl mt-5">Principle</div>
          <div class="my-3 leading-7">
            Service list component list out all the service's avaliable to the user. All the services shown to the user can be classified into three main categories:-
            <ul class="mt-1">
              <li>Owned: Services which are owened by the user.</li>
              <li>Added: Services which are added by the user.</li>
              <li>Services which are avaliable to the user to add.</li>
            </ul>
          </div>
          <div class="text-2xl mt-5">Implementation</div>
          <div class="my-3 leading-7">
            This component can we used by:
            <button class="bg-gray-100 py-1 px-2 rounded-lg ml-2 cursor-text focus:outline-none">&lt;wc-elixir-utils-service-list&gt;</button>
          </div>
          <div>
            <div class="my-10">
              <div class="text-2xl">Props</div>
              <div class="my-3 leading-7">
                <div class="grid grid-cols-3 gap-4">
                  <div>Prop Name</div>
                  <div>Type</div>
                  <div>Deafault</div>
                  <div>authToken</div>
                  <div class="font-mono">string</div>
                  <div></div>
                  <div>itemsPerPage</div>
                  <div class="font-mono">number</div>
                  <div>5</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
