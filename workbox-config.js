module.exports = {
  clientsClaim: true,
  globDirectory: "./",
  globPatterns: ["**/*.{js,ico,png,html,json,wav,jpg,mp4,mov,css}"],
  swDest: "./src/js/sw.js",
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  maximumFileSizeToCacheInBytes: 524000000,
};
