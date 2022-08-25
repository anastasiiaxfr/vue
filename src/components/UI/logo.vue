<template>
  <router-link to="/">
    <img :width="width" src="@/assets/logo.png" alt="HeroicAffiliates" />
  </router-link>
</template>
<script>
  export default {
    name: "Logo",
    props: ['width']
  }
</script>
