import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _0e7cac7f = () => import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */).then(m => m.default || m)
const _e8301ecc = () => import('../pages/botic.vue' /* webpackChunkName: "pages/botic" */).then(m => m.default || m)
const _83c26df4 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _4452b86a = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _d8b3eb6e = () => import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */).then(m => m.default || m)
const _e3e72906 = () => import('../pages/_lang/pricing.vue' /* webpackChunkName: "pages/_lang/pricing" */).then(m => m.default || m)
const _41b75718 = () => import('../pages/_lang/botic.vue' /* webpackChunkName: "pages/_lang/botic" */).then(m => m.default || m)
const _73ee2f84 = () => import('../pages/_lang/about.vue' /* webpackChunkName: "pages/_lang/about" */).then(m => m.default || m)



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
			component: _0e7cac7f,
			name: "pricing"
		},
		{
			path: "/botic",
			component: _e8301ecc,
			name: "botic"
		},
		{
			path: "/about",
			component: _83c26df4,
			name: "about"
		},
		{
			path: "/",
			component: _4452b86a,
			name: "index"
		},
		{
			path: "/:lang",
			component: _d8b3eb6e,
			name: "lang"
		},
		{
			path: "/:lang/pricing",
			component: _e3e72906,
			name: "lang-pricing"
		},
		{
			path: "/:lang/botic",
			component: _41b75718,
			name: "lang-botic"
		},
		{
			path: "/:lang/about",
			component: _73ee2f84,
			name: "lang-about"
		}
    ],
    
    
    fallback: false
  })
}
