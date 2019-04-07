<template lang="html">
  <div class="fit">
    <q-input v-model="filterText" bottom-slots>
      <template v-slot:append>
       <q-btn round flat icon="search" />
     </template>
    </q-input>
      <div class="container window-height scroll">
      <q-list bordered separator>
        <q-item clickable v-ripple v-for="(item, index) in filteredItems" :key="item.referenceid">
          <q-item-section @click.native="selectItemAt(index)">
          <q-item-label overline>{{ item.productitem }}</q-item-label>
          <q-item-label>${{ item.cost | formatNumber }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      </div>
  </div>
</template>

<script>
const DATA_URL = '/statics/data.json'//'https://script.googleusercontent.com/macros/echo?user_content_key=kgdyUzqFZfuVjMTnDk0vybnZqOkDXtOyiEtvtRkPd1zMVm-lXuP5quuBysIhkgDz4jVWdhojxCPHDDLilbp6O4teF5wchcvym5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMAKL8Dkb2fCosxeD8IBkIRr56m5kaiyo0PkdD87xLd0XLE9GqYh-Q00qZpz_rcIdyVat5nbPrdi&lib=MMf4lBzMS3S64qVRHlJaffCqfKfrijX5m';

export default {
  name: "MenuItemList",
  data() {
    return {
      items: [],
      filterText: ''
    }
  },
  created() {
    this.fetchData()
  },
  computed: {
    filteredItems() {
      return this.filterText <= 2? this.items : this.items.filter((item, i) => {
        return item.productitem.search(new RegExp(this.filterText, 'i')) !== -1
      })
    }
  },
  methods: {
    fetchData() {
      this.$axios
        .get(DATA_URL)
        .then((resp) => this.items = resp.data.response.data )
        .catch(err => console.log(err))
    },
    selectItemAt( index ) {
      this.$emit('selectedItem', this.filteredItems[index] )
    }
  }
}
</script>

<style lang="css">
</style>
