<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
         	Cashier Application
          <span id="version" class="subtitle2">v{{ version }}</span>
        </q-toolbar-title>
        <transition-group appear enter-active-class="animated zoomIn"
        leave-active-class="animated zoomOut">
          <q-btn flat key="button-1" round dense id="shopping-action-button"  icon="shopping_basket" @click="left = !left" v-show="total > 0" />
          <q-btn flat key="button-2" round dense id="tx-action-button"  icon="receipt" @click="right = !right" v-show="totalAmount > 0 && total == 0" />
        </transition-group>
        <q-btn flat round dence id="help" icon="help" @click="(() => this.$router.push({ path: '/help' }))"/>
        <q-btn flat round dense id="stt-action-button" icon="settings_applications" @click="settings = !settings" />
      </q-toolbar>
    </q-header>
    <q-drawer overlay behavior="mobile" v-model="left" :width="300" side="left" bordered>
     <shopping-list></shopping-list>
    </q-drawer>
    <q-drawer
        side="right"
        v-model="right"
        overlay behavior="mobile" :width="300">
        <q-scroll-area class="fit">
          <transactions/>
        </q-scroll-area>
      </q-drawer>
      <q-drawer side="right" overlay behavior="mobile" :width="450" v-model="settings">
        <section>
          <header class="text-center"><h6 class="q-my-sm">Settings</h6></header>
          <q-separator/>
          <article class="container">
            <k-form @saved="settings = false" buttonText="Save"/>
          </article>
        </section>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer v-model="footer" reveal>
        <input-display></input-display>
    </q-footer>
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
      left: false,
      footer: false,
      right: false,
      settings: false
    }
  },
  computed: {
    ...mapGetters('items', ['total']),
    ...mapGetters('transactions',['totalAmount'])
  },
  watch: {
    'total': function(n, o) {
        if((n <= 0) && this.left) this.left = false

        this.footer = n > 0
    }
  }
}
</script>
