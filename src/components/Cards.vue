<template>
  

<div>  

    <transition name="component-fade" mode="out-in">

        <keep-alive>
        <component :is="gameComponent" 
        :cards="cards"
        :score="score"
        :matcharraydata="matcharraydata"
        @clicked="onClickChild" 
        @score_data="score_data" 
        @matcharray="matcharray" />
        </keep-alive>

    </transition>

</div>



 
</template>


<script>
import Game from '../components/Game.vue';
import Result from '../components/Result.vue';


export default {
  name: 'Cards',
  data() {
    return {
      comp: "",
      card_data: [
        { src: 'injection.png', name: 'You need both jabs of the vaccine to get immunized.', type: 'fact' },
        { src: 'injection.png', name: 'You can stop wearing a mask after getting your jab/s.', type: 'myth' },
        { src: 'injection.png', name: 'You can’t take the vaccine while you’re pregnant.', type: 'fact' },
        { src: 'injection.png', name: 'You can celebrate getting your jab with some alcohol.', type: 'myth' },
        { src: 'injection.png', name: 'You can never get COVID after getting vaccinated.', type: 'myth' },
        { src: 'injection.png', name: 'The vaccine has mild side effects.', type: 'fact' },
        { src: 'injection.png', name: 'You can take the vaccine immediately after recovering from COVID.', type: 'myth' },
        { src: 'injection.png', name: 'You can take the vaccine on your period.', type: 'fact' },
        { src: 'injection.png', name: 'I don’t need a vaccine if all my family members have taken it.', type: 'myth' },
        { src: 'injection.png', name: 'Vaccines released for emergency authorisation use are safe.', type: 'fact' },
        { src: 'injection.png', name: 'You don’t need vaccine if you’re young and healthy.', type: 'myth' },
        { src: 'injection.png', name: 'Certain blood types have less severe COVID-19 infections, so getting a vaccine isn’t necessary.', type: 'myth' },
        { src: 'injection.png', name: 'Vaccines used in India aren’t of the global standards.', type: 'myth' },
        { src: 'injection.png', name: 'Vaccine will make you infertile.', type: 'myth' },
        { src: 'injection.png', name: 'Getting the COVID-19 vaccine gives you COVID-19.', type: 'myth' }

      ],
      cards:[],
      score:"",
      matcharraydata:""
    };
  },
  computed: {
    gameComponent() {
      if (!this.comp) return Game;
      if (this.comp == "Result") return Result;

    }
  },
  methods: {
    onClickChild (value) {
      if(value == 5){
          this.comp = "Result";
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
  transition: opacity 0.8s ease-in-out;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>



