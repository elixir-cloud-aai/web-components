import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-docs',
  styleUrl: 'wc-docs.css',
  shadow: true,
})
export class WcDocs {
  render() {
    return (
      <Host>
        <div class="wrapper">In Development</div>
      </Host>
    );
  }
}
