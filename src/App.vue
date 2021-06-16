<template>
  <div id="app">

    <header class="mainwhiteheader normlogo">
    <div class="container">
    <div class="maintextinf headflows"><h1 class="tincls">Covid-19 Re<span class="pinkgrds">s</span><span class="orgcolo">ource Hub</span></h1></div>
    <a href="#" class="rightlogoflow"><img src="./assets/images/flame.svg" class="fulllogo"> <img src="./assets/images/flame.svg" class="icononlylogo"></a>
    </div>
    </header>

    <swipeable-cards />
  </div>
</template>

<script>
import SwipeableCards from './components/SwipeableCards.vue';


export default {
  name: 'app',
  components: { SwipeableCards }
}
</script>

<style>
@import './assets/css/factfunstyles.css';
</style>
