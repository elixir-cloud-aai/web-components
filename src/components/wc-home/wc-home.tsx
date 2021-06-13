import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-home',
  styleUrl: 'wc-home.css',
  shadow: true,
})
export class WcHome {
  render() {
    return (
      <Host>
        <div class="wrapper">
          <h1>Description</h1>
          <div class="content">
            Elixir Cloud & AII Web components are the reusable custom elements that can be utilized in your web apps & web pages independently irrespective of what
            framework/library you are using to build the frontend. These components will mainly serve the <a href="https://elixir-europe.github.io/cloud/">Elixir Cloud & AII</a>{' '}
            for managing their services.
            <div class="image">
              <img src="https://user-images.githubusercontent.com/58766532/120885223-6f566080-c605-11eb-8831-d966c84a1cbf.png" height="800"></img>
            </div>
          </div>

          <h1>Getting Started</h1>
          <h2>Prerequisites</h2>
          <div class="content">
            <ul>
              <li>Git</li>
              <li>
                <a href="https://nodejs.org/en/">Node & npm</a>: Recent LTS version avaliable
              </li>
              <li>A fork of the repo (for any contributions)</li>
            </ul>
          </div>
          <h2>Installation</h2>
          <div class="content">
            <ul>
              <li>To start with, fork & clone the repository and traverse into the service's root directory with:</li>
            </ul>
            <div class="code">
              git clone https://github.com/&lt;your-github-username&gt;/web-components.git <br></br>cd web-components
            </div>
            <ul>
              <li>Install the packages to be used in the development:</li>
            </ul>
            <div class="code">npm install</div>
            <ul>
              <li>Run start script to start the development enviroment of project:</li>
            </ul>
            <div class="code">npm run start</div>
            <ul>
              <li>
                This will open the browser window on desktop. If not visit <span class="code">http://localhost:3333/</span> on your browser new window.
              </li>
            </ul>
            Great, Now you are good to go!
          </div>

          <h1>Contributing</h1>
          <div class="content">
            This project is a community effort and lives off your contributions, be it in the form of bug reports, feature requests, discussions, or fixes and other code changes.
            Please refer to our organization's <a href="https://github.com/elixir-cloud-aai/elixir-cloud-aai/blob/dev/CONTRIBUTING.md">contribution guidelines</a> if you are
            interested in contributing. Please mind the <a href="https://github.com/elixir-cloud-aai/elixir-cloud-aai/blob/dev/CODE_OF_CONDUCT.md">code of conduct</a> for all
            interactions with the community.
          </div>

          <h1>Versioning</h1>
          <div class="content">
            The project adopts the <a href="https://semver.org/">semantic versioning</a> scheme for versioning. Currently the service is in development v1 package for the same will
            be out soon. Stay tuned!
          </div>

          <h1>License</h1>
          <div class="content">
            This project is covered by the MIT License also <a href="https://github.com/git-anurag-hub/web-components/blob/master/LICENSE">shipped with this repository</a>.
          </div>

          <h1>Contact</h1>
          <div class="content">
            The project is a collaborative effort under the umbrella of <a href="https://github.com/elixir-cloud-aai/">ELIXIR Cloud & AAI.</a> Follow the link to get in touch with
            us via chat or email. Please mention the name of this service for any inquiry, proposal, question etc. Alternatively, you can also make use of the
            <a href="https://github.com/git-anurag-hub/web-components/issues">issue tracker</a> to request features or report bugs.
          </div>
        </div>
      </Host>
    );
  }
}
