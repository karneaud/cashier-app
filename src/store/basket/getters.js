Array.prototype.sumWithFunc = function (func) {
        var total = 0
        for ( var i = 0, _len = this.length; i < _len; i++ ) {
            total += func.call(this, this[i])
        }
        return total
    }

export function total ( state ) {
  return state.items.length > 0? state.items.map((item) => item.qty ).reduce((total, item) => total + item ) : 0
}

export function currentItem ( state ) {
  return state.items.length == 0? null : state.items[ (state.items.length - 1) ]
}

export function totalAmount ( state ) {
  let total = state.items.sumWithFunc((item) => {
    return ( parseFloat(item.cost) + item.multiplier) * item.qty
  })
  return total
}

export function getItems( state) {
  return state.items
}
