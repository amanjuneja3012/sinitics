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



const scrollBehavior = function(to, from, savedPosition) {
      if (to.hash) {
          return {selector: to.hash}
      } else {
          return { x: 0, y: 0 }
      }
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
