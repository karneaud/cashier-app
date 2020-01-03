<template lang="html">
  <div id="tx-list" class="bg-white">
      <div class="q-mb-lg">
        <q-toolbar>
          <q-toolbar-title class="q-my-md q-px-lg">
            <h6 class="q-ma-none q-pa-none">Transactions</h6>
            <p class="text-caption q-ma-none">{{ Now.format("dddd, MMMM Do YYYY") }}</p>
          </q-toolbar-title>
          <q-btn flat @click="clearTransactions" round dense icon="delete" />
        </q-toolbar>
        <q-separator spaced inset />
        <q-list v-show="totalAmount > 0" id="transactions" separator class="q-mb-lg q-pb-lg">
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
      <q-toolbar class="fixed-bottom bg-grey-1">
        <q-toolbar-title>
          Total:&nbsp;${{ totalAmount | formatNumber }}
        </q-toolbar-title>
        <q-btn flat @click="downloadTransactions" round dense icon="cloud_download" />
      </q-toolbar>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import exportCSVFile from '../lib/csv'

export default {
  name: "Transactions",
  computed: {
    ...mapState('transactions', {
      transactionItems: (state) => state.transactions
    }),
    ...mapGetters('transactions', ['totalAmount'])
  },
  methods: {
    ...mapActions('transactions', [
      'clearTransactions'
    ]),
    downloadTransactions() {
      let items = Array.from(
          this.transactionItems,
          (o) => o.items).flatten()
      exportCSVFile(['id','qty','total'], items,'reconcile')
    }
  }
}
</script>
