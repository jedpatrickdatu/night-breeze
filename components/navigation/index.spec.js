import { shallowMount } from '@vue/test-utils'
import NavLinks from './NavLinks.vue'
import SideNav from './SideNav.vue'
import Navigation from './'

describe('Navigation', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Navigation, {
      stubs: ['nuxt-link']
    })
  })

  it('renders the navBar', () => {
    expect(wrapper.contains('.navBar')).toEqual(true)
  })

  it('sets the variable "isSideNavOpen" to false by default', () => {
    expect(wrapper.vm.isSideNavOpen).toEqual(false)
  })

  it('renders the logo link', () => {
    const logoLink = wrapper.find('nuxt-link-stub.logoLink')

    expect(logoLink.exists()).toEqual(true)
    expect(logoLink.attributes().to).toEqual('/')

    const logo = logoLink.find('img.logoLink__logo')
    expect(logo.exists()).toEqual(true)
    expect(logo.attributes().src).toEqual('~/assets/images/LogoSmall.png')
  })

  it('renders the links', () => {
    expect(wrapper.contains(NavLinks)).toEqual(true)
  })

  describe('hamburger button', () => {
    it('renders the hamburger button', () => {
      expect(wrapper.contains('.content__hamburgerBtn')).toEqual(true)
    })

    it('sets the variable isSideNavOpen to true when clicked', () => {
      const hamburger = wrapper.find('.content__hamburgerBtn')
      hamburger.trigger('click')

      expect(wrapper.vm.isSideNavOpen).toEqual(true)
    })
  })

  describe('side nav', () => {
    let sideNav

    beforeEach(() => {
      sideNav = wrapper.find(SideNav)
    })

    it('renders the side nav', () => {
      const sideNav = wrapper.find(SideNav)

      expect(sideNav.exists()).toEqual(true)
      expect(sideNav.attributes().isopen).toBeFalsy()
    })

    describe('when it receives the event "close"', () => {
      it('sets the variable "isSideNavOpen" to false', () => {
        sideNav.trigger('close')

        expect(wrapper.vm.isSideNavOpen).toEqual(false)
      })
    })
  })
})
