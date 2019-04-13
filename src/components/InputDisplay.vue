<template lang="html">
  <div id="input-display" class="q-mt-sm">
    <div class="row">
      <div class="col text-red">
        <span class="subtitle">TOTAL: </span>
        <p class="text-h3">${{ totalAmount | formatNumber }}</p>
      </div>
      <div class="col text-right text-green">
        <span class="subtitle">BALANCE: </span>
        <p class="text-h5">${{ balance | formatNumber  }}</p>
      </div>
    </div>
    <q-input @focus="() => this.paid = ''" label-stacked label="ENTER AMOUNT PAID:" prefix="$" v-model="paid"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      paid: 0.00
    }
  },
  created() {
    this.$root.$on('reset', this.resetPaid)
  },
  computed: {
    balance() {
      return this.paid > 0? (this.paid - this.totalAmount ) : 0
    }, ...mapGetters('items', ['totalAmount'])
  },
  methods: {
    resetPaid() {
      this.paid = 0
    }
  }
}
</script>
<style lang="scss">

</style>
