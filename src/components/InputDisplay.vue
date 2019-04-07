<template lang="html">
  <div id="input-display" class="row q-pa-sm">
    <div class="col text-red">
      <span class="subtitle">Total: </span>
      <span style="font-size:3.2rem">${{ total | formatNumber }}</span>
    </div>
    <div class="col">
      <div class="q-mx-md">
        <q-input label-stacked label="paid" prefix="$" v-model="paid"/>
      </div>
    </div>
    <div class="col text-green">
      <span class="subtitle">Change: </span>
      <span style="font-size:2.2rem">${{ balance | formatNumber }}</span>
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
    this.$root.$on('clear', this.clearPaid)
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
    clearPaid() {
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
