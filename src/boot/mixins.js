import moment from 'moment'

Array.prototype.sumWithFunc = function (func) {
    var total = 0
    for ( var i = 0, _len = this.length; i < _len; i++ ) {
        total += func.call(this, this[i])
    }

    return total
}

Array.prototype.flatten = function() {
  let a = new Array
  for ( var i = 0, _len = this.length; i < _len; i++ ) {
      a = a.concat((Array.isArray(this[i])? this[i].flatten() : [this[i]] ))
  }

  return a
}

export default async ({ Vue }) => {
  Vue.mixin({
    data() {
      return {
        version: '0.0.4',
        Now: moment()
      }
    },
    filters: {
      formatNumber(value) {
        if(value === 0) return "0.00"

        let number = new String(parseFloat(value).toFixed(2)), numArr = number.split('.')
        return (numArr[0].length < 1)?
          number
          : ((numArr[0]
            .split('')
            .reverse())
          .reduceRight(
            (a, b, i, arr) => {
              let n = i + 1
              return a.concat((n > 2 && n % 3 == 0? "," : ""), b)
            }))
          .concat(".", numArr[1])
      }
    }
  })
}
