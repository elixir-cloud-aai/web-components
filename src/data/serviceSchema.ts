const ServiceSchema = {
  contactUrl: {
    type: 'string',
    required: false,
  },
  description: {
    type: 'string',
    required: false,
  },
  documentationUrl: {
    type: 'string',
    required: false,
  },
  environment: {
    type: 'string',
    required: false,
  },
  name: {
    type: 'string',
    required: true,
  },
  organization: {
    name: {
      type: 'string',
      required: true,
    },
    url: {
      type: 'string',
      required: true,
    },
  },
  type: {
    artifact: {
      type: 'string',
      required: true,
    },
    group: {
      type: 'string',
      required: true,
    },
    version: {
      type: 'string',
      required: true,
    },
  },
  version: {
    type: 'string',
    required: true,
  },
};

export default ServiceSchema;
