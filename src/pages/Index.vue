<template>
  <q-page class="flex full-height">
        <div class="row">
          <div class="col">
              <menuitem-list></menuitem-list>
          </div>
          <div class="col">
            <div class="fit q-pa-md bg-blue-grey-1">
              <div class="row">
                  <div class="col">
                    <numpad></numpad>
                  </div>
              </div>
              <div class="row">
                <div class="col">
                  <input-display></input-display>
                </div>
              </div>
            </div>
          </div>
        </div>
       <transition appear enter-active-class="animated zoomIn"
       leave-active-class="animated zoomOut">
         <q-btn fab id="shopping-action-button" class="bottom fixed-center" icon="shopping_basket" @click="showItems = !showItems" color="accent" v-show="total > 0" />
       </transition>
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
