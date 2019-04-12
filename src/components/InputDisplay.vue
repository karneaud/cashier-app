<template lang="html">
  <div id="input-display" class="row q-pa-sm">
    <div class="col">
        <div class="q-px-sm text-red">
          <span class="subtitle">TOTAL: </span>
          <span class="text-h3">${{ totalAmount | formatNumber }}</span>
        </div>
        <div class="q-px-sm">
          <span class="subtitle">BALANCE: </span>
          <span class="text-h4">${{ balance | formatNumber }}</span>
        </div>
        <div class="q-px-sm">
          <q-input @focus="() => this.paid = ''" placeholder="Amount Paid?" label-stacked label="ENTER AMOUNT PAID:" prefix="$" v-model="paid"/>
        </div>
    </div>
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
#input-display {
  .q-field--float .q-field__label {
    transform: translate3d(0, -80%, 0) scale3d(0.75, 0.75, 0.75);
  }

  .q-field--labeled .q-field__native {
    font-size: 2.4rem;
    padding-bottom: 10px;
  }
}
</style>
