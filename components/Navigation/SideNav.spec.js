import { shallowMount } from '@vue/test-utils'
import NavLinks from './NavLinks.vue'
import SideNav from './SideNav.vue'

describe('SideNav', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(SideNav, {
      propsData: {
        isOpen: true
      },
      stubs: ['nuxt-link']
    })
  })

  it('renders the side nav', () => {
    expect(wrapper.contains('.sideNav')).toEqual(true)
  })

  describe('prop "isOpen"', () => {
    describe('when true', () => {
      it('renders the sideNavContent__backdrop', () => {
        expect(wrapper.contains('.sideNavContent__backdrop')).toEqual(true)
      })

      it('renders the inner content', () => {
        expect(wrapper.contains('.sideNavInnerContent')).toEqual(true)
      })

      describe('close button', () => {
        let closeButton

        beforeEach(() => {
          closeButton = wrapper.find('.sideNavInnerContent__closeButton')
        })

        it('renders', () => {
          expect(closeButton.exists()).toEqual(true)
        })

        it('emits the event "close" when clicked', () => {
          closeButton.trigger('click')

          expect(wrapper.emitted().close).toBeTruthy()
        })
      })

      describe('nav links', () => {
        let navLinks

        beforeEach(() => {
          navLinks = wrapper.find(NavLinks)
        })

        it('renders the links', () => {
          expect(navLinks.exists()).toEqual(true)
        })

        it('emits the event "close" when it receives this event', () => {
          navLinks.vm.$emit('close')

          expect(wrapper.emitted().close).toBeTruthy()
        })
      })
    })

    describe('when false', () => {
      beforeEach(() => {
        wrapper = shallowMount(SideNav, {
          propsData: {
            isOpen: false
          },
          stubs: ['nuxt-link']
        })
      })

      it('does not render the sideNavContent__backdrop', () => {
        expect(wrapper.contains('.sideNavContent__backdrop')).toEqual(false)
      })

      it('does not render the inner content', () => {
        expect(wrapper.contains('.sideNavInnerContent')).toEqual(false)
      })
    })
  })

  it('renders the links', () => {
    expect(wrapper.contains(NavLinks)).toEqual(true)
  })
})
