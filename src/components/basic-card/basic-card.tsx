import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'basic-card',
  styleUrl: 'basic-card.scss'
})
export class BasicCard {
  @Prop() title: string;
  @Prop() content: string;
  @Prop() date: string;
  @Prop() location: string;

  render() {
    return (
      <article class="basic-card__article mv4">
        <h1 class="basic-card__title">
          {this.title}
        </h1>
        <div class="basic-card__content">
          {this.content}

          <div class="basic-card__location">
            {/* Location:  */}
            {this.location}
          </div>
          <div class="basic-card__date">
            {/* Date:  */}
            {this.date}
          </div>

        </div>
      </article>
    );
  }
}
