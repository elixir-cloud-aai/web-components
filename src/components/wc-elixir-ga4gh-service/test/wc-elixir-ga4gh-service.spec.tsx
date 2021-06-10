import { newSpecPage } from '@stencil/core/testing';
import { WcElixirGa4ghService } from '../wc-elixir-ga4gh-service';

describe('wc-elixir-ga4gh-service', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirGa4ghService],
      html: `<wc-elixir-ga4gh-service></wc-elixir-ga4gh-service>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-elixir-ga4gh-service>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-elixir-ga4gh-service>
    `);
  });
});
