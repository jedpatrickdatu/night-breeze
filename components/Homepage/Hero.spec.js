import { shallowMount } from '@vue/test-utils'
import Hero from './Hero.vue'

describe('Hero', () => {
  const wrapper = shallowMount(Hero)

  it('renders the logo', () => {
    const logo = wrapper.find('.headline__logo')

    expect(logo.exists()).toEqual(true)
    expect(logo.attributes().src).toEqual('~/assets/images/Logo.png')
  })

  it('renders the header', () => {
    const header = wrapper.find('.title__header')

    expect(header.exists()).toEqual(true)
    expect(header.text()).toEqual('NIGHT BREEZE')
  })

  it('renders the subheader', () => {
    const subheader = wrapper.find('.title__subheader')

    expect(subheader.exists()).toEqual(true)
    expect(subheader.text()).toEqual('LADIES SALON')
  })

  it('renders the slogan', () => {
    const slogan = wrapper.find('.headline__slogan')

    expect(slogan.exists()).toEqual(true)
    expect(slogan.text()).toEqual('Let us help you find your new style.')
  })

  it('renders the book CTA', () => {
    const bookCTA = wrapper.find('button.headline__bookCTA')

    expect(bookCTA.exists()).toEqual(true)
    expect(bookCTA.text()).toEqual('Book an Appointment')
  })
})
