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
          <ion-header>
            <ion-toolbar>
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
          <ion-content>
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
            <hr></hr>
            <ion-toolbar color="medium">
              <div class="center-content">
                © 2021 Web-Components. Released under MIT License
                <br></br>
                Managed by <a href="https://github.com/git-anurag-hub/">Anurag's Github</a>
              </div>
            </ion-toolbar>
          </ion-content>
        </ion-app>
      </Host>
    );
  }
}
