<template lang="html">
  <transition appear :duration="1000"
 enter-active-class="animated slideInUp"
 leave-active-class="animated slideOutDown">
    <div v-show="showList" id="shopping-basket" style="width: 35%; height: 45vh" class="fixed-bottom bg-white">
      <h3>Shopping List</h3>
      <q-list id="shoppin-list" bordered separator class="scroll">
        <q-item v-ripple v-for="(item, index) in items" :key="(item.referenceid) + 1">
          <q-item-section>
          <q-item-label>{{ item.productitem }} x {{ item.qty }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon @click="removeItem(index)" name="remove"/>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    showList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showItems: false
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
    removeItem(index) {
      this.$delete(this.items, index)
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

<style lang="css">
</style>
