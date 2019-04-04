<template lang="html">
  <q-list bordered separator>
    <q-item clickable v-ripple v-for="(item, index) in items" :key="item.referenceid">
      <q-item-section @click.native="selectItemAt(index)">
      <q-item-label overline>{{ item.productitem }}</q-item-label>
      <q-item-label>{{ item.cost }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
const DATA_URL = '/statics/data.json'//'https://script.googleusercontent.com/macros/echo?user_content_key=kgdyUzqFZfuVjMTnDk0vybnZqOkDXtOyiEtvtRkPd1zMVm-lXuP5quuBysIhkgDz4jVWdhojxCPHDDLilbp6O4teF5wchcvym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMAKL8Dkb2fCosxeD8IBkIRr56m5kaiyo0PkdD87xLd0XLE9GqYh-Q00qZpz_rcIdyVat5nbPrdi&lib=MMf4lBzMS3S64qVRHlJaffCqfKfrijX5m';

export default {
  name: "MenuItemList",
  data() {
    return {
      items: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$axios
        .get(DATA_URL)
        .then((resp) => this.items = resp.data.response.data )
        .catch(err => console.log(err))
    },
    selectItemAt( index ) {
      this.$emit('selectedItem', this.items[index] )
    }
  }
}
</script>

<style lang="css">
</style>
