import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { cacheNames } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { RangeRequestsPlugin } from "workbox-range-requests";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";

const allEntries = self.__WB_MANIFEST; // Injected by WorkboxWebpackPlugin at compile time
const videoEntries = allEntries.filter((entry) => entry.url.endsWith(".mp4"));
const restEntries = allEntries.filter((entry) => !entry.url.endsWith(".mp4"));

precacheAndRoute(restEntries);

const videoCacheName = `${cacheNames.prefix}-videos-${cacheNames.suffix}`;

self.addEventListener("install", (event) => {
  const allVideosAddedToCache = caches
    .open(videoCacheName)
    .then((videoCache) => {
      const videoUrls = videoEntries.map((entry) => entry.url);

      return videoCache.addAll(videoUrls);
    });
  event.waitUntil(allVideosAddedToCache);
});

registerRoute(
  (route) => route.url.pathname.endsWith(".mp4"),
  new CacheFirst({
    cacheName: videoCacheName,
    plugins: [
      new CacheableResponsePlugin({ statuses: [200] }),
      new RangeRequestsPlugin(),
    ],
    matchOptions: {
      ignoreSearch: true,
      ignoreVary: true,
    },
  })
);

registerRoute(
  (route) => route.url.origin === "https://cdn.aframe.io",
  new CacheFirst({
    cacheName: `${cacheNames.prefix}-aframe-cdn-${cacheNames.suffix}`,
    plugins: [new CacheableResponsePlugin({ statuses: [200] })],
    matchOptions: {
      ignoreSearch: true,
      ignoreVary: true,
    },
  })
);
