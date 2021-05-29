<template>
  <div class="promos">
    <div class="content">
      <div class="header">
        <div class="headline">
          SUMMER PROMO
        </div>
        <div class="date">
          Jul 1 - Aug 31, 2021
        </div>
        <div class="starting-price">
          Starting at only 100 AED
        </div>
      </div>
      <div class="promoList">
        <div
          v-for="promo in promos"
          v-bind:key="promo.packageName"
          class="promo"
        >
          <div class="packageName">
            {{ promo.packageName }}
          </div>
          <div
            v-for="service in promo.services"
            v-bind:key="service"
            class="service"
          >
            <div class="service">
              {{ service }}
            </div>
          </div>
        </div>
      </div>
      <div class="bookBtnContainer">
        <hr
          class="bookLine"
        />
        <button
          class="bookBtn"
          @click="goToContactUs"
        >
          Book an Appointment Now
        </button>
        <hr class="bookLine" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promos',
  components: {},
   methods: {
   goToContactUs() {
    this.$router.push('/contact-us'); 
  }
  },
  data: () => ({
    promos: [
      {
        packageName: 'Package A',
        price: '100 AED',
        services: [
          'Roots or highlights',
          'Hot oil treatment',
          'Pedicure',
          'Foot spa',
          'Head massage',
          'Upper lip threading',
          'Eyebrows threading',
          'Blow dry'
        ]
      },
      {
        packageName: 'Package B',
        price: '100 AED',
        services: [
          'Moroccan bath',
          'Manicure',
          'Pedicure',
          'Foot spa',
          'Hot oil treatment',
          'Blow dry',
          'Upper lip threading',
          'Eyebrows threading',
        ]
      },
      {
        packageName: 'Package C',
        price: '100 AED',
        services: [
          'Aloe Vera treatment',
          'Hair spa',
          'Head massage',
          'Neck massage',
          'Shoulder massage',
          'Blow dry',
          'Eyebrows threading',
          'Upper lip threading',
        ]
      },
      {
        packageName: 'Package D',
        price: '100 AED',
        services: [
          'Full hair color',
          'Haircut',
          'Blow dry',
          'Manicure or pedicure',
          'Upper lip threading',
          'Hot oil treatment',
        ]
      },
      {
        packageName: 'Package E',
        price: '100 AED',
        services: [
          'Moroccan bath',
          'Normal facial',
          'Hot oil treatment',
          'Eyebrows threading',
          'Upper lip threading',
          'Underarms waxing',
          'Blow dry',
        ]
      },
      {
        packageName: 'Package F',
        price: '100 AED',
        services: [
          'Full leg waxing',
          'Full arms waxing',
          'Eyebrows threading',
          'Underarms waxing',
        ]
      },
      {
        packageName: 'Package G',
        price: '150 AED',
        services: [
          'Moroccan bath',
          '1-hour massage',
          'Aloe vera treatment plus hot oil treatment'
        ]
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
@import './Promos.scss';
</style>
