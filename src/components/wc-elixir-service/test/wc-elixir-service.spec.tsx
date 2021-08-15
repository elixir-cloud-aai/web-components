// import { newSpecPage } from '@stencil/core/testing';
import { WcElixirService } from '../wc-elixir-service';

describe('wc-elixir-service', () => {
  it('does builds', () => {
    expect(new WcElixirService()).toBeTruthy();
  });
});
