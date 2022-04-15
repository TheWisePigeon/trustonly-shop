<script>
import ShopCart from "./ShopCart.vue";
import UserProfile from "./userComps/UserAvatar.vue";
import UserSettingsVue from './userComps/UserSettings.vue';

export default {
  components: {
    'ShopCart': ShopCart,
    'UserProfile': UserProfile,
    'UserSettings': UserSettingsVue,
  }
};
</script>

<template>
  <header class=" flex justify-between p-3 bg-green-500 shadow-lg mb-2">
    <div class=" font-semibold text-xl">
      <router-link to="/">
        TrustShop
      </router-link>
    </div>
    <div class=" flex space-x-2">
      <ShopCart/>
      <UserProfile v-if="!this.$store.state.isLoggedIn"/>
      <UserSettings v-if="this.$store.state.isLoggedIn"/>
    </div>
  </header>
</template>


