<template>
  

<div>  

  <section class="questionareset">
	
    <div class="container">
      <div class="scrorecount">
        <div class="backleft">
          <a href="https://tinder.knowthevaccine.com/"><i class="fas fa-chevron-left"></i></a>
        </div>
        
        <div class="scoreright">
          <p>Score:</p>
          <p class="numberct">{{score}}/{{count}}</p>
        </div>
      </div>
      
      <div class="questioncrds">
			<img src="../assets/images/iconsgames/Myth_or_Fact_Sticke.svg" class="fnfacts">
			
     
            <div class="cblk">
                 <div
                    v-if="current"
                    style="z-index: 3"
                    class="fixed fixed--center"
                    :class="{ 'transition': isVisible }">
                    <Vue2InteractDraggable
                    v-if="isVisible"
                    :interact-out-of-sight-x-coordinate="500"
                    :interact-max-rotation="10"
                    :interact-x-threshold="200"
                    :interact-y-threshold="200"
                    :interact-event-bus-events="interactEventBus"
                    interact-block-drag-down 
                    interact-block-drag-up
                    interact-lock-y-axis
                    @draggedRight="emitAndNext('match',current)"
                    @draggedLeft="emitAndNext('reject',current)"
                    class="cardd cardd--one fixed fixed--center"
                    >

                    <div class="cardssets-swipe" id="cardssets-swipe">
                    <div class="quizcontent">

                    <img id="mmt" style="display:none;" src="../assets/images/iconsgames/facts.svg" class="factsbadges">
				            <img id="mmtn" style="display:none;" src="../assets/images/iconsgames/mytht.svg" class="mythsbadges"> 
            
                        <p>{{current.name}}</p>
                        <img
                        :src="require(`../assets/images/iconsgames/${current.src}`)"
                        class="riconqst"/>
                    </div>
                    </div>

                    </Vue2InteractDraggable>
                </div>


                <div
                v-if="next"
                class="cardd cardd--two fixed fixed--center"
                style="z-index: 2">
                <div class="cardssets-swipe">
                    <div class="quizcontent">
                        <p>{{next.name}}</p>
                        <img
                        :src="require(`../assets/images/iconsgames/${next.src}`)"
                        class="riconqst"/>
                    </div>
                    </div>
                </div>

                <div
                v-if="index + 2 < cards.length"
                class="cardd cardd--three fixed fixed--center"
                style="z-index: 1">
                 <div class="cardssets-swipe">
                    <div class="quizcontent">
                        <p>{{next.name}}</p>
                        <img
                        :src="require(`../assets/images/iconsgames/${next.src}`)"
                        class="riconqst"/>
                    </div>
                    </div>
                </div>
            </div>
			
			<div class="actionctas">
				<button class="btnctas" @click="reject">
				<img src="../assets/images/iconsgames/Myth.svg">
				<img src="../assets/images/iconsgames/Myth Tooltip.svg" v-bind:class="{ active: isActive }" class="tooltpsshow">
				</button>
				<button class="btnctas" @click="match">
				<img src="../assets/images/iconsgames/Fact.svg">
				<img src="../assets/images/iconsgames/Fact Tooltip.svg" v-bind:class="{ active: isActive }" class="tooltpsshow">
				</button>


			</div>
			
		</div>
		
		
	</div>
</section>

</div>



 
</template>
<script>
import { Vue2InteractDraggable, InteractEventBus } from 'vue2-interact';

const EVENTS = {
  MATCH: 'match',
  REJECT: 'reject'
}

export default {
  name: 'Game',
  props: ['cards'],
  components: { Vue2InteractDraggable },
  data() {
    return {
      isActive: false,
      display:false,  
      component:"Results",
      isVisible: true,
      index: 0,
      inx: 0,
      score: 0,
      interactEventBus: {
        draggedRight: EVENTS.MATCH,
        draggedLeft: EVENTS.REJECT,
      },
      matcharray: {
        correct: [],
        incorrect: [],
      },
    }
  },
  computed: {
    count() {
      return this.cards.length
    },
    getindex(){
      return this.index
    },
    current() {
      return this.cards[this.index]
    },
    next() {
      return this.cards[this.index + 1]
    }
  },
  methods: {
   
    match() {
      InteractEventBus.$emit(EVENTS.MATCH);
    },
    reject() {
      InteractEventBus.$emit(EVENTS.REJECT);
    },
    emitAndNext(event,current) {

    console.log('sdfsdf');
        
      if(current.type == "fact" && event == "match"){
          
          this.score++;
          this.matcharray.correct.push(current);

      }else if(current.type == "myth" && event == "reject"){
          
          this.score++;
          this.matcharray.correct.push(current);

      }else{

          this.matcharray.incorrect.push(current);

      }

      this.$emit(event, { index: this.index, card_d: current });
      setTimeout(() => this.isVisible = false, 200);
      setTimeout(() => {
        this.index++
        this.isVisible = true
      }, 200);

      this.inx++;
      this.$emit('clicked', this.inx);
      this.$emit('score_data', this.score);
      this.$emit('matcharray', this.matcharray);
    },
    computedOpacity: function () {

      var v = this;
      this.isActive = true;

      setTimeout(() => {
          v.isActive = false;           
       }, 3500, v );
    
    }
  },
  mounted: function(){
     this.computedOpacity()
 }
  
}
</script>

<style scoped>

/* #mmt{
    display: block !important;
} */

.dmt{
    display: block !important;
}

.cblk{
    display: flex;
    justify-content: center;
}

 .actionctas {
    margin-top: 3em;
}

.active{
  opacity: 1 !important;
}


</style>