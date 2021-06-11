import { Component, Host, h } from '@stencil/core';
import { createRouter, Route } from 'stencil-router-v2';

const Router = createRouter();

@Component({
  tag: 'app-load',
  styleUrl: 'app-load.css',
  shadow: true,
})
export class AppLoad {
  render() {
    return (
      <Host>
        <Router.Switch>
          <Route path="/">
            <ion-header>
              <ion-toolbar>
                <ion-title>Elixir Cloud & AII</ion-title>
              </ion-toolbar>
            </ion-header>
          </Route>
          <Route path="/docs"></Route>
        </Router.Switch>
      </Host>
    );
  }
}
