<template>
  <div class=" flex justify-center">
    <p v-if="$fetchState.pending">Fetching products...</p>
    <div v-else-if="$fetchState.error">An error occurred :(</div>
    <div v-else>
      <h1 class=" text-center">Products</h1>
      <ul class=" space-y-2">
        <li v-for="product in products" :key="product.id" >
            <ProductPreview :name="product.name" :image="product.image" :price="product.price" :description="product.description"  />
        </li>
      </ul>
      <button @click="$fetch">Refresh</button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        products: []
      }
    },
    async fetch() {
      this.products = await fetch(
        'https://trustbackend.herokuapp.com'
      ).then(res => res.json())
    }
  }
</script>