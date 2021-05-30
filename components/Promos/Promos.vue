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
          Beauty and relaxation packages starting at 100 AED
        </div>
      </div>
      <div class="promoList">
        <div
          v-for="promo in promos"
          v-bind:key="promo.name"
          class="promo"
        >
          <div class="promoHeader">
            <div class="name">
              {{ promo.name }}
            </div>
            <div class="price">
              {{ promo.price }}
            </div>
          </div>
          <div class="serviceList">
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
        name: 'Package A',
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
        name: 'Package B',
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
        name: 'Package C',
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
        name: 'Package D',
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
        name: 'Package E',
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
        name: 'Package F',
        price: '100 AED',
        services: [
          'Full leg waxing',
          'Full arms waxing',
          'Eyebrows threading',
          'Underarms waxing',
        ]
      },
      {
        name: 'Package G',
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
