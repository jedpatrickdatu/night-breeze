<template>
  <div class="nightBreeze">
    <Navigation />
    <nuxt />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'

export default {
  name: 'Default',
  components: {
    Navigation
  }
}
</script>

<style lang="sass">
@import './default.scss';
</style>
