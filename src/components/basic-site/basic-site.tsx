import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'basic-site',
  styleUrl: 'basic-site.scss'
})
export class BasicCard {
  @Prop() title: string;

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
