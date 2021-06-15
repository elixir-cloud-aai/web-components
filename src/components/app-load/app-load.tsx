import { Component, Host, h } from '@stencil/core';
import { createRouter, Route, href } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'app-load',
  styleUrl: 'app-load.css',
  scoped: true,
})
export class AppLoad {
  render() {
    return (
      <Host>
        <div class="flex flex-col h-screen">
          <nav class="p-4 border-b-2 mx-0 md:mx-10">
            <div class="flex items-center justify-between">
              <div class="text-xl md:text-2xl">
                <a {...href('/')}>
                  <img src="https://raw.githubusercontent.com/elixir-cloud-aai/logo/dev/logo.128px.png" class="inline-block w-7 mx-3 md:w-9"></img>
                  <div class="hidden md:inline-block text-gray-700 font-semibold">Elixir Cloud Components</div>
                </a>
              </div>
              <div class="flex items-center">
                <div class="text-l md:text-xl hover:text-primary hover:border-primary text-gray-400 border-b-2 border-white transition ease-out duration-500">
                  <a {...href('/docs')} class="hidden md:inline-block ">
                    Documentation
                  </a>
                  <a {...href('/docs')} class="inline-block md:hidden">
                    Docs
                  </a>
                </div>
                <div class="">
                  <a href="https://github.com/git-anurag-hub/web-components" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 md:w-10 md:h-10 p-1 mx-10 icon icon-tabler icon-tabler-brand-github hover:border-primary border-b-2 rounded-full  border-white transition ease-out duration-500"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#a1a1aa"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div class="flex-grow">
            <Router.Switch>
              <Route path="/">
                <wc-home></wc-home>
              </Route>
              <Route path="/docs">
                <wc-docs></wc-docs>
              </Route>
            </Router.Switch>
          </div>
          <div class="text-gray-500 text-center mt-10 text-xs py-10 bg-gray-100">
            <a href="https://github.com/elixir-cloud-aai/elixir-cloud-aai" target="_blank" rel="noopener noreferrer">
              <img src="https://raw.githubusercontent.com/elixir-cloud-aai/logo/dev/logo.128px.png" class="inline-block w-8 m-3"></img>
            </a>
            <br></br>© 2021 Web-Components. Released under{' '}
            <a href="https://github.com/git-anurag-hub/web-components/blob/master/LICENSE" class="border-b-2 border-gray-400" target="_blank" rel="noopener noreferrer">
              MIT License
            </a>
            <br></br>
            Managed by{' '}
            <a href="https://github.com/git-anurag-hub/" target="_blank" rel="noopener noreferrer" class="border-b-2 border-gray-400">
              Anurag's Github
            </a>
          </div>
        </div>
      </Host>
    );
  }
}
