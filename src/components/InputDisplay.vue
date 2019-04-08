<template lang="html">
  <div id="input-display" class="row q-pa-sm">
    <div class="col">
      <div class="fit flex items-end">
        <div class="q-px-sm text-red">
          <span class="subtitle">TOTAL: </span>
          <span class="text-h3">${{ total | formatNumber }}</span>
        </div>
      </div>
    </div>
    <div class="col">
        <div class="fit flex items-end">
      <div class="q-px-sm">
          <q-input  placeholder="Amount Paid?" label-stacked label="PAID:" prefix="$" v-model="paid"/>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="fit flex items-end justify-end">
        <div class="q-px-sm text-green">
          <span class="subtitle">BALANCE: </span>
          <span class="text-h4">${{ balance | formatNumber }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      total: 0.00,
      paid: 0.00
    }
  },
  created() {
    this.$root.$on('calculated', this.setTotal)
    this.$root.$on('reset', this.resetPaid)
  },
  computed: {
    balance() {
      return this.paid > 0? (this.paid - this.total) : 0
    }
  },
  methods: {
    setTotal(val) {
      this.total = val
    },
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
