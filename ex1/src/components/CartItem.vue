<template>
    <div>
       <img
      class="catalog-item__pic"
      :src="require(`../assets/images/${cart_item.image}`)"
    />
    <p>{{ cart_item.name}}</p>
    <p>{{ cart_item.price }}</p>
    <p>{{ cart_item.article }}</p>
    <div class="cart-item__numb">{{ cart_item.numb }}</div>
    <button @click="deleteFromCart">delete</button>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cart_item: {
            type: Object,
            default(){
                return { }
            }
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        this.$set(this.cart_item, 'numb', 1)
    },

    methods: {
        deleteFromCart(){
            this.$emit("deleteFromCart")
        }
    },
};
</script>

<style lang="scss" scoped>

</style>