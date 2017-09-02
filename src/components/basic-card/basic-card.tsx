import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'basic-card',
  styleUrl: 'basic-card.scss'
})
export class BasicCard {
  @Prop() title: string;
  @Prop() content: string;

  render() {
    return (
      <article class="basic-card__article mv4">
        <h1 class="basic-card__title">
          {this.title}
        </h1>
        <div class="basic-card__content">
          {this.content}
          {/* <my-name first="Daniel" last="Schildt"></my-name> */}
        </div>
      </article>
    );
  }
}
