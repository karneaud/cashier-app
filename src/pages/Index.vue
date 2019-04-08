<template>
  <q-page class="flex">
      <div class="row">
        <div class="col">
            <menuitem-list @selectedItem="itemSelected"></menuitem-list>
        </div>
        <div class="col">
          <div class="fit q-pa-md bg-blue-grey-1">
            <numpad @pressed="keypadPressed"></numpad>
          </div>
        </div>
      </div>
  </q-page>
</template>
<style>
</style>
<script>

export default {
  name: 'PageIndex',
  data() {
    return {
      items: []
    }
  },
  created() {
    //this.$on('calculate', this.calculate)
    this.$root.$on('reset', this.resetItems)
    this.$root.$on('clear', this.clearItem)
  },
  computed: {
    currentItem() {
      return this.items == null? null : this.items[this.items.length - 1]
    }
  },
  methods: {
    keypadPressed(...val) {
      if(this.currentItem == null) return false

      let [amt, operator ] = val
      switch (operator) {
        case "%":
          this.discount(amt)
          break;
        default:
          this.multiply(amt)
          break;
      }
      //this.$emit('calculate')
    },
    resetItems(){
      this.items = []
      //this.$emit('calculate')
    },
    clearItem() {
      this.$delete(this.items, this.items.length - 1)
    },
    itemSelected(item) {
      this.$set( this.items, this.items.length, item)
    },
    discount(val){
      this.currentItem.multiplier = 0 - ((val/ 100) * (parseFloat(this.currentItem.cost) * (this.currentItem.qty || 1))).toFixed(2)
      this.$set(this.items, this.items.length - 1, this.currentItem)
    },
    multiply(val) {
      this.currentItem.qty = val
      this.$set(this.items, this.items.length - 1, this.currentItem)
    },
    cash(val) {
      if(this.currentItem == null) return false

      switch(this.operator) {
        case "%":
          this.discount(val)
          break;
        default:
          this.multiply(val)
          break;
      }
    },
    calculate() {
        let amt = 0
        this.items.forEach(({ qty, cost, multiplier }, i ) => {
          amt += ((cost * (qty || 1)) + (multiplier || 0))
        })

        this.$root.$emit('calculated', amt)
    }
  },
  watch: {
    items: function(n,o) {
      this.calculate()
    }
  }
}
</script>
