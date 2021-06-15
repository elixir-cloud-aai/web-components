import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-home',
  styleUrl: 'wc-home.css',
  scoped: true,
})
export class WcHome {
  render() {
    return (
      <Host>
        <div class="relative">
          <div class="absolute right-10 md:right-40 -top-28">
            <img src="https://raw.githubusercontent.com/elixir-cloud-aai/logo/dev/logo.svg" class="inline-block mx-3 opacity-20 w-96 md:w-108"></img>
          </div>
          <div class="mx-10 md:ml-40 mt-28 mb-40 md:mb-56 md:mr-108 md:mt-40 static">
            <div class="text-4xl font-bold md:text-5xl text-gray-700">
              Build service dashboards rapidly with <span class="text-primary font-extrabold">Elixir Cloud Components</span>.
            </div>
            <br></br>
            <div class="text-xl text-gray-400">
              These provide you with the various lightweight, fast, reusable Web Components to be use in your application enviroment independently.
            </div>
            <button class="text-lg mt-8 px-5 bg-secondary text-white focus:outline-none p-2 hover:shadow-xl transition ease-out duration-500 rounded-xl w-full md:w-max">
              Get Started
            </button>
            <button class="text-lg ml-0 mt-5 px-5 bg-gray-200 p-2 focus:outline-none shadow-inner rounded-xl w-full md:w-max md:ml-10 md:mt-0">
              <span class="mr-2 text-gray-400">$</span> npm i @elixir/web-components
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline ml-4 text-gray-400 hover:text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => navigator.clipboard.writeText('npm i @elixir/web-components')}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
          <div class="mx-10 md:mx-40">
            <div class="flex md:flex">
              <div class="text-3xl font-bold md:text-4xl text-gray-700 flex-grow flex-1">
                Who are <span class="text-gray-400">we</span>?
              </div>
              <div class="text-lg md:text-xl text-gray-700 flex-1">
                Elixir Cloud components are web-components which are developed by{' '}
                <span class="font-semibold text-primary hover:border-primary border-b-2 border-white transition ease-out duration-500">
                  <a href="https://elixir-europe.github.io/cloud/" target="_blank" rel="noopener noreferrer">
                    Elixir Cloud & AII Community
                  </a>
                </span>
                . ELIXIR Cloud & AAI is a cross platform initiative of ELIXIR and a driver project of the Global Alliance for Genomics and Health better known as{' '}
                <span class="font-semibold text-primary hover:border-primary border-b-2 border-white transition ease-out duration-500">
                  <a href="https://www.ga4gh.org/" target="_blank" rel="noopener noreferrer">
                    GA4GH
                  </a>
                </span>
                .
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
