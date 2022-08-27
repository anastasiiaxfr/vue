<template>
  <div class="catalog-item">
    <img
      class="catalog-item__pic"
      :src="require(`../assets/images/${product.image}`)"
    />
    <p class="catalog-item__title">{{ product.name }}</p>
    <p class="catalog-item__price">price: {{ product.price }} ₽</p>
    <button class="catalog-item__btn" @click="addToCart">
      add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCard() {
      this.$emit('addToCart', this.product)
    },
  },
};
</script>
<style lang="sass" scoped>
.catalog-item
  display: inline-flex
  flex-direction: column
  max-width: 250px
  width: 100%
  padding: 20px
  margin: 20px
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1)

  &__pic
    height: 200px
    object-fit: contain

  button
    background-color: #4caf50
    border: 1px solid #4caf50
    color: #fff
    padding: 10px 20px
    margin-top: 15px

    p
      margin: 5px
</style>