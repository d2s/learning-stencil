# Stencil Scoreboard App

Small application for displaying a virtual scoreboard, built with Stencil.

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4d8be136cf3c4c0a8aef6c188b1811da)](https://www.codacy.com/app/danielschildt_3392/learning-stencil?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=d2s/learning-stencil&amp;utm_campaign=Badge_Grade)
[![dependencies Status](https://david-dm.org/d2s/learning-stencil/status.svg)](https://david-dm.org/d2s/learning-stencil)
[![Known Vulnerabilities](https://snyk.io/test/github/d2s/learning-stencil/badge.svg)](https://snyk.io/test/github/d2s/learning-stencil)
[![Codeship Status for d2s/learning-stencil](https://app.codeship.com/projects/c76b4400-738f-0135-c4ee-765c77b16925/status?branch=master)](https://app.codeship.com/projects/243781)


## About Stencil

[Stencil](https://stenciljs.com/) is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).


## Starting the application

To start this application locally on your computer, clone the repository to a new directory:

```bash
git clone https://github.com/d2s/learning-stencil.git learning-stencil
cd learning-stencil
```

Then, run the command to install the 3rd party dependencies:

```bash
npm install
```

After that, you can start the local development environment. It will also open a new tab to your local web browser, allowing you to view the latest changes, with browser refreshing automatically when the source files are modified and saved.

```bash
npm start
```

### More details about other npm script tasks

To view the build, start an HTTP server inside of the `/www` directory.

To watch for file changes during develop, run:

```bash
npm run dev
```

To build the app for production, run:

```bash
npm run build
```

