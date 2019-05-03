<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
         	Cashier Application
          <span id="version" class="subtitle2">v{{ version }}</span>
        </q-toolbar-title>
        <transition appear enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut">
          <q-btn flat round dense id="shopping-action-button"  icon="shopping_basket" @click="left = !left" v-show="total > 0" />
        </transition>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="left" side="left" bordered>
     <shopping-list></shopping-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="warning"
      size="10px"
    />
  </q-layout>
</template>
<style lang="css">
  #version {
    font-size: .8rem;
  }
</style>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      left: false
    }
  },
  computed: {
    ...mapGetters('items', ['total'])
  },
  watch: {
    'total': function(n, o) {
        if((n <= 0) && this.left) this.left = false
    }
  }
}
</script>
