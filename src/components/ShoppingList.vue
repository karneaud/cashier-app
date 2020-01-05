<template lang="html">
  <div id="shopping-basket" class="bg-white">
      <div class="q-mb-lg">
        <header>
        <h6 class="q-my-sm text-center">
          Cash Items: <span class="q-badge">{{ total }}</span>
        </h6>
      </header>
        <q-separator spaced inset />
        <q-list v-show="total > 0" id="shoppin-list" separator>
          <q-item v-ripple v-for="(item, index) in items" :key="(item.productid) + index" class="q-pr-none q-mb-sm">
            <q-item-section avatar>
                <q-icon @click="removeItem(index)" name="close"/>
              </q-item-section>
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
        <h6 class="q-my-sm text-center" v-show="items.length == 0">No Items!</h6>
      </div>
      <q-toolbar class="fixed-bottom bg-grey-1">
        <q-toolbar-title class="text-center">
          Total:&nbsp;${{ totalAmount | formatNumber }}
        </q-toolbar-title>
      </q-toolbar>
    </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('items', [
      'currentItem',
      'total',
      'totalAmount'
    ]),
    ...mapState('items', {
      items: state => state.items
    })
  },
  methods: {
    ...mapActions('items', [
      'removeItem'
    ])
  }
}
</script>
