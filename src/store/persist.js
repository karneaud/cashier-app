import VuexPersistence from 'vuex-persist'

const VuexLocal = new VuexPersistence({
  modules: ['user']
})

export default VuexLocal
