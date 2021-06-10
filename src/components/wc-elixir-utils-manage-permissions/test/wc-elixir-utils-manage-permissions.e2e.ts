import { newE2EPage } from '@stencil/core/testing';

describe('wc-elixir-utils-manage-permissions', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-elixir-utils-manage-permissions></wc-elixir-utils-manage-permissions>');

    const element = await page.find('wc-elixir-utils-manage-permissions');
    expect(element).toHaveClass('hydrated');
  });
});
