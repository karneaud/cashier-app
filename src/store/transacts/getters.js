export function totalAmount ( state ) {
  return state.transactions.length > 0? state.transactions.reduce((t, c, i, a) => t + c.totalAmount ) : 0
}
