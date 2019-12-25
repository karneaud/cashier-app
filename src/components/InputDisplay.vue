<template lang="html">
  <div id="input-display" class="q-mt-sm">
    <div class="row">
      <div class="col col-4">
        <div class="container full">
          <span class="subtitle">TOTAL:&nbsp;</span>
          <span class="text-h3">${{ totalAmount | formatNumber }}</span>
        </div>
      </div>
      <div class="col col-3">
        <div class="container full">
          <q-input :input-style="{ color: '#fff' }" filled item-aligned dense hide-bottom-space @focus="() => this.paid = ''" prefix="PAID: $" v-model="paid"/>
        </div>
      </div>
      <div class="col col-5">
        <div class="container full" style="height:100%;">
          <span class="subtitle">BALANCE:&nbsp;</span>
          <span class="text-h5">${{ balance | formatNumber  }}</span>
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
  footer {
    .row {
      .col {
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    .q-field__native, .q-field__prefix, .q-field__suffix {
      color: white;
    }
  }
</style>
