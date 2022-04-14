<script>
export default {

}
</script>

<template>
    <div >
        <router-link to="/cart">
            <div class=" bg-red-500 text-white font-bold px-1 rounded">
                {{this.$store.state.cart.length}}
            </div>
        </router-link>
    </div>
</template>
