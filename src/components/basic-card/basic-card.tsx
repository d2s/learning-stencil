import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'basic-card',
  styleUrl: 'basic-card.css'
})
export class BasicCard {
  @Prop() component_title: string;
  @Prop() content: string;
  @Prop() description: string;
  @Prop() date: string;
  @Prop() location: string;
  @Prop() youtube_video: string;

  render() {
    return (
      <article class="basic-card__article mv4">
        <h1 class="basic-card__title">
          {this.component_title
            ? <span>{this.component_title}</span>
            : <span>Heading title missing</span>
          }
        </h1>
        <div class="basic-card__content">

          {this.description
            ? <div class="basic-card__content__text">{this.description}</div>
            : <div class="basic-card__content__text">No details about this.</div>
          }

          {this.youtube_video
            ? <div class="basic-card__video"><youtube-video video={this.youtube_video}/></div>
            : <span></span>
          }

          {this.location
            ? <div class="basic-card__location">{this.location}</div>
            : <span></span>
          }

          {this.date
            ? <div class="basic-card__date">{this.date}</div>
            : <span></span>
          }

        </div>
      </article>
    );
  }
}
