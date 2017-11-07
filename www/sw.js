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
    "revision": "54c6fe6a77cda4d80ff67d0fe2fd4ebd"
  },
  {
    "url": "build/app/2txpa8gx.js",
    "revision": "24aca4765251aa664846c63320df5060"
  },
  {
    "url": "build/app/app.global.js",
    "revision": "905896db4c96c2ffe4285cd63c098ca5"
  },
  {
    "url": "build/app/app.ldpuklsb.js",
    "revision": "bff82b3d901d61e7a4f524958035cf96"
  },
  {
    "url": "build/app/app.registry.json",
    "revision": "11d6c23145ab42094cee53c049eb3174"
  },
  {
    "url": "build/app/app.ubbz8hou.pf.js",
    "revision": "80117c142792518b79372ae6c775111d"
  },
  {
    "url": "build/app/bvnmhjep.js",
    "revision": "54a474ce8f59f0b5a52f29ce49811d66"
  },
  {
    "url": "build/app/eyjkbzds.js",
    "revision": "de33059c02e2a28e7603e31b540bc1d2"
  },
  {
    "url": "build/app/n4gut1z5.js",
    "revision": "ec4080398ed11039b20cf0c94de4187a"
  },
  {
    "url": "build/app/qkqczmoc.js",
    "revision": "d351c6f59a1b041fd7840d7301b64dac"
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
    "url": "favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "index.html",
    "revision": "e8431510a024223ec8ae77bc5904eab9"
  },
  {
    "url": "workbox-sw.prod.v2.0.1.js",
    "revision": "679d4e73dc756b21e46ee8f1bb52c882"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
