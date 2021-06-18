<template>
  
<div>  

  <section class="questionareset">
	<div class="container">
		<div class="scrorecount">
			<div class="backleft">
				<a @click="goBack" href="#"><i class="fas fa-chevron-left"></i></a>
			</div>
			
			<div class="scoreright">
				<p>Score:</p>
				<p class="numberct">{{score}}/5</p>
			</div>
		</div>
		
		<div class="questioncrds">
			<img src="../assets/images/iconsgames/stickermyfact.png" class="fnfacts">
			
			<div class="finalresshows tablemythfcts">


				<div class="questset " v-for="(matcharraydata,index) in matcharraydata.correct" :key="index">
					<p>{{matcharraydata.name}}</p> <span>{{matcharraydata.type}} <img src="../assets/images/iconsgames/Right.svg"></span>
				</div>

                <div class="questset correctred" v-for="(matcharraydatain,index) in matcharraydata.incorrect" :key="index">
					<p>{{matcharraydatain.name}}</p> <span>{{matcharraydatain.type}} <img src="../assets/images/iconsgames/Wrong.svg"></span>
				</div>
				
				
				
			</div>
			
			<div class="socialshare">
				<p>Tell your friends:</p>
				<ul>
					  <li><a href="https://wa.me/?text=https://tinder.knowthevaccine.com" target="_blank"><img src="../assets/images/iconsgames/Whatsapp.svg"></a></li>
                      <li><a href="http://twitter.com/share?text=url=https://tinder.knowthevaccine.com"><img src="../assets/images/iconsgames/Twitter.svg"></a></li>
                      <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://tinder.knowthevaccine.com/"><img src="../assets/images/iconsgames/FB.svg"></a></li>

				</ul>
			</div>
			
			
			<div class=" btmmarg twsets">
				
				<div class="row"> 
				
				<div class="col-lg-6 col-6">
				<a  href="/quiz" class="gradients">
					Play Again
				</a>
				</div>
				<div class="col-lg-6 col-6">
				<a href="https://tinder.knowthevaccine.com" class="gradients">
					Know More
				</a>
				</div>
				</div>
			</div>
			
			
			
			
		</div>
		
		
	</div>
</section>

<footer class="footerbottoms text-center">
<div class="container">
	<p>A panel of licensed medical experts working with <img src="../assets/images/iconsgames/PharmEasy.svg"> to spread health awareness</p>
</div>
</footer>


</div>

</template>
<script>

export default {
    name: 'ScoreCard',
    props: ['score','matcharraydata'],
	methods: {
		handleStyles: function () {

			document.body.className = 'testblock'
		
		},
		goBack(){
			this.$emit('goback', 'goback');
		}
	},
	mounted () {
      this.handleStyles()
    },

}
</script>

<style >

@media screen and (max-width: 767px) and (min-width: 320px)
{
body {
    overflow: unset;
}
}

</style>
