import Cookies from 'js-cookie'
import VuexPersistence from 'vuex-persist'

const VuexCookie = new VuexPersistence({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) =>
    Cookies.set(key, state, {
      expires: 1
    }),
  modules: ['transactions']
})

export default VuexCookie
