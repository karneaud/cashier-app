import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'
import isAuth from './auth'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as is and change from quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })

  Router.beforeEach(async (to,from, next) => {
    to.matched.some( route =>{
      if(route.meta.requiresAuth){
        isAuth().then((r) => {
          if(!r)
        }).catch(() => {
          next({ path: '/login' })
        })
      }

      next()
    })
  })

  return Router
}
