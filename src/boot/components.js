// import something here
import Numpad from '../components/Numpad.vue'
import MenuItemList from '../components/MenuItemList.vue'
// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
  Vue.component('numpad', Numpad)
  Vue.component('menuitem-list', MenuItemList)
}
