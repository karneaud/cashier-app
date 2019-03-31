// import something here
import Numpad from '../components/Numpad.vue'
// leave the export, even if you don't use it
export default async ({ app, router, Vue }) => {
  Vue.component('numpad', Numpad)
}
