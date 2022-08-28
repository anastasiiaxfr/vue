<template>
  <div>
    <h1>Cart</h1>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteCart(index)"
    ></CartItem>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import {mapActions} from 'vuex'

export default {
  name: "Cart",
  components: { CartItem },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteCart(index){
        this.DELETE_FROM_CART(index)
    },
  },
};
</script>

<style lang="sass" scoped>
</style>