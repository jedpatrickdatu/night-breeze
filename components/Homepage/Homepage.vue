<template>
  <div class="homepage">
    <Hero />
    <PromoBanner />
    <Description />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import PromoBanner from './PromoBanner.vue'
import Description from './Description.vue'

export default {
  name: 'Homepage',
  components: {
    Hero,
    PromoBanner,
    Description
  }
}
</script>

<style lang="sass" scoped>
@import './Homepage.scss';
</style>
