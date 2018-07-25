module.exports = {
  loading: { color: 'cyan' },
  router: {
    middleware: 'i18n',
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition){
      return { x: 0, y: 0 }
    }
  },
  plugins: ['~/plugins/i18n.js','~/plugins/commonPlugins'],
  generate: {
    routes: ['/', '/about', '/fr', '/fr/about']
  },
  modules: [
	  // provide path to the file with resources
	  ['nuxt-sass-resources-loader', './static/styles/desktop/home.scss'],
    ['nuxt-device-detect']
	],
	head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ]
	  },
  css: [
    // SCSS file in the project
    '@/static/styles/desktop/home.scss'
  ]
}
