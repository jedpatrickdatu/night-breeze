<template>
  <div class="sideNav">
    <div class="sideNavContent">
      <div v-if="isOpen" @click="close" class="sideNavContent__backdrop"></div>
      <transition name="slide-side">
        <div v-if="isOpen" class="sideNavInnerContent">
          <button @click="close" class="sideNavInnerContent__closeBtn">
            <CloseIcon />
          </button>
          <NavLinks @close="close" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import NavLinks from './NavLinks.vue'
import CloseIcon from '@/assets/images/mobile/CloseIcon.svg'

export default {
  name: 'SideNav',
  components: {
    CloseIcon,
    NavLinks
  },
  props: {
    isOpen: { type: Boolean, default: false }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass">
@import './SideNav.scss';
</style>
