import { Component, Host, h } from '@stencil/core';
import axios from 'axios';

@Component({
  tag: 'wc-home',
  styleUrl: 'wc-home.css',
  shadow: true,
})
export class WcHome {
  render() {
    return (
      <Host>
        <div class="wrapper">Home</div>
      </Host>
    );
  }
}
