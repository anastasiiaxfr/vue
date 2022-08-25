<template>
  <main class="brands">
    <section class="pt-5">
      <b-container>
        <b-row>
          <h2 class="mb-5 pb-sm-5 text-center">Our Brands</h2>

          <div class="row col-md-9 mx-auto px-0 align-items-center px-3">
            <div class="col-12 col-md-8">
              <h3>Win as a <b>Heroic Affiliate</b> with <b>SLOTMAN</b></h3>
              <p>
                It’s your chance to win with SLOTMAN, the greatest superhero’s
                venue. Delivering a polished casino experience with every spin,
                SLOTMAN prides itself with state-of-the-art VIP programs,
                exquisite daily deals, a wide selection of games from top tier
                providers that players will simply love to try out.
              </p>
              <button class="btn" onclick="location.href='https://heroicaffiliates.com/partner/register'">Register</button>
            </div>
            <div class="col-12 col-md-4 mt-5 mt-sm-0">
              <img width="250" src="@/assets/img/slotman-logo.svg" alt="" />
            </div>
          </div>
          <div class="row col-md-9 mx-auto px-0 align-items-center px-3">
            <div class="col-12 col-md-4">
              <img width="400" src="@/assets/img/berry.png" alt="" />
            </div>
            <div class="col-12 col-md-8 order-md-1 mt-5 mt-sm-0">
              <h3>
                Meet <b>Berry Casino</b> - the most delicious online experience
              </h3>
              <p>
                Welcome to the colorful online world of fun, cool slots, and
                fresh bonuses. Berry Casino is a fruity place with juicy bonuses
                and tasty jackpots. Join us today and tell everyone about this
                place of awesomeness. Go bananas with us and it will definitely
                payback! Thank you Berry much for your attention!
              </p>
              <button class="btn" onclick="location.href='https://heroicaffiliates.com/partner/register'">Register</button>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Brands",
  components: {},
};
</script>

<style lang="sass" scoped>
$main: #deb657
h3
    margin-bottom: 25px
    color: $main
    font-weight: 900

p
    margin-bottom: 30px
    opacity: 0.6
.order-md-1
    order: -1
</style>