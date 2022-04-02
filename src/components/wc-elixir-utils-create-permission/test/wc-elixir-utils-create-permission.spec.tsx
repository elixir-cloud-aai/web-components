import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsCreatePermission } from '../wc-elixir-utils-create-permission';

describe('wc-elixir-utils-create-permission', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsCreatePermission],
      html: `<wc-elixir-utils-create-permission></wc-elixir-utils-create-permission>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-elixir-utils-create-permission>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-elixir-utils-create-permission>
    `);
  });
});
