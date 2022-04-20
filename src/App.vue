<script setup>
import AppBar from './components/AppBar.vue'
import AppFooter from './components/AppFooter.vue'
import '../tailwind/tailwind.css'
import store from './store/rootStore'

</script>

<template>
  <div >
    <AppBar/>
    <div class=" ">
        <router-view/>
    </div>
    <AppFooter/>
</div>
</template>
