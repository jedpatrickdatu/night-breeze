<template>
  <div class="description">
    <div class="mainContentContainer">
      <div class="mainContent">
        <div class="headline">
          There's a style for
          <span class="highlightedText">
            everyone.
          </span>
        </div>
        <div class="body">
          Located at Hamdan Bin Mohammed St., Abu Dhabi, Night Breeze is a
          full-service ladies salon that offers premium services at competitive
          prices. Be it a new hair style or a relaxing head massage, our
          friendly and knowledgeable staff are excited to assist you in any way
          possible.
        </div>
      </div>
    </div>
    <div class="customerGalleryContainer">
      <div class="customerGallery">
        <img
          class="customerGallery__portrait customerGallery__portrait--1"
          src="@/assets/images/CustomerPortrait1.png"
        />
        <img
          class="customerGallery__portrait customerGallery__portrait--2"
          src="@/assets/images/CustomerPortrait2.png"
        />
        <img
          class="customerGallery__portrait customerGallery__portrait--3"
          src="@/assets/images/CustomerPortrait3.png"
        />
        <img
          class="customerGallery__portrait customerGallery__portrait--4"
          src="@/assets/images/CustomerPortrait4.png"
        />
        <button class="customerGalleryCTA">
          See List of Services and Prices
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Description',
  components: {}
}
</script>

<style lang="sass" scoped>
@import './Description.scss';
</style>
