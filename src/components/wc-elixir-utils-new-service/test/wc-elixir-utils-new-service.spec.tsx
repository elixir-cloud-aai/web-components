import { newSpecPage } from '@stencil/core/testing';
import { WcElixirUtilsNewService } from '../wc-elixir-utils-new-service';

describe('wc-elixir-utils-new-service', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcElixirUtilsNewService],
      html: `<wc-elixir-utils-new-service></wc-elixir-utils-new-service>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-elixir-utils-new-service>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-elixir-utils-new-service>
    `);
  });
});
