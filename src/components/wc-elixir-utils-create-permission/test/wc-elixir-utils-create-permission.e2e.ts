import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-utils-create-permission', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-utils-create-permission></wc-elixir-utils-create-permission>');

    const element = await page.find('wc-elixir-utils-create-permission');
    expect(element).toHaveClass('hydrated');
  });
});
