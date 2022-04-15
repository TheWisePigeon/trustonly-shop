<script>
export default {
    computed: {
        cartCount() {
            return this.$store.state.cart.length
        },
    },
}

</script>

<template>
    <div>
        <router-link to="/cart">
            <div class=" bg-red-500 text-white font-bold px-1 rounded">
                {{ cartCount }}
            </div>
        </router-link>
    </div>
</template>
