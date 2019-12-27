<template>
  <div class="navbar">
    <nuxt-link class="logoLink" to="/">
      <img class="logo" src="~/assets/images/LogoSmall.png" />
    </nuxt-link>
    <ul class="secondary-links">
      <li>
        <nuxt-link class="link servicesLink" to="/services"
          >Our Services</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="link contactUsLink" to="/contact-us"
          >Contact Us</nuxt-link
        >
      </li>
      <li>
        <nuxt-link class="link eventsLink" to="/events">Events</nuxt-link>
      </li>
      <li>
        <a class="fb-link" href="https://www.facebook.com/NightBreezeSalon/">
          <img class="fb-logo" src="~/assets/images/fbLogo.png" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="sass">
@import './Navbar.scss';
</style>
