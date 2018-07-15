module.exports = {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n',
    scrollBehavior: function(to, from, savedPosition) {
      if (to.hash) {
          return {selector: to.hash}
      } else {
          return { x: 0, y: 0 }
      }
    }
  },
  plugins: ['~/plugins/i18n.js','~/plugins/commonPlugins'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },
  modules: [
	  // provide path to the file with resources
	  ['nuxt-sass-resources-loader', './static/styles/desktop/home.scss','nuxt-device-detect']
	],
	head: {
	    link: [
	      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
	  }
}
