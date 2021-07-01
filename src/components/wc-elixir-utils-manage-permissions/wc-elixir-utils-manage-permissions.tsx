import { Component, Host, h, Prop, State } from '@stencil/core';
import ServiceList from '../../data/service';

@Component({
  tag: 'wc-elixir-utils-manage-permissions',
  styleUrl: 'wc-elixir-utils-manage-permissions.css',
  scoped: true,
})
export class WcElixirUtilsManagePermissions {
  @Prop() authToken: string;
  @State() service: any;

  componentWillLoad = () => {
    if (this.authToken == 'component-demo') {
      this.service = ServiceList[0];
    }
  };

  render() {
    if (!this.service) {
      return (
        <div class="text-center">
          <div class="text-gray-700">Loading...</div>
        </div>
      );
    }
    if (this.service.type != 'Owned') {
      return (
        <div class="flex text-red-400 justify-center font-semibold">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Sorry, You are not authorized to manage permission for this service.
        </div>
      );
    }
    return (
      <Host>
        <div class="text-center">
          <div class="text-lg font-semibold">Manage Permissions</div>
          <div class="text-gray-700">{this.service.name}</div>
        </div>
      </Host>
    );
  }
}
