import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'basic-event',
  styleUrl: 'basic-event.css'
})
export class BasicEvent {
  @Prop() name: string = 'No name';
  @Prop() description: string = 'No description';
  @Prop() date: string;
  @Prop() location: string = 'No location';

  render() {
    return (
      <basic-card title={this.name} description={this.description} date={this.date} location={this.location} />
    );
  }
}
