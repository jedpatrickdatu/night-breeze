<template>
    <div class="promoBanner">
        <div class="mainContent">
            <div class="headlineContainer">
                <div class="headline">
                    SUMMER PROMO
                </div>
                <div class="date">
                    Jul 1 - Aug 31, 2021
                </div>
            </div>

            <div class="details">
                <div class="slogan">
                    Beauty and relaxation packages starting at
                </div>
            </div>

            <div class="price">
                <div class="priceNumber">100<span class="priceCurrency">AED</span></div>
            </div>

            <button
                class="seePackagesBtn"
                @click="goToPromos"
            >
                See Packages
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PromoBanner',
        components: {},
        methods: {
            goToPromos() {
                this.$router.push('/promos'); 
            }
        },
    }
</script>

<style lang="sass" scoped>
@import './PromoBanner.scss';
</style>
