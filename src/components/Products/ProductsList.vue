<script>
import products from "../../tests/products"
import ProductItem from "./ProductItem.vue"

export default {
    components: { ProductItem },
    data() {
        return {
            products
        }
    }
    
}
</script>

<template>
    <div class="" v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
    </div>
</template>