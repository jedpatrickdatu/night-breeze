<template>
  <div class="navBar">
    <div class="content">
      <nuxt-link class="logoLink" to="/">
        <img class="logoLink__logo" src="@/assets/images/LogoSmall.png" />
      </nuxt-link>
      <NavLinks />
      <button @click="openSideNav" class="content__hamburgerButton">
        <HamburgerMenu />
      </button>
      <SideNav :is-open="isSideNavOpen" @close="closeSideNav" />
    </div>
  </div>
</template>

<script>
import SideNav from './SideNav.vue'
import NavLinks from './NavLinks.vue'
import HamburgerMenu from '@/assets/images/mobile/HamburgerMenu.svg'

export default {
  name: 'Navigation',
  components: {
    SideNav,
    NavLinks,
    HamburgerMenu
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
