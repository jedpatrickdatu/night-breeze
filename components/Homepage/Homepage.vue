<template>
  <div class="homepage">
    <Hero />
    <PromoBanner />
    <Description />
    <ServicesBanner />
  </div>
</template>

<script>
import Hero from './Hero.vue'
import PromoBanner from './PromoBanner.vue'
import Description from './Description.vue'
import ServicesBanner from './ServicesBanner.vue'

export default {
  name: 'Homepage',
  components: {
    Hero,
    PromoBanner,
    Description,
    ServicesBanner
  }
}
</script>
