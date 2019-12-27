<template>
  <div class="night-breeze">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="sass" scoped>
@import './default.scss';
</style>
