import { Component, Host, h, Prop, State } from '@stencil/core';

const ServiceList = [
  {
    name: 'Service 1',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 1',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',

    id: 'org.ga4gh.myservice',
  },
  {
    name: 'Service 2',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 2',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice',
  },
  {
    name: 'Service 3',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 3',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice',
  },
  {
    name: 'Service 4',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice',
  },
];
@Component({
  tag: 'wc-elixir-utils-service-list',
  styleUrl: 'wc-elixir-utils-service-list.css',
  scoped: true,
})
export class WcElixirUtilsServiceList {
  @Prop() authToken?: any;
  @State() serviceIsOpen: boolean[];

  componentWillLoad = () => {
    let tempServiceIsOpen: boolean[] = [];
    ServiceList.forEach(() => {
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
    console.log(this.serviceIsOpen);
    return ServiceList.map((service, index) => {
      return (
        <div class={`flex-row border-2 rounded-lg hover:shadow-md mt-2 px-3 py-2 ${this.serviceIsOpen[index] ? 'shadow-md' : ''}`}>
          <div class={`flex justify-between cursor-pointer focus:outline-none ${this.serviceIsOpen[index] ? 'border-b-2 pb-2' : ''}`} onClick={() => this.toggleOpen(index)}>
            <div class={`title text-lg font-semibold`}>{service.name}</div>
            <div class="mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
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
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <Host>
        <div class="border-gray-200 px-5 pb-5">{this.renderServices()}</div>
      </Host>
    );
  }
}
