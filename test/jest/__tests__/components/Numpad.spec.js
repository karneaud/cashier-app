import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import Quasar from "quasar";
import Numpad from '../../../../src/components/Numpad'

describe('Numpad component testing...', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar)
  const wrapper = shallowMount(Numpad)
  it('should be an object', () => {
    expect(wrapper.isVueInstance()).toBe(true);
  })
})
