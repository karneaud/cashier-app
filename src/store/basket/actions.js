export function addItem ({ commit }, item ) {
  commit('add', item )
}

export function removeItem ({ commit }, index ) {
  commit('remove', index )
}

export function clearItems ( { commit }) {
  commit('clear')
}

export function addItemQty( { commit }, qty ) {
  commit('multiply', qty)
}

export function addItemDiscount( { commit }, value ) {
  commit('discount', value)
}
