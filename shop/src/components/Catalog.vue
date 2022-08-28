<template>
  <div>
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
    ...mapGetters(["PRODUCTS"]),
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
</style>
