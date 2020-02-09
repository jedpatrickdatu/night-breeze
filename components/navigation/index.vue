<template>
  <div class="navBar">
    <div class="content">
      <nuxt-link class="logoLink" to="/">
        <img class="logoLink__logo" src="@/assets/images/LogoSmall.png" />
      </nuxt-link>
      <NavLinks />
      <button @click="openSideNav" class="content__hamburgerButton">
        <img src="@/assets/images/mobile/HamburgerMenu.svg" />
      </button>
      <SideNav :is-open="isSideNavOpen" @close="closeSideNav" />
    </div>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
import NavLinks from './NavLinks.vue'

export default {
  name: 'Navigation',
  components: {
    SideNav,
    NavLinks
  },
  data() {
    return {
      isSideNavOpen: false
    }
  },
  methods: {
    openSideNav() {
      this.isSideNavOpen = true
    },
    closeSideNav() {
      this.isSideNavOpen = false
    }
  }
}
</script>

<style lang="sass">
@import './index.scss';
</style>
