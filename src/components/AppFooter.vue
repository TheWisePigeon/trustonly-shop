<script>
export default {
    data(){
        return{
        
        }
    },
    computed:{
      isLoggedIn: function(){
        return this.$store.getters.isLoggedIn;
      },  
    },
}
</script>

<template>
    <footer class=" text-center bg-gray-500 text-white bottom-0 fixed w-full">
        <p>TrustOnly Shop copyright {{ new Date().getFullYear() }} </p>
    </footer>

</template>