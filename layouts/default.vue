<template>
  <div class="nightBreeze">
    <NavBar />
    <nuxt />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  name: 'Default',
  components: {
    NavBar
  }
}
</script>

<style lang="sass">
@import './default.scss';
</style>
