<template>
  <div class="homepage">
    <Hero />
    <Description />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import Description from './Description.vue'

export default {
  name: 'Homepage',
  components: {
    Hero,
    Description
  }
}
</script>

<style lang="sass" scoped>
@import './Homepage.scss';
</style>
