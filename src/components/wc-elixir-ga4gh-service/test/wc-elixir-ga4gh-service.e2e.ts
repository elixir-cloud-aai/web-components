import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-ga4gh-service', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-ga4gh-service></wc-elixir-ga4gh-service>');

    const element = await page.find('wc-elixir-ga4gh-service');
    expect(element).toHaveClass('hydrated');
  });
});
