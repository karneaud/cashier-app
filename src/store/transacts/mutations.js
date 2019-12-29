export function add (state , item ) {
  state.transactions.push(item)
}

export function clear(state) {
  state.transactions = []
}
