# Stencil Scoreboard App

Small application for displaying a virtual scoreboard, built with Stencil.


## About Stencil

[Stencil](https://stenciljs.com/) is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).


## Getting Started

To start a new project using Stencil, clone the example repo to a new directory:

```bash
git clone git@github.com:ionic-team/stencil-starter.git my-app
cd my-app
git remote rm origin
```

and run:

```bash
npm install
npm start
```

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

