# wc-docs



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [app-load](../app-load)

### Depends on

- [app-service-component](../app-service-component)
- [app-service-list](../app-service-list)
- [app-manage-permission](../app-manage-permission)
- [app-new-service](../app-new-service)
- [app-indexes](../app-indexes)

### Graph
```mermaid
graph TD;
  app-docs --> app-service-component
  app-docs --> app-service-list
  app-docs --> app-manage-permission
  app-docs --> app-new-service
  app-docs --> app-indexes
  app-service-component --> wc-elixir-service
  wc-elixir-service --> wc-elixir-utils-manage-permissions
  wc-elixir-service --> wc-elixir-utils-new-service
  wc-elixir-service --> wc-elixir-utils-service-list
  app-service-list --> wc-elixir-utils-service-list
  app-manage-permission --> wc-elixir-utils-manage-permissions
  app-new-service --> wc-elixir-utils-new-service
  app-load --> app-docs
  style app-docs fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
