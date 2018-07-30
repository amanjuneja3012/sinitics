import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5fa96066 = () => import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */).then(m => m.default || m)
const _5fe30f68 = () => import('../pages/botic.vue' /* webpackChunkName: "pages/botic" */).then(m => m.default || m)
const _dbcc3058 = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _9c5c7ace = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _68d352d2 = () => import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */).then(m => m.default || m)
const _e9ca476a = () => import('../pages/_lang/pricing.vue' /* webpackChunkName: "pages/_lang/pricing" */).then(m => m.default || m)
const _79a7a366 = () => import('../pages/_lang/botic.vue' /* webpackChunkName: "pages/_lang/botic" */).then(m => m.default || m)
const _a843085c = () => import('../pages/_lang/about.vue' /* webpackChunkName: "pages/_lang/about" */).then(m => m.default || m)



const scrollBehavior = function (to, from, savedPosition){
      return { x: 0, y: 0 }
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
			component: _5fa96066,
			name: "pricing"
		},
		{
			path: "/botic",
			component: _5fe30f68,
			name: "botic"
		},
		{
			path: "/about",
			component: _dbcc3058,
			name: "about"
		},
		{
			path: "/",
			component: _9c5c7ace,
			name: "index"
		},
		{
			path: "/:lang",
			component: _68d352d2,
			name: "lang"
		},
		{
			path: "/:lang/pricing",
			component: _e9ca476a,
			name: "lang-pricing"
		},
		{
			path: "/:lang/botic",
			component: _79a7a366,
			name: "lang-botic"
		},
		{
			path: "/:lang/about",
			component: _a843085c,
			name: "lang-about"
		}
    ],
    
    
    fallback: false
  })
}
