<template>
  <div class="numpad">
    <div class="row">
      <q-btn v-for="n in this.keypads" class="col-4" :flat="n !== 'add'" :color="n === 'add'? 'red' : 'primary'" size="xl"  :label="n" @click="press(n)"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Numpad',
  props: {
    keypads :  {
      type: Array,
      default: () => [1,2,3,4,5,6,7,8,9,0,'*','%',"add"]
    }
  },
  data() {
    return {
      numbers: "",
      operator: "*"
    }
  },
  methods: {
    press(key) {
      if(isNaN(key))this.operator = key
      else this.numbers.concact(key)
    },
    send() {
      let value = new Number(this.numbers).valueOf()
      this.$emit('pressed', value, operator)
    }
   }
}
</script>

<style>
</style>
