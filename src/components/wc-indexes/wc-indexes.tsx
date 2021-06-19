import { Component, Host, h, State } from '@stencil/core';
import { indexType } from '../../types';
import indexes from '../../indexes';
import Router from '../../router';

@Component({
  tag: 'wc-indexes',
  styleUrl: 'wc-indexes.css',
  scoped: true,
})
export class WcIndexes {
  @State() navOpen: Boolean = false;

  toggleIndex = (index: number) => {
    const subIndexes = document.querySelector(`.index-${index}`);
    subIndexes.classList.toggle('hidden');
  };

  renderIndex = () => {
    return (
      <div>
        {indexes.map((index: indexType, i: number) => {
          return (
            <div>
              <button
                class="block pt-2.5 pb-1 text-base font-semibold mx-4 transition duration-200 focus:outline-none focus:shadow-outline hover:text-primary"
                onClick={() => this.toggleIndex(i)}
              >
                {index.display}
              </button>
              <div class={`index-${i} ml-10`}>
                {index.subIndexes
                  ? index.subIndexes.map(subIndex => {
                      return (
                        <button
                          class={`block text-base py-1 transition duration-200 focus:outline-none focus:shadow-outline hover:text-primary ${
                            Router.activePath == subIndex.url ? 'text-primary' : ''
                          }`}
                          onClick={() => Router.push(subIndex.url)}
                        >
                          {subIndex.display}
                        </button>
                      );
                    })
                  : ''}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  handleToggleNav = () => {
    const nav = document.querySelector('.wc-sidebar');
    nav.classList.toggle('-translate-x-full');
    this.navOpen = !this.navOpen;
  };

  render() {
    return (
      <Host>
        <div class="flex justify-between ">
          <button
            class="mobile-menu-button pl-4 focus:outline-none md:hidden"
            onClick={() => {
              this.handleToggleNav();
            }}
          >
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div
          class={`wc-sidebar w-64 space-y-6 m-0 md:m-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ${
            this.navOpen ? 'bg-black text-blue-100 w-max p-5' : ''
          }`}
        >
          <nav class="relative">
            {this.navOpen ? (
              <div>
                <button class="absolute top-0 right-0 focus:outline-none focus:shadow-outline" onClick={() => this.handleToggleNav()}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <br></br>
                <br></br>
              </div>
            ) : (
              ''
            )}
            <input
              class="focus:shadow-md focus:border-gray-300 border rounded-lg  py-2 px-3 text-gray-500 focus:text-gray-700 focus:outline-none focus:shadow-outline w-full"
              type="text"
              autocomplete="off"
              placeholder="Search Docs"
            />
            {this.renderIndex()}
          </nav>
        </div>
      </Host>
    );
  }
}
