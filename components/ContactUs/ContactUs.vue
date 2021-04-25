<template>
  <div class="contactUs">
    <div class="content">
      <div class="texts">
        <div class="headline">
          Come Visit Us!
        </div>
        <div class="storeDetails">
          <div class="section">
            <div class="header">
              Make an appointment
            </div>
            <div class="body">
              Phone: 02 627 7735
            </div>
          </div>
          <div class="section">
            <div class="header">
              Location
            </div>
            <div class="body">
              <p>Beside Al Ahalia Hospital, Building 6</p>
              <p>Hamdan Bin Mohammed St.</p>
              <p>Abu Dhabi, United Arab Emirates</p>
            </div>
          </div>
          <div class="section">
            <div class="header">
              Hours
            </div>
            <div class="body">
              <p>Saturday to Sunday - 9AM to 9PM</p>
              <p>Friday - 1PM to 9PM</p>
            </div>
          </div>
        </div>
      </div>
      <div class="mapContainer">
        <GMap
          ref="gMap"
          :cluster="{ options: { styles: clusterStyle } }"
          :center="{ lat: locations[0].lat, lng: locations[0].lng }"
          :options="{ fullscreenControl: false, styles: mapStyle }"
          :zoom="6"
          language="en"
        >
          <GMapMarker
            v-for="location in locations"
            :key="location.id"
            :position="{ lat: location.lat, lng: location.lng }"
            :options="{
              icon:
                location === currentLocation ? pins.selected : pins.notSelected
            }"
            @click="currentLocation = location"
          >
            <GMapInfoWindow :options="{ maxWidth: 200 }">
              <code> lat: {{ location.lat }}, lng: {{ location.lng }} </code>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapCircle :options="circleOptions" />
        </GMap>
        <!-- <div id="map"></div>
        <script
          async
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCW7IRcUCPwPOrJIFIzt8gRvJvhB2RTSYs&callback=initMap"
        ></script> -->
      </div>
      <!-- <gmap-map :center="center" :map-type-id="mapTypeId" :zoom="5">
        <gmap-marker
          v-for="(item, index) in markers"
          :key="index"
          :position="item.position"
          @click="center = item.position"
        />
      </gmap-map> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {},
  data: () => ({
    currentLocation: {},
    circleOptions: {},
    locations: [
      {
        lat: 44.933076,
        lng: 15.629058
      },
      {
        lat: 45.815,
        lng: '15.9819'
      },
      {
        lat: '45.12',
        lng: '16.21'
      }
    ],
    pins: {
      selected: 'data:image/png;base64,iVBORw0KGgo...',
      notSelected: 'data:image/png;base64,iVBORw0KGgo...'
    },
    mapStyle: [],
    clusterStyle: [
      {
        url:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
        width: 56,
        height: 56,
        textColor: '#fff'
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
@import './ContactUs.scss';
</style>
