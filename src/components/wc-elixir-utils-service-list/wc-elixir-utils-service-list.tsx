import { Component, Host, h, Prop, State } from '@stencil/core';

const ServiceList = [
  {
    name: 'Service 1',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
  },
  {
    name: 'Service 2',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
  },
  {
    name: 'Service 3',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
  },
  {
    name: 'Service 4',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
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
            <a class="text-primary text-xs font-bold cursor-pointer border-b-2 border-white transition ease-out duration-500 hover:border-primary">{service.documentationUrl}</a>
            <div class="text-gray-500">{service.desription}</div>
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
