<template>
  <section class="partners">
    <b-container>
    <b-row class="py-5 text-center">
      <h1 class="mb-5"> Partners </h1>

      <b-col md="2" v-for="partner in partners" :key="partner.title">
       <a :href="partner.link" target="_blank">
        <img  class="partners__logo" width="200" heigh="100" :src="require(`@/assets/img/partners/${partner.logo}`)" :alt="partner.title">
      </a>
      </b-col>
    
    </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Partners",
  props: {},
  data() {
    return {
      partners: [
        { logo: "AskGamblers.png", title: "AskGamblers", link: "https://www.askgamblers.com/"},
        { logo: "Guru.png", title: "Casino Guru", link: "https://casino.guru/"},
        { logo: "Guard-Dog.png", title: "Affiliate Guard Dog", link: "https://www.affiliateguarddog.com/"},
        { logo: "Latest-Casino-Bonuses.png", title: "Latest Casino Bonuses", link: "https://lcb.org/"},
        { logo: "Online-casino-Hex.png", title: "Online casino Hex", link: "https://casinohex.org/canada/"},
        { logo: "Chipy.png", title: "Chipy", link: "https://chipy.com/"},
        { logo: "Casino80.png", title: "Casino-HRY", link: "https://casino80.com/cs/"},
        { logo: "redearth.png", title: "O.C", link: "https://online.casino/affiliate-programs/heroic-affiliates/"},
        { logo: "cteam.png", title: "COC Team", link: "https://canadaonlinecasinos.com/"},
        { logo: "casinodaddy.png", title: "Casino Daddy", link: "https://casinodaddy.com/online-casinos/slotman-casino/"},
        { logo: "kaferocks.png", title: "Time2Play", link: "https://time2play.com/"},
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
  .partners
    &__logo
      max-width: 100%
      object-fit: contain
      max-width: 200px
      max-height: 100px
      margin: 20px
</style>