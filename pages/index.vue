<script>
import { products } from '../api/products'
export default {
    data() {
        return {
            products
        }
    }
}
</script>

<template>
    <div v-for="product in products" :key="product.id" >
        {{product.name}}
    </div>

</template>

