
export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Charles Jewell',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Charles Jewell is a London based Web developer'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/jpg', href: '/favicon-32x32.jpg', sizes: '32x32' },
      { rel: 'icon', type: 'image/jpg', href: '/favicon-16x16.jpg', sizes: '16x16' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Titillium+Web:300,400'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  }
}
