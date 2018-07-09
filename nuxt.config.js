module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'buefy-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src:'https://use.fontawesome.com/releases/v5.0.7/js/all.js', async: true }
    ],
    link: [      
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/scss/main.scss'
  ],

  modules: [
    'nuxt-buefy',
    'nuxt-sass-resources-loader'
  ],

  sassResources: [
    '@/assets/scss/main.scss',
    '@/assets/scss/index.scss',
    
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
