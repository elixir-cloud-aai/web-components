import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-utils-service-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-utils-service-card></wc-elixir-utils-service-card>');

    const element = await page.find('wc-elixir-utils-service-card');
    expect(element).toHaveClass('hydrated');
  });
});
