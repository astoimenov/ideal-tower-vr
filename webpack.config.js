const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/js/vendor.js",
  output: {
    filename: "./build/vendor.js",
    path: path.resolve(__dirname),
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "src", to: "build" }],
    }),
    new InjectManifest({
      swDest: "./build/sw.js",
      maximumFileSizeToCacheInBytes: 500000000,
      swSrc: "./service-worker.js",
      modifyURLPrefix: {
        "build/": "/",
        "./build/": "/",
      },
    }),
  ],
};
