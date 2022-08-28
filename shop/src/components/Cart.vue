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
    deleteCart(index){},
  },
};
</script>

<style lang="sass" scoped>
</style>