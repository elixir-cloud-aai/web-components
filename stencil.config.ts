import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'web-components',
  globalStyle: 'src/global/app.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
    },
  ],
  preamble: 'Built by Elixir Cloud & AII',
};
