const withPWA = require("next-pwa");
const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
});

module.exports = withPlugins([
  withImages, withFonts,
], {
  trailingSlash: false,
  cleanUrls: true,
  basePath: '',
  swcMinify: true, //You can opt-in to using the Next.js compiler for minification. This is 7x faster than Terser.
  compress: true,
  images: {
    domains: ['ui8-bitcloud.herokuapp.com']
  },
  env: {
    hostBaseUrl: 'http://localhost:3000'
  },
  defaultLocale: 'en',
});