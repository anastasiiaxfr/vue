<template>
  <section class="why" id="#why" v-anchor>
    <b-container>
      <b-row justify-content-center class="text-center">
        <h2 class="mb-5 pb-3"> Why Heroic Affiliates? </h2>

        <b-col md="3" v-for="item in why" :key="item.title">
       
          <figure class="why__box">
            <div class="why__pic">
              <img
                :src="require(`@/assets/img/${item.icon}`)"
                :alt="item.title"
              />
            </div>
            <figcaption class="why__desc">{{ item.title }}</figcaption>
          </figure>
       
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Why Us",
  props: {},
  data() {
    return {
      show: true,
      why: [
        { icon: "why1.png", title: "Curaçao licence" },
        { icon: "why2.png", title: "Excellent 24/7 suppor" },
        { icon: "why3.png", title: "High odds" },
        { icon: "why4.png", title: "Powerful retention" },
      ],
    };
  },
};
</script>


<style scoped lang="sass">

.why
    padding-bottom: 75px

</style>
