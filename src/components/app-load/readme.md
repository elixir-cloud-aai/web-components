# app-load



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [app-home](../app-home)
- [app-docs](../app-docs)

### Graph
```mermaid
graph TD;
  app-load --> app-home
  app-load --> app-docs
  app-docs --> app-getting-started
  app-docs --> app-community
  app-docs --> app-contribute
  app-docs --> app-service-component
  app-docs --> app-service-list
  app-docs --> app-manage-permission
  app-docs --> app-new-service
  app-docs --> app-create-permission
  app-docs --> app-indexes
  app-service-component --> wc-elixir-service
  wc-elixir-service --> wc-elixir-utils-manage-permissions
  wc-elixir-service --> wc-elixir-utils-new-service
  wc-elixir-service --> wc-elixir-utils-service-list
  app-service-list --> wc-elixir-utils-service-list
  app-manage-permission --> wc-elixir-utils-manage-permissions
  app-new-service --> wc-elixir-utils-new-service
  app-create-permission --> wc-elixir-utils-create-permission
  style app-load fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
