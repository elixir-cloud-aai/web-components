import { Component, Host, h, State } from "@stencil/core";
import { Route, href } from "stencil-router-v2";
import { InternalRouterState } from "stencil-router-v2/dist/types";
import Router from "../../router";

@Component({
  tag: "app-load",
  styleUrl: "app-load.css",
  scoped: true,
})
export class AppLoad {
  @State() load: string = "/";

  componentWillLoad() {
    Router.onChange(
      "url",
      (newValue: InternalRouterState["url"], _oldValue: InternalRouterState["url"]) => {
        this.load = newValue.pathname;
      }
    );
  }

  render() {
    return (
      <Host>
        <div class="flex flex-col h-screen">
          <nav class="p-4 md:border-b-2 mx-0 md:mx-10">
            <div class="flex items-center justify-between">
              <div class="text-xl md:text-2xl">
                <a {...href("/")}>
                  <img
                    src="https://raw.githubusercontent.com/elixir-cloud-aai/logo/dev/logo.128px.png"
                    class="inline-block w-7 mx-3 md:w-9"
                  ></img>
                  <div class="hidden md:inline-block text-gray-700 font-semibold">
                    Elixir Cloud Components
                  </div>
                </a>
              </div>
              <div class="flex items-center">
                <div
                  class={`text-l md:text-xl ${
                    Router.url.pathname.substr(0, 5) == "/docs"
                      ? "text-primary border-primary"
                      : "hover:text-primary hover:border-primary"
                  } text-gray-400 border-b-2 border-white transition ease-out duration-500`}
                >
                  <a {...href("/docs/intro/getting-started")} class="hidden md:inline-block ">
                    Documentation
                  </a>
                  <a {...href("/docs/intro/getting-started")} class="inline-block md:hidden">
                    Docs
                  </a>
                </div>
                <div class="">
                  <a
                    href="https://github.com/elixir-cloud-aai/web-components"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 md:w-10 md:h-10 p-1 mx-10 icon icon-tabler icon-tabler-brand-github hover:border-primary border-2 rounded-full  border-white transition ease-out duration-500"
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
                <app-home></app-home>
              </Route>
              <Route path={/^\/docs/}>
                <app-docs></app-docs>
              </Route>
            </Router.Switch>
          </div>
          <footer class="text-gray-500 text-center mt-10 text-xs py-10 bg-gray-100">
            <a
              href="https://github.com/elixir-cloud-aai/elixir-cloud-aai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/elixir-cloud-aai/logo/dev/logo.128px.png"
                class="inline-block w-8 m-3"
              ></img>
            </a>
            <br></br>
            <br></br>© 2021 Web-Components. Released under{" "}
            <a
              href="https://github.com/elixir-cloud-aai/web-components/blob/master/LICENSE"
              class="border-b-2 border-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License
            </a>
            <br></br>
            Managed by{" "}
            <a
              href="https://github.com/git-anurag-hub/"
              target="_blank"
              rel="noopener noreferrer"
              class="border-b-2 border-gray-400"
            >
              Anurag's Github
            </a>
            <br></br>
            <br></br>
            <div class="flex justify-center">
              <a href="https://elixir-cloud.slack.com/" target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 icon icon-tabler icon-tabler-brand-slack"
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
                  <path d="M12 12v-6a2 2 0 0 1 4 0v6m0 -2a2 2 0 1 1 2 2h-6" />
                  <path d="M12 12h6a2 2 0 0 1 0 4h-6m2 0a2 2 0 1 1 -2 2v-6" />
                  <path d="M12 12v6a2 2 0 0 1 -4 0v-6m0 2a2 2 0 1 1 -2 -2h6" />
                  <path d="M12 12h-6a2 2 0 0 1 0 -4h6m-2 0a2 2 0 1 1 2 -2v6" />
                </svg>
              </a>
              <a
                href="https://github.com/elixir-cloud-aai/web-components"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 mx-4 icon icon-tabler icon-tabler-brand-github"
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
              <a
                href="https://elixir-europe.github.io/cloud/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 icon icon-tabler icon-tabler-link"
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
                  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </Host>
    );
  }
}
