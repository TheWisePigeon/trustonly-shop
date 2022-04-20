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
        cartTotal() {
            return this.products.reduce((acc, item) => {
                return acc + item.price
            }, 0)
        }
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
        },
        remove(id) {
            this.$store.dispatch("removeFromCart", id)
            this.products.splice(this.products.findIndex(product => product._id === id), 1)
        },
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
    <div class=" p-3 ">
        <h1 class=" text-xl">Your cart: {{ cartCount }} items </h1>
        <div v-for="item in products" :key="item._id">
            <cart-item :product="item" @remove="remove" />
            <p> </p>
        </div>
        <hr>
        <p class=" font-bold text-center " >{{cartTotal}}$</p>
        <div class=" items-center justify-center flex text-sm ">
            <button @click="$emit('pay-now')" class=" rounded-lg text-white p-4 shadow-lg bg-green-400">
                Pay right away
            </button>
            <button @click="$emit('pay-later')" class=" rounded-lg text-white p-4 shadow-lg bg-green-400">
                Pay on delivery
            </button>
        </div>
        <div>
        </div>
    </div>
</template>