# Information for contributors

Great to see you. We appreciate your interest in contributing to ELIXIR Cloud Components. The project is open for community contributions, please read the following guidelines carefully before making any contributions.

If you don't know what [ELIXIR Cloud Component][elixir-cloud-component] is all about, just
follow the link. Otherwise read on to find out more
about our values and how you can contribute.

## General

- ELIXIR Cloud Components (from here on out referred to simply as “components”) are reusable frontend components (or “micro-frontends”)
- Components MUST follow the [Web Components design][web-component-design] feature set; entry point for standardized and upcoming features: https://github.com/WICG/webcomponents.
- Components MUST be implemented based on the [Stencil][stencil] toolchain.
- Components MUST be free and open source software and SHOULD be published under the [Apache 2.0][apache] license
- Components SHOULD be made public from day one, as per the [4OSS recommendations][4oss-recommendations]

## Our values

- **_Openness:_** all of our code is open source, usually from day one, and
  available publicly under a license approved the [Open Source Initiative][osi]
- **_FAIRness:_** we want data, code, analysis workflows and infrastructure to
  be [findable, accessible, interoperable and reusable][fair]
- **_Privacy:_** we believe that sensitive personal data should be under the
  control of the individual and should be shared, processed and analyzed only
  upon and to the degree covered by informed and specific consent, using the
  highest security standards

## Design guidelines

- Components MAY be nested, i.e., a component may import other components to create one or multiple levels of child components
- Components SHOULD provide basic, clearly defined functionalities; for complex functionalities, nest multiple components in such a way that the top-level as well as all child components each provide basic functionality

## Code repository

- ELIXIR Cloud Components are reusable frontend components that follow the Web Components design/feature set
- Components should be implemented based on the Stencil toolchain and published under the Apache 2.0 license
- Components should be made public from day one and live inside their own project directory in the monorepo located at https://github.com/elixir-cloud-aai/web-components
- Developers should use semantic commit messages following the Conventional Commits specification to allow for automated versioning and changelog creation.
- Code changes should be proposed through feature branches and be reviewed by at least one reviewer before being merged into the main or dev branches.
- Fast-forward merges/rebases should be used, and all commits should be squashed or grouped together under individual semantic commits
- If commits are not to be squashed when merging, they SHOULD be interactively rebased to include few semantic commits (i.e., different topical changes to the codebase or different new features or bug fixes should be grouped together under individual commits)
- Code changes must pass all CI tests and maintain 100% test coverage

## Our expectations

We would only expect you to

- please respect our [Code of Conduct][code-of-conduct]
- make an effort to adhere to good coding practices and our [contribution
  guidelines][contributing] (we will of course help you with that!)
- communicate clearly and openly with us with regard to any issues that you
  take responsibility for, especially if you realize that you cannot or do not
  want you to continue with something (which is of course totally fine!)

#### Contribute via GitHub

1. Explore issues section on github and see if there
   is anything that you would like to work on in particular (links to issue boards
   are available and most projects should have one or more issues flagged as `good
1st issue`); or perhaps you would like to propose an issue or even a project
   yourself?
1. Sign up to [GitHub][github]
1. Before you start working on your first issue, please carefully read the
   [contribution guidelines][contributing]
1. Assign yourself to the issue of your choice
1. Start coding :)

[bh-ddbj]: http://www.biohackathon.org/
[bh-denbi]: https://www.denbi.de/de-nbi-events/1454-biohackathon-germany
[bh-elixir]: https://www.biohackathon-europe.org/
[cloud-computing]: https://en.wikipedia.org/wiki/Cloud_computing
[code-of-conduct]: https://github.com/elixir-cloud-aai/elixir-cloud-aai/blob/dev/CODE_OF_CONDUCT.md
[contributing]: https://github.com/elixir-cloud-aai/elixir-cloud-aai/blob/dev/CONTRIBUTING.md
[elixir-cloud-component]: https://web-components-beta.vercel.app
[fair]: https://www.go-fair.org/fair-principles/
[ga4gh]: https://www.ga4gh.org/
[github]: https://github.com/join
[osi]: https://opensource.org/
[testribute]: https://github.com/elixir-cloud-aai/TEStribute
[web-component-design]: https://en.wikipedia.org/wiki/Web_Components
[stencil]: https://stenciljs.com
[apache]: https://www.apache.org/licenses/LICENSE-2.0
[4oss-recommendations]: https://softdev4research.github.io/recommendations/

