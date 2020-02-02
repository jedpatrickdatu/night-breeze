import { shallowMount } from '@vue/test-utils'
import Default from './default.vue'
import Navigation from '@/components/Navigation'

describe('Default', () => {
  const wrapper = shallowMount(Default, {
    stubs: ['nuxt']
  })

  it('renders the Navigation', () => {
    expect(wrapper.contains(Navigation)).toEqual(true)
  })
})
