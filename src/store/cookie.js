import Cookies from 'js-cookie'
import VuexPersistence from 'vuex-persist'

const VuexCookie = new VuexPersistence({
  restoreState: (key, storage) => Cookies.getJSON(key),
  saveState: (key, state, storage) => {
    if(state.transactions.transactions.length == 0) {
      Cookies.remove(key)
    } else Cookies.set(key, state, {
      expires: 1
    })
  },
  modules: ['transactions']
})

export default VuexCookie
