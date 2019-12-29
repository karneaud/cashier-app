<template lang="html">
  <div id="shopping-basket" class="bg-white">
      <div class="q-mb-lg">
        <header>
        <h6 class="q-my-sm text-center">
          Transactions for: <span class="q-badge">{{ date }}</span>
        </h6>
      </header>
        <q-separator spaced inset />
        <q-list v-show="totalAmount > 0" id="transactions" separator>
          <q-item v-ripple v-for="(item, index) in transactionItems" :key="('tx') + index" class="q-pr-none q-mb-sm">
            <q-item-section>
              <q-item-label>{{ item.productitem }}</q-item-label>
              <q-item-label caption>${{ ((parseFloat(item.cost) + item.multiplier) * item.qty) | formatNumber }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-badge color="primary">{{ item.qty }}</q-badge>
            </q-item-section>
             <q-separator spaced inset />
          </q-item>
        </q-list>
        <h6 class="q-my-sm text-center" v-show="transactionItems.length == 0">No Transactions!</h6>
      </div>
      <p class="fixed-bottom q-mb-none q-pa-sm text-center bg-blue-grey-1">Total:&nbsp;<small>${{ totalAmount | formatNumber }}</small></p>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: "Transactions",
  data() {
    return {
      date: Date.now
    }
  },
  computed: {
    ...mapState('transactions', {
      transactionItems: (state) => state.transactions
    }),
    ...mapGetters('transactions', ['totalAmount'])
  },
  methods: {
    ...mapActions('transactions', [
      'clearTransactions'
    ])
  }
}
</script>
