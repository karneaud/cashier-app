<template lang="html">
  <div id="shopping-basket" class="bg-white">
      <div class="q-py-sm">
        <h6 class="q-my-sm text-center">
          Cash Items:
        </h6>
        <q-separator spaced inset />
        <q-list v-show="items.length > 0" id="shoppin-list" separator>
          <q-item v-ripple v-for="(item, index) in items" :key="(item.referenceid) + index" class="q-pr-none">
            <q-item-section avatar>
                <q-icon @click="removeItem(index)" name="close"/>
              </q-item-section>
            <q-item-section>
              <q-item-label>{{ item.productitem }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-badge color="primary"> {{ item.qty }}</q-badge>
            </q-item-section>
             <q-separator spaced inset />
          </q-item>
        </q-list>
        <h6 class="q-my-sm text-center" v-show="items.length == 0">No Items!</h6>
      </div>
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
