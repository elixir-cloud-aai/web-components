import { Component, Host, h, State } from "@stencil/core";
import { elixirBackend } from "../../../config.js";
import axios from "axios";
import { renderLoaderGetStarted, renderContent } from "../../utils/utils.js";

@Component({
  tag: "app-community",
  styleUrl: "app-community.css",
  scoped: true,
})
export class AppCommunity {
  @State() data: any[] = [];

  componentDidLoad() {
    axios.get(`${elixirBackend}/wc/community`).then((response) => {
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
