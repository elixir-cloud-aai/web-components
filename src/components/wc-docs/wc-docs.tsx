import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'wc-docs',
  styleUrl: 'wc-docs.css',
  scoped: true,
})
export class WcDocs {
  @State() navOpen: Boolean = false;

  handleToggleNav = () => {
    const nav = document.querySelector('.sidebar');
    if (this.navOpen) {
      nav.classList.toggle('-translate-x-full');
    } else {
      nav.classList.toggle('-translate-x-full');
    }
    this.navOpen = !this.navOpen;
  };

  render() {
    return (
      <Host>
        <div class="relative min-h-screen md:flex">
          <div class="flex justify-between md:hidden">
            <button
              class="mobile-menu-button pl-4 focus:outline-none"
              onClick={() => {
                this.handleToggleNav();
              }}
            >
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <input
              class="focus:shadow-md border m-5 focus:border-gray-300 rounded-lg w-full py-2 px-3 text-gray-500  focus:outline-none focus:shadow-outline"
              id="search"
              type="text"
              autocomplete="off"
              placeholder="Search"
            />
          </div>

          <div
            class={`sidebar w-64 space-y-6 m-0 md:m-10 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out ${
              this.navOpen ? 'bg-black text-blue-100 w-full p-5' : ''
            }`}
          >
            {this.navOpen ? (
              ''
            ) : (
              <input
                class="focus:shadow-md focus:border-gray-300 border rounded-lg w-full  py-2 px-3 text-gray-500 focus:outline-none focus:shadow-outline"
                id="search"
                type="text"
                autocomplete="off"
                placeholder="Search"
              />
            )}

            <nav class="relative">
              {this.navOpen ? (
                <button class="absolute top-0 right-0 focus:outline-none focus:shadow-outline" onClick={() => this.handleToggleNav()}>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                ''
              )}

              <button class="block py-2.5 px-4 transition duration-200">Getting Started</button>
            </nav>
          </div>

          <div class="flex-1 m-5 md:m-10 text-2xl ">Content In Development</div>
        </div>
      </Host>
    );
  }
}
