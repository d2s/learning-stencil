
import { Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})

export class HomePage {
  render() {
    return (
      <div class="wrapper">

        <basic-card title="Title of card" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam sunt amet sapiente cum fugit rerum officiis, quidem nihil, quaerat consequuntur asperiores aspernatur molestias rem deserunt praesentium officia repellat suscipit!" />

        <basic-card title="Scoreboard" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam sunt amet sapiente cum fugit rerum officiis, quidem nihil, quaerat consequuntur asperiores aspernatur molestias rem deserunt praesentium officia repellat suscipit!" />

      </div>
    );
  }
}