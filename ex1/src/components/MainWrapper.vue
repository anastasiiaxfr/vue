<template>
    <div class="main-wrapper">
        <p>{{ title }}</p>
        <catalog />
        <!-- <cart v-if="CART.length" /> -->
        <cart/>
    </div>
</template>
<script>
import Catalog from "@/components/Catalog"
import Cart from "@/components/Cart"
import {mapGetters} from "vuex"
export default {
    name: 'Main-wrapper',
    data(){
        return {
            title: 'main wrapper'
        }
    },
    components: { Catalog, Cart },
    computed: {
        ...mapGetters([
            'CART'
        ])
    },
    methods: {},
    watch: {},
    mounted(){}
}
</script>

<style lang="sass" scoped>
    .v-main-wrapper
        display: flex
        align-items: center
        justify-content: center
        max-width: 900px
        margin: 0 auto
</style>
