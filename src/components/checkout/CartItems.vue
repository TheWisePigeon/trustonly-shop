<script>
import { loadScript } from '@paypal/paypal-js'
let paypal = await loadScript({ "client-id":""})


import CartItem from "./CartItem.vue"

export default {
    components: {
        'cart-item': CartItem
    },
    data() {
        return {
            cart: this.$store.state.cart,
            isLoading: false
        }
    },
    computed: {
        cartCount() {
            return this.$store.state.cart.length
        },
    },
}
</script>

<template>
    <div class=" p-2">
        <h1 class=" text-xl">Your cart: {{ cartCount }} items </h1>
        <div v-for="item in cart" :key="item.id">
            <cart-item :product="item" />
            <p> </p>
        </div>
        <div class=" text-center">
            <button class=" rounded bg-green-400 px-3">Checkout</button>
        </div>
        <div>
        </div>
    </div>
</template>