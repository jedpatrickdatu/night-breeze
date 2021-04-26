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
        <GmapMap
          :center="NBPoint"
          :zoom="18"
          map-type-id="terrain"
          style="width: 500px; height: 500px; border: 1px solid #000000"
        >
          <GmapMarker
            :position="NBPoint"
            :clickable="true"
            :draggable="true"
            title="Night Breeze Ladies Salon"
          />
        </GmapMap>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUs',
  components: {},
  data: () => ({
    NBPoint: { lat: 24.488276194961433, lng: 54.36007201534355 }
  })
}
</script>

<style lang="sass" scoped>
@import './ContactUs.scss';
</style>
