<script setup>
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
import '../tailwind/tailwind.css'

</script>

<template>
  <AppBar />
  <router-view></router-view>
  <AppFooter />
</template>
