<template>
    <div class="cart-item">
        <img class="cart-item__img" :src="require(`@/assets/img/${cart_item_data.image}`)" alt="">
        <div class="cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }}</p>
            <p>{{ cart_item_data.article }}</p>
        </div>
        <div class="cart-item__quantity">
            <p>Quantity:</p>
            {{ cart_item_data.quantity }}
        </div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'CartItem',
    props: {
        cart_item_data: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    data() {
        return {
            
        };
    },

    mounted() {
        this.$set(this.cart_item_data, 'quantity', 1)
    },

    methods: {
        deleteFromCart(){
            this.$emit('deleteFromCart')
        },
    },
};
</script>

<style lang="sass" scoped>
.cart-item
    display: flex
    align-items: center
    justify-content: space-between
    max-width: 600px
    padding: 20px
    margin: 20px auto
    box-shadow: 0 0 10px 1px rgba(black, .1)
    &__info
        padding: 0 25px
    img
        height: 150px
</style>