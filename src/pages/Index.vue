<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-6">
        <numpad @pressed="keypadPressed"></numpad>
      </div>
      <div class="col-6">

      </div>
    </div>
  </q-page>
</template>
<style>
</style>
<script>
export default {
  name: 'PageIndex',

  methods: {
    keypadPressed(val) {
      console.log('key pressed', val);
    }
  }
}
</script>
