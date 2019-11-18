require('dotenv').config()

module.exports = /* eslint-disable-line nuxt/no-cjs-in-config */ {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      id: 'page-top'
    },
    titleTemplate: '%s - Smart Software',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'To do...'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  axios: {
    proxy: true
  },
  plugins: [],
  /*
   ** Nuxt.js build-modules
   */
  buildModules: [
    process.env.NODE_ENV !== 'production' ? '@nuxtjs/eslint-module' : ''
  ].filter(Boolean),
  eslint: {
    fix: true
  },
  googleAnalytics: {
    id: 'UA-391945-11'
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics',
    'cookie-universal-nuxt'
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
