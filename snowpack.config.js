/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/' },
  },
  plugins: ['@snowpack/plugin-sass'],
  buildOptions: {
    out: 'dist'
  },
  optimize: {
    bundle: true,
    minify: true
  }
};
