<template lang="html">
  <div id="input-display" class="q-pa-sm">
    <div class="row text-red border-bottom q-my-md">
        <div class="col">
          <span class="subtitle">TOTAL: </span>
        </div>
        <div class="col text-right">
          <span class="text-h3">${{ totalAmount | formatNumber }}</span>
        </div>
      </div>
      <div class="row q-mb-md">
        <div class="col">
            <q-input @blur="() => this.paid > 0? this.paid : 0" @focus="() => this.paid = this.paid > 0? this.paid : ''" label-stacked label="ENTER AMOUNT PAID:" prefix="$" v-model="paid"/>
          </div>
    </div>
    <div class="row text-green">
       <div class="col">
          <span class="subtitle">BALANCE: </span>
        </div>
        <div class="col text-right">
          <span class="text-h4">${{ balance | formatNumber }}</span>
        </div>
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
