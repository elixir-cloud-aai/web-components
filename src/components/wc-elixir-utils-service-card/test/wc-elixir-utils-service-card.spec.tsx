import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsServiceCard } from '../wc-elixir-utils-service-card';

describe('wc-elixir-utils-service-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsServiceCard],
      html: `<wc-elixir-utils-service-card></wc-elixir-utils-service-card>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-elixir-utils-service-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-elixir-utils-service-card>
    `);
  });
});
