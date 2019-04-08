<template lang="html">
    <div class="flex column fit">
      <q-input label-stacked placeholder="Search Products" id="menu-item-filter" v-model="filterText">
        <template v-slot:append>
         <q-btn round flat :icon="filterText == ''? 'search' : 'close'" @click="close" />
       </template>
      </q-input>
      <div class="overflow-hidden scroll" style="flex: 1 1 0%; height: 0">
        <q-scroll-area style="height: 100%;">
        <q-list id="menu-item-list" bordered separator class="scroll">
          <q-item clickable v-ripple v-for="(item, index) in filteredItems" :key="item.referenceid">
            <q-item-section @click.native="selectItemAt(index)">
            <q-item-label overline>{{ item.productitem }}</q-item-label>
            <q-item-label>${{ item.cost | formatNumber }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
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
        .then((resp) => this.items = resp.data.response.data.map((item, index) => {
          item['qty'] = 1
          item['multiplier'] = 0
          return item
        }).sort((a, b) => {
            let x = a.productitem.toLowerCase(), y = b.productitem.toLowerCase()
            if (x < y) return -1
            else if (x > y) return 1

            return 0
        }) )
        .catch(err => console.log(err))
    },
    selectItemAt( index ) {
      this.$emit('selectedItem', this.filteredItems[index] )
    },
    close() {
      if(this.filterText !== '') this.filterText = ''
    }
  }
}
</script>
<style lang="scss">
#menu-item-filter {
  .q-field__native {
    padding-left: 8px;
    font-size: 1.5rem;
  }
}
#menu-item-list {
  .q-item {
    .q-item__section {
      font-size: 1.8rem;
    }

     .text-overline {
       font-size: 1rem;

     }
  }
}
</style>
