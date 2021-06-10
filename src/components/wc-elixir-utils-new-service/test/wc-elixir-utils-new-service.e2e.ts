import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-utils-new-service', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-utils-new-service></wc-elixir-utils-new-service>');

    const element = await page.find('wc-elixir-utils-new-service');
    expect(element).toHaveClass('hydrated');
  });
});
