<template lang="html">
  <div id="shopping-basket" class="bg-white">
      <div class="q-mb-lg">
        <header class="q-my-sm q-px-sm">
        <h6 class="text-center q-ma-none">Transactions for:</h6>
        <p><small>{{ date }}</small></p>
      </header>
        <q-separator spaced inset />
        <q-list v-show="totalAmount > 0" id="transactions" separator>
          <q-item v-ripple v-for="(tx, index) in transactionItems" :key="('tx') + index" class="q-pr-none q-mb-sm">
            <q-item-section>
              <q-item-label>Total: ${{ tx.total | formatNumber }}</q-item-label>
              <q-item-label caption>
                <details>
                  <summary>Items</summary>
                  <p class="q-my-sm" v-for="(item, index) in tx.items">
                    <span>#{{ item.id }} <small>x</small> {{ item.qty }} <small>=</small>&nbsp;<strong>${{ item.total | formatNumber }}</strong></span>
                  </p>
                </details>
              </q-item-label>
              <q-item-label caption>
                Paid: ${{ tx.paid | formatNumber }}
              </q-item-label>
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
      date: (new Date).toString()
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
