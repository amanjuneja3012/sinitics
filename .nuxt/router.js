import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _da30d96e = () => import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */).then(m => m.default || m)
const _129201e4 = () => import('../pages/botic.vue' /* webpackChunkName: "pages/botic" */).then(m => m.default || m)
const _44c8da50 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _6480b515 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _f16707da = () => import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */).then(m => m.default || m)
const _31dd92c7 = () => import('../pages/_lang/pricing.vue' /* webpackChunkName: "pages/_lang/pricing" */).then(m => m.default || m)
const _355dc8e2 = () => import('../pages/_lang/botic.vue' /* webpackChunkName: "pages/_lang/botic" */).then(m => m.default || m)
const _6794a14e = () => import('../pages/_lang/about.vue' /* webpackChunkName: "pages/_lang/about" */).then(m => m.default || m)



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
			component: _da30d96e,
			name: "pricing"
		},
		{
			path: "/botic",
			component: _129201e4,
			name: "botic"
		},
		{
			path: "/about",
			component: _44c8da50,
			name: "about"
		},
		{
			path: "/",
			component: _6480b515,
			name: "index"
		},
		{
			path: "/:lang",
			component: _f16707da,
			name: "lang"
		},
		{
			path: "/:lang/pricing",
			component: _31dd92c7,
			name: "lang-pricing"
		},
		{
			path: "/:lang/botic",
			component: _355dc8e2,
			name: "lang-botic"
		},
		{
			path: "/:lang/about",
			component: _6794a14e,
			name: "lang-about"
		}
    ],
    
    
    fallback: false
  })
}
