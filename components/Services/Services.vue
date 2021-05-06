<template>
  <div class="services">
    <div class="content">
      <div class="column texts">
        <div class="headline">
          SERVICES
        </div>
        <div class="serviceList">
          <div
            v-for="service in services"
            v-bind:key="service.type"
            class="service"
          >
            <div class="serviceType">
              {{ service.type }}
            </div>
            <div
              v-for="subservice in service.subservices"
              v-bind:key="subservice.name"
              class="subservice"
            >
              <div class="serviceName">
                {{ subservice.name }}
              </div>
              <div class="price">
                {{ subservice.price }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column mapContainer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  components: {},
  data: () => ({
    services: [
      {
        type: 'Hair',
        subservices: [
          {
            name: 'Haircut',
            price: '19 AED and up'
          },
          {
            name: 'Hot oil',
            price: '19 AED'
          },
          {
            name: 'Hair spa',
            price: '19 AED'
          },
          {
            name: 'Color',
            price: '19 AED'
          },
          {
            name: 'Aloe vera treatment',
            price: '19 AED'
          }
        ]
      },
      {
        type: 'Nails',
        subservices: [
          {
            name: 'Manicure',
            price: '15 AED'
          },
          {
            name: 'Pedicure',
            price: '19 AED'
          },
          {
            name: 'Hair spa',
            price: '19 AED'
          }
        ]
      },
      {
        type: 'Lashes',
        subservices: [
          {
            name: 'Curl',
            price: '15 AED'
          }
        ]
      },
      {
        type: 'Massage',
        subservices: [
          {
            name: 'Head massage',
            price: '19 AED'
          },
          {
            name: 'Neck massage',
            price: '15 AED'
          },
          {
            name: 'Shoulder',
            price: '19 AED'
          },
          {
            name: '1-hour massage',
            price: '39 AED'
          }
        ]
      },
      {
        type: 'Hair removal',
        subservices: [
          {
            name: 'Eyebrow threading',
            price: '19 AED'
          },
          {
            name: 'Upper lip threading',
            price: '9 AED'
          },
          {
            name: 'Full legs waxing',
            price: '25 AED'
          },
          {
            name: 'Full arms waxing',
            price: '19 AED'
          },
          {
            name: 'Underarms waxing',
            price: '39 AED'
          }
        ]
      },
      {
        type: 'Bath',
        subservices: [
          {
            name: 'Moroccan bath',
            price: '39 AED'
          },
          {
            name: 'Neck massage',
            price: '15 AED'
          },
          {
            name: 'Shoulder',
            price: '19 AED'
          },
          {
            name: '1-hour massage',
            price: '39 AED'
          }
        ]
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
@import './Services.scss';
</style>
