import { Component, State, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-elixir-service',
  styleUrl: 'wc-elixir-service.css',
  scoped: true,
})
export class WcElixirService {
  @State() showManagePermission: boolean = false;
  @State() showAddService: boolean = false;
  @State() serviceName: string = '';

  handleShowManagePermission = (id, name) => {
    console.log(id, name);
    this.serviceName = name;
    console.log(this.serviceName);
    this.showManagePermission = !this.showManagePermission;
  };

  handleShowAddService = () => {
    this.showAddService = !this.showAddService;
  };

  render() {
    if (this.showManagePermission) {
      return (
        <div>
          <div class="text-center">
            <div class="text-lg font-semibold">Manage Permissions</div>
            <div class="text-gray-700">{this.serviceName}</div>
          </div>
          <br></br>
          <wc-elixir-utils-manage-permissions authToken="component-demo"></wc-elixir-utils-manage-permissions>
        </div>
      );
    }
    if (this.showAddService) {
      return (
        <div>
          <div class="text-center">
            <div class="text-lg font-semibold">Create new serivce</div>
          </div>
          <br></br>
          <wc-elixir-utils-new-service apiUrl="https://trs-filer-test.rahtiapp.fi/ga4gh/trs/v2/openapi.json" schema="ServiceRegister"></wc-elixir-utils-new-service>
        </div>
      );
    }
    return (
      <Host>
        <div class="text-center">
          <div class="text-lg font-semibold">Service Manager</div>
        </div>
        <br></br>
        <wc-elixir-utils-service-list itemsPerPage={5} authToken="component-demo" handleShowManagePermission={this.handleShowManagePermission}></wc-elixir-utils-service-list>
        <br></br>
        <button class="bg-primary rounded-lg px-4 py-2 md:mr-2 my-2 text-white hover:shadow-lg focus:outline-none w-full" onClick={() => this.handleShowAddService()}>
          Create new service
        </button>
      </Host>
    );
  }
}
