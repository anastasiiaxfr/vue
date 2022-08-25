<template>
 <section class="hero">
 
    <b-container>
    <b-row class="align-items-center">
    <b-col md=6>
    
    <h1>
		JOIN HEROIC AFFILIATES AND EARN
	</h1>
    <h3 class="title_sub mb-5">
        Earn with us by attracting new players to our projects!       
    </h3>

    <button class="btn my-2" onclick="location.href='https://heroicaffiliates.com/partner/register'">
     Become a Partne
    </button>

    <button class="btn my-2" onclick="location.href='https://heroicaffiliates.com/partner/login'">
     Login
    </button>

    </b-col>
    <b-col md=6>
        <img class="hero__img" src="@/assets/img/hero.png" alt="">
    </b-col>
    </b-row>
    </b-container>

 </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Hero',
  components: {

  }
}
</script>

<style scoped lang="sass">
.hero
    padding-top: 100px
    padding-bottom: 100px
    @media only screen and (max-width: 528px) 
        padding-top: 50px
        padding-bottom: 50px

    &__img
        position: absolute
        top: 0
        bottom: 0
        z-index: 0
        margin: auto

        @media only screen and (max-width: 528px)
            display: none

</style>