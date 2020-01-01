import { shallowMount } from '@vue/test-utils'
import NavLinks from './NavLinks.vue'

describe('NavLinks', () => {
  const wrapper = shallowMount(NavLinks, {
    stubs: ['nuxt-link']
  })

  describe('Internal links', () => {
    it('renders the internal links', () => {
      assertLinkRendered(
        'nuxt-link-stub.navLinks__textLink--servicesLink',
        '/services'
      )
      assertLinkRendered(
        'nuxt-link-stub.navLinks__textLink--contactUsLink',
        '/contact-us'
      )
      assertLinkRendered(
        'nuxt-link-stub.navLinks__textLink--eventsLink',
        '/events'
      )
    })

    it('emits the event "close" when a link is clicked', () => {
      assertClickEmitsCloseEvent(
        'nuxt-link-stub.navLinks__textLink--servicesLink'
      )
      assertClickEmitsCloseEvent(
        'nuxt-link-stub.navLinks__textLink--contactUsLink'
      )
      assertClickEmitsCloseEvent(
        'nuxt-link-stub.navLinks__textLink--eventsLink'
      )
    })

    const assertLinkRendered = (selector, URL) => {
      const link = wrapper.find(selector)

      expect(link.exists()).toEqual(true)
      expect(link.attributes().to).toEqual(URL)
    }

    const assertClickEmitsCloseEvent = (selector) => {
      const link = wrapper.find(selector)
      link.trigger('click')

      expect(wrapper.emitted().close).toBeTruthy()
    }
  })

  it('renders the Facebook link', () => {
    const facebookLink = wrapper.find('a.fbLink')

    expect(facebookLink.exists()).toEqual(true)
    expect(facebookLink.attributes().href).toEqual(
      'https://www.facebook.com/NightBreezeSalon/'
    )

    const fbLogo = facebookLink.find('img.fbLink__fbLogo')
    expect(fbLogo.exists()).toEqual(true)
    expect(fbLogo.attributes().src).toEqual('~/assets/images/fbLogo.png')
  })
})
