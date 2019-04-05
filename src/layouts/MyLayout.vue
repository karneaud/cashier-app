<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
         	Cashier Application
        </q-toolbar-title>
        <div>v{{ version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-grey-1">
      <q-toolbar>
        <q-input type="number" prefix="$" :value="total" label="Total" stack-label />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      total: 0
    }
  },
  created() {
    this.$root.$on('getTotal', this.setTotal)
  },
  methods: {
    setTotal(val) {
      this.total = total
    }
  }
}
</script>
