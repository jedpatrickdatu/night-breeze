import { shallowMount } from '@vue/test-utils'
import Description from './Description.vue'

describe('Description', () => {
  const wrapper = shallowMount(Description)

  it('renders the headline', () => {
    expect(wrapper.contains('.headline')).toEqual(true)
  })

  it('renders the body', () => {
    expect(wrapper.contains('.body')).toEqual(true)
  })

  describe('customer gallery', () => {
    let customerGallery

    beforeEach(() => {
      customerGallery = wrapper.find('.customerGallery')
    })

    it('gets rendered', () => {
      expect(customerGallery.exists()).toEqual(true)
    })

    it('renders the customer portraits', () => {
      const customerPortraits = customerGallery.findAll(
        'img.customerGallery__portrait'
      )

      customerPortraits.wrappers.forEach((portrait, index) => {
        const expectedImgSrc = `@/assets/images/CustomerPortrait${index +
          1}.png`
        expect(portrait.attributes().src).toEqual(expectedImgSrc)
      })
    })

    it('renders the CTA', () => {
      const CTA = customerGallery.find('button.customerGalleryCTA')

      expect(CTA.exists()).toEqual(true)
      expect(CTA.text()).toEqual('See List of Services and Prices')
    })
  })
})
