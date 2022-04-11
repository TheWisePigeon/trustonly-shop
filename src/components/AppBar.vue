<script>
import ShopCart from "./ShopCart.vue";
import UserProfile from "./UserProfile.vue";

export default {
  components: {
    'ShopCart': ShopCart,
    'UserProfile': UserProfile
  }
};
</script>

<template>
  <header class=" flex justify-between p-3 bg-green-500">
    <div class=" font-semibold text-xl">
      TrustOnly
    </div>
    <div class=" flex space-x-2">
      <ShopCart/>
      <UserProfile/>
    </div>
  </header>
</template>

<style scoped>
</style>
