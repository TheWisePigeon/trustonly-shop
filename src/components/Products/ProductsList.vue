<script>
import ProductItem from "./ProductItem.vue"

export default {
    components: { ProductItem },
    data() {
        return {
            products: null,
            isLoading: false
        }
    },
    methods: {
        async fetchProducts() {
            this.isLoading = true
            fetch("http://localhost:5000/v1/products")
                .then(response => response.json())
                .then(json => {
                    this.products = json
                })
            this.isLoading = false
        }
    },
    mounted() {
        this.fetchProducts()
    },

}
</script>

<template>
    <div v-if="isLoading" class="flex items-center justify-center space-x-2">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-center" role="status">
            <span class="visually-hidden">. . .</span>
        </div>
    </div>
    <div v-else class=" flex justify-center" v-for="product in products" :key="product._id">
        <ProductItem :product="product" />
    </div>
</template>