export function add (state , item ) {
  state.items.push(item)
}

export function remove(state, index) {
  state.items.splice(index || (state.items.length - 1), 1) 
}

export function clear(state) {
  state.items = []
}

export function discount(state, val) {
  let item = state.items[state.items.length - 1]
  item.multiplier = 0 - ((val/ 100) * (parseFloat(item.cost) * (item.qty || 1))).toFixed(2)
  state.items[ state.items.length - 1 ] = item
}

export function multiply (state, val ) {
  let item = state.items[state.items.length - 1]
  item.qty = val
  state.items[state.items.length - 1] = item
}
