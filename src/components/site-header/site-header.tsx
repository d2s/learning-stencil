import { Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  render() {
    return (
      <div class="site-header">
        <stencil-route-link url="/" class="logo-link" exact={true}>
          {/* <img class="logo" src="/img/text-logo.svg" /> */}
          Scoreboard
        </stencil-route-link>
        <div class="pull-right">
          <stencil-route-link url="/" exact={true}>
            Scoreboard
          </stencil-route-link>
          <stencil-route-link url="/about" exact={true}>
            About
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
