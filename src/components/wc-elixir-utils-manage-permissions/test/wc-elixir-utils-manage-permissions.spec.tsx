import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsManagePermissions } from '../wc-elixir-utils-manage-permissions';

describe('wc-elixir-utils-manage-permissions', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsManagePermissions],
      html: `<wc-elixir-utils-manage-permissions></wc-elixir-utils-manage-permissions>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-elixir-utils-manage-permissions>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-elixir-utils-manage-permissions>
    `);
  });
});
