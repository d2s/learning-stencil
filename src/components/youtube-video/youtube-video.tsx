import { Component, Prop } from '@stencil/core';

// Usage example:
//    <youtube-video video="UfD-k7aHkQE"/>

@Component({
  tag: 'youtube-video',
  styleUrl: 'youtube-video.scss'
})
export class DocumentComponent {
  @Prop() video: string;
  render() {
    return (
      <div class="videoWrapper">
        <iframe frameBorder="0" allowFullScreen={true} width="380" height="250" src={'https://www.youtube.com/embed/'+this.video} ></iframe>
      </div>
    );
  }
}
