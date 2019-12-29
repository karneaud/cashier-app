export function addTransaction ({ commit }, item ) {
  commit('add', item )
}

export function clearTransactions ( { commit }) {
  commit('clear')
}
