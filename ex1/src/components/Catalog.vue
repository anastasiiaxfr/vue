<template>
  <div class="catalog">
    <h1>Catalog</h1>

    <CatalogItem
      v-for="product in PRODUCTS"
      :key="product.article"
      :product="product"
      @addToCart="addToCart"
    ></CatalogItem>

  </div>
</template>
<script>
import CatalogItem from "@/components/CatalogItem";
import {mapActions, mapGetters} from 'vuex'


export default {
  name: "Catalog",
  props: {},
  components: { CatalogItem },
  data() {
    return {
     
    };
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },
  method: {
   

    ...mapActions([
      'GET_PRODUCT_FROM_API',
      'ADD_TO_CART'
    ]),

     addToCart(data) {
      this.ADD_TO_CARD(data);
    },
  },
  mounted() {
    this.GET_PRODUCT_FROM_API()
    .then((response)=> {
      if(response.data){
      console.log('data arrived')
      }
    })
  }
};
</script>
