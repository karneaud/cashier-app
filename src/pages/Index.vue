<template>
  <q-page class="flex flex-center">
    <div style="width: 100%; height: calc(100vh - 112px); overflow:hidden">
      <div class="row" style="height: inherit">
        <div class="col scroll" style="height: 100%">
          <div class="container">
            <menuitem-list @selectedItem="itemSelected"></menuitem-list>
          </div>
        </div>
        <div class="col">
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
    },
    itemSelected(item) {
      this.$set( this.items, this.items.length, item)
    },
    discount(val){
      this.currentItem.multiplier = 0 - (val/ 100) * (parseFloat(this.currentItem.cost) * (this.currentItem.qty? this.currentItem.qty : 1))
    },
    multiply(val) {
      this.currentItem.qty = val;
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
    }
  }
}
</script>
