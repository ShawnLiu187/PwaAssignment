importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.css",
    "revision": "70f09347cf1ce563e5cf1828b940585e"
  },
  {
    "url": "img/offline.jpg",
    "revision": "ab9c676c3e5150f7af577ecc74b73feb"
  },
  {
    "url": "img/online.jpg",
    "revision": "2898f089da6def8529f32fb43eea0a87"
  },
  {
    "url": "index.html",
    "revision": "e94593bf05aed42cbf9a53ce3e94a1a8"
  },
  {
    "url": "js/app.js",
    "revision": "714d5cd5d47b458e10c97ccec4ed2e28"
  }
]);

workbox.routing.registerRoute(
    new RegExp('http://api.openweathermap.org'),
    workbox.strategies.cacheFirst()
  );

//  workbox.routing.registerRoute(
//    new RegExp('http://openweathermap.org/img/'),
//    workbox.strategies.cacheFirst()
//  );

//const FALLBACK_IMAGE_URL = 'img/offline.jpg';
//
//workbox.routing.registerRoute(
//  new RegExp('/img/'),
//  async ({event}) => {
//    try {
//      return await workbox.strategies.cacheFirst().handle({event});
//    } catch (error) {
//      return caches.match(FALLBACK_IMAGE_URL);
//    }
//  }
//);
console.log("trying sw src");