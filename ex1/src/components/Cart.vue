<template>
    <div>
        <h1> Card </h1>
        <cart-item v-for="item in cart_data" :key="item.article" :cart_item="item"/>
    </div>
</template>

<script>
import CartItem from '@/components/CartItem'


export default {
    name: 'Cart',
    components: { CartItem },
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>