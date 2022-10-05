<template lang="html">
  <div class="flex column fit">
    <div class="col-auto full">
      <q-input
        label-stacked
        outlined
        filled
        placeholder="Search Products"
        id="menu-item-filter"
        v-model="filterText"
        class="full"
        style="width:100%"
      >
        <template v-slot:append>
          <q-btn
            round
            flat
            :icon="filterText == '' ? 'search' : 'close'"
            @click="close"
          />
        </template>
      </q-input>
    </div>
    <div class="flex col">
      <q-scroll-area class="flex fit" style="min-height:100%; max-height:100%;">
        <q-list id="menu-item-list" bordered separator>
          <q-item
            clickable
            @click.native="selectItemAt(index)"
            v-ripple
            v-for="(item, index) in filteredItems"
            :key="item.productid"
          >
            <q-item-section>
              <q-item-label overline>{{ item.productitem }}</q-item-label>
              <q-item-label class="text-primary"
                >${{ item.cost | formatNumber }}</q-item-label
              >
            </q-item-section>
            <q-item-section side>
              <q-icon name="add" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "MenuItemList",
  data() {
    return {
      products: [],
      filterText: ""
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    filteredItems() {
      return this.filterText <= 2
        ? this.products
        : this.products.filter((item, i) => {
            return (
              item.productitem.search(new RegExp(this.filterText, "i")) !== -1
            );
          });
    },
    ...mapGetters("user", ["getSheetId"])
  },
  methods: {
    fetchData() {
      /*drive({ sheet: this.getSheetId
          , onload: (prom) => prom.then(
            (arr) => arr.map((item, index) => {
          item['qty'] = 1
          item['multiplier'] = 0
          return item
        }).sort((a, b) => {
            let x = a.productitem.toLowerCase(), y = b.productitem.toLowerCase()
            if (x < y) return -1
            else if (x > y) return 1

            return 0
        }))})
      .then(
        (resp) => this.products = resp )
        .catch(err => console.log(err))*/
    },
    close() {
      if (this.filterText !== "") this.filterText = "";
    },
    selectItemAt(index) {
      this.addItem(Object.assign({}, this.filteredItems[index]));
    },
    ...mapActions("items", ["addItem"])
  }
};
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
      font-size: 2rem;
    }

    .text-overline {
      font-size: 1.2rem;
    }
  }
}
</style>
