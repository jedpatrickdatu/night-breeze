<template>
  <div class="navLinks">
    <nuxt-link
      @click.native="close"
      class="navLinks__textLink navLinks__textLink--servicesLink"
      to="/services"
      >Services</nuxt-link
    >
    <nuxt-link
      @click.native="close"
      class="navLinks__textLink navLinks__textLink--promosLink"
      to="/promos"
      >Promos</nuxt-link
    >
    <nuxt-link
      @click.native="close"
      class="navLinks__textLink navLinks__textLink--contactUsLink"
      to="/contact-us"
      >Contact Us</nuxt-link
    >
    <nuxt-link
      @click.native="close"
      class="navLinks__textLink navLinks__textLink--eventsLink"
      to="/events"
      >Events</nuxt-link
    >
    <a
      class="facebookLinkButton"
      href="https://www.facebook.com/NightBreezeSalon/"
    >
      <FBLogo class="facebookLinkButton__icon" />
    </a>
  </div>
</template>

<script>
import FBLogo from '@/assets/images/FBLogo.svg'

export default {
  name: 'NavLinks',
  components: {
    FBLogo
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
