import { mount } from '@vue/test-utils'
import Navbar from './Navbar.vue'

describe('HomepageHero', () => {
  const wrapper = mount(Navbar, {
    stubs: ['nuxt-link']
  })

  it('renders the link logo', () => {
    const logoLink = wrapper.find('nuxt-link-stub.logoLink')

    expect(logoLink.exists()).toEqual(true)
    expect(logoLink.attributes().to).toEqual('/')

    const logo = logoLink.find('img.logo')
    expect(logo.exists()).toEqual(true)
    expect(logo.attributes().src).toEqual('~/assets/images/LogoSmall.png')
  })

  it('renders the Services link', () => {
    const servicesLink = wrapper.find('nuxt-link-stub.servicesLink')

    expect(servicesLink.exists()).toEqual(true)
    expect(servicesLink.attributes().to).toEqual('/services')
  })

  it('renders the Contact Us link', () => {
    const contactUsLink = wrapper.find('nuxt-link-stub.contactUsLink')

    expect(contactUsLink.exists()).toEqual(true)
    expect(contactUsLink.attributes().to).toEqual('/contact-us')
  })

  it('renders the Events link', () => {
    const eventsLink = wrapper.find('nuxt-link-stub.eventsLink')

    expect(eventsLink.exists()).toEqual(true)
    expect(eventsLink.attributes().to).toEqual('/events')
  })

  it('renders the Facebook link', () => {
    const facebookLink = wrapper.find('a.fb-link')

    expect(facebookLink.exists()).toEqual(true)
    expect(facebookLink.attributes().href).toEqual(
      'https://www.facebook.com/NightBreezeSalon/'
    )

    const fbLogo = facebookLink.find('img.fb-logo')
    expect(fbLogo.exists()).toEqual(true)
    expect(fbLogo.attributes().src).toEqual('~/assets/images/fbLogo.png')
  })
})
