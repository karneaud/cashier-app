<template>
  <q-page class="flex full-height">
        <div class="row">
          <div class="col">
              <menuitem-list></menuitem-list>
          </div>
          <div class="col">
            <div class="fit q-pa-md bg-blue-grey-1">
              <numpad></numpad>
            </div>
          </div>
        </div>
       <q-btn fab id="shopping-action-button" class="bottom fixed-center" icon="shopping_basket" @click="showItems = !showItems" color="accent" />
       <shopping-list :show-list="showItems"></shopping-list>
  </q-page>
</template>
<style lang="scss">
</style>
<script>

export default {
  name: 'PageIndex',
  data() {
    return {
      showItems: false
    }
  }
}
</script>
