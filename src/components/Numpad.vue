<template>
  <div class="numpad">
    <div class="row">
      <div class="col-4" v-for="n in this.keypads">
         <q-btn flat color="primary" size="xl"  :label="n" @click="press(n)"/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Numpad',
  props: {
    keypads :  {
      type: Array,
      default: () => [1,2,3,4,5,6,7,8,9,0,'*','%','.','-','+']
    }
  },
  methods: {
    press(val) {
      this.$emit('pressed', val)
    }
   }
}
</script>

<style>
</style>
