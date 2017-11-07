import { Component } from '@stencil/core';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})

export class AboutPage {
  render() {
    return (
      <div class="wrapper">
        
        <basic-card title="" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam sunt amet sapiente cum fugit rerum officiis, quidem nihil, quaerat consequuntur asperiores aspernatur molestias rem deserunt praesentium officia repellat suscipit!" youtube_video="dZOaI_Fn5o4" />

        <basic-card title="About the site" description="This is a basic prototype of a scoreboard app, made with Web Components using Stencil.js tools." date="2017" />

        <other-sites twitter="autiomaa" github="d2s" />

      </div>
    );
  }
}
