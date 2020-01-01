import { shallowMount } from '@vue/test-utils'
import Default from './default.vue'
import NavBar from '@/components/NavBar'

describe('Default', () => {
  const wrapper = shallowMount(Default, {
    stubs: ['nuxt']
  })

  it('renders the NavBar', () => {
    expect(wrapper.contains(NavBar)).toEqual(true)
  })
})
