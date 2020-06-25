/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AboutPage {
    }
    interface BasicCard {
        "component_title": string;
        "content": string;
        "date": string;
        "description": string;
        "location": string;
        "youtube_video": string;
    }
    interface BasicEvent {
        "date": string;
        "description": string;
        "location": string;
        "name": string;
    }
    interface BasicSite {
        "component_title": string;
    }
    interface HomePage {
    }
    interface MyName {
        "first": string;
        "last": string;
    }
    interface OtherSites {
        "github": string;
        "twitter": string;
    }
    interface SiteHeader {
    }
    interface YoutubeVideo {
        "fullscreen": boolean;
        "height": number;
        "video": string;
        "width": number;
    }
}
declare global {
    interface HTMLAboutPageElement extends Components.AboutPage, HTMLStencilElement {
    }
    var HTMLAboutPageElement: {
        prototype: HTMLAboutPageElement;
        new (): HTMLAboutPageElement;
    };
    interface HTMLBasicCardElement extends Components.BasicCard, HTMLStencilElement {
    }
    var HTMLBasicCardElement: {
        prototype: HTMLBasicCardElement;
        new (): HTMLBasicCardElement;
    };
    interface HTMLBasicEventElement extends Components.BasicEvent, HTMLStencilElement {
    }
    var HTMLBasicEventElement: {
        prototype: HTMLBasicEventElement;
        new (): HTMLBasicEventElement;
    };
    interface HTMLBasicSiteElement extends Components.BasicSite, HTMLStencilElement {
    }
    var HTMLBasicSiteElement: {
        prototype: HTMLBasicSiteElement;
        new (): HTMLBasicSiteElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLMyNameElement extends Components.MyName, HTMLStencilElement {
    }
    var HTMLMyNameElement: {
        prototype: HTMLMyNameElement;
        new (): HTMLMyNameElement;
    };
    interface HTMLOtherSitesElement extends Components.OtherSites, HTMLStencilElement {
    }
    var HTMLOtherSitesElement: {
        prototype: HTMLOtherSitesElement;
        new (): HTMLOtherSitesElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLYoutubeVideoElement extends Components.YoutubeVideo, HTMLStencilElement {
    }
    var HTMLYoutubeVideoElement: {
        prototype: HTMLYoutubeVideoElement;
        new (): HTMLYoutubeVideoElement;
    };
    interface HTMLElementTagNameMap {
        "about-page": HTMLAboutPageElement;
        "basic-card": HTMLBasicCardElement;
        "basic-event": HTMLBasicEventElement;
        "basic-site": HTMLBasicSiteElement;
        "home-page": HTMLHomePageElement;
        "my-name": HTMLMyNameElement;
        "other-sites": HTMLOtherSitesElement;
        "site-header": HTMLSiteHeaderElement;
        "youtube-video": HTMLYoutubeVideoElement;
    }
}
declare namespace LocalJSX {
    interface AboutPage {
    }
    interface BasicCard {
        "component_title"?: string;
        "content"?: string;
        "date"?: string;
        "description"?: string;
        "location"?: string;
        "youtube_video"?: string;
    }
    interface BasicEvent {
        "date"?: string;
        "description"?: string;
        "location"?: string;
        "name"?: string;
    }
    interface BasicSite {
        "component_title"?: string;
    }
    interface HomePage {
    }
    interface MyName {
        "first"?: string;
        "last"?: string;
    }
    interface OtherSites {
        "github"?: string;
        "twitter"?: string;
    }
    interface SiteHeader {
    }
    interface YoutubeVideo {
        "fullscreen"?: boolean;
        "height"?: number;
        "video"?: string;
        "width"?: number;
    }
    interface IntrinsicElements {
        "about-page": AboutPage;
        "basic-card": BasicCard;
        "basic-event": BasicEvent;
        "basic-site": BasicSite;
        "home-page": HomePage;
        "my-name": MyName;
        "other-sites": OtherSites;
        "site-header": SiteHeader;
        "youtube-video": YoutubeVideo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-page": LocalJSX.AboutPage & JSXBase.HTMLAttributes<HTMLAboutPageElement>;
            "basic-card": LocalJSX.BasicCard & JSXBase.HTMLAttributes<HTMLBasicCardElement>;
            "basic-event": LocalJSX.BasicEvent & JSXBase.HTMLAttributes<HTMLBasicEventElement>;
            "basic-site": LocalJSX.BasicSite & JSXBase.HTMLAttributes<HTMLBasicSiteElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "my-name": LocalJSX.MyName & JSXBase.HTMLAttributes<HTMLMyNameElement>;
            "other-sites": LocalJSX.OtherSites & JSXBase.HTMLAttributes<HTMLOtherSitesElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "youtube-video": LocalJSX.YoutubeVideo & JSXBase.HTMLAttributes<HTMLYoutubeVideoElement>;
        }
    }
}
