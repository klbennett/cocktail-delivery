const webpack = require("webpack");
require("dotenv").config();

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  assetPrefix: !debug ? "/cocktail-delivery/" : "",
  generateBuildId: async () => "current",
  webpack: (config) => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});

    config.plugins.push(new webpack.DefinePlugin(env));

    return config;
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/profile": { page: "/profile" },
      "/auth": { page: "/auth" },
      "/results": { page: "/results" },
      "/favourites": { page: "/favourites" },
    };
  },
};
