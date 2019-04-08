<template>
  <div id="numpad" class="fit">
    <div class="row fit">
      <q-btn
        v-for="n, index in this.keypads"
        :key="index"
        v-bind:class="{ number: !isNaN(n) }"
        class="col-4 no-border-radius"
        :color="(/add/).test(n)? 'primary' : 'white'"
        :push="!isNaN(n) || (/[^\w\d]|(reset|clear)/).test(n)"
        :flat="(/reset|clear/).test(n)"
        :text-color="isKey(n)" size="2rem"  :label="n" @click="press(n)"/>
    </div>
  </div>
</template>
<script>
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
    }
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
    if(key == "add") this.send()
      else if(key == "clear") this.clear()
      else if(key == "reset") this.reset()
      else if(isNaN(key))this.operator = key
      else this.numbers = this.numbers.concat(key)
    },
    send() {
      this.$emit('pressed', this.amount, this.operator)
      this.clearData()
    },
    clear() {
      this.clearData()
      this.$root.$emit('clear')
    },
    reset() {
      this.clearData()
      this.$root.$emit('reset')
    },
    clearData() {
      this.operator = "*"
      this.numbers = ""
    }
   }
}
</script>
<style lang="scss">
#numpad {
  .number .q-btn__content {
    font-size: 102%;
    padding: 5%;
  }
}
</style>
