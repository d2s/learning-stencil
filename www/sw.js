importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "build/app.js",
    "revision": "4d9ccbaac6fedc4f5fee568f12c849fc"
  },
  {
    "url": "build/app/app.ex5sm5gn.js",
    "revision": "96cfb527fb16b3745df3b17fb608b8f0"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "905896db4c96c2ffe4285cd63c098ca5"
  },
  {
    "url": "build/app/app.hnjisf54.js",
    "revision": "60ba8cef18c6e4d8ec6353a655461bac"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "1c37cbc52da34e4f38fb49835b16b8d9"
  },
  {
    "url": "build/app/hoagqr89.js",
    "revision": "71109d3e530d642a1a9584b82ba3768b"
  },
  {
    "url": "build/app/kw6fdfrx.js",
    "revision": "e8eafa17c452c0ba57062c5b49396b7a"
  },
  {
    "url": "build/app/n4gut1z5.js",
    "revision": "ec4080398ed11039b20cf0c94de4187a"
  },
  {
    "url": "build/app/nwcmwbhr.js",
    "revision": "3269b3d1a18de454047ecf75b648e08b"
  },
  {
    "url": "build/app/wawblzzc.js",
    "revision": "6b544ad3322fd7e547a56dc08dbda1d1"
  },
  {
    "url": "build/app/xcsiqb8n.js",
    "revision": "625655b95ca6b58f59f5576bbda0c9ff"
  },
  {
    "url": "build/app/xkguvzhd.js",
    "revision": "382c525e67c39b66187e34644d56a887"
  },
  {
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "e8431510a024223ec8ae77bc5904eab9"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
