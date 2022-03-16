import { Component, Host, h, State } from "@stencil/core";
import { elixirBackend } from "../../../config.js";
import axios from "axios";
import { renderLoaderGetStarted, renderContent } from "../../utils/utils.js";

@Component({
  tag: "app-getting-started",
  styleUrl: "app-getting-started.css",
  scoped: true,
})
export class AppGettingStarted {
  @State() data: any[] = [];

  componentDidLoad() {
    console.log("Hello");
    axios.get(`${elixirBackend}/wc/get-started`).then((response) => {
      console.log(response);
      this.data = response.data;
    });
  }

  render() {
    if (this.data.length === 0) {
      return renderLoaderGetStarted();
    }
    //@ts-ignore
    return <Host>{renderContent(this.data)}</Host>;
  }
}
