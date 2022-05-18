<template>
    <div>
        <TheHeader />
        <ProductPreview :name="this.product.name" :price="this.product.price" :description="this.product.description"  />
    </div>
</template>

<script>
export default {
    data (){
        return {
            product: {
                name: "Test",
                image : "",
                description: "A test product",
                price: 250,
                category: "test"
            }
        }
    }
}
</script>