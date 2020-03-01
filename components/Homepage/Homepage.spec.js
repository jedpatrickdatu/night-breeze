import { shallowMount } from '@vue/test-utils'
import Homepage from './Homepage.vue'
import Hero from './Hero.vue'
import Description from './Description.vue'

describe('Homepage', () => {
  const wrapper = shallowMount(Homepage)

  it('renders the hero', () => {
    expect(wrapper.find(Hero).exists()).toEqual(true)
  })

  it('renders the description', () => {
    expect(wrapper.contains(Description))
  })
})
