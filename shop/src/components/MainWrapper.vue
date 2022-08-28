<template>
  <div class="main-wrapper">
    <Catalog></Catalog>
    <Cart v-if="CART.length"
    :cart_data="CART"
    ></Cart>
  </div>
</template>    

<script>
import Catalog from "@/components/Catalog";
import Cart from "@/components/Cart";
import {mapGetters} from 'vuex'


export default {
  name: "MainWrapper",
  components: { Catalog, Cart },
  props: {},
  computed: {
    ...mapGetters(['CART'])
  },
  methods: {},
};
</script>
<style lang="sass" scoped>
</style>