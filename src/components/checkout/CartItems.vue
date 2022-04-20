<script>


import CartItem from "./CartItem.vue"

export default {
    components: {
        'cart-item': CartItem
    },
    data() {
        return {
            cart: this.$store.state.cart,
            isLoading: false,
            products: []
        }
    },
    computed: {
        cartCount() {
            return this.$store.state.cart.length
        },
    },
    methods: {
        async getItem(product) {
            return (
                await fetch("http://localhost:5000/v1/product/" + product)
                    .then(response => response.json())
                    .then(json => {
                        return json
                    })
            )
        }
    },
    mounted() {
        for (let product of this.cart) {
            this.getItem(product)
                .then(json => {
                    this.products.push(json)
                })
        }
    },
}

</script>

<template>
    <div class=" p-2">
        <h1 class=" text-xl">Your cart: {{ cartCount }} items </h1>
        <div v-for="item in products" :key="item.id">
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