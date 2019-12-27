import { mount } from '@vue/test-utils'
import HomepageHero from './HomepageHero.vue'

describe('HomepageHero', () => {
  const wrapper = mount(HomepageHero)

  it('renders the logo', () => {
    const logo = wrapper.find('.logo')

    expect(logo.exists()).toEqual(true)
    expect(logo.attributes().src).toEqual('~/assets/images/Logo.png')
  })

  it('renders the header', () => {
    const header = wrapper.find('.header')

    expect(header.exists()).toEqual(true)
    expect(header.text()).toEqual('NIGHT BREEZE')
  })

  it('renders the subheader', () => {
    const subheader = wrapper.find('.subheader')

    expect(subheader.exists()).toEqual(true)
    expect(subheader.text()).toEqual('LADIES SALON')
  })

  it('renders the slogan', () => {
    const slogan = wrapper.find('.slogan')

    expect(slogan.exists()).toEqual(true)
    expect(slogan.text()).toEqual('Let us help you find your new style.')
  })

  it('renders the book CTA', () => {
    const bookCTA = wrapper.find('button.book-cta')

    expect(bookCTA.exists()).toEqual(true)
    expect(bookCTA.text()).toEqual('Book an Appointment')
  })
})
