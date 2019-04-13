<template>
  <q-page class="bg-blue-grey-1">
        <div class="flex absolute fit">
          <div class="flex col row">
            <div class="flex col-7 q-pa-sm">
              <menuitem-list></menuitem-list>
            </div>
            <div class="col-5">
              <div class="fit column q-pa-sm">
                <div class="col-7">
                  <numpad></numpad>
                </div>
                <div class="col-5">
                  <input-display></input-display>
                </div>
              </div>
            </div>
          </div>
        </div>
         <q-page-sticky position="bottom-right" :offset="[325,25]">
         <transition appear enter-active-class="animated zoomIn"
         leave-active-class="animated zoomOut">
           <q-btn fab id="shopping-action-button"  icon="shopping_basket" @click="showItems = !showItems" color="accent" v-show="total > 0" />
         </transition>
       </q-page-sticky>
       <shopping-list :show-list="showItems"></shopping-list>
  </q-page>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PageIndex',
  data() {
    return {
      showItems: false
    }
  },
  computed: {
    ...mapGetters('items', ['total'])
  }
}
</script>
