import { Component } from '@stencil/core';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})

export class AboutPage {
  render() {
    return (
      <div class="wrapper">
        
        <basic-card title="Title of card" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam sunt amet sapiente cum fugit rerum officiis, quidem nihil, quaerat consequuntur asperiores aspernatur molestias rem deserunt praesentium officia repellat suscipit!" />

        <basic-card title="About the site" content="This is a basic prototype of a scoreboard app, made with Web Components using Stencil.js tools." />

        <other-sites names="0" twitter="autiomaa" github="d2s" />

      </div>
    );
  }
}
