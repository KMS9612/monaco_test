const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      new MonacoWebpackPlugin({
        languages: ["javascript", "json"],
      })
    );

    return config;
  },
};

module.exports = nextConfig;
