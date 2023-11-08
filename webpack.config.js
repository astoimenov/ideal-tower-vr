const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { InjectManifest } = require("workbox-webpack-plugin");

const plugins = [
  new CopyPlugin({
    patterns: [{ from: "src", to: "build" }],
  }),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(
    new InjectManifest({
      swDest: "./build/sw.js",
      maximumFileSizeToCacheInBytes: 500000000,
      swSrc: "./service-worker.js",
      modifyURLPrefix: {
        "build/": "./",
        "./build/": "./",
      },
    })
  );
}

module.exports = {
  entry: "./src/js/vendor.js",
  output: {
    filename: "./build/vendor.js",
    path: path.resolve(__dirname),
  },
  plugins,
  devServer: {
    static: {
      directory: path.join(__dirname, "build"),
    },
    compress: true,
    port: 9000,
  },
};
