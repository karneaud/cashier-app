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
          <q-btn flat round dense id="shopping-action-button"  icon="shopping_basket" @click="showItems" v-show="total > 0" />
        </transition>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
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
  computed: {
    ...mapGetters('items', ['total'])
  },
  methods: {
    showItems() {
      this.$root.$emit('showItems')
    }
  }
}
</script>
