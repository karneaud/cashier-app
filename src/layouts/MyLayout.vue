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
    <q-footer class="bg-blue-grey-1 text-black">
      <input-display />
    </q-footer>
  </q-layout>
</template>
<script>
export default {

}
</script>
