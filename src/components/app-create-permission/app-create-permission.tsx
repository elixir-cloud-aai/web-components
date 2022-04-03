import { Component, Host, h, State } from "@stencil/core";
import { elixirBackend } from "../../../config.js";
import axios from "axios";
import { renderLoaderGetStarted, renderContent } from "../../utils/utils.js";

@Component({
  tag: "app-create-permission",
  scoped: true,
})
export class AppCreatePermission {
  @State() data: any[] = [];

  componentDidLoad() {
    axios
      .get(`${elixirBackend}/wc/docs/Create%20Permission%20Component`)
      .then((response) => {
        this.data = response.data;
      });
  }

  render() {
    return (
      <Host>
        <div class="leading-relaxed my-3 tracking-wide dark:text-gray-200 text-3xl font-bold">
          Create Permission Component
        </div>
        <div class="my-3">
          <div class="border-gray-100 rounded-lg p-3 border shadow-md my-5">
            <div class="text-sm font-semibold w-full border-b-2 border-gray-100 pb-2">
              Component Demo
            </div>
            <div class="mt-4">
              <wc-elixir-utils-create-permission></wc-elixir-utils-create-permission>
            </div>
          </div>
          {this.data.length === 0
            ? renderLoaderGetStarted()
            : //@ts-ignore
              renderContent(this.data)}
        </div>
      </Host>
    );
  }
}
