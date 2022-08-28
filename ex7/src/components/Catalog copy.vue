<template>
  <div>
 <h1> Catalog</h1>
 <div class="catalog">
  <CatalogItem v-for="product in products" :key="product.article" :product_data="product"></CatalogItem>
  </div>
  </div>
</template>

<script>
import CatalogItem from "@/components/CatalogItem";

export default {
  components: { CatalogItem },
  data() {
    return {
        products: []
    };
  },
  methods: {
    async fetchTasks() {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    this.products = await this.fetchTasks();
  },
};
</script>

<style scoped lang="sass">
.catalog 
    display: flex
    flex-wrap: wrap
</style>
