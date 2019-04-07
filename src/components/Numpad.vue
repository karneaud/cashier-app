<template>
  <div class="numpad">
    <div class="row">
      <q-btn v-for="n, index in this.keypads" :key="index" class="col-4" :flat="n !== 'add'" :color="isKey(n)" size="xl"  :label="n" @click="press(n)"/>
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
          cl = "primary"
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
      this.clear()
    },
    clear() {
      this.operator = "*"
      this.numbers = ""
      this.$root.$emit('clear')
    },
    reset() {
      this.clear()
      this.$root.$emit('reset')
    }
   }
}
</script>

<style>
</style>
