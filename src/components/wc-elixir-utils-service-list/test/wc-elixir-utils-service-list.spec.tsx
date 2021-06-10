import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsServiceList } from '../wc-elixir-utils-service-list';

describe('wc-elixir-utils-service-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsServiceList],
      html: `<wc-elixir-utils-service-list></wc-elixir-utils-service-list>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-elixir-utils-service-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-elixir-utils-service-list>
    `);
  });
});
