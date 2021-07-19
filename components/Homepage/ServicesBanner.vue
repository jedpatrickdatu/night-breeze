<template>
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
</template>

<script>
export default {
  name: 'ServicesBanner',
  components: {}
}
</script>

<style lang="sass" scoped>
@import './ServicesBanner.scss';
</style>
