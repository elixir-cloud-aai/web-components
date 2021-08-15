import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-service', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-service></wc-elixir-service>');

    const element = await page.find('wc-elixir-service');
    expect(element).toHaveClass('hydrated');
  });
});
