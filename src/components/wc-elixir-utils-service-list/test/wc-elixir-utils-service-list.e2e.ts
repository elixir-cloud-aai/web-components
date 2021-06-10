import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-utils-service-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-utils-service-list></wc-elixir-utils-service-list>');

    const element = await page.find('wc-elixir-utils-service-list');
    expect(element).toHaveClass('hydrated');
  });
});
