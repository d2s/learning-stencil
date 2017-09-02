import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'basic-event',
  styleUrl: 'basic-event.scss'
})
export class BasicEvent {
  @Prop() name: string;
  @Prop() description: string;
  @Prop() date: string;
  @Prop() location: string;

  render() {
    return (
      <basic-card title={this.name} content={this.description}  date={this.date} location={this.location} />
    );
  }
}
