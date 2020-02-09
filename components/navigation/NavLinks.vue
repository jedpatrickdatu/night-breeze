<template>
  <div class="navLinks">
    <nuxt-link
      @click.native="close"
      class="navLinks__textLink navLinks__textLink--servicesLink"
      to="/services"
      >Our Services</nuxt-link
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
      <img
        class="facebookLinkButton__fbLogo"
        src="@/assets/images/FBLogo.svg"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  components: {},
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
