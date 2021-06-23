import { Component, Host, h, Prop, State } from '@stencil/core';
import ServiceList from '../../data/service';

@Component({
  tag: 'wc-elixir-utils-service-list',
  styleUrl: 'wc-elixir-utils-service-list.css',
  scoped: true,
})
export class WcElixirUtilsServiceList {
  @Prop() authToken?: any;
  @Prop() itemsPerPage?: number = 5;
  @State() serviceIsOpen: boolean[];
  @State() page: number = 0;
  @State() searchService: string = '';
  @State() services: any[] = ServiceList;

  componentWillLoad = () => {
    let tempServiceIsOpen: boolean[] = [];
    this.services.forEach(() => {
      tempServiceIsOpen = [...tempServiceIsOpen, false];
    });
    this.serviceIsOpen = [...tempServiceIsOpen];
  };

  toggleOpen = (index: number) => {
    let tempServiceIsOpen: boolean[] = this.serviceIsOpen;
    tempServiceIsOpen[index] = !tempServiceIsOpen[index];
    this.serviceIsOpen = [...tempServiceIsOpen];
  };

  renderServices = () => {
    var services = this.services;
    services = services.filter(service => service.name.toLowerCase().includes(this.searchService.toLowerCase()));
    var startIndex = this.page * this.itemsPerPage;
    var endIndex = startIndex + this.itemsPerPage;
    return services.map((service, index) => {
      if (index < endIndex && index >= startIndex) {
        return (
          <div class={`flex-row border-2 border-gray-100 rounded-lg hover:shadow-md mt-2 px-3 py-2 ${this.serviceIsOpen[index] ? 'shadow-md' : 'shadow-sm'}`}>
            <div class={`flex justify-between cursor-pointer focus:outline-none ${this.serviceIsOpen[index] ? 'border-b-2 pb-2' : ''}`} onClick={() => this.toggleOpen(index)}>
              <div class={`title text-lg font-semibold`}>{service.name}</div>
              <div class="mt-0.5">
                <span class="text-xs italic font-extralight mr-2">{service.type}</span>
                {this.serviceIsOpen[index] ? (
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div class={`wc-service-index-${index} ${this.serviceIsOpen[index] ? '' : 'hidden'} pt-2`}>
              <a
                href={service.documentationUrl}
                class="text-primary text-xs font-bold cursor-pointer border-b-2 border-white transition ease-out duration-500 hover:border-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {service.documentationUrl}
              </a>
              <div class="text-gray-500">{service.desription}</div>
              <br></br>
              <div>
                <div class="">
                  <span class="">Service Id:</span> <span class="font-mono">{service.id}</span>
                </div>
                <div class="text-base">
                  <span class="">Organization:</span> {service.organization.name}{' '}
                  <a href={service.organization.url} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mb-1 ml-2 text-primary inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </a>
                  <a href={service.contactUrl} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mb-1 ml-1.5 text-primary inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </a>
                </div>
                <div class="text-base">
                  <span class="">Version:</span> <span class="font-mono">{service.version}</span>
                </div>
              </div>
              <br></br>
              <div class="text-sm">
                {service.type ? (
                  service.type == 'Owned' ? (
                    <div class="md:flex md:justify-between">
                      <div>
                        <button class="bg-primary rounded-lg px-4 py-2 md:mr-4 my-2 text-white hover:shadow-lg focus:outline-none w-full md:w-auto">Edit Service</button>
                        <button class="bg-secondary rounded-lg px-4 py-2 md:mr-2 my-2 text-white hover:shadow-lg focus:outline-none w-full md:w-auto">Manage Permission</button>
                      </div>
                      <div>
                        <button class="bg-red-500 rounded-lg px-4 py-2 md:mx-2 my-2 text-white hover:shadow-lg focus:outline-none w-full md:w-auto">Revoke Authorization</button>
                        <button class="bg-gray-300 rounded-lg px-4 py-2 md:mx-2 my-2 text-gray-500 hover:shadow-lg focus:outline-none w-full md:w-auto">Remove Service</button>
                      </div>
                    </div>
                  ) : (
                    <div class="md:flex md:justify-end">
                      <button class="bg-red-500 rounded-lg px-4 py-2 md:mx-2 my-2 text-white hover:shadow-lg focus:outline-none w-full md:w-auto">Revoke Authorization</button>
                      <button class="bg-gray-300 rounded-lg px-4 py-2 md:mx-2 my-2 text-gray-500 hover:shadow-lg focus:outline-none w-full md:w-auto">Remove Service</button>
                    </div>
                  )
                ) : (
                  <div class="flex justify-end">
                    <button class="bg-secondary rounded-lg px-4 py-2 md:mx-2 my-2 text-white hover:shadow-lg focus:outline-none w-full md:w-auto">Add Service</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }
    });
  };

  renderPagination = () => {
    var services = this.services;
    services = services.filter(service => service.name.toLowerCase().includes(this.searchService.toLowerCase()));
    let totalPages = Math.ceil(services.length / this.itemsPerPage);
    let selected = [true];
    for (let index = 0; index < totalPages - 1; index++) {
      selected = [...selected, false];
    }
    return (
      <div class="flex justify-center align-middle">
        <button
          class={`p-1.5 shadow rounded-full border-2 hover:shadow-lg focus:outline-none border-gray-100 h-9 w-9 mr-3 ${this.page == 0 ? 'invisible' : ''}`}
          onClick={() => (this.page = this.page - 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </button>

        {selected.map((_isSelected, index) => {
          return (
            <button
              class={`mx-1 p-1 shadow rounded-lg hover:shadow-lg focus:outline-none h-9 w-9 ${this.page == index ? 'bg-primary text-white' : ''}`}
              onClick={() => {
                this.page = index;
              }}
            >
              {index + 1}
            </button>
          );
        })}

        <button
          class={`p-1.5 shadow rounded-full border-2 hover:shadow-lg focus:outline-none border-gray-100 h-9 w-9 ml-3 ${this.page == totalPages - 1 ? 'invisible' : ''}`}
          onClick={() => (this.page = this.page + 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    );
  };

  handleSearchQuery = e => {
    this.searchService = (e.target as HTMLInputElement).value;
  };

  renderSearchBar = () => {
    return (
      <div class="flex">
        <input
          class="w-full text-sm border-2 py-2 px-3 focus:outline-none rounded-lg focus:shadow"
          placeholder="Search by service name..."
          value={this.searchService}
          onInput={e => this.handleSearchQuery(e)}
        ></input>
        {/* <button>Filter</button> */}
      </div>
    );
  };

  render() {
    return (
      <Host>
        {this.renderSearchBar()}
        <div class="border-gray-200">{this.renderServices()}</div>
        <br></br>
        {this.renderPagination()}
      </Host>
    );
  }
}
