/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  // i18n 국제화
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
  },
};

module.exports = nextConfig;
