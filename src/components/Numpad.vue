<template>
  <div id="numpad" class="flex flex-wrap fit row">
    <q-btn
      v-for="n, index in this.keypads"
      :key="index"
      v-bind:class="{ number: !isNaN(n) }"
      class="col-4 flex-shrink no-border-radius"
      :color="(/add/).test(n)? 'primary' : 'white'"
      :push="!isNaN(n) || (/[^\w\d]|(reset|clear)/).test(n)"
      :flat="(/reset|clear/).test(n)"
      :text-color="isKey(n)" :label="n" @click="press(n)"/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Numpad',
  props: {
    keypads :  {
      type: Array,
      default: () => [1,2,3,4,5,6,7,8,9,0,'*','%',"add","clear","reset"]
    }
  },
  data() {
    return {
      numbers: "",
      operator: "*"
    }
  },
  computed: {
    amount() {
      return this.numbers == ""? 1 : new Number(this.numbers).valueOf()
    },...mapGetters('items', ['currentItem'])
  },
  methods: {
    isKey(key) {
      var cl = "primary"
      switch (key) {
        case "add":
          cl = "white"
          break;
        case "clear":
          cl = "secondary"
          break;
        case "reset":
          cl = "red"
        default:
          break;
      }

      return cl
    },
    press(key) {
      if(key == "add") this.calculate()
      else if(key == "clear") this.clear()
      else if(key == "reset") this.reset()
      else if(isNaN(key))this.operator = key
      else this.numbers = this.numbers.concat(key)
    },
    calculate() {
      if(!this.currentItem) return
      else if(this.operator == '%') this.addItemDiscount(this.amount)
      else this.addItemQty(this.amount)

      this.clearData()
    },
    clear() {
      this.clearData()
      this.removeItem()
    },
    reset() {
      this.$root.$emit('reset')
      this.clearData()
      this.clearItems()
    },
    clearData() {
      this.operator = "*"
      this.numbers = ""
    }, ...mapActions('items', ['removeItem', 'clearItems', 'addItemQty', 'addItemDiscount'])
   }
}
</script>
<style lang="scss">
#numpad {
  .number.q-btn {
    font-size: 150%;
  }
}
</style>
