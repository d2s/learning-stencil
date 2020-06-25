import { Component, Prop, h } from '@stencil/core';

// Usage example:
//    <youtube-video video="UfD-k7aHkQE"/>
//
// You might also want to specify the player size:
//    <youtube-video video="UfD-k7aHkQE" width="200" height="200" />

@Component({
  tag: 'youtube-video',
  styleUrl: 'youtube-video.css'
})
export class DocumentComponent {
  @Prop() video: string;
  @Prop() width: number = 380;
  @Prop() height: number = 250;
  @Prop() fullscreen: boolean = true;
  render() {
    return (
      <div class="videoWrapper">
        <iframe frameBorder="0" allowFullScreen={this.fullscreen} width={this.width} height={this.height} src={'https://www.youtube.com/embed/'+this.video} ></iframe>
      </div>
    );
  }
}
