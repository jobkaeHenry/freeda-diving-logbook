const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = [new TsconfigPathsPlugin()];
    const rules = config.module.rules;
    const fileLoaderRule = rules.find((rule) => rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;
    rules.push({ test: /\.svg$/, use: ["@svgr/webpack"] });
    return config;
  },
};
