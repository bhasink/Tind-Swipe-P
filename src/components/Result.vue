<template>
  

<div>  

    <transition name="component-fade" mode="out-in">

        <keep-alive>
        <component :is="resultComponent" :matcharraydata="matcharraydata" :score="score" @clicked="scoreCard" @goback="goBack" />
        </keep-alive>

    </transition>

</div>



 
</template>
<script>

import ResultData from '../components/ResultData.vue';
import ScoreCard from '../components/ScoreCard.vue';


export default {
  name: 'Result',
  props: ['score','matcharraydata'],
  data() {
    return {
      comp: ""
    };
  },
  computed: {
    resultComponent() {
      if (!this.comp) return ResultData;
      if (this.comp == "ScoreCard") return ScoreCard;

    }
  },
  methods: {
    scoreCard (value) {
      if(value == "ScoreCard"){
        this.comp = "ScoreCard";
      }
    },
    goBack(value){
         this.comp = "";
    }
  }
}
</script>

<style scoped>

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 0.1s ease-in-out;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
