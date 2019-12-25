
export default async ({ Vue }) => {
  Vue.mixin({
    data() {
      return {
        version: 0.1
      }
    },
    filters: {
      formatNumber(value) {
        if(value === 0) return "0.00"

        let number = new String(value), numArr = number.split('.')
        return (numArr[0].length < 4)?
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
