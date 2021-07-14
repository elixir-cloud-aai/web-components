const ServiceList = [
  {
    name: 'Service 1',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 1',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',

    id: 'org.ga4gh.myservice1',
    type: 'Owned',
    authorized: true,
  },
  {
    name: 'Service 2',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 2',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice2',
    type: 'Managed',
    authorized: false,
  },
  {
    name: 'Service 3',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 3',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice3',
    authorized: false,
  },
  {
    name: 'Service 4',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice4',
    type: 'Managed',
    authorized: true,
  },
  {
    name: 'Service 5',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 1',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',

    id: 'org.ga4gh.myservice5',
    type: 'Owned',
    authorized: false,
  },
  {
    name: 'Service 6',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 2',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice6',
    type: 'Authorized',
    authorized: true,
  },
  {
    name: 'Service 7',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 3',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice7',
    authorized: false,
  },
  {
    name: 'Service 8',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice8',
    type: 'Managed',
    authorized: false,
  },
  {
    name: 'Service 9',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 1',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',

    id: 'org.ga4gh.myservice9',
    type: 'Owned',
    authorized: true,
  },
  {
    name: 'Service 10',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 2',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice10',
    type: 'Managed',
    authorized: false,
  },
  {
    name: 'Service 11',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 3',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice11',
    authorized: true,
  },
  {
    name: 'Service 12',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice12',
    authorized: true,
  },
  {
    name: 'Service 13',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 1',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',

    id: 'org.ga4gh.myservice13',
    type: 'Owned',
    authorized: true,
  },
  {
    name: 'Service 14',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 2',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice14',
    type: 'Managed',
    authorized: true,
  },
  {
    name: 'Service 15',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 3',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice15',
    authorized: false,
  },
  {
    name: 'Service 16',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice16',
    authorized: true,
  },
  {
    name: 'Service 17',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice17',
    authorized: false,
  },
  {
    name: 'Service 18',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice18',
    authorized: true,
  },
  {
    name: 'Service 19',
    desription:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempora repudiandae quisquam? Voluptatum qui accusantium odit quibusdam ea rem deleniti dolor accusamus laborum! Vero magnam modi illum ad. Id, voluptates.',
    documentationUrl: 'https://docs.myservice.example.com',
    organization: {
      name: 'Organization 4',
      url: 'https://example.com',
    },
    contactUrl: 'mailto:support@example.com',
    version: '1.0.0',
    id: 'org.ga4gh.myservice19',
    authorized: true,
  },
];

export default ServiceList;
