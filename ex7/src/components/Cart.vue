<template>
  <div>
    <router-link :to="{ name: 'catalog' }">
      <div class="catalog__link_to_cart">Back to catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <CartItem
      v-for="(item, index) in cart_data"
      :key="item.article"
      :cart_item_data="item"
      @deleteFromCart="deleteCart(index)"
      @increment="increment()"
   @decrement="decrement()"
    ></CartItem>
    <div class="cart__total">
      <p>Total:</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import { mapActions } from "vuex";

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

  computes: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM",
    ]),

    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
    deleteCart(index) {
      this.DELETE_FROM_CART(index);
    },
  },
};
</script>

<style lang="sass" scoped>
</style>