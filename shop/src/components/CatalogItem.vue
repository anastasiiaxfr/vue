<template>
  <div class="catalog-item">
    <img class="catalog-item__img" height="200" :src="require(`@/assets/img/${product_data.image}`)" alt="" />
    <p>{{ product_data.name }}</p>
    <p>{{ product_data.price | toFix  }}</p>
    <p>{{ product_data.category }}</p>
    <p>{{ product_data.article }}</p>
    <button @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
import toFix from "@/components/filters/toFix";

export default {
  name: "CatalogItem",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {};
  },

  filters: {
    toFix,
    
  },

  mounted() {

    
  },
  computed: {

  },
  methods: {
   addToCart(){
    this.$emit('addToCart', this.product_data)
   }
  },
};
</script>

<style lang="sass" scoped>
.catalog-item
  display: inline-flex
  flex-direction: column
  justify-content: flex-start
  min-width: 200px
  margin: 20px
  padding: 20px
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.1)
  &__img
    object-fit: contain
  p
    margin: 5px 
</style>