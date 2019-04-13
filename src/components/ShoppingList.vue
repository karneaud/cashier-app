<template lang="html">
  <transition appear :duration="1000"
 enter-active-class="animated slideInUp"
 leave-active-class="animated slideOutDown">
    <div v-show="showList" id="shopping-basket" style="width: 35%;" class="fixed-bottom bg-white">
      <div class="q-pa-sm">
        <h6 class="q-my-sm">Cash Items:</h6>
        <q-list v-if="items" id="shoppin-list" separator class="scroll">
          <q-item v-ripple v-for="(item, index) in items" :key="(item.referenceid) + 1">
            <q-item-section>
            <q-item-label>{{ item.productitem }} x {{ item.qty }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon @click="removeItem(index)" name="remove"/>
            </q-item-section>
             <q-separator spaced inset />
          </q-item>

        </q-list>
        <h6 v-show="!items">No Items!</h6>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  props: {
    showList: {
      type: Boolean,
      default: false
    }
  },
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

<style lang="css">
</style>
