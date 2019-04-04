<template>
  <q-page class="flex flex-center">
    <div style="width: 100%; height: calc(100vh - 112px); overflow:hidden">
      <div class="row" style="height: inherit">
        <div class="col scroll" style="height: 100%">
          <div class="container">
            <menuitem-list @selectedItem="itemSelected"></menuitem-list>
          </div>
        </div>
        <div class="col">
          <numpad @pressed="keypadPressed"></numpad>
        </div>
      </div>
    </div>
  </q-page>

</template>
<style>
</style>
<script>

export default {
  name: 'PageIndex',
  data() {
    return {
      items: []
    }
  },

  methods: {
    keypadPressed(val) {
      console.log('key pressed', val);
    },
    itemSelected(item) {
      console.log('item selected is', item )
    }
  }
}
</script>
