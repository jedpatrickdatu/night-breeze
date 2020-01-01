<template>
  <div class="navBar">
    <div class="content">
      <nuxt-link class="logoLink" to="/">
        <img class="logoLink__logo" src="~/assets/images/LogoSmall.png" />
      </nuxt-link>
      <NavLinks />
      <button @click="openSideNav" class="content__hamburgerBtn">
        <HamburgerMenu />
      </button>
      <SideNav :is-open="isSideNavOpen" @close="closeSideNav" />
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '@/assets/images/mobile/HamburgerMenu.svg'
import SideNav from '@/components/SideNav.vue'
import NavLinks from '@/components/NavLinks.vue'

export default {
  name: 'NavBar',
  components: {
    HamburgerMenu,
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
@import './NavBar.scss';
</style>
