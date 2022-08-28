<template>
  <div>
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="catalog__link_to_cart">
        Cart: {{ CART.length }}
      </div> 
    </router-link>
  
    <h1>Catalog</h1>
    <div class="catalog">
      <CatalogItem
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        @addToCart="addToCart"
      ></CatalogItem>
    </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { CatalogItem },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data){
      this.ADD_TO_CART(data)
    }
    // async fetchTasks() {
    //   const res = await fetch("http://localhost:5000/products");
    //   const data = await res.json();
    //   return data;
    // },
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
  },
  // async created() {
  //   this.products = await this.fetchTasks();
  // },

  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
      }
    });
  },
};
</script>

<style scoped lang="sass">
.catalog
  display: flex
  flex-wrap: wrap
  &__link_to_cart
    position: absolute
    top: 10px
    right: 10px
    padding: 16px
    border: solid 1px #333
</style>
