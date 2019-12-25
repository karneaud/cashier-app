import Vue from 'vue'
import Vuex from 'vuex'

import items from './basket'
import user from './user'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      items,
      user
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false 
  })

  return Store
}
