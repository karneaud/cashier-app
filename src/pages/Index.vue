<template>
  <q-page class="bg-blue-grey-1">
        <div class="flex absolute fit">
          <div class="flex col row">
            <div class="column flex col-7 q-pa-sm">
              <menuitem-list></menuitem-list>
            </div>
            <div class="col-5">
              <numpad></numpad>
            </div>
          </div>
        </div>
  </q-page>
</template>
<script>

export default {
  name: 'PageIndex'
}
</script>
