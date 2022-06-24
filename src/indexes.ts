import { indexType } from "./types";

const indexes: indexType[] = [
  {
    display: "Introduction",
    subIndexes: [
      {
        display: "Getting Started",
        url: "/docs/intro/getting-started",
      },
      {
        display: "Community",
        url: "/docs/intro/community",
      },
      {
        display: "Contribute",
        url: "/docs/intro/contribute",
      },
    ],
  },
  {
    display: "Components",
    subIndexes: [
      {
        display: "Service",
        url: "/docs/components/service-component",
      },
      {
        display: "Service List",
        url: "/docs/components/service-list",
      },
      {
        display: "Manage Permission",
        url: "/docs/components/manage-permission",
      },
      {
        display: "Add New Service",
        url: "/docs/components/add-new-service",
      },
      {
        display: "Create Permission",
        url: "/docs/components/create-permission",
      },
    ],
  },
];

export default indexes;
