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
        <ion-app>
          <ion-header translucent="false">
            <ion-toolbar color="favourite">
              <ion-buttons slot="secondary">
                <ion-button>
                  <a {...href('/')}>Home</a>
                </ion-button>
                <ion-button>
                  <a {...href('/docs')}>Docs</a>
                </ion-button>
                <ion-button></ion-button>
              </ion-buttons>
              <ion-title>Web Components Elixir Cloud & AII</ion-title>
            </ion-toolbar>
          </ion-header>
          <ion-content overflow-scroll="true">
            <ion-scroll>
              <Router.Switch>
                <Route path="/">
                  <wc-home></wc-home>
                </Route>
                <Route path="/docs">
                  <wc-docs></wc-docs>
                </Route>
              </Router.Switch>
            </ion-scroll>
            <br></br>
            <br></br>
          </ion-content>
        </ion-app>
      </Host>
    );
  }
}
