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
            <img src="https://raw.githubusercontent.com/elixir-cloud-aai/logo/dev/logo.svg" class="inline-block mx-3 opacity-20 w-108"></img>
          </div>
          <div class="mx-10 md:ml-40 mt-28 mb-40 md:mb-56 md:mr-108 md:mt-40 static">
            <div class="text-4xl font-bold md:text-5xl text-gray-700">
              Build service dashboards rapidly with <span class="text-primary font-extrabold">Web-Components</span>.
            </div>
            <br></br>
            <div class="text-xl text-gray-400">
              Elixir Components provide you with the various lightweight, fast Web Components to use in your application enviroment independently.
            </div>
            <button class="text-lg mt-8 px-5 bg-secondary p-2 shadow-lg rounded-xl w-full md:w-max">Get Started</button>
            <button class="text-lg ml-0 mt-5 px-5 bg-gray-200 p-2 shadow-inner rounded-xl w-full md:w-max md:ml-10 md:mt-0">$ npm i @elixir/web-components</button>
          </div>
        </div>
      </Host>
    );
  }
}
