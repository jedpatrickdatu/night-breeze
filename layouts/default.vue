<template>
  <div class="nightBreeze">
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'
import Footer from '@/components/Footer/Footer'

export default {
  name: 'Default',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="sass">
@import './default.scss';
</style>
