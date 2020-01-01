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
    <a class="fbLink" href="https://www.facebook.com/NightBreezeSalon/">
      <img class="fbLink__fbLogo" src="~/assets/images/fbLogo.png" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavLinks',
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
