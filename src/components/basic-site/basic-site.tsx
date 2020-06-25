import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'basic-site',
  styleUrl: 'basic-site.css'
})
export class BasicCard {
  @Prop() component_title: string;

  render() {
    return (
      <div class="app">
        <site-header />

        <stencil-router id="router">

          <stencil-route
            url="/"
            component="home-page"
            exact={true}
          />

          <stencil-route
            url="/about"
            component="about-page"
          />

        </stencil-router>

      </div>
    );
  }
}
