<template>
  <div class="nightBreeze">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'Default',
  components: {
    Navbar
  }
}
</script>

<style lang="sass">
@import './default.scss';
</style>
