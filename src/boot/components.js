// import something here
import Numpad from '../components/Numpad.vue'
import MenuItemList from '../components/MenuItemList.vue'
import InputDisplay from '../components/InputDisplay.vue'
import ShoppingList from '../components/ShoppingList.vue'
import Transactions from '../components/Transactions.vue'
// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
  Vue.component('numpad', Numpad)
  Vue.component('menuitem-list', MenuItemList)
  Vue.component('input-display', InputDisplay)
  Vue.component('shopping-list', ShoppingList)
  Vue.component('transactions', Transactions)
}
