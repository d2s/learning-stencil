import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'other-sites',
  styleUrl: 'other-sites.scss'
})
export class OtherSites {

  @Prop() twitter: string;
  @Prop() github: string;

  /**
   * Output full Twitter URL based on the username
   */
  getTwitter(): string {
    return `https://twitter.com/${this.twitter}`;
    // return `<a href="https://twitter.com/${this.twitter}">${this.twitter}</a>`;
  }

  /**
   * Output full GitHub URL based on the username
   */
  getGitHub(): string {
    return `https://github.com/${this.github}`;
  }

  render() {
    return (
      <ul>
        <li>Twitter: <a href={this.getTwitter()}>{this.twitter}</a></li>
        <li>GitHub: <a href={this.getGitHub()}>{this.github}</a></li>
      </ul>
    );
  }
}
