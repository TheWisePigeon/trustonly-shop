<script>
import { products } from '../api/products'
export default {
    head:{
        title: 'TrustOnly',
        meta:{
            name: 'description'
        }
    },
    data() {
        return {
            products
        }
    },
    
}
</script>

<template>
    <div v-for="product in products" :key="product.id" class=" flex justify-center">
        <ProductPreview :name="product.name" :image="product.image" :price="product.price" />
    </div>

</template>

