import { Component, Host, h } from "@stencil/core";
import Router from "../../router";

@Component({
  tag: "app-docs",
  styleUrl: "app-docs.css",
  scoped: true,
})
export class AppDocs {
  renderContent = () => {
    switch (Router.url.pathname) {
      case "/docs/intro/getting-started":
        return <app-getting-started></app-getting-started>;
      case "/docs/intro/community":
        return <app-community></app-community>;
      case "/docs/intro/contribute":
        return <app-contribute></app-contribute>;
      case "/docs/components/service-component":
        return <app-service-component></app-service-component>;
      case "/docs/components/service-list":
        return <app-service-list></app-service-list>;
      case "/docs/components/manage-permission":
        return <app-manage-permission></app-manage-permission>;
      case "/docs/components/add-new-service":
        return <app-new-service></app-new-service>;
      default:
        break;
    }
  };

  render() {
    return (
      <Host>
        <div class="relative min-h-screen md:flex">
          <app-indexes></app-indexes>
          <div class="flex-1 m-5 md:m-10 overflow-y-visible">{this.renderContent()}</div>
        </div>
      </Host>
    );
  }
}
