<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-6">
        <div class="container scroll">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section>
              <q-item-label overline>OVERLINE</q-item-label>
              <q-item-label>Item with caption</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
      <div class="col-6">
        <numpad @pressed="keypadPressed"></numpad>
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
    }
  }
}
</script>
