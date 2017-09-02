import { Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  render() {
    return (
      <div class="site-header">
        <stencil-route-link router="#router" url="/" class="logo-link">
          {/* <img class="logo" src="/img/text-logo.svg" /> */}
          Scoreboard
        </stencil-route-link>
        <div class="pull-right">
          <stencil-route-link router="#router" url="/">
            Scoreboard
          </stencil-route-link>
          <stencil-route-link router="#router" url="/about">
            About
          </stencil-route-link>
        </div>
      </div>
    );
  }
}
