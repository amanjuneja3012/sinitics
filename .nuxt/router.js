import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _49271b1e = () => import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */).then(m => m.default || m)
const _dd690a0e = () => import('../pages/botic.vue' /* webpackChunkName: "pages/botic" */).then(m => m.default || m)
const _78fb5936 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _398ba3ac = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _ffabdd30 = () => import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */).then(m => m.default || m)
const _69ab26dc = () => import('../pages/_lang/pricing.vue' /* webpackChunkName: "pages/_lang/pricing" */).then(m => m.default || m)
const _2e3b5e37 = () => import('../pages/_lang/botic.vue' /* webpackChunkName: "pages/_lang/botic" */).then(m => m.default || m)
const _607236a3 = () => import('../pages/_lang/about.vue' /* webpackChunkName: "pages/_lang/about" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/pricing",
			component: _49271b1e,
			name: "pricing"
		},
		{
			path: "/botic",
			component: _dd690a0e,
			name: "botic"
		},
		{
			path: "/about",
			component: _78fb5936,
			name: "about"
		},
		{
			path: "/",
			component: _398ba3ac,
			name: "index"
		},
		{
			path: "/:lang",
			component: _ffabdd30,
			name: "lang"
		},
		{
			path: "/:lang/pricing",
			component: _69ab26dc,
			name: "lang-pricing"
		},
		{
			path: "/:lang/botic",
			component: _2e3b5e37,
			name: "lang-botic"
		},
		{
			path: "/:lang/about",
			component: _607236a3,
			name: "lang-about"
		}
    ],
    
    
    fallback: false
  })
}
