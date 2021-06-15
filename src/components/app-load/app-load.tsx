import { Component, Host, h } from '@stencil/core';
import { createRouter, Route, href } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'app-load',
  styleUrl: 'app-load.css',
  scoped: true,
})
export class AppLoad {
  render() {
    return (
      <Host>
        <a {...href('/')}>Home</a>
        <a {...href('/docs')}>Docs</a>
        Web Components Elixir Cloud & AII
        <Router.Switch>
          <Route path="/">
            <wc-home></wc-home>
          </Route>
          <Route path="/docs">
            <wc-docs></wc-docs>
          </Route>
        </Router.Switch>
        <div class="center-content">
          © 2021 Web-Components. Released under MIT License
          <br></br>
          Managed by <a href="https://github.com/git-anurag-hub/">Anurag's Github</a>
        </div>
      </Host>
    );
  }
}
