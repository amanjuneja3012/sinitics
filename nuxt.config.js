module.exports = {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n'
  },
  plugins: ['~/plugins/i18n.js','~/plugins/commonPlugins'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },
  modules: [
	  // provide path to the file with resources
	  ['nuxt-sass-resources-loader', './static/styles/desktop/home.scss']
	],
	head: {
	    link: [
	      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css' }
	    ]
	  }
}
