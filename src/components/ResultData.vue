<template>


    <div>

        <section class="questionareset">
            <div class="container">
                <div class="scrorecount">
                    <div class="backleft">
                        <a href="#"><i class="fas fa-chevron-left"></i></a>
                    </div>

                    <div class="scoreright">
                        <p>Score:</p>
                        <p class="numberct">{{score}}/5</p>
                    </div>
                </div>

                <div class="questioncrds">
                    <img src="../assets/images/iconsgames/finalscore.png" class="fnfacts">

                    <div class="finalresshows">

                        <img :src="require(`../assets/images/iconsgames/${getresultimage}`)" />

                    </div>


                    <div class="onmobshow" @click="viewresults">
                        <img src="../assets/images/iconsgames/viewresult.png">
                    </div>

                    <div class="socialshare">
                        <p>Tell your friends:</p>
                        <ul>

                            <li><a href="https://wa.me/?text=https://tinder.knowthevaccine.com" target="_blank"><img src="../assets/images/iconsgames/Whatsapp.svg"></a></li>
                            <li><a href="http://twitter.com/share?text=url=https://tinder.knowthevaccine.com"><img src="../assets/images/iconsgames/Twitter.svg"></a></li>
                            <li><a href="'https://www.facebook.com/sharer/sharer.php?u=https://tinder.knowthevaccine.com/"><img src="../assets/images/iconsgames/FB.svg"></a></li>

                        </ul>
                    </div>




                    <div class="actionctas btmmarg">
                        <a href="https://tinder.knowthevaccine.com" class="gradients">
                            Know More
                        </a>



                        <a href="/" class="gradients ">
                            Play Again
                        </a>



                    </div>

                    <div class="actionctas btmmarg  mobileshows">
                        <div class="row">
                            <div class="col-lg-6 col-6">

                                <a href="https://tinder.knowthevaccine.com/" class="gradients">
                                    Know More
                                </a>

                            </div>
                            <div class="col-lg-6 col-6">
                                <a href="/" class="gradients">
                                    Play Again
                                </a>
                            </div>

                        </div>
                    </div>


                </div>


            </div>
        </section>




    </div>




</template>
<script>

    export default {
        name: 'ResultData',
        props: ['score'],
        data() {
            return {
                image:"0_5.svg"
            }
        },
        computed: {
            getresultimage(){

                if(this.score == 0){
                    return this.image = "0_5.svg";
                }

                if(this.score == 1){
                    return this.image = "1_5.svg";
                }

                if(this.score == 2){
                    return this.image = "2_5.svg";
                }

                if(this.score == 3){
                    return this.image = "3_5.svg";
                }

                if(this.score == 4){
                    return this.image = "4_5.svg";
                }

                if(this.score == 5){
                    return this.image = "5_5.svg";
                }

            }
        },
        methods: {
            viewresults(){
                this.$emit('clicked', "ScoreCard");
            },
            goToHome(){
                this.$router.push('/');
            }
        }

    }
</script>

<style scoped>

</style>
