export function totalAmount ( state ) {
  let total = state.transactions.sumWithFunc((item) => {
    return item.total
  })
  return total
}
