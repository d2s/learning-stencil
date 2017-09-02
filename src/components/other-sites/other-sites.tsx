import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'other-sites',
  styleUrl: 'other-sites.scss'
})
export class OtherSites {

  @Prop() names: boolean;
  @Prop() twitter: string;
  @Prop() github: string;

  /**
   * When boolean value is 1, show service names.
   * When boolean value is 0, hide service names.
   */
  // getNames(): string {
  //   if (this.names == true) {
  //     return `aa`;
  //   } else if (this.names == false) {
  //     return ``;
  //   }
  // }

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
        {/* <li>{this.getNames()} Twitter: <a href={this.getTwitter()}>{this.twitter}</a></li> */}
        <li>Twitter: <a href={this.getTwitter()}>{this.twitter}</a></li>
        <li>GitHub: <a href={this.getGitHub()}>{this.github}</a></li>
      </ul>
    );
  }
}
