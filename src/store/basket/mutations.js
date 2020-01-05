export function add (state , item ) {
  let index = state.items.length > 0? state.items.findIndex((i) => item.productid === i.productid) : -1
  if(index != -1) {
    item = state.items.splice(index, 1)[0]
    item.qty += 1
  }
  
  state.items.push(item)
}

export function remove (state, index) {
  state.items.splice(index || (state.items.length - 1), 1)
}

export function clear (state) {
  state.items = []
}

export function discount (state, val) {
  let item = state.items[state.items.length - 1]
  item.multiplier = 0 - ((val/ 100) * parseFloat(item.cost)).toFixed(2)
  state.items[ state.items.length - 1 ] = item
}

export function multiply (state, val ) {
  let item = state.items[state.items.length - 1]
  item.qty = val
  state.items[state.items.length - 1] = item
}
