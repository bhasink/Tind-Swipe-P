<template>
  

<div>  

    <transition name="component-fade">

        <keep-alive>
        <component :is="gameComponent" 
        :cards="cards"
        :score="score"
        :matcharraydata="matcharraydata"
        @clicked="onClickChild" 
        @score_data="score_data" 
        @matcharray="matcharray"
         />
        </keep-alive>

    </transition>

</div>



 
</template>


<script>
import Game from '../components/Game.vue';
import ScoreCard from '../components/ScoreCard.vue';


export default {
  name: 'Cards',
  data() {
    return {
      comp: "",
      card_data: [
        { src: 'injection.png', name: 'You need both jabs of the vaccine to get immunized.', type: 'Fact' },
        { src: 'injection.png', name: 'You can stop wearing a mask after getting your jab/s.', type: 'Myth' },
        { src: 'injection.png', name: 'You can’t take the vaccine while you’re pregnant.', type: 'Fact' },
        { src: 'injection.png', name: 'You can celebrate getting your jab with some alcohol.', type: 'Myth' },
        { src: 'injection.png', name: 'You can never get COVID after getting vaccinated.', type: 'Myth' },
        { src: 'injection.png', name: 'The vaccine has mild side effects.', type: 'Fact' },
        { src: 'injection.png', name: 'You can take the vaccine immediately after recovering from COVID.', type: 'Myth' },
        { src: 'injection.png', name: 'You can take the vaccine on your period.', type: 'Fact' },
        { src: 'injection.png', name: 'I don’t need a vaccine if all my family members have taken it.', type: 'Myth' },
        { src: 'injection.png', name: 'Vaccines released for emergency authorisation use are safe.', type: 'Fact' },
        { src: 'injection.png', name: 'You don’t need vaccine if you’re young and healthy.', type: 'Myth' },
        { src: 'injection.png', name: 'Certain blood types have less severe COVID-19 infections, so getting a vaccine isn’t necessary.', type: 'Myth' },
        { src: 'injection.png', name: 'Vaccines used in India aren’t of the global standards.', type: 'Myth' },
        { src: 'injection.png', name: 'Vaccine will make you infertile.', type: 'Myth' },
        { src: 'injection.png', name: 'Getting the COVID-19 vaccine gives you COVID-19.', type: 'Myth' }

      ],
      cards:[],
      score:"",
      matcharraydata:""
    };
  },
  computed: {
    gameComponent() {
      if (!this.comp) return Game;
      if (this.comp == "ScoreCard") return ScoreCard;

    }
  },
  methods: {
    onClickChild (value) {
      if(value == 5){
          this.comp = "ScoreCard";
      }

    },
    score_data(value){
        this.score = value;
    },
    matcharray(value){
        this.matcharraydata = value;
    },
    shuffle(){
        var n=5;
        var shuffled = this.card_data.sort(function(){return .5 - Math.random()});
        var selected=shuffled.slice(0,n);
        this.cards = selected;
    }

  },
 beforeMount(){
    this.shuffle()
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



