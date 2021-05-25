<template>
  <div class="footer">
    <div class="content">
      <div class="logo">
        <nuxt-link class="logoLink" to="/">
          <img class="logoLink__img" src="@/assets/images/Logo.png" />
        </nuxt-link>
        <div class="logoLabel">
          <h1 class="logoLabel__header">NIGHT BREEZE</h1>
          <h2 class="logoLabel__subheader">LADIES SALON</h2>
        </div>
      </div>
      <div class="texts">
        <div class="text-section">
          <div class="header">
            Contact Us
          </div>
          <div class="body">
            <p>02 627 7735</p>
            <p>Beside Al Ahalia Hospital, Building 6</p>
            <p>Hamdan Bin Mohammed St.</p>
            <p>Abu Dhabi, United Arab Emirates</p>
          </div>
        </div>
        <div class="text-section">
          <div class="header">
            Hours
          </div>
          <div class="body">
            <p>02 627 7735</p>
            <p>Mon-Thurs, Sat-Sun: 9AM - 9PM</p>
            <p>Fri: 1PM - 9AM</p>
          </div>
          <div class="followUs">
            <div class="header">
              Follow Us
            </div>
              <a
                class="facebookLinkButton"
                href="https://www.facebook.com/NightBreezeSalon/"
              >
                <FBLogo class="facebookLinkButton__icon" />
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FBLogo from '@/assets/images/FBLogo.svg'

export default {
  name: 'Footer',
  components: {
    FBLogo
  },
}
</script>

<style lang="sass">
@import './Footer.scss';
</style>
